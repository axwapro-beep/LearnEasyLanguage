/* ===== Sprachpaket: Türkisch (Türkeitürkisch) =====
   Norm: Türk Dil Kurumu (TDK) – Güncel Türkçe Sözlük und Yazım Kılavuzu; Lehrwerke des Yunus Emre Enstitüsü. Siehe QUELLEN.md. */
LEL_PACKS.tr = {
LANG: {code:"tr", flag:"🇹🇷", name:"Türkisch", adj:"Türkisch", inLang:"Türkisch", into:"ins Türkische",
  country:"der Türkei", voiceFrom:"aus der Türkei", tts:"tr-TR", ttsRe:/^tr/i, prefix:"tr",
  voicePath:"Türkisch", status:"A1 · Abschnitt 1 von 6", tutor:false},
ART_RE: /^(der|die|das|ein|eine|einen) /,
F_RE: /yelda|filiz|seda|female|kadın|woman/i,
M_RE: /cem|ahmet|emre|\bmale\b|erkek|\bman\b/i,
FUNC: ["ve","bir","bu","ne","mi","mı","mu","mü","da","de","için","ile","çok","değil","var","yok"],
LEVEL_NAMES: {A1:"Absolute Grundlagen",A2:"Einfache Gespräche & Alltag",B1:"Selbstständig kommunizieren",B2:"Flüssiger sprechen",C1:"Fortgeschrittenes Türkisch"},
CURRICULUM: {
 A1:[["A1-01","Begrüßen & sich vorstellen","merhaba, benim adım …, sen vs. siz"],["A1-02","Aussprache","ı, ç, ş, ğ, c, Betonung"],["A1-03","Vokalharmonie","e/a und i/ı/ü/u"],["A1-04","Ich bin …","Personalendungen: -ım, -sın …"],["A1-05","var & yok","haben und es gibt"],["A1-06","Präsens (-iyor)","geliyorum, konuşuyorum"],["A1-07","Ortsendungen","-de/-da, -den/-dan, -e/-a"],["A1-08","Zahlen & Uhrzeit","0–100, saat kaç?"],["A1-T","A1-Abschlusstest","Prüfung über alle A1-Themen"]],
 A2:[["A2-01","Vergangenheit (-di)","geldim, gittim"],["A2-02","Futur (-ecek)","geleceğim"],["A2-03","Besitzendungen","evim, evin, evi"],["A2-04","Akkusativ","kitabı okuyorum"],["A2-T","A2-Abschlusstest","Prüfung über alle A2-Themen"]],
 B1:[["B1-01","Aorist","gelirim, gelmem"],["B1-02","Können & Müssen","gelebilirim, gelmeliyim"],["B1-03","Vergangenheit (-miş)","gehört / berichtet"],["B1-T","B1-Abschlusstest","Prüfung über alle B1-Themen"]],
 B2:[["B2-01","Partizipien & Nebensätze","gelen adam, geldiğim zaman"],["B2-02","Bedingungssätze","gelirsem, gelseydim"],["B2-T","B2-Abschlusstest","Prüfung über alle B2-Themen"]],
 C1:[["C1-01","Stil & Register","formell und umgangssprachlich"],["C1-02","Komplexe Satzgefüge","Konverben, Nominalisierung"],["C1-T","C1-Abschlusstest","Prüfung über alle C1-Themen"]]
},
SCENARIOS: [["☕","Kafede","Bestelle einen Tee und etwas Süßes"],["🛒","Markette","Frag nach Produkten, Preisen und bezahle"],["📞","Telefonda","Reserviere einen Tisch im Restaurant"],["🍻","Arkadaşlarla","Verabrede dich für den Abend"],["👨‍👩‍👧","Ailede","Lerne die Familie eines Freundes kennen"],["🧭","Sokakta","Frag nach dem Weg zur Metro"],["💊","Eczanede","Beschreibe Beschwerden und kauf etwas"],["🏨","Otelde","Check-in und Fragen an der Rezeption"],["🏠","Komşuyla","Smalltalk mit dem Nachbarn"],["🎲","Serbest sohbet","Freies Gespräch auf deinem Niveau"]],
SCEN_DE: ["Im Café","Im Supermarkt","Am Telefon","Mit Freunden","Mit der Familie","Auf der Straße","In der Apotheke","Im Hotel","Mit dem Nachbarn","Freies Gespräch"],
STARTER_VOCAB: [["merhaba","hallo"],["günaydın","guten Morgen"],["iyi akşamlar","guten Abend"],["benim adım …","mein Name ist …"],["nasılsın?","wie geht's dir?"],["teşekkür ederim","danke"],["lütfen","bitte"],["özür dilerim","Entschuldigung"],["evet","ja"],["hayır","nein"],["görüşürüz","bis dann"]],
INITIAL_CHAT: [{role:"assistant", content:"Merhaba! Hier lernst du Türkisch 🇹🇷\n\nFang einfach mit der ersten Lektion im Lernpfad an."}],
THEMES: [
 {id:"gruss",e:"👋",name:"Begrüßung & Höflichkeit",level:"A1",w:`merhaba|hallo
selam|hallo (locker)
günaydın|guten Morgen
iyi günler|guten Tag / schönen Tag
iyi akşamlar|guten Abend
iyi geceler|gute Nacht
hoşça kal|tschüss (sagt, wer geht)
güle güle|tschüss (sagt, wer bleibt)
görüşürüz|bis dann
yarın görüşürüz|bis morgen
nasılsın?|wie geht's dir?
nasılsınız?|wie geht es Ihnen?
iyiyim|mir geht's gut
teşekkür ederim|danke
teşekkürler|danke (etwas lockerer)
rica ederim|gern geschehen
lütfen|bitte
özür dilerim|Entschuldigung
pardon|Verzeihung
memnun oldum|freut mich
hoş geldiniz|willkommen`},
 {id:"ichdu",e:"🙋",name:"Personen & Vorstellen",level:"A1",w:`ben|ich
sen|du
o|er / sie / es
biz|wir
siz|ihr / Sie
onlar|sie (Plural)
benim adım|mein Name ist
ad|der Name
soyadı|der Nachname
bey|Herr (nach dem Vornamen)
hanım|Frau (nach dem Vornamen)
Alman|der Deutsche / deutsch
Türk|der Türke / türkisch
Almanya|Deutschland
Türkiye|die Türkei
Almanca|Deutsch (Sprache)
Türkçe|Türkisch (Sprache)`},
 {id:"fragen",e:"❓",name:"Fragewörter",level:"A1",w:`ne?|was?
kim?|wer?
nerede?|wo?
nereye?|wohin?
nereden?|woher?
ne zaman?|wann?
nasıl?|wie?
ne kadar?|wie viel?
kaç?|wie viele?
neden?|warum?
çünkü|weil
hangi?|welcher / welche / welches?`},
 {id:"zahlen",e:"🔢",name:"Zahlen",level:"A1",w:`sıfır|null
bir|eins
iki|zwei
üç|drei
dört|vier
beş|fünf
altı|sechs
yedi|sieben
sekiz|acht
dokuz|neun
on|zehn
on bir|elf
on iki|zwölf
on üç|dreizehn
on dört|vierzehn
on beş|fünfzehn
yirmi|zwanzig
yirmi bir|einundzwanzig
otuz|dreißig
kırk|vierzig
elli|fünfzig
altmış|sechzig
yetmiş|siebzig
seksen|achtzig
doksan|neunzig
yüz|hundert
bin|tausend
lira|die Lira`},
 {id:"verben",e:"⚙️",name:"Erste Verben",level:"A1",w:`olmak|sein / werden
gelmek|kommen
gitmek|gehen / fahren
yapmak|machen
konuşmak|sprechen
çalışmak|arbeiten
yaşamak|leben / wohnen
istemek|wollen
bilmek|wissen / können
görmek|sehen
yemek|essen
içmek|trinken
anlamak|verstehen
okumak|lesen
almak|nehmen / kaufen
sevmek|lieben / mögen`},
 {id:"alltag",e:"☀️",name:"Erste Alltagswörter",level:"A1",w:`evet|ja
hayır|nein
tabii|natürlich
tamam|okay / in Ordnung
de|auch (nach dem Wort, auch „da“)
hiçbir şey|nichts
asla|nie
bugün|heute
yarın|morgen
dün|gestern
burada|hier
orada|dort
çok|viel / sehr
biraz|ein bisschen
iyi|gut
kahve|der Kaffee
çay|der Tee
su|das Wasser
bira|das Bier
ekmek|das Brot
ev|das Haus
sokak|die Straße
tuvalet|die Toilette
istasyon|der Bahnhof
erkek kardeş|der Bruder
kız kardeş|die Schwester
arkadaş|der Freund / die Freundin`}
],
PATH_SECTIONS: [
 {id:"s1", title:"Erste Schritte", pt:"İlk adımlar", level:"A1", color:"#2F6BFF", units:[
  {id:"u1", e:"👋", title:"Begrüßungen", pt:"Merhaba!", desc:"Hallo sagen, danke und bitte.",
   words:`merhaba|hallo
günaydın|guten Morgen
iyi akşamlar|guten Abend
iyi geceler|gute Nacht
hoşça kal|tschüss (sagt, wer geht)
güle güle|tschüss (sagt, wer bleibt)
görüşürüz|bis dann
teşekkür ederim|danke
lütfen|bitte
rica ederim|gern geschehen`,
   sents:`Merhaba, nasılsın?|Hallo, wie geht's dir?|Begrüßung|
Günaydın!|Guten Morgen!|Begrüßung|
Teşekkürler, iyiyim.|Danke, mir geht's gut.|Begrüßung|„teşekkürler“ ist etwas lockerer als „teşekkür ederim“.
Size iyi akşamlar!|Ihnen einen schönen Abend!|Begrüßung|„size“ = Ihnen / euch.
Hoşça kal! – Güle güle!|Tschüss! – Tschüss!|Begrüßung|Wer geht, sagt „hoşça kal“; wer bleibt, antwortet „güle güle“.
Bir çay, lütfen.|Einen Tee, bitte.|Höflichkeit|Tee (çay) trinkt man in der Türkei den ganzen Tag.`},
  {id:"u2", e:"🙋", title:"Sich vorstellen", pt:"Benim adım…", desc:"Name, Herkunft und Wohnort.",
   words:`benim adım|mein Name ist
ben|ich
adın ne?|wie heißt du?
nerelisin?|woher kommst du?
Almanyalıyım|ich komme aus Deutschland
yaşamak|leben / wohnen
memnun oldum|freut mich
ad|der Name
Alman|der Deutsche / deutsch
Türk|der Türke / türkisch`,
   sents:`Benim adım Daniel.|Mein Name ist Daniel.|Endungen|„ad“ (Name) + „-ım“ = adım (mein Name).
Adın ne?|Wie heißt du?|Fragen|Wörtlich: „Dein Name was?“
Ben Almanım.|Ich bin Deutscher.|Endungen|Die Endung „-ım“ heißt hier „ich bin“: Alman + ım.
Almanyalıyım.|Ich komme aus Deutschland.|Endungen|Almanya + lı (aus) + yım (ich bin).
Berlin'de yaşıyorum.|Ich wohne in Berlin.|Endungen|„-de/-da“ heißt „in“. Bei Eigennamen trennt man die Endung mit Apostroph ab.
Memnun oldum!|Freut mich!|Begrüßung|
Nerelisin?|Woher kommst du?|Fragen|`,
   story:{title:"Im Sprachkurs", lines:`Elif|Merhaba! Adın ne?|Hallo! Wie heißt du?
Daniel|Benim adım Daniel. Ya senin?|Mein Name ist Daniel. Und deiner?
Elif|Benim adım Elif. Nerelisin?|Ich heiße Elif. Woher kommst du?
Daniel|Almanyalıyım ama İstanbul'da yaşıyorum.|Ich komme aus Deutschland, aber ich wohne in Istanbul.
Elif|Memnun oldum, Daniel!|Freut mich, Daniel!`, qs:`Woher kommt Daniel?|Aus Deutschland|Aus Istanbul|Aus den Niederlanden
Wo wohnt Daniel?|In Istanbul|In Berlin|In Izmir
Was sagt Elif am Ende?|Freut mich|Bis morgen|Danke schön`}},
  {id:"u3", e:"✅", title:"Ja und Nein", pt:"Evet mi hayır mı", desc:"Zustimmen, ablehnen, verneinen.",
   words:`evet|ja
hayır|nein
tabii|natürlich
tamam|okay / in Ordnung
ben de|ich auch
hiç|gar nicht / überhaupt
hiçbir şey|nichts
asla|nie
bilmiyorum|ich weiß nicht
anlaştık|abgemacht`,
   sents:`Evet, tabii.|Ja, natürlich.|Zustimmung|
Hayır, teşekkürler.|Nein, danke.|Verneinung|
Bilmiyorum.|Ich weiß nicht.|Verneinung|Die Verneinung steckt im Verb: bil-mi-yorum.
Tamam, anlaştık.|Okay, abgemacht.|Zustimmung|
Hiçbir şey istemiyorum.|Ich will nichts.|Verneinung|„hiçbir şey“ steht mit einem verneinten Verb.
Ben de.|Ich auch.|Zustimmung|
Ben de istemiyorum.|Ich will auch nicht.|Verneinung|`},
  {id:"u4", e:"❓", title:"Grundlegende Fragen", pt:"Sorular", desc:"Wer, was, wo, wann und wie viel?",
   words:`ne?|was?
kim?|wer?
nerede?|wo?
ne zaman?|wann?
nasıl?|wie?
ne kadar?|wie viel?
neden?|warum?
çünkü|weil
hangi?|welcher / welche / welches?
nereden?|woher?`,
   sents:`Bu ne?|Was ist das?|Fragen|
Tuvalet nerede?|Wo ist die Toilette?|Fragen|Das Fragewort steht meist am Ende oder direkt vor dem Verb.
Bu ne kadar?|Wie viel kostet das?|Fragen|
Bu kim?|Wer ist das?|Fragen|
Neden gelmiyorsun?|Warum kommst du nicht?|Fragen|
Çünkü yorgunum.|Weil ich müde bin.|Endungen|yorgun (müde) + um (ich bin).
Ders ne zaman başlıyor?|Wann beginnt der Unterricht?|Fragen|`},
  {id:"u5", e:"🔢", title:"Zahlen", pt:"Sayılar", desc:"Von eins bis hundert, Alter und Preise.",
   words:`bir|eins
iki|zwei
üç|drei
dört|vier
beş|fünf
on|zehn
yirmi|zwanzig
yüz|hundert
lira|die Lira
kaç yaşındasın?|wie alt bist du?`,
   sents:`Yirmi yaşındayım.|Ich bin zwanzig Jahre alt.|Endungen|yaş (Alter) + ında + yım (ich bin).
Kaç yaşındasın?|Wie alt bist du?|Fragen|
Beş lira.|Fünf Lira.|Zahlen|
Bir, iki, üç, dört.|Eins, zwei, drei, vier.|Zahlen|
Benim iki erkek kardeşim var.|Ich habe zwei Brüder.|var/yok|„Haben“ sagt man mit „var“ (es gibt).
Yüz lira çok para.|Hundert Lira sind viel Geld.|Zahlen|Nach Zahlen bleibt das Substantiv im Singular: iki kardeş, yüz lira.`},
  {id:"u6", e:"🧱", title:"Einfache Sätze", pt:"Basit cümleler", desc:"Ich, du, er, sie – die ersten Verben.",
   words:`ben|ich
sen|du
o|er / sie / es
biz|wir
siz|ihr / Sie
onlar|sie (Plural)
konuşmak|sprechen
çalışmak|arbeiten
anlamak|verstehen
okumak|lesen`,
   sents:`Almanca konuşuyorum.|Ich spreche Deutsch.|Präsens|Das Pronomen lässt man meist weg – die Endung zeigt die Person.
Türkçe konuşuyor musun?|Sprichst du Türkisch?|Fragen|Die Fragepartikel „mi“ schreibt man getrennt und passt sie an: musun.
Ankara'da çalışıyor.|Er / Sie arbeitet in Ankara.|Präsens|„o“ unterscheidet nicht zwischen er und sie.
Biz Berlin'de yaşıyoruz.|Wir wohnen in Berlin.|Präsens|
Siz İngilizce biliyor musunuz?|Können Sie Englisch?|Anrede|„siz“ ist „ihr“ und höflich „Sie“.
Bugün çalışmıyor.|Er / Sie arbeitet heute nicht.|Verneinung|Verneinung: çalış-mı-yor.
Anlamıyorum.|Ich verstehe nicht.|Verneinung|`}
 ]}
],
DIALOGS: `1|Merhaba, nasılsın?|Hallo, wie geht's dir?|Teşekkürler, iyiyim. Sen nasılsın?|Üç lira.|Berlin'de yaşıyorum.
1|Yardımın için teşekkürler!|Danke für deine Hilfe!|Rica ederim!|Bilmiyorum.|Bu ne kadar?
2|Adın ne?|Wie heißt du?|Benim adım Daniel.|Yirmi yaşındayım.|Görüşürüz!
2|Nerelisin?|Woher kommst du?|Almanyalıyım.|Benim adım Elif.|Saat sekizde.
3|Çay ister misin?|Möchtest du einen Tee?|Evet, lütfen.|Almanyalıyım.|Benim iki kardeşim var.
4|Tuvalet nerede?|Wo ist die Toilette?|Orada, sağda.|Beş lira.|Benim adım Daniel.
5|Kaç yaşındasın?|Wie alt bist du?|Otuz yaşındayım.|Ankara'da yaşıyorum.|Teşekkürler, iyiyim.
5|Ekmek ne kadar?|Wie viel kostet das Brot?|On lira.|Yarın görüşürüz.|Ben Almanım.
6|Türkçe konuşuyor musun?|Sprichst du Türkisch?|Evet, biraz.|Yirmi yaşındayım.|Rica ederim.`,
SENTENCES: `A1|Benim adım Daniel, Almanyalıyım.|Mein Name ist Daniel, ich komme aus Deutschland.
A1|İki yıldır İstanbul'da yaşıyorum.|Ich wohne seit zwei Jahren in Istanbul.
A1|Bir kahve alabilir miyim?|Kann ich einen Kaffee haben?
A1|Hesap lütfen.|Die Rechnung, bitte.
A1|Otobüs durağı nerede?|Wo ist die Bushaltestelle?
A1|Bugün hava çok sıcak.|Heute ist es sehr heiß.
A1|Acıktım.|Ich habe Hunger.
A1|Türkçem çok iyi değil.|Mein Türkisch ist nicht sehr gut.
A1|Tekrar eder misiniz, lütfen?|Können Sie das bitte wiederholen?
A1|Kız kardeşim hastanede çalışıyor.|Meine Schwester arbeitet in einem Krankenhaus.`,
PERSONS: ["ben","sen","o","biz","siz","onlar"],
TENSES: [
  ["pres","Präsens (-iyor)","Was jetzt passiert oder fest geplant ist: **geliyorum** = ich komme (gerade)."],
  ["past","Vergangenheit (-di)","Selbst erlebte, abgeschlossene Vergangenheit: **geldim** = ich bin gekommen / kam."],
  ["fut","Futur (-ecek)","Zukunft: **geleceğim** = ich werde kommen."],
  ["aor","Aorist","Gewohnheiten, allgemeine Aussagen, Angebote: **gelirim** = ich komme (gewöhnlich)."]
],
VERBS: {
  gelmek:   ["kommen", "geliyorum,geliyorsun,geliyor,geliyoruz,geliyorsunuz,geliyorlar", "geldim,geldin,geldi,geldik,geldiniz,geldiler", "geleceğim,geleceksin,gelecek,geleceğiz,geleceksiniz,gelecekler", "gelirim,gelirsin,gelir,geliriz,gelirsiniz,gelirler"],
  gitmek:   ["gehen / fahren", "gidiyorum,gidiyorsun,gidiyor,gidiyoruz,gidiyorsunuz,gidiyorlar", "gittim,gittin,gitti,gittik,gittiniz,gittiler", "gideceğim,gideceksin,gidecek,gideceğiz,gideceksiniz,gidecekler", "giderim,gidersin,gider,gideriz,gidersiniz,giderler"],
  yapmak:   ["machen", "yapıyorum,yapıyorsun,yapıyor,yapıyoruz,yapıyorsunuz,yapıyorlar", "yaptım,yaptın,yaptı,yaptık,yaptınız,yaptılar", "yapacağım,yapacaksın,yapacak,yapacağız,yapacaksınız,yapacaklar", "yaparım,yaparsın,yapar,yaparız,yaparsınız,yaparlar"],
  "konuşmak":["sprechen", "konuşuyorum,konuşuyorsun,konuşuyor,konuşuyoruz,konuşuyorsunuz,konuşuyorlar", "konuştum,konuştun,konuştu,konuştuk,konuştunuz,konuştular", "konuşacağım,konuşacaksın,konuşacak,konuşacağız,konuşacaksınız,konuşacaklar", "konuşurum,konuşursun,konuşur,konuşuruz,konuşursunuz,konuşurlar"],
  "çalışmak":["arbeiten", "çalışıyorum,çalışıyorsun,çalışıyor,çalışıyoruz,çalışıyorsunuz,çalışıyorlar", "çalıştım,çalıştın,çalıştı,çalıştık,çalıştınız,çalıştılar", "çalışacağım,çalışacaksın,çalışacak,çalışacağız,çalışacaksınız,çalışacaklar", "çalışırım,çalışırsın,çalışır,çalışırız,çalışırsınız,çalışırlar"],
  istemek:  ["wollen", "istiyorum,istiyorsun,istiyor,istiyoruz,istiyorsunuz,istiyorlar", "istedim,istedin,istedi,istedik,istediniz,istediler", "isteyeceğim,isteyeceksin,isteyecek,isteyeceğiz,isteyeceksiniz,isteyecekler", "isterim,istersin,ister,isteriz,istersiniz,isterler"],
  bilmek:   ["wissen", "biliyorum,biliyorsun,biliyor,biliyoruz,biliyorsunuz,biliyorlar", "bildim,bildin,bildi,bildik,bildiniz,bildiler", "bileceğim,bileceksin,bilecek,bileceğiz,bileceksiniz,bilecekler", "bilirim,bilirsin,bilir,biliriz,bilirsiniz,bilirler"],
  "görmek": ["sehen", "görüyorum,görüyorsun,görüyor,görüyoruz,görüyorsunuz,görüyorlar", "gördüm,gördün,gördü,gördük,gördünüz,gördüler", "göreceğim,göreceksin,görecek,göreceğiz,göreceksiniz,görecekler", "görürüm,görürsün,görür,görürüz,görürsünüz,görürler"],
  yemek:    ["essen", "yiyorum,yiyorsun,yiyor,yiyoruz,yiyorsunuz,yiyorlar", "yedim,yedin,yedi,yedik,yediniz,yediler", "yiyeceğim,yiyeceksin,yiyecek,yiyeceğiz,yiyeceksiniz,yiyecekler", "yerim,yersin,yer,yeriz,yersiniz,yerler"],
  "içmek":  ["trinken", "içiyorum,içiyorsun,içiyor,içiyoruz,içiyorsunuz,içiyorlar", "içtim,içtin,içti,içtik,içtiniz,içtiler", "içeceğim,içeceksin,içecek,içeceğiz,içeceksiniz,içecekler", "içerim,içersin,içer,içeriz,içersiniz,içerler"],
  anlamak:  ["verstehen", "anlıyorum,anlıyorsun,anlıyor,anlıyoruz,anlıyorsunuz,anlıyorlar", "anladım,anladın,anladı,anladık,anladınız,anladılar", "anlayacağım,anlayacaksın,anlayacak,anlayacağız,anlayacaksınız,anlayacaklar", "anlarım,anlarsın,anlar,anlarız,anlarsınız,anlarlar"],
  okumak:   ["lesen", "okuyorum,okuyorsun,okuyor,okuyoruz,okuyorsunuz,okuyorlar", "okudum,okudun,okudu,okuduk,okudunuz,okudular", "okuyacağım,okuyacaksın,okuyacak,okuyacağız,okuyacaksınız,okuyacaklar", "okurum,okursun,okur,okuruz,okursunuz,okurlar"],
  almak:    ["nehmen / kaufen", "alıyorum,alıyorsun,alıyor,alıyoruz,alıyorsunuz,alıyorlar", "aldım,aldın,aldı,aldık,aldınız,aldılar", "alacağım,alacaksın,alacak,alacağız,alacaksınız,alacaklar", "alırım,alırsın,alır,alırız,alırsınız,alırlar"]
},
VERB_NOTES: {
  gitmek: "Vor einem Vokal wird **t** zu **d**: **gidiyorum**, **gideceğim** – aber **gittim**.",
  yemek: "Im Präsens und Futur wird **e** zu **i**: **yiyorum**, **yiyeceğim**.",
  bilmek: "Der Aorist ist unregelmäßig: **bilirim** (nicht „bilerim“). Ebenso **gelirim**, **alırım**.",
  "görmek": "Vierfache Vokalharmonie: nach **ö** wird die Endung **ü**: **görüyorum**, **gördüm**."
},
CHEATS: [
 ["Aussprache", `- Türkisch spricht man fast so, wie man es schreibt.
- **ı** (ohne Punkt) ist ein dumpfes „i“, ähnlich dem „e“ in „bitte“: **kız**.
- **c** klingt wie „dsch“: **cami**. **ç** wie „tsch“: **çay**.
- **ş** wie „sch“: **şeker**.
- **ğ** spricht man nicht, es dehnt den Vokal davor: **dağ**.
- **y** wie deutsches „j“: **yok**. **z** ist stimmhaft wie in „Rose“. **v** fast wie „w“.
- **ö** und **ü** wie im Deutschen.
- Betont wird meist die letzte Silbe: **merhaba**, **kitap**.`],
 ["Vokalharmonie", `Endungen passen ihre Vokale an das Wort an:
- Zweifach (**e/a**): nach e, i, ö, ü → **e**; nach a, ı, o, u → **a**: **evler** (Häuser), **kitaplar** (Bücher).
- Vierfach (**i/ı/ü/u**): nach e, i → **i**; a, ı → **ı**; ö, ü → **ü**; o, u → **u**: **evim**, **adım**, **gözüm**, **okulum**.
- Deshalb: **Berlin'de**, aber **Ankara'da** – **gelmiyorum**, aber **anlamıyorum**.`],
 ["Endungen statt Präpositionen", `Wo im Deutschen eine Präposition steht, hängt das Türkische eine Endung an:
- **-de/-da** (in, an, bei): **evde** (zu Hause), **İstanbul'da** (in Istanbul)
- **-den/-dan** (aus, von): **Almanya'dan** (aus Deutschland)
- **-e/-a** (nach, zu): **eve** (nach Hause), **okula** (zur Schule)
- Nach stimmlosen Konsonanten wird **d** zu **t**: **kitapta**, **sokakta**.
- Bei Eigennamen trennt man die Endung mit Apostroph ab.`],
 ["Satzbau", `- Das Verb steht am Ende: **Ben çay içiyorum.** (Ich Tee trinke.)
- Personalpronomen lässt man meist weg – die Endung zeigt die Person: **İçiyorum.** (Ich trinke.)
- Ja/Nein-Fragen bildet man mit **mi/mı/mü/mu** (getrennt geschrieben): **Çay istiyor musun?**
- Es gibt kein grammatisches Geschlecht und keinen bestimmten Artikel. **bir** heißt „ein“.`],
 ["haben: var und yok", `- „Haben“ sagt man mit **var** (es gibt) und Besitzendung: **Arabam var.** (Ich habe ein Auto – wörtlich: Mein Auto gibt es.)
- Nicht haben: **yok**: **Zamanım yok.** (Ich habe keine Zeit.)
- Ohne Besitzendung: **Burada bir kafe var.** (Hier gibt es ein Café.)`],
 ["Du & Sie", `- **sen** (du): Freunde, Familie, Kinder.
- **siz** (Sie / ihr): Fremde, ältere Menschen, formelle Situationen.
- Höfliche Anrede mit Vornamen: **Ayşe Hanım** (Frau Ayşe), **Mehmet Bey** (Herr Mehmet).`]
]
};
