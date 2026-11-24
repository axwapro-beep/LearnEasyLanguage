/* ===== Abschnitt 3 „Unterwegs“ (A2) für pl, tr, de ===== */
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

/* ---------- Polnisch ---------- */
add("pl", {id:"s3", title:"Unterwegs", pt:"W drodze", level:"A2", color:C, units:[
 unit("u13", "Transport", `autobus|der Bus
pociąg|der Zug
metro|die U-Bahn
samochód|das Auto
rower|das Fahrrad
bilet|die Fahrkarte
dworzec|der Bahnhof
przystanek|die Haltestelle
peron|der Bahnsteig
pieszo|zu Fuß`, `Jeżdżę do pracy metrem.|Ich fahre mit der U-Bahn zur Arbeit.|Instrumental|Verkehrsmittel im Instrumental: metro → metrem, autobus → autobusem.
Poproszę bilet do Krakowa.|Eine Fahrkarte nach Krakau, bitte.|Genitiv|do + Genitiv: Kraków → do Krakowa.
O której odjeżdża pociąg?|Wann fährt der Zug ab?|Fragen|odjeżdżać = abfahren, przyjeżdżać = ankommen.
Autobus przyjeżdża o dziesiątej.|Der Bus kommt um zehn an.|Uhrzeit|
Gdzie jest przystanek?|Wo ist die Haltestelle?|Fragen|
Wolę iść pieszo.|Ich gehe lieber zu Fuß.|woleć|wolę = ich ziehe vor.`),
 unit("u14", "Droga", `w lewo|nach links
w prawo|nach rechts
prosto|geradeaus
blisko|in der Nähe
daleko|weit weg
ulica|die Straße
róg|die Ecke
światła|die Ampel
przejść przez|überqueren
skręcić|abbiegen`, `Przepraszam, gdzie jest muzeum?|Entschuldigung, wo ist das Museum?|Höflichkeit|
Proszę iść prosto.|Gehen Sie bitte geradeaus.|Höflichkeit|Höfliche Aufforderung: proszę + Infinitiv.
Proszę skręcić w prawo na światłach.|Biegen Sie an der Ampel rechts ab.|Lokativ|na + Lokativ: światła → na światłach.
To pięć minut pieszo.|Das sind fünf Minuten zu Fuß.|Zahlen|Ab 5 steht der Genitiv Plural: pięć minut.
Bank jest na rogu.|Die Bank ist an der Ecke.|Lokativ|róg → na rogu.
Czy to daleko stąd?|Ist es weit von hier?|Fragen|`),
 unit("u15", "Pogoda", `pogoda|das Wetter
słońce|die Sonne
deszcz|der Regen
śnieg|der Schnee
wiatr|der Wind
jest gorąco|es ist heiß
jest zimno|es ist kalt
lato|der Sommer
zima|der Winter
wiosna|der Frühling`, `Jaka jest dzisiaj pogoda?|Wie ist das Wetter heute?|Wetter|
Dzisiaj jest bardzo gorąco.|Heute ist es sehr heiß.|Wetter|Wetter oft mit „jest“ + Adverb: jest zimno, jest ciepło.
Pada deszcz.|Es regnet.|Wetter|Wörtlich: „Es fällt Regen.“ Ebenso: pada śnieg.
Zimą w górach pada śnieg.|Im Winter schneit es in den Bergen.|Instrumental|Jahreszeiten: zimą, latem, wiosną (Instrumental).
Jutro będzie słonecznie.|Morgen wird es sonnig.|Futur|być im Futur: będzie.
Lubię wiosnę.|Ich mag den Frühling.|Akkusativ|wiosna → wiosnę.`),
 unit("u16", "Czas wolny", `piłka nożna|der Fußball
czytać|lesen
pływać|schwimmen
tańczyć|tanzen
kino|das Kino
muzyka|die Musik
spotkać się|sich treffen
weekend|das Wochenende
często|oft
nigdy|nie`, `Co robisz w wolnym czasie?|Was machst du in deiner Freizeit?|Fragen|
Uwielbiam czytać.|Ich lese sehr gern.|uwielbiać|
W soboty gram w piłkę nożną.|Samstags spiele ich Fußball.|grać w|Sport: grać w + Akkusativ.
Spotkamy się w piątek?|Treffen wir uns am Freitag?|Verabredung|
Nigdy nie chodzę do kina.|Ich gehe nie ins Kino.|Verneinung|Doppelte Verneinung: nigdy nie.
W weekend idę popływać.|Am Wochenende gehe ich schwimmen.|iść|`),
 unit("u17", "Zdrowie", `głowa|der Kopf
brzuch|der Bauch
plecy|der Rücken
gardło|der Hals
lekarz|der Arzt
apteka|die Apotheke
ból|der Schmerz
chory|krank
gorączka|das Fieber
tabletka|die Tablette`, `Boli mnie głowa.|Ich habe Kopfschmerzen.|boleć|Wörtlich: „Mich schmerzt der Kopf.“
Bolą mnie plecy.|Mir tut der Rücken weh.|boleć|„plecy“ ist Plural, darum: bolą.
Jestem chory.|Ich bin krank.|być|Frauen sagen: Jestem chora.
Mam gorączkę.|Ich habe Fieber.|Akkusativ|gorączka → gorączkę.
Muszę iść do lekarza.|Ich muss zum Arzt.|Genitiv|do + Genitiv: lekarz → do lekarza.
Czy ma pan coś na ból gardła?|Haben Sie etwas gegen Halsschmerzen?|Apotheke|„na“ + Akkusativ = gegen (ein Leiden).`),
 unit("u18", "Wczoraj", `wczoraj|gestern
wczoraj wieczorem|gestern Abend
w zeszłym tygodniu|letzte Woche
w zeszłym roku|letztes Jahr
poszedłem|ich ging (Mann)
jadłem|ich aß (Mann)
rozmawiałem|ich sprach (Mann)
widziałem|ich sah (Mann)
kupiłem|ich kaufte (Mann)
dwa dni temu|vor zwei Tagen`, `Wczoraj poszedłem do kina.|Gestern bin ich ins Kino gegangen.|Vergangenheit|Die Vergangenheit richtet sich nach dem Geschlecht: poszedłem (Mann), poszłam (Frau).
Wczoraj wieczorem jadłem kolację z przyjaciółmi.|Gestern Abend habe ich mit Freunden zu Abend gegessen.|Vergangenheit|Frau: jadłam.
Co robiłeś w weekend?|Was hast du am Wochenende gemacht?|Vergangenheit|Zu einer Frau: Co robiłaś?
Kupiłam prezent dla mamy.|Ich habe ein Geschenk für Mama gekauft.|Vergangenheit|Hier spricht eine Frau: kupiłam. dla + Genitiv.
Widziałem bardzo dobry film.|Ich habe einen sehr guten Film gesehen.|Vergangenheit|
Przyjechałem do Warszawy dwa dni temu.|Ich bin vor zwei Tagen in Warschau angekommen.|Zeitangaben|„temu“ steht hinter dem Zeitraum.`)
]}, `13|Jak jeździsz do pracy?|Wie fährst du zur Arbeit?|Autobusem.|Jest słonecznie.|Boli mnie głowa.
14|Gdzie jest dworzec?|Wo ist der Bahnhof?|Prosto, a potem w lewo.|O dziesiątej.|Gram w piłkę.
15|Jaka jest pogoda?|Wie ist das Wetter?|Jest zimno i pada deszcz.|Pociągiem.|Wczoraj.
16|Spotkamy się w sobotę?|Treffen wir uns am Samstag?|Dobrze, świetnie!|Bolą mnie plecy.|W prawo.
17|Co panu dolega?|Was fehlt Ihnen?|Boli mnie brzuch.|Jest gorąco.|Poproszę bilet.
18|Co robiłeś wczoraj?|Was hast du gestern gemacht?|Byłem na plaży.|Jadę jutro.|To daleko.`);

