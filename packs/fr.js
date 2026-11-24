/* ===== Sprachpaket: Französisch (Frankreich) =====
   Norm: Académie française, Le Robert / Larousse; Niveaus: Référentiels CECRL. Siehe QUELLEN.md. */
LEL_PACKS.fr = (function(){
const avPC = p => `j'ai ${p},as ${p},a ${p},avons ${p},avez ${p},ont ${p}`;
const etPC = p => `suis ${p}(e),es ${p}(e),est ${p}(e),sommes ${p}(e)s,êtes ${p}(e)(s),sont ${p}(e)s`;
const imp = (s, v) => `${v ? "j'" + s : s}ais,${s}ais,${s}ait,${s}ions,${s}iez,${s}aient`;
const fut = (s, v) => `${v ? "j'" + s : s}ai,${s}as,${s}a,${s}ons,${s}ez,${s}ont`;
return {
LANG: {code:"fr", flag:"🇫🇷", name:"Französisch", adj:"Französisch (Frankreich)", inLang:"Französisch", into:"ins Französische",
  country:"Frankreich", voiceFrom:"aus Frankreich", tts:"fr-FR", ttsRe:/^fr[-_]FR/i, prefix:"fr",
  voicePath:"Französisch → Frankreich", status:"A1 · Abschnitt 1 von 6", tutor:false},
ART_RE: /^(le|la|les|un|une|des|der|die|das|ein|eine|einen) /,
F_RE: /am[ée]lie|audrey|aur[ée]lie|marie|virginie|julie|female|femme|woman/i,
M_RE: /thomas|nicolas|paul|henri|\bmale\b|homme|\bman\b/i,
FUNC: ["le","la","les","un","une","des","de","du","à","au","en","et","ne","pas","je","tu","il","elle","que","pour","avec"],
LEVEL_NAMES: {A1:"Absolute Grundlagen",A2:"Einfache Gespräche & Alltag",B1:"Selbstständig kommunizieren",B2:"Flüssiger sprechen",C1:"Fortgeschrittenes Französisch"},
CURRICULUM: {
 A1:[["A1-01","Begrüßen & sich vorstellen","bonjour, je m'appelle …, tu vs. vous"],["A1-02","Aussprache","stumme Endungen, Nasale, Liaison"],["A1-03","Artikel & Geschlecht","le / la / l' / les, un / une / des"],["A1-04","être & avoir","je suis, j'ai – die zwei wichtigsten Verben"],["A1-05","Verben auf -er","parler, habiter, travailler"],["A1-06","Verneinung","ne … pas, ne … rien, ne … jamais"],["A1-07","Fragen","Intonation, est-ce que, Fragewörter"],["A1-08","Zahlen & Uhrzeit","0–100, quelle heure est-il ?"],["A1-T","A1-Abschlusstest","Prüfung über alle A1-Themen"]],
 A2:[["A2-01","Passé composé","j'ai mangé, je suis allé(e)"],["A2-02","Imparfait","Gewohnheiten und Beschreibungen"],["A2-03","Futur proche","je vais partir"],["A2-04","Reflexive Verben","se lever, s'appeler"],["A2-T","A2-Abschlusstest","Prüfung über alle A2-Themen"]],
 B1:[["B1-01","Passé composé vs. imparfait","erzählen"],["B1-02","Subjonctif présent","il faut que tu viennes"],["B1-03","Pronomen y und en","j'y vais, j'en veux"],["B1-T","B1-Abschlusstest","Prüfung über alle B1-Themen"]],
 B2:[["B2-01","Conditionnel & si-Sätze","si j'avais le temps …"],["B2-02","Indirekte Rede","il a dit qu'il viendrait"],["B2-T","B2-Abschlusstest","Prüfung über alle B2-Themen"]],
 C1:[["C1-01","Stil & Register","soutenu, courant, familier"],["C1-02","Komplexe Satzgefüge","Konnektoren, Nominalstil"],["C1-T","C1-Abschlusstest","Prüfung über alle C1-Themen"]]
},
SCENARIOS: [["☕","Au café","Bestelle einen Kaffee und ein Croissant"],["🛒","Au supermarché","Frag nach Produkten, Preisen und bezahle"],["📞","Au téléphone","Reserviere einen Tisch im Restaurant"],["🍻","Entre amis","Verabrede dich für den Abend"],["👨‍👩‍👧","En famille","Lerne die Familie eines Freundes kennen"],["🧭","Dans la rue","Frag nach dem Weg zur Metro"],["💊","À la pharmacie","Beschreibe Beschwerden und kauf etwas"],["🏨","À l'hôtel","Check-in und Fragen an der Rezeption"],["🏠","Avec le voisin","Smalltalk mit dem Nachbarn"],["🎲","Conversation libre","Freies Gespräch auf deinem Niveau"]],
SCEN_DE: ["Im Café","Im Supermarkt","Am Telefon","Mit Freunden","Mit der Familie","Auf der Straße","In der Apotheke","Im Hotel","Mit dem Nachbarn","Freies Gespräch"],
STARTER_VOCAB: [["bonjour","guten Tag / hallo"],["bonsoir","guten Abend"],["salut","hallo (locker)"],["je m'appelle …","ich heiße …"],["ça va ?","wie geht's?"],["merci","danke"],["s'il vous plaît","bitte (höflich)"],["pardon","Entschuldigung"],["oui","ja"],["non","nein"],["au revoir","auf Wiedersehen"]],
INITIAL_CHAT: [{role:"assistant", content:"Bonjour ! Hier lernst du Französisch, wie man es in Frankreich spricht 🇫🇷\n\nFang einfach mit der ersten Lektion im Lernpfad an."}],
THEMES: [
 {id:"gruss",e:"👋",name:"Begrüßung & Höflichkeit",level:"A1",w:`bonjour|guten Tag / hallo
bonsoir|guten Abend
salut|hallo / tschüss (locker)
au revoir|auf Wiedersehen
à bientôt|bis bald
à demain|bis morgen
à tout à l'heure|bis nachher
bonne nuit|gute Nacht
ça va ?|wie geht's?
ça va bien|es geht gut
merci|danke
merci beaucoup|vielen Dank
de rien|gern geschehen
s'il vous plaît|bitte (höflich)
s'il te plaît|bitte (zu Freunden)
pardon|Entschuldigung
excusez-moi|entschuldigen Sie
enchanté|freut mich (sagt ein Mann)
enchantée|freut mich (sagt eine Frau)
bienvenue|willkommen`},
 {id:"ichdu",e:"🙋",name:"Personen & Vorstellen",level:"A1",w:`je|ich
tu|du
il|er
elle|sie (Singular)
on|man / wir (umgangssprachlich)
nous|wir
vous|ihr / Sie
ils|sie (Plural, männlich oder gemischt)
elles|sie (Plural, nur Frauen)
je m'appelle|ich heiße
le prénom|der Vorname
le nom|der Name / Nachname
monsieur|Herr
madame|Frau (Anrede)
allemand|deutsch / der Deutsche
allemande|deutsch / die Deutsche
français|französisch / der Franzose
l'Allemagne|Deutschland
la France|Frankreich`},
 {id:"fragen",e:"❓",name:"Fragewörter",level:"A1",w:`qu'est-ce que ?|was?
qui ?|wer?
où ?|wo? / wohin?
d'où ?|woher?
quand ?|wann?
comment ?|wie?
combien ?|wie viel?
pourquoi ?|warum?
parce que|weil
quel|welcher
quelle|welche`},
 {id:"zahlen",e:"🔢",name:"Zahlen",level:"A1",w:`zéro|null
un|eins
deux|zwei
trois|drei
quatre|vier
cinq|fünf
six|sechs
sept|sieben
huit|acht
neuf|neun
dix|zehn
onze|elf
douze|zwölf
treize|dreizehn
quatorze|vierzehn
quinze|fünfzehn
seize|sechzehn
dix-sept|siebzehn
dix-huit|achtzehn
dix-neuf|neunzehn
vingt|zwanzig
vingt et un|einundzwanzig
trente|dreißig
quarante|vierzig
cinquante|fünfzig
soixante|sechzig
soixante-dix|siebzig
quatre-vingts|achtzig
quatre-vingt-dix|neunzig
cent|hundert
mille|tausend`},
 {id:"verben",e:"⚙️",name:"Erste Verben",level:"A1",w:`être|sein
avoir|haben
aller|gehen / fahren
faire|machen
pouvoir|können
vouloir|wollen
parler|sprechen
travailler|arbeiten
habiter|wohnen
manger|essen
boire|trinken
s'appeler|heißen
venir|kommen
savoir|wissen
voir|sehen
prendre|nehmen
dire|sagen
aimer|mögen / lieben`},
 {id:"alltag",e:"☀️",name:"Erste Alltagswörter",level:"A1",w:`oui|ja
non|nein
si|doch
d'accord|einverstanden / okay
aussi|auch
rien|nichts
jamais|nie
aujourd'hui|heute
demain|morgen
hier|gestern
ici|hier
là-bas|dort
beaucoup|viel
un peu|ein bisschen
très|sehr
bien|gut
le café|der Kaffee
l'eau|das Wasser
la bière|das Bier
le pain|das Brot
la maison|das Haus
la rue|die Straße
les toilettes|die Toilette
la gare|der Bahnhof
le frère|der Bruder
la sœur|die Schwester
l'ami|der Freund
l'amie|die Freundin`}
],
PATH_SECTIONS: [
 {id:"s1", title:"Erste Schritte", pt:"Premiers pas", level:"A1", color:"#2F6BFF", units:[
  {id:"u1", e:"👋", title:"Begrüßungen", pt:"Bonjour !", desc:"Hallo sagen, danke und bitte.",
   words:`bonjour|guten Tag / hallo
bonsoir|guten Abend
salut|hallo / tschüss (locker)
au revoir|auf Wiedersehen
à bientôt|bis bald
à demain|bis morgen
merci|danke
s'il vous plaît|bitte (höflich)
de rien|gern geschehen
ça va ?|wie geht's?`,
   sents:`Bonjour, madame !|Guten Tag! (zu einer Frau)|Begrüßung|In Frankreich grüßt man höflich mit „bonjour“ und oft mit „madame“ oder „monsieur“.
Bonsoir, ça va ?|Guten Abend, wie geht's?|Begrüßung|Vor ? und ! steht im Französischen ein schmales Leerzeichen.
Ça va bien, merci.|Es geht gut, danke.|Begrüßung|
Salut, à demain !|Tschüss, bis morgen!|Begrüßung|„Salut“ sagt man nur unter Freunden.
Au revoir et à bientôt !|Auf Wiedersehen und bis bald!|Begrüßung|
Un café, s'il vous plaît.|Einen Kaffee, bitte.|Höflichkeit|„Un café“ ist in Frankreich ein Espresso.`},
  {id:"u2", e:"🙋", title:"Sich vorstellen", pt:"Je m'appelle…", desc:"Name, Herkunft und Wohnort.",
   words:`je m'appelle|ich heiße
je suis|ich bin
tu t'appelles comment ?|wie heißt du? (locker)
tu viens d'où ?|woher kommst du? (locker)
je viens d'Allemagne|ich komme aus Deutschland
j'habite à|ich wohne in (Stadt)
enchanté|freut mich (sagt ein Mann)
enchantée|freut mich (sagt eine Frau)
le prénom|der Vorname
allemand|deutsch / Deutscher`,
   sents:`Je m'appelle Daniel.|Ich heiße Daniel.|Reflexive Verben|„s'appeler“ heißt wörtlich „sich nennen“.
Comment tu t'appelles ?|Wie heißt du?|Fragen|So fragt man im Alltag. Höflich: „Comment vous appelez-vous ?“
Je suis allemand.|Ich bin Deutscher.|être|Nationalitäten schreibt man als Adjektiv klein: allemand.
Je viens d'Allemagne.|Ich komme aus Deutschland.|Präpositionen|Vor einem Vokal wird „de“ zu „d'“.
J'habite à Berlin.|Ich wohne in Berlin.|Präpositionen|Vor Städtenamen steht „à“.
Enchantée !|Freut mich!|Begrüßung|Frauen schreiben „enchantée“ – gesprochen klingt es gleich.
Tu viens d'où ?|Woher kommst du?|Fragen|`,
   story:{title:"Im Sprachkurs", lines:`Camille|Salut ! Tu t'appelles comment ?|Hallo! Wie heißt du?
Daniel|Je m'appelle Daniel. Et toi ?|Ich heiße Daniel. Und du?
Camille|Moi, c'est Camille. Tu viens d'où ?|Ich bin Camille. Woher kommst du?
Daniel|Je viens d'Allemagne, mais j'habite à Paris.|Ich komme aus Deutschland, aber ich wohne in Paris.
Camille|Enchantée, Daniel !|Freut mich, Daniel!`, qs:`Woher kommt Daniel?|Aus Deutschland|Aus Paris|Aus Kanada
Wo wohnt Daniel?|In Paris|In Berlin|In Lyon
Was sagt Camille am Ende?|Freut mich|Bis morgen|Danke schön`}},
  {id:"u3", e:"✅", title:"Ja und Nein", pt:"Oui ou non", desc:"Zustimmen, ablehnen, verneinen.",
   words:`oui|ja
non|nein
si|doch
d'accord|einverstanden / okay
bien sûr|natürlich
aussi|auch
moi non plus|ich auch nicht
rien|nichts
jamais|nie
je ne sais pas|ich weiß nicht`,
   sents:`Oui, bien sûr.|Ja, natürlich.|Zustimmung|
Non, merci.|Nein, danke.|Verneinung|
Je ne sais pas.|Ich weiß nicht.|Verneinung|Die Verneinung umschließt das Verb: ne … pas. Im Alltag fällt „ne“ oft weg: „Je sais pas.“
Tu ne viens pas ? – Si !|Kommst du nicht? – Doch!|Zustimmung|Auf eine verneinte Frage antwortet man mit „si“ statt „oui“.
Je ne veux rien.|Ich will nichts.|Verneinung|ne … rien = nichts.
Moi non plus.|Ich auch nicht.|Verneinung|Antwort auf einen verneinten Satz – auf einen bejahten sagt man „moi aussi“.
D'accord, à demain.|Einverstanden, bis morgen.|Zustimmung|`},
  {id:"u4", e:"❓", title:"Grundlegende Fragen", pt:"Questions", desc:"Wer, was, wo, wann und wie viel?",
   words:`qu'est-ce que ?|was?
qui ?|wer?
où ?|wo? / wohin?
quand ?|wann?
comment ?|wie?
combien ?|wie viel?
pourquoi ?|warum?
parce que|weil
quel|welcher
d'où ?|woher?`,
   sents:`Qu'est-ce que c'est ?|Was ist das?|Fragen|Eine der wichtigsten Fragen überhaupt.
Où sont les toilettes ?|Wo ist die Toilette?|Fragen|„les toilettes“ steht im Französischen immer im Plural.
C'est combien ?|Wie viel kostet das?|Fragen|Im Alltag sehr üblich; formeller: „Combien ça coûte ?“
Qui est-ce ?|Wer ist das?|Fragen|
Pourquoi tu ne viens pas ?|Warum kommst du nicht?|Fragen|
Parce que je suis fatigué.|Weil ich müde bin.|être|Eine Frau schreibt „fatiguée“.
Quand commence le cours ?|Wann beginnt der Kurs?|Fragen|`},
  {id:"u5", e:"🔢", title:"Zahlen", pt:"Les nombres", desc:"Von eins bis hundert, Alter und Preise.",
   words:`un|eins
deux|zwei
trois|drei
quatre|vier
cinq|fünf
dix|zehn
vingt|zwanzig
cent|hundert
l'euro|der Euro
tu as quel âge ?|wie alt bist du?`,
   sents:`J'ai vingt ans.|Ich bin zwanzig Jahre alt.|avoir|Das Alter sagt man mit „avoir“ (haben): j'ai … ans.
Tu as quel âge ?|Wie alt bist du?|Fragen|
Ça fait cinq euros.|Das macht fünf Euro.|Zahlen|
Un, deux, trois, quatre.|Eins, zwei, drei, vier.|Zahlen|
J'ai deux frères.|Ich habe zwei Brüder.|avoir|
Soixante-dix, c'est soixante plus dix.|Siebzig ist sechzig plus zehn.|Zahlen|In Frankreich zählt man ab 70 anders: 70 = soixante-dix, 80 = quatre-vingts, 90 = quatre-vingt-dix. In Belgien und der Schweiz sagt man septante und nonante.`},
  {id:"u6", e:"🧱", title:"Einfache Sätze", pt:"Phrases simples", desc:"Ich, du, er, sie – die ersten Verben.",
   words:`je|ich
tu|du
il|er
elle|sie (Singular)
nous|wir
vous|ihr / Sie
ils|sie (Plural)
on|man / wir (umgangssprachlich)
parler|sprechen
travailler|arbeiten`,
   sents:`Je parle allemand.|Ich spreche Deutsch.|Verben auf -er|
Tu parles français ?|Sprichst du Französisch?|Fragen|Im Alltag stellt man Fragen oft nur mit der Stimme.
Elle travaille à Paris.|Sie arbeitet in Paris.|Verben auf -er|parle, parles, parle, parlent klingen alle gleich.
Nous habitons à Berlin.|Wir wohnen in Berlin.|Verben auf -er|
On va au cinéma ?|Gehen wir ins Kino?|Pronomen|„on“ ersetzt im Alltag oft „nous“. à + le = au.
Vous parlez anglais ?|Sprechen Sie Englisch?|Anrede|„vous“ ist „Sie“ und gleichzeitig „ihr“.
Il ne travaille pas aujourd'hui.|Er arbeitet heute nicht.|Verneinung|`}
 ]}
],
DIALOGS: `1|Bonjour, ça va ?|Hallo, wie geht's?|Ça va bien, merci. Et toi ?|Ça fait trois euros.|J'habite à Berlin.
1|Merci pour ton aide !|Danke für deine Hilfe!|De rien !|Je ne sais pas.|C'est combien ?
2|Comment tu t'appelles ?|Wie heißt du?|Je m'appelle Daniel.|J'ai vingt ans.|À bientôt !
2|Tu viens d'où ?|Woher kommst du?|Je viens d'Allemagne.|Je m'appelle Camille.|À huit heures.
3|Tu veux un café ?|Möchtest du einen Kaffee?|Oui, volontiers.|Je viens d'Allemagne.|J'ai deux frères.
4|Où sont les toilettes ?|Wo ist die Toilette?|Là-bas, à droite.|Ça fait cinq euros.|Je m'appelle Daniel.
5|Tu as quel âge ?|Wie alt bist du?|J'ai trente ans.|J'habite à Paris.|Ça va bien, merci.
5|C'est combien, la baguette ?|Was kostet das Baguette?|Un euro vingt.|À demain.|Je suis allemand.
6|Tu parles français ?|Sprichst du Französisch?|Oui, un peu.|J'ai vingt ans.|De rien.`,
SENTENCES: `A1|Je m'appelle Daniel et je viens d'Allemagne.|Ich heiße Daniel und komme aus Deutschland.
A1|J'habite à Paris depuis deux ans.|Ich wohne seit zwei Jahren in Paris.
A1|Je voudrais un café, s'il vous plaît.|Ich hätte gern einen Kaffee, bitte.
A1|L'addition, s'il vous plaît.|Die Rechnung, bitte.
A1|Où est la gare ?|Wo ist der Bahnhof?
A1|Il fait très chaud aujourd'hui.|Heute ist es sehr heiß.
A1|J'ai faim.|Ich habe Hunger.
A1|Je ne parle pas très bien français.|Ich spreche nicht sehr gut Französisch.
A1|Vous pouvez répéter, s'il vous plaît ?|Können Sie das bitte wiederholen?
A1|Ma sœur travaille dans un hôpital.|Meine Schwester arbeitet in einem Krankenhaus.`,
PERSONS: ["je","tu","il / elle / on","nous","vous","ils / elles"],
TENSES: [
  ["pres","Présent","Was jetzt oder regelmäßig passiert: **je parle** = ich spreche."],
  ["pc","Passé composé","Abgeschlossene Handlung in der Vergangenheit: **j'ai parlé** = ich habe gesprochen. Bewegungsverben mit **être**: **je suis allé(e)**."],
  ["imp","Imparfait","Gewohnheiten und Beschreibungen in der Vergangenheit: **je parlais** = ich sprach (früher)."],
  ["fut","Futur simple","Zukunft: **je parlerai** = ich werde sprechen. Im Alltag oft **aller** + Infinitiv: **je vais parler**."]
],
VERBS: {
  "être":   ["sein", "suis,es,est,sommes,êtes,sont", avPC("été"), imp("ét", true), fut("ser")],
  avoir:    ["haben", "j'ai,as,a,avons,avez,ont", avPC("eu"), imp("av", true), fut("aur", true)],
  aller:    ["gehen / fahren", "vais,vas,va,allons,allez,vont", etPC("allé"), imp("all", true), fut("ir", true)],
  faire:    ["machen", "fais,fais,fait,faisons,faites,font", avPC("fait"), imp("fais"), fut("fer")],
  pouvoir:  ["können", "peux,peux,peut,pouvons,pouvez,peuvent", avPC("pu"), imp("pouv"), fut("pourr")],
  vouloir:  ["wollen", "veux,veux,veut,voulons,voulez,veulent", avPC("voulu"), imp("voul"), fut("voudr")],
  dire:     ["sagen", "dis,dis,dit,disons,dites,disent", avPC("dit"), imp("dis"), fut("dir")],
  venir:    ["kommen", "viens,viens,vient,venons,venez,viennent", etPC("venu"), imp("ven"), fut("viendr")],
  voir:     ["sehen", "vois,vois,voit,voyons,voyez,voient", avPC("vu"), imp("voy"), fut("verr")],
  savoir:   ["wissen", "sais,sais,sait,savons,savez,savent", avPC("su"), imp("sav"), fut("saur")],
  prendre:  ["nehmen", "prends,prends,prend,prenons,prenez,prennent", avPC("pris"), imp("pren"), fut("prendr")],
  parler:   ["sprechen (Muster für -er)", "parle,parles,parle,parlons,parlez,parlent", avPC("parlé"), imp("parl"), fut("parler")],
  finir:    ["beenden (Muster für -ir)", "finis,finis,finit,finissons,finissez,finissent", avPC("fini"), imp("finiss"), fut("finir")],
  attendre: ["warten (Muster für -re)", "attends,attends,attend,attendons,attendez,attendent", avPC("attendu"), imp("attend", true), fut("attendr", true)]
},
VERB_NOTES: {
  "être": "Vor einem Vokal wird **je** zu **j'**: **j'ai**, **j'étais**.",
  aller: "Passé composé mit **être** – das Partizip passt sich an: **elle est allée**, **ils sont allés**.",
  venir: "Passé composé mit **être**: **je suis venu(e)**.",
  parler: "**parle**, **parles**, **parle**, **parlent** klingen gleich – nur die Schrift unterscheidet sie."
},
CHEATS: [
 ["Aussprache in Frankreich", `- Endkonsonanten spricht man meist nicht: **petit**, **vous**. Oft gesprochen werden c, r, f, l am Ende: **avec**, **bonjour**, **neuf**, **sel**.
- Ein **e** am Wortende ist stumm: **une**, **table**.
- Nasale: **an/en**, **on**, **in/un**: **enfant**, **bon**, **vin**.
- **ou** klingt wie deutsches „u“, **u** wie deutsches „ü“: **vous** – **vu**.
- **oi** klingt wie „wa“: **moi**, **trois**.
- **h** spricht man nie.
- Liaison: Ein sonst stummer Endkonsonant wird vor Vokal gesprochen: **les amis**, **vous avez**.
- Betont wird immer die letzte Silbe.`],
 ["Artikel & Geschlecht", `- Bestimmt: **le** (m), **la** (f), **les** (Plural). Vor Vokal oder stummem h: **l'** – **l'ami**, **l'eau**.
- Unbestimmt: **un**, **une**, **des**.
- Teilungsartikel für unbestimmte Mengen: **du pain**, **de la confiture**, **de l'eau** – nach Verneinung nur **de**: **Je ne mange pas de viande.**
- Verschmelzung: **à + le = au**, **à + les = aux**, **de + le = du**, **de + les = des**.
- Das Geschlecht muss man mitlernen: **le livre**, **la table**. Wörter auf **-tion** und **-té** sind meist weiblich.`],
 ["Verneinung", `- Die Verneinung umschließt das konjugierte Verb: **Je ne parle pas anglais.**
- Vor Vokal: **n'** – **Je n'ai pas le temps.**
- **ne … rien** (nichts), **ne … jamais** (nie), **ne … plus** (nicht mehr), **ne … personne** (niemand).
- Im gesprochenen Alltag fällt **ne** oft weg: **Je sais pas.** Schriftlich bleibt es.`],
 ["Du, Sie & on", `- **tu** (du): Freunde, Familie, Kinder, unter Jüngeren.
- **vous** (Sie): Fremde, Geschäfte, Behörden, Arbeit – im Zweifel immer **vous**. **vous** heißt auch „ihr“.
- **on** (man) ersetzt im Alltag sehr oft **nous**: **On y va ?** (Gehen wir?)
- Höflich grüßen: **Bonjour, monsieur. Bonjour, madame.**`],
 ["Fragen stellen", `Drei Möglichkeiten, von locker bis formell:
- Nur mit der Stimme: **Tu viens ?**
- Mit **est-ce que**: **Est-ce que tu viens ?**
- Mit Umstellung, vor allem schriftlich: **Viens-tu ?**
Mit Fragewort: **Tu habites où ?** – **Où est-ce que tu habites ?** – **Où habites-tu ?**`],
 ["Passé composé: avoir oder être?", `- Die meisten Verben bilden das Passé composé mit **avoir**: **J'ai mangé.**
- Mit **être**: Verben der Bewegung und Zustandsänderung (aller, venir, arriver, partir, entrer, sortir, naître, mourir, rester, tomber …) und alle reflexiven Verben: **Je suis allé(e). Je me suis levé(e).**
- Bei **être** richtet sich das Partizip nach dem Subjekt: **Elle est allée. Ils sont venus.**`]
]
};
})();
