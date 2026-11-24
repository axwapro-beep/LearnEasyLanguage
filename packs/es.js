/* ===== Sprachpaket: Spanisch (Spanien, castellano peninsular) =====
   Norm: Real Academia Española / ASALE (Ortografía 2010), Niveaus nach dem
   Plan Curricular des Instituto Cervantes (GER A1–C2). Siehe QUELLEN.md. */
LEL_PACKS.es = {
LANG: {code:"es", flag:"🇪🇸", name:"Spanisch", adj:"Spanisch (Spanien)", inLang:"Spanisch", into:"ins Spanische",
  country:"Spanien", voiceFrom:"aus Spanien", tts:"es-ES", ttsRe:/^es[-_]ES/i, prefix:"es",
  voicePath:"Spanisch → Spanien", status:"A1 · Abschnitt 1 von 6", tutor:false},
ART_RE: /^(el|la|los|las|un|una|unos|unas|der|die|das|ein|eine|einen) /,
F_RE: /m[oó]nica|paulina|marisol|luc[ií]a|elvira|helena|female|mujer|woman/i,
M_RE: /jorge|juan|diego|pablo|[aá]lvaro|\bmale\b|hombre|\bman\b/i,
FUNC: ["el","la","los","las","un","una","de","del","en","al","a","con","para","por","que","y","se","no","me","te","lo"],
LEVEL_NAMES: {A1:"Absolute Grundlagen",A2:"Einfache Gespräche & Alltag",B1:"Selbstständig kommunizieren",B2:"Flüssiger sprechen",C1:"Fortgeschrittenes Spanisch"},
CURRICULUM: {
 A1:[
  ["A1-01","Begrüßen & sich vorstellen","hola, buenos días, me llamo …, ¿qué tal?, tú vs. usted"],
  ["A1-02","Aussprache in Spanien","c/z wie englisches „th“, j und g wie „ch“ in „Bach“, ll/y, ñ, stummes h, Betonung"],
  ["A1-03","Artikel & Geschlecht","el / la / los / las, un / una, typische Endungen und Ausnahmen"],
  ["A1-04","Personalpronomen & ser","yo, tú, él/ella/usted, nosotros, vosotros, ellos – soy, eres, es …"],
  ["A1-05","Zahlen, Alter & Herkunft","0–100, tener … años, ser de, vivir en"],
  ["A1-06","ser vs. estar","dauerhaft vs. Zustand und Ort: estoy cansado, está en Madrid"],
  ["A1-07","Regelmäßige Verben auf -ar","hablar, trabajar, estudiar, llamarse"],
  ["A1-08","Verben auf -er und -ir","comer, beber, vivir, escribir"],
  ["A1-09","Familie & Possessivbegleiter","mi padre, tu madre, nuestros hermanos"],
  ["A1-10","Im Café & Restaurant","un café con leche, la cuenta, quería …"],
  ["A1-11","Uhrzeit, Tage & Monate","¿qué hora es?, el lunes, por la mañana"],
  ["A1-12","tener, ir, hacer & querer","die wichtigsten unregelmäßigen Verben im Präsens"],
  ["A1-13","hay / está","Existenz (hay un bar) und Ort (el bar está aquí)"],
  ["A1-14","Fragewörter & Verneinung","dónde, cuándo, cuánto, por qué – no … nada"],
  ["A1-15","gustar","me gusta / me gustan, a mí también, a mí tampoco"],
  ["A1-T","A1-Abschlusstest","Prüfung über alle A1-Themen"]],
 A2:[
  ["A2-01","Pretérito perfecto","he comido – was heute oder in dieser Woche passiert ist"],
  ["A2-02","Pretérito indefinido","ayer comí – abgeschlossene Vergangenheit"],
  ["A2-03","Pretérito imperfecto","Gewohnheiten und Beschreibungen in der Vergangenheit"],
  ["A2-04","ir a + Infinitiv","Pläne: voy a viajar"],
  ["A2-05","Reflexive Verben","levantarse, ducharse, acostarse"],
  ["A2-06","Objektpronomen","lo, la, le, se lo"],
  ["A2-07","Vergleiche","más … que, menos … que, tan … como"],
  ["A2-T","A2-Abschlusstest","Prüfung über alle A2-Themen"]],
 B1:[
  ["B1-01","Indefinido vs. imperfecto","erzählen: Handlung und Hintergrund"],
  ["B1-02","Subjuntivo presente","Wünsche und Gefühle: quiero que vengas"],
  ["B1-03","Imperativ","bejaht und verneint, mit Pronomen"],
  ["B1-04","Futuro & condicional","Vermutungen und höfliche Bitten"],
  ["B1-T","B1-Abschlusstest","Prüfung über alle B1-Themen"]],
 B2:[
  ["B2-01","Subjuntivo imperfecto","si tuviera tiempo …"],
  ["B2-02","Bedingungssätze","reale und irreale Bedingungen"],
  ["B2-03","Indirekte Rede","dijo que vendría"],
  ["B2-T","B2-Abschlusstest","Prüfung über alle B2-Themen"]],
 C1:[
  ["C1-01","Stil & Register","formell, umgangssprachlich, regionale Unterschiede"],
  ["C1-02","Komplexe Satzgefüge","Konnektoren, Nominalstil"],
  ["C1-T","C1-Abschlusstest","Prüfung über alle C1-Themen"]]
},
SCENARIOS: [
  ["☕","En la cafetería","Bestelle einen Kaffee und etwas zu essen"],
  ["🛒","En el supermercado","Frag nach Produkten, Preisen und bezahle"],
  ["📞","Por teléfono","Reserviere einen Tisch im Restaurant"],
  ["🍻","Con amigos","Verabrede dich für den Abend"],
  ["👨‍👩‍👧","Con la familia","Lerne die Familie eines Freundes kennen"],
  ["🧭","En la calle","Frag nach dem Weg zur U-Bahn"],
  ["💊","En la farmacia","Beschreibe Beschwerden und kauf etwas"],
  ["🏨","En el hotel","Check-in und Fragen an der Rezeption"],
  ["🏠","Con el vecino","Smalltalk mit dem Nachbarn"],
  ["🎲","Conversación libre","Freies Gespräch auf deinem Niveau"]
],
SCEN_DE: ["Im Café","Im Supermarkt","Am Telefon","Mit Freunden","Mit der Familie","Auf der Straße","In der Apotheke","Im Hotel","Mit dem Nachbarn","Freies Gespräch"],
STARTER_VOCAB: [
  ["hola","hallo"],["buenos días","guten Morgen"],["buenas tardes","guten Tag (nachmittags)"],["buenas noches","guten Abend / gute Nacht"],
  ["me llamo …","ich heiße …"],["¿qué tal?","wie geht's?"],["gracias","danke"],["por favor","bitte"],
  ["perdón","Entschuldigung"],["sí","ja"],["no","nein"],["adiós","tschüss / auf Wiedersehen"],["hasta luego","bis später"]
],
INITIAL_CHAT: [
  {role:"assistant", content:"¡Hola! Hier lernst du Spanisch, wie es in Spanien gesprochen wird 🇪🇸\n\nFang einfach mit der ersten Lektion im Lernpfad an."}
],
THEMES: [
 {id:"gruss",e:"👋",name:"Begrüßung & Höflichkeit",level:"A1",w:`hola|hallo
buenos días|guten Morgen
buenas tardes|guten Tag (nachmittags)
buenas noches|guten Abend / gute Nacht
adiós|tschüss / auf Wiedersehen
hasta luego|bis später
hasta mañana|bis morgen
hasta pronto|bis bald
¿qué tal?|wie geht's?
¿cómo estás?|wie geht es dir?
¿cómo está usted?|wie geht es Ihnen?
muy bien|sehr gut
gracias|danke
muchas gracias|vielen Dank
de nada|gern geschehen
por favor|bitte
perdón|Entschuldigung
lo siento|es tut mir leid
encantado|freut mich (sagt ein Mann)
encantada|freut mich (sagt eine Frau)
mucho gusto|freut mich
bienvenido|willkommen`},
 {id:"ichdu",e:"🙋",name:"Personen & Vorstellen",level:"A1",w:`yo|ich
tú|du
él|er
ella|sie (Singular)
usted|Sie (höflich, Singular)
nosotros|wir
vosotros|ihr (in Spanien)
ellos|sie (Plural)
ustedes|Sie (höflich, Plural)
me llamo|ich heiße
el nombre|der Name
el apellido|der Nachname
el señor|der Herr
la señora|die Frau (Anrede)
alemán|deutsch / der Deutsche
alemana|deutsch / die Deutsche
español|spanisch / der Spanier
Alemania|Deutschland
España|Spanien`},
 {id:"fragen",e:"❓",name:"Fragewörter",level:"A1",w:`¿qué?|was?
¿quién?|wer?
¿dónde?|wo?
¿adónde?|wohin?
¿de dónde?|woher?
¿cuándo?|wann?
¿cómo?|wie?
¿cuánto?|wie viel?
¿cuántos?|wie viele?
¿por qué?|warum?
porque|weil
¿cuál?|welcher / welche / welches?`},
 {id:"zahlen",e:"🔢",name:"Zahlen",level:"A1",w:`cero|null
uno|eins
dos|zwei
tres|drei
cuatro|vier
cinco|fünf
seis|sechs
siete|sieben
ocho|acht
nueve|neun
diez|zehn
once|elf
doce|zwölf
trece|dreizehn
catorce|vierzehn
quince|fünfzehn
dieciséis|sechzehn
diecisiete|siebzehn
dieciocho|achtzehn
diecinueve|neunzehn
veinte|zwanzig
veintiuno|einundzwanzig
treinta|dreißig
cuarenta|vierzig
cincuenta|fünfzig
sesenta|sechzig
setenta|siebzig
ochenta|achtzig
noventa|neunzig
cien|hundert
mil|tausend
el euro|der Euro`},
 {id:"verben",e:"⚙️",name:"Erste Verben",level:"A1",w:`ser|sein (Wesen, Herkunft)
estar|sein (Zustand, Ort)
tener|haben
ir|gehen / fahren
hacer|machen
poder|können
querer|wollen / mögen
hablar|sprechen
trabajar|arbeiten
estudiar|lernen / studieren
vivir|leben / wohnen
comer|essen
beber|trinken
llamarse|heißen
venir|kommen
saber|wissen
ver|sehen
dar|geben
decir|sagen
poner|legen / stellen`},
 {id:"alltag",e:"☀️",name:"Erste Alltagswörter",level:"A1",w:`sí|ja
no|nein
claro|klar
vale|okay (in Spanien)
también|auch
tampoco|auch nicht
nada|nichts
nunca|nie
hoy|heute
mañana|morgen
ayer|gestern
aquí|hier
allí|dort
mucho|viel
poco|wenig
muy|sehr
bien|gut
mal|schlecht
el café|der Kaffee
el agua|das Wasser
la cerveza|das Bier
el pan|das Brot
la casa|das Haus
la calle|die Straße
el baño|die Toilette / das Bad
la estación|der Bahnhof
el hermano|der Bruder
la hermana|die Schwester
el amigo|der Freund
la amiga|die Freundin`}
],
PATH_SECTIONS: [
 {id:"s1", title:"Erste Schritte", pt:"Primeros pasos", level:"A1", color:"#2F6BFF", units:[
  {id:"u1", e:"👋", title:"Begrüßungen", pt:"¡Hola!", desc:"Hallo sagen, danke und bitte.",
   words:`hola|hallo
buenos días|guten Morgen
buenas tardes|guten Tag (nachmittags)
buenas noches|guten Abend / gute Nacht
adiós|tschüss / auf Wiedersehen
hasta luego|bis später
gracias|danke
por favor|bitte
de nada|gern geschehen
¿qué tal?|wie geht's?`,
   sents:`¡Hola, buenos días!|Hallo, guten Morgen!|Begrüßung|„Buenos días“ sagt man in Spanien bis zum Mittagessen, also oft bis etwa 14 Uhr.
Buenas tardes, ¿qué tal?|Guten Tag, wie geht's?|Begrüßung|„Buenas tardes“ gilt nach dem Mittagessen, bis es dunkel wird.
Muy bien, gracias.|Sehr gut, danke.|Begrüßung|
¡Buenas noches y hasta mañana!|Gute Nacht und bis morgen!|Begrüßung|„Buenas noches“ heißt sowohl „guten Abend“ als auch „gute Nacht“.
Adiós, ¡hasta luego!|Tschüss, bis später!|Begrüßung|„Hasta luego“ sagt man in Spanien auch, wenn man sich nicht am selben Tag wiedersieht.
Un café, por favor.|Einen Kaffee, bitte.|Höflichkeit|`},
  {id:"u2", e:"🙋", title:"Sich vorstellen", pt:"Me llamo…", desc:"Name, Herkunft und Wohnort.",
   words:`me llamo|ich heiße
soy|ich bin
¿cómo te llamas?|wie heißt du?
¿de dónde eres?|woher kommst du?
soy de Alemania|ich komme aus Deutschland
vivo en|ich wohne in
encantado|freut mich (sagt ein Mann)
encantada|freut mich (sagt eine Frau)
el nombre|der Name
alemán|deutsch / Deutscher`,
   sents:`Me llamo Daniel.|Ich heiße Daniel.|Reflexive Verben|„Me llamo“ heißt wörtlich „ich nenne mich“ – llamarse ist ein reflexives Verb.
¿Cómo te llamas?|Wie heißt du?|Fragen|Fragen stehen im Spanischen zwischen ¿ und ?.
Soy alemán.|Ich bin Deutscher.|ser/estar|Die Nationalität gehört zum Wesen – deshalb „ser“.
Soy de Alemania.|Ich komme aus Deutschland.|Präpositionen|Herkunft: ser de + Land oder Stadt.
Vivo en Berlín.|Ich wohne in Berlin.|Präpositionen|Vor Städtenamen steht kein Artikel.
¡Encantada!|Freut mich!|Begrüßung|Frauen sagen „encantada“, Männer „encantado“. Für alle passt „mucho gusto“.
¿De dónde eres?|Woher kommst du?|Fragen|`,
   story:{title:"Im Sprachkurs", lines:`Lucía|¡Hola! ¿Cómo te llamas?|Hallo! Wie heißt du?
Daniel|Me llamo Daniel. ¿Y tú?|Ich heiße Daniel. Und du?
Lucía|Yo soy Lucía. ¿De dónde eres?|Ich bin Lucía. Woher kommst du?
Daniel|Soy de Alemania, pero vivo en Madrid.|Ich komme aus Deutschland, aber ich wohne in Madrid.
Lucía|¡Encantada, Daniel!|Freut mich, Daniel!`, qs:`Woher kommt Daniel?|Aus Deutschland|Aus Madrid|Aus Mexiko
Wo wohnt Daniel?|In Madrid|In Berlin|In Sevilla
Was sagt Lucía am Ende?|Freut mich|Bis morgen|Danke schön`}},
  {id:"u3", e:"✅", title:"Ja und Nein", pt:"Sí o no", desc:"Zustimmen, ablehnen, verneinen.",
   words:`sí|ja
no|nein
claro|klar
vale|okay (in Spanien)
también|auch
tampoco|auch nicht
nada|nichts
nunca|nie
no sé|ich weiß nicht
de acuerdo|einverstanden`,
   sents:`Sí, claro.|Ja, klar.|Zustimmung|
No, gracias.|Nein, danke.|Verneinung|
No sé.|Ich weiß nicht.|Verneinung|„no“ steht immer direkt vor dem Verb.
Vale, de acuerdo.|Okay, einverstanden.|Zustimmung|„Vale“ hört man in Spanien ständig. In Lateinamerika sagt man eher „bueno“ oder „okey“.
No quiero nada.|Ich will nichts.|Verneinung|Die doppelte Verneinung ist im Spanischen richtig: no … nada.
Yo tampoco.|Ich auch nicht.|Verneinung|Auf einen verneinten Satz antwortet man mit „tampoco“, auf einen bejahten mit „también“.
Yo también.|Ich auch.|Zustimmung|`},
  {id:"u4", e:"❓", title:"Grundlegende Fragen", pt:"Preguntas", desc:"Wer, was, wo, wann und wie viel?",
   words:`¿qué?|was?
¿quién?|wer?
¿dónde?|wo?
¿cuándo?|wann?
¿cómo?|wie?
¿cuánto?|wie viel?
¿por qué?|warum?
porque|weil
¿cuál?|welcher / welche / welches?
¿adónde?|wohin?`,
   sents:`¿Qué es esto?|Was ist das?|Fragen|Fragewörter tragen immer einen Akzent: qué, quién, dónde …
¿Dónde está el baño?|Wo ist die Toilette?|ser/estar|Wo sich etwas befindet, sagt man mit „estar“.
¿Cuánto cuesta?|Wie viel kostet das?|Fragen|
¿Quién es?|Wer ist das?|Fragen|
¿Por qué no vienes?|Warum kommst du nicht?|Fragen|„¿Por qué?“ (warum) wird getrennt und mit Akzent geschrieben, „porque“ (weil) zusammen und ohne.
Porque estoy cansado.|Weil ich müde bin.|ser/estar|Ein vorübergehender Zustand – deshalb „estar“.
¿Cuándo empieza la clase?|Wann fängt der Unterricht an?|Fragen|`},
  {id:"u5", e:"🔢", title:"Zahlen", pt:"Números", desc:"Von eins bis hundert, Alter und Preise.",
   words:`uno|eins
dos|zwei
tres|drei
cuatro|vier
cinco|fünf
diez|zehn
veinte|zwanzig
cien|hundert
el euro|der Euro
¿cuántos años tienes?|wie alt bist du?`,
   sents:`Tengo veinte años.|Ich bin zwanzig Jahre alt.|tener|Das Alter sagt man mit „tener“ (haben): tengo … años.
¿Cuántos años tienes?|Wie alt bist du?|Fragen|
Son cinco euros.|Das macht fünf Euro.|Zahlen|
Uno, dos, tres, cuatro.|Eins, zwei, drei, vier.|Zahlen|
Tengo dos hermanos.|Ich habe zwei Geschwister.|tener|„Hermanos“ heißt Brüder oder Geschwister.
Cien euros es mucho dinero.|Hundert Euro sind viel Geld.|Zahlen|Genau 100 heißt „cien“, ab 101 „ciento“: ciento uno.`},
  {id:"u6", e:"🧱", title:"Einfache Sätze", pt:"Frases simples", desc:"Ich, du, er, sie – die ersten Verben.",
   words:`yo|ich
tú|du
él|er
ella|sie (Singular)
nosotros|wir
vosotros|ihr (in Spanien)
ellos|sie (Plural)
usted|Sie (höflich)
hablar|sprechen
trabajar|arbeiten`,
   sents:`Yo hablo alemán.|Ich spreche Deutsch.|Verben auf -ar|Das Pronomen lässt man meist weg: Hablo alemán.
¿Hablas español?|Sprichst du Spanisch?|Verben auf -ar|
Ella trabaja en Madrid.|Sie arbeitet in Madrid.|Verben auf -ar|
Nosotros vivimos en Berlín.|Wir wohnen in Berlin.|Verben auf -ir|
¿Vosotros sois de aquí?|Seid ihr von hier?|Anrede|„Vosotros“ (ihr) benutzt man nur in Spanien. In Lateinamerika sagt man „ustedes“.
¿Usted habla inglés?|Sprechen Sie Englisch?|Anrede|„Usted“ (Sie) steht mit der Verbform der 3. Person: habla.
Él no trabaja hoy.|Er arbeitet heute nicht.|Verneinung|`}
 ]}
],
DIALOGS: `1|Hola, ¿qué tal?|Hallo, wie geht's?|Muy bien, gracias. ¿Y tú?|Son tres euros.|Vivo en Berlín.
1|¡Gracias por la ayuda!|Danke für die Hilfe!|¡De nada!|No sé.|¿Cuánto cuesta?
2|¿Cómo te llamas?|Wie heißt du?|Me llamo Daniel.|Tengo veinte años.|¡Hasta luego!
2|¿De dónde eres?|Woher kommst du?|Soy de Alemania.|Me llamo Lucía.|A las ocho.
3|¿Quieres un café?|Möchtest du einen Kaffee?|Sí, por favor.|Soy de Alemania.|Tengo dos hermanos.
4|¿Dónde está el baño?|Wo ist die Toilette?|Allí, a la derecha.|Son cinco euros.|Me llamo Daniel.
5|¿Cuántos años tienes?|Wie alt bist du?|Tengo treinta años.|Vivo en Madrid.|Muy bien, gracias.
5|¿Cuánto cuesta el pan?|Wie viel kostet das Brot?|Un euro.|Hasta mañana.|Soy alemán.
6|¿Hablas español?|Sprichst du Spanisch?|Sí, un poco.|Tengo veinte años.|De nada.`,
SENTENCES: `A1|Me llamo Daniel y soy de Alemania.|Ich heiße Daniel und komme aus Deutschland.
A1|Vivo en Madrid desde hace dos años.|Ich wohne seit zwei Jahren in Madrid.
A1|Quería un café con leche, por favor.|Ich hätte gern einen Milchkaffee, bitte.
A1|La cuenta, por favor.|Die Rechnung, bitte.
A1|¿Dónde está la estación?|Wo ist der Bahnhof?
A1|Hoy hace mucho calor.|Heute ist es sehr heiß.
A1|Tengo hambre.|Ich habe Hunger.
A1|No hablo muy bien español.|Ich spreche nicht sehr gut Spanisch.
A1|¿Puedes repetir, por favor?|Kannst du das bitte wiederholen?
A1|Mi hermana trabaja en un hospital.|Meine Schwester arbeitet in einem Krankenhaus.`,
PERSONS: ["yo","tú","él / ella / usted","nosotros / nosotras","vosotros / vosotras","ellos / ellas / ustedes"],
TENSES: [
  ["pres","Presente","Was jetzt oder regelmäßig passiert: **hablo** = ich spreche."],
  ["indef","Indefinido","Abgeschlossene Handlung zu einem vergangenen Zeitpunkt (ayer, el año pasado …): **fui** = ich war / ich ging. Für heute oder diese Woche sagt man in Spanien meist das Perfekt: **he hablado**."],
  ["imp","Imperfecto","Gewohnheiten und Beschreibungen in der Vergangenheit (antes …). Höflich: **quería** = ich hätte gern."],
  ["fut","Futuro","Zukunft oder Vermutung. Im Alltag oft **ir a** + Infinitiv: **voy a hablar** = ich werde sprechen."]
],
VERBS: {
  ser:   ["sein (Wesen, Herkunft)", "soy,eres,es,somos,sois,son", "fui,fuiste,fue,fuimos,fuisteis,fueron", "era,eras,era,éramos,erais,eran", "seré,serás,será,seremos,seréis,serán"],
  estar: ["sein (Zustand, Ort)", "estoy,estás,está,estamos,estáis,están", "estuve,estuviste,estuvo,estuvimos,estuvisteis,estuvieron", "estaba,estabas,estaba,estábamos,estabais,estaban", "estaré,estarás,estará,estaremos,estaréis,estarán"],
  tener: ["haben", "tengo,tienes,tiene,tenemos,tenéis,tienen", "tuve,tuviste,tuvo,tuvimos,tuvisteis,tuvieron", "tenía,tenías,tenía,teníamos,teníais,tenían", "tendré,tendrás,tendrá,tendremos,tendréis,tendrán"],
  ir:    ["gehen / fahren", "voy,vas,va,vamos,vais,van", "fui,fuiste,fue,fuimos,fuisteis,fueron", "iba,ibas,iba,íbamos,ibais,iban", "iré,irás,irá,iremos,iréis,irán"],
  hacer: ["machen", "hago,haces,hace,hacemos,hacéis,hacen", "hice,hiciste,hizo,hicimos,hicisteis,hicieron", "hacía,hacías,hacía,hacíamos,hacíais,hacían", "haré,harás,hará,haremos,haréis,harán"],
  poder: ["können / dürfen", "puedo,puedes,puede,podemos,podéis,pueden", "pude,pudiste,pudo,pudimos,pudisteis,pudieron", "podía,podías,podía,podíamos,podíais,podían", "podré,podrás,podrá,podremos,podréis,podrán"],
  querer:["wollen / mögen", "quiero,quieres,quiere,queremos,queréis,quieren", "quise,quisiste,quiso,quisimos,quisisteis,quisieron", "quería,querías,quería,queríamos,queríais,querían", "querré,querrás,querrá,querremos,querréis,querrán"],
  decir: ["sagen", "digo,dices,dice,decimos,decís,dicen", "dije,dijiste,dijo,dijimos,dijisteis,dijeron", "decía,decías,decía,decíamos,decíais,decían", "diré,dirás,dirá,diremos,diréis,dirán"],
  venir: ["kommen", "vengo,vienes,viene,venimos,venís,vienen", "vine,viniste,vino,vinimos,vinisteis,vinieron", "venía,venías,venía,veníamos,veníais,venían", "vendré,vendrás,vendrá,vendremos,vendréis,vendrán"],
  ver:   ["sehen", "veo,ves,ve,vemos,veis,ven", "vi,viste,vio,vimos,visteis,vieron", "veía,veías,veía,veíamos,veíais,veían", "veré,verás,verá,veremos,veréis,verán"],
  dar:   ["geben", "doy,das,da,damos,dais,dan", "di,diste,dio,dimos,disteis,dieron", "daba,dabas,daba,dábamos,dabais,daban", "daré,darás,dará,daremos,daréis,darán"],
  saber: ["wissen / können", "sé,sabes,sabe,sabemos,sabéis,saben", "supe,supiste,supo,supimos,supisteis,supieron", "sabía,sabías,sabía,sabíamos,sabíais,sabían", "sabré,sabrás,sabrá,sabremos,sabréis,sabrán"],
  poner: ["legen / stellen", "pongo,pones,pone,ponemos,ponéis,ponen", "puse,pusiste,puso,pusimos,pusisteis,pusieron", "ponía,ponías,ponía,poníamos,poníais,ponían", "pondré,pondrás,pondrá,pondremos,pondréis,pondrán"],
  hablar:["sprechen (Muster für -ar)", "hablo,hablas,habla,hablamos,habláis,hablan", "hablé,hablaste,habló,hablamos,hablasteis,hablaron", "hablaba,hablabas,hablaba,hablábamos,hablabais,hablaban", "hablaré,hablarás,hablará,hablaremos,hablaréis,hablarán"],
  comer: ["essen (Muster für -er)", "como,comes,come,comemos,coméis,comen", "comí,comiste,comió,comimos,comisteis,comieron", "comía,comías,comía,comíamos,comíais,comían", "comeré,comerás,comerá,comeremos,comeréis,comerán"],
  vivir: ["leben / wohnen (Muster für -ir)", "vivo,vives,vive,vivimos,vivís,viven", "viví,viviste,vivió,vivimos,vivisteis,vivieron", "vivía,vivías,vivía,vivíamos,vivíais,vivían", "viviré,vivirás,vivirá,viviremos,viviréis,vivirán"]
},
VERB_NOTES: {
  ser: "Indefinido von **ser** und **ir** ist gleich: **fui** = ich war / ich ging. Der Zusammenhang entscheidet.",
  ir: "Indefinido von **ir** und **ser** ist gleich: **fui** = ich ging / ich war.",
  hablar: "Bei Verben auf -ar und -ir sind Präsens und Indefinido in der wir-Form gleich: **hablamos**, **vivimos**.",
  ver: "**vi**, **vio**, **dio**, **fue** schreibt man ohne Akzent, weil sie nur eine Silbe haben."
},
CHEATS: [
 ["Aussprache in Spanien", `- **c** vor e/i und **z** klingen in den meisten Teilen Spaniens wie das englische „th“: **gracias**, **cerveza**. In Lateinamerika und auf den Kanaren wie „s“.
- **j** und **g** vor e/i klingen wie „ch“ in „Bach“: **jamón**, **gente**.
- **ll** und **y** klingen wie das deutsche „j“: **llamo**, **yo**.
- **ñ** klingt wie „nj“: **España**.
- **h** spricht man nicht: **hola** [ola].
- **b** und **v** klingen gleich: **vino**, **bien**.
- **r** am Wortanfang und **rr** werden gerollt: **perro**. Ein einfaches **r** zwischen Vokalen wird nur kurz getippt: **pero**.
- Vokale sind immer klar und kurz – auch unbetont.`],
 ["Betonung & Akzent", `- Wörter auf Vokal, **-n** oder **-s** betont man auf der vorletzten Silbe: **casa**, **hablan**.
- Wörter auf anderen Konsonanten betont man auf der letzten Silbe: **hablar**, **ciudad**.
- Weicht die Betonung davon ab, steht ein Akzent: **café**, **teléfono**, **árbol**.
- Der Akzent unterscheidet auch Wörter: **sí** (ja) – **si** (wenn), **tú** (du) – **tu** (dein), **él** (er) – **el** (der).`],
 ["Artikel & Geschlecht", `- Bestimmt: **el** (m), **la** (f), **los**, **las** – unbestimmt: **un**, **una**, **unos**, **unas**.
- Wörter auf **-o** sind meist männlich, auf **-a** meist weiblich.
- Ausnahmen: **el día**, **el mapa**, **el problema**, **la mano**, **la foto**.
- Weiblich: Endungen **-ción**, **-dad**, **-tad**: **la estación**, **la ciudad**.
- Weibliche Wörter mit betontem a- am Anfang bekommen im Singular **el**: **el agua** (aber: **las aguas**, **el agua fría**).
- **a** + **el** = **al**, **de** + **el** = **del**: **Voy al cine. Soy del norte.**`],
 ["ser oder estar?", `**ser** – Wesen und Identität:
- Name, Herkunft, Beruf: **Soy Daniel. Soy de Alemania. Soy profesor.**
- Eigenschaften: **Ella es simpática.**
- Uhrzeit und Datum: **Son las tres.**

**estar** – Zustand und Ort:
- Befinden: **Estoy cansado.**
- Wo jemand oder etwas ist: **Estoy en casa. Madrid está en España.**
- Gerade dabei sein: **Estoy comiendo.**

Dass es etwas gibt, sagt man mit **hay**: **Hay un bar aquí.**`],
 ["Du, Sie & ihr", `- **tú** (du): In Spanien sehr verbreitet – auch mit Kollegen oder im Geschäft.
- **usted** (Sie): mit älteren Menschen, Behörden, in formellen Situationen. Verb in der 3. Person: **¿Cómo está usted?**
- **vosotros** (ihr): nur in Spanien. **¿Qué queréis?**
- **ustedes** (Sie, Plural): in Spanien höflich, in Lateinamerika auch für „ihr“.`],
 ["Fragen & Verneinung", `- Fragen und Ausrufe haben am Anfang ein umgedrehtes Zeichen: **¿Qué tal? ¡Qué bien!**
- Fragewörter tragen einen Akzent: **qué**, **quién**, **dónde**, **cuándo**, **cómo**, **cuánto**.
- **no** steht direkt vor dem Verb: **No hablo francés.**
- Doppelte Verneinung ist richtig: **No sé nada. No viene nadie.**`],
 ["Gerade etwas tun: estar + Gerundium", `- **estar** + Gerundium: **Estoy trabajando.** (Ich arbeite gerade.)
- Gerundium: **-ar → -ando** (**hablando**), **-er/-ir → -iendo** (**comiendo**, **viviendo**).
- **¿Qué estás haciendo?** – Was machst du gerade?`]
]
};
