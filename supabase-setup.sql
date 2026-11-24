-- ============================================================
-- Português – Konten mit Benutzername & Passwort
-- Einmal komplett im Supabase „SQL Editor“ ausführen.
-- WICHTIG: In der nächsten Zeile deinen Admin-Benutzernamen eintragen
-- (klein geschrieben). Wer sich mit diesem Namen registriert, ist Admin.
-- ============================================================

create extension if not exists pgcrypto with schema extensions;

create table if not exists public.app_config (
  id int primary key default 1 check (id = 1),
  admin_username text not null
);
insert into public.app_config (id, admin_username) values (1, 'daniel')
  on conflict (id) do update set admin_username = excluded.admin_username;

create table if not exists public.app_users (
  id uuid primary key default gen_random_uuid(),
  username text not null unique,
  pw_hash text not null,
  is_admin boolean not null default false,
  created_at timestamptz not null default now(),
  last_login timestamptz,
  failed int not null default 0,
  locked_until timestamptz,
  state jsonb,
  state_updated timestamptz
);

create table if not exists public.app_sessions (
  token_hash text primary key,
  user_id uuid not null references public.app_users(id) on delete cascade,
  created_at timestamptz not null default now(),
  last_used timestamptz not null default now()
);

-- Niemand darf die Tabellen direkt lesen oder schreiben, nur über die Funktionen unten.
alter table public.app_config enable row level security;
alter table public.app_users enable row level security;
alter table public.app_sessions enable row level security;
revoke all on public.app_config, public.app_users, public.app_sessions from anon, authenticated;

-- ---------- interne Helfer ----------
create or replace function public.app_hash_token(p_token text) returns text
language sql immutable set search_path = public, extensions as $$
  select encode(extensions.digest(coalesce(p_token, ''), 'sha256'), 'hex');
$$;

create or replace function public.app_new_session(p_user uuid) returns text
language plpgsql security definer set search_path = public, extensions as $$
declare t text := encode(extensions.gen_random_bytes(32), 'hex');
begin
  insert into app_sessions(token_hash, user_id) values (app_hash_token(t), p_user);
  return t;
end $$;

create or replace function public.app_uid(p_token text) returns uuid
language plpgsql security definer set search_path = public, extensions as $$
declare u uuid;
begin
  update app_sessions set last_used = now()
   where token_hash = app_hash_token(p_token)
   returning user_id into u;
  if u is null then raise exception 'Sitzung abgelaufen. Bitte neu anmelden.' using errcode = 'P0001', hint = 'session'; end if;
  return u;
end $$;

create or replace function public.app_admin_uid(p_token text) returns uuid
language plpgsql security definer set search_path = public, extensions as $$
declare u uuid := app_uid(p_token);
begin
  if not exists (select 1 from app_users where id = u and is_admin) then
    raise exception 'Nur für den Admin.' using errcode = 'P0001';
  end if;
  return u;
end $$;

create or replace function public.app_check_pw(p text) returns void
language plpgsql immutable as $$
begin
  if p is null or length(p) < 6 then raise exception 'Das Passwort braucht mindestens 6 Zeichen.' using errcode = 'P0001'; end if;
  if length(p) > 72 then raise exception 'Das Passwort ist zu lang (höchstens 72 Zeichen).' using errcode = 'P0001'; end if;
end $$;

-- ---------- öffentliche Funktionen (von der App aufgerufen) ----------
create or replace function public.app_register(p_username text, p_password text) returns json
language plpgsql security definer set search_path = public, extensions as $$
declare n text := lower(trim(coalesce(p_username, ''))); u uuid; adm boolean;
begin
  if n !~ '^[a-z0-9._-]{3,20}$' then
    raise exception 'Benutzername: 3–20 Zeichen, nur Buchstaben a–z, Zahlen, Punkt, Minus oder Unterstrich.' using errcode = 'P0001';
  end if;
  perform app_check_pw(p_password);
  if exists (select 1 from app_users where username = n) then
    raise exception 'Dieser Benutzername ist schon vergeben.' using errcode = 'P0001';
  end if;
  adm := n = (select admin_username from app_config where id = 1);
  insert into app_users(username, pw_hash, is_admin, last_login)
    values (n, extensions.crypt(p_password, extensions.gen_salt('bf', 10)), adm, now())
    returning id into u;
  return json_build_object('token', app_new_session(u), 'username', n, 'is_admin', adm);
end $$;

create or replace function public.app_login(p_username text, p_password text) returns json
language plpgsql security definer set search_path = public, extensions as $$
declare n text := lower(trim(coalesce(p_username, ''))); r app_users;
begin
  select * into r from app_users where username = n;
  if r.id is null then raise exception 'Benutzername oder Passwort falsch.' using errcode = 'P0001'; end if;
  if r.locked_until is not null and r.locked_until > now() then
    raise exception 'Zu viele Fehlversuche. Bitte in ein paar Minuten nochmal.' using errcode = 'P0001';
  end if;
  if r.pw_hash <> extensions.crypt(coalesce(p_password, ''), r.pw_hash) then
    update app_users set failed = failed + 1,
      locked_until = case when failed + 1 >= 5 then now() + interval '5 minutes' else null end where id = r.id;
    -- kein raise hier, sonst würde der Fehlversuch-Zähler zurückgerollt
    return json_build_object('error', 'Benutzername oder Passwort falsch.');
  end if;
  update app_users set failed = 0, locked_until = null, last_login = now() where id = r.id;
  delete from app_sessions where user_id = r.id and last_used < now() - interval '180 days';
  return json_build_object('token', app_new_session(r.id), 'username', r.username, 'is_admin', r.is_admin);
