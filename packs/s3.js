/* ===== Abschnitt 3 „Unterwegs“ (A2) für es, fr, en, it ===== */
(function(){
const C = "#E8632B";
const add = (code, sec, dlg) => {
  const P = LEL_PACKS[code]; if(!P) return;
  P.PATH_SECTIONS.push(sec);
  P.DIALOGS = P.DIALOGS.trim() + "\n" + dlg.trim();
  P.LANG.status = P.LANG.status.replace(/^A1(–A2)? · Abschnitt \d von 6/, "A2 · Abschnitt 3 von 6");
};
const D = {
 u13:["🚌","Verkehrsmittel","Bus, Bahn, Fahrkarten."],
 u14:["🧭","Wegbeschreibung","Links, rechts, geradeaus."],
 u15:["🌦️","Wetter","Wetter und Jahreszeiten."],
 u16:["⚽","Freizeit","Hobbys und Verabredungen."],
 u17:["🩺","Gesundheit","Körper, Schmerzen, Apotheke."],
 u18:["⏪","Gestern","Erste Schritte in der Vergangenheit."]
};
const unit = (id, pt, words, sents) => ({id, e:D[id][0], title:D[id][1], pt, desc:D[id][2], words, sents});

/* ---------- Spanisch ---------- */
add("es", {id:"s3", title:"Unterwegs", pt:"De viaje", level:"A2", color:C, units:[
 unit("u13", "El transporte", `el autobús|der Bus
el tren|der Zug
el metro|die U-Bahn
el coche|das Auto
la bicicleta|das Fahrrad
el billete|die Fahrkarte
la estación|der Bahnhof
la parada|die Haltestelle
el andén|der Bahnsteig
a pie|zu Fuß`, `Voy al trabajo en metro.|Ich fahre mit der U-Bahn zur Arbeit.|Präpositionen|Verkehrsmittel mit „en“: en metro, en tren – aber „a pie“.
Un billete para Madrid, por favor.|Eine Fahrkarte nach Madrid, bitte.|Reisen|
¿A qué hora sale el tren?|Wann fährt der Zug ab?|Fragen|salir = abfahren, llegar = ankommen.
El autobús llega a las diez.|Der Bus kommt um zehn an.|Uhrzeit|
¿Dónde está la parada?|Wo ist die Haltestelle?|estar|Für Orte nimmt man „estar“.
Prefiero ir a pie.|Ich gehe lieber zu Fuß.|preferir|preferir: e wird zu ie – prefiero.`),
 unit("u14", "¿Por dónde se va?", `a la izquierda|links
a la derecha|rechts
todo recto|geradeaus
cerca|in der Nähe
lejos|weit weg
la calle|die Straße
la esquina|die Ecke
el semáforo|die Ampel
cruzar|überqueren
girar|abbiegen`, `Perdone, ¿dónde está el museo?|Entschuldigung, wo ist das Museum?|Höflichkeit|„Perdone“ ist die höfliche Form (usted).
Siga todo recto.|Gehen Sie geradeaus.|Imperativ|Höflicher Imperativ: seguir → siga.
Gire a la derecha en el semáforo.|Biegen Sie an der Ampel rechts ab.|Imperativ|
Está a cinco minutos a pie.|Es ist fünf Minuten zu Fuß entfernt.|estar|
El banco está en la esquina.|Die Bank ist an der Ecke.|Ort|
¿Está lejos de aquí?|Ist es weit von hier?|Fragen|`),
 unit("u15", "El tiempo", `el tiempo|das Wetter
el sol|die Sonne
la lluvia|der Regen
la nieve|der Schnee
el viento|der Wind
hace calor|es ist heiß
hace frío|es ist kalt
el verano|der Sommer
el invierno|der Winter
la primavera|der Frühling`, `¿Qué tiempo hace hoy?|Wie ist das Wetter heute?|Wetter|Wetter meist mit „hacer“: hace sol, hace frío.
Hoy hace mucho calor.|Heute ist es sehr heiß.|Wetter|
Está lloviendo.|Es regnet gerade.|Verlaufsform|estar + Gerundium für das, was gerade passiert.
En invierno nieva en la montaña.|Im Winter schneit es in den Bergen.|Wetter|
Mañana va a hacer sol.|Morgen wird es sonnig.|Futur|ir a + Infinitiv = nahe Zukunft.
Me gusta la primavera.|Ich mag den Frühling.|gustar|`),
 unit("u16", "El tiempo libre", `el fútbol|der Fußball
leer|lesen
nadar|schwimmen
bailar|tanzen
el cine|das Kino
la música|die Musik
quedar|sich verabreden
el fin de semana|das Wochenende
a menudo|oft
nunca|nie`, `¿Qué haces en tu tiempo libre?|Was machst du in deiner Freizeit?|Fragen|
Me encanta leer.|Ich lese sehr gern.|encantar|„encantar“ funktioniert wie „gustar“, nur stärker.
Juego al fútbol los sábados.|Samstags spiele ich Fußball.|jugar|jugar: u wird zu ue – juego.
¿Quedamos el viernes?|Treffen wir uns am Freitag?|Verabredung|
Nunca voy al cine.|Ich gehe nie ins Kino.|Verneinung|„Nunca“ vor dem Verb braucht kein „no“.
El fin de semana voy a nadar.|Am Wochenende gehe ich schwimmen.|Futur|`),
 unit("u17", "La salud", `la cabeza|der Kopf
el estómago|der Magen
la espalda|der Rücken
la garganta|der Hals
el médico|der Arzt
la farmacia|die Apotheke
el dolor|der Schmerz
enfermo|krank
la fiebre|das Fieber
la pastilla|die Tablette`, `Me duele la cabeza.|Ich habe Kopfschmerzen.|doler|Wörtlich: „Mir tut der Kopf weh.“ Wie „gustar“.
Me duelen los pies.|Mir tun die Füße weh.|doler|Bei mehreren Dingen: duelen.
Estoy enfermo.|Ich bin krank.|estar|Vorübergehende Zustände mit „estar“.
Tengo fiebre.|Ich habe Fieber.|tener|
Necesito ir al médico.|Ich muss zum Arzt.|Präpositionen|
¿Tiene algo para el dolor de garganta?|Haben Sie etwas gegen Halsschmerzen?|Apotheke|`),
 unit("u18", "Ayer", `ayer|gestern
anoche|gestern Abend
la semana pasada|letzte Woche
el año pasado|letztes Jahr
fui|ich ging / ich war
comí|ich aß
hablé|ich sprach
vi|ich sah
compré|ich kaufte
hace dos días|vor zwei Tagen`, `Ayer fui al cine.|Gestern bin ich ins Kino gegangen.|Indefinido|Das Indefinido erzählt abgeschlossene Ereignisse. „fui“ gehört zu ir und zu ser.
Anoche cené con amigos.|Gestern Abend habe ich mit Freunden gegessen.|Indefinido|-ar-Verben: -é, -aste, -ó …
¿Qué hiciste el fin de semana?|Was hast du am Wochenende gemacht?|Indefinido|hacer → hice, hiciste, hizo.
Compré un regalo para mi madre.|Ich habe ein Geschenk für meine Mutter gekauft.|Indefinido|
Vi una película muy buena.|Ich habe einen sehr guten Film gesehen.|Indefinido|
Hace dos días llegué a Madrid.|Vor zwei Tagen bin ich in Madrid angekommen.|Zeitangaben|„hace“ + Zeitraum = vor.`)
]}, `13|¿Cómo vas al trabajo?|Wie kommst du zur Arbeit?|En metro.|Hace sol.|Me duele la cabeza.
14|¿Dónde está la estación?|Wo ist der Bahnhof?|Todo recto y a la izquierda.|A las diez.|Juego al fútbol.
15|¿Qué tiempo hace?|Wie ist das Wetter?|Hace frío y llueve.|En autobús.|Ayer.
16|¿Quedamos el sábado?|Treffen wir uns am Samstag?|¡Vale, perfecto!|Me duele la espalda.|A la derecha.
17|¿Qué le pasa?|Was fehlt Ihnen?|Me duele el estómago.|Hace calor.|Un billete, por favor.
18|¿Qué hiciste ayer?|Was hast du gestern gemacht?|Fui a la playa.|Voy mañana.|Está lejos.`);

/* ---------- Französisch ---------- */
add("fr", {id:"s3", title:"Unterwegs", pt:"En route", level:"A2", color:C, units:[
 unit("u13", "Les transports", `le bus|der Bus
le train|der Zug
le métro|die U-Bahn
la voiture|das Auto
le vélo|das Fahrrad
le billet|die Fahrkarte
la gare|der Bahnhof
l'arrêt|die Haltestelle
le quai|der Bahnsteig
à pied|zu Fuß`, `Je vais au travail en métro.|Ich fahre mit der U-Bahn zur Arbeit.|Präpositionen|Mit „en“: en métro, en train, en voiture – aber „à pied“, „à vélo“.
Un billet pour Paris, s'il vous plaît.|Eine Fahrkarte nach Paris, bitte.|Reisen|
Le train part à quelle heure ?|Wann fährt der Zug ab?|Fragen|partir = abfahren, arriver = ankommen.
Le bus arrive à dix heures.|Der Bus kommt um zehn Uhr an.|Uhrzeit|
Où est l'arrêt de bus ?|Wo ist die Bushaltestelle?|Fragen|
Je préfère y aller à pied.|Ich gehe lieber zu Fuß hin.|y|„y“ ersetzt einen Ort: dorthin.`),
 unit("u14", "Le chemin", `à gauche|links
à droite|rechts
tout droit|geradeaus
près|in der Nähe
loin|weit weg
la rue|die Straße
le coin|die Ecke
le feu|die Ampel
traverser|überqueren
tourner|abbiegen`, `Pardon, où est le musée ?|Entschuldigung, wo ist das Museum?|Höflichkeit|
Allez tout droit.|Gehen Sie geradeaus.|Imperativ|Imperativ mit „vous“: allez, tournez, traversez.
Tournez à droite au feu.|Biegen Sie an der Ampel rechts ab.|Imperativ|à + le = au.
C'est à cinq minutes à pied.|Es ist fünf Minuten zu Fuß.|Entfernung|
La banque est au coin de la rue.|Die Bank ist an der Straßenecke.|Ort|
C'est loin d'ici ?|Ist es weit von hier?|Fragen|`),
 unit("u15", "La météo", `le temps|das Wetter
le soleil|die Sonne
la pluie|der Regen
la neige|der Schnee
le vent|der Wind
il fait chaud|es ist heiß
il fait froid|es ist kalt
l'été|der Sommer
l'hiver|der Winter
le printemps|der Frühling`, `Quel temps fait-il aujourd'hui ?|Wie ist das Wetter heute?|Wetter|Wetter meist mit „il fait“: il fait beau, il fait froid.
Aujourd'hui, il fait très chaud.|Heute ist es sehr heiß.|Wetter|
Il pleut.|Es regnet.|Wetter|pleuvoir → il pleut, neiger → il neige.
En hiver, il neige à la montagne.|Im Winter schneit es in den Bergen.|Wetter|Jahreszeiten: en été, en hiver – aber „au printemps“.
Demain, il va faire beau.|Morgen wird es schön.|Futur|aller + Infinitiv = nahe Zukunft.
J'aime le printemps.|Ich mag den Frühling.|aimer|`),
 unit("u16", "Les loisirs", `le foot|der Fußball
lire|lesen
nager|schwimmen
danser|tanzen
le cinéma|das Kino
la musique|die Musik
se retrouver|sich treffen
le week-end|das Wochenende
souvent|oft
jamais|nie`, `Qu'est-ce que tu fais pendant ton temps libre ?|Was machst du in deiner Freizeit?|Fragen|
J'adore lire.|Ich lese sehr gern.|adorer|
Je joue au foot le samedi.|Samstags spiele ich Fußball.|jouer|Sport: jouer au …, Instrument: jouer du …
On se retrouve vendredi ?|Treffen wir uns am Freitag?|Verabredung|„On“ heißt im Alltag oft „wir“.
Je ne vais jamais au cinéma.|Ich gehe nie ins Kino.|Verneinung|ne … jamais = nie.
Ce week-end, je vais nager.|Dieses Wochenende gehe ich schwimmen.|Futur|`),
 unit("u17", "La santé", `la tête|der Kopf
le ventre|der Bauch
le dos|der Rücken
la gorge|der Hals
le médecin|der Arzt
la pharmacie|die Apotheke
la douleur|der Schmerz
malade|krank
la fièvre|das Fieber
le comprimé|die Tablette`, `J'ai mal à la tête.|Ich habe Kopfschmerzen.|avoir mal|avoir mal à + Körperteil: j'ai mal au dos, à la gorge.
J'ai mal au ventre.|Ich habe Bauchschmerzen.|avoir mal|à + le = au.
Je suis malade.|Ich bin krank.|être|
J'ai de la fièvre.|Ich habe Fieber.|Teilungsartikel|
Je dois aller chez le médecin.|Ich muss zum Arzt.|Präpositionen|Zu Personen geht man „chez“.
Vous avez quelque chose contre le mal de gorge ?|Haben Sie etwas gegen Halsschmerzen?|Apotheke|`),
 unit("u18", "Hier", `hier|gestern
hier soir|gestern Abend
la semaine dernière|letzte Woche
l'année dernière|letztes Jahr
je suis allé|ich bin gegangen
j'ai mangé|ich habe gegessen
j'ai parlé|ich habe gesprochen
j'ai vu|ich habe gesehen
j'ai acheté|ich habe gekauft
il y a deux jours|vor zwei Tagen`, `Hier, je suis allé au cinéma.|Gestern bin ich ins Kino gegangen.|Passé composé|Bewegungsverben wie aller bilden es mit „être“.
Hier soir, j'ai dîné avec des amis.|Gestern Abend habe ich mit Freunden gegessen.|Passé composé|Die meisten Verben: avoir + Partizip.
Qu'est-ce que tu as fait ce week-end ?|Was hast du am Wochenende gemacht?|Passé composé|faire → fait.
J'ai acheté un cadeau pour ma mère.|Ich habe ein Geschenk für meine Mutter gekauft.|Passé composé|
J'ai vu un très bon film.|Ich habe einen sehr guten Film gesehen.|Passé composé|voir → vu.
Je suis arrivé à Paris il y a deux jours.|Ich bin vor zwei Tagen in Paris angekommen.|Zeitangaben|„il y a“ + Zeitraum = vor.`)
]}, `13|Tu vas au travail comment ?|Wie kommst du zur Arbeit?|En métro.|Il fait beau.|J'ai mal à la tête.
14|Où est la gare ?|Wo ist der Bahnhof?|Tout droit, puis à gauche.|À dix heures.|Je joue au foot.
15|Quel temps fait-il ?|Wie ist das Wetter?|Il fait froid et il pleut.|En bus.|Hier.
16|On se retrouve samedi ?|Treffen wir uns am Samstag?|D'accord, parfait !|J'ai mal au dos.|À droite.
17|Qu'est-ce qui ne va pas ?|Was fehlt Ihnen?|J'ai mal au ventre.|Il fait chaud.|Un billet, s'il vous plaît.
18|Qu'est-ce que tu as fait hier ?|Was hast du gestern gemacht?|Je suis allé à la plage.|J'y vais demain.|C'est loin.`);

/* ---------- Englisch ---------- */
add("en", {id:"s3", title:"Unterwegs", pt:"Out and about", level:"A2", color:C, units:[
 unit("u13", "Transport", `the bus|der Bus
the train|der Zug
the underground|die U-Bahn
the car|das Auto
the bike|das Fahrrad
the ticket|die Fahrkarte
the station|der Bahnhof
the bus stop|die Bushaltestelle
the platform|der Bahnsteig
on foot|zu Fuß`, `I go to work by underground.|Ich fahre mit der U-Bahn zur Arbeit.|Präpositionen|Mit „by“: by bus, by train – aber „on foot“. In den USA heißt die U-Bahn „subway“.
A ticket to London, please.|Eine Fahrkarte nach London, bitte.|Reisen|„single“ = einfach, „return“ = hin und zurück.
What time does the train leave?|Wann fährt der Zug ab?|Fragen|Fragen im Simple Present mit „do / does“.
The bus arrives at ten.|Der Bus kommt um zehn an.|Simple Present|Fahrpläne stehen im Simple Present.
Where is the bus stop?|Wo ist die Bushaltestelle?|Fragen|
I prefer to walk.|Ich gehe lieber zu Fuß.|prefer|`),
 unit("u14", "Directions", `left|links
right|rechts
straight on|geradeaus
near|in der Nähe
far|weit weg
the street|die Straße
the corner|die Ecke
the traffic lights|die Ampel
to cross|überqueren
to turn|abbiegen`, `Excuse me, where is the museum?|Entschuldigung, wo ist das Museum?|Höflichkeit|
Go straight on.|Gehen Sie geradeaus.|Imperativ|Der Imperativ ist einfach die Grundform: go, turn, cross.
Turn right at the traffic lights.|Biegen Sie an der Ampel rechts ab.|Imperativ|
It's five minutes on foot.|Es ist fünf Minuten zu Fuß.|Entfernung|
The bank is on the corner.|Die Bank ist an der Ecke.|Präpositionen|„on the corner“ – an der Ecke.
Is it far from here?|Ist es weit von hier?|Fragen|`),
 unit("u15", "The weather", `the weather|das Wetter
the sun|die Sonne
the rain|der Regen
the snow|der Schnee
the wind|der Wind
it's hot|es ist heiß
it's cold|es ist kalt
the summer|der Sommer
the winter|der Winter
the spring|der Frühling`, `What's the weather like today?|Wie ist das Wetter heute?|Wetter|
It's very hot today.|Heute ist es sehr heiß.|Wetter|
It's raining.|Es regnet gerade.|Verlaufsform|Was gerade passiert: Present Progressive (be + -ing).
It snows in the mountains in winter.|Im Winter schneit es in den Bergen.|Simple Present|Was regelmäßig passiert: Simple Present.
It's going to be sunny tomorrow.|Morgen wird es sonnig.|Futur|going to = Vorhersage, Plan.
I like spring.|Ich mag den Frühling.|like|Jahreszeiten meist ohne Artikel.`),
 unit("u16", "Free time", `football|Fußball
to read|lesen
to swim|schwimmen
to dance|tanzen
the cinema|das Kino
music|die Musik
to meet up|sich treffen
the weekend|das Wochenende
often|oft
never|nie`, `What do you do in your free time?|Was machst du in deiner Freizeit?|Fragen|
I love reading.|Ich lese sehr gern.|love + -ing|Nach love, like, hate oft die -ing-Form.
I play football on Saturdays.|Samstags spiele ich Fußball.|Simple Present|
Shall we meet up on Friday?|Treffen wir uns am Freitag?|Verabredung|„Shall we …?“ = Sollen wir …? für Vorschläge.
I never go to the cinema.|Ich gehe nie ins Kino.|Häufigkeit|never, often, always stehen vor dem Verb.
I'm going swimming this weekend.|Dieses Wochenende gehe ich schwimmen.|Futur|Fester Plan: Present Progressive.`),
 unit("u17", "Health", `the head|der Kopf
the stomach|der Magen
the back|der Rücken
the throat|der Hals
the doctor|der Arzt
the chemist's|die Apotheke
the pain|der Schmerz
ill|krank
a temperature|Fieber
the tablet|die Tablette`, `I've got a headache.|Ich habe Kopfschmerzen.|have got|headache, stomachache, backache …
My back hurts.|Mein Rücken tut weh.|hurt|
I'm ill.|Ich bin krank.|to be|Amerikanisch meist „I'm sick“.
I've got a temperature.|Ich habe Fieber.|have got|Wörtlich: „Ich habe eine Temperatur.“
I need to see a doctor.|Ich muss zum Arzt.|need|
Have you got anything for a sore throat?|Haben Sie etwas gegen Halsschmerzen?|Apotheke|„sore throat“ = Halsschmerzen. Amerikanisch heißt die Apotheke „pharmacy“.`),
 unit("u18", "Yesterday", `yesterday|gestern
last night|gestern Abend
last week|letzte Woche
last year|letztes Jahr
I went|ich ging
I ate|ich aß
I talked|ich sprach
I saw|ich sah
I bought|ich kaufte
two days ago|vor zwei Tagen`, `Yesterday I went to the cinema.|Gestern bin ich ins Kino gegangen.|Simple Past|go → went ist unregelmäßig.
Last night I had dinner with friends.|Gestern Abend habe ich mit Freunden gegessen.|Simple Past|have → had.
What did you do at the weekend?|Was hast du am Wochenende gemacht?|Simple Past|Fragen mit „did“ + Grundform.
I bought a present for my mother.|Ich habe ein Geschenk für meine Mutter gekauft.|Simple Past|buy → bought.
I saw a really good film.|Ich habe einen richtig guten Film gesehen.|Simple Past|see → saw.
I arrived in London two days ago.|Ich bin vor zwei Tagen in London angekommen.|Zeitangaben|„ago“ steht hinter dem Zeitraum.`)
]}, `13|How do you get to work?|Wie kommst du zur Arbeit?|By bus.|It's sunny.|I've got a headache.
14|Where is the station?|Wo ist der Bahnhof?|Go straight on and turn left.|At ten.|I play football.
15|What's the weather like?|Wie ist das Wetter?|It's cold and it's raining.|By train.|Yesterday.
16|Shall we meet up on Saturday?|Treffen wir uns am Samstag?|OK, great!|My back hurts.|Turn right.
17|What's the matter?|Was fehlt Ihnen?|I've got a stomachache.|It's hot.|A ticket, please.
18|What did you do yesterday?|Was hast du gestern gemacht?|I went to the beach.|I'm going tomorrow.|It's far.`);

/* ---------- Italienisch ---------- */
add("it", {id:"s3", title:"Unterwegs", pt:"In giro", level:"A2", color:C, units:[
 unit("u13", "I trasporti", `l'autobus|der Bus
il treno|der Zug
la metropolitana|die U-Bahn
la macchina|das Auto
la bicicletta|das Fahrrad
il biglietto|die Fahrkarte
la stazione|der Bahnhof
la fermata|die Haltestelle
il binario|das Gleis
a piedi|zu Fuß`, `Vado al lavoro in metropolitana.|Ich fahre mit der U-Bahn zur Arbeit.|Präpositionen|Mit „in“: in treno, in macchina – aber „a piedi“.
Un biglietto per Roma, per favore.|Eine Fahrkarte nach Rom, bitte.|Reisen|In Italien den Zugfahrschein vor der Fahrt entwerten, wenn er kein Datum hat.
A che ora parte il treno?|Wann fährt der Zug ab?|Fragen|partire = abfahren, arrivare = ankommen.
L'autobus arriva alle dieci.|Der Bus kommt um zehn an.|Uhrzeit|
Dov'è la fermata?|Wo ist die Haltestelle?|Fragen|dove + è = dov'è.
Preferisco andare a piedi.|Ich gehe lieber zu Fuß.|preferire|Verben auf -isc-: preferisco, preferisci …`),
 unit("u14", "La strada", `a sinistra|links
a destra|rechts
dritto|geradeaus
vicino|in der Nähe
lontano|weit weg
la via|die Straße
l'angolo|die Ecke
il semaforo|die Ampel
attraversare|überqueren
girare|abbiegen`, `Scusi, dov'è il museo?|Entschuldigung, wo ist das Museum?|Höflichkeit|„Scusi“ ist die höfliche Form (Lei).
Vada sempre dritto.|Gehen Sie immer geradeaus.|Imperativ|Höflicher Imperativ: andare → vada.
Giri a destra al semaforo.|Biegen Sie an der Ampel rechts ab.|Imperativ|
È a cinque minuti a piedi.|Es ist fünf Minuten zu Fuß.|Entfernung|
La banca è all'angolo.|Die Bank ist an der Ecke.|Präpositionen|a + l' = all'.
È lontano da qui?|Ist es weit von hier?|Fragen|`),
 unit("u15", "Il tempo", `il tempo|das Wetter
il sole|die Sonne
la pioggia|der Regen
la neve|der Schnee
il vento|der Wind
fa caldo|es ist heiß
fa freddo|es ist kalt
l'estate|der Sommer
l'inverno|der Winter
la primavera|der Frühling`, `Che tempo fa oggi?|Wie ist das Wetter heute?|Wetter|Wetter meist mit „fare“: fa caldo, fa bel tempo.
Oggi fa molto caldo.|Heute ist es sehr heiß.|Wetter|
Sta piovendo.|Es regnet gerade.|Verlaufsform|stare + Gerundium für das, was gerade passiert.
In inverno nevica in montagna.|Im Winter schneit es in den Bergen.|Wetter|
Domani farà bel tempo.|Morgen wird schönes Wetter.|Futur|fare → farà.
Mi piace la primavera.|Ich mag den Frühling.|piacere|`),
 unit("u16", "Il tempo libero", `il calcio|der Fußball
leggere|lesen
nuotare|schwimmen
ballare|tanzen
il cinema|das Kino
la musica|die Musik
vedersi|sich treffen
il fine settimana|das Wochenende
spesso|oft
mai|nie`, `Cosa fai nel tempo libero?|Was machst du in deiner Freizeit?|Fragen|
Adoro leggere.|Ich lese sehr gern.|adorare|
Il sabato gioco a calcio.|Samstags spiele ich Fußball.|giocare|Sport: giocare a …
Ci vediamo venerdì?|Sehen wir uns am Freitag?|Verabredung|
Non vado mai al cinema.|Ich gehe nie ins Kino.|Verneinung|non … mai = nie.
Questo fine settimana vado a nuotare.|Dieses Wochenende gehe ich schwimmen.|andare a|`),
 unit("u17", "La salute", `la testa|der Kopf
la pancia|der Bauch
la schiena|der Rücken
la gola|der Hals
il medico|der Arzt
la farmacia|die Apotheke
il dolore|der Schmerz
malato|krank
la febbre|das Fieber
la compressa|die Tablette`, `Mi fa male la testa.|Ich habe Kopfschmerzen.|fare male|Wörtlich: „Mir tut der Kopf weh.“ Auch: Ho mal di testa.
Mi fanno male i piedi.|Mir tun die Füße weh.|fare male|Bei mehreren Dingen: fanno.
Sono malato.|Ich bin krank.|essere|
Ho la febbre.|Ich habe Fieber.|avere|
Devo andare dal medico.|Ich muss zum Arzt.|Präpositionen|Zu Personen geht man „da“: dal medico.
Ha qualcosa per il mal di gola?|Haben Sie etwas gegen Halsschmerzen?|Apotheke|`),
 unit("u18", "Ieri", `ieri|gestern
ieri sera|gestern Abend
la settimana scorsa|letzte Woche
l'anno scorso|letztes Jahr
sono andato|ich bin gegangen
ho mangiato|ich habe gegessen
ho parlato|ich habe gesprochen
ho visto|ich habe gesehen
ho comprato|ich habe gekauft
due giorni fa|vor zwei Tagen`, `Ieri sono andato al cinema.|Gestern bin ich ins Kino gegangen.|Passato prossimo|Bewegungsverben wie andare bilden es mit „essere“.
Ieri sera ho cenato con amici.|Gestern Abend habe ich mit Freunden gegessen.|Passato prossimo|Die meisten Verben: avere + Partizip.
Cosa hai fatto nel fine settimana?|Was hast du am Wochenende gemacht?|Passato prossimo|fare → fatto.
Ho comprato un regalo per mia madre.|Ich habe ein Geschenk für meine Mutter gekauft.|Passato prossimo|
Ho visto un film molto bello.|Ich habe einen sehr schönen Film gesehen.|Passato prossimo|vedere → visto.
Sono arrivato a Roma due giorni fa.|Ich bin vor zwei Tagen in Rom angekommen.|Zeitangaben|„fa“ steht hinter dem Zeitraum.`)
]}, `13|Come vai al lavoro?|Wie kommst du zur Arbeit?|In autobus.|Fa bel tempo.|Mi fa male la testa.
14|Dov'è la stazione?|Wo ist der Bahnhof?|Sempre dritto e poi a sinistra.|Alle dieci.|Gioco a calcio.
15|Che tempo fa?|Wie ist das Wetter?|Fa freddo e piove.|In treno.|Ieri.
16|Ci vediamo sabato?|Sehen wir uns am Samstag?|Va bene, perfetto!|Mi fa male la schiena.|A destra.
17|Cosa si sente?|Was fehlt Ihnen?|Ho mal di pancia.|Fa caldo.|Un biglietto, per favore.
18|Cosa hai fatto ieri?|Was hast du gestern gemacht?|Sono andato al mare.|Vado domani.|È lontano.`);
})();
