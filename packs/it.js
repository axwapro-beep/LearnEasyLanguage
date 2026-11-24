/* ===== Sprachpaket: Italienisch (Standarditalienisch) =====
   Norm: Accademia della Crusca, Vocabolario Treccani; Niveaus: Profilo della lingua italiana. Siehe QUELLEN.md. */
LEL_PACKS.it = (function(){
const av = p => `ho ${p},hai ${p},ha ${p},abbiamo ${p},avete ${p},hanno ${p}`;
const es = s => `sono ${s}o/a,sei ${s}o/a,è ${s}o/a,siamo ${s}i/e,siete ${s}i/e,sono ${s}i/e`;
const imp = s => `${s}vo,${s}vi,${s}va,${s}vamo,${s}vate,${s}vano`;
const fut = s => `${s}ò,${s}ai,${s}à,${s}emo,${s}ete,${s}anno`;
return {
LANG: {code:"it", flag:"🇮🇹", name:"Italienisch", adj:"Italienisch", inLang:"Italienisch", into:"ins Italienische",
  country:"Italien", voiceFrom:"aus Italien", tts:"it-IT", ttsRe:/^it[-_]IT/i, prefix:"it",
  voicePath:"Italienisch", status:"A1 · Abschnitt 1 von 6", tutor:false},
ART_RE: /^(il|lo|la|i|gli|le|un|uno|una|der|die|das|ein|eine|einen) /,
F_RE: /alice|federica|paola|elsa|emma|female|donna|woman/i,
M_RE: /luca|diego|giorgio|cosimo|\bmale\b|uomo|\bman\b/i,
FUNC: ["il","lo","la","i","gli","le","un","una","di","del","della","a","al","in","nel","e","che","non","per","con","mi","ti"],
LEVEL_NAMES: {A1:"Absolute Grundlagen",A2:"Einfache Gespräche & Alltag",B1:"Selbstständig kommunizieren",B2:"Flüssiger sprechen",C1:"Fortgeschrittenes Italienisch"},
CURRICULUM: {
 A1:[["A1-01","Begrüßen & sich vorstellen","ciao, buongiorno, mi chiamo …, tu vs. Lei"],["A1-02","Aussprache","c/g weich und hart, gli, gn, Doppelkonsonanten"],["A1-03","Artikel & Geschlecht","il / lo / la / l' / i / gli / le"],["A1-04","essere & avere","sono, ho"],["A1-05","Verben auf -are, -ere, -ire","parlare, prendere, dormire, capire"],["A1-06","Verneinung","non, niente, mai"],["A1-07","Präposition + Artikel","al, del, nel, sul"],["A1-08","Zahlen & Uhrzeit","0–100, che ore sono?"],["A1-T","A1-Abschlusstest","Prüfung über alle A1-Themen"]],
 A2:[["A2-01","Passato prossimo","ho mangiato, sono andato/a"],["A2-02","Imperfetto","Gewohnheiten und Beschreibungen"],["A2-03","Reflexive Verben","alzarsi, chiamarsi"],["A2-04","Objektpronomen","lo, la, gli, ne"],["A2-T","A2-Abschlusstest","Prüfung über alle A2-Themen"]],
 B1:[["B1-01","Futuro & condizionale","Pläne, Vermutungen, Höflichkeit"],["B1-02","Congiuntivo presente","penso che sia"],["B1-03","Imperativ","bejaht, verneint, mit Pronomen"],["B1-T","B1-Abschlusstest","Prüfung über alle B1-Themen"]],
 B2:[["B2-01","Congiuntivo imperfetto & Bedingungssätze","se avessi tempo …"],["B2-02","Indirekte Rede","ha detto che sarebbe venuto"],["B2-T","B2-Abschlusstest","Prüfung über alle B2-Themen"]],
 C1:[["C1-01","Stil & Register","formell, umgangssprachlich, regional"],["C1-02","Passato remoto","in Literatur und Süditalien"],["C1-T","C1-Abschlusstest","Prüfung über alle C1-Themen"]]
},
SCENARIOS: [["☕","Al bar","Bestelle einen Kaffee und ein Cornetto"],["🛒","Al supermercato","Frag nach Produkten, Preisen und bezahle"],["📞","Al telefono","Reserviere einen Tisch im Restaurant"],["🍻","Con gli amici","Verabrede dich für den Abend"],["👨‍👩‍👧","In famiglia","Lerne die Familie eines Freundes kennen"],["🧭","Per strada","Frag nach dem Weg zur Metro"],["💊","In farmacia","Beschreibe Beschwerden und kauf etwas"],["🏨","In albergo","Check-in und Fragen an der Rezeption"],["🏠","Con il vicino","Smalltalk mit dem Nachbarn"],["🎲","Conversazione libera","Freies Gespräch auf deinem Niveau"]],
SCEN_DE: ["In der Bar","Im Supermarkt","Am Telefon","Mit Freunden","Mit der Familie","Auf der Straße","In der Apotheke","Im Hotel","Mit dem Nachbarn","Freies Gespräch"],
STARTER_VOCAB: [["ciao","hallo / tschüss"],["buongiorno","guten Morgen / guten Tag"],["buonasera","guten Abend"],["mi chiamo …","ich heiße …"],["come stai?","wie geht's dir?"],["grazie","danke"],["per favore","bitte"],["scusa","Entschuldigung"],["sì","ja"],["no","nein"],["arrivederci","auf Wiedersehen"]],
INITIAL_CHAT: [{role:"assistant", content:"Ciao! Hier lernst du Italienisch 🇮🇹\n\nFang einfach mit der ersten Lektion im Lernpfad an."}],
THEMES: [
 {id:"gruss",e:"👋",name:"Begrüßung & Höflichkeit",level:"A1",w:`ciao|hallo / tschüss (locker)
salve|hallo (neutral)
buongiorno|guten Morgen / guten Tag
buonasera|guten Abend
buonanotte|gute Nacht
arrivederci|auf Wiedersehen
a dopo|bis später
a domani|bis morgen
a presto|bis bald
come stai?|wie geht's dir?
come sta?|wie geht es Ihnen?
bene|gut
grazie|danke
grazie mille|vielen Dank
prego|bitte / gern geschehen
per favore|bitte
scusa|Entschuldigung (zu Freunden)
mi scusi|entschuldigen Sie
piacere|freut mich
benvenuto|willkommen`},
 {id:"ichdu",e:"🙋",name:"Personen & Vorstellen",level:"A1",w:`io|ich
tu|du
lui|er
lei|sie (Singular)
Lei|Sie (höflich)
noi|wir
voi|ihr
loro|sie (Plural)
mi chiamo|ich heiße
il nome|der Name / Vorname
il cognome|der Nachname
il signore|der Herr
la signora|die Frau (Anrede)
tedesco|deutsch / der Deutsche
tedesca|deutsch / die Deutsche
italiano|italienisch / der Italiener
la Germania|Deutschland
l'Italia|Italien`},
 {id:"fragen",e:"❓",name:"Fragewörter",level:"A1",w:`che cosa?|was?
chi?|wer?
dove?|wo? / wohin?
di dove?|woher?
quando?|wann?
come?|wie?
quanto?|wie viel?
quanti?|wie viele?
perché?|warum?
perché|weil
quale?|welcher / welche / welches?`},
 {id:"zahlen",e:"🔢",name:"Zahlen",level:"A1",w:`zero|null
uno|eins
due|zwei
tre|drei
quattro|vier
cinque|fünf
sei|sechs
sette|sieben
otto|acht
nove|neun
dieci|zehn
undici|elf
dodici|zwölf
tredici|dreizehn
quattordici|vierzehn
quindici|fünfzehn
sedici|sechzehn
diciassette|siebzehn
diciotto|achtzehn
diciannove|neunzehn
venti|zwanzig
ventuno|einundzwanzig
trenta|dreißig
quaranta|vierzig
cinquanta|fünfzig
sessanta|sechzig
settanta|siebzig
ottanta|achtzig
novanta|neunzig
cento|hundert
mille|tausend`},
 {id:"verben",e:"⚙️",name:"Erste Verben",level:"A1",w:`essere|sein
avere|haben
andare|gehen / fahren
fare|machen
potere|können
volere|wollen
stare|sein / sich befinden
parlare|sprechen
lavorare|arbeiten
abitare|wohnen
mangiare|essen
bere|trinken
chiamarsi|heißen
venire|kommen
sapere|wissen
vedere|sehen
prendere|nehmen
capire|verstehen`},
 {id:"alltag",e:"☀️",name:"Erste Alltagswörter",level:"A1",w:`sì|ja
no|nein
certo|sicher / natürlich
va bene|okay / in Ordnung
anche|auch
niente|nichts
mai|nie
oggi|heute
domani|morgen
ieri|gestern
qui|hier
lì|dort
molto|viel / sehr
poco|wenig
un po'|ein bisschen
il caffè|der Kaffee (Espresso)
l'acqua|das Wasser
la birra|das Bier
il pane|das Brot
la casa|das Haus
la strada|die Straße
il bagno|die Toilette / das Bad
la stazione|der Bahnhof
il fratello|der Bruder
la sorella|die Schwester
l'amico|der Freund
l'amica|die Freundin`}
],
PATH_SECTIONS: [
 {id:"s1", title:"Erste Schritte", pt:"Primi passi", level:"A1", color:"#2F6BFF", units:[
  {id:"u1", e:"👋", title:"Begrüßungen", pt:"Ciao!", desc:"Hallo sagen, danke und bitte.",
   words:`ciao|hallo / tschüss (locker)
buongiorno|guten Morgen / guten Tag
buonasera|guten Abend
buonanotte|gute Nacht
arrivederci|auf Wiedersehen
a dopo|bis später
a domani|bis morgen
grazie|danke
per favore|bitte
prego|bitte / gern geschehen`,
   sents:`Ciao, come stai?|Hallo, wie geht's dir?|Begrüßung|„Ciao“ nur unter Freunden – zur Begrüßung und zum Abschied.
Buongiorno, signora!|Guten Tag! (zu einer Frau)|Begrüßung|„Buongiorno“ sagt man etwa bis zum frühen Nachmittag.
Bene, grazie.|Gut, danke.|Begrüßung|
Buonasera e a domani!|Guten Abend und bis morgen!|Begrüßung|„Buonasera“ sagt man ab dem Nachmittag.
Arrivederci, a dopo!|Auf Wiedersehen, bis später!|Begrüßung|
Un caffè, per favore.|Einen Kaffee, bitte.|Höflichkeit|„Un caffè“ ist in Italien ein Espresso.`},
  {id:"u2", e:"🙋", title:"Sich vorstellen", pt:"Mi chiamo…", desc:"Name, Herkunft und Wohnort.",
   words:`mi chiamo|ich heiße
sono|ich bin
come ti chiami?|wie heißt du?
di dove sei?|woher kommst du?
vengo dalla Germania|ich komme aus Deutschland
abito a|ich wohne in (Stadt)
piacere|freut mich
il nome|der Name
tedesco|deutsch / Deutscher
italiano|italienisch / Italiener`,
   sents:`Mi chiamo Daniel.|Ich heiße Daniel.|Reflexive Verben|„chiamarsi“ heißt wörtlich „sich nennen“.
Come ti chiami?|Wie heißt du?|Fragen|
Sono tedesco.|Ich bin Deutscher.|essere|Frauen sagen „sono tedesca“.
Vengo dalla Germania.|Ich komme aus Deutschland.|Präpositionen|da + la = dalla.
Abito a Berlino.|Ich wohne in Berlin.|Präpositionen|Vor Städten steht „a“: a Roma, a Berlino.
Piacere!|Freut mich!|Begrüßung|
Di dove sei?|Woher kommst du?|Fragen|`,
   story:{title:"Im Sprachkurs", lines:`Giulia|Ciao! Come ti chiami?|Hallo! Wie heißt du?
Daniel|Mi chiamo Daniel. E tu?|Ich heiße Daniel. Und du?
Giulia|Io sono Giulia. Di dove sei?|Ich bin Giulia. Woher kommst du?
Daniel|Vengo dalla Germania, ma abito a Roma.|Ich komme aus Deutschland, aber ich wohne in Rom.
Giulia|Piacere, Daniel!|Freut mich, Daniel!`, qs:`Woher kommt Daniel?|Aus Deutschland|Aus Rom|Aus der Schweiz
Wo wohnt Daniel?|In Rom|In Berlin|In Mailand
Was sagt Giulia am Ende?|Freut mich|Bis morgen|Danke schön`}},
  {id:"u3", e:"✅", title:"Ja und Nein", pt:"Sì o no", desc:"Zustimmen, ablehnen, verneinen.",
   words:`sì|ja
no|nein
certo|sicher / natürlich
va bene|okay / in Ordnung
anche|auch
neanche|auch nicht
niente|nichts
mai|nie
non lo so|ich weiß es nicht
d'accordo|einverstanden`,
   sents:`Sì, certo.|Ja, natürlich.|Zustimmung|
No, grazie.|Nein, danke.|Verneinung|
Non lo so.|Ich weiß es nicht.|Verneinung|„non“ steht direkt vor dem Verb.
Va bene, d'accordo.|Okay, einverstanden.|Zustimmung|
Non voglio niente.|Ich will nichts.|Verneinung|Die doppelte Verneinung ist richtig: non … niente.
Neanche io.|Ich auch nicht.|Verneinung|
Anch'io.|Ich auch.|Zustimmung|Vor „io“ wird „anche“ zu „anch'“.`},
  {id:"u4", e:"❓", title:"Grundlegende Fragen", pt:"Domande", desc:"Wer, was, wo, wann und wie viel?",
   words:`che cosa?|was?
chi?|wer?
dove?|wo? / wohin?
quando?|wann?
come?|wie?
quanto?|wie viel?
perché?|warum?
perché|weil
quale?|welcher / welche / welches?
quanti?|wie viele?`,
   sents:`Che cos'è?|Was ist das?|Fragen|Im Alltag oft verkürzt: „Cos'è?“
Dov'è il bagno?|Wo ist die Toilette?|Fragen|dove + è = dov'è.
Quanto costa?|Wie viel kostet das?|Fragen|
Chi è?|Wer ist das?|Fragen|
Perché non vieni?|Warum kommst du nicht?|Fragen|„perché“ heißt sowohl „warum“ als auch „weil“.
Perché sono stanco.|Weil ich müde bin.|essere|Frauen sagen „stanca“.
Quando comincia la lezione?|Wann beginnt der Unterricht?|Fragen|`},
  {id:"u5", e:"🔢", title:"Zahlen", pt:"I numeri", desc:"Von eins bis hundert, Alter und Preise.",
   words:`uno|eins
due|zwei
tre|drei
quattro|vier
cinque|fünf
dieci|zehn
venti|zwanzig
cento|hundert
l'euro|der Euro
quanti anni hai?|wie alt bist du?`,
   sents:`Ho vent'anni.|Ich bin zwanzig Jahre alt.|avere|Das Alter sagt man mit „avere“ (haben). venti + anni = vent'anni.
Quanti anni hai?|Wie alt bist du?|Fragen|
Sono cinque euro.|Das macht fünf Euro.|Zahlen|„euro“ bleibt im Plural unverändert.
Uno, due, tre, quattro.|Eins, zwei, drei, vier.|Zahlen|
Ho due fratelli.|Ich habe zwei Brüder.|avere|„fratelli“ kann auch „Geschwister“ heißen.
Cento euro sono tanti soldi.|Hundert Euro sind viel Geld.|Zahlen|`},
  {id:"u6", e:"🧱", title:"Einfache Sätze", pt:"Frasi semplici", desc:"Ich, du, er, sie – die ersten Verben.",
   words:`io|ich
tu|du
lui|er
lei|sie (Singular)
noi|wir
voi|ihr
loro|sie (Plural)
parlare|sprechen
lavorare|arbeiten
abitare|wohnen`,
   sents:`Parlo tedesco.|Ich spreche Deutsch.|Verben auf -are|Das Pronomen lässt man meist weg.
Parli italiano?|Sprichst du Italienisch?|Fragen|Fragen erkennt man nur an der Stimme.
Lei lavora a Roma.|Sie arbeitet in Rom.|Verben auf -are|
Noi abitiamo a Berlino.|Wir wohnen in Berlin.|Verben auf -are|
Voi siete di qui?|Seid ihr von hier?|essere|
Lei parla inglese?|Sprechen Sie Englisch?|Anrede|Die höfliche Anrede ist „Lei“ mit der 3. Person.
Lui non lavora oggi.|Er arbeitet heute nicht.|Verneinung|`}
 ]}
],
DIALOGS: `1|Ciao, come stai?|Hallo, wie geht's dir?|Bene, grazie. E tu?|Sono tre euro.|Abito a Berlino.
1|Grazie per l'aiuto!|Danke für die Hilfe!|Prego!|Non lo so.|Quanto costa?
2|Come ti chiami?|Wie heißt du?|Mi chiamo Daniel.|Ho vent'anni.|A dopo!
2|Di dove sei?|Woher kommst du?|Sono tedesco.|Mi chiamo Giulia.|Alle otto.
3|Vuoi un caffè?|Möchtest du einen Kaffee?|Sì, grazie.|Sono tedesco.|Ho due fratelli.
4|Dov'è il bagno?|Wo ist die Toilette?|Lì, a destra.|Sono cinque euro.|Mi chiamo Daniel.
5|Quanti anni hai?|Wie alt bist du?|Ho trent'anni.|Abito a Roma.|Bene, grazie.
5|Quanto costa il pane?|Wie viel kostet das Brot?|Un euro.|A domani.|Sono tedesco.
6|Parli italiano?|Sprichst du Italienisch?|Sì, un po'.|Ho vent'anni.|Prego.`,
SENTENCES: `A1|Mi chiamo Daniel e vengo dalla Germania.|Ich heiße Daniel und komme aus Deutschland.
A1|Abito a Roma da due anni.|Ich wohne seit zwei Jahren in Rom.
A1|Vorrei un caffè, per favore.|Ich hätte gern einen Kaffee, bitte.
A1|Il conto, per favore.|Die Rechnung, bitte.
A1|Dov'è la stazione?|Wo ist der Bahnhof?
A1|Oggi fa molto caldo.|Heute ist es sehr heiß.
A1|Ho fame.|Ich habe Hunger.
A1|Non parlo molto bene l'italiano.|Ich spreche nicht sehr gut Italienisch.
A1|Può ripetere, per favore?|Können Sie das bitte wiederholen?
A1|Mia sorella lavora in un ospedale.|Meine Schwester arbeitet in einem Krankenhaus.`,
PERSONS: ["io","tu","lui / lei / Lei","noi","voi","loro"],
TENSES: [
  ["pres","Presente","Was jetzt oder regelmäßig passiert: **parlo** = ich spreche."],
  ["pp","Passato prossimo","Abgeschlossene Handlung in der Vergangenheit: **ho parlato** = ich habe gesprochen. Bewegungsverben mit **essere**: **sono andato/a**."],
  ["imp","Imperfetto","Gewohnheiten und Beschreibungen in der Vergangenheit: **parlavo** = ich sprach (früher)."],
  ["fut","Futuro","Zukunft und Vermutungen: **parlerò** = ich werde sprechen. Im Alltag oft Präsens: Domani vado a Roma."]
],
VERBS: {
  essere:  ["sein", "sono,sei,è,siamo,siete,sono", es("stat"), "ero,eri,era,eravamo,eravate,erano", "sarò,sarai,sarà,saremo,sarete,saranno"],
  avere:   ["haben", "ho,hai,ha,abbiamo,avete,hanno", av("avuto"), imp("ave"), fut("avr")],
  andare:  ["gehen / fahren", "vado,vai,va,andiamo,andate,vanno", es("andat"), imp("anda"), fut("andr")],
  fare:    ["machen", "faccio,fai,fa,facciamo,fate,fanno", av("fatto"), imp("face"), fut("far")],
  potere:  ["können", "posso,puoi,può,possiamo,potete,possono", av("potuto"), imp("pote"), fut("potr")],
  volere:  ["wollen", "voglio,vuoi,vuole,vogliamo,volete,vogliono", av("voluto"), imp("vole"), fut("vorr")],
  dire:    ["sagen", "dico,dici,dice,diciamo,dite,dicono", av("detto"), imp("dice"), fut("dir")],
  venire:  ["kommen", "vengo,vieni,viene,veniamo,venite,vengono", es("venut"), imp("veni"), fut("verr")],
  vedere:  ["sehen", "vedo,vedi,vede,vediamo,vedete,vedono", av("visto"), imp("vede"), fut("vedr")],
  sapere:  ["wissen", "so,sai,sa,sappiamo,sapete,sanno", av("saputo"), imp("sape"), fut("sapr")],
  stare:   ["sein / sich befinden", "sto,stai,sta,stiamo,state,stanno", es("stat"), imp("sta"), fut("star")],
  parlare: ["sprechen (Muster für -are)", "parlo,parli,parla,parliamo,parlate,parlano", av("parlato"), imp("parla"), fut("parler")],
  prendere:["nehmen (Muster für -ere)", "prendo,prendi,prende,prendiamo,prendete,prendono", av("preso"), imp("prende"), fut("prender")],
  dormire: ["schlafen (Muster für -ire)", "dormo,dormi,dorme,dormiamo,dormite,dormono", av("dormito"), imp("dormi"), fut("dormir")],
  capire:  ["verstehen (-ire mit -isc-)", "capisco,capisci,capisce,capiamo,capite,capiscono", av("capito"), imp("capi"), fut("capir")]
},
VERB_NOTES: {
  essere: "Passato prossimo von **essere** und **stare** ist gleich: **sono stato/a**.",
  andare: "Mit **essere** passt sich das Partizip an: **lei è andata**, **siamo andati**.",
  capire: "Viele Verben auf -ire schieben **-isc-** ein: **capisco**, **finisco**, **preferisco** – aber nicht bei noi und voi.",
  parlare: "Betonung in **parlano** auf der ersten Silbe: PAR-la-no."
},
CHEATS: [
 ["Aussprache in Italien", `- **c** und **g** vor e/i weich: **ciao**, **gelato**; sonst hart: **casa**, **gola**.
- **ch** und **gh** sind hart: **che**, **spaghetti**.
- **gli** klingt wie „lj“: **figlio**; **gn** wie „nj“: **gnocchi**.
- **sc** vor e/i wie „sch“: **pesce**.
- **z** wie „ts“ oder „ds“: **pizza**, **zero**.
- Doppelkonsonanten spricht man hörbar länger: **pena** – **penna**, **caro** – **carro**.
- Das **h** ist immer stumm: **ho**.
- Meist auf der vorletzten Silbe betont; ein Akzent auf dem letzten Vokal zeigt Endbetonung: **città**, **caffè**, **perché**.`],
 ["Artikel & Geschlecht", `- Männlich: **il** (il libro), **lo** vor s+Konsonant, z, gn, ps (lo studente, lo zio), **l'** vor Vokal (l'amico). Plural: **i**, **gli**.
- Weiblich: **la** (la casa), **l'** vor Vokal (l'amica). Plural: **le**.
- Unbestimmt: **un**, **uno**, **una**, **un'**.
- Wörter auf **-o** meist männlich, auf **-a** meist weiblich, auf **-e** beides: **il pane**, **la notte**.
- Plural: **-o → -i**, **-a → -e**, **-e → -i**: libri, case, notti.`],
 ["essere oder stare?", `- **essere** (sein) für Identität, Herkunft, Eigenschaften: **Sono tedesco. È simpatica.**
- **stare** für das Befinden und in festen Wendungen: **Come stai? Sto bene.**
- **stare** + Gerundium = gerade etwas tun: **Sto lavorando.**
- Wo etwas ist, sagt man mit **essere**: **Dov'è la stazione?**`],
 ["Du & Sie", `- **tu** (du): Freunde, Familie, Gleichaltrige.
- **Lei** (Sie): höfliche Anrede mit dem Verb in der 3. Person: **Come sta?**
- **voi** (ihr): für mehrere Personen – auch höflich üblich.`],
 ["Präposition + Artikel", `Präpositionen verschmelzen mit dem Artikel:
- **di**: del, dello, della, dei, degli, delle
- **a**: al, allo, alla, ai, agli, alle
- **da**: dal, dallo, dalla …
- **in**: nel, nello, nella …
- **su**: sul, sullo, sulla …
Beispiele: **Vado al cinema. Vengo dalla Germania. Il libro è sul tavolo.**`],
 ["Passato prossimo: avere oder essere?", `- Meist mit **avere**: **Ho mangiato.**
- Mit **essere**: viele Verben der Bewegung und Veränderung (andare, venire, partire, arrivare, nascere, stare, essere) und alle reflexiven Verben: **Sono andato/a. Mi sono alzato/a.**
- Bei **essere** passt sich das Partizip an: **Lei è andata. Siamo arrivati.**`]
]
};
})();