end $$;

create or replace function public.app_load(p_token text) returns json
language plpgsql security definer set search_path = public, extensions as $$
declare u uuid := app_uid(p_token); r app_users;
begin
  update app_users set last_login = now() where id = u and (last_login is null or last_login < now() - interval '1 hour');
  select * into r from app_users where id = u;
  return json_build_object('username', r.username, 'is_admin', r.is_admin, 'state', r.state);
end $$;

create or replace function public.app_save(p_token text, p_state jsonb) returns void
language plpgsql security definer set search_path = public, extensions as $$
declare u uuid := app_uid(p_token);
begin
  if p_state is null or jsonb_typeof(p_state) <> 'object' then raise exception 'Ungültige Daten.' using errcode = 'P0001'; end if;
  if octet_length(p_state::text) > 3000000 then raise exception 'Fortschritt zu groß zum Speichern.' using errcode = 'P0001'; end if;
  update app_users set state = p_state, state_updated = now() where id = u;
end $$;

create or replace function public.app_logout(p_token text) returns void
language sql security definer set search_path = public, extensions as $$
  delete from app_sessions where token_hash = app_hash_token(p_token);
$$;

create or replace function public.app_change_password(p_token text, p_old text, p_new text) returns void
language plpgsql security definer set search_path = public, extensions as $$
declare u uuid := app_uid(p_token); h text;
begin
  select pw_hash into h from app_users where id = u;
  if h <> extensions.crypt(coalesce(p_old, ''), h) then raise exception 'Das aktuelle Passwort stimmt nicht.' using errcode = 'P0001'; end if;
  perform app_check_pw(p_new);
  update app_users set pw_hash = extensions.crypt(p_new, extensions.gen_salt('bf', 10)) where id = u;
  delete from app_sessions where user_id = u and token_hash <> app_hash_token(p_token);
end $$;

-- ---------- Admin ----------
create or replace function public.app_admin_users(p_token text) returns json
language plpgsql security definer set search_path = public, extensions as $$
declare res json;
begin
  perform app_admin_uid(p_token);
  select coalesce(json_agg(x order by x.last_login desc nulls last), '[]'::json) into res from (
    select u.username, u.is_admin, u.created_at, u.last_login,
      coalesce((u.state->>'xp')::numeric, 0)::int as xp,
      coalesce((u.state->'stats'->>'streak')::numeric, 0)::int as streak,
      u.state->'stats'->>'lastDay' as last_day,
      case when jsonb_typeof(u.state->'vocab') = 'array'
        then (select count(*) from jsonb_array_elements(u.state->'vocab') e
              where jsonb_typeof(e) = 'object' and coalesce(e->>'box', '0') ~ '^[0-9]+$' and (e->>'box')::int >= 1)
        else 0 end::int as words,
      case when jsonb_typeof(u.state->'path'->'done') = 'object'
        then (select count(*) from jsonb_object_keys(u.state->'path'->'done')) else 0 end::int as stations,
      coalesce((u.state->'stats'->>'sessions')::numeric, 0)::int as sessions
    from app_users u
  ) x;
  return res;
end $$;

create or replace function public.app_admin_reset_password(p_token text, p_username text, p_new text) returns void
language plpgsql security definer set search_path = public, extensions as $$
declare t uuid;
begin
  perform app_admin_uid(p_token);
  perform app_check_pw(p_new);
  select id into t from app_users where username = lower(trim(p_username));
  if t is null then raise exception 'Benutzer nicht gefunden.' using errcode = 'P0001'; end if;
  update app_users set pw_hash = extensions.crypt(p_new, extensions.gen_salt('bf', 10)), failed = 0, locked_until = null where id = t;
  delete from app_sessions where user_id = t;
end $$;

create or replace function public.app_admin_delete_user(p_token text, p_username text) returns void
language plpgsql security definer set search_path = public, extensions as $$
declare me uuid := app_admin_uid(p_token); t uuid;
begin
  select id into t from app_users where username = lower(trim(p_username));
  if t is null then raise exception 'Benutzer nicht gefunden.' using errcode = 'P0001'; end if;
  if t = me then raise exception 'Dein eigenes Admin-Konto kannst du hier nicht löschen.' using errcode = 'P0001'; end if;
  delete from app_users where id = t;
end $$;

-- ---------- Rechte ----------
revoke execute on all functions in schema public from public, anon, authenticated;
grant execute on function
  public.app_register(text, text), public.app_login(text, text), public.app_load(text),
  public.app_save(text, jsonb), public.app_logout(text), public.app_change_password(text, text, text),
  public.app_admin_users(text), public.app_admin_reset_password(text, text, text), public.app_admin_delete_user(text, text)
  to anon, authenticated;