/* ---------- Türkisch ---------- */
add("tr", {id:"s3", title:"Unterwegs", pt:"Yolda", level:"A2", color:C, units:[
 unit("u13", "Ulaşım", `otobüs|der Bus
tren|der Zug
metro|die U-Bahn
araba|das Auto
bisiklet|das Fahrrad
bilet|die Fahrkarte
istasyon|der Bahnhof
durak|die Haltestelle
peron|der Bahnsteig
yürüyerek|zu Fuß`, `İşe metroyla gidiyorum.|Ich fahre mit der U-Bahn zur Arbeit.|-le|Verkehrsmittel mit -le / -la: metroyla, otobüsle.
Ankara'ya bir bilet lütfen.|Eine Fahrkarte nach Ankara, bitte.|Dativ|Richtung = Dativ: Ankara'ya.
Tren saat kaçta kalkıyor?|Wann fährt der Zug ab?|Fragen|kalkmak = abfahren, varmak = ankommen.
Otobüs saat onda geliyor.|Der Bus kommt um zehn.|Uhrzeit|
Durak nerede?|Wo ist die Haltestelle?|Fragen|
Yürümeyi tercih ederim.|Ich gehe lieber zu Fuß.|tercih etmek|`),
 unit("u14", "Yol tarifi", `sola|nach links
sağa|nach rechts
düz|geradeaus
yakın|nah
uzak|weit
cadde|die Straße
köşe|die Ecke
trafik ışıkları|die Ampel
karşıya geçmek|überqueren
dönmek|abbiegen`, `Affedersiniz, müze nerede?|Entschuldigung, wo ist das Museum?|Höflichkeit|
Dümdüz gidin.|Gehen Sie geradeaus.|Imperativ|Höflicher Imperativ: -in / -ın / -un / -ün.
Işıklardan sağa dönün.|Biegen Sie an der Ampel rechts ab.|Ablativ|-dan / -den = von, ab: ışıklardan.
Yürüyerek beş dakika.|Zu Fuß fünf Minuten.|Entfernung|
Banka köşede.|Die Bank ist an der Ecke.|Lokativ|
Buradan uzak mı?|Ist es weit von hier?|Fragen|`),
 unit("u15", "Hava durumu", `hava|das Wetter
güneş|die Sonne
yağmur|der Regen
kar|der Schnee
rüzgâr|der Wind
hava sıcak|es ist heiß
hava soğuk|es ist kalt
yaz|der Sommer
kış|der Winter
ilkbahar|der Frühling`, `Bugün hava nasıl?|Wie ist das Wetter heute?|Wetter|
Bugün hava çok sıcak.|Heute ist es sehr heiß.|Wetter|
Yağmur yağıyor.|Es regnet.|Wetter|Wörtlich: „Regen regnet.“ Ebenso: kar yağıyor.
Kışın dağlarda kar yağar.|Im Winter schneit es in den Bergen.|Geniş zaman|kışın = im Winter, yazın = im Sommer.
Yarın hava güneşli olacak.|Morgen wird es sonnig.|Futur|-acak / -ecek = wird.
İlkbaharı severim.|Ich mag den Frühling.|Akkusativ|`),
 unit("u16", "Boş zaman", `futbol|der Fußball
okumak|lesen
yüzmek|schwimmen
dans etmek|tanzen
sinema|das Kino
müzik|die Musik
buluşmak|sich treffen
hafta sonu|das Wochenende
sık sık|oft
hiç|nie (mit Verneinung)`, `Boş zamanlarında ne yaparsın?|Was machst du in deiner Freizeit?|Fragen|
Kitap okumayı çok severim.|Ich lese sehr gern.|sevmek|-meyi / -mayı sevmek = gern tun.
Cumartesileri futbol oynarım.|Samstags spiele ich Fußball.|Geniş zaman|
Cuma günü buluşalım mı?|Treffen wir uns am Freitag?|Verabredung|-elim / -alım = lass uns.
Sinemaya hiç gitmem.|Ich gehe nie ins Kino.|Verneinung|hiç + verneintes Verb = nie.
Hafta sonu yüzmeye gideceğim.|Am Wochenende gehe ich schwimmen.|Futur|`),
 unit("u17", "Sağlık", `baş|der Kopf
karın|der Bauch
sırt|der Rücken
boğaz|der Hals
doktor|der Arzt
eczane|die Apotheke
ağrı|der Schmerz
hasta|krank
ateş|das Fieber
hap|die Tablette`, `Başım ağrıyor.|Ich habe Kopfschmerzen.|Possessiv|Wörtlich: „Mein Kopf schmerzt.“
Sırtım ağrıyor.|Mir tut der Rücken weh.|Possessiv|
Hastayım.|Ich bin krank.|Personalendung|hasta + -yım = ich bin krank.
Ateşim var.|Ich habe Fieber.|var|
Doktora gitmem lazım.|Ich muss zum Arzt.|lazım|-mem lazım = ich muss.
Boğaz ağrısı için bir şeyiniz var mı?|Haben Sie etwas gegen Halsschmerzen?|Apotheke|`),
 unit("u18", "Dün", `dün|gestern
dün akşam|gestern Abend
geçen hafta|letzte Woche
geçen yıl|letztes Jahr
gittim|ich ging
yedim|ich aß
konuştum|ich sprach
gördüm|ich sah
aldım|ich kaufte / nahm
iki gün önce|vor zwei Tagen`, `Dün sinemaya gittim.|Gestern bin ich ins Kino gegangen.|Vergangenheit|-di-Vergangenheit: git → gittim.
Dün akşam arkadaşlarla yemek yedim.|Gestern Abend habe ich mit Freunden gegessen.|Vergangenheit|
Hafta sonu ne yaptın?|Was hast du am Wochenende gemacht?|Vergangenheit|yap → yaptın (du).
Annem için bir hediye aldım.|Ich habe für meine Mutter ein Geschenk gekauft.|Vergangenheit|almak heißt nehmen und kaufen.
Çok güzel bir film gördüm.|Ich habe einen sehr schönen Film gesehen.|Vergangenheit|
İki gün önce İstanbul'a geldim.|Ich bin vor zwei Tagen in Istanbul angekommen.|Zeitangaben|„önce“ steht hinter dem Zeitraum.`)
]}, `13|İşe nasıl gidiyorsun?|Wie kommst du zur Arbeit?|Otobüsle.|Hava güneşli.|Başım ağrıyor.
14|İstasyon nerede?|Wo ist der Bahnhof?|Düz gidin, sonra sola dönün.|Saat onda.|Futbol oynarım.
15|Hava nasıl?|Wie ist das Wetter?|Soğuk ve yağmur yağıyor.|Trenle.|Dün.
16|Cumartesi buluşalım mı?|Treffen wir uns am Samstag?|Tamam, harika!|Sırtım ağrıyor.|Sağa.
17|Neyiniz var?|Was fehlt Ihnen?|Karnım ağrıyor.|Hava sıcak.|Bir bilet lütfen.
18|Dün ne yaptın?|Was hast du gestern gemacht?|Plaja gittim.|Yarın gidiyorum.|Uzak.`);

