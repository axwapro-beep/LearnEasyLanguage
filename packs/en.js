/* ===== Sprachpaket: Englisch (britisches Standardenglisch) =====
   Norm: Cambridge Dictionary, Oxford Learner's Dictionaries; Niveaus: English Profile (Cambridge). Siehe QUELLEN.md. */
LEL_PACKS.en = (function(){
const s3 = (b, t) => `${b},${b},${t},${b},${b},${b}`;
const all = x => `${x},${x},${x},${x},${x},${x}`;
const pp = p => `have ${p},have ${p},has ${p},have ${p},have ${p},have ${p}`;
const will = v => all("will " + v);
return {
LANG: {code:"en", flag:"🇬🇧", name:"Englisch", adj:"britisches Englisch", inLang:"Englisch", into:"ins Englische",
  country:"Großbritannien", voiceFrom:"aus Großbritannien", tts:"en-GB", ttsRe:/^en[-_]GB/i, prefix:"en",
  voicePath:"Englisch → Vereinigtes Königreich", status:"A1 · Abschnitt 1 von 6", tutor:false},
ART_RE: /^(the|a|an|to|der|die|das|ein|eine|einen) /,
F_RE: /kate|serena|stephanie|martha|libby|sonia|female|woman/i,
M_RE: /daniel|arthur|oliver|ryan|thomas|\bmale\b|\bman\b/i,
FUNC: ["the","a","an","to","of","in","on","at","and","is","are","i","you","it","for","with","not","do","does"],
LEVEL_NAMES: {A1:"Absolute Grundlagen",A2:"Einfache Gespräche & Alltag",B1:"Selbstständig kommunizieren",B2:"Flüssiger sprechen",C1:"Fortgeschrittenes Englisch"},
CURRICULUM: {
 A1:[["A1-01","Begrüßen & sich vorstellen","hello, my name is …, how are you?"],["A1-02","Aussprache","th, w und v, das britische r"],["A1-03","Artikel","the, a, an – kein Geschlecht"],["A1-04","to be","I am, you are, he is"],["A1-05","Simple Present","I work, she works"],["A1-06","Fragen & Verneinung mit do","Do you …? I don't …"],["A1-07","have got","I've got a brother"],["A1-08","Zahlen & Uhrzeit","0–100, What time is it?"],["A1-T","A1-Abschlusstest","Prüfung über alle A1-Themen"]],
 A2:[["A2-01","Present Progressive","I'm working"],["A2-02","Simple Past","I worked, I went"],["A2-03","going to & will","Pläne und Vorhersagen"],["A2-04","Vergleiche","bigger, more interesting"],["A2-T","A2-Abschlusstest","Prüfung über alle A2-Themen"]],
 B1:[["B1-01","Present Perfect","I have seen"],["B1-02","Past Progressive","I was working when …"],["B1-03","Bedingungssätze I & II","if I have / if I had"],["B1-T","B1-Abschlusstest","Prüfung über alle B1-Themen"]],
 B2:[["B2-01","Passiv","it was built"],["B2-02","Indirekte Rede","she said she would come"],["B2-T","B2-Abschlusstest","Prüfung über alle B2-Themen"]],
 C1:[["C1-01","Stil & Register","formell, neutral, umgangssprachlich"],["C1-02","Phrasal verbs & Idiome","put up with, get over"],["C1-T","C1-Abschlusstest","Prüfung über alle C1-Themen"]]
},
SCENARIOS: [["☕","At the café","Bestelle einen Tee und etwas zu essen"],["🛒","At the supermarket","Frag nach Produkten, Preisen und bezahle"],["📞","On the phone","Reserviere einen Tisch im Restaurant"],["🍻","With friends","Verabrede dich für den Abend"],["👨‍👩‍👧","With the family","Lerne die Familie eines Freundes kennen"],["🧭","In the street","Frag nach dem Weg zur U-Bahn"],["💊","At the chemist's","Beschreibe Beschwerden und kauf etwas"],["🏨","At the hotel","Check-in und Fragen an der Rezeption"],["🏠","With the neighbour","Smalltalk mit dem Nachbarn"],["🎲","Free conversation","Freies Gespräch auf deinem Niveau"]],
SCEN_DE: ["Im Café","Im Supermarkt","Am Telefon","Mit Freunden","Mit der Familie","Auf der Straße","In der Apotheke","Im Hotel","Mit dem Nachbarn","Freies Gespräch"],
STARTER_VOCAB: [["hello","hallo"],["good morning","guten Morgen"],["good evening","guten Abend"],["my name is …","ich heiße …"],["how are you?","wie geht's?"],["thank you","danke"],["please","bitte"],["sorry","Entschuldigung"],["yes","ja"],["no","nein"],["goodbye","auf Wiedersehen"]],
INITIAL_CHAT: [{role:"assistant", content:"Hello! Hier lernst du britisches Englisch 🇬🇧\n\nFang einfach mit der ersten Lektion im Lernpfad an."}],
THEMES: [
 {id:"gruss",e:"👋",name:"Begrüßung & Höflichkeit",level:"A1",w:`hello|hallo
hi|hi
good morning|guten Morgen
good afternoon|guten Tag (nachmittags)
good evening|guten Abend
good night|gute Nacht
goodbye|auf Wiedersehen
bye|tschüss
see you later|bis später
see you tomorrow|bis morgen
how are you?|wie geht's?
fine|gut
thank you|danke
thanks|danke (locker)
you're welcome|gern geschehen
please|bitte
sorry|Entschuldigung / tut mir leid
excuse me|entschuldigen Sie
nice to meet you|freut mich
welcome|willkommen`},
 {id:"ichdu",e:"🙋",name:"Personen & Vorstellen",level:"A1",w:`I|ich
you|du / ihr / Sie
he|er
she|sie (Singular)
it|es
we|wir
they|sie (Plural)
my name is|ich heiße
the first name|der Vorname
the surname|der Nachname
Mr|Herr
Mrs|Frau (verheiratet)
Ms|Frau (neutral)
German|deutsch / Deutscher
English|englisch / Englisch
British|britisch
Germany|Deutschland
England|England`},
 {id:"fragen",e:"❓",name:"Fragewörter",level:"A1",w:`what?|was?
who?|wer?
where?|wo? / wohin?
when?|wann?
how?|wie?
how much?|wie viel?
how many?|wie viele?
why?|warum?
because|weil
which?|welcher / welche / welches?
whose?|wessen?`},
 {id:"zahlen",e:"🔢",name:"Zahlen",level:"A1",w:`zero|null
one|eins
two|zwei
three|drei
four|vier
five|fünf
six|sechs
seven|sieben
eight|acht
nine|neun
ten|zehn
eleven|elf
twelve|zwölf
thirteen|dreizehn
fourteen|vierzehn
fifteen|fünfzehn
sixteen|sechzehn
seventeen|siebzehn
eighteen|achtzehn
nineteen|neunzehn
twenty|zwanzig
twenty-one|einundzwanzig
thirty|dreißig
forty|vierzig
fifty|fünfzig
sixty|sechzig
seventy|siebzig
eighty|achtzig
ninety|neunzig
a hundred|hundert
a thousand|tausend
the pound|das Pfund`},
 {id:"verben",e:"⚙️",name:"Erste Verben",level:"A1",w:`to be|sein
to have|haben
to do|tun / machen
to go|gehen / fahren
to make|machen / herstellen
to get|bekommen
to take|nehmen
to come|kommen
to see|sehen
to know|wissen / kennen
to say|sagen
to speak|sprechen
to work|arbeiten
to live|wohnen / leben
to eat|essen
to drink|trinken
to like|mögen
to want|wollen`},
 {id:"alltag",e:"☀️",name:"Erste Alltagswörter",level:"A1",w:`yes|ja
no|nein
of course|natürlich
OK|okay
too|auch (am Satzende)
nothing|nichts
never|nie
today|heute
tomorrow|morgen
yesterday|gestern
here|hier
there|dort
a lot|viel
a little|ein bisschen
very|sehr
well|gut (Adverb)
the coffee|der Kaffee
the tea|der Tee
the water|das Wasser
the bread|das Brot
the house|das Haus
the flat|die Wohnung
the street|die Straße
the toilet|die Toilette
the station|der Bahnhof
the brother|der Bruder
the sister|die Schwester
the friend|der Freund / die Freundin`}
],
PATH_SECTIONS: [
 {id:"s1", title:"Erste Schritte", pt:"First steps", level:"A1", color:"#2F6BFF", units:[
  {id:"u1", e:"👋", title:"Begrüßungen", pt:"Hello!", desc:"Hallo sagen, danke und bitte.",
   words:`hello|hallo
hi|hi
good morning|guten Morgen
good afternoon|guten Tag (nachmittags)
good evening|guten Abend
goodbye|auf Wiedersehen
bye|tschüss
see you later|bis später
thank you|danke
please|bitte`,
   sents:`Hello, good morning!|Hallo, guten Morgen!|Begrüßung|„Good morning“ sagt man bis etwa zum Mittag.
Hi, how are you?|Hi, wie geht's?|Begrüßung|„How are you?“ ist oft nur ein Gruß – man antwortet kurz.
I'm fine, thanks.|Mir geht's gut, danke.|Begrüßung|„thanks“ ist lockerer als „thank you“.
Good evening and good night!|Guten Abend und gute Nacht!|Begrüßung|„Good night“ sagt man nur zum Abschied oder vor dem Schlafen.
Bye, see you later!|Tschüss, bis später!|Begrüßung|
A coffee, please.|Einen Kaffee, bitte.|Höflichkeit|In Großbritannien hört man „please“ und „thank you“ sehr oft.`},
  {id:"u2", e:"🙋", title:"Sich vorstellen", pt:"My name is…", desc:"Name, Herkunft und Wohnort.",
   words:`my name is|ich heiße
I'm|ich bin
what's your name?|wie heißt du?
where are you from?|woher kommst du?
I'm from Germany|ich komme aus Deutschland
I live in|ich wohne in
nice to meet you|freut mich
the name|der Name
German|deutsch / Deutscher
English|englisch / Englisch`,
   sents:`My name is Daniel.|Ich heiße Daniel.|Vorstellen|
What's your name?|Wie heißt du?|Fragen|„What's“ ist die Kurzform von „what is“.
I'm German.|Ich bin Deutscher.|to be|Nationalitäten und Sprachen schreibt man im Englischen groß.
I'm from Germany.|Ich komme aus Deutschland.|Präpositionen|Herkunft: be from + Land.
I live in Berlin.|Ich wohne in Berlin.|Präpositionen|
Nice to meet you!|Freut mich!|Begrüßung|
Where are you from?|Woher kommst du?|Fragen|Die Präposition steht am Ende der Frage.`,
   story:{title:"Im Sprachkurs", lines:`Emma|Hi! What's your name?|Hi! Wie heißt du?
Daniel|My name is Daniel. And you?|Ich heiße Daniel. Und du?
Emma|I'm Emma. Where are you from?|Ich bin Emma. Woher kommst du?
Daniel|I'm from Germany, but I live in London.|Ich komme aus Deutschland, aber ich wohne in London.
Emma|Nice to meet you, Daniel!|Freut mich, Daniel!`, qs:`Woher kommt Daniel?|Aus Deutschland|Aus London|Aus Amerika
Wo wohnt Daniel?|In London|In Berlin|In Manchester
Was sagt Emma am Ende?|Freut mich|Bis morgen|Danke schön`}},
  {id:"u3", e:"✅", title:"Ja und Nein", pt:"Yes or no", desc:"Zustimmen, ablehnen, verneinen.",
   words:`yes|ja
no|nein
of course|natürlich
OK|okay
sure|klar
me too|ich auch
me neither|ich auch nicht
nothing|nichts
never|nie
I don't know|ich weiß nicht`,
   sents:`Yes, of course.|Ja, natürlich.|Zustimmung|
No, thank you.|Nein, danke.|Verneinung|
I don't know.|Ich weiß nicht.|Verneinung|Verneinung mit „do not“ (don't) + Grundform.
Do you like tea? – Yes, I do.|Magst du Tee? – Ja.|Kurzantworten|Man antwortet gern kurz mit dem Hilfsverb: Yes, I do. / No, I don't.
I don't want anything.|Ich will nichts.|Verneinung|Im Englischen nur eine Verneinung: not … anything.
Me too.|Ich auch.|Zustimmung|
Me neither.|Ich auch nicht.|Verneinung|Antwort auf einen verneinten Satz.`},
  {id:"u4", e:"❓", title:"Grundlegende Fragen", pt:"Questions", desc:"Wer, was, wo, wann und wie viel?",
   words:`what?|was?
who?|wer?
where?|wo? / wohin?
when?|wann?
how?|wie?
how much?|wie viel?
why?|warum?
because|weil
which?|welcher / welche / welches?
how many?|wie viele?`,
   sents:`What is this?|Was ist das?|Fragen|
Where is the toilet?|Wo ist die Toilette?|Fragen|In Großbritannien sagt man „toilet“ oder locker „loo“, in den USA „restroom“.
How much is it?|Wie viel kostet das?|Fragen|
Who is that?|Wer ist das?|Fragen|
Why aren't you coming?|Warum kommst du nicht?|Fragen|
Because I'm tired.|Weil ich müde bin.|to be|
When does the lesson start?|Wann fängt der Unterricht an?|Fragen|Fragen im Simple Present bildet man mit „do/does“.`},
  {id:"u5", e:"🔢", title:"Zahlen", pt:"Numbers", desc:"Von eins bis hundert, Alter und Preise.",
   words:`one|eins
two|zwei
three|drei
four|vier
five|fünf
ten|zehn
twenty|zwanzig
a hundred|hundert
the pound|das Pfund
how old are you?|wie alt bist du?`,
   sents:`I'm twenty years old.|Ich bin zwanzig Jahre alt.|to be|Das Alter sagt man mit „to be“, nicht mit „have“.
How old are you?|Wie alt bist du?|Fragen|
That's five pounds.|Das macht fünf Pfund.|Zahlen|In Großbritannien bezahlt man mit Pfund (£).
One, two, three, four.|Eins, zwei, drei, vier.|Zahlen|
I have two brothers.|Ich habe zwei Brüder.|to have|In Großbritannien sagt man auch oft: I've got two brothers.
A hundred pounds is a lot of money.|Hundert Pfund sind viel Geld.|Zahlen|„a hundred“ oder „one hundred“.`},
  {id:"u6", e:"🧱", title:"Einfache Sätze", pt:"Simple sentences", desc:"Ich, du, er, sie – die ersten Verben.",
   words:`I|ich
you|du / ihr / Sie
he|er
she|sie (Singular)
it|es
we|wir
they|sie (Plural)
to speak|sprechen
to work|arbeiten
to live|wohnen / leben`,
   sents:`I speak German.|Ich spreche Deutsch.|Simple Present|
Do you speak English?|Sprichst du Englisch?|Fragen|
She works in London.|Sie arbeitet in London.|Simple Present|In der 3. Person Singular hängt man -s an: she works.
We live in Berlin.|Wir wohnen in Berlin.|Simple Present|
They are from Spain.|Sie kommen aus Spanien.|to be|
He doesn't work today.|Er arbeitet heute nicht.|Verneinung|In der 3. Person: doesn't + Grundform.
I'm working at the moment.|Ich arbeite gerade.|Verlaufsform|Was gerade passiert: am/is/are + -ing.`}
 ]}
],
DIALOGS: `1|Hi, how are you?|Hi, wie geht's?|I'm fine, thanks. And you?|That's three pounds.|I live in Berlin.
1|Thanks for your help!|Danke für deine Hilfe!|You're welcome!|I don't know.|How much is it?
2|What's your name?|Wie heißt du?|My name is Daniel.|I'm twenty years old.|See you later!
2|Where are you from?|Woher kommst du?|I'm from Germany.|My name is Emma.|At eight o'clock.
3|Would you like a cup of tea?|Möchtest du eine Tasse Tee?|Yes, please.|I'm from Germany.|I have two brothers.
4|Where is the toilet?|Wo ist die Toilette?|Over there, on the right.|That's five pounds.|My name is Daniel.
5|How old are you?|Wie alt bist du?|I'm thirty.|I live in London.|I'm fine, thanks.
5|How much is the bread?|Wie viel kostet das Brot?|One pound fifty.|See you tomorrow.|I'm German.
6|Do you speak English?|Sprichst du Englisch?|Yes, a little.|I'm twenty years old.|You're welcome.`,
SENTENCES: `A1|My name is Daniel and I'm from Germany.|Ich heiße Daniel und komme aus Deutschland.
A1|I've lived in London for two years.|Ich wohne seit zwei Jahren in London.
A1|Could I have a coffee, please?|Könnte ich bitte einen Kaffee haben?
A1|Can I have the bill, please?|Kann ich bitte die Rechnung haben?
A1|Where is the station?|Wo ist der Bahnhof?
A1|It's very hot today.|Heute ist es sehr heiß.
A1|I'm hungry.|Ich habe Hunger.
A1|My English isn't very good.|Mein Englisch ist nicht sehr gut.
A1|Could you say that again, please?|Könnten Sie das bitte wiederholen?
A1|My sister works in a hospital.|Meine Schwester arbeitet in einem Krankenhaus.`,
PERSONS: ["I","you","he / she / it","we","you (Plural)","they"],
TENSES: [
  ["pres","Simple Present","Gewohnheiten und Fakten: **I work** = ich arbeite. In der 3. Person ein -s: **she works**."],
  ["past","Simple Past","Abgeschlossene Vergangenheit mit Zeitangabe (yesterday, last year): **I went** = ich ging / bin gegangen."],
  ["perf","Present Perfect","Erfahrung oder Ergebnis bis jetzt (ever, never, already, just): **I have been** = ich bin gewesen."],
  ["fut","Future (will)","Spontane Entscheidungen und Vorhersagen: **I will go**. Pläne meist mit **going to**: I'm going to travel."]
],
VERBS: {
  be:   ["sein", "am,are,is,are,are,are", "was,were,was,were,were,were", pp("been"), will("be")],
  have: ["haben", s3("have","has"), all("had"), pp("had"), will("have")],
  do:   ["tun / machen", s3("do","does"), all("did"), pp("done"), will("do")],
  go:   ["gehen / fahren", s3("go","goes"), all("went"), pp("gone"), will("go")],
  make: ["machen / herstellen", s3("make","makes"), all("made"), pp("made"), will("make")],
  get:  ["bekommen / werden", s3("get","gets"), all("got"), pp("got"), will("get")],
  take: ["nehmen", s3("take","takes"), all("took"), pp("taken"), will("take")],
  come: ["kommen", s3("come","comes"), all("came"), pp("come"), will("come")],
  see:  ["sehen", s3("see","sees"), all("saw"), pp("seen"), will("see")],
  know: ["wissen / kennen", s3("know","knows"), all("knew"), pp("known"), will("know")],
  say:  ["sagen", s3("say","says"), all("said"), pp("said"), will("say")],
  eat:  ["essen", s3("eat","eats"), all("ate"), pp("eaten"), will("eat")],
  can:  ["können", all("can"), all("could"), pp("been able to"), will("be able to")],
  work: ["arbeiten (regelmäßig)", s3("work","works"), all("worked"), pp("worked"), will("work")],
  live: ["wohnen (regelmäßig)", s3("live","lives"), all("lived"), pp("lived"), will("live")]
},
VERB_NOTES: {
  be: "**be** ist unregelmäßig in allen Formen. Kurzformen: **I'm**, **you're**, **he's**, **we're**, **they're**.",
  get: "Britisch: **have got**. Amerikanisch oft: **have gotten**.",
  say: "**says** spricht man [säs], **said** [säd].",
  can: "**can** hat keine eigene Perfekt- und Zukunftsform – man nimmt **be able to**."
},
CHEATS: [
 ["Aussprache (britisches Englisch)", `- **th** stimmlos wie in **think**, stimmhaft wie in **this** – Zungenspitze zwischen die Zähne.
- **w** ist ein kurzes „u“: **water**, **we**. Das englische **v** klingt dagegen wie deutsches „w“: **very**.
- Im britischen Standard spricht man **r** nach einem Vokal meist nicht: **car**, **water**.
- Endungen nicht verhärten: **dog** endet auf weichem g.
- **-ed** in der Vergangenheit: [t] nach stimmlosen Lauten (**worked**), [d] sonst (**lived**), [id] nach t/d (**wanted**).
- Schreibung und Aussprache weichen oft ab: **know**, **island**. Am besten mit der Hörübung lernen.`],
 ["Artikel", `- **the** steht für der/die/das – Englisch hat kein grammatisches Geschlecht.
- **a** vor Konsonantenlaut, **an** vor Vokallaut: **a book**, **an apple**, **an hour** (h ist stumm), **a university** (gesprochen „ju“).
- Bei Berufen steht **a**: **She's a doctor.**
- Allgemeine Aussagen ohne Artikel: **I like music.**`],
 ["Fragen & Verneinung mit do", `- Im Simple Present bildet man Fragen mit **do/does**: **Do you work here? Does she live in London?**
- Verneinung mit **don't/doesn't** + Grundform: **I don't know. He doesn't like tea.**
- Bei **be**, **can** und anderen Hilfsverben kein **do**: **Are you tired? I can't swim.**
- Nur eine Verneinung pro Satz: **I don't have anything.**`],
 ["Simple oder Progressive?", `- **Simple Present**: Gewohnheiten und Fakten – **I work in Berlin.**
- **Present Progressive** (am/is/are + -ing): was gerade passiert – **I'm working right now.**
- In der 3. Person Singular kommt im Simple Present ein **-s** dazu: **she works**, **he goes**.`],
 ["Britisch oder amerikanisch?", `In dieser App lernst du britisches Englisch. Typische Unterschiede:
- **flat** (GB) – **apartment** (US): Wohnung
- **lift** – **elevator**: Aufzug
- **holiday** – **vacation**: Urlaub
- **colour**, **centre** – **color**, **center**
- **Have you got …?** ist in Großbritannien üblich, **Do you have …?** überall – beides ist richtig.`],
 ["Present Perfect", `- Bildung: **have/has** + 3. Verbform: **I have seen**, **she has gone**.
- Für Erfahrungen und Ergebnisse bis jetzt: **Have you ever been to London?**
- Mit einem abgeschlossenen Zeitpunkt (yesterday, in 2020) steht das Simple Past: **I saw him yesterday.**`]
]
};
})();
