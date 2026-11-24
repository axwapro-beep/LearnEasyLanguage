/* ===== Abschnitt 4 „Mein Leben“ (B1) für pl, tr, de ===== */
(function(){
const C = "#7C4DFF";
const add = (code, sec, dlg) => {
  const P = LEL_PACKS[code]; if(!P) return;
  P.PATH_SECTIONS.push(sec);
  P.DIALOGS = P.DIALOGS.trim() + "\n" + dlg.trim();
  P.LANG.status = P.LANG.status.replace(/^[^·]+ · Abschnitt \d von 6/, "B1 · Abschnitt 4 von 6");
};
const D = {
 u19:["💼","Arbeit","Beruf, Firma, Bewerbung."],
 u20:["🎯","Pläne","Zukunft, Wünsche, Träume."],
 u21:["💬","Meinungen","Ich glaube, weil, aber."],
 u22:["😊","Gefühle","Wie es mir geht."],
 u23:["🏨","Hotel und Reisen","Reservierung, Flug, Koffer."],
 u24:["📜","Früher","Von früher erzählen."]
};
const unit = (id, pt, words, sents) => ({id, e:D[id][0], title:D[id][1], pt, desc:D[id][2], words, sents});

/* ---------- Polnisch ---------- */
add("pl", {id:"s4", title:"Mein Leben", pt:"Moje życie", level:"B1", color:C, units:[
 unit("u19", "Praca", `praca|die Arbeit
firma|die Firma
szef|der Chef
kolega z pracy|der Kollege
spotkanie|die Besprechung
pensja|das Gehalt
rozmowa kwalifikacyjna|das Vorstellungsgespräch
życiorys|der Lebenslauf
szukać pracy|Arbeit suchen
pracować w zespole|im Team arbeiten`, `Czym się zajmujesz?|Was machst du beruflich?|Fragen|Wörtlich: „Womit beschäftigst du dich?“
Pracuję jako pielęgniarka w szpitalu.|Ich arbeite als Krankenschwester in einem Krankenhaus.|jako|jako + Nominativ = als.
Mam spotkanie o trzeciej.|Ich habe um drei eine Besprechung.|Uhrzeit|
Pracuję w tej firmie od pięciu lat.|Ich arbeite seit fünf Jahren in dieser Firma.|od|od + Genitiv = seit.
Szukam pracy.|Ich suche Arbeit.|Genitiv|szukać + Genitiv: praca → pracy.
Jutro mam rozmowę kwalifikacyjną.|Morgen habe ich ein Vorstellungsgespräch.|Akkusativ|`),
 unit("u20", "Plany", `przyszłość|die Zukunft
plan|der Plan
marzenie|der Traum
uczyć się|lernen
przeprowadzić się|umziehen
podróżować|reisen
w przyszłym roku|nächstes Jahr
kiedyś|eines Tages
może|vielleicht
mieć nadzieję|hoffen`, `W przyszłym roku nauczę się prowadzić samochód.|Nächstes Jahr lerne ich Auto fahren.|Futur|Vollendete Verben im Präsens drücken die Zukunft aus: nauczę się.
Kiedyś zamieszkam nad morzem.|Eines Tages werde ich am Meer wohnen.|Futur|
Mam nadzieję, że znajdę dobrą pracę.|Ich hoffe, dass ich eine gute Arbeit finde.|że|że = dass; vor „że“ steht immer ein Komma.
Może przeprowadzimy się do Gdańska.|Vielleicht ziehen wir nach Danzig.|Futur|
Moim marzeniem jest podróżować po świecie.|Mein Traum ist es, um die Welt zu reisen.|Instrumental|Nach „być“ steht oft der Instrumental: moim marzeniem.
Jakie masz plany na lato?|Was hast du im Sommer vor?|Fragen|`),
 unit("u21", "Opinie", `myślę, że|ich denke, dass
uważam, że|ich finde, dass
moim zdaniem|meiner Meinung nach
zgadzam się|ich bin einverstanden
bo|weil
ale|aber
jednak|jedoch
ważny|wichtig
ciekawy|interessant
skomplikowany|kompliziert`, `Myślę, że masz rację.|Ich denke, du hast recht.|Meinung|mieć rację = recht haben.
Moim zdaniem książka jest lepsza niż film.|Meiner Meinung nach ist das Buch besser als der Film.|Vergleich|lepszy niż = besser als.
Nie zgadzam się z tobą.|Ich bin nicht deiner Meinung.|Instrumental|z + Instrumental: ty → z tobą.
Lubię Kraków, bo jest tam dużo życia.|Ich mag Krakau, weil dort viel los ist.|bo|„bo“ ist umgangssprachlich, „ponieważ“ formeller.
Nie sądzę, żeby to było takie proste.|Ich glaube nicht, dass es so einfach ist.|żeby|Nach Zweifel steht oft „żeby“ + Vergangenheitsform.
To ciekawe, ale trochę drogie.|Das ist interessant, aber etwas teuer.|Konjunktionen|`),
 unit("u22", "Uczucia", `szczęśliwy|glücklich
smutny|traurig
zmęczony|müde
zdenerwowany|nervös
zły|wütend
zadowolony|zufrieden
zmartwiony|besorgt
zaskoczony|überrascht
bać się|Angst haben
tęsknić|vermissen`, `Dzisiaj jestem bardzo zmęczony.|Heute bin ich sehr müde.|być|Frau: zmęczona.
Denerwuję się przed egzaminem.|Ich bin vor der Prüfung nervös.|przed|przed + Instrumental = vor.
Tęsknię za tobą.|Ich vermisse dich.|tęsknić za|tęsknić za + Instrumental.
Bardzo się cieszę, że cię widzę.|Ich freue mich sehr, dich zu sehen.|cieszyć się|
Dlaczego jesteś smutny?|Warum bist du traurig?|Fragen|dlaczego = warum.
Boję się psów.|Ich habe Angst vor Hunden.|Genitiv|bać się + Genitiv: psy → psów.`),
 unit("u23", "Podróż", `hotel|das Hotel
pokój dwuosobowy|das Doppelzimmer
rezerwacja|die Reservierung
klucz|der Schlüssel
paszport|der Reisepass
walizka|der Koffer
śniadanie|das Frühstück
lotnisko|der Flughafen
lot|der Flug
urlop|der Urlaub`, `Mam rezerwację na nazwisko Müller.|Ich habe eine Reservierung auf den Namen Müller.|Hotel|
Czy śniadanie jest wliczone w cenę?|Ist das Frühstück im Preis inbegriffen?|Hotel|
Poproszę pokój dwuosobowy na dwie noce.|Ich hätte gern ein Doppelzimmer für zwei Nächte.|Höflichkeit|
O której trzeba zwolnić pokój?|Um wie viel Uhr muss man das Zimmer räumen?|trzeba|trzeba + Infinitiv = man muss.
Mój lot jest o szóstej rano.|Mein Flug ist um sechs Uhr morgens.|Uhrzeit|
Zgubiłem walizkę.|Ich habe meinen Koffer verloren.|Vergangenheit|Frau: zgubiłam.`),
 unit("u24", "Dawniej", `kiedy byłem dzieckiem|als ich ein Kind war (Mann)
dawniej|früher
zawsze|immer
każdego lata|jeden Sommer
nagle|plötzlich
podczas gdy|während
potem|danach
mieszkałem|ich wohnte (Mann)
grałem|ich spielte (Mann)
było|es gab / es war`, `Kiedy byłem dzieckiem, mieszkałem na wsi.|Als ich ein Kind war, wohnte ich auf dem Land.|Aspekt|Unvollendete Verben beschreiben Zustände und Gewohnheiten.
Dawniej codziennie grałem w piłkę.|Früher spielte ich jeden Tag Fußball.|Aspekt|
Każdego lata jeździliśmy nad morze.|Jeden Sommer fuhren wir ans Meer.|Aspekt|Wiederholte Fahrten: jeździć (unvollendet).
Kiedy gotowałem, zadzwonił telefon.|Während ich kochte, klingelte das Telefon.|Aspekt|Hintergrund unvollendet (gotowałem), neues Ereignis vollendet (zadzwonił).
Nagle zaczęło padać.|Plötzlich fing es an zu regnen.|Aspekt|
W mojej wsi był bardzo ładny rynek.|In meinem Dorf gab es einen sehr schönen Marktplatz.|być|`)
]}, `19|Czym się zajmujesz?|Was machst du beruflich?|Jestem nauczycielem.|Jest gorąco.|Wczoraj byłem w kinie.
20|Co będziesz robić w przyszłe wakacje?|Was machst du in den nächsten Ferien?|Pojadę do Kanady.|Jestem zmęczony.|Mam rezerwację.
21|Co myślisz o tym filmie?|Was hältst du von diesem Film?|Myślę, że jest bardzo dobry.|O szóstej.|Boli mnie głowa.
22|Co się stało? Wyglądasz na smutnego.|Was ist los? Du siehst traurig aus.|Tęsknię za rodziną.|To bardzo tanie.|Jadę autobusem.
23|Czy ma pan rezerwację?|Haben Sie eine Reservierung?|Tak, na nazwisko Müller.|Jest słonecznie.|Gram w piłkę.
24|Gdzie mieszkałeś jako dziecko?|Wo hast du als Kind gewohnt?|Na wsi pod Krakowem.|Jutro o dziesiątej.|Kartą.`);

/* ---------- Türkisch ---------- */
add("tr", {id:"s4", title:"Mein Leben", pt:"Hayatım", level:"B1", color:C, units:[
 unit("u19", "İş", `iş|die Arbeit
şirket|die Firma
patron|der Chef
iş arkadaşı|der Kollege
toplantı|die Besprechung
maaş|das Gehalt
iş görüşmesi|das Vorstellungsgespräch
özgeçmiş|der Lebenslauf
iş aramak|Arbeit suchen
ekip çalışması|die Teamarbeit`, `Ne iş yapıyorsun?|Was machst du beruflich?|Fragen|
Bir hastanede hemşire olarak çalışıyorum.|Ich arbeite als Krankenschwester in einem Krankenhaus.|olarak|olarak = als.
Saat üçte bir toplantım var.|Ich habe um drei eine Besprechung.|var|
Beş yıldır bu şirkette çalışıyorum.|Ich arbeite seit fünf Jahren in dieser Firma.|-dir|-dır / -dir nach einem Zeitraum = seit.
İş arıyorum.|Ich suche Arbeit.|Verlaufsform|
Yarın bir iş görüşmem var.|Morgen habe ich ein Vorstellungsgespräch.|var|`),
 unit("u20", "Planlar", `gelecek|die Zukunft
plan|der Plan
hayal|der Traum
öğrenmek|lernen
taşınmak|umziehen
seyahat etmek|reisen
gelecek yıl|nächstes Jahr
bir gün|eines Tages
belki|vielleicht
umarım|ich hoffe`, `Gelecek yıl araba kullanmayı öğreneceğim.|Nächstes Jahr lerne ich Auto fahren.|Futur|-acak / -ecek für Pläne.
Bir gün deniz kenarında yaşayacağım.|Eines Tages werde ich am Meer wohnen.|Futur|
Umarım iyi bir iş bulurum.|Ich hoffe, ich finde eine gute Arbeit.|umarım|„umarım“ = ich hoffe (feste Form).
Belki İzmir'e taşınırız.|Vielleicht ziehen wir nach İzmir.|Geniş zaman|Die -r-Zeit drückt auch Möglichkeiten aus.
Hayalim dünyayı gezmek.|Mein Traum ist es, die Welt zu bereisen.|Infinitiv|
Yaz için planların neler?|Was hast du im Sommer vor?|Fragen|`),
 unit("u21", "Fikirler", `bence|meiner Meinung nach
sanırım|ich glaube
bence de|finde ich auch
katılıyorum|ich stimme zu
çünkü|weil
ama|aber
fakat|jedoch
önemli|wichtig
ilginç|interessant
karmaşık|kompliziert`, `Sanırım haklısın.|Ich glaube, du hast recht.|Meinung|haklı olmak = recht haben.
Bence kitap filmden daha iyi.|Meiner Meinung nach ist das Buch besser als der Film.|Vergleich|-den daha … = … als.
Sana katılmıyorum.|Ich bin nicht deiner Meinung.|Dativ|katılmak + Dativ: sen → sana.
İstanbul'u seviyorum çünkü çok canlı.|Ich mag Istanbul, weil es sehr lebendig ist.|çünkü|
Bu kadar kolay olduğunu sanmıyorum.|Ich glaube nicht, dass es so einfach ist.|-dığı|Nebensätze mit -dığını: olduğunu = dass es ist.
İlginç ama biraz pahalı.|Interessant, aber etwas teuer.|Konjunktionen|`),
 unit("u22", "Duygular", `mutlu|glücklich
üzgün|traurig
yorgun|müde
heyecanlı|aufgeregt
kızgın|wütend
memnun|zufrieden
endişeli|besorgt
şaşkın|überrascht
korkmak|Angst haben
özlemek|vermissen`, `Bugün çok yorgunum.|Heute bin ich sehr müde.|Personalendung|yorgun + -um = ich bin müde.
Sınav yüzünden heyecanlıyım.|Ich bin wegen der Prüfung aufgeregt.|yüzünden|yüzünden = wegen.
Seni özledim.|Ich vermisse dich.|özlemek|Steht meist in der Vergangenheit: özledim.
Seni gördüğüme çok sevindim.|Ich freue mich sehr, dich zu sehen.|sevinmek|
Neden üzgünsün?|Warum bist du traurig?|Fragen|neden = warum.
Köpeklerden korkarım.|Ich habe Angst vor Hunden.|Ablativ|korkmak + Ablativ: köpeklerden.`),
 unit("u23", "Seyahat", `otel|das Hotel
çift kişilik oda|das Doppelzimmer
rezervasyon|die Reservierung
anahtar|der Schlüssel
pasaport|der Reisepass
bavul|der Koffer
kahvaltı|das Frühstück
havalimanı|der Flughafen
uçuş|der Flug
tatil|der Urlaub`, `Müller adına bir rezervasyonum var.|Ich habe eine Reservierung auf den Namen Müller.|Hotel|
Kahvaltı dahil mi?|Ist das Frühstück inbegriffen?|Hotel|
İki gece için çift kişilik bir oda istiyorum.|Ich möchte ein Doppelzimmer für zwei Nächte.|Höflichkeit|
Odayı saat kaçta boşaltmamız gerekiyor?|Um wie viel Uhr müssen wir das Zimmer räumen?|gerekmek|-mamız gerekiyor = wir müssen.
Uçuşum sabah altıda.|Mein Flug ist um sechs Uhr morgens.|Uhrzeit|
Bavulumu kaybettim.|Ich habe meinen Koffer verloren.|Vergangenheit|`),
 unit("u24", "Eskiden", `çocukken|als ich ein Kind war
eskiden|früher
her zaman|immer
her yaz|jeden Sommer
birden|plötzlich
yemek yaparken|während ich kochte
sonra|danach
otururdum|ich wohnte (früher)
oynardım|ich spielte (früher)
vardı|es gab`, `Çocukken bir köyde otururdum.|Als ich ein Kind war, wohnte ich in einem Dorf.|-r-di|Gewohnheiten in der Vergangenheit: -r + -dı (otururdum).
Eskiden her gün futbol oynardım.|Früher spielte ich jeden Tag Fußball.|-r-di|
Her yaz denize giderdik.|Jeden Sommer fuhren wir ans Meer.|-r-di|
Yemek yaparken telefon çaldı.|Während ich kochte, klingelte das Telefon.|-ken|-ken = während: yaparken.
Birden yağmur yağmaya başladı.|Plötzlich fing es an zu regnen.|Vergangenheit|
Köyümde çok güzel bir meydan vardı.|In meinem Dorf gab es einen sehr schönen Platz.|vardı|vardı = es gab.`)
]}, `19|Ne iş yapıyorsun?|Was machst du beruflich?|Öğretmenim.|Hava sıcak.|Dün sinemaya gittim.
20|Gelecek yaz ne yapacaksın?|Was machst du nächsten Sommer?|Kanada'ya gideceğim.|Yorgunum.|Rezervasyonum var.
21|Film hakkında ne düşünüyorsun?|Was hältst du von dem Film?|Bence çok güzel.|Saat altıda.|Başım ağrıyor.
22|Ne oldu? Üzgün görünüyorsun.|Was ist los? Du siehst traurig aus.|Ailemi özledim.|Çok ucuz.|Otobüsle gidiyorum.
23|Rezervasyonunuz var mı?|Haben Sie eine Reservierung?|Evet, Müller adına.|Hava güneşli.|Futbol oynarım.
24|Çocukken nerede otururdun?|Wo hast du als Kind gewohnt?|Ankara yakınında bir köyde.|Yarın saat onda.|Kartla.`);

/* ---------- Deutsch (Hilfssprachen: en|tr|pl|es|fr|it|pt) ---------- */
const DE = LEL_PACKS.de; if(!DE || !DE._fmt) return;
const {words, sents, dialogs, mean} = DE._fmt;
const W19 = `die Arbeit|work|iş|praca|el trabajo|le travail|il lavoro|o trabalho
die Firma|the company|şirket|firma|la empresa|l'entreprise|l'azienda|a empresa
der Chef|the boss|patron|szef|el jefe|le chef|il capo|o chefe
der Kollege|the colleague|iş arkadaşı|kolega z pracy|el compañero|le collègue|il collega|o colega
die Besprechung|the meeting|toplantı|spotkanie|la reunión|la réunion|la riunione|a reunião
das Gehalt|the salary|maaş|pensja|el sueldo|le salaire|lo stipendio|o salário
das Vorstellungsgespräch|the job interview|iş görüşmesi|rozmowa kwalifikacyjna|la entrevista de trabajo|l'entretien d'embauche|il colloquio di lavoro|a entrevista de emprego
der Lebenslauf|the CV|özgeçmiş|życiorys|el currículum|le CV|il curriculum|o currículo
Arbeit suchen|to look for work|iş aramak|szukać pracy|buscar trabajo|chercher du travail|cercare lavoro|procurar trabalho
im Team arbeiten|to work in a team|ekip halinde çalışmak|pracować w zespole|trabajar en equipo|travailler en équipe|lavorare in squadra|trabalhar em equipa`;
const S19 = `Was machst du beruflich?|What do you do for a living?|Ne iş yapıyorsun?|Czym się zajmujesz?|¿A qué te dedicas?|Qu'est-ce que tu fais dans la vie ?|Che lavoro fai?|O que fazes na vida?|Fragen|
Ich arbeite als Krankenpflegerin im Krankenhaus.|I work as a nurse in the hospital.|Hastanede hemşire olarak çalışıyorum.|Pracuję jako pielęgniarka w szpitalu.|Trabajo como enfermera en el hospital.|Je travaille comme infirmière à l'hôpital.|Lavoro come infermiera in ospedale.|Trabalho como enfermeira no hospital.|Beruf|„als“ + profession without article.
Ich habe um drei Uhr eine Besprechung.|I've got a meeting at three.|Saat üçte bir toplantım var.|Mam spotkanie o trzeciej.|Tengo una reunión a las tres.|J'ai une réunion à quinze heures.|Ho una riunione alle tre.|Tenho uma reunião às três.|Satzbau|Time usually comes before the object.
Ich arbeite seit fünf Jahren in dieser Firma.|I've worked for this company for five years.|Beş yıldır bu şirkette çalışıyorum.|Pracuję w tej firmie od pięciu lat.|Llevo cinco años en esta empresa.|Je travaille dans cette entreprise depuis cinq ans.|Lavoro in questa azienda da cinque anni.|Trabalho nesta empresa há cinco anos.|seit|„seit“ + dative + present tense (not past!).
Ich suche Arbeit.|I'm looking for work.|İş arıyorum.|Szukam pracy.|Busco trabajo.|Je cherche du travail.|Cerco lavoro.|Procuro trabalho.|Präsens|German has no progressive form: ich suche = I'm looking.
Morgen habe ich ein Vorstellungsgespräch.|I've got a job interview tomorrow.|Yarın bir iş görüşmem var.|Jutro mam rozmowę kwalifikacyjną.|Mañana tengo una entrevista de trabajo.|Demain, j'ai un entretien d'embauche.|Domani ho un colloquio di lavoro.|Amanhã tenho uma entrevista de emprego.|Satzbau|`;
const W20 = `die Zukunft|the future|gelecek|przyszłość|el futuro|l'avenir|il futuro|o futuro
der Plan|the plan|plan|plan|el plan|le projet|il progetto|o plano
der Traum|the dream|hayal|marzenie|el sueño|le rêve|il sogno|o sonho
lernen|to learn|öğrenmek|uczyć się|aprender|apprendre|imparare|aprender
umziehen|to move (house)|taşınmak|przeprowadzić się|mudarse|déménager|trasferirsi|mudar de casa
reisen|to travel|seyahat etmek|podróżować|viajar|voyager|viaggiare|viajar
nächstes Jahr|next year|gelecek yıl|w przyszłym roku|el año que viene|l'année prochaine|l'anno prossimo|no próximo ano
eines Tages|one day|bir gün|kiedyś|algún día|un jour|un giorno|um dia
vielleicht|maybe|belki|może|quizás|peut-être|forse|talvez
hoffen|to hope|ummak|mieć nadzieję|esperar|espérer|sperare|esperar`;
const S20 = `Nächstes Jahr lerne ich Auto fahren.|Next year I'm going to learn to drive.|Gelecek yıl araba kullanmayı öğreneceğim.|W przyszłym roku nauczę się prowadzić samochód.|El año que viene voy a aprender a conducir.|L'année prochaine, je vais apprendre à conduire.|L'anno prossimo imparerò a guidare.|No próximo ano vou aprender a conduzir.|Zukunft|With a time word, the present tense expresses the future.
Eines Tages werde ich am Meer wohnen.|One day I'll live by the sea.|Bir gün deniz kenarında yaşayacağım.|Kiedyś zamieszkam nad morzem.|Algún día viviré en la playa.|Un jour, j'habiterai au bord de la mer.|Un giorno vivrò al mare.|Um dia vou viver junto ao mar.|Futur I|werden + infinitive at the end.
Ich hoffe, dass ich eine gute Arbeit finde.|I hope I find a good job.|Umarım iyi bir iş bulurum.|Mam nadzieję, że znajdę dobrą pracę.|Espero encontrar un buen trabajo.|J'espère trouver un bon travail.|Spero di trovare un buon lavoro.|Espero encontrar um bom trabalho.|Nebensätze|In a „dass“ clause the verb goes to the end.
Vielleicht ziehen wir nach Leipzig um.|Maybe we'll move to Leipzig.|Belki Leipzig'e taşınırız.|Może przeprowadzimy się do Lipska.|Quizás nos mudemos a Leipzig.|On va peut-être déménager à Leipzig.|Forse ci trasferiamo a Lipsia.|Talvez nos mudemos para Leipzig.|Trennbare Verben|umziehen: the prefix „um“ goes to the end.
Mein Traum ist es, die Welt zu bereisen.|My dream is to travel the world.|Hayalim dünyayı gezmek.|Moim marzeniem jest podróżować po świecie.|Mi sueño es viajar por todo el mundo.|Mon rêve, c'est de voyager dans le monde entier.|Il mio sogno è viaggiare per il mondo.|O meu sonho é viajar pelo mundo.|zu + Infinitiv|„zu“ + infinitive at the end.
Was hast du im Sommer vor?|What are your plans for the summer?|Yaz için planların neler?|Jakie masz plany na lato?|¿Qué planes tienes para el verano?|Qu'est-ce que tu fais cet été ?|Cosa fai quest'estate?|Que planos tens para o verão?|Trennbare Verben|vorhaben = to plan: Was hast du vor?`;
const W21 = `ich glaube|I believe|sanırım|myślę|creo|je crois|credo|acho
ich finde|I think|bence|uważam|me parece|je trouve|trovo|acho
meiner Meinung nach|in my opinion|bence|moim zdaniem|en mi opinión|à mon avis|secondo me|na minha opinião
einverstanden|agreed|katılıyorum|zgoda|de acuerdo|d'accord|d'accordo|de acordo
weil|because|çünkü|bo / ponieważ|porque|parce que|perché|porque
aber|but|ama|ale|pero|mais|ma|mas
trotzdem|nevertheless|yine de|mimo to|sin embargo|pourtant|comunque|mesmo assim
wichtig|important|önemli|ważny|importante|important|importante|importante
interessant|interesting|ilginç|ciekawy|interesante|intéressant|interessante|interessante
kompliziert|complicated|karmaşık|skomplikowany|complicado|compliqué|complicato|complicado`;
const S21 = `Ich glaube, du hast recht.|I think you're right.|Sanırım haklısın.|Myślę, że masz rację.|Creo que tienes razón.|Je crois que tu as raison.|Credo che tu abbia ragione.|Acho que tens razão.|Meinung|recht haben = to be right.
Meiner Meinung nach ist das Buch besser als der Film.|In my opinion the book is better than the film.|Bence kitap filmden daha iyi.|Moim zdaniem książka jest lepsza niż film.|En mi opinión, el libro es mejor que la película.|À mon avis, le livre est meilleur que le film.|Secondo me, il libro è meglio del film.|Na minha opinião, o livro é melhor do que o filme.|Vergleich|gut → besser → am besten; comparison with „als“.
Ich bin nicht deiner Meinung.|I don't agree with you.|Sana katılmıyorum.|Nie zgadzam się z tobą.|No estoy de acuerdo contigo.|Je ne suis pas d'accord avec toi.|Non sono d'accordo con te.|Não concordo contigo.|Meinung|
Ich mag Hamburg, weil dort viel los ist.|I like Hamburg because there's a lot going on.|Hamburg'u seviyorum çünkü orada çok şey oluyor.|Lubię Hamburg, bo dużo się tam dzieje.|Me gusta Hamburgo porque hay mucha vida.|J'aime Hambourg parce qu'il s'y passe beaucoup de choses.|Mi piace Amburgo perché c'è tanta vita.|Gosto de Hamburgo porque há muita animação.|weil|After „weil“ the verb goes to the end.
Ich glaube nicht, dass es so einfach ist.|I don't think it's that easy.|Bu kadar kolay olduğunu sanmıyorum.|Nie sądzę, żeby to było takie proste.|No creo que sea tan fácil.|Je ne pense pas que ce soit si facile.|Non credo che sia così facile.|Não acho que seja tão fácil.|Nebensätze|„dass“ clause: verb at the end.
Das ist interessant, aber etwas teuer.|That's interesting, but a bit expensive.|İlginç ama biraz pahalı.|To ciekawe, ale trochę drogie.|Es interesante, pero un poco caro.|C'est intéressant, mais un peu cher.|È interessante, ma un po' caro.|É interessante, mas um pouco caro.|Konjunktionen|After „aber“ the normal word order stays.`;
const W22 = `glücklich|happy|mutlu|szczęśliwy|feliz|heureux|felice|feliz
traurig|sad|üzgün|smutny|triste|triste|triste|triste
müde|tired|yorgun|zmęczony|cansado|fatigué|stanco|cansado
nervös|nervous|heyecanlı|zdenerwowany|nervioso|nerveux|nervoso|nervoso
wütend|angry|kızgın|zły|enfadado|en colère|arrabbiato|zangado
zufrieden|satisfied|memnun|zadowolony|contento|content|contento|satisfeito
besorgt|worried|endişeli|zmartwiony|preocupado|inquiet|preoccupato|preocupado
überrascht|surprised|şaşkın|zaskoczony|sorprendido|surpris|sorpreso|surpreendido
Angst haben|to be afraid|korkmak|bać się|tener miedo|avoir peur|avere paura|ter medo
vermissen|to miss|özlemek|tęsknić|echar de menos|manquer|mancare|ter saudades`;
const S22 = `Heute bin ich sehr müde.|I'm very tired today.|Bugün çok yorgunum.|Dzisiaj jestem bardzo zmęczony.|Hoy estoy muy cansado.|Aujourd'hui, je suis très fatigué.|Oggi sono molto stanco.|Hoje estou muito cansado.|sein|
Ich bin wegen der Prüfung nervös.|I'm nervous because of the exam.|Sınav yüzünden heyecanlıyım.|Denerwuję się przed egzaminem.|Estoy nervioso por el examen.|Je suis stressé à cause de l'examen.|Sono nervoso per l'esame.|Estou nervoso por causa do exame.|wegen|„wegen“ + genitive (in speech often dative).
Ich vermisse dich.|I miss you.|Seni özledim.|Tęsknię za tobą.|Te echo de menos.|Tu me manques.|Mi manchi.|Tenho saudades tuas.|Akkusativ|du → dich.
Ich freue mich sehr, dich zu sehen.|I'm very happy to see you.|Seni gördüğüme çok sevindim.|Bardzo się cieszę, że cię widzę.|Me alegro mucho de verte.|Je suis très content de te voir.|Sono molto contento di vederti.|Estou muito contente por te ver.|Reflexive Verben|sich freuen: ich freue mich, du freust dich …
Warum bist du traurig?|Why are you sad?|Neden üzgünsün?|Dlaczego jesteś smutny?|¿Por qué estás triste?|Pourquoi tu es triste ?|Perché sei triste?|Porque estás triste?|Fragen|warum = why, weil = because.
Ich habe Angst vor Hunden.|I'm afraid of dogs.|Köpeklerden korkarım.|Boję się psów.|Tengo miedo de los perros.|J'ai peur des chiens.|Ho paura dei cani.|Tenho medo de cães.|Präpositionen|Angst vor + dative: vor Hunden.`;
const W23 = `das Hotel|the hotel|otel|hotel|el hotel|l'hôtel|l'albergo|o hotel
das Doppelzimmer|the double room|çift kişilik oda|pokój dwuosobowy|la habitación doble|la chambre double|la camera doppia|o quarto duplo
die Reservierung|the booking|rezervasyon|rezerwacja|la reserva|la réservation|la prenotazione|a reserva
der Schlüssel|the key|anahtar|klucz|la llave|la clé|la chiave|a chave
der Reisepass|the passport|pasaport|paszport|el pasaporte|le passeport|il passaporto|o passaporte
der Koffer|the suitcase|bavul|walizka|la maleta|la valise|la valigia|a mala
das Frühstück|breakfast|kahvaltı|śniadanie|el desayuno|le petit-déjeuner|la colazione|o pequeno-almoço
der Flughafen|the airport|havalimanı|lotnisko|el aeropuerto|l'aéroport|l'aeroporto|o aeroporto
der Flug|the flight|uçuş|lot|el vuelo|le vol|il volo|o voo
der Urlaub|the holiday|tatil|urlop|las vacaciones|les vacances|le vacanze|as férias`;
const S23 = `Ich habe eine Reservierung auf den Namen Müller.|I've got a booking in the name of Müller.|Müller adına bir rezervasyonum var.|Mam rezerwację na nazwisko Müller.|Tengo una reserva a nombre de Müller.|J'ai une réservation au nom de Müller.|Ho una prenotazione a nome Müller.|Tenho uma reserva em nome de Müller.|Hotel|„auf den Namen“ = in the name of.
Ist das Frühstück inklusive?|Is breakfast included?|Kahvaltı dahil mi?|Czy śniadanie jest wliczone w cenę?|¿Está incluido el desayuno?|Le petit-déjeuner est compris ?|La colazione è inclusa?|O pequeno-almoço está incluído?|Hotel|
Ich hätte gern ein Doppelzimmer für zwei Nächte.|I'd like a double room for two nights.|İki gece için çift kişilik bir oda istiyorum.|Poproszę pokój dwuosobowy na dwie noce.|Quería una habitación doble para dos noches.|Je voudrais une chambre double pour deux nuits.|Vorrei una camera doppia per due notti.|Queria um quarto duplo para duas noites.|Höflichkeit|
Bis wann muss ich das Zimmer verlassen?|By when do I have to leave the room?|Odayı ne zamana kadar boşaltmam gerekiyor?|Do której muszę zwolnić pokój?|¿Hasta cuándo tengo que dejar la habitación?|Je dois libérer la chambre avant quelle heure ?|Entro che ora devo lasciare la camera?|Até quando tenho de deixar o quarto?|Modalverben|müssen + infinitive at the end.
Mein Flug geht um sechs Uhr morgens.|My flight leaves at six in the morning.|Uçuşum sabah altıda.|Mój lot jest o szóstej rano.|Mi vuelo sale a las seis de la mañana.|Mon vol part à six heures du matin.|Il mio volo parte alle sei di mattina.|O meu voo parte às seis da manhã.|Uhrzeit|„gehen“ is common for departures: Der Flug geht um …
Ich habe meinen Koffer verloren.|I've lost my suitcase.|Bavulumu kaybettim.|Zgubiłem walizkę.|He perdido mi maleta.|J'ai perdu ma valise.|Ho perso la valigia.|Perdi a minha mala.|Perfekt|verlieren → verloren (no „ge-“!).`;
const W24 = `als ich ein Kind war|when I was a child|çocukken|kiedy byłem dzieckiem|cuando era niño|quand j'étais petit|quando ero piccolo|quando era criança
früher|in the past|eskiden|dawniej|antes|avant|prima|antigamente
immer|always|her zaman|zawsze|siempre|toujours|sempre|sempre
jeden Sommer|every summer|her yaz|każdego lata|todos los veranos|chaque été|ogni estate|todos os verões
plötzlich|suddenly|birden|nagle|de repente|tout à coup|all'improvviso|de repente
während|while|-ken|podczas gdy|mientras|pendant que|mentre|enquanto
danach|afterwards|sonra|potem|después|ensuite|dopo|depois
ich wohnte|I lived|otururdum|mieszkałem|vivía|j'habitais|abitavo|morava
ich hatte|I had|-m vardı|miałem|tenía|j'avais|avevo|tinha
es gab|there was / were|vardı|był / była / było|había|il y avait|c'era / c'erano|havia`;
const S24 = `Als ich ein Kind war, wohnte ich auf dem Land.|When I was a child, I lived in the country.|Çocukken köyde otururdum.|Kiedy byłem dzieckiem, mieszkałem na wsi.|Cuando era niño, vivía en el campo.|Quand j'étais petit, j'habitais à la campagne.|Quando ero piccolo, abitavo in campagna.|Quando era criança, morava no campo.|Präteritum|Storytelling past: Präteritum. „als“ = when (once, in the past).
Früher hatte ich keine Zeit.|In the past I had no time.|Eskiden hiç vaktim yoktu.|Dawniej nie miałem czasu.|Antes no tenía tiempo.|Avant, je n'avais pas le temps.|Prima non avevo tempo.|Antes não tinha tempo.|Präteritum|haben → hatte, sein → war: common in speech too.
Jeden Sommer sind wir ans Meer gefahren.|Every summer we went to the seaside.|Her yaz denize giderdik.|Każdego lata jeździliśmy nad morze.|Todos los veranos íbamos a la playa.|Chaque été, nous allions à la mer.|Ogni estate andavamo al mare.|Todos os verões íamos para a praia.|Perfekt|In speech, most verbs use the Perfekt.
Während ich kochte, klingelte das Telefon.|While I was cooking, the phone rang.|Yemek yaparken telefon çaldı.|Kiedy gotowałem, zadzwonił telefon.|Mientras cocinaba, sonó el teléfono.|Pendant que je cuisinais, le téléphone a sonné.|Mentre cucinavo, è squillato il telefono.|Enquanto cozinhava, o telefone tocou.|Nebensätze|After „während“ the verb goes to the end.
Plötzlich fing es an zu regnen.|Suddenly it started to rain.|Birden yağmur yağmaya başladı.|Nagle zaczęło padać.|De repente empezó a llover.|Tout à coup, il a commencé à pleuvoir.|All'improvviso ha cominciato a piovere.|De repente começou a chover.|Präteritum|anfangen → fing an.
In meinem Dorf gab es einen schönen Marktplatz.|There was a beautiful market square in my village.|Köyümde güzel bir pazar meydanı vardı.|W mojej wsi był piękny rynek.|En mi pueblo había una plaza muy bonita.|Dans mon village, il y avait une belle place.|Nel mio paese c'era una bella piazza.|Na minha aldeia havia uma praça bonita.|es gibt|es gibt → es gab + accusative.`;
const DLG4 = `19|Was machst du beruflich?|What do you do?|Ne iş yapıyorsun?|Czym się zajmujesz?|¿A qué te dedicas?|Qu'est-ce que tu fais dans la vie ?|Che lavoro fai?|O que fazes na vida?|Ich bin Lehrer.|Es ist heiß.|Ich war gestern im Kino.
20|Was machst du nächsten Sommer?|What are you doing next summer?|Gelecek yaz ne yapacaksın?|Co robisz w przyszłe lato?|¿Qué haces el verano que viene?|Qu'est-ce que tu fais l'été prochain ?|Cosa fai l'estate prossima?|O que fazes no próximo verão?|Ich fahre nach Kanada.|Ich bin müde.|Ich habe eine Reservierung.
21|Wie findest du den Film?|What do you think of the film?|Filmi nasıl buldun?|Jak ci się podoba ten film?|¿Qué te parece la película?|Comment tu trouves le film ?|Come ti sembra il film?|O que achas do filme?|Ich finde ihn sehr gut.|Um sechs Uhr.|Ich habe Kopfschmerzen.
22|Was ist los? Du siehst traurig aus.|What's wrong? You look sad.|Ne oldu? Üzgün görünüyorsun.|Co się stało? Wyglądasz na smutnego.|¿Qué te pasa? Pareces triste.|Qu'est-ce qui se passe ? Tu as l'air triste.|Cosa c'è? Sembri triste.|O que se passa? Pareces triste.|Ich vermisse meine Familie.|Das ist sehr billig.|Ich fahre mit dem Bus.
23|Haben Sie eine Reservierung?|Do you have a booking?|Rezervasyonunuz var mı?|Czy ma pan rezerwację?|¿Tiene una reserva?|Vous avez une réservation ?|Ha una prenotazione?|Tem reserva?|Ja, auf den Namen Müller.|Es ist sonnig.|Ich spiele Fußball.
24|Wo hast du als Kind gewohnt?|Where did you live as a child?|Çocukken nerede otururdun?|Gdzie mieszkałeś jako dziecko?|¿Dónde vivías de niño?|Tu habitais où quand tu étais petit ?|Dove abitavi da piccolo?|Onde moravas em criança?|In einem Dorf bei Köln.|Morgen um zehn.|Mit Karte.`;
const U = (id, e, title, pt, d, w, s) => ({id, e, title, pt, desc:mean(d), words:words(w), sents:sents(s)});
add("de", {id:"s4", title:"Mein Leben", pt:"Mein Leben", level:"B1", color:C, units:[
  U("u19","💼","Arbeit","Im Beruf",["Job, company, applying.","Meslek, şirket, iş başvurusu.","Zawód, firma, rekrutacja.","Profesión, empresa, solicitud.","Métier, entreprise, candidature.","Professione, azienda, candidatura.","Profissão, empresa, candidatura."], W19, S19),
  U("u20","🎯","Pläne","Meine Zukunft",["Future, wishes, dreams.","Gelecek, istekler, hayaller.","Przyszłość, życzenia, marzenia.","Futuro, deseos, sueños.","Avenir, souhaits, rêves.","Futuro, desideri, sogni.","Futuro, desejos, sonhos."], W20, S20),
  U("u21","💬","Meinungen","Ich finde, dass …",["Giving opinions – „weil“ and „dass“.","Fikir bildirmek – „weil“ ve „dass“.","Wyrażanie opinii – „weil“ i „dass“.","Dar opiniones – „weil“ y „dass“.","Donner son avis – « weil » et « dass ».","Dare opinioni – „weil“ e „dass“.","Dar opiniões – „weil“ e „dass“."], W21, S21),
  U("u22","😊","Gefühle","Wie geht es dir?",["How I feel.","Nasıl hissediyorum.","Jak się czuję.","Cómo me siento.","Comment je me sens.","Come mi sento.","Como me sinto."], W22, S22),
  U("u23","🏨","Hotel und Reisen","Im Hotel",["Booking, flight, suitcase.","Rezervasyon, uçuş, bavul.","Rezerwacja, lot, walizka.","Reserva, vuelo, maleta.","Réservation, vol, valise.","Prenotazione, volo, valigia.","Reserva, voo, mala."], W23, S23),
  U("u24","📜","Früher","Das Präteritum",["Talking about the past.","Geçmişi anlatmak.","Opowiadanie o przeszłości.","Contar el pasado.","Raconter le passé.","Raccontare il passato.","Contar o passado."], W24, S24)
]}, dialogs(DLG4));
})();