/* ---------- Deutsch (Hilfssprachen: en|tr|pl|es|fr|it|pt) ---------- */
const DE = LEL_PACKS.de; if(!DE || !DE._fmt) return;
const {words, sents, dialogs, mean} = DE._fmt;
const W13 = `der Bus|the bus|otobüs|autobus|el autobús|le bus|l'autobus|o autocarro
der Zug|the train|tren|pociąg|el tren|le train|il treno|o comboio
die U-Bahn|the underground|metro|metro|el metro|le métro|la metropolitana|o metro
das Auto|the car|araba|samochód|el coche|la voiture|la macchina|o carro
das Fahrrad|the bike|bisiklet|rower|la bicicleta|le vélo|la bicicletta|a bicicleta
die Fahrkarte|the ticket|bilet|bilet|el billete|le billet|il biglietto|o bilhete
der Bahnhof|the station|istasyon|dworzec|la estación|la gare|la stazione|a estação
die Haltestelle|the stop|durak|przystanek|la parada|l'arrêt|la fermata|a paragem
das Gleis|the platform|peron|peron|el andén|le quai|il binario|a linha
zu Fuß|on foot|yürüyerek|pieszo|a pie|à pied|a piedi|a pé`;
const S13 = `Ich fahre mit der U-Bahn zur Arbeit.|I go to work by underground.|İşe metroyla gidiyorum.|Jeżdżę do pracy metrem.|Voy al trabajo en metro.|Je vais au travail en métro.|Vado al lavoro in metropolitana.|Vou para o trabalho de metro.|Präpositionen|Transport: mit + dative – mit dem Bus, mit der U-Bahn. But: zu Fuß.
Eine Fahrkarte nach München, bitte.|A ticket to Munich, please.|Münih'e bir bilet lütfen.|Poproszę bilet do Monachium.|Un billete para Múnich, por favor.|Un billet pour Munich, s'il vous plaît.|Un biglietto per Monaco, per favore.|Um bilhete para Munique, por favor.|Reisen|„nach“ for cities and most countries.
Wann fährt der Zug ab?|When does the train leave?|Tren ne zaman kalkıyor?|Kiedy odjeżdża pociąg?|¿Cuándo sale el tren?|Le train part quand ?|Quando parte il treno?|Quando parte o comboio?|Trennbare Verben|abfahren is separable: Der Zug fährt um 10 Uhr ab.
Der Bus kommt um zehn Uhr an.|The bus arrives at ten.|Otobüs saat onda geliyor.|Autobus przyjeżdża o dziesiątej.|El autobús llega a las diez.|Le bus arrive à dix heures.|L'autobus arriva alle dieci.|O autocarro chega às dez.|Trennbare Verben|ankommen: ich komme an, du kommst an …
Wo ist die Haltestelle?|Where is the stop?|Durak nerede?|Gdzie jest przystanek?|¿Dónde está la parada?|Où est l'arrêt ?|Dov'è la fermata?|Onde é a paragem?|Fragen|
Ich gehe lieber zu Fuß.|I prefer to walk.|Yürümeyi tercih ederim.|Wolę iść pieszo.|Prefiero ir a pie.|Je préfère y aller à pied.|Preferisco andare a piedi.|Prefiro ir a pé.|lieber|„lieber“ + verb = to prefer doing something.`;
const W14 = `links|left|sol|w lewo|a la izquierda|à gauche|a sinistra|à esquerda
rechts|right|sağ|w prawo|a la derecha|à droite|a destra|à direita
geradeaus|straight on|düz|prosto|todo recto|tout droit|dritto|sempre em frente
in der Nähe|nearby|yakında|blisko|cerca|près|vicino|perto
weit|far|uzak|daleko|lejos|loin|lontano|longe
die Straße|the street|cadde|ulica|la calle|la rue|la via|a rua
die Ecke|the corner|köşe|róg|la esquina|le coin|l'angolo|a esquina
die Ampel|the traffic lights|trafik ışıkları|światła|el semáforo|le feu|il semaforo|o semáforo
überqueren|to cross|karşıya geçmek|przejść przez|cruzar|traverser|attraversare|atravessar
abbiegen|to turn|dönmek|skręcić|girar|tourner|girare|virar`;
const S14 = `Entschuldigung, wo ist das Museum?|Excuse me, where is the museum?|Affedersiniz, müze nerede?|Przepraszam, gdzie jest muzeum?|Perdone, ¿dónde está el museo?|Pardon, où est le musée ?|Scusi, dov'è il museo?|Desculpe, onde é o museu?|Höflichkeit|
Gehen Sie geradeaus.|Go straight on.|Düz gidin.|Proszę iść prosto.|Siga todo recto.|Allez tout droit.|Vada dritto.|Siga em frente.|Imperativ|Polite imperative: verb first, then „Sie“.
Biegen Sie an der Ampel rechts ab.|Turn right at the traffic lights.|Işıklardan sağa dönün.|Proszę skręcić w prawo na światłach.|Gire a la derecha en el semáforo.|Tournez à droite au feu.|Giri a destra al semaforo.|Vire à direita no semáforo.|Imperativ|Separable verb: the prefix „ab“ goes to the end.
Es ist fünf Minuten zu Fuß.|It's five minutes on foot.|Yürüyerek beş dakika.|To pięć minut pieszo.|Está a cinco minutos a pie.|C'est à cinq minutes à pied.|È a cinque minuti a piedi.|Fica a cinco minutos a pé.|Entfernung|
Die Bank ist an der Ecke.|The bank is on the corner.|Banka köşede.|Bank jest na rogu.|El banco está en la esquina.|La banque est au coin.|La banca è all'angolo.|O banco fica na esquina.|Dativ|an + dative (where?): an der Ecke.
Ist es weit von hier?|Is it far from here?|Buradan uzak mı?|Czy to daleko stąd?|¿Está lejos de aquí?|C'est loin d'ici ?|È lontano da qui?|É longe daqui?|Fragen|`;
const W15 = `das Wetter|the weather|hava|pogoda|el tiempo|le temps|il tempo|o tempo
die Sonne|the sun|güneş|słońce|el sol|le soleil|il sole|o sol
der Regen|the rain|yağmur|deszcz|la lluvia|la pluie|la pioggia|a chuva
der Schnee|the snow|kar|śnieg|la nieve|la neige|la neve|a neve
der Wind|the wind|rüzgâr|wiatr|el viento|le vent|il vento|o vento
es ist heiß|it's hot|hava sıcak|jest gorąco|hace calor|il fait chaud|fa caldo|está calor
es ist kalt|it's cold|hava soğuk|jest zimno|hace frío|il fait froid|fa freddo|está frio
der Sommer|the summer|yaz|lato|el verano|l'été|l'estate|o verão
der Winter|the winter|kış|zima|el invierno|l'hiver|l'inverno|o inverno
der Frühling|the spring|ilkbahar|wiosna|la primavera|le printemps|la primavera|a primavera`;
const S15 = `Wie ist das Wetter heute?|What's the weather like today?|Bugün hava nasıl?|Jaka jest dzisiaj pogoda?|¿Qué tiempo hace hoy?|Quel temps fait-il aujourd'hui ?|Che tempo fa oggi?|Como está o tempo hoje?|Wetter|
Heute ist es sehr heiß.|It's very hot today.|Bugün hava çok sıcak.|Dzisiaj jest bardzo gorąco.|Hoy hace mucho calor.|Aujourd'hui, il fait très chaud.|Oggi fa molto caldo.|Hoje está muito calor.|Satzbau|Time first, then the verb in second position: Heute ist es …
Es regnet.|It's raining.|Yağmur yağıyor.|Pada deszcz.|Está lloviendo.|Il pleut.|Piove.|Está a chover.|Wetter|Weather verbs use „es“: es regnet, es schneit.
Im Winter schneit es in den Bergen.|It snows in the mountains in winter.|Kışın dağlarda kar yağar.|Zimą w górach pada śnieg.|En invierno nieva en la montaña.|En hiver, il neige à la montagne.|In inverno nevica in montagna.|No inverno neva nas montanhas.|Jahreszeiten|Seasons: im Winter, im Sommer (in + dem).
Morgen wird es sonnig.|It's going to be sunny tomorrow.|Yarın hava güneşli olacak.|Jutro będzie słonecznie.|Mañana va a hacer sol.|Demain, il va faire beau.|Domani ci sarà il sole.|Amanhã vai estar sol.|Futur|werden + adjective = will be / become.
Ich mag den Frühling.|I like spring.|İlkbaharı severim.|Lubię wiosnę.|Me gusta la primavera.|J'aime le printemps.|Mi piace la primavera.|Gosto da primavera.|Akkusativ|der Frühling → den Frühling.`;
const W16 = `der Fußball|football|futbol|piłka nożna|el fútbol|le foot|il calcio|o futebol
lesen|to read|okumak|czytać|leer|lire|leggere|ler
schwimmen|to swim|yüzmek|pływać|nadar|nager|nuotare|nadar
tanzen|to dance|dans etmek|tańczyć|bailar|danser|ballare|dançar
das Kino|the cinema|sinema|kino|el cine|le cinéma|il cinema|o cinema
die Musik|music|müzik|muzyka|la música|la musique|la musica|a música
sich treffen|to meet|buluşmak|spotkać się|quedar|se retrouver|vedersi|encontrar-se
das Wochenende|the weekend|hafta sonu|weekend|el fin de semana|le week-end|il fine settimana|o fim de semana
oft|often|sık sık|często|a menudo|souvent|spesso|muitas vezes
nie|never|hiç|nigdy|nunca|jamais|mai|nunca`;
const S16 = `Was machst du in deiner Freizeit?|What do you do in your free time?|Boş zamanlarında ne yaparsın?|Co robisz w wolnym czasie?|¿Qué haces en tu tiempo libre?|Qu'est-ce que tu fais pendant ton temps libre ?|Cosa fai nel tempo libero?|O que fazes nos tempos livres?|Fragen|
Ich lese sehr gern.|I love reading.|Kitap okumayı çok severim.|Bardzo lubię czytać.|Me encanta leer.|J'adore lire.|Adoro leggere.|Adoro ler.|gern|„gern“ after the verb = to like doing something.
Samstags spiele ich Fußball.|I play football on Saturdays.|Cumartesileri futbol oynarım.|W soboty gram w piłkę nożną.|Juego al fútbol los sábados.|Je joue au foot le samedi.|Il sabato gioco a calcio.|Jogo futebol aos sábados.|Satzbau|„samstags“ = every Saturday.
Treffen wir uns am Freitag?|Shall we meet on Friday?|Cuma günü buluşalım mı?|Spotkamy się w piątek?|¿Quedamos el viernes?|On se retrouve vendredi ?|Ci vediamo venerdì?|Encontramo-nos na sexta?|Verabredung|Days: am Montag, am Freitag (an + dem).
Ich gehe nie ins Kino.|I never go to the cinema.|Sinemaya hiç gitmem.|Nigdy nie chodzę do kina.|Nunca voy al cine.|Je ne vais jamais au cinéma.|Non vado mai al cinema.|Nunca vou ao cinema.|Verneinung|„nie“ = never.
Am Wochenende gehe ich schwimmen.|I'm going swimming at the weekend.|Hafta sonu yüzmeye gideceğim.|W weekend idę popływać.|El fin de semana voy a nadar.|Ce week-end, je vais nager.|Nel fine settimana vado a nuotare.|No fim de semana vou nadar.|Satzbau|gehen + infinitive: schwimmen gehen, essen gehen.`;
const W17 = `der Kopf|the head|baş|głowa|la cabeza|la tête|la testa|a cabeça
der Bauch|the belly|karın|brzuch|la barriga|le ventre|la pancia|a barriga
der Rücken|the back|sırt|plecy|la espalda|le dos|la schiena|as costas
der Hals|the throat / neck|boğaz / boyun|gardło / szyja|la garganta / el cuello|la gorge / le cou|la gola / il collo|a garganta / o pescoço
der Arzt|the doctor|doktor|lekarz|el médico|le médecin|il medico|o médico
die Apotheke|the chemist's|eczane|apteka|la farmacia|la pharmacie|la farmacia|a farmácia
der Schmerz|the pain|ağrı|ból|el dolor|la douleur|il dolore|a dor
krank|ill|hasta|chory|enfermo|malade|malato|doente
das Fieber|the fever|ateş|gorączka|la fiebre|la fièvre|la febbre|a febre
die Tablette|the tablet|hap|tabletka|la pastilla|le comprimé|la compressa|o comprimido`;
const S17 = `Ich habe Kopfschmerzen.|I've got a headache.|Başım ağrıyor.|Boli mnie głowa.|Me duele la cabeza.|J'ai mal à la tête.|Ho mal di testa.|Tenho dores de cabeça.|Komposita|Kopf + Schmerzen = Kopfschmerzen; also Bauchschmerzen, Halsschmerzen.
Mir tut der Rücken weh.|My back hurts.|Sırtım ağrıyor.|Bolą mnie plecy.|Me duele la espalda.|J'ai mal au dos.|Mi fa male la schiena.|Doem-me as costas.|Dativ|„wehtun“ takes the dative: mir tut … weh.
Ich bin krank.|I'm ill.|Hastayım.|Jestem chory.|Estoy enfermo.|Je suis malade.|Sono malato.|Estou doente.|sein|
Ich habe Fieber.|I've got a temperature.|Ateşim var.|Mam gorączkę.|Tengo fiebre.|J'ai de la fièvre.|Ho la febbre.|Tenho febre.|haben|No article: Ich habe Fieber.
Ich muss zum Arzt.|I need to see a doctor.|Doktora gitmem lazım.|Muszę iść do lekarza.|Tengo que ir al médico.|Je dois aller chez le médecin.|Devo andare dal medico.|Tenho de ir ao médico.|Modalverben|zu + dem = zum. „gehen“ is often left out after „müssen“.
Haben Sie etwas gegen Halsschmerzen?|Have you got anything for a sore throat?|Boğaz ağrısı için bir şeyiniz var mı?|Czy ma pan coś na ból gardła?|¿Tiene algo para el dolor de garganta?|Vous avez quelque chose contre le mal de gorge ?|Ha qualcosa per il mal di gola?|Tem alguma coisa para a dor de garganta?|Apotheke|„gegen“ + accusative = for (an illness).`;
const W18 = `gestern|yesterday|dün|wczoraj|ayer|hier|ieri|ontem
gestern Abend|last night|dün akşam|wczoraj wieczorem|anoche|hier soir|ieri sera|ontem à noite
letzte Woche|last week|geçen hafta|w zeszłym tygodniu|la semana pasada|la semaine dernière|la settimana scorsa|a semana passada
letztes Jahr|last year|geçen yıl|w zeszłym roku|el año pasado|l'année dernière|l'anno scorso|o ano passado
ich bin gegangen|I went|gittim|poszedłem / poszłam|fui|je suis allé|sono andato|fui
ich habe gegessen|I ate|yedim|jadłem / jadłam|comí|j'ai mangé|ho mangiato|comi
ich habe gesprochen|I spoke|konuştum|rozmawiałem / rozmawiałam|hablé|j'ai parlé|ho parlato|falei
ich habe gesehen|I saw|gördüm|widziałem / widziałam|vi|j'ai vu|ho visto|vi
ich habe gekauft|I bought|aldım|kupiłem / kupiłam|compré|j'ai acheté|ho comprato|comprei
vor zwei Tagen|two days ago|iki gün önce|dwa dni temu|hace dos días|il y a deux jours|due giorni fa|há dois dias`;
const S18 = `Gestern bin ich ins Kino gegangen.|Yesterday I went to the cinema.|Dün sinemaya gittim.|Wczoraj poszedłem do kina.|Ayer fui al cine.|Hier, je suis allé au cinéma.|Ieri sono andato al cinema.|Ontem fui ao cinema.|Perfekt|Verbs of movement form the Perfekt with „sein“: ich bin gegangen.
Gestern Abend habe ich mit Freunden gegessen.|Last night I had dinner with friends.|Dün akşam arkadaşlarla yemek yedim.|Wczoraj wieczorem jadłem kolację z przyjaciółmi.|Anoche cené con amigos.|Hier soir, j'ai dîné avec des amis.|Ieri sera ho cenato con amici.|Ontem à noite jantei com amigos.|Perfekt|Most verbs use „haben“; the participle goes to the end.
Was hast du am Wochenende gemacht?|What did you do at the weekend?|Hafta sonu ne yaptın?|Co robiłeś w weekend?|¿Qué hiciste el fin de semana?|Qu'est-ce que tu as fait ce week-end ?|Cosa hai fatto nel fine settimana?|O que fizeste no fim de semana?|Perfekt|Regular participle: ge- + stem + -t: machen → gemacht.
Ich habe ein Geschenk für meine Mutter gekauft.|I bought a present for my mother.|Annem için bir hediye aldım.|Kupiłem prezent dla mamy.|Compré un regalo para mi madre.|J'ai acheté un cadeau pour ma mère.|Ho comprato un regalo per mia madre.|Comprei um presente para a minha mãe.|Perfekt|„für“ + accusative.
Ich habe einen sehr guten Film gesehen.|I saw a very good film.|Çok iyi bir film gördüm.|Widziałem bardzo dobry film.|Vi una película muy buena.|J'ai vu un très bon film.|Ho visto un film molto bello.|Vi um filme muito bom.|Perfekt|Irregular participle: sehen → gesehen.
Ich bin vor zwei Tagen in Berlin angekommen.|I arrived in Berlin two days ago.|İki gün önce Berlin'e geldim.|Przyjechałem do Berlina dwa dni temu.|Llegué a Berlín hace dos días.|Je suis arrivé à Berlin il y a deux jours.|Sono arrivato a Berlino due giorni fa.|Cheguei a Berlim há dois dias.|Zeitangaben|„vor“ + dative = ago: vor zwei Tagen.`;
const DLG3 = `13|Wie kommst du zur Arbeit?|How do you get to work?|İşe nasıl gidiyorsun?|Jak dojeżdżasz do pracy?|¿Cómo vas al trabajo?|Tu vas au travail comment ?|Come vai al lavoro?|Como vais para o trabalho?|Mit dem Bus.|Es ist sonnig.|Ich habe Kopfschmerzen.
14|Wo ist der Bahnhof?|Where is the station?|İstasyon nerede?|Gdzie jest dworzec?|¿Dónde está la estación?|Où est la gare ?|Dov'è la stazione?|Onde é a estação?|Geradeaus und dann links.|Um zehn Uhr.|Ich spiele Fußball.
15|Wie ist das Wetter?|What's the weather like?|Hava nasıl?|Jaka jest pogoda?|¿Qué tiempo hace?|Quel temps fait-il ?|Che tempo fa?|Como está o tempo?|Es ist kalt und es regnet.|Mit dem Zug.|Gestern.
16|Treffen wir uns am Samstag?|Shall we meet on Saturday?|Cumartesi buluşalım mı?|Spotkamy się w sobotę?|¿Quedamos el sábado?|On se retrouve samedi ?|Ci vediamo sabato?|Encontramo-nos no sábado?|Gern, super!|Mir tut der Rücken weh.|Rechts.
17|Was fehlt Ihnen?|What's the matter?|Neyiniz var?|Co panu dolega?|¿Qué le pasa?|Qu'est-ce qui ne va pas ?|Cosa si sente?|O que tem?|Ich habe Bauchschmerzen.|Es ist heiß.|Eine Fahrkarte, bitte.
18|Was hast du gestern gemacht?|What did you do yesterday?|Dün ne yaptın?|Co robiłeś wczoraj?|¿Qué hiciste ayer?|Qu'est-ce que tu as fait hier ?|Cosa hai fatto ieri?|O que fizeste ontem?|Ich war am Strand.|Ich fahre morgen.|Es ist weit.`;
const U = (id, e, title, pt, d, w, s) => ({id, e, title, pt, desc:mean(d), words:words(w), sents:sents(s)});
add("de", {id:"s3", title:"Unterwegs", pt:"Unterwegs", level:"A2", color:C, units:[
  U("u13","🚌","Verkehrsmittel","Mit Bus und Bahn",["Bus, train, tickets.","Otobüs, tren, bilet.","Autobus, pociąg, bilety.","Autobús, tren, billetes.","Bus, train, billets.","Autobus, treno, biglietti.","Autocarro, comboio, bilhetes."], W13, S13),
  U("u14","🧭","Wegbeschreibung","Wie komme ich …?",["Left, right, straight on.","Sol, sağ, düz.","W lewo, w prawo, prosto.","Izquierda, derecha, recto.","Gauche, droite, tout droit.","Sinistra, destra, dritto.","Esquerda, direita, em frente."], W14, S14),
  U("u15","🌦️","Wetter","Wie ist das Wetter?",["Weather and seasons.","Hava ve mevsimler.","Pogoda i pory roku.","El tiempo y las estaciones.","La météo et les saisons.","Il tempo e le stagioni.","O tempo e as estações."], W15, S15),
  U("u16","⚽","Freizeit","In meiner Freizeit",["Hobbies and making plans.","Hobiler ve buluşmalar.","Hobby i spotkania.","Aficiones y quedar.","Loisirs et rendez-vous.","Hobby e appuntamenti.","Passatempos e combinar encontros."], W16, S16),
  U("u17","🩺","Gesundheit","Beim Arzt",["Body, pain, pharmacy.","Vücut, ağrı, eczane.","Ciało, ból, apteka.","Cuerpo, dolor, farmacia.","Corps, douleur, pharmacie.","Corpo, dolore, farmacia.","Corpo, dor, farmácia."], W17, S17),
  U("u18","⏪","Gestern","Das Perfekt",["First steps in the past tense.","Geçmiş zamana ilk adımlar.","Pierwsze kroki w czasie przeszłym.","Primeros pasos en el pasado.","Premiers pas au passé.","Primi passi nel passato.","Primeiros passos no passado."], W18, S18)
]}, dialogs(DLG3));
})();
