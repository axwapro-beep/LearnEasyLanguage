-- Update 1: Fortschritt pro Sprache (Portugiesisch bleibt in "state")
alter table public.app_users add column if not exists lang_states jsonb not null default '{}'::jsonb;
create or replace function public.app_load_lang(p_token text, p_lang text) returns json
language plpgsql security definer set search_path = public, extensions as $$
declare u uuid := app_uid(p_token); r app_users;
begin
if p_lang !~ '^[a-z]{2}$' then raise exception 'Ungültige Sprache.' using errcode = 'P0001'; end if;
update app_users set last_login = now() where id = u and (last_login is null or last_login < now() - interval '1 hour');
select * into r from app_users where id = u;
return json_build_object('username', r.username, 'is_admin', r.is_admin, 'state', r.lang_states -> p_lang);
end $$;
create or replace function public.app_save_lang(p_token text, p_lang text, p_state jsonb) returns void
language plpgsql security definer set search_path = public, extensions as $$
declare u uuid := app_uid(p_token);
begin
if p_lang !~ '^[a-z]{2}$' or p_lang = 'pt' then raise exception 'Ungültige Sprache.' using errcode = 'P0001'; end if;
if p_state is null or jsonb_typeof(p_state) <> 'object' then raise exception 'Ungültige Daten.' using errcode = 'P0001'; end if;
if octet_length(p_state::text) > 3000000 then raise exception 'Fortschritt zu groß zum Speichern.' using errcode = 'P0001'; end if;
update app_users set lang_states = jsonb_set(lang_states, array[p_lang], p_state, true) where id = u;
end $$;
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
coalesce((u.state->'stats'->>'sessions')::numeric, 0)::int as sessions,
(select coalesce(json_object_agg(k, coalesce((v->>'xp')::numeric, 0)::int), '{}'::json) from jsonb_each(u.lang_states) as t(k, v)) as langs
from app_users u
) x;
return res;
end $$;
revoke execute on function public.app_load_lang(text, text), public.app_save_lang(text, text, jsonb) from public;
grant execute on function public.app_load_lang(text, text), public.app_save_lang(text, text, jsonb), public.app_admin_users(text) to anon, authenticated;
