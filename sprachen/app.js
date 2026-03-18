// =============================================
// LESSON CONTENT — alle 35 Lektionen komplett
// =============================================

const LESSON_CONTENT = {
  'Die türkischen Sonderbuchstaben': {
    lernziel: 'Du kannst die 6 Sonderbuchstaben erkennen und grundlegend aussprechen.',
    woerter: [
      { tr: 'ç', de: '"tsch"',         extra: 'çay = Tee',          audio: 'audio/cay.mp3' },
      { tr: 'ş', de: '"sch"',           extra: 'şeker = Zucker',     audio: 'audio/seker.mp3' },
      { tr: 'ğ', de: 'dehnt den Vokal', extra: 'dağ = Berg',         audio: 'audio/dag.mp3' },
      { tr: 'ü', de: 'wie dt. "ü"',     extra: 'üç = drei',          audio: 'audio/uc.mp3' },
      { tr: 'ö', de: 'wie dt. "ö"',     extra: 'söyle = sag',        audio: 'audio/soyle.mp3' },
      { tr: 'ı', de: 'dunkles "i"',     extra: 'ısı = Wärme',        audio: 'audio/isi.mp3' },
      { tr: 'çay', de: 'Tee',           extra: 'ç wie "tsch"',       audio: 'audio/cay.mp3' },
      { tr: 'şehir', de: 'Stadt',        extra: 'ş wie "sch"',        audio: 'audio/sehir.mp3' },
      { tr: 'dağ', de: 'Berg',           extra: 'ğ dehnt a',          audio: 'audio/dag.mp3' },
      { tr: 'güzel', de: 'schön',        extra: 'ü wie dt. ü',        audio: 'audio/guzel.mp3' },
      { tr: 'öğrenci', de: 'Schüler/in', extra: 'ö + ğ zusammen',    audio: 'audio/ogrenci.mp3' },
      { tr: 'kız', de: 'Mädchen',        extra: 'ı = dunkles i',     audio: 'audio/kiz.mp3' },
      { tr: 'lütfen', de: 'bitte',       extra: 'ü wie dt. ü',       audio: 'audio/lutfen.mp3' },
      { tr: 'değil', de: 'nicht',        extra: 'ğ dehnt e',         audio: 'audio/degil.mp3' },
    ],
    erklaerung: 'Türkisch schreibt man wie man spricht — das ist ein großer Vorteil! Die 6 Sonderbuchstaben (ç ş ğ ü ö ı) klingen anders als ihre lateinischen Entsprechungen. Das "ğ" ist fast stumm und dehnt nur den vorherigen Vokal. Sobald du diese 6 Buchstaben kennst, kannst du jeden türkischen Text laut vorlesen.',
    grammatiktipp: 'Türkisches Alphabet = lateinisches Alphabet + 6 Sonderbuchstaben. Keine Ausnahmen: jeder Buchstabe hat genau einen Laut.',
    beispiele: [
      { tr: 'Bir çay lütfen.',    de: 'Einen Tee bitte.',      audio: 'audio/bir_cay_lutfen.mp3' },
      { tr: 'Şeker var mı?',      de: 'Gibt es Zucker?',       audio: 'audio/seker_var_mi.mp3' },
      { tr: 'Üç tane lütfen.',    de: 'Drei Stück bitte.',     audio: 'audio/uc_tane_lutfen.mp3' },
      { tr: 'Güzel!',             de: 'Schön / Super!',        audio: 'audio/guzel_sentence.mp3' },
      { tr: 'Bu dağ çok büyük.',  de: 'Dieser Berg ist sehr groß.', audio: 'audio/bu_dag_cok_buyuk.mp3' },
      { tr: 'Öğrenci misin?',     de: 'Bist du Schüler/in?',   audio: 'audio/ogrenci_misin.mp3' },
      { tr: 'Değil, öğretmenim.', de: 'Nein, ich bin Lehrer/in.', audio: 'audio/degil_ogretmenim.mp3' },
      { tr: 'Şehir çok güzel!',   de: 'Die Stadt ist sehr schön!', audio: 'audio/sehir_cok_guzel.mp3' },
    ],
    nachsprech: [
      { tr: 'çay',     audio: 'audio/cay.mp3' },
      { tr: 'şeker',   audio: 'audio/seker.mp3' },
      { tr: 'güzel',   audio: 'audio/guzel.mp3' },
      { tr: 'lütfen',  audio: 'audio/lutfen.mp3' },
      { tr: 'değil',   audio: 'audio/degil.mp3' },
      { tr: 'öğrenci', audio: 'audio/ogrenci.mp3' },
      { tr: 'dağ',     audio: 'audio/dag.mp3' },
      { tr: 'kız',     audio: 'audio/kiz.mp3' },
    ],
    hoerUebung: 'Höre 6 Wörter — welchen Sonderbuchstaben hörst du? (ç / ş / ğ / ü / ö / ı)',
    miniDialog: [
      { sprecher: 'A', tr: 'Bir çay lütfen.', de: 'Einen Tee bitte.' },
      { sprecher: 'B', tr: 'Şekerli mi?', de: 'Mit Zucker?' },
      { sprecher: 'A', tr: 'Evet, lütfen.', de: 'Ja, bitte.' },
      { sprecher: 'B', tr: 'Güzel bir gün, değil mi?', de: 'Schöner Tag, nicht wahr?' },
      { sprecher: 'A', tr: 'Evet, çok güzel!', de: 'Ja, sehr schön!' },
      { sprecher: 'B', tr: 'Teşekkür ederim.', de: 'Danke schön.' },
      { sprecher: 'A', tr: 'Rica ederim.', de: 'Gern geschehen.' },
      { sprecher: 'B', tr: 'Güle güle!', de: 'Tschüss!' },
    ],
    anwendung: 'Lies laut vor: "Bir çay lütfen." — Dann: "Şekerli lütfen." — Und: "Teşekkür ederim." — Und schließlich: "Güzel şehir!"',
    zusammenfassung: '6 Sonderbuchstaben gelernt. Türkisch spricht man so wie man schreibt — das macht es einfacher!',
    kulturhinweis: 'Çay (Tee) ist das türkische Nationalgetränk. Er wird in kleinen Tulpengläsern serviert und fast überall angeboten — in Geschäften, bei Behörden, bei Freunden.',
  },

  'Vokale & Vokalharmonie': {
    lernziel: 'Du kennst die 8 türkischen Vokale und verstehst das Grundprinzip der Vokalharmonie.',
    woerter: [
      { tr: 'ada',     de: 'Insel',      extra: 'Vokal: a — hinterer Vokal',  audio: 'audio/ada.mp3' },
      { tr: 'ev',      de: 'Haus',       extra: 'Vokal: e — vorderer Vokal',  audio: 'audio/ev.mp3' },
      { tr: 'ışık',    de: 'Licht',      extra: 'Vokal: ı — hinterer Vokal',  audio: 'audio/isik.mp3' },
      { tr: 'ip',      de: 'Seil',       extra: 'Vokal: i — vorderer Vokal',  audio: 'audio/ip.mp3' },
      { tr: 'okul',    de: 'Schule',     extra: 'Vokal: o — hinterer Vokal',  audio: 'audio/okul.mp3' },
      { tr: 'öğrenci', de: 'Schüler/in', extra: 'Vokal: ö — vorderer Vokal',  audio: 'audio/ogrenci.mp3' },
      { tr: 'uçak',    de: 'Flugzeug',   extra: 'Vokal: u — hinterer Vokal',  audio: 'audio/ucak.mp3' },
      { tr: 'üzüm',    de: 'Traube',     extra: 'Vokal: ü — vorderer Vokal',  audio: 'audio/uzum.mp3' },
      { tr: 'araba',   de: 'Auto',        extra: 'a...a: beide hinten',        audio: 'audio/araba.mp3' },
      { tr: 'telefon', de: 'Telefon',     extra: 'e...o: Lehnwort, Ausnahme',  audio: 'audio/telefon.mp3' },
      { tr: 'kitap',   de: 'Buch',        extra: 'i...a: Lehnwort',           audio: 'audio/kitap.mp3' },
      { tr: 'gelmek',  de: 'kommen',      extra: 'e...e: beide vorne',        audio: 'audio/gelmek.mp3' },
      { tr: 'gitmek',  de: 'gehen',       extra: 'i...e: beide vorne',        audio: 'audio/gitmek.mp3' },
      { tr: 'sormak',  de: 'fragen',      extra: 'o...a: beide hinten',       audio: 'audio/sormak.mp3' },
    ],
    erklaerung: 'Türkisch hat 8 Vokale: a – e – ı – i – o – ö – u – ü. Die wichtigste Grammatikregel heißt Vokalharmonie (ünlü uyumu): Vokale in einem Wort passen zusammen. Hintere Vokale (a, ı, o, u) bleiben unter sich — vordere Vokale (e, i, ö, ü) ebenfalls. Endungen passen sich automatisch an: "evde" (zu Hause) aber "okulda" (in der Schule). Lehnwörter wie "telefon" folgen dieser Regel oft nicht.',
    grammatiktipp: 'Die zwei Vokalgruppen: HINTEN = a ı o u | VORNE = e i ö ü. Merke: Wenn das letzte Vokal im Wortstamm hinten ist, folgt die Endung mit a/ı; wenn vorne, folgt e/i.',
    saatzbausteine: [
      'Bu bir [Nomen]. → Das ist ein/e ...',
      '[Nomen] var. → Es gibt ... / Ich habe ...',
      '[Nomen] yok. → Es gibt kein ... / Ich habe kein ...',
    ],
    beispiele: [
      { tr: 'Bu bir ev.',      de: 'Das ist ein Haus.',      audio: 'audio/bu_bir_ev.mp3' },
      { tr: 'Bu bir okul.',    de: 'Das ist eine Schule.',   audio: 'audio/bu_bir_okul.mp3' },
      { tr: 'Üzüm var mı?',    de: 'Gibt es Trauben?',      audio: 'audio/uzum_var_mi.mp3' },
      { tr: 'Uçak var.',       de: 'Es gibt ein Flugzeug.', audio: 'audio/ucak_var.mp3' },
      { tr: 'Kitap nerede?',   de: 'Wo ist das Buch?',      audio: 'audio/kitap_nerede.mp3' },
      { tr: 'Araba yok.',      de: 'Es gibt kein Auto.',    audio: 'audio/araba_yok.mp3' },
      { tr: 'Evde mi?',        de: 'Ist es zu Hause?',      audio: 'audio/evde_mi.mp3' },
      { tr: 'Okulda bir öğrenci.', de: 'Ein Schüler in der Schule.', audio: 'audio/okulda_bir_ogrenci.mp3' },
    ],
    nachsprech: [
      { tr: 'ada',     audio: 'audio/ada.mp3' },
      { tr: 'ev',      audio: 'audio/ev.mp3' },
      { tr: 'ışık',    audio: 'audio/isik.mp3' },
      { tr: 'okul',    audio: 'audio/okul.mp3' },
      { tr: 'öğrenci', audio: 'audio/ogrenci.mp3' },
      { tr: 'uçak',    audio: 'audio/ucak.mp3' },
      { tr: 'üzüm',    audio: 'audio/uzum.mp3' },
      { tr: 'araba',   audio: 'audio/araba.mp3' },
    ],
    hoerUebung: 'Höre 8 Wörter — welcher Vokal steckt als Hauptvokal darin? (a / e / ı / i / o / ö / u / ü)',
    miniDialog: [
      { sprecher: 'A', tr: 'Bu ne?',              de: 'Was ist das?' },
      { sprecher: 'B', tr: 'Bu bir okul.',         de: 'Das ist eine Schule.' },
      { sprecher: 'A', tr: 'Büyük mü?',            de: 'Ist sie groß?' },
      { sprecher: 'B', tr: 'Evet, çok büyük!',     de: 'Ja, sehr groß!' },
      { sprecher: 'A', tr: 'Öğrenci misin?',       de: 'Bist du Schüler?' },
      { sprecher: 'B', tr: 'Evet, öğrenciyim.',    de: 'Ja, ich bin Schüler.' },
      { sprecher: 'A', tr: 'Uçakla mı geldin?',    de: 'Bist du mit dem Flugzeug gekommen?' },
      { sprecher: 'B', tr: 'Hayır, arabayla.',      de: 'Nein, mit dem Auto.' },
    ],
    anwendung: 'Schau dich um — benenne 5 Dinge auf Türkisch und überlege: Welcher Vokaltyp dominiert das Wort (vorne oder hinten)?',
    zusammenfassung: '8 Vokale gelernt. Vokalharmonie = Vokale passen zusammen (hinten/vorne). Das ist die Geheimwaffe der türkischen Grammatik!',
    kulturhinweis: 'Die Vokalharmonie macht Türkisch sehr musikalisch. Türken hören sofort wenn ein Fremder sie verletzt — es klingt "falsch", wie eine falsche Musiknote.',
  },

  'Aussprache-Training': {
    lernziel: 'Du kannst alle 6 türkischen Sonderbuchstaben in echten Wörtern korrekt aussprechen.',
    woerter: [
      { tr: 'çikolata',  de: 'Schokolade',   extra: 'ç = tsch: "tschikolata"',   audio: 'audio/cikolata.mp3' },
      { tr: 'şehir',     de: 'Stadt',         extra: 'ş = sch: "schehir"',        audio: 'audio/sehir.mp3' },
      { tr: 'öğretmen',  de: 'Lehrer/in',     extra: 'ğ dehnt ö: "öö-retmen"',   audio: 'audio/ogretmen.mp3' },
      { tr: 'büyük',     de: 'groß',           extra: 'ü wie dt. ü',              audio: 'audio/buyuk.mp3' },
      { tr: 'küçük',     de: 'klein',          extra: 'ü + ç: "kütschiük"',       audio: 'audio/kucuk.mp3' },
      { tr: 'kız',       de: 'Mädchen',        extra: 'ı = dunkles i, kein Punkt', audio: 'audio/kiz.mp3' },
      { tr: 'ağaç',      de: 'Baum',           extra: 'ğ dehnt a, ç am Ende',     audio: 'audio/agac.mp3' },
      { tr: 'göz',       de: 'Auge',           extra: 'ö wie dt. ö',              audio: 'audio/goz.mp3' },
      { tr: 'şarkı',     de: 'Lied',           extra: 'ş + ı = "scharkı"',        audio: 'audio/sarki.mp3' },
      { tr: 'öğrenmek',  de: 'lernen',         extra: 'ö + ğ + e',               audio: 'audio/ogrenmek.mp3' },
      { tr: 'çalışmak',  de: 'arbeiten',       extra: 'ç + ş: zwei Sonderbuchst.', audio: 'audio/calismak.mp3' },
      { tr: 'düşünmek',  de: 'denken / nachdenken', extra: 'ü + ş',             audio: 'audio/dusunmek.mp3' },
      { tr: 'yavaş',     de: 'langsam',         extra: 'ş am Ende: "yavasch"',   audio: 'audio/yavas.mp3' },
      { tr: 'hızlı',     de: 'schnell',         extra: 'ı innen: "hısslı"',       audio: 'audio/hizli.mp3' },
    ],
    erklaerung: 'Wiederholung der 6 Sonderbuchstaben: ç (tsch) — ş (sch) — ğ (dehnt Vokal, kaum hörbar) — ü (wie dt. ü) — ö (wie dt. ö) — ı (dunkles i, kein Punkt!). Besonders das "ğ" verwirrt Anfänger: es macht den Vokal davor länger, klingt aber selbst kaum. "Dağ" klingt wie "daaa". Je öfter du hörst und nachmachst, desto natürlicher klingt es!',
    grammatiktipp: 'Merktrick für ı: Strecke die Lippen seitlich und sage ein dunkles "i" — wie bei "Hund" ohne das u zu runden. Das ergibt das türkische ı.',
    saatzbausteine: [
      'Büyük / Küçük → groß / klein',
      'Şehir merkezi → Stadtzentrum',
      'Öğretmen / Öğrenci → Lehrer/in / Schüler/in',
    ],
    beispiele: [
      { tr: 'Çikolata lütfen!',         de: 'Schokolade bitte!',            audio: 'audio/cikolata_lutfen.mp3' },
      { tr: 'Bu şehir büyük mü?',       de: 'Ist diese Stadt groß?',        audio: 'audio/bu_sehir_buyuk_mu.mp3' },
      { tr: 'O bir öğretmen.',           de: 'Er/Sie ist Lehrer/in.',        audio: 'audio/o_bir_ogretmen.mp3' },
      { tr: 'Küçük bir çay lütfen.',     de: 'Einen kleinen Tee bitte.',     audio: 'audio/kucuk_bir_cay.mp3' },
      { tr: 'Yavaş konuşun lütfen.',     de: 'Bitte sprechen Sie langsam.',  audio: 'audio/yavas_konusun.mp3' },
      { tr: 'Türkçe öğreniyorum.',       de: 'Ich lerne Türkisch.',          audio: 'audio/turkce_ogreniyorum.mp3' },
      { tr: 'Çok şükür!',               de: 'Gott sei Dank!',               audio: 'audio/cok_sukur.mp3' },
      { tr: 'Güzel bir şarkı.',          de: 'Ein schönes Lied.',            audio: 'audio/guzel_bir_sarki.mp3' },
    ],
    nachsprech: [
      { tr: 'çikolata',  audio: 'audio/cikolata.mp3' },
      { tr: 'şehir',     audio: 'audio/sehir.mp3' },
      { tr: 'öğretmen',  audio: 'audio/ogretmen.mp3' },
      { tr: 'büyük',     audio: 'audio/buyuk.mp3' },
      { tr: 'küçük',     audio: 'audio/kucuk.mp3' },
      { tr: 'kız',       audio: 'audio/kiz.mp3' },
      { tr: 'yavaş',     audio: 'audio/yavas.mp3' },
      { tr: 'hızlı',     audio: 'audio/hizli.mp3' },
    ],
    hoerUebung: 'Höre 6 Wörter — welcher Sonderbuchstabe steckt darin? Schreibe ihn auf.',
    miniDialog: [
      { sprecher: 'A', tr: 'Adınız ne?',               de: 'Wie heißen Sie?' },
      { sprecher: 'B', tr: 'Öğretmen Şule.',            de: 'Lehrerin Şule.' },
      { sprecher: 'A', tr: 'Büyük şehirden misiniz?',   de: 'Kommen Sie aus einer großen Stadt?' },
      { sprecher: 'B', tr: 'Evet, İstanbul\'dan.',       de: 'Ja, aus Istanbul.' },
      { sprecher: 'A', tr: 'Türkçeyi çok güzel konuşuyorsunuz.', de: 'Sie sprechen sehr schönes Türkisch.' },
      { sprecher: 'B', tr: 'Teşekkür ederim, çok çalıştım.', de: 'Danke, ich habe viel gearbeitet.' },
      { sprecher: 'A', tr: 'Öğrencileriniz şanslı.', de: 'Ihre Schüler sind glücklich.' },
      { sprecher: 'B', tr: 'Sağ olun!', de: 'Vielen Dank!' },
    ],
    anwendung: 'Hör dir die 8 Nachsprech-Wörter noch einmal an und sprich nach — dreimal jedes Wort. Dann schreibe sie aus dem Gedächtnis auf.',
    zusammenfassung: '6 Sonderbuchstaben geübt. Regelmäßiges Hören + Nachsprechen ist der Schlüssel. Du machst Fortschritte!',
  },

  'Hallo & Tschüss': {
    lernziel: 'Du kannst jemanden begrüßen und dich verabschieden.',
    woerter: [
      { tr: 'Merhaba',        de: 'Hallo',                  extra: 'immer passend, neutral',          audio: 'audio/merhaba.mp3' },
      { tr: 'Günaydın',       de: 'Guten Morgen',           extra: 'bis ca. 11 Uhr',                  audio: 'audio/gunaydin.mp3' },
      { tr: 'İyi günler',     de: 'Guten Tag',               extra: 'tagsüber als Abschied',          audio: 'audio/iyi_gunler.mp3' },
      { tr: 'İyi akşamlar',   de: 'Guten Abend',             extra: 'abends',                         audio: 'audio/iyi_aksamlar.mp3' },
      { tr: 'İyi geceler',    de: 'Gute Nacht',              extra: 'beim Schlafengehen',              audio: 'audio/iyi_geceler.mp3' },
      { tr: 'Hoşça kal',      de: 'Tschüss (ich gehe)',     extra: 'sagt die Person, die weggeht',    audio: 'audio/hosca_kal.mp3' },
      { tr: 'Güle güle',      de: 'Tschüss (du gehst)',     extra: 'sagt die Person, die bleibt',     audio: 'audio/gule_gule.mp3' },
      { tr: 'Nasılsın?',      de: 'Wie geht\'s? (informell)', extra: 'sen = du (informal)',           audio: 'audio/nasilsin.mp3' },
      { tr: 'Nasılsınız?',    de: 'Wie geht es Ihnen? (formell)', extra: 'siz = Sie (formal)',       audio: 'audio/nasilsiniz.mp3' },
      { tr: 'İyiyim',         de: 'Mir geht\'s gut',        extra: 'iyi + -yim (ich bin)',            audio: 'audio/iyiyim.mp3' },
      { tr: 'Görüşürüz',      de: 'Bis bald / Wir sehen uns', extra: 'formlos freundlich',           audio: 'audio/gorusuruz.mp3' },
      { tr: 'Görüşmek üzere', de: 'Auf Wiedersehen',        extra: 'etwas formeller',                 audio: 'audio/gorusmek_uzere.mp3' },
      { tr: 'Bay bay',        de: 'Tschüss / Bye bye',      extra: 'sehr informell, englisch',        audio: 'audio/bay_bay.mp3' },
      { tr: 'Selam',          de: 'Hi / Hallo (sehr informell)', extra: 'unter Freunden und Jugendlichen', audio: 'audio/selam.mp3' },
    ],
    erklaerung: '"Hoşça kal" sagt die Person, die geht — "Güle güle" sagt die Person, die bleibt. Das ist anders als im Deutschen! "Günaydın" wird nur morgens verwendet. Nachmittags sagt man "İyi günler". Für formelle Situationen (Arzt, Behörden, ältere Personen) immer "Nasılsınız?" statt "Nasılsın?".',
    grammatiktipp: '"İyiyim" = Ich bin gut. Aufbau: iyi (gut) + -y- (Verbindungslaut) + -im (ich bin). Im Türkischen gibt es kein eigenes "sein"-Verb — stattdessen wird es als Suffix angehängt.',
    beispiele: [
      { tr: 'Merhaba!',             de: 'Hallo!',                     audio: 'audio/merhaba.mp3' },
      { tr: 'Günaydın!',            de: 'Guten Morgen!',              audio: 'audio/gunaydin.mp3' },
      { tr: 'İyi akşamlar!',        de: 'Guten Abend!',               audio: 'audio/iyi_aksamlar.mp3' },
      { tr: 'Hoşça kal!',           de: 'Tschüss! (ich gehe)',        audio: 'audio/hosca_kal.mp3' },
      { tr: 'Güle güle!',           de: 'Tschüss! (ich bleibe)',      audio: 'audio/gule_gule.mp3' },
      { tr: 'Nasılsın? — İyiyim!',  de: 'Wie geht\'s? — Gut!',       audio: 'audio/nasilsin_iyiyim.mp3' },
      { tr: 'Görüşürüz!',           de: 'Bis bald!',                  audio: 'audio/gorusuruz.mp3' },
      { tr: 'İyi geceler!',         de: 'Gute Nacht!',                audio: 'audio/iyi_geceler.mp3' },
    ],
    nachsprech: [
      { tr: 'Merhaba',       audio: 'audio/merhaba.mp3' },
      { tr: 'Günaydın',      audio: 'audio/gunaydin.mp3' },
      { tr: 'İyi günler',    audio: 'audio/iyi_gunler.mp3' },
      { tr: 'İyi akşamlar',  audio: 'audio/iyi_aksamlar.mp3' },
      { tr: 'Hoşça kal',     audio: 'audio/hosca_kal.mp3' },
      { tr: 'Güle güle',     audio: 'audio/gule_gule.mp3' },
      { tr: 'Görüşürüz',     audio: 'audio/gorusuruz.mp3' },
      { tr: 'İyiyim',        audio: 'audio/iyiyim.mp3' },
    ],
    hoerUebung: 'Höre einen kurzen Dialog — wann spielt er? Morgen, Tag, Abend oder Nacht?',
    miniDialog: [
      { sprecher: 'A', tr: 'Günaydın!',              de: 'Guten Morgen!' },
      { sprecher: 'B', tr: 'Günaydın! Nasılsın?',    de: 'Guten Morgen! Wie geht\'s?' },
      { sprecher: 'A', tr: 'İyiyim, teşekkürler! Sen?', de: 'Gut, danke! Und du?' },
      { sprecher: 'B', tr: 'Ben de iyiyim.',          de: 'Mir geht\'s auch gut.' },
      { sprecher: 'A', tr: 'Çok güzel! Görüşürüz.',  de: 'Sehr schön! Bis bald.' },
      { sprecher: 'B', tr: 'Evet, görüşürüz!',       de: 'Ja, bis bald!' },
      { sprecher: 'A', tr: 'Hoşça kal!',              de: 'Tschüss!' },
      { sprecher: 'B', tr: 'Güle güle!',              de: 'Tschüss!' },
    ],
    anwendung: 'Begrüße heute jemanden auf Türkisch — im echten Leben oder laut vor dem Spiegel! Nutze die passende Tageszeit-Begrüßung.',
    zusammenfassung: '6 Begrüßungen gelernt. Hoşça kal = ich gehe, Güle güle = du gehst. Merhaba ist immer richtig!',
    kulturhinweis: 'In der Türkei ist Begrüßung sehr wichtig. Man begrüßt auch fremde Menschen im Fahrstuhl oder Wartezimmer. Ältere Personen werden mit "Merhaba" und einem leichten Kopfnicken begrüßt — Handshake ist bei Männern üblich.',
  },

  'Bitte & Danke': {
    lernziel: 'Du kannst dich bedanken, bitten und höflich reagieren.',
    woerter: [
      { tr: 'Teşekkür ederim',    de: 'Danke schön',            extra: 'formell, immer passend',   audio: 'audio/tesekkur_ederim.mp3' },
      { tr: 'Teşekkürler',        de: 'Danke',                  extra: 'neutral, kürzer',          audio: 'audio/tesekkurler.mp3' },
      { tr: 'Sağ ol',             de: 'Danke',                  extra: 'informell, unter Freunden', audio: 'audio/sag_ol.mp3' },
      { tr: 'Rica ederim',        de: 'Gern geschehen / Bitte', extra: 'Antwort auf Danke',        audio: 'audio/rica_ederim.mp3' },
      { tr: 'Lütfen',             de: 'Bitte',                  extra: 'immer ans Satzende!',      audio: 'audio/lutfen.mp3' },
      { tr: 'Bir şey değil',      de: 'Nichts zu danken',       extra: 'informell',                audio: 'audio/bir_sey_degil.mp3' },
      { tr: 'Özür dilerim',       de: 'Entschuldigung',         extra: 'für Fehler/Störungen',     audio: 'audio/ozur_dilerim.mp3' },
      { tr: 'Affedersiniz',       de: 'Entschuldigung / Verzeihung', extra: 'formell, um Aufmerksamkeit bitten', audio: 'audio/affedersiniz.mp3' },
      { tr: 'Tabii',              de: 'Natürlich / Klar',       extra: 'kurze Zustimmung',         audio: 'audio/tabii.mp3' },
      { tr: 'Buyurun',            de: 'Bitte sehr / Bitteschön', extra: 'beim Übergeben von etwas', audio: 'audio/buyurun.mp3' },
      { tr: 'Efendim',            de: 'Ja? / Bitte? (formell)', extra: 'auch: meine Dame / mein Herr', audio: 'audio/efendim.mp3' },
      { tr: 'Pardon',             de: 'Entschuldigung',         extra: 'aus dem Französischen',    audio: 'audio/pardon.mp3' },
    ],
    saatzbausteine: [
      '[Wunsch] + lütfen → Bir çay lütfen. (Einen Tee bitte.)',
      'Teşekkür ederim. → Danke schön.',
      'Rica ederim. → Gern geschehen.'
    ],
    erklaerung: '"Lütfen" kommt immer ans Ende des Satzes — nicht an den Anfang wie im Deutschen! "Teşekkür ederim" ist die formelle Form; unter Freunden reicht "Sağ ol" oder "Teşekkürler". "Affedersiniz" benutzt man um Fremde anzusprechen (z.B. nach dem Weg fragen), "Özür dilerim" wenn man einen Fehler gemacht hat.',
    grammatiktipp: 'Lütfen-Position: Im Türkischen steht "Lütfen" am Ende. "Bir kahve lütfen." = "Einen Kaffee bitte." Oder am Anfang zur Betonung: "Lütfen, yavaş konuşun." = "Bitte sprechen Sie langsam."',
    beispiele: [
      { tr: 'Bir su lütfen.',       de: 'Ein Wasser bitte.',           audio: 'audio/bir_su_lutfen.mp3' },
      { tr: 'Teşekkür ederim.',     de: 'Danke schön.',                audio: 'audio/tesekkur_ederim.mp3' },
      { tr: 'Rica ederim.',         de: 'Gern geschehen.',             audio: 'audio/rica_ederim.mp3' },
      { tr: 'Sağ ol!',              de: 'Danke! (unter Freunden)',     audio: 'audio/sag_ol.mp3' },
      { tr: 'Bir şey değil.',       de: 'Nichts zu danken.',           audio: 'audio/bir_sey_degil.mp3' },
      { tr: 'Özür dilerim.',        de: 'Entschuldigung.',             audio: 'audio/ozur_dilerim.mp3' },
      { tr: 'Affedersiniz, nerede?', de: 'Entschuldigung, wo ist...?', audio: 'audio/affedersiniz_nerede.mp3' },
      { tr: 'Buyurun, alın.',       de: 'Bitte, nehmen Sie.',          audio: 'audio/buyurun_alin.mp3' },
    ],
    nachsprech: [
      { tr: 'Teşekkür ederim', audio: 'audio/tesekkur_ederim.mp3' },
      { tr: 'Lütfen',          audio: 'audio/lutfen.mp3' },
      { tr: 'Rica ederim',     audio: 'audio/rica_ederim.mp3' },
      { tr: 'Sağ ol',          audio: 'audio/sag_ol.mp3' },
      { tr: 'Bir şey değil',   audio: 'audio/bir_sey_degil.mp3' },
      { tr: 'Özür dilerim',    audio: 'audio/ozur_dilerim.mp3' },
      { tr: 'Affedersiniz',    audio: 'audio/affedersiniz.mp3' },
      { tr: 'Buyurun',         audio: 'audio/buyurun.mp3' },
    ],
    hoerUebung: 'Höre 5 kurze Sätze — wird gedankt, gebeten oder entschuldigt?',
    miniDialog: [
      { sprecher: 'A', tr: 'Affedersiniz, bir çay lütfen.', de: 'Entschuldigung, einen Tee bitte.' },
      { sprecher: 'B', tr: 'Tabii! Şekerli mi?',            de: 'Natürlich! Mit Zucker?' },
      { sprecher: 'A', tr: 'Hayır, şekersiz lütfen.',       de: 'Nein, ohne Zucker bitte.' },
      { sprecher: 'B', tr: 'Buyurun efendim.',              de: 'Bitte sehr.' },
      { sprecher: 'A', tr: 'Teşekkür ederim!',             de: 'Danke schön!' },
      { sprecher: 'B', tr: 'Rica ederim.',                  de: 'Gern geschehen.' },
      { sprecher: 'A', tr: 'Hesap lütfen.',                 de: 'Die Rechnung bitte.' },
      { sprecher: 'B', tr: 'Hemen getiriyorum.',            de: 'Ich bringe sie sofort.' },
    ],
    anwendung: 'Bestelle heute gedanklich etwas auf Türkisch: Was möchtest du? + lütfen. Dann: Teşekkür ederim!',
    zusammenfassung: 'Lütfen kommt ans Ende. Teşekkür ederim = Danke. Rica ederim = Gern. Özür dilerim = Entschuldigung.',
    kulturhinweis: 'In der Türkei ist Höflichkeit sehr wichtig. "Buyurun" hört man ständig — beim Öffnen einer Tür, beim Überreichen von etwas, beim Antworten auf einen Ruf. Es drückt Gastfreundschaft aus.',
  },

  'Ja, Nein, Ich verstehe nicht': {
    lernziel: 'Du kannst zustimmen, ablehnen und nachfragen wenn du etwas nicht verstehst.',
    woerter: [
      { tr: 'Evet',                    de: 'Ja',                          extra: '',                         audio: 'audio/evet.mp3' },
      { tr: 'Hayır',                   de: 'Nein',                        extra: '',                         audio: 'audio/hayir.mp3' },
      { tr: 'Tamam',                   de: 'OK / Alles klar',             extra: '',                         audio: 'audio/tamam.mp3' },
      { tr: 'Anlamıyorum',             de: 'Ich verstehe nicht',          extra: 'wichtigster Notfallsatz!', audio: 'audio/anlamiyorum.mp3' },
      { tr: 'Anladım',                 de: 'Ich habe verstanden',         extra: 'Bestätigung',              audio: 'audio/anladim.mp3' },
      { tr: 'Tekrar eder misiniz?',    de: 'Können Sie wiederholen?',     extra: 'formell',                  audio: 'audio/tekrar_eder_misiniz.mp3' },
      { tr: 'Yavaş konuşur musunuz?',  de: 'Können Sie langsamer sprechen?', extra: 'sehr wichtig!',        audio: 'audio/yavas_konusur_musunuz.mp3' },
      { tr: 'Türkçe bilmiyorum',       de: 'Ich spreche kein Türkisch',   extra: '',                         audio: 'audio/turkce_bilmiyorum.mp3' },
      { tr: 'Bilmiyorum',              de: 'Ich weiß nicht',              extra: '',                         audio: 'audio/bilmiyorum.mp3' },
      { tr: 'Elbette',                 de: 'Natürlich / Selbstverständlich', extra: 'stärker als "tabii"',   audio: 'audio/elbette.mp3' },
      { tr: 'Tabii ki',                de: 'Natürlich / Klar',            extra: 'verstärkte Form',          audio: 'audio/tabii_ki.mp3' },
      { tr: 'Olmaz',                   de: 'Das geht nicht / Nein (stark)', extra: 'bestimmte Ablehnung',   audio: 'audio/olmaz.mp3' },
      { tr: 'Ne demek?',               de: 'Was bedeutet das?',           extra: 'für unbekannte Wörter',   audio: 'audio/ne_demek.mp3' },
      { tr: 'Nasıl yazılıyor?',        de: 'Wie schreibt man das?',       extra: 'buchstabieren lassen',    audio: 'audio/nasil_yaziliyor.mp3' },
    ],
    erklaerung: 'Diese Sätze sind deine "Notfallsätze". Lerne sie auswendig — du wirst sie sehr oft brauchen! "Anlamıyorum" (ich verstehe nicht gerade) und "Anladım" (ich habe verstanden) sind besonders wichtig. "Ne demek?" kannst du nach jedem unbekannten Wort fragen.',
    grammatiktipp: '"Anlamıyorum" = Verneinungsform von "anlamak" (verstehen). Stamm: anla- + mıyor (Verneinungsendung Präsens) + um (ich). Merke: -mıyor statt -ıyor für Verneinung im Präsens.',
    beispiele: [
      { tr: 'Evet, lütfen.',            de: 'Ja, bitte.',                        audio: 'audio/evet_lutfen.mp3' },
      { tr: 'Hayır, teşekkürler.',      de: 'Nein, danke.',                      audio: 'audio/hayir_tesekkurler.mp3' },
      { tr: 'Tamam!',                   de: 'OK!',                               audio: 'audio/tamam.mp3' },
      { tr: 'Anlamıyorum.',             de: 'Ich verstehe nicht.',               audio: 'audio/anlamiyorum.mp3' },
      { tr: 'Yavaş konuşur musunuz?',   de: 'Können Sie langsamer sprechen?',   audio: 'audio/yavas_konusur_musunuz.mp3' },
      { tr: 'Ne demek?',                de: 'Was bedeutet das?',                 audio: 'audio/ne_demek.mp3' },
      { tr: 'Anladım, teşekkürler.',    de: 'Verstanden, danke.',               audio: 'audio/anladim_tesekkurler.mp3' },
      { tr: 'Tekrar eder misiniz?',     de: 'Können Sie das wiederholen?',       audio: 'audio/tekrar_eder_misiniz.mp3' },
    ],
    nachsprech: [
      { tr: 'Evet',                   audio: 'audio/evet.mp3' },
      { tr: 'Hayır',                  audio: 'audio/hayir.mp3' },
      { tr: 'Tamam',                  audio: 'audio/tamam.mp3' },
      { tr: 'Anlamıyorum',            audio: 'audio/anlamiyorum.mp3' },
      { tr: 'Bilmiyorum',             audio: 'audio/bilmiyorum.mp3' },
      { tr: 'Ne demek?',              audio: 'audio/ne_demek.mp3' },
      { tr: 'Tekrar eder misiniz?',   audio: 'audio/tekrar_eder_misiniz.mp3' },
      { tr: 'Yavaş konuşur musunuz?', audio: 'audio/yavas_konusur_musunuz.mp3' },
    ],
    hoerUebung: 'Höre Fragen — antworte automatisch mit Evet oder Hayır. Dann: Gibt es unbekannte Wörter? Frage: "Ne demek?"',
    miniDialog: [
      { sprecher: 'A', tr: 'Türkçe biliyor musunuz?',   de: 'Sprechen Sie Türkisch?' },
      { sprecher: 'B', tr: 'Hayır, biraz biliyorum.',   de: 'Nein, ein bisschen.' },
      { sprecher: 'A', tr: 'Anladınız mı?',             de: 'Haben Sie verstanden?' },
      { sprecher: 'B', tr: 'Hayır, anlamadım. Ne demek?', de: 'Nein, ich habe nicht verstanden. Was bedeutet das?' },
      { sprecher: 'A', tr: 'Yavaş konuşayım.',          de: 'Ich spreche langsam.' },
      { sprecher: 'B', tr: 'Teşekkür ederim!',          de: 'Danke!' },
      { sprecher: 'A', tr: 'Şimdi anladınız mı?',       de: 'Haben Sie jetzt verstanden?' },
      { sprecher: 'B', tr: 'Evet, anladım!',            de: 'Ja, ich habe verstanden!' },
    ],
    anwendung: 'Dein wichtigster Satz: "Yavaş konuşur musunuz?" — Übe ihn bis er automatisch kommt. Dann auch: "Ne demek?"',
    zusammenfassung: 'Evet, Hayır, Tamam, Anlamıyorum, Ne demek? — 5 Wörter/Sätze die du täglich brauchst!',
  },

  'Mein Name ist...': {
    lernziel: 'Du kannst deinen Namen sagen und nach dem Namen fragen.',
    woerter: [
      { tr: 'Benim adım',           de: 'Mein Name ist',              extra: 'benim = mein, ad = Name, -ım = mein',  audio: 'audio/benim_adim.mp3' },
      { tr: 'Adın ne?',             de: 'Wie heißt du?',              extra: 'informell (sen)',                        audio: 'audio/adin_ne.mp3' },
      { tr: 'Adınız ne?',           de: 'Wie heißen Sie?',            extra: 'formell (siz)',                          audio: 'audio/adiniz_ne.mp3' },
      { tr: 'İsmim',                de: 'Mein Name ist (alternativ)', extra: 'isim = Name (arabisches Lehnwort)',     audio: 'audio/ismim.mp3' },
      { tr: 'Ben',                  de: 'Ich',                        extra: 'Ben + Name = Ich bin...',               audio: 'audio/ben.mp3' },
      { tr: 'Memnun oldum',         de: 'Schön, dich kennenzulernen', extra: 'wörtlich: "ich bin gefreut worden"',   audio: 'audio/memnun_oldum.mp3' },
      { tr: 'Ben de memnun oldum',  de: 'Freut mich auch',            extra: 'Antwort darauf',                        audio: 'audio/ben_de_memnun_oldum.mp3' },
      { tr: 'Tanıştığımıza memnun oldum', de: 'Schön Sie kennenzulernen', extra: 'formeller Ausdruck',              audio: 'audio/tanistigimiza_memnun.mp3' },
      { tr: 'sen',                  de: 'du (informell)',              extra: 'für Gleichaltrige und Freunde',        audio: 'audio/sen.mp3' },
      { tr: 'siz',                  de: 'Sie (formell) / ihr (Plural)', extra: 'für Fremde und ältere Personen',     audio: 'audio/siz.mp3' },
      { tr: 'Adın nedir?',          de: 'Was ist dein Name? (informell)', extra: 'etwas formeller als Adın ne?',    audio: 'audio/adin_nedir.mp3' },
      { tr: 'Takma adım',           de: 'Mein Spitzname ist',         extra: 'takma ad = Spitzname',                 audio: 'audio/takma_adim.mp3' },
    ],
    erklaerung: 'Im Türkischen gibt es "du" (sen) und "Sie" (siz). Mit fremden Erwachsenen und Respektspersonen immer "siz". Mit Freunden und Gleichaltrigen "sen". "Benim adım" und "Ben + Name" sind gleichwertig: "Benim adım Max" = "Ben Max" = "Ich bin Max / Mein Name ist Max".',
    grammatiktipp: '"Benim" = mein. "Ad" = Name. "Adım" = mein Name (ad + -ım). Die Besitzendung -ım folgt der Vokalharmonie: adım (a→ım), evim (e→im), kolum (o→um), üzümüm (ü→üm).',
    beispiele: [
      { tr: 'Benim adım Anna.',      de: 'Mein Name ist Anna.',             audio: 'audio/benim_adim_anna.mp3' },
      { tr: 'Adın ne?',              de: 'Wie heißt du?',                   audio: 'audio/adin_ne.mp3' },
      { tr: 'Ben Mehmet.',           de: 'Ich bin Mehmet.',                 audio: 'audio/ben_mehmet.mp3' },
      { tr: 'Memnun oldum!',         de: 'Schön, dich kennenzulernen!',    audio: 'audio/memnun_oldum.mp3' },
      { tr: 'Ben de memnun oldum!',  de: 'Freut mich auch!',               audio: 'audio/ben_de_memnun_oldum.mp3' },
      { tr: 'İsmim Leyla.',          de: 'Mein Name ist Leyla.',            audio: 'audio/ismim_leyla.mp3' },
      { tr: 'Adınız nedir?',         de: 'Wie heißen Sie?',                audio: 'audio/adiniz_nedir.mp3' },
      { tr: 'Seni tanımak güzel.',   de: 'Schön dich kennenzulernen.',     audio: 'audio/seni_tanimak_guzel.mp3' },
    ],
    nachsprech: [
      { tr: 'Benim adım', audio: 'audio/benim_adim.mp3' },
      { tr: 'Adın ne?',   audio: 'audio/adin_ne.mp3' },
      { tr: 'Ben',        audio: 'audio/ben.mp3' },
      { tr: 'sen',        audio: 'audio/sen.mp3' },
      { tr: 'siz',        audio: 'audio/siz.mp3' },
      { tr: 'Memnun oldum', audio: 'audio/memnun_oldum.mp3' },
      { tr: 'Ben de memnun oldum', audio: 'audio/ben_de_memnun_oldum.mp3' },
      { tr: 'İsmim',      audio: 'audio/ismim.mp3' },
    ],
    hoerUebung: 'Höre 3 Vorstellungen — wie heißen die Personen und nutzen sie du oder Sie?',
    miniDialog: [
      { sprecher: 'A', tr: 'Merhaba! Benim adım Leyla.', de: 'Hallo! Mein Name ist Leyla.' },
      { sprecher: 'B', tr: 'Merhaba! Ben Tom. Memnun oldum.', de: 'Hallo! Ich bin Tom. Schön dich kennenzulernen.' },
      { sprecher: 'A', tr: 'Ben de memnun oldum!', de: 'Freut mich auch!' },
      { sprecher: 'B', tr: 'Türkçe öğreniyor musun?', de: 'Lernst du Türkisch?' },
      { sprecher: 'A', tr: 'Evet, öğreniyorum.', de: 'Ja, ich lerne es.' },
      { sprecher: 'B', tr: 'Harika! Ben de öğreniyorum.', de: 'Toll! Ich auch.' },
      { sprecher: 'A', tr: 'Görüşürüz, Tom!', de: 'Bis bald, Tom!' },
      { sprecher: 'B', tr: 'Görüşürüz, Leyla!', de: 'Bis bald, Leyla!' },
    ],
    anwendung: 'Stell dich auf Türkisch vor — laut, dreimal: "Benim adım [dein Name]. Memnun oldum!"',
    zusammenfassung: 'Benim adım + [Name] = fertig vorgestellt! Memnun oldum nicht vergessen. Sen = du, Siz = Sie.',
    kulturhinweis: 'In der Türkei fragt man schnell nach dem Vornamen. Nachnamen sind im Alltag weniger wichtig. Jüngere sprechen ältere Personen oft mit Titel + Vorname an: "Ayşe Hanım" (Frau Ayşe) oder "Ahmet Bey" (Herr Ahmet).',
  },

  'Woher kommst du?': {
    lernziel: 'Du kannst nach der Herkunft fragen und antworten.',
    woerter: [
      { tr: 'Nerelisin?',      de: 'Woher kommst du?',         extra: 'informell (sen)',           audio: 'audio/nerelisin.mp3' },
      { tr: 'Nerelisiniz?',    de: 'Woher kommen Sie?',        extra: 'formell (siz)',             audio: 'audio/nerelisiniz.mp3' },
      { tr: 'Almanya',         de: 'Deutschland',              extra: 'Almanya\'danım = aus D.',  audio: 'audio/almanya.mp3' },
      { tr: 'Avusturya',       de: 'Österreich',               extra: 'Avusturya\'danım',         audio: 'audio/avusturya.mp3' },
      { tr: 'İsviçre',         de: 'Schweiz',                  extra: 'İsviçre\'denim',           audio: 'audio/isviçre.mp3' },
      { tr: 'Türkiye',         de: 'Türkei',                   extra: 'Türkiye\'denim',           audio: 'audio/turkiye.mp3' },
      { tr: 'İstanbul',        de: 'Istanbul',                 extra: 'größte Stadt der Türkei', audio: 'audio/istanbul.mp3' },
      { tr: 'Ankara',          de: 'Ankara',                   extra: 'Hauptstadt der Türkei',   audio: 'audio/ankara.mp3' },
      { tr: 'Berlin',          de: 'Berlin',                   extra: 'Berlin\'denim',            audio: 'audio/berlin.mp3' },
      { tr: 'Vay canına!',     de: 'Wow! / Echt?',             extra: 'Ausruf der Überraschung', audio: 'audio/vay_canina.mp3' },
      { tr: '-dan / -den',     de: 'aus / von (Herkunft)',     extra: 'Ablativendung',            audio: 'audio/dan_den.mp3' },
      { tr: '-lı / -li',       de: 'Endung für Herkunft',      extra: 'İstanbullu = aus Istanbul', audio: 'audio/li_li.mp3' },
    ],
    erklaerung: 'Die Endung "-dan / -den" bedeutet "aus". Almanya + dan = aus Deutschland. Eine alternative Form: "[Stadt]-lı/-li/-lu/-lü" = jemand aus [Stadt]: İstanbullu = ein Istanbuler, Berlınlı = ein Berliner. Beide Formen sind korrekt und gebräuchlich.',
    grammatiktipp: 'Vokalharmonie bei -dan/-den: Nach hinterem Vokal (a ı o u) → -dan. Nach vorderem Vokal (e i ö ü) → -den. Also: Almanya + dan, aber Türkiye + den.',
    beispiele: [
      { tr: 'Nerelisin?',          de: 'Woher kommst du?',            audio: 'audio/nerelisin.mp3' },
      { tr: 'Ben Almanya\'danım.', de: 'Ich komme aus Deutschland.',  audio: 'audio/ben_almanyadan_sentence.mp3' },
      { tr: 'Ben Türkiye\'denim.', de: 'Ich komme aus der Türkei.',   audio: 'audio/ben_turkiyedenim.mp3' },
      { tr: 'Sen nerelisin?',      de: 'Und du, woher kommst du?',    audio: 'audio/sen_nerelisin.mp3' },
      { tr: 'İstanbulluyum.',      de: 'Ich komme aus Istanbul.',     audio: 'audio/istanbulluyum.mp3' },
      { tr: 'Berlınlıyım.',        de: 'Ich komme aus Berlin.',       audio: 'audio/berlinliyim.mp3' },
      { tr: 'Vay canına, İstanbul\'dan!', de: 'Wow, aus Istanbul!',  audio: 'audio/vay_canina_istanbul.mp3' },
      { tr: 'Hangi şehirden?',     de: 'Aus welcher Stadt?',          audio: 'audio/hangi_sehirden.mp3' },
    ],
    nachsprech: [
      { tr: 'Nerelisin?',         audio: 'audio/nerelisin.mp3' },
      { tr: 'Ben Almanya\'danım.', audio: 'audio/ben_almanyadan_sentence.mp3' },
      { tr: 'Ben Türkiye\'denim.', audio: 'audio/ben_turkiyedenim.mp3' },
      { tr: 'Vay canına!',        audio: 'audio/vay_canina.mp3' },
      { tr: 'İstanbulluyum.',     audio: 'audio/istanbulluyum.mp3' },
      { tr: 'Hangi şehirden?',    audio: 'audio/hangi_sehirden.mp3' },
    ],
    hoerUebung: 'Höre 4 Personen — woher kommen sie jeweils? Stadt oder Land?',
    miniDialog: [
      { sprecher: 'A', tr: 'Nerelisin?',                de: 'Woher kommst du?' },
      { sprecher: 'B', tr: 'Ben Almanya\'danım. Berlin\'denim. Sen?', de: 'Aus Deutschland, aus Berlin. Und du?' },
      { sprecher: 'A', tr: 'Ben İstanbul\'danım.',      de: 'Ich komme aus Istanbul.' },
      { sprecher: 'B', tr: 'Vay canına! İstanbul çok güzel.',  de: 'Wow! Istanbul ist sehr schön.' },
      { sprecher: 'A', tr: 'Evet, çok seviyorum.',      de: 'Ja, ich liebe es sehr.' },
      { sprecher: 'B', tr: 'İstanbul\'da mı oturuyorsun?', de: 'Wohnst du in Istanbul?' },
      { sprecher: 'A', tr: 'Hayır, şimdi Berlin\'deyim.', de: 'Nein, ich bin jetzt in Berlin.' },
      { sprecher: 'B', tr: 'Anlıyorum!',                de: 'Ich verstehe!' },
    ],
    anwendung: 'Sag laut: "Ben [dein Land]\'danım. [deine Stadt]\'danım." — Dreimal. Ohne abzulesen.',
    zusammenfassung: 'Nerelisin? + Ben...danım = du kannst über Herkunft sprechen! -dan/-den = aus. Vokalharmonie beachten!',
    kulturhinweis: 'Türken fragen sehr schnell nach der Herkunft — sowohl nach dem Land als auch nach der Stadt. Städte wie Istanbul, Ankara und İzmir sind jedem bekannt. Die Herkunft ist Teil der Identität.',
  },

  'Zahlen 1–10': {
    lernziel: 'Du kannst die Zahlen 1–10 sagen, verstehen und beim Bestellen nutzen.',
    woerter: [
      { tr: 'bir',   de: 'eins (1)',    extra: 'bir çay = ein Tee',        audio: 'audio/bir.mp3' },
      { tr: 'iki',   de: 'zwei (2)',    extra: 'iki kişi = zwei Personen', audio: 'audio/iki.mp3' },
      { tr: 'üç',    de: 'drei (3)',    extra: 'sprich: "ütsch"',          audio: 'audio/uc.mp3' },
      { tr: 'dört',  de: 'vier (4)',    extra: 'ö wie dt. ö',              audio: 'audio/dort.mp3' },
      { tr: 'beş',   de: 'fünf (5)',    extra: 'sprich: "besch"',          audio: 'audio/bes.mp3' },
      { tr: 'altı',  de: 'sechs (6)',   extra: 'ı = dunkles i',            audio: 'audio/alti.mp3' },
      { tr: 'yedi',  de: 'sieben (7)',  extra: 'yedi gün = sieben Tage',  audio: 'audio/yedi.mp3' },
      { tr: 'sekiz', de: 'acht (8)',    extra: '',                         audio: 'audio/sekiz.mp3' },
      { tr: 'dokuz', de: 'neun (9)',    extra: '',                         audio: 'audio/dokuz.mp3' },
      { tr: 'on',    de: 'zehn (10)',   extra: '',                         audio: 'audio/on.mp3' },
      { tr: 'kaç',   de: 'wie viele? / wie viel?', extra: 'Fragewort für Zahlen', audio: 'audio/kac.mp3' },
      { tr: 'tane',  de: 'Stück (Zählwort)', extra: 'üç tane elma = 3 Äpfel', audio: 'audio/tane.mp3' },
      { tr: 'sıfır', de: 'null (0)',    extra: 'bei Telefonnummern wichtig', audio: 'audio/sifir.mp3' },
      { tr: 'lira',  de: 'Lira (türk. Währung)', extra: 'beş lira = 5 Lira', audio: 'audio/lira.mp3' },
    ],
    saatzbausteine: [
      'Kaç tane? → Wie viele Stück?',
      '[Zahl] + [Nomen] → üç çay (drei Tee)',
      'Nomen bleibt Singular! "üç çay" nicht "üç çaylar".'
    ],
    erklaerung: 'Zahlen kommen VOR dem Nomen — und das Nomen bleibt im Singular! "Üç çay" = drei Tee (nicht "drei Tees"). Das ist anders als im Deutschen. "Kaç?" = Wie viele? / Wie viel? ist dein Fragewort für alle Zahlenthemen.',
    grammatiktipp: 'Nach Zahlen steht das Nomen immer im Singular: "beş araba" (fünf Auto, nicht "fünf Autos"). Das Zählwort "tane" (Stück) ist optional aber sehr gebräuchlich: "beş tane araba".',
    beispiele: [
      { tr: 'Bir çay lütfen.',    de: 'Einen Tee bitte.',         audio: 'audio/bir_cay_lutfen.mp3' },
      { tr: 'İki su lütfen.',     de: 'Zwei Wasser bitte.',       audio: 'audio/iki_su_lutfen.mp3' },
      { tr: 'Üç kişi.',           de: 'Drei Personen.',           audio: 'audio/uc_kisi.mp3' },
      { tr: 'Kaç tane?',          de: 'Wie viele Stück?',         audio: 'audio/kac_tane.mp3' },
      { tr: 'Beş lira.',          de: 'Fünf Lira.',               audio: 'audio/bes_lira.mp3' },
      { tr: 'Dört kişilik masa.', de: 'Tisch für vier Personen.', audio: 'audio/dort_kisilik.mp3' },
      { tr: 'Yedi gün.',          de: 'Sieben Tage.',             audio: 'audio/yedi_gun.mp3' },
      { tr: 'On dakika lütfen.',  de: 'Zehn Minuten bitte.',      audio: 'audio/on_dakika.mp3' },
    ],
    nachsprech: [
      { tr: 'bir',   audio: 'audio/bir.mp3' },
      { tr: 'iki',   audio: 'audio/iki.mp3' },
      { tr: 'üç',    audio: 'audio/uc.mp3' },
      { tr: 'dört',  audio: 'audio/dort.mp3' },
      { tr: 'beş',   audio: 'audio/bes.mp3' },
      { tr: 'altı',  audio: 'audio/alti.mp3' },
      { tr: 'yedi',  audio: 'audio/yedi.mp3' },
      { tr: 'sekiz', audio: 'audio/sekiz.mp3' },
      { tr: 'dokuz', audio: 'audio/dokuz.mp3' },
      { tr: 'on',    audio: 'audio/on.mp3' },
    ],
    hoerUebung: 'Höre eine Zahl — zeige sie mit den Fingern oder schreibe sie auf!',
    miniDialog: [
      { sprecher: 'Kellner', tr: 'Kaç kişisiniz?',            de: 'Wie viele Personen sind Sie?' },
      { sprecher: 'Gast',    tr: 'Dört kişiyiz.',              de: 'Wir sind vier.' },
      { sprecher: 'Kellner', tr: 'Tamam! Ne içersiniz?',       de: 'Alles klar! Was trinken Sie?' },
      { sprecher: 'Gast',    tr: 'İki çay, iki kahve lütfen.', de: 'Zwei Tee, zwei Kaffee bitte.' },
      { sprecher: 'Kellner', tr: 'Kaç şekerli?',              de: 'Wie viele mit Zucker?' },
      { sprecher: 'Gast',    tr: 'Üç şekerli, bir şekersiz.', de: 'Drei mit Zucker, einer ohne.' },
      { sprecher: 'Kellner', tr: 'Tamam, teşekkürler.',       de: 'Alles klar, danke.' },
      { sprecher: 'Gast',    tr: 'Biz teşekkür ederiz!',      de: 'Wir danken!' },
    ],
    anwendung: 'Zähle heute alles was du siehst auf Türkisch — Äpfel, Autos, Stühle, Fenster. Laut vorlesen!',
    zusammenfassung: '10 Zahlen + "Kaç?" (Wie viele?) — du kannst im Café und Laden bestellen! Nomen immer Singular nach Zahl.',
    kulturhinweis: 'Beim Bestellen in türkischen Cafés reicht "İki çay lütfen." völlig aus. Ein Lächeln dazu — und schon bist du perfekt integriert.',
  },

  'Im Café — Bestellen': {
    lernziel: 'Du kannst im Café etwas bestellen, nach dem Preis fragen und bezahlen.',
    woerter: [
      { tr: 'çay',            de: 'Tee',                  extra: 'türkischer Schwarztee',          audio: 'audio/cay.mp3' },
      { tr: 'kahve',          de: 'Kaffee',               extra: 'oft Türkischer Mokka',           audio: 'audio/kahve.mp3' },
      { tr: 'su',             de: 'Wasser',               extra: 'meist Mineralwasser',            audio: 'audio/su.mp3' },
      { tr: 'meyve suyu',     de: 'Fruchtsaft',           extra: 'meyve = Obst, su = Wasser',      audio: 'audio/meyve_suyu.mp3' },
      { tr: 'ayran',          de: 'Joghurtgetränk',       extra: 'typisch türkisch, gesalzen',     audio: 'audio/ayran.mp3' },
      { tr: 'sütlü',          de: 'mit Milch',            extra: 'sütlü kahve = Milchkaffee',      audio: 'audio/sutlu.mp3' },
      { tr: 'şekerli',        de: 'mit Zucker',           extra: 'şekersiz = ohne Zucker',         audio: 'audio/sekerli.mp3' },
      { tr: 'şekersiz',       de: 'ohne Zucker',          extra: 'şeker + -siz = ohne Zucker',    audio: 'audio/sekersiz.mp3' },
      { tr: 'hesap',          de: 'Rechnung',             extra: 'hesap lütfen = Rechnung bitte', audio: 'audio/hesap.mp3' },
      { tr: 'kaç para',       de: 'wie viel kostet das',  extra: 'para = Geld',                   audio: 'audio/kac_para.mp3' },
      { tr: 'ne kadar',       de: 'wie viel',             extra: 'allgemeines Fragewort für Preis', audio: 'audio/ne_kadar.mp3' },
      { tr: 'Başka?',         de: 'Noch etwas?',          extra: 'Kellner fragt nach mehr',       audio: 'audio/baska.mp3' },
      { tr: 'Afiyet olsun',   de: 'Guten Appetit',        extra: 'auch: "Wohl bekomm\'s!"',       audio: 'audio/afiyet_olsun.mp3' },
    ],
    saatzbausteine: [
      'Bir [Getränk] lütfen. → Ein ... bitte.',
      'Kaç para? → Wie viel kostet das?',
      'Hesap lütfen. → Die Rechnung bitte.'
    ],
    erklaerung: '"Bir çay lütfen" — das reicht! Du brauchst keinen ganzen Satz. Im Café funktioniert das immer. "Şekerli mi?" bedeutet "Mit Zucker?" und ist die häufigste Gegenfrage. "Başka?" fragt ob du noch etwas möchtest. Türkischer Kaffee (Türk kahvesi) wird sehr stark und ohne Filter serviert.',
    grammatiktipp: '-li/-lı/-lu/-lü bedeutet "mit/versehen mit": şeker + li = şekerli (mit Zucker). -siz/-sız/-suz/-süz bedeutet "ohne": şeker + siz = şekersiz (ohne Zucker). Diese Endungen folgen der Vokalharmonie.',
    beispiele: [
      { tr: 'Bir çay lütfen.',      de: 'Einen Tee bitte.',            audio: 'audio/bir_cay_lutfen.mp3' },
      { tr: 'İki kahve lütfen.',    de: 'Zwei Kaffee bitte.',          audio: 'audio/iki_kahve_lutfen.mp3' },
      { tr: 'Sütlü kahve lütfen.', de: 'Kaffee mit Milch bitte.',     audio: 'audio/sutlu_kahve_lutfen.mp3' },
      { tr: 'Kaç para?',            de: 'Wie viel kostet das?',        audio: 'audio/kac_para.mp3' },
      { tr: 'Hesap lütfen.',        de: 'Die Rechnung bitte.',         audio: 'audio/hesap_lutfen.mp3' },
      { tr: 'Şekersiz lütfen.',     de: 'Ohne Zucker bitte.',          audio: 'audio/sekersiz_lutfen.mp3' },
      { tr: 'Bir ayran lütfen.',    de: 'Ein Ayran bitte.',            audio: 'audio/bir_ayran_lutfen.mp3' },
      { tr: 'Ne kadar?',            de: 'Wie viel kostet das?',        audio: 'audio/ne_kadar.mp3' },
    ],
    nachsprech: [
      { tr: 'Bir çay lütfen.',  audio: 'audio/bir_cay_lutfen.mp3' },
      { tr: 'İki kahve lütfen.', audio: 'audio/iki_kahve_lutfen.mp3' },
      { tr: 'Kaç para?',        audio: 'audio/kac_para.mp3' },
      { tr: 'Hesap lütfen.',    audio: 'audio/hesap_lutfen.mp3' },
      { tr: 'şekerli',          audio: 'audio/sekerli.mp3' },
      { tr: 'şekersiz',         audio: 'audio/sekersiz.mp3' },
      { tr: 'ayran',            audio: 'audio/ayran.mp3' },
      { tr: 'Afiyet olsun',     audio: 'audio/afiyet_olsun.mp3' },
    ],
    hoerUebung: 'Höre eine Bestellung — was wird bestellt, wie (mit/ohne Zucker/Milch) und wie viel kostet es?',
    miniDialog: [
      { sprecher: 'Kellner', tr: 'Merhaba! Ne alırsınız?',          de: 'Hallo! Was nehmen Sie?' },
      { sprecher: 'Gast',    tr: 'Bir çay, bir kahve lütfen.',       de: 'Einen Tee, einen Kaffee bitte.' },
      { sprecher: 'Kellner', tr: 'Çay şekerli mi?',                  de: 'Tee mit Zucker?' },
      { sprecher: 'Gast',    tr: 'Evet, şekerli. Kahve şekersiz.',  de: 'Ja, mit Zucker. Kaffee ohne.' },
      { sprecher: 'Kellner', tr: 'Tamam. Başka bir şey?',           de: 'Alles klar. Sonst noch etwas?' },
      { sprecher: 'Gast',    tr: 'Hayır, teşekkürler.',              de: 'Nein, danke.' },
      { sprecher: 'Gast',    tr: 'Hesap lütfen!',                    de: 'Die Rechnung bitte!' },
      { sprecher: 'Kellner', tr: 'Hemen getiriyorum. Yirmi lira.',  de: 'Ich bringe sie sofort. 20 Lira.' },
    ],
    anwendung: 'Übe diesen Dialog laut — stell dir vor du sitzt in einem Istanbuler Café am Bosporus.',
    zusammenfassung: 'Bir + [Getränk] + lütfen = du kannst im Café bestellen! Hesap lütfen = Rechnung. Şekerli/şekersiz = mit/ohne Zucker.',
    kulturhinweis: 'In türkischen Cafés (çay bahçesi = Teegarten) wird Tee gratis nachgeschenkt. Man bestellt nicht einzelne Gläser, sondern ein "Semaver" (Samowar) kommt auf den Tisch. Es ist unhöflich, Tee abzulehnen.',
  },

  'Wie alt bist du?': {
    lernziel: 'Du kannst dein Alter sagen, danach fragen und Zahlen 11–30 nutzen.',
    woerter: [
      { tr: 'Kaç yaşındasın?',   de: 'Wie alt bist du?',        extra: 'informell (sen)',           audio: 'audio/kac_yasindasin.mp3' },
      { tr: 'Kaç yaşındasınız?', de: 'Wie alt sind Sie?',       extra: 'formell (siz)',             audio: 'audio/kac_yasindasiniz.mp3' },
      { tr: 'yaş',               de: 'Jahr(e) / Alter',         extra: 'yirmi yaş = zwanzig Jahre', audio: 'audio/yas.mp3' },
      { tr: 'yaşındayım',        de: 'ich bin ... Jahre alt',   extra: '[Zahl] yaşındayım',        audio: 'audio/yasinday.mp3' },
      { tr: 'on bir',            de: 'elf (11)',                 extra: 'on + bir',                 audio: 'audio/on_bir.mp3' },
      { tr: 'on beş',            de: 'fünfzehn (15)',           extra: 'on + beş',                 audio: 'audio/on_bes.mp3' },
      { tr: 'on sekiz',          de: 'achtzehn (18)',            extra: 'on + sekiz',               audio: 'audio/on_sekiz.mp3' },
      { tr: 'yirmi',             de: 'zwanzig (20)',             extra: '',                         audio: 'audio/yirmi.mp3' },
      { tr: 'yirmi beş',         de: 'fünfundzwanzig (25)',     extra: 'yirmi + beş',              audio: 'audio/ben_yirmi_bes_yasin.mp3' },
      { tr: 'otuz',              de: 'dreißig (30)',             extra: '',                         audio: 'audio/otuz.mp3' },
      { tr: 'otuz üç',           de: 'dreiunddreißig (33)',     extra: 'otuz + üç',                audio: 'audio/otuz_uc.mp3' },
      { tr: 'genç',              de: 'jung',                    extra: 'çok genç = sehr jung',     audio: 'audio/genc.mp3' },
      { tr: 'büyük',             de: 'groß / alt (bei Personen)', extra: 'yaşça büyük = älter',   audio: 'audio/buyuk.mp3' },
      { tr: 'küçük',             de: 'klein / jung (bei Personen)', extra: 'senden küçük = jünger als du', audio: 'audio/kucuk.mp3' },
    ],
    saatzbausteine: [
      'Kaç yaşındasın? → Wie alt bist du?',
      'Ben [Zahl] yaşındayım. → Ich bin X Jahre alt.',
      '11–19: on + Zahl → on iki = 12, on sekiz = 18'
    ],
    erklaerung: '[Zahl] + yaşındayım = Ich bin X Jahre alt. Die Zahlen 11–30 bauen auf den Zehnern auf: on (10) + bir (1) = on bir (11). Zwanzig: yirmi. Dreißig: otuz. Alles dazwischen: Zehner + Einer zusammensetzen. "Kaç yaşındasın?" darf man Gleichaltrigen fragen; bei älteren Personen gilt die Frage als etwas indiskret.',
    grammatiktipp: 'Aufbau von "yaşındayım": yaş (Jahr/Alter) + -ında (sein + Ort) + -y-ım (ich). Wörtlich: "ich bin an meinem Alter" = ich bin X Jahre alt.',
    beispiele: [
      { tr: 'Kaç yaşındasın?',           de: 'Wie alt bist du?',        audio: 'audio/kac_yasindasin.mp3' },
      { tr: 'Ben yirmi beş yaşındayım.', de: 'Ich bin 25 Jahre alt.',   audio: 'audio/ben_yirmi_bes_complete.mp3' },
      { tr: 'Ben otuz yaşındayım.',      de: 'Ich bin 30.',             audio: 'audio/ben_otuz_yasinday.mp3' },
      { tr: 'On altı yaşındayım.',       de: 'Ich bin 16.',             audio: 'audio/on_alti_yasinday.mp3' },
      { tr: 'O çok genç!',               de: 'Er/Sie ist sehr jung!',   audio: 'audio/o_cok_genc.mp3' },
      { tr: 'Senden iki yaş küçüğüm.',   de: 'Ich bin zwei Jahre jünger als du.', audio: 'audio/senden_kucugum.mp3' },
      { tr: 'Kaç yaşındasınız?',         de: 'Wie alt sind Sie?',       audio: 'audio/kac_yasindasiniz.mp3' },
      { tr: 'Kırk yaşındayım.',          de: 'Ich bin 40.',             audio: 'audio/kirk_yasinday.mp3' },
    ],
    nachsprech: [
      { tr: 'Kaç yaşındasın?',           audio: 'audio/kac_yasindasin.mp3' },
      { tr: 'Ben yirmi beş yaşındayım.', audio: 'audio/ben_yirmi_bes_complete.mp3' },
      { tr: 'on bir',   audio: 'audio/on_bir.mp3' },
      { tr: 'on beş',   audio: 'audio/on_bes.mp3' },
      { tr: 'yirmi',    audio: 'audio/yirmi.mp3' },
      { tr: 'otuz',     audio: 'audio/otuz.mp3' },
      { tr: 'genç',     audio: 'audio/genc.mp3' },
    ],
    hoerUebung: 'Höre 4 Personen — wie alt sind sie jeweils?',
    miniDialog: [
      { sprecher: 'A', tr: 'Kaç yaşındasın?',                  de: 'Wie alt bist du?' },
      { sprecher: 'B', tr: 'Ben yirmi sekiz yaşındayım. Sen?', de: 'Ich bin 28. Und du?' },
      { sprecher: 'A', tr: 'Ben otuz iki yaşındayım.',         de: 'Ich bin 32.' },
      { sprecher: 'B', tr: 'Dört yaş büyüksün.',              de: 'Du bist vier Jahre älter.' },
      { sprecher: 'A', tr: 'Evet! Kardeşin var mı?',          de: 'Ja! Hast du Geschwister?' },
      { sprecher: 'B', tr: 'Evet, bir kız kardeşim var.',     de: 'Ja, ich habe eine Schwester.' },
      { sprecher: 'A', tr: 'Kaç yaşında?',                    de: 'Wie alt ist sie?' },
      { sprecher: 'B', tr: 'Yirmi dört yaşında.',             de: 'Sie ist 24.' },
    ],
    anwendung: 'Sag laut dein Alter auf Türkisch. Dreimal. Dann frag imaginär: "Kaç yaşındasın?" und antworte.',
    zusammenfassung: 'Kaç yaşındasın? + Ben X yaşındayım. Zahlen 11–30: Zehner + Einer zusammensetzen. Genç = jung!',
    kulturhinweis: 'In der Türkei ist das Alter kein Tabuthema — man fragt sehr offen danach. Ältere Menschen werden mit großem Respekt behandelt: Man steht auf wenn sie den Raum betreten.',
  },

  'Alles zusammen — erstes Gespräch': {
    lernziel: 'Du führst ein vollständiges Mini-Gespräch mit allem was du bisher gelernt hast.',
    woerter: [
      { tr: 'Nasılsın?',    de: 'Wie geht\'s?',         extra: 'informell (sen)',          audio: 'audio/nasilsin.mp3' },
      { tr: 'Nasılsınız?',  de: 'Wie geht es Ihnen?',   extra: 'formell (siz)',            audio: 'audio/nasilsiniz.mp3' },
      { tr: 'İyiyim',       de: 'Mir geht\'s gut',      extra: 'iyi + -yim',               audio: 'audio/iyiyim.mp3' },
      { tr: 'Fena değil',   de: 'Nicht schlecht',       extra: 'fena = schlecht, değil = nicht', audio: 'audio/fena_degil.mp3' },
      { tr: 'Çok iyiyim',   de: 'Mir geht\'s sehr gut', extra: 'çok = sehr',              audio: 'audio/cok_iyiyim.mp3' },
      { tr: 'Teşekkürler',  de: 'Danke',                extra: 'kurze Form',               audio: 'audio/tesekkurler.mp3' },
      { tr: 'Sen?',         de: 'Und du?',              extra: 'kurze Gegenfrage',          audio: 'audio/sen_soru.mp3' },
      { tr: 'Siz?',         de: 'Und Sie?',             extra: 'formelle Gegenfrage',       audio: 'audio/siz_soru.mp3' },
      { tr: 'Hoş geldiniz', de: 'Willkommen!',          extra: 'Begrüßung für Gäste',     audio: 'audio/hos_geldiniz.mp3' },
      { tr: 'Hoş bulduk',   de: 'Danke! (Antwort auf Hoş geldiniz)', extra: 'wörtl.: schön gefunden', audio: 'audio/hos_bulduk.mp3' },
      { tr: 'Görüşürüz',    de: 'Bis bald!',            extra: 'auch: wir sehen uns',      audio: 'audio/gorusuruz.mp3' },
      { tr: 'İyi günler',   de: 'Auf Wiedersehen / Guten Tag', extra: 'als Abschied',      audio: 'audio/iyi_gunler.mp3' },
    ],
    erklaerung: 'Heute kombinierst du alles: Begrüßung + Name + Herkunft + Alter + Befinden + Verabschiedung. Das ist ein echter Türkisch-Dialog! "Fena değil" (nicht schlecht) ist eine ehrlichere Antwort als immer "İyiyim". "Hoş geldiniz — Hoş bulduk" ist das klassische Willkommen-Paar.',
    grammatiktipp: '"İyiyim" = iyi (gut) + -y- (Verbindungskonsonant) + -im (ich bin). Dieses -im/-yim bedeutet "ich bin" und wird ans Adjektiv gehängt: mutluyum (ich bin glücklich), üzgünüm (ich bin traurig), hastayım (ich bin krank).',
    beispiele: [
      { tr: 'Merhaba! Benim adım...',                  de: 'Hallo! Mein Name ist...',         audio: 'audio/merhaba_benim_adim.mp3' },
      { tr: 'Nerelisin? — Ben Almanya\'danım.',        de: 'Woher? — Ich komme aus Deutschland.', audio: 'audio/nerelisin_almanyadan.mp3' },
      { tr: 'Kaç yaşındasın? — Ben yirmi dört yaşındayım.', de: 'Wie alt? — Ich bin 24.',   audio: 'audio/kac_yas_yirmi_dort.mp3' },
      { tr: 'Nasılsın? — İyiyim, teşekkürler!',       de: 'Wie geht\'s? — Gut, danke!',      audio: 'audio/nasilsin_iyiyim.mp3' },
      { tr: 'Memnun oldum! Hoşça kal!',               de: 'Schön, dich kennenzulernen! Tschüss!', audio: 'audio/memnun_hosca_kal.mp3' },
      { tr: 'Fena değil, ya sen?',                    de: 'Nicht schlecht, und du?',          audio: 'audio/fena_degil_sen.mp3' },
      { tr: 'Hoş geldiniz!',                          de: 'Willkommen!',                      audio: 'audio/hos_geldiniz.mp3' },
      { tr: 'Hoş bulduk!',                            de: 'Danke! (Willkommen-Antwort)',      audio: 'audio/hos_bulduk.mp3' },
    ],
    nachsprech: [
      { tr: 'Nasılsın?',    audio: 'audio/nasilsin.mp3' },
      { tr: 'İyiyim, teşekkürler.', audio: 'audio/iyiyim_tesekkurler.mp3' },
      { tr: 'Fena değil',   audio: 'audio/fena_degil.mp3' },
      { tr: 'Sen?',         audio: 'audio/sen_soru.mp3' },
      { tr: 'Memnun oldum!', audio: 'audio/memnun_oldum.mp3' },
      { tr: 'Hoş geldiniz', audio: 'audio/hos_geldiniz.mp3' },
      { tr: 'Görüşürüz',    audio: 'audio/gorusuruz.mp3' },
    ],
    hoerUebung: 'Höre den vollständigen Dialog — beantworte: Name? Herkunft? Alter? Wie geht\'s?',
    miniDialog: [
      { sprecher: 'A', tr: 'Günaydın! Benim adım Lisa. Sen?',     de: 'Guten Morgen! Ich bin Lisa. Und du?' },
      { sprecher: 'B', tr: 'Ben Ahmet. Memnun oldum! Nerelisin?', de: 'Ich bin Ahmet. Freut mich! Woher kommst du?' },
      { sprecher: 'A', tr: 'Ben Almanya\'danım, Berlin\'den. Kaç yaşındasın?', de: 'Aus Deutschland, aus Berlin. Wie alt bist du?' },
      { sprecher: 'B', tr: 'Yirmi dört yaşındayım. Nasılsın?',    de: 'Ich bin 24. Wie geht\'s dir?' },
      { sprecher: 'A', tr: 'İyiyim, teşekkürler! Sen?',           de: 'Gut, danke! Und du?' },
      { sprecher: 'B', tr: 'Ben de iyiyim. Türkçen çok güzel!',   de: 'Mir auch gut. Dein Türkisch ist sehr schön!' },
      { sprecher: 'A', tr: 'Teşekkür ederim, öğreniyorum!',       de: 'Danke, ich lerne es!' },
      { sprecher: 'B', tr: 'Görüşürüz, Lisa! Güle güle!',         de: 'Bis bald, Lisa! Tschüss!' },
    ],
    anwendung: 'Führe diesen Dialog mit dir selbst vor dem Spiegel. 3 Mal. Ohne Text. Dann mit einem echten Gesprächspartner!',
    zusammenfassung: 'Du kannst dich vorstellen, begrüßen und nach Name, Herkunft, Alter und Befinden fragen. Echter Türkisch-Alltag!',
    kulturhinweis: '"Hoş geldiniz — Hoş bulduk" ist eines der schönsten türkischen Ausdruckspaare. Wenn dich jemand willkommen heißt, antwortest du immer "Hoş bulduk". Zu vergessen gilt als unhöflich.',
  },

  'Zahlen 11–100': {
    lernziel: 'Du kannst Zahlen bis 100 bilden, verstehen und beim Einkaufen nutzen.',
    woerter: [
      { tr: 'on bir',   de: 'elf (11)',         extra: 'on + bir = 10 + 1',   audio: 'audio/on_bir.mp3' },
      { tr: 'on beş',   de: 'fünfzehn (15)',    extra: 'on + beş = 10 + 5',  audio: 'audio/on_bes.mp3' },
      { tr: 'on dokuz', de: 'neunzehn (19)',    extra: 'on + dokuz = 10 + 9', audio: 'audio/on_dokuz.mp3' },
      { tr: 'yirmi',    de: 'zwanzig (20)',     extra: '',                    audio: 'audio/yirmi.mp3' },
      { tr: 'yirmi bir', de: 'einundzwanzig (21)', extra: 'yirmi + bir',    audio: 'audio/yirmi_bir.mp3' },
      { tr: 'otuz',     de: 'dreißig (30)',     extra: '',                    audio: 'audio/otuz.mp3' },
      { tr: 'kırk',     de: 'vierzig (40)',     extra: 'ı = dunkles i',       audio: 'audio/kirk.mp3' },
      { tr: 'elli',     de: 'fünfzig (50)',     extra: '',                    audio: 'audio/elli.mp3' },
      { tr: 'altmış',   de: 'sechzig (60)',     extra: '',                    audio: 'audio/altmis.mp3' },
      { tr: 'yetmiş',   de: 'siebzig (70)',     extra: '',                    audio: 'audio/yetmis.mp3' },
      { tr: 'seksen',   de: 'achtzig (80)',     extra: '',                    audio: 'audio/seksen.mp3' },
      { tr: 'doksan',   de: 'neunzig (90)',     extra: '',                    audio: 'audio/doksan.mp3' },
      { tr: 'yüz',      de: 'hundert (100)',    extra: '',                    audio: 'audio/yuz.mp3' },
      { tr: 'elli beş', de: 'fünfundfünfzig (55)', extra: 'elli + beş',     audio: 'audio/elli_bes.mp3' },
    ],
    erklaerung: '11–19: "on" + Zahl → on bir (11), on iki (12), on dokuz (19). Ab 21 einfach Zehner + Einer zusammensetzen: yirmi bir (21), otuz beş (35), kırk yedi (47). Die Zehner muss man auswendig lernen — den Rest kann man dann ableiten!',
    grammatiktipp: 'Türkische Zahlen sind vollständig regelbasiert: Zehner + Einer, kein "und" dazwischen. kırk beş = "vierzig fünf" = 45. Viel einfacher als Deutsch (fünfundvierzig)!',
    saatzbausteine: [
      'Yirmi + bir = yirmi bir (21)',
      'Otuz + beş = otuz beş (35)',
      'Elli + dokuz = elli dokuz (59)',
    ],
    beispiele: [
      { tr: 'On beş lira.',              de: '15 Lira.',                 audio: 'audio/on_bes_lira.mp3' },
      { tr: 'Yirmi üç yaşındayım.',      de: 'Ich bin 23.',              audio: 'audio/yirmi_uc_yasinday.mp3' },
      { tr: 'Otuz iki kişi.',            de: '32 Personen.',             audio: 'audio/otuz_iki_kisi.mp3' },
      { tr: 'Seksen lira.',              de: '80 Lira.',                 audio: 'audio/seksen_lira.mp3' },
      { tr: 'Yüz lira kadar.',           de: 'Ungefähr 100 Lira.',      audio: 'audio/yuz_lira.mp3' },
      { tr: 'Kırk beş numara lütfen.',   de: 'Größe 45 bitte.',         audio: 'audio/kirk_bes_numara.mp3' },
      { tr: 'Doksan dokuz!',             de: '99!',                      audio: 'audio/doksan_dokuz.mp3' },
      { tr: 'Kaç tane istiyorsunuz?',    de: 'Wie viele möchten Sie?',  audio: 'audio/kac_tane_istiyorsunuz.mp3' },
    ],
    nachsprech: [
      { tr: 'yirmi',   audio: 'audio/yirmi.mp3' },
      { tr: 'otuz',    audio: 'audio/otuz.mp3' },
      { tr: 'kırk',    audio: 'audio/kirk.mp3' },
      { tr: 'elli',    audio: 'audio/elli.mp3' },
      { tr: 'altmış',  audio: 'audio/altmis.mp3' },
      { tr: 'yetmiş',  audio: 'audio/yetmis.mp3' },
      { tr: 'seksen',  audio: 'audio/seksen.mp3' },
      { tr: 'doksan',  audio: 'audio/doksan.mp3' },
      { tr: 'yüz',     audio: 'audio/yuz.mp3' },
    ],
    hoerUebung: 'Höre eine zweistellige Zahl — schreibe sie als Ziffer auf.',
    miniDialog: [
      { sprecher: 'Verkäufer', tr: 'Bu kaç para?',              de: 'Wie viel kostet das?' },
      { sprecher: 'Kunde',     tr: 'Yirmi beş lira mı?',        de: 'Ist es 25 Lira?' },
      { sprecher: 'Verkäufer', tr: 'Hayır, otuz beş lira.',     de: 'Nein, 35 Lira.' },
      { sprecher: 'Kunde',     tr: 'Biraz pahalı. İndirim var mı?', de: 'Etwas teuer. Gibt es Rabatt?' },
      { sprecher: 'Verkäufer', tr: 'Otuz lira yapayım.',        de: 'Ich mache es für 30 Lira.' },
      { sprecher: 'Kunde',     tr: 'Tamam, alıyorum!',          de: 'OK, ich nehme es!' },
      { sprecher: 'Verkäufer', tr: 'Buyurun.',                  de: 'Bitte sehr.' },
      { sprecher: 'Kunde',     tr: 'Teşekkürler!',              de: 'Danke!' },
    ],
    anwendung: 'Zähle von 10 bis 100 in Zehnerschritten laut auf Türkisch. Dann: Nenne 5 Preise auf Türkisch.',
    zusammenfassung: 'Zahlen bis 100 = Zehner + Einer (kein "und"!). Kırk elli altmış yetmiş seksen doksan yüz — 7 Zehner auswendig lernen!',
    kulturhinweis: 'In türkischen Märkten (Pazar) wird fast immer verhandelt! "Biraz indirim olur mu?" (Kann es etwas günstiger sein?) ist ein völlig akzeptabler Satz.',
  },

  'Familienmitglieder': {
    lernziel: 'Du kannst deine Familie vorstellen und nach Familienmitgliedern fragen.',
    woerter: [
      { tr: 'anne',         de: 'Mutter',             extra: 'annem = meine Mutter',         audio: 'audio/anne.mp3' },
      { tr: 'baba',         de: 'Vater',              extra: 'babam = mein Vater',           audio: 'audio/baba.mp3' },
      { tr: 'abla',         de: 'ältere Schwester',   extra: 'ablam = meine ält. Schwester', audio: 'audio/abla.mp3' },
      { tr: 'abi',          de: 'älterer Bruder',     extra: 'abim = mein ält. Bruder',      audio: 'audio/abi.mp3' },
      { tr: 'kız kardeş',   de: 'jüngere Schwester',  extra: 'kız = Mädchen',               audio: 'audio/kiz_kardes.mp3' },
      { tr: 'erkek kardeş', de: 'jüngerer Bruder',    extra: 'erkek = Mann/Junge',           audio: 'audio/erkek_kardes.mp3' },
      { tr: 'anneanne',     de: 'Oma (mütterlich)',   extra: 'anne + anne = Mutter der Mutter', audio: 'audio/anneanne.mp3' },
      { tr: 'babaanne',     de: 'Oma (väterlich)',    extra: 'baba + anne = Mutter des Vaters', audio: 'audio/babaanne.mp3' },
      { tr: 'dede',         de: 'Opa',                extra: 'dedem = mein Opa',             audio: 'audio/dede.mp3' },
      { tr: 'kardeş',       de: 'Geschwister (allg.)', extra: 'kardeşim = mein/e Geschwister', audio: 'audio/kardes.mp3' },
      { tr: 'çocuk',        de: 'Kind',               extra: 'çocuğum = mein Kind',          audio: 'audio/cocuk.mp3' },
      { tr: 'eş',           de: 'Ehemann/-frau',      extra: 'eşim = mein Mann/meine Frau', audio: 'audio/es.mp3' },
      { tr: 'aile',         de: 'Familie',            extra: 'ailem = meine Familie',        audio: 'audio/aile.mp3' },
      { tr: 'amca',         de: 'Onkel (väterlich)',  extra: 'amcam = mein Onkel',           audio: 'audio/amca.mp3' },
    ],
    erklaerung: 'Im Türkischen unterscheidet man ob ein Geschwister älter oder jünger ist: "Abla" = ältere Schwester, "abi" = älterer Bruder. Für jüngere: "kız kardeş" (Schwester) und "erkek kardeş" (Bruder). Die Possessivendung -m/-im/-ım hängt man einfach ans Wort: anne → annem, baba → babam, dede → dedem.',
    grammatiktipp: 'Possessiv für "mein": anne + m = annem (da a-Vokal, also -m direkt). Aber: dede + m = dedem. kardeş + im = kardeşim (nach Konsonant kommt Vokal i dazu). Regel: nach Vokal → -m, nach Konsonant → -im/-ım/-um/-üm.',
    saatzbausteine: [
      'Benim [Familienmitglied]im var. → Ich habe einen/eine ...',
      'O benim [Familienmitglied]im. → Das ist mein/e ...',
      'Kaç kardeşin var? → Wie viele Geschwister hast du?',
    ],
    beispiele: [
      { tr: 'Annem ve babam İstanbul\'da.',  de: 'Meine Mutter und mein Vater sind in Istanbul.', audio: 'audio/annem_ve_babam.mp3' },
      { tr: 'Bir ablam var.',               de: 'Ich habe eine ältere Schwester.',               audio: 'audio/bir_ablam_var.mp3' },
      { tr: 'Kaç kardeşin var?',            de: 'Wie viele Geschwister hast du?',                audio: 'audio/kac_kardesin_var.mp3' },
      { tr: 'İki kardeşim var.',            de: 'Ich habe zwei Geschwister.',                    audio: 'audio/iki_kardesim_var.mp3' },
      { tr: 'Dedem çok sevimli.',           de: 'Mein Opa ist sehr liebenswert.',                audio: 'audio/dedem_cok_sevimli.mp3' },
      { tr: 'Ailem büyük değil.',           de: 'Meine Familie ist nicht groß.',                 audio: 'audio/ailem_buyuk_degil.mp3' },
      { tr: 'Abim Almanya\'da çalışıyor.',  de: 'Mein älterer Bruder arbeitet in Deutschland.',  audio: 'audio/abim_almanyada.mp3' },
      { tr: 'Kız kardeşim yok.',            de: 'Ich habe keine jüngere Schwester.',             audio: 'audio/kiz_kardesim_yok.mp3' },
    ],
    nachsprech: [
      { tr: 'anne',   audio: 'audio/anne.mp3' },
      { tr: 'baba',   audio: 'audio/baba.mp3' },
      { tr: 'abla',   audio: 'audio/abla.mp3' },
      { tr: 'abi',    audio: 'audio/abi.mp3' },
      { tr: 'kardeş', audio: 'audio/kardes.mp3' },
      { tr: 'dede',   audio: 'audio/dede.mp3' },
      { tr: 'anneanne', audio: 'audio/anneanne.mp3' },
      { tr: 'aile',   audio: 'audio/aile.mp3' },
    ],
    hoerUebung: 'Höre eine Familienbeschreibung — wie viele Familienmitglieder gibt es und wer?',
    miniDialog: [
      { sprecher: 'A', tr: 'Kaç kardeşin var?',                        de: 'Wie viele Geschwister hast du?' },
      { sprecher: 'B', tr: 'İki kardeşim var. Bir ablam, bir erkek kardeşim.', de: 'Zwei. Eine ältere Schwester und ein jüngerer Bruder.' },
      { sprecher: 'A', tr: 'Annen ve baban nerede?',                    de: 'Wo sind deine Eltern?' },
      { sprecher: 'B', tr: 'Ankara\'da. Sen ailenle birlikte mi yaşıyorsun?', de: 'In Ankara. Lebst du mit deiner Familie zusammen?' },
      { sprecher: 'A', tr: 'Hayır, tek başıma yaşıyorum.',              de: 'Nein, ich lebe alleine.' },
      { sprecher: 'B', tr: 'Aileni özlüyor musun?',                     de: 'Vermisst du deine Familie?' },
      { sprecher: 'A', tr: 'Evet, çok özlüyorum!',                     de: 'Ja, sehr!' },
      { sprecher: 'B', tr: 'Anlıyorum. Ben de ailemden uzaktayım.',     de: 'Ich verstehe. Ich bin auch weit von meiner Familie.' },
    ],
    anwendung: 'Beschreibe deine Familie laut auf Türkisch. Wer ist wer? Wie viele Personen?',
    zusammenfassung: 'Anne, baba, abla, abi, kardeş, dede, anneanne — die wichtigsten Familienwörter. Besitzendung -m/-im/-ım dranhängen!',
    kulturhinweis: 'Familie ist in der Türkei sehr zentral. Großeltern (dedeler und anneannelar) wohnen oft bei der Familie. Der wöchentliche Familienbesuch am Sonntag ist Tradition. "Aile büyükleri" (Familienälteste) genießen besonderen Respekt.',
  },

  'Farben lernen': {
    lernziel: 'Du kannst alle Grundfarben auf Türkisch nennen und beschreiben.',
    woerter: [
      { tr: 'kırmızı',    de: 'rot',             extra: 'kırmızı gül = rote Rose',      audio: 'audio/kirmizi.mp3' },
      { tr: 'mavi',       de: 'blau',            extra: 'mavi gökyüzü = blauer Himmel', audio: 'audio/mavi.mp3' },
      { tr: 'yeşil',      de: 'grün',            extra: 'yeşil ağaç = grüner Baum',     audio: 'audio/yesil.mp3' },
      { tr: 'sarı',       de: 'gelb',            extra: 'sarı güneş = gelbe Sonne',     audio: 'audio/sari.mp3' },
      { tr: 'beyaz',      de: 'weiß',            extra: 'beyaz kar = weißer Schnee',    audio: 'audio/beyaz.mp3' },
      { tr: 'siyah',      de: 'schwarz',         extra: 'siyah kedi = schwarze Katze', audio: 'audio/siyah.mp3' },
      { tr: 'turuncu',    de: 'orange',          extra: 'turunç = Bitterorange (Herkunft)', audio: 'audio/turuncu.mp3' },
      { tr: 'mor',        de: 'lila / violett',  extra: 'mor çiçek = lila Blume',       audio: 'audio/mor.mp3' },
      { tr: 'pembe',      de: 'rosa',            extra: 'pembe elbise = rosa Kleid',    audio: 'audio/pembe.mp3' },
      { tr: 'kahverengi', de: 'braun',           extra: 'kahve = Kaffee + rengi = Farbe', audio: 'audio/kahverengi.mp3' },
      { tr: 'gri',        de: 'grau',            extra: 'gri bulut = graue Wolke',      audio: 'audio/gri.mp3' },
      { tr: 'lacivert',   de: 'dunkelblau / navy', extra: 'lac = Lack (Herkunft)',     audio: 'audio/lacivert.mp3' },
      { tr: 'renk',       de: 'Farbe',           extra: 'rengi ne? = welche Farbe?',   audio: 'audio/renk.mp3' },
      { tr: 'açık',       de: 'hell',            extra: 'açık mavi = hellblau',         audio: 'audio/acik.mp3' },
    ],
    erklaerung: 'Adjektive kommen im Türkischen VOR das Nomen: "kırmızı araba" = das rote Auto. Sie verändern sich nicht (kein Geschlecht, kein Kasus bei Adjektiven!). "Rengi ne?" = Welche Farbe hat es? "Hangi renk?" = Welche Farbe? Hellere/dunklere Farbtöne: açık (hell) + Farbe, koyu (dunkel) + Farbe.',
    grammatiktipp: 'Adjektive vor dem Nomen sind unveränderlich: kırmızı araba (rotes Auto), kırmızı arabalar (rote Autos), kırmızı arabalarda (in den roten Autos) — kırmızı bleibt immer gleich!',
    saatzbausteine: [
      '[Farbe] + [Nomen] → kırmızı araba (rotes Auto)',
      'Bu [Farbe]. → Das ist [Farbe].',
      'Rengi ne? → Welche Farbe hat es?',
    ],
    beispiele: [
      { tr: 'Kırmızı araba.',         de: 'Das rote Auto.',              audio: 'audio/kirmizi_araba.mp3' },
      { tr: 'Mavi gökyüzü.',          de: 'Der blaue Himmel.',           audio: 'audio/mavi_gokyuzu.mp3' },
      { tr: 'Rengi ne?',              de: 'Welche Farbe hat es?',        audio: 'audio/rengi_ne.mp3' },
      { tr: 'Siyah ve beyaz.',        de: 'Schwarz und weiß.',           audio: 'audio/siyah_ve_beyaz.mp3' },
      { tr: 'Açık mavi lütfen.',      de: 'Hellblau bitte.',             audio: 'audio/acik_mavi.mp3' },
      { tr: 'Kahverengi gözleri var.', de: 'Er/Sie hat braune Augen.',  audio: 'audio/kahverengi_goz.mp3' },
      { tr: 'Hangi renk istersiniz?', de: 'Welche Farbe möchten Sie?',  audio: 'audio/hangi_renk.mp3' },
      { tr: 'Lacivert çok yakışıyor.', de: 'Dunkelblau steht ihm/ihr sehr gut.', audio: 'audio/lacivert_yakisiyor.mp3' },
    ],
    nachsprech: [
      { tr: 'kırmızı',    audio: 'audio/kirmizi.mp3' },
      { tr: 'mavi',       audio: 'audio/mavi.mp3' },
      { tr: 'yeşil',      audio: 'audio/yesil.mp3' },
      { tr: 'sarı',       audio: 'audio/sari.mp3' },
      { tr: 'beyaz',      audio: 'audio/beyaz.mp3' },
      { tr: 'siyah',      audio: 'audio/siyah.mp3' },
      { tr: 'turuncu',    audio: 'audio/turuncu.mp3' },
      { tr: 'mor',        audio: 'audio/mor.mp3' },
    ],
    hoerUebung: 'Höre eine Farbe — welche ist es? Dann: Welche Kombination aus Farbe + Nomen wird genannt?',
    miniDialog: [
      { sprecher: 'A', tr: 'Bu çanta hangi renk?',    de: 'Welche Farbe hat diese Tasche?' },
      { sprecher: 'B', tr: 'Kırmızı.',                de: 'Rot.' },
      { sprecher: 'A', tr: 'Mavi yok mu?',            de: 'Gibt es kein Blau?' },
      { sprecher: 'B', tr: 'Var, işte! Açık mavi.',   de: 'Doch, hier! Hellblau.' },
      { sprecher: 'A', tr: 'Kaç para?',               de: 'Wie viel kostet sie?' },
      { sprecher: 'B', tr: 'Altmış lira.',            de: '60 Lira.' },
      { sprecher: 'A', tr: 'Alıyorum, teşekkürler!', de: 'Ich nehme sie, danke!' },
      { sprecher: 'B', tr: 'Buyurun, iyi günler.',    de: 'Bitte, auf Wiedersehen.' },
    ],
    anwendung: 'Schau dich um — benenne 10 Dinge nach ihrer Farbe auf Türkisch. z.B. Kırmızı kitap, mavi kalem...',
    zusammenfassung: 'Adjektive kommen vor das Nomen, ändern sich nicht. Kırmızı mavi yeşil sarı beyaz siyah — die 6 Grundfarben zuerst!',
    kulturhinweis: 'Die türkische Flagge (al bayrak) ist rot (kırmızı) mit weißem Halbmond und Stern. Rot ist die Nationalfarbe. Beim Fußball: Galatasaray trägt rot-gelb, Fenerbahçe gelb-blau, Beşiktaş schwarz-weiß.',
  },

  'Kleidung benennen': {
    lernziel: 'Du kannst Kleidungsstücke benennen und beim Einkaufen beschreiben.',
    woerter: [
      { tr: 'tişört',    de: 'T-Shirt',          extra: 'aus dem Englischen',              audio: 'audio/tisort.mp3' },
      { tr: 'gömlek',    de: 'Hemd / Bluse',     extra: 'beyaz gömlek = weißes Hemd',     audio: 'audio/gomlek.mp3' },
      { tr: 'pantolon',  de: 'Hose',             extra: 'kot pantolon = Jeans',            audio: 'audio/pantolon.mp3' },
      { tr: 'etek',      de: 'Rock',             extra: 'uzun etek = langer Rock',         audio: 'audio/etek.mp3' },
      { tr: 'elbise',    de: 'Kleid',            extra: 'güzel elbise = schönes Kleid',   audio: 'audio/elbise.mp3' },
      { tr: 'ceket',     de: 'Jacke',            extra: 'deri ceket = Lederjacke',         audio: 'audio/ceket.mp3' },
      { tr: 'mont',      de: 'Mantel',           extra: 'kış montu = Wintermantel',        audio: 'audio/mont.mp3' },
      { tr: 'ayakkabı',  de: 'Schuhe',           extra: 'spor ayakkabı = Turnschuhe',     audio: 'audio/ayakkabi.mp3' },
      { tr: 'çanta',     de: 'Tasche',           extra: 'el çantası = Handtasche',        audio: 'audio/canta.mp3' },
      { tr: 'şapka',     de: 'Mütze / Hut',     extra: 'bere = Strickmütze',             audio: 'audio/sapka.mp3' },
      { tr: 'beden',     de: 'Größe (Kleidung)', extra: 'küçük / orta / büyük beden',    audio: 'audio/beden.mp3' },
      { tr: 'numara',    de: 'Nummer / Größe (Schuhe)', extra: 'kırk iki numara = Größe 42', audio: 'audio/numara.mp3' },
      { tr: 'orta',      de: 'mittel / M',       extra: 'orta beden = Größe M',           audio: 'audio/orta.mp3' },
      { tr: 'Deneyebilir miyim?', de: 'Kann ich es anprobieren?', extra: 'sehr nützlich!', audio: 'audio/deneyebilir_miyim.mp3' },
    ],
    erklaerung: 'Farbe + Kleidung = fertige Beschreibung: "mavi gömlek" (blaues Hemd). Größen auf Türkisch: küçük (S), orta (M), büyük (L), çok büyük (XL). Schuhgrößen: numara. "Deneyebilir miyim?" = Kann ich anprobieren? ist einer der nützlichsten Einkaufssätze.',
    grammatiktipp: '"Deneyebilir miyim?" = Kann ich? — Aufbau: dene (prüfen/ausprobieren) + -y- + ebilir (können) + miyim (Frageform ich). Die Fähigkeitsendung -ebilir/-abilir bedeutet "können".',
    saatzbausteine: [
      '[Farbe] + [Kleidung] → sarı elbise (gelbes Kleid)',
      'Bu [Kleidung] kaç para? → Was kostet dieses/r ...?',
      'Deneyebilir miyim? → Kann ich es anprobieren?',
    ],
    beispiele: [
      { tr: 'Mavi pantolon lütfen.',    de: 'Eine blaue Hose bitte.',          audio: 'audio/mavi_pantolon.mp3' },
      { tr: 'Bu kaç para?',             de: 'Was kostet das?',                 audio: 'audio/bu_kac_para.mp3' },
      { tr: 'Büyük beden var mı?',      de: 'Haben Sie Größe L?',              audio: 'audio/buyuk_beden.mp3' },
      { tr: 'Deneyebilir miyim?',       de: 'Kann ich es anprobieren?',        audio: 'audio/deneyebilir_miyim.mp3' },
      { tr: 'Kırk iki numara var mı?',  de: 'Haben Sie Größe 42?',             audio: 'audio/kirk_iki_numara.mp3' },
      { tr: 'Bu renk çok güzel.',       de: 'Diese Farbe ist sehr schön.',     audio: 'audio/bu_renk_cok_guzel.mp3' },
      { tr: 'Biraz büyük.',             de: 'Etwas zu groß.',                  audio: 'audio/biraz_buyuk.mp3' },
      { tr: 'Küçük beden var mı?',      de: 'Haben Sie eine kleinere Größe?',  audio: 'audio/kucuk_beden.mp3' },
    ],
    nachsprech: [
      { tr: 'tişört',   audio: 'audio/tisort.mp3' },
      { tr: 'gömlek',   audio: 'audio/gomlek.mp3' },
      { tr: 'pantolon', audio: 'audio/pantolon.mp3' },
      { tr: 'elbise',   audio: 'audio/elbise.mp3' },
      { tr: 'ceket',    audio: 'audio/ceket.mp3' },
      { tr: 'ayakkabı', audio: 'audio/ayakkabi.mp3' },
      { tr: 'çanta',    audio: 'audio/canta.mp3' },
      { tr: 'Deneyebilir miyim?', audio: 'audio/deneyebilir_miyim.mp3' },
    ],
    hoerUebung: 'Höre eine Beschreibung — welches Kleidungsstück in welcher Farbe und Größe?',
    miniDialog: [
      { sprecher: 'Kunde',     tr: 'Bu gömlek kaç para?',         de: 'Was kostet dieses Hemd?' },
      { sprecher: 'Verkäufer', tr: 'Yüz elli lira.',              de: '150 Lira.' },
      { sprecher: 'Kunde',     tr: 'Mavi renkte var mı?',         de: 'Haben Sie es in Blau?' },
      { sprecher: 'Verkäufer', tr: 'Evet, buyurun.',              de: 'Ja, bitte sehr.' },
      { sprecher: 'Kunde',     tr: 'Deneyebilir miyim?',         de: 'Kann ich es anprobieren?' },
      { sprecher: 'Verkäufer', tr: 'Tabii, soyunma kabini orada.', de: 'Natürlich, die Umkleidekabine ist dort.' },
      { sprecher: 'Kunde',     tr: 'Biraz büyük, orta beden var mı?', de: 'Etwas zu groß, haben Sie M?' },
      { sprecher: 'Verkäufer', tr: 'Bir dakika, bakayım.',        de: 'Einen Moment, ich schaue nach.' },
    ],
    anwendung: 'Beschreibe was du gerade trägst auf Türkisch — Farbe + Kleidungsstück + Größe.',
    zusammenfassung: 'Farbe + Kleidung = fertige Beschreibung. Bu kaç para? Deneyebilir miyim? sind deine wichtigsten Einkaufssätze!',
    kulturhinweis: 'Der Grand Bazaar (Kapalı Çarşı) in Istanbul ist einer der ältesten und größten überdachten Märkte der Welt. Feilschen (pazarlık yapmak) ist dort normal und erwartet — es gehört zur Kultur!',
  },

  'Die Uhrzeit': {
    lernziel: 'Du kannst die Uhrzeit auf Türkisch sagen und verstehen.',
    woerter: [
      { tr: 'Saat kaç?',      de: 'Wie spät ist es?',      extra: 'saat = Uhr/Stunde',              audio: 'audio/saat_kac.mp3' },
      { tr: 'Saat bir.',      de: 'Es ist ein Uhr.',       extra: '',                               audio: 'audio/saat_bir.mp3' },
      { tr: 'Saat iki.',      de: 'Es ist zwei Uhr.',      extra: '',                               audio: 'audio/saat_iki.mp3' },
      { tr: 'buçuk',          de: 'halb',                  extra: 'saat iki buçuk = halb drei',     audio: 'audio/bucuk.mp3' },
      { tr: 'çeyrek geçe',    de: 'Viertel nach',          extra: 'ikiyi çeyrek geçe = Viertel nach zwei', audio: 'audio/ceyrek_gece.mp3' },
      { tr: 'çeyrek var',     de: 'Viertel vor',           extra: 'üçe çeyrek var = Viertel vor drei', audio: 'audio/ceyrek_var.mp3' },
      { tr: 'sabah',          de: 'Morgen / morgens',      extra: 'sabah sekiz = 8 Uhr morgens',   audio: 'audio/sabah.mp3' },
      { tr: 'öğle',           de: 'Mittag',                extra: 'öğle on iki = 12 Uhr mittags',  audio: 'audio/ogle.mp3' },
      { tr: 'öğleden sonra',  de: 'nachmittags',           extra: 'öğleden sonra üç = 15 Uhr',    audio: 'audio/ogleden_sonra.mp3' },
      { tr: 'akşam',          de: 'Abend / abends',        extra: 'akşam altı = 18 Uhr',           audio: 'audio/aksam.mp3' },
      { tr: 'gece',           de: 'Nacht / nachts',        extra: 'gece yarısı = Mitternacht',     audio: 'audio/gece.mp3' },
      { tr: 'dakika',         de: 'Minute',                extra: 'on dakika = zehn Minuten',      audio: 'audio/dakika.mp3' },
      { tr: 'Saat kaçta?',    de: 'Um wie viel Uhr?',      extra: '-ta/-te = um (Uhrzeit)',        audio: 'audio/saat_kacta.mp3' },
      { tr: 'buluşmak',       de: 'sich treffen',          extra: 'nerede buluşalım? = wo treffen wir uns?', audio: 'audio/bulusmak.mp3' },
    ],
    erklaerung: 'Volle Stunde: "Saat üç." (Es ist drei Uhr). Halb: "Saat üç buçuk." (Es ist halb vier — Achtung: üç buçuk = halb vier, nicht halb drei!). Für Uhrzeiten "um wieviel Uhr": saat + -te/-ta: "Saat ikide." (Um zwei Uhr). Für "nach": "[Stunde]yi/yı beş geçiyor" = 5 nach.',
    grammatiktipp: '"Um X Uhr" = Saat X + -de/-da: "saat ikide" (um zwei Uhr). "Saat" selbst kann auch "Uhr" als Gerät bedeuten: "Saatin var mı?" = Hast du eine Uhr?',
    saatzbausteine: [
      'Saat kaç? → Wie spät ist es?',
      'Saat [Zahl]. → Es ist [Zahl] Uhr.',
      'Saat [Zahl] buçuk. → Halb [Zahl+1].',
      'Saat kaçta? → Um wie viel Uhr?',
    ],
    beispiele: [
      { tr: 'Saat kaç?',              de: 'Wie spät ist es?',               audio: 'audio/saat_kac.mp3' },
      { tr: 'Saat dört.',             de: 'Es ist vier Uhr.',               audio: 'audio/saat_dort.mp3' },
      { tr: 'Saat yedi buçuk.',       de: 'Es ist halb acht.',              audio: 'audio/saat_yedi_bucuk.mp3' },
      { tr: 'Saat kaçta buluşalım?',  de: 'Um wie viel Uhr treffen wir uns?', audio: 'audio/saat_kacta_bulusalim.mp3' },
      { tr: 'Saat üçte buluşalım.',   de: 'Lass uns um drei Uhr treffen.', audio: 'audio/saat_ucte_bulusalim.mp3' },
      { tr: 'Akşam sekizde.',         de: 'Um acht Uhr abends.',            audio: 'audio/aksam_sekizde.mp3' },
      { tr: 'Sabah çok erken.',       de: 'Morgens sehr früh.',             audio: 'audio/sabah_cok_erken.mp3' },
      { tr: 'Gece yarısı.',           de: 'Mitternacht.',                   audio: 'audio/gece_yarisi.mp3' },
    ],
    nachsprech: [
      { tr: 'Saat kaç?',       audio: 'audio/saat_kac.mp3' },
      { tr: 'Saat bir.',       audio: 'audio/saat_bir.mp3' },
      { tr: 'Saat iki buçuk.', audio: 'audio/saat_iki_bucuk.mp3' },
      { tr: 'sabah',           audio: 'audio/sabah.mp3' },
      { tr: 'akşam',           audio: 'audio/aksam.mp3' },
      { tr: 'gece',            audio: 'audio/gece.mp3' },
      { tr: 'dakika',          audio: 'audio/dakika.mp3' },
      { tr: 'Saat kaçta?',     audio: 'audio/saat_kacta.mp3' },
    ],
    hoerUebung: 'Höre eine Uhrzeit — schreibe sie als Zahl auf (z.B. 14:30).',
    miniDialog: [
      { sprecher: 'A', tr: 'Saat kaç?',                       de: 'Wie spät ist es?' },
      { sprecher: 'B', tr: 'Saat on bir.',                    de: 'Es ist elf Uhr.' },
      { sprecher: 'A', tr: 'Saat kaçta buluşuyoruz?',         de: 'Um wie viel Uhr treffen wir uns?' },
      { sprecher: 'B', tr: 'Saat ikide. Öğleden sonra.',      de: 'Um zwei Uhr. Nachmittags.' },
      { sprecher: 'A', tr: 'Nerede?',                         de: 'Wo?' },
      { sprecher: 'B', tr: 'Kafede. Beş dakika geç gelebilirim.', de: 'Im Café. Ich komme vielleicht 5 Minuten zu spät.' },
      { sprecher: 'A', tr: 'Sorun değil, beklerim.',          de: 'Kein Problem, ich warte.' },
      { sprecher: 'B', tr: 'Görüşürüz!',                     de: 'Bis dann!' },
    ],
    anwendung: 'Schau auf die Uhr — sag die Uhrzeit auf Türkisch. Übe morgens, mittags und abends.',
    zusammenfassung: 'Saat kaç? = Wie spät ist es? Saat + Zahl = fertig. Buçuk = halb. Das reicht für den Alltag!',
    kulturhinweis: 'In der Türkei gilt "türkische Zeit" (Türk saati) — man erscheint oft 15-30 Minuten später als vereinbart. Dies ist kulturell akzeptiert und kein Affront. Bei offiziellen Terminen wird allerdings Pünktlichkeit erwartet.',
  },

  'Datum & Wochentage': {
    lernziel: 'Du kannst Wochentage und das Datum nennen und nach dem Datum fragen.',
    woerter: [
      { tr: 'Pazartesi',   de: 'Montag',            extra: 'pazar + tesi = nach dem Sonntag', audio: 'audio/pazartesi.mp3' },
      { tr: 'Salı',        de: 'Dienstag',          extra: '',                               audio: 'audio/sali.mp3' },
      { tr: 'Çarşamba',    de: 'Mittwoch',          extra: 'aus dem Persischen',             audio: 'audio/carsamba.mp3' },
      { tr: 'Perşembe',    de: 'Donnerstag',        extra: 'aus dem Persischen',             audio: 'audio/persembe.mp3' },
      { tr: 'Cuma',        de: 'Freitag',           extra: 'heiliger Tag im Islam',          audio: 'audio/cuma.mp3' },
      { tr: 'Cumartesi',   de: 'Samstag',           extra: 'cuma + ertesi = nach dem Freitag', audio: 'audio/cumartesi.mp3' },
      { tr: 'Pazar',       de: 'Sonntag',           extra: 'pazar = auch: Markt/Basar',     audio: 'audio/pazar.mp3' },
      { tr: 'bugün',       de: 'heute',             extra: 'bu + gün = dieser Tag',         audio: 'audio/bugun.mp3' },
      { tr: 'yarın',       de: 'morgen',            extra: '',                               audio: 'audio/yarin.mp3' },
      { tr: 'dün',         de: 'gestern',           extra: '',                               audio: 'audio/dun.mp3' },
      { tr: 'hafta',       de: 'Woche',             extra: 'bu hafta = diese Woche',        audio: 'audio/hafta.mp3' },
      { tr: 'hafta sonu',  de: 'Wochenende',        extra: 'hafta + sonu = Wochenende',     audio: 'audio/hafta_sonu.mp3' },
      { tr: 'gün',         de: 'Tag',               extra: 'her gün = jeden Tag',           audio: 'audio/gun.mp3' },
      { tr: 'tarih',       de: 'Datum',             extra: 'tarih ne? = welches Datum?',    audio: 'audio/tarih.mp3' },
    ],
    erklaerung: '"Bugün ne günü?" = Was ist heute für ein Tag? "Bugün Pazartesi." = Heute ist Montag. Datum: "[Tag]. [Monat] [Jahr]" — zum Beispiel "On beş Mart iki bin yirmi altı." = 15. März 2026. Der Wochenbeginn ist in der Türkei Montag, wie in Deutschland. Cuma (Freitag) ist der heilige Tag im Islam: Freitagsgebet (Cuma namazı) ist sehr wichtig.',
    grammatiktipp: 'Wochentag + -de/-da = an diesem Tag: Pazartesiye (am Montag), Cumada (am Freitag). Bugün Pazartesi = "Heute (ist) Montag" — kein "ist" nötig!',
    saatzbausteine: [
      'Bugün ne günü? → Was ist heute für ein Tag?',
      'Bugün [Wochentag]. → Heute ist [Tag].',
      'Yarın [Wochentag]. → Morgen ist [Tag].',
    ],
    beispiele: [
      { tr: 'Bugün Çarşamba.',               de: 'Heute ist Mittwoch.',                  audio: 'audio/bugun_carsamba.mp3' },
      { tr: 'Yarın Perşembe.',               de: 'Morgen ist Donnerstag.',               audio: 'audio/yarin_persembe.mp3' },
      { tr: 'Dün Pazartesiydi.',             de: 'Gestern war Montag.',                  audio: 'audio/dun_pazartesiydi.mp3' },
      { tr: 'Bu hafta sonu ne yapıyorsun?',  de: 'Was machst du dieses Wochenende?',     audio: 'audio/bu_hafta_sonu.mp3' },
      { tr: 'Her gün Türkçe öğreniyorum.',   de: 'Jeden Tag lerne ich Türkisch.',        audio: 'audio/her_gun_turkce.mp3' },
      { tr: 'Cuma günü buluşalım.',          de: 'Lass uns Freitag treffen.',            audio: 'audio/cuma_gunu_bulusalim.mp3' },
      { tr: 'Bugün tarih nedir?',            de: 'Welches Datum ist heute?',             audio: 'audio/bugun_tarih_nedir.mp3' },
      { tr: 'Hafta sonu çalışmıyorum.',      de: 'Am Wochenende arbeite ich nicht.',     audio: 'audio/hafta_sonu_calismiyorum.mp3' },
    ],
    nachsprech: [
      { tr: 'Pazartesi',  audio: 'audio/pazartesi.mp3' },
      { tr: 'Salı',       audio: 'audio/sali.mp3' },
      { tr: 'Çarşamba',   audio: 'audio/carsamba.mp3' },
      { tr: 'Perşembe',   audio: 'audio/persembe.mp3' },
      { tr: 'Cuma',       audio: 'audio/cuma.mp3' },
      { tr: 'Cumartesi',  audio: 'audio/cumartesi.mp3' },
      { tr: 'Pazar',      audio: 'audio/pazar.mp3' },
      { tr: 'bugün',      audio: 'audio/bugun.mp3' },
    ],
    hoerUebung: 'Höre einen Tag — welcher Wochentag ist es? Dann: Was ist gestern/heute/morgen?',
    miniDialog: [
      { sprecher: 'A', tr: 'Bugün ne günü?',               de: 'Was ist heute für ein Tag?' },
      { sprecher: 'B', tr: 'Bugün Cuma.',                  de: 'Heute ist Freitag.' },
      { sprecher: 'A', tr: 'Yarın ne?',                    de: 'Was ist morgen?' },
      { sprecher: 'B', tr: 'Yarın Cumartesi. Hafta sonu!', de: 'Morgen Samstag. Wochenende!' },
      { sprecher: 'A', tr: 'Harika! Ne yapıyorsun?',       de: 'Toll! Was machst du?' },
      { sprecher: 'B', tr: 'Ailemi ziyaret edeceğim.',     de: 'Ich werde meine Familie besuchen.' },
      { sprecher: 'A', tr: 'Çok güzel. Ben de pazar günü çıkıyorum.', de: 'Sehr schön. Ich fahre auch Sonntag weg.' },
      { sprecher: 'B', tr: 'Görüşürüz Pazartesi!',         de: 'Bis Montag!' },
    ],
    anwendung: 'Sag heute laut welcher Tag es ist — was du gestern gemacht hast und was du morgen machen wirst.',
    zusammenfassung: '7 Wochentage gelernt. Bugün / yarın / dün — drei wichtige Zeitwörter. Cuma = Freitag hat besondere Bedeutung!',
    kulturhinweis: 'Der Sonntag (Pazar) ist in der Türkei zwar Ruhetag, aber das Freitagsgebet (Cuma namazı) ist für muslimische Männer besonders wichtig. Viele Geschäfte schließen kurz um die Mittagszeit am Freitag.',
  },

  'Monate & Jahreszeiten': {
    lernziel: 'Du kennst alle 12 Monate und 4 Jahreszeiten auf Türkisch.',
    woerter: [
      { tr: 'Ocak',      de: 'Januar',     extra: 'soğuk = kalt',          audio: 'audio/ocak.mp3' },
      { tr: 'Şubat',     de: 'Februar',    extra: '',                       audio: 'audio/subat.mp3' },
      { tr: 'Mart',      de: 'März',       extra: 'ilkbahar başlar',        audio: 'audio/mart.mp3' },
      { tr: 'Nisan',     de: 'April',      extra: 'yağmur = Regen',        audio: 'audio/nisan.mp3' },
      { tr: 'Mayıs',     de: 'Mai',        extra: 'çiçekler = Blumen',     audio: 'audio/mayis.mp3' },
      { tr: 'Haziran',   de: 'Juni',       extra: 'yaz başlar',            audio: 'audio/haziran.mp3' },
      { tr: 'Temmuz',    de: 'Juli',       extra: 'çok sıcak! sehr heiß!', audio: 'audio/temmuz.mp3' },
      { tr: 'Ağustos',   de: 'August',     extra: 'tatil = Urlaub',        audio: 'audio/agustos.mp3' },
      { tr: 'Eylül',     de: 'September',  extra: 'okul başlar = Schulbeginn', audio: 'audio/eylul.mp3' },
      { tr: 'Ekim',      de: 'Oktober',    extra: 'sonbahar',               audio: 'audio/ekim.mp3' },
      { tr: 'Kasım',     de: 'November',   extra: 'yapraklar dökülür',     audio: 'audio/kasim.mp3' },
      { tr: 'Aralık',    de: 'Dezember',   extra: 'kış = Winter',          audio: 'audio/aralik.mp3' },
      { tr: 'ilkbahar',  de: 'Frühling',   extra: 'März–Mai',              audio: 'audio/ilkbahar.mp3' },
      { tr: 'yaz',       de: 'Sommer',     extra: 'Juni–August',           audio: 'audio/yaz.mp3' },
      { tr: 'sonbahar',  de: 'Herbst',     extra: 'September–November',    audio: 'audio/sonbahar.mp3' },
    ],
    erklaerung: 'Jahreszeiten: ilkbahar (Frühling), yaz (Sommer), sonbahar (Herbst), kış (Winter). Für "im Monat/Jahr": Monat + -\'ta/-\'de/-\'da usw. je nach Vokalharmonie: "Ocak\'ta" (im Januar), "Haziran\'da" (im Juni). Die Monate auf Türkisch ähneln nicht den deutschen — man muss sie auswendig lernen.',
    grammatiktipp: '"Im Monat X" = Monat + Apostroph + Lokalsuffix: Temmuz + \'da = Temmuz\'da (im Juli). Das Apostroph trennt Eigenname von Suffix. Eylül + \'de = Eylül\'de (im September).',
    saatzbausteine: [
      'Hangi ayda doğdun? → In welchem Monat bist du geboren?',
      '[Monat]\'da/\'de doğdum. → Ich bin im [Monat] geboren.',
      'Şu an hangi mevsim? → Welche Jahreszeit ist gerade?',
    ],
    beispiele: [
      { tr: 'Temmuz\'da doğdum.',            de: 'Ich bin im Juli geboren.',           audio: 'audio/temuzda_dogdum.mp3' },
      { tr: 'Ocak\'ta çok soğuk.',           de: 'Im Januar ist es sehr kalt.',        audio: 'audio/ocakta_cok_soguk.mp3' },
      { tr: 'Yaz tatili Haziran\'da başlar.', de: 'Die Sommerferien beginnen im Juni.', audio: 'audio/yaz_tatili_haziran.mp3' },
      { tr: 'İlkbahar çok güzel.',           de: 'Der Frühling ist sehr schön.',       audio: 'audio/ilkbahar_cok_guzel.mp3' },
      { tr: 'Kışın çok kar yağıyor.',        de: 'Im Winter schneit es viel.',         audio: 'audio/kisin_kar_yagiyor.mp3' },
      { tr: 'En sevdiğim ay Mayıs.',         de: 'Mein Lieblingsmonat ist Mai.',       audio: 'audio/en_sevdigim_ay.mp3' },
      { tr: 'Sonbaharda hava serin olur.',   de: 'Im Herbst wird es kühl.',            audio: 'audio/sonbaharda_serin.mp3' },
      { tr: 'Ağustos\'ta denize gidiyoruz.', de: 'Im August fahren wir ans Meer.',     audio: 'audio/agustosta_denize.mp3' },
    ],
    nachsprech: [
      { tr: 'Ocak',     audio: 'audio/ocak.mp3' },
      { tr: 'Mart',     audio: 'audio/mart.mp3' },
      { tr: 'Haziran',  audio: 'audio/haziran.mp3' },
      { tr: 'Temmuz',   audio: 'audio/temmuz.mp3' },
      { tr: 'Eylül',    audio: 'audio/eylul.mp3' },
      { tr: 'Aralık',   audio: 'audio/aralik.mp3' },
      { tr: 'ilkbahar', audio: 'audio/ilkbahar.mp3' },
      { tr: 'yaz',      audio: 'audio/yaz.mp3' },
    ],
    hoerUebung: 'Höre einen Monat — welcher ist es? Dann: Zu welcher Jahreszeit gehört er?',
    miniDialog: [
      { sprecher: 'A', tr: 'Hangi ayda doğdun?',     de: 'In welchem Monat bist du geboren?' },
      { sprecher: 'B', tr: 'Nisan\'da. Sen?',         de: 'Im April. Und du?' },
      { sprecher: 'A', tr: 'Ben Aralık\'ta.',         de: 'Ich im Dezember.' },
      { sprecher: 'B', tr: 'Kış çocuğusun!',          de: 'Du bist ein Winterkind!' },
      { sprecher: 'A', tr: 'Evet! En sevdiğin mevsim ne?', de: 'Ja! Was ist deine Lieblingsjahreszeit?' },
      { sprecher: 'B', tr: 'İlkbahar! Çiçekler çok güzel.', de: 'Frühling! Die Blumen sind sehr schön.' },
      { sprecher: 'A', tr: 'Ben yazı seviyorum.',     de: 'Ich mag den Sommer.' },
      { sprecher: 'B', tr: 'Denize gidiyorsun muhtemelen!', de: 'Du gehst wahrscheinlich ans Meer!' },
    ],
    anwendung: 'Sag deinen Geburtstagsmonat auf Türkisch. Dann nenne alle 12 Monate auswendig in der richtigen Reihenfolge.',
    zusammenfassung: '12 Monate + 4 Jahreszeiten gelernt. Monat + \'da/\'de = im Monat. Ocak bis Aralık — auswendig lernen!',
    kulturhinweis: 'Der türkische Sommer (Temmuz–Ağustos) ist für Touristen Hochsaison. Türken selbst verbringen die Ferien oft in Küstenorten (Bodrum, Antalya, Çeşme). Der Schulstart (Eylül) ist ein nationales Ereignis.',
  },

  'Lebensmittel & Zutaten': {
    lernziel: 'Du kannst Lebensmittel benennen, einkaufen und nach Zutaten fragen.',
    woerter: [
      { tr: 'ekmek',    de: 'Brot',          extra: 'taze ekmek = frisches Brot',   audio: 'audio/ekmek.mp3' },
      { tr: 'süt',      de: 'Milch',         extra: 'tam yağlı süt = Vollmilch',    audio: 'audio/sut.mp3' },
      { tr: 'peynir',   de: 'Käse',          extra: 'beyaz peynir = Weißkäse (Feta)', audio: 'audio/peynir.mp3' },
      { tr: 'yumurta',  de: 'Ei',            extra: 'altı yumurta = sechs Eier',    audio: 'audio/yumurta.mp3' },
      { tr: 'et',       de: 'Fleisch',       extra: 'kıyma = Hackfleisch',          audio: 'audio/et.mp3' },
      { tr: 'tavuk',    de: 'Hühnchen',      extra: 'tavuk göğsü = Hühnerbrust',   audio: 'audio/tavuk.mp3' },
      { tr: 'balık',    de: 'Fisch',         extra: 'taze balık = frischer Fisch', audio: 'audio/balik.mp3' },
      { tr: 'domates',  de: 'Tomate',        extra: 'bir kilo domates = 1 kg Tomaten', audio: 'audio/domates.mp3' },
      { tr: 'elma',     de: 'Apfel',         extra: 'kırmızı elma = roter Apfel',  audio: 'audio/elma.mp3' },
      { tr: 'pilav',    de: 'Reis / Pilaw',  extra: 'Grundnahrungsmittel',         audio: 'audio/pilav.mp3' },
      { tr: 'şeker',    de: 'Zucker',        extra: 'şekersiz = ohne Zucker',       audio: 'audio/seker.mp3' },
      { tr: 'zeytinyağı', de: 'Olivenöl',   extra: 'zeytin = Olive, yağ = Öl',    audio: 'audio/zeytinyagi.mp3' },
      { tr: 'soğan',    de: 'Zwiebel',       extra: 'kırmızı soğan = rote Zwiebel', audio: 'audio/sogan.mp3' },
      { tr: 'sarımsak', de: 'Knoblauch',     extra: 'sarı = gelb + -msak',         audio: 'audio/sarimsak.mp3' },
    ],
    erklaerung: 'Im türkischen Markt fragt man "... var mı?" (Haben Sie ...?) oder "... istiyorum." (Ich möchte ...). Mengen: "bir kilo" (ein Kilo), "yarım kilo" (ein halbes Kilo), "bir paket" (ein Paket), "iki demet" (zwei Bund). Türkisches Frühstück (kahvaltı) ist berühmt: Ekmek, peynir, yumurta, domates, zeytin.',
    grammatiktipp: '"İstiyorum" = ich möchte. Aufbau: iste- (wollen/möchten) + -iyor (Präsens) + -um (ich). "[Etwas] istiyorum" = Ich möchte [etwas]. Diese Konstruktion ist sehr nützlich!',
    saatzbausteine: [
      'Bir kilo [Lebensmittel] lütfen. → Ein Kilo ... bitte.',
      'Yarım kilo → ein halbes Kilo',
      '[Lebensmittel] var mı? → Haben Sie ...?',
    ],
    beispiele: [
      { tr: 'Bir kilo domates lütfen.',   de: 'Ein Kilo Tomaten bitte.',          audio: 'audio/bir_kilo_domates.mp3' },
      { tr: 'Peynir var mı?',            de: 'Haben Sie Käse?',                  audio: 'audio/peynir_var_mi.mp3' },
      { tr: 'Yarım kilo et lütfen.',      de: 'Ein halbes Kilo Fleisch bitte.',   audio: 'audio/yarim_kilo_et.mp3' },
      { tr: 'Ne kadar?',                 de: 'Wie viel kostet das?',             audio: 'audio/ne_kadar.mp3' },
      { tr: 'Taze ekmek var mı?',        de: 'Haben Sie frisches Brot?',         audio: 'audio/taze_ekmek.mp3' },
      { tr: 'Bir paket süt lütfen.',     de: 'Ein Paket Milch bitte.',           audio: 'audio/bir_paket_sut.mp3' },
      { tr: 'Zeytinyağı nerede?',        de: 'Wo ist das Olivenöl?',            audio: 'audio/zeytinyagi_nerede.mp3' },
      { tr: 'Bu taze mi?',               de: 'Ist das frisch?',                  audio: 'audio/bu_taze_mi.mp3' },
    ],
    nachsprech: [
      { tr: 'ekmek',   audio: 'audio/ekmek.mp3' },
      { tr: 'süt',     audio: 'audio/sut.mp3' },
      { tr: 'peynir',  audio: 'audio/peynir.mp3' },
      { tr: 'yumurta', audio: 'audio/yumurta.mp3' },
      { tr: 'et',      audio: 'audio/et.mp3' },
      { tr: 'tavuk',   audio: 'audio/tavuk.mp3' },
      { tr: 'domates', audio: 'audio/domates.mp3' },
      { tr: 'elma',    audio: 'audio/elma.mp3' },
    ],
    hoerUebung: 'Höre eine Einkaufsliste — was wird gekauft und in welcher Menge?',
    miniDialog: [
      { sprecher: 'Kunde',     tr: 'Merhaba! Bir kilo domates var mı?', de: 'Hallo! Haben Sie ein Kilo Tomaten?' },
      { sprecher: 'Verkäufer', tr: 'Var, tabii. Taze bugün geldi.',     de: 'Ja, natürlich. Heute frisch gekommen.' },
      { sprecher: 'Kunde',     tr: 'Harika! Yarım kilo peynir de lütfen.', de: 'Toll! Und ein halbes Kilo Käse bitte.' },
      { sprecher: 'Verkäufer', tr: 'Beyaz peynir mi?',                  de: 'Weißkäse?' },
      { sprecher: 'Kunde',     tr: 'Evet. Ve bir tane ekmek.',          de: 'Ja. Und ein Brot.' },
      { sprecher: 'Verkäufer', tr: 'Tamam. Başka bir şey?',             de: 'Alles klar. Sonst noch etwas?' },
      { sprecher: 'Kunde',     tr: 'Hayır, bu kadar. Ne kadar?',        de: 'Nein, das ist alles. Wie viel?' },
      { sprecher: 'Verkäufer', tr: 'Kırk beş lira.',                    de: '45 Lira.' },
    ],
    anwendung: 'Schreib eine Einkaufsliste auf Türkisch — 7 Lebensmittel die du diese Woche brauchst, mit Mengenangaben.',
    zusammenfassung: 'Ekmek süt peynir yumurta et tavuk balık — die 7 Basis-Lebensmittel. Bir kilo + lütfen = du kannst einkaufen!',
    kulturhinweis: 'Das türkische Frühstück (kahvaltı) ist legendär: Weißkäse (beyaz peynir), Oliven (zeytin), Tomaten, Gurken, Eier und viel Brot. Çay darf nicht fehlen! Sonntags-Brunch ist in vielen türkischen Familien ein Ritual.',
  },

  'Essen bestellen': {
    lernziel: 'Du kannst im Restaurant ein vollständiges Essen bestellen.',
    woerter: [
      { tr: 'menü',              de: 'Speisekarte',         extra: 'menü var mı? = Haben Sie eine Karte?', audio: 'audio/menu.mp3' },
      { tr: 'çorba',             de: 'Suppe',               extra: 'mercimek çorbası = Linsensuppe',       audio: 'audio/corba.mp3' },
      { tr: 'salata',            de: 'Salat',               extra: 'çoban salatası = Hirtensalat',        audio: 'audio/salata.mp3' },
      { tr: 'kebap',             de: 'Kebab',               extra: 'Adana/Urfa kebabı = scharf/mild',     audio: 'audio/kebap.mp3' },
      { tr: 'pilav',             de: 'Reis / Pilaw',        extra: 'pilav üstü = über Reis',             audio: 'audio/pilav.mp3' },
      { tr: 'tatlı',             de: 'Dessert / süß',       extra: 'tatlı ne var? = was gibt\'s zum Nachtisch?', audio: 'audio/tatli.mp3' },
      { tr: 'içecek',            de: 'Getränk',             extra: 'ne içersiniz? = was trinken Sie?',   audio: 'audio/icecek.mp3' },
      { tr: 'Ne istersiniz?',    de: 'Was möchten Sie?',    extra: 'der Kellner fragt',                  audio: 'audio/ne_istersiniz.mp3' },
      { tr: 'Ne tavsiye edersiniz?', de: 'Was empfehlen Sie?', extra: 'sehr höflich',                  audio: 'audio/ne_tavsiye_edersiniz.mp3' },
      { tr: 'afiyet olsun',      de: 'Guten Appetit',       extra: 'wörtl.: möge es gut sein',          audio: 'audio/afiyet_olsun.mp3' },
      { tr: 'elinize sağlık',    de: 'Danke für das Essen', extra: 'wörtl.: Gesundheit an Ihre Hände',  audio: 'audio/elinize_saglik.mp3' },
      { tr: 'hesap',             de: 'Rechnung',            extra: 'hesap lütfen = Rechnung bitte',      audio: 'audio/hesap.mp3' },
      { tr: 'servis ücreti',     de: 'Servicegebühr',       extra: 'manchmal inbegriffen',               audio: 'audio/servis_ucreti.mp3' },
    ],
    erklaerung: '"Menü var mı?" = Haben Sie eine Speisekarte? "Ne tavsiye edersiniz?" = Was empfehlen Sie? "Hesap lütfen." = Die Rechnung bitte. In türkischen Restaurants sagt man nach dem Essen "Elinize sağlık" zum Koch/zur Köchin — das bedeutet "Gesundheit an Ihre Hände" und ist ein großes Kompliment.',
    grammatiktipp: '"İstiyorum" (ich möchte) vs "alıyorum" (ich nehme/kaufe). Im Restaurant: "Bir çorba alıyorum" oder "Bir çorba istiyorum" — beides korrekt. "Lütfen" ans Ende.',
    saatzbausteine: [
      'Bir [Gericht] lütfen. → Ein/e ... bitte.',
      'Ne tavsiye edersiniz? → Was empfehlen Sie?',
      'Hesap lütfen. → Die Rechnung bitte.',
      'Afiyet olsun! → Guten Appetit!',
    ],
    beispiele: [
      { tr: 'Bir çorba lütfen.',             de: 'Eine Suppe bitte.',              audio: 'audio/bir_corba_lutfen.mp3' },
      { tr: 'Ne tavsiye edersiniz?',         de: 'Was empfehlen Sie?',             audio: 'audio/ne_tavsiye_edersiniz.mp3' },
      { tr: 'Kebap ve salata lütfen.',       de: 'Kebab und Salat bitte.',         audio: 'audio/kebap_ve_salata.mp3' },
      { tr: 'Afiyet olsun!',                 de: 'Guten Appetit!',                 audio: 'audio/afiyet_olsun.mp3' },
      { tr: 'Elinize sağlık!',               de: 'Danke für das Essen!',           audio: 'audio/elinize_saglik.mp3' },
      { tr: 'Hesap lütfen.',                 de: 'Die Rechnung bitte.',            audio: 'audio/hesap_lutfen.mp3' },
      { tr: 'Vejetaryen yemek var mı?',      de: 'Haben Sie vegetarische Gerichte?', audio: 'audio/vejetaryen_yemek.mp3' },
      { tr: 'Bu çok lezzetli!',              de: 'Das ist sehr lecker!',           audio: 'audio/bu_cok_lezzetli.mp3' },
    ],
    nachsprech: [
      { tr: 'menü',              audio: 'audio/menu.mp3' },
      { tr: 'çorba',             audio: 'audio/corba.mp3' },
      { tr: 'salata',            audio: 'audio/salata.mp3' },
      { tr: 'kebap',             audio: 'audio/kebap.mp3' },
      { tr: 'tatlı',             audio: 'audio/tatli.mp3' },
      { tr: 'Afiyet olsun!',     audio: 'audio/afiyet_olsun.mp3' },
      { tr: 'Ne tavsiye edersiniz?', audio: 'audio/ne_tavsiye_edersiniz.mp3' },
      { tr: 'Elinize sağlık',    audio: 'audio/elinize_saglik.mp3' },
    ],
    hoerUebung: 'Höre eine Bestellung — was wird bestellt und was kostet es?',
    miniDialog: [
      { sprecher: 'Kellner', tr: 'İyi akşamlar! Ne istersiniz?',         de: 'Guten Abend! Was möchten Sie?' },
      { sprecher: 'Gast',    tr: 'Menü var mı?',                         de: 'Haben Sie eine Speisekarte?' },
      { sprecher: 'Kellner', tr: 'Buyurun efendim.',                     de: 'Bitte sehr.' },
      { sprecher: 'Gast',    tr: 'Ne tavsiye edersiniz?',                de: 'Was empfehlen Sie?' },
      { sprecher: 'Kellner', tr: 'Adana kebabımız çok lezzetli.',        de: 'Unser Adana-Kebab ist sehr lecker.' },
      { sprecher: 'Gast',    tr: 'Tamam! Bir çorba, bir Adana kebabı lütfen.', de: 'OK! Eine Suppe, einen Adana-Kebab bitte.' },
      { sprecher: 'Kellner', tr: 'Afiyet olsun!',                        de: 'Guten Appetit!' },
      { sprecher: 'Gast',    tr: 'Çok lezzetliydi! Hesap lütfen.',       de: 'Es war sehr lecker! Rechnung bitte.' },
    ],
    anwendung: 'Bestelle dein Lieblingsessen gedanklich auf Türkisch — komplett mit Vorspeise, Hauptgericht und Getränk. Laut sprechen!',
    zusammenfassung: 'Çorba salata kebap pilav tatlı — die wichtigsten Gerichte. Ne istersiniz? und Hesap lütfen — mehr brauchst du nicht!',
    kulturhinweis: '"Elinize sağlık" (Gesundheit an Ihre Hände) ist das schönste Kompliment an eine Koch. Das Rezipient antwortet: "Afiyet olsun" oder "Sağlıkla yiyin". In der Türkei essen Familien fast täglich zusammen — Essen verbindet.',
  },

  'Wetter beschreiben': {
    lernziel: 'Du kannst das Wetter beschreiben und nach dem Wetter fragen.',
    woerter: [
      { tr: 'Hava nasıl?', de: 'Wie ist das Wetter?',   extra: 'hava = Wetter/Luft',        audio: 'audio/hava_nasil.mp3' },
      { tr: 'güneşli',     de: 'sonnig',                extra: 'güneş = Sonne',              audio: 'audio/gunесli.mp3' },
      { tr: 'yağmurlu',    de: 'regnerisch',            extra: 'yağmur = Regen',             audio: 'audio/yagmurlu.mp3' },
      { tr: 'bulutlu',     de: 'bewölkt',               extra: 'bulut = Wolke',              audio: 'audio/bulutlu.mp3' },
      { tr: 'karlı',       de: 'schneeig',              extra: 'kar = Schnee',               audio: 'audio/karli.mp3' },
      { tr: 'sıcak',       de: 'heiß / warm',           extra: 'çok sıcak = sehr heiß',      audio: 'audio/sicak.mp3' },
      { tr: 'soğuk',       de: 'kalt',                  extra: 'çok soğuk = sehr kalt',      audio: 'audio/soguk.mp3' },
      { tr: 'serin',       de: 'kühl',                  extra: 'biraz serin = etwas kühl',   audio: 'audio/serin.mp3' },
      { tr: 'rüzgarlı',    de: 'windig',                extra: 'rüzgar = Wind',              audio: 'audio/ruzgarli.mp3' },
      { tr: 'fırtınalı',   de: 'stürmisch',             extra: 'fırtına = Sturm',            audio: 'audio/firtinali.mp3' },
      { tr: 'derece',      de: 'Grad (Temperatur)',     extra: 'yirmi derece = 20°C',        audio: 'audio/derece.mp3' },
      { tr: 'hava tahmini', de: 'Wettervorhersage',    extra: 'tahmin = Prognose',           audio: 'audio/hava_tahmini.mp3' },
      { tr: 'nem',         de: 'Feuchtigkeit',          extra: 'nemli = feucht',             audio: 'audio/nem.mp3' },
      { tr: 'şimşek',      de: 'Blitz',                extra: 'gök gürültüsü = Donner',     audio: 'audio/simsek.mp3' },
    ],
    erklaerung: '"Hava güneşli." = Es ist sonnig. "Hava çok sıcak." = Es ist sehr heiß. Temperatur: "Hava kaç derece?" (Wie viel Grad?) — "Yirmi beş derece." (25 Grad). Das Wetter ist ein universelles Gesprächsthema — türkische Smalltalk-Klassiker. Istanbul hat ein besonderes Klima: Im Winter regnerisch und kalt, im Sommer heiß und schwül (nemli).',
    grammatiktipp: '"Hava nasıl?" = Wie ist das Wetter? Wörtlich: "Luft wie?". Auf die Antwort folgt einfach Adjektiv: "Güneşli." oder "Hava güneşli." = "(Es ist) Sonnig."',
    saatzbausteine: [
      'Hava nasıl? → Wie ist das Wetter?',
      'Hava [Wetter]. → Es ist [Wetter].',
      'Hava kaç derece? → Wie viel Grad?',
    ],
    beispiele: [
      { tr: 'Hava nasıl?',              de: 'Wie ist das Wetter?',           audio: 'audio/hava_nasil.mp3' },
      { tr: 'Hava güneşli ve sıcak.',   de: 'Es ist sonnig und warm.',       audio: 'audio/hava_gunесli_sicak.mp3' },
      { tr: 'Hava çok soğuk!',          de: 'Es ist sehr kalt!',             audio: 'audio/hava_cok_soguk.mp3' },
      { tr: 'Bugün yağmur var.',        de: 'Heute regnet es.',              audio: 'audio/bugun_yagmur_var.mp3' },
      { tr: 'Hava kaç derece?',         de: 'Wie viel Grad?',                audio: 'audio/hava_kac_derece.mp3' },
      { tr: 'Otuz beş derece!',         de: '35 Grad!',                      audio: 'audio/otuz_bes_derece.mp3' },
      { tr: 'Yarın yağmur yağacak.',    de: 'Morgen wird es regnen.',        audio: 'audio/yarin_yagmur_yagacak.mp3' },
      { tr: 'Şemsiye almayı unutma!',   de: 'Vergiss nicht, einen Regenschirm mitzunehmen!', audio: 'audio/semsiye_alma.mp3' },
    ],
    nachsprech: [
      { tr: 'Hava nasıl?', audio: 'audio/hava_nasil.mp3' },
      { tr: 'güneşli',     audio: 'audio/gunесli.mp3' },
      { tr: 'yağmurlu',    audio: 'audio/yagmurlu.mp3' },
      { tr: 'bulutlu',     audio: 'audio/bulutlu.mp3' },
      { tr: 'sıcak',       audio: 'audio/sicak.mp3' },
      { tr: 'soğuk',       audio: 'audio/soguk.mp3' },
      { tr: 'karlı',       audio: 'audio/karli.mp3' },
      { tr: 'rüzgarlı',    audio: 'audio/ruzgarli.mp3' },
    ],
    hoerUebung: 'Höre eine Wettervorhersage — was wird beschrieben? Wie viel Grad?',
    miniDialog: [
      { sprecher: 'A', tr: 'Hava nasıl bugün?',                de: 'Wie ist das Wetter heute?' },
      { sprecher: 'B', tr: 'Çok güneşli ve sıcak!',            de: 'Sehr sonnig und heiß!' },
      { sprecher: 'A', tr: 'Kaç derece?',                      de: 'Wie viel Grad?' },
      { sprecher: 'B', tr: 'Otuz iki derece.',                 de: '32 Grad.' },
      { sprecher: 'A', tr: 'Vay be! Yarın nasıl olacak?',      de: 'Wahnsinn! Wie wird es morgen?' },
      { sprecher: 'B', tr: 'Hava tahminine göre yağmurlu.',    de: 'Laut Wettervorhersage regnerisch.' },
      { sprecher: 'A', tr: 'O zaman şemsiye almalıyım.',       de: 'Dann sollte ich einen Regenschirm nehmen.' },
      { sprecher: 'B', tr: 'Kesinlikle!',                      de: 'Auf jeden Fall!' },
    ],
    anwendung: 'Beschreibe das Wetter gerade draußen auf Türkisch. Dann morgens und abends wiederholen.',
    zusammenfassung: 'Hava nasıl? + güneşli/yağmurlu/sıcak/soğuk = du kannst über Wetter reden. Super für Smalltalk!',
    kulturhinweis: 'Istanbul hat ein einzigartiges Klima — es kann im selben Tag Sonne, Regen und Wind geben. Türken sagen: "İstanbul\'da dört mevsimi bir günde yaşarsın" (In Istanbul erlebst du alle vier Jahreszeiten an einem Tag).',
  },

  'Körper & Beschwerden': {
    lernziel: 'Du kannst Körperteile benennen und sagen wenn etwas wehtut.',
    woerter: [
      { tr: 'baş',      de: 'Kopf',           extra: 'başım ağrıyor = Kopfweh',        audio: 'audio/bas.mp3' },
      { tr: 'göz',      de: 'Auge',           extra: 'gözlerim = meine Augen',         audio: 'audio/goz.mp3' },
      { tr: 'kulak',    de: 'Ohr',            extra: 'kulağım ağrıyor = Ohrenschmerzen', audio: 'audio/kulak.mp3' },
      { tr: 'burun',    de: 'Nase',           extra: 'burunum akıyor = meine Nase läuft', audio: 'audio/burun.mp3' },
      { tr: 'ağız',     de: 'Mund',           extra: 'ağzım açık = mein Mund ist offen', audio: 'audio/agiz.mp3' },
      { tr: 'diş',      de: 'Zahn',           extra: 'dişim ağrıyor = Zahnweh',        audio: 'audio/dis.mp3' },
      { tr: 'boyun',    de: 'Hals / Nacken',  extra: 'boğazım ağrıyor = Halsschmerzen', audio: 'audio/boyun.mp3' },
      { tr: 'el',       de: 'Hand',           extra: 'elim = meine Hand',              audio: 'audio/el.mp3' },
      { tr: 'kol',      de: 'Arm',            extra: 'kolum ağrıyor = mein Arm schmerzt', audio: 'audio/kol.mp3' },
      { tr: 'ayak',     de: 'Fuß',            extra: 'ayağım ağrıyor = Fußschmerzen',  audio: 'audio/ayak.mp3' },
      { tr: 'karın',    de: 'Bauch',          extra: 'karın ağrısı = Bauchschmerzen',  audio: 'audio/karin.mp3' },
      { tr: 'sırt',     de: 'Rücken',         extra: 'sırt ağrısı = Rückenschmerzen',  audio: 'audio/sirt.mp3' },
      { tr: 'ağrıyor',  de: 'tut weh / schmerzt', extra: '[Körperteil]ım ağrıyor',    audio: 'audio/agriyor.mp3' },
      { tr: 'hasta',    de: 'krank',          extra: 'hastayım = ich bin krank',       audio: 'audio/hasta.mp3' },
    ],
    erklaerung: '"Başım ağrıyor." = Mein Kopf tut weh. Formel: [Körperteil] + Possessiv (-ım/-im/-um/-üm) + ağrıyor (tut weh). "Hastayım." = Ich bin krank. "Doktora gitmem lazım." = Ich muss zum Arzt. Weitere nützliche Ausdrücke: "Ateşim var." (Ich habe Fieber), "Öksürüyorum." (Ich huste).',
    grammatiktipp: '"Ağrıyor" = tut weh (3. Person Singular Präsens). "Başım ağrıyor" = Mein Kopf tut weh. Die Possessivform "başım" (mein Kopf) + Verb "ağrıyor" = fertig! Das -ım zeigt "mein".',
    saatzbausteine: [
      '[Körperteil]ım ağrıyor. → Mein ... tut weh.',
      'Hastayım. → Ich bin krank.',
      'Doktora gitmem lazım. → Ich muss zum Arzt.',
    ],
    beispiele: [
      { tr: 'Başım ağrıyor.',          de: 'Mein Kopf tut weh.',               audio: 'audio/basim_agriyor.mp3' },
      { tr: 'Dişim çok ağrıyor.',      de: 'Mein Zahn tut sehr weh.',          audio: 'audio/disim_agriyor.mp3' },
      { tr: 'Hastayım.',               de: 'Ich bin krank.',                   audio: 'audio/hastayim.mp3' },
      { tr: 'Ateşim var.',             de: 'Ich habe Fieber.',                 audio: 'audio/atesim_var.mp3' },
      { tr: 'Boğazım çok ağrıyor.',    de: 'Mein Hals tut sehr weh.',          audio: 'audio/bogazim_agriyor.mp3' },
      { tr: 'Doktora gitmem lazım.',   de: 'Ich muss zum Arzt.',               audio: 'audio/doktora_gitmem.mp3' },
      { tr: 'Midem bulantı yapıyor.',  de: 'Mir ist übel.',                    audio: 'audio/midem_bulanti.mp3' },
      { tr: 'Sırtım çok ağrıyor.',     de: 'Mein Rücken tut sehr weh.',        audio: 'audio/sirtim_agriyor.mp3' },
    ],
    nachsprech: [
      { tr: 'baş',    audio: 'audio/bas.mp3' },
      { tr: 'göz',    audio: 'audio/goz.mp3' },
      { tr: 'kulak',  audio: 'audio/kulak.mp3' },
      { tr: 'diş',    audio: 'audio/dis.mp3' },
      { tr: 'el',     audio: 'audio/el.mp3' },
      { tr: 'kol',    audio: 'audio/kol.mp3' },
      { tr: 'ayak',   audio: 'audio/ayak.mp3' },
      { tr: 'Başım ağrıyor.', audio: 'audio/basim_agriyor.mp3' },
    ],
    hoerUebung: 'Höre eine Beschwerde — welcher Körperteil tut weh?',
    miniDialog: [
      { sprecher: 'Arzt',    tr: 'Merhaba! Neyiniz var?',             de: 'Hallo! Was fehlt Ihnen?' },
      { sprecher: 'Patient', tr: 'Başım çok ağrıyor.',                de: 'Mein Kopf tut sehr weh.' },
      { sprecher: 'Arzt',    tr: 'Ne zamandan beri?',                 de: 'Seit wann?' },
      { sprecher: 'Patient', tr: 'İki günden beri.',                  de: 'Seit zwei Tagen.' },
      { sprecher: 'Arzt',    tr: 'Ateşiniz var mı?',                  de: 'Haben Sie Fieber?' },
      { sprecher: 'Patient', tr: 'Evet, biraz. Ve boğazım da ağrıyor.', de: 'Ja, ein bisschen. Und mein Hals tut auch weh.' },
      { sprecher: 'Arzt',    tr: 'Anlıyorum. İlaç yazıyorum.',        de: 'Ich verstehe. Ich verschreibe Medikamente.' },
      { sprecher: 'Patient', tr: 'Teşekkür ederim doktor.',           de: 'Danke, Herr/Frau Doktor.' },
    ],
    anwendung: 'Zeig auf deinen Körper und benenne jeden Teil auf Türkisch. Dann übe: "[Körperteil]ım ağrıyor."',
    zusammenfassung: 'Baş göz kulak diş el kol ayak sırt — 8 wichtige Körperteile. [Körperteil]ım ağrıyor = ... tut weh. Hastayım = ich bin krank!',
    kulturhinweis: 'In der Türkei sagt man zum Kranken "Geçmiş olsun!" (Gute Besserung! — wörtl.: "Möge es vergehen"). Die Antwort ist "Sağ ol" oder "Teşekkür ederim". Es wäre unhöflich, nichts zu sagen.',
  },

  'Das Haus & Zimmer': {
    lernziel: 'Du kannst Zimmer und Möbel benennen und beschreiben wo etwas ist.',
    woerter: [
      { tr: 'ev',          de: 'Haus',              extra: 'evim = mein Haus',            audio: 'audio/ev.mp3' },
      { tr: 'daire',       de: 'Wohnung',           extra: 'kiralık daire = Mietwohnung', audio: 'audio/daire.mp3' },
      { tr: 'oda',         de: 'Zimmer',            extra: 'iki oda = zwei Zimmer',       audio: 'audio/oda.mp3' },
      { tr: 'mutfak',      de: 'Küche',             extra: 'mutfakta = in der Küche',     audio: 'audio/mutfak.mp3' },
      { tr: 'banyo',       de: 'Bad / Badezimmer',  extra: 'duş = Dusche',               audio: 'audio/banyo.mp3' },
      { tr: 'tuvalet',     de: 'Toilette',          extra: 'tuvalet nerede? = wo ist die Toilette?', audio: 'audio/tuvalet.mp3' },
      { tr: 'salon',       de: 'Wohnzimmer',        extra: 'oturma odası = Wohnzimmer',  audio: 'audio/salon.mp3' },
      { tr: 'yatak odası', de: 'Schlafzimmer',      extra: 'yatak = Bett',               audio: 'audio/yatak_odasi.mp3' },
      { tr: 'masa',        de: 'Tisch',             extra: 'masada = am/auf dem Tisch',  audio: 'audio/masa.mp3' },
      { tr: 'sandalye',    de: 'Stuhl',             extra: '',                            audio: 'audio/sandalye.mp3' },
      { tr: 'kapı',        de: 'Tür',               extra: 'kapıyı kapat = mach die Tür zu', audio: 'audio/kapi.mp3' },
      { tr: 'pencere',     de: 'Fenster',           extra: 'pencereyi aç = öffne das Fenster', audio: 'audio/pencere.mp3' },
      { tr: 'balkon',      de: 'Balkon',            extra: 'balkonda = auf dem Balkon',   audio: 'audio/balkon.mp3' },
      { tr: 'burada',      de: 'hier',              extra: 'burada = hier (Ort)',         audio: 'audio/burada.mp3' },
    ],
    erklaerung: 'Lageangaben: "masanın üstünde" (auf dem Tisch), "kapının yanında" (neben der Tür). Einfacher: "orada" (dort), "burada" (hier), "içinde" (drinnen), "dışarıda" (draußen). "Kaç odalı?" = Wie viele Zimmer? Türkische Wohnungen sind oft nach Zimmerzahl beschrieben: "3+1" = drei Zimmer + Salon.',
    grammatiktipp: 'Lokalsuffix -de/-da bedeutet "in/an/auf (Ort)": mutfak + -ta = mutfakta (in der Küche — nach stimmlosem k: -ta statt -da). salon + -da = salonda (im Wohnzimmer).',
    saatzbausteine: [
      'Bu [Zimmer]. → Das ist die/das ...',
      'Tuvalet nerede? → Wo ist die Toilette?',
      'Orada / Burada. → Dort / Hier.',
    ],
    beispiele: [
      { tr: 'Mutfak nerede?',          de: 'Wo ist die Küche?',                 audio: 'audio/mutfak_nerede.mp3' },
      { tr: 'Tuvalet orada.',          de: 'Die Toilette ist dort.',            audio: 'audio/tuvalet_orada.mp3' },
      { tr: 'Evim küçük ama güzel.',   de: 'Mein Haus ist klein aber schön.',   audio: 'audio/evim_kucuk_ama.mp3' },
      { tr: 'Kaç odalı?',              de: 'Wie viele Zimmer?',                 audio: 'audio/kac_odali.mp3' },
      { tr: 'Üç odalı bir daire.',     de: 'Eine Drei-Zimmer-Wohnung.',         audio: 'audio/uc_odali_daire.mp3' },
      { tr: 'Balkon var mı?',          de: 'Gibt es einen Balkon?',             audio: 'audio/balkon_var_mi.mp3' },
      { tr: 'Mutfak çok büyük.',       de: 'Die Küche ist sehr groß.',          audio: 'audio/mutfak_cok_buyuk.mp3' },
      { tr: 'Banyo nerede?',           de: 'Wo ist das Bad?',                   audio: 'audio/banyo_nerede.mp3' },
    ],
    nachsprech: [
      { tr: 'ev',          audio: 'audio/ev.mp3' },
      { tr: 'mutfak',      audio: 'audio/mutfak.mp3' },
      { tr: 'banyo',       audio: 'audio/banyo.mp3' },
      { tr: 'salon',       audio: 'audio/salon.mp3' },
      { tr: 'yatak odası', audio: 'audio/yatak_odasi.mp3' },
      { tr: 'masa',        audio: 'audio/masa.mp3' },
      { tr: 'kapı',        audio: 'audio/kapi.mp3' },
      { tr: 'pencere',     audio: 'audio/pencere.mp3' },
    ],
    hoerUebung: 'Höre eine Beschreibung — welches Zimmer wird beschrieben und was ist darin?',
    miniDialog: [
      { sprecher: 'Gast',      tr: 'Tuvalet nerede?',              de: 'Wo ist die Toilette?' },
      { sprecher: 'Gastgeber', tr: 'Orada, sağda.',                de: 'Dort, rechts.' },
      { sprecher: 'Gast',      tr: 'Eviniz çok güzel!',            de: 'Ihr Haus ist sehr schön!' },
      { sprecher: 'Gastgeber', tr: 'Teşekkürler! Buyurun, oturun.', de: 'Danke! Bitte, setzen Sie sich.' },
      { sprecher: 'Gast',      tr: 'Kaç odalı?',                   de: 'Wie viele Zimmer?' },
      { sprecher: 'Gastgeber', tr: 'Dört odalı. Mutfak, salon, iki yatak odası.', de: 'Vier Zimmer. Küche, Wohnzimmer, zwei Schlafzimmer.' },
      { sprecher: 'Gast',      tr: 'Balkon var mı?',               de: 'Gibt es einen Balkon?' },
      { sprecher: 'Gastgeber', tr: 'Evet, ve çok güzel manzarası var!', de: 'Ja, und es hat eine sehr schöne Aussicht!' },
    ],
    anwendung: 'Geh durch deine Wohnung und benenne jedes Zimmer und 3 Dinge pro Zimmer auf Türkisch.',
    zusammenfassung: 'Mutfak banyo salon yatak odası — die 4 Hauptzimmer. Tuvalet nerede? ist einer der nützlichsten Sätze überhaupt!',
    kulturhinweis: 'In türkischen Häusern zieht man die Schuhe aus bevor man die Wohnung betritt. Der Gastgeber bietet sofort Getränke und Essen an — das Ablehnen kann als unhöflich wirken. "Hoş geldiniz!" ist das erste was man hört.',
  },

  'Verben im Präsens': {
    lernziel: 'Du kannst einfache Sätze mit den häufigsten Verben im Präsens bilden.',
    woerter: [
      { tr: 'gitmek',     de: 'gehen',          extra: 'gidiyorum = ich gehe',           audio: 'audio/gitmek.mp3' },
      { tr: 'gelmek',     de: 'kommen',         extra: 'geliyorum = ich komme',          audio: 'audio/gelmek.mp3' },
      { tr: 'yemek',      de: 'essen',          extra: 'yiyorum = ich esse',             audio: 'audio/yemek.mp3' },
      { tr: 'içmek',      de: 'trinken',        extra: 'içiyorum = ich trinke',          audio: 'audio/icmek.mp3' },
      { tr: 'yapmak',     de: 'machen / tun',   extra: 'yapıyorum = ich mache',          audio: 'audio/yapmak.mp3' },
      { tr: 'konuşmak',   de: 'sprechen',       extra: 'konuşuyorum = ich spreche',      audio: 'audio/konusmak.mp3' },
      { tr: 'anlamak',    de: 'verstehen',      extra: 'anlıyorum = ich verstehe',       audio: 'audio/anlamak.mp3' },
      { tr: 'sevmek',     de: 'lieben / mögen', extra: 'seviyorum = ich liebe/mag',      audio: 'audio/sevmek.mp3' },
      { tr: 'oturmak',    de: 'sitzen / wohnen', extra: 'oturuyorum = ich sitze/wohne', audio: 'audio/oturmak.mp3' },
      { tr: 'çalışmak',   de: 'arbeiten / lernen', extra: 'çalışıyorum = ich arbeite',  audio: 'audio/calismak.mp3' },
      { tr: 'öğrenmek',   de: 'lernen',         extra: 'öğreniyorum = ich lerne',        audio: 'audio/ogrenmek.mp3' },
      { tr: 'okumak',     de: 'lesen / studieren', extra: 'okuyorum = ich lese',        audio: 'audio/okumak.mp3' },
      { tr: 'dinlemek',   de: 'zuhören',        extra: 'dinliyorum = ich höre zu',       audio: 'audio/dinlemek.mp3' },
      { tr: 'beklemek',   de: 'warten',         extra: 'bekliyorum = ich warte',         audio: 'audio/beklemek.mp3' },
    ],
    erklaerung: 'Präsens (şimdiki zaman) — was ich gerade tue: Verbstamm + -ıyor/-iyor/-uyor/-üyor + Personendung. Ben (ich): gid-iyor-um. Sen (du): gid-iyor-sun. O (er/sie): gid-iyor. Die vier Vokalvarianten richten sich nach dem letzten Vokal des Stamms. Lern zuerst die "ich"-Form (-iyorum)!',
    grammatiktipp: 'Präsensendungen: -ıyorum (nach a/ı), -iyorum (nach e/i), -uyorum (nach o/u), -üyorum (nach ö/ü). gitmek → git + iyor + um = gidiyorum (g→d vor i ist eine Konsonantenänderung!)',
    saatzbausteine: [
      'Ben [Verbstamm]ıyorum. → Ich [Verb].',
      'Ben çay içiyorum. → Ich trinke Tee.',
      'Ben Türkçe öğreniyorum. → Ich lerne Türkisch.',
    ],
    beispiele: [
      { tr: 'Ben çay içiyorum.',        de: 'Ich trinke Tee.',                audio: 'audio/ben_cay_iciyorum.mp3' },
      { tr: 'Ben Türkçe öğreniyorum.',  de: 'Ich lerne Türkisch.',            audio: 'audio/ben_turkce_ogreniyorum.mp3' },
      { tr: 'Nereye gidiyorsun?',       de: 'Wohin gehst du?',               audio: 'audio/nereye_gidiyorsun.mp3' },
      { tr: 'Seni seviyorum.',          de: 'Ich liebe dich.',               audio: 'audio/seni_seviyorum.mp3' },
      { tr: 'Ne yapıyorsunuz?',         de: 'Was machen Sie?',               audio: 'audio/ne_yapiyorsunuz.mp3' },
      { tr: 'Oturuyorum ve dinliyorum.', de: 'Ich sitze und höre zu.',       audio: 'audio/oturuyorum_dinliyorum.mp3' },
      { tr: 'O kitap okuyor.',          de: 'Er/Sie liest ein Buch.',        audio: 'audio/o_kitap_okuyor.mp3' },
      { tr: 'Bekliyorum, acele et!',    de: 'Ich warte, beeil dich!',        audio: 'audio/bekliyorum_acele_et.mp3' },
    ],
    nachsprech: [
      { tr: 'gidiyorum',    audio: 'audio/gidiyorum.mp3' },
      { tr: 'geliyorum',    audio: 'audio/geliyorum.mp3' },
      { tr: 'yiyorum',      audio: 'audio/yiyorum.mp3' },
      { tr: 'içiyorum',     audio: 'audio/iciyorum.mp3' },
      { tr: 'yapıyorum',    audio: 'audio/yapiyorum.mp3' },
      { tr: 'seviyorum',    audio: 'audio/seviyorum.mp3' },
      { tr: 'öğreniyorum',  audio: 'audio/ogreniyorum.mp3' },
      { tr: 'çalışıyorum',  audio: 'audio/calisiyorum.mp3' },
    ],
    hoerUebung: 'Höre einen Satz — was macht die Person gerade? In der ersten oder dritten Person?',
    miniDialog: [
      { sprecher: 'A', tr: 'Ne yapıyorsun?',              de: 'Was machst du?' },
      { sprecher: 'B', tr: 'Türkçe öğreniyorum.',         de: 'Ich lerne Türkisch.' },
      { sprecher: 'A', tr: 'Harika! Ben de öğreniyorum.', de: 'Super! Ich auch.' },
      { sprecher: 'B', tr: 'Ne zamandan beri?',           de: 'Seit wann?' },
      { sprecher: 'A', tr: 'İki aydır çalışıyorum.',      de: 'Ich lerne seit zwei Monaten.' },
      { sprecher: 'B', tr: 'Çok iyi! Nereye gidiyorsun?', de: 'Sehr gut! Wohin gehst du?' },
      { sprecher: 'A', tr: 'Türkçe kursuna gidiyorum.',   de: 'Ich gehe zum Türkischkurs.' },
      { sprecher: 'B', tr: 'Bravo! Ben de kitap okuyorum.', de: 'Bravo! Ich lese auch Bücher.' },
    ],
    anwendung: 'Sag 5 Sätze was du gerade tust — auf Türkisch. Ich esse, ich trinke, ich lerne, ich sitze...',
    zusammenfassung: '[Verbstamm] + -iyor + -um = ich tue gerade etwas. Ben çay içiyorum — diese Form reicht für den Alltag!',
    kulturhinweis: '"Seni seviyorum" ist vielleicht der bekannteste türkische Satz weltweit. Im Film und in der Musik sehr häufig. Auf Türkisch sagt man auch "Seni çok seviyorum" (ich liebe dich sehr) — "çok" verstärkt.',
  },

  'Verneinung & Fragen': {
    lernziel: 'Du kannst Sätze verneinen und einfache Fragen stellen.',
    woerter: [
      { tr: 'değil',    de: 'nicht / kein',      extra: 'öğrenci değilim = ich bin kein Schüler', audio: 'audio/degil.mp3' },
      { tr: 'yok',      de: 'es gibt nicht',     extra: 'Gegenpart zu "var"',                     audio: 'audio/yok.mp3' },
      { tr: 'hayır',    de: 'nein',              extra: '',                                        audio: 'audio/hayir.mp3' },
      { tr: 'ne',       de: 'was',               extra: 'ne yapıyorsun? = was machst du?',        audio: 'audio/ne.mp3' },
      { tr: 'nerede',   de: 'wo',                extra: 'nerede? = wo?',                          audio: 'audio/nerede.mp3' },
      { tr: 'ne zaman', de: 'wann',              extra: 'ne zaman geliyorsun? = wann kommst du?', audio: 'audio/ne_zaman.mp3' },
      { tr: 'neden',    de: 'warum',             extra: 'neden? = warum?',                        audio: 'audio/neden.mp3' },
      { tr: 'nasıl',    de: 'wie',               extra: 'nasıl? = wie?',                          audio: 'audio/nasil.mp3' },
      { tr: 'kim',      de: 'wer',               extra: 'kim geldi? = wer kam?',                  audio: 'audio/kim.mp3' },
      { tr: 'kaç',      de: 'wie viele / viel',  extra: 'kaç tane? = wie viele Stück?',           audio: 'audio/kac.mp3' },
      { tr: 'hangi',    de: 'welche(r/s)',        extra: 'hangi renk? = welche Farbe?',            audio: 'audio/hangi.mp3' },
      { tr: 'mı/mi/mu/mü', de: 'Fragewort (-partikel)', extra: 'güzel mi? = ist es schön?',     audio: 'audio/mi_partikeli.mp3' },
      { tr: '-mıyor',   de: 'Verneinungsendung Verb', extra: 'gelmiyor = kommt nicht',           audio: 'audio/miyor_endung.mp3' },
      { tr: 'çünkü',    de: 'weil',              extra: 'çünkü seviyorum = weil ich liebe',       audio: 'audio/cunku.mp3' },
    ],
    erklaerung: 'Verneinung Verb: -mıyor/-miyor/-muyor/-müyor (statt -ıyor). Ich gehe NICHT: "gitmiyorum". Verneinung Nomen/Adjektiv: + "değil": "Öğrenci değilim." (Ich bin kein Schüler). Fragen mit -mı/-mi/-mu/-mü: "Geldi mi?" (Ist er/sie gekommen?). Fragewörter: ne (was), nerede (wo), ne zaman (wann), kim (wer), nasıl (wie), neden (warum), kaç (wie viele).',
    grammatiktipp: 'Fragewörter stehen im Türkischen DIREKT vor dem Verb: "Nerede oturuyorsun?" (Wo wohnst du?). Die -mı-Frage steht hinter dem Wort das in Frage gestellt wird: "Sen mi geldin?" (Bist DU gekommen?) vs "Geldin mi?" (Bist du GEKOMMEN?).',
    saatzbausteine: [
      '[Verb]miyorum. → Ich [Verb] nicht.',
      'Ben [Nomen] değilim. → Ich bin kein/e ...',
      'Nerede [Verb]iyor[sun]? → Wo [Verb]st du?',
    ],
    beispiele: [
      { tr: 'Anlamıyorum.',              de: 'Ich verstehe nicht.',              audio: 'audio/anlamiyorum.mp3' },
      { tr: 'Türkçe bilmiyorum.',        de: 'Ich spreche kein Türkisch.',       audio: 'audio/turkce_bilmiyorum.mp3' },
      { tr: 'O öğrenci değil.',          de: 'Er/Sie ist kein Schüler.',         audio: 'audio/o_ogrenci_degil.mp3' },
      { tr: 'Nerede oturuyorsun?',       de: 'Wo wohnst du?',                   audio: 'audio/nerede_oturuyorsun.mp3' },
      { tr: 'Ne zaman geliyorsun?',      de: 'Wann kommst du?',                 audio: 'audio/ne_zaman_geliyorsun.mp3' },
      { tr: 'Neden gelmiyorsun?',        de: 'Warum kommst du nicht?',          audio: 'audio/neden_gelmiyorsun.mp3' },
      { tr: 'Kim bu?',                   de: 'Wer ist das?',                    audio: 'audio/kim_bu.mp3' },
      { tr: 'Güzel mi?',                 de: 'Ist es schön?',                   audio: 'audio/guzel_mi.mp3' },
    ],
    nachsprech: [
      { tr: 'değil',       audio: 'audio/degil.mp3' },
      { tr: 'yok',         audio: 'audio/yok.mp3' },
      { tr: 'Anlamıyorum.', audio: 'audio/anlamiyorum.mp3' },
      { tr: 'Bilmiyorum.', audio: 'audio/bilmiyorum.mp3' },
      { tr: 'Nerede?',     audio: 'audio/nerede.mp3' },
      { tr: 'Ne zaman?',   audio: 'audio/ne_zaman.mp3' },
      { tr: 'Neden?',      audio: 'audio/neden.mp3' },
      { tr: 'Kim?',        audio: 'audio/kim.mp3' },
    ],
    hoerUebung: 'Höre einen Satz — positiv oder negativ? Und: Welches Fragewort wird verwendet?',
    miniDialog: [
      { sprecher: 'A', tr: 'Türkçe biliyor musun?',          de: 'Sprichst du Türkisch?' },
      { sprecher: 'B', tr: 'Biraz. Çok iyi değil.',          de: 'Ein bisschen. Nicht sehr gut.' },
      { sprecher: 'A', tr: 'Neden öğreniyorsun?',            de: 'Warum lernst du es?' },
      { sprecher: 'B', tr: 'Çünkü Türkiye\'yi seviyorum!',   de: 'Weil ich die Türkei liebe!' },
      { sprecher: 'A', tr: 'Ne zaman Türkiye\'ye gidiyorsun?', de: 'Wann fährst du in die Türkei?' },
      { sprecher: 'B', tr: 'Yaz tatilinde. Sen hiç gittin mi?', de: 'Im Sommerurlaub. Bist du je dort gewesen?' },
      { sprecher: 'A', tr: 'Hayır, gitmedim.',               de: 'Nein, ich war noch nicht dort.' },
      { sprecher: 'B', tr: 'Kesinlikle git! Çok güzel!',     de: 'Fahr auf jeden Fall! Es ist sehr schön!' },
    ],
    anwendung: 'Bilde 5 negative Sätze über dich: Was bist du NICHT, was machst du NICHT. Dann 5 Fragen.',
    zusammenfassung: '-mıyor = Verneinung Verb. değil = Verneinung Nomen/Adjektiv. Ne nerede kim ne zaman nasıl neden — 6 wichtige Fragewörter!',
  },

  'Adjektive & Beschreibungen': {
    lernziel: 'Du kannst Dinge und Personen mit Adjektiven beschreiben.',
    woerter: [
      { tr: 'güzel',     de: 'schön',               extra: 'çok güzel = sehr schön',           audio: 'audio/guzel.mp3' },
      { tr: 'çirkin',    de: 'hässlich',             extra: 'Gegenteil von güzel',              audio: 'audio/cirkin.mp3' },
      { tr: 'büyük',     de: 'groß',                 extra: 'büyük bir ev = großes Haus',       audio: 'audio/buyuk.mp3' },
      { tr: 'küçük',     de: 'klein',                extra: 'çok küçük = sehr klein',           audio: 'audio/kucuk.mp3' },
      { tr: 'uzun',      de: 'lang / groß (Person)', extra: 'uzun boylu = großgewachsen',      audio: 'audio/uzun.mp3' },
      { tr: 'kısa',      de: 'kurz / klein (Person)', extra: 'kısa boylu = kleingewachsen',   audio: 'audio/kisa.mp3' },
      { tr: 'yeni',      de: 'neu',                  extra: 'yeni bir araba = ein neues Auto',  audio: 'audio/yeni.mp3' },
      { tr: 'eski',      de: 'alt (Dinge)',           extra: 'eski = alt (Sachen), yaşlı = alt (Personen)', audio: 'audio/eski.mp3' },
      { tr: 'iyi',       de: 'gut',                  extra: 'çok iyi = sehr gut',               audio: 'audio/iyi.mp3' },
      { tr: 'kötü',      de: 'schlecht',             extra: 'biraz kötü = ein bisschen schlecht', audio: 'audio/kotu.mp3' },
      { tr: 'çok',       de: 'sehr / viel',          extra: 'çok iyi! = sehr gut!',             audio: 'audio/cok.mp3' },
      { tr: 'biraz',     de: 'ein bisschen',         extra: 'biraz şeker = ein bisschen Zucker', audio: 'audio/biraz.mp3' },
      { tr: 'pahalı',    de: 'teuer',                extra: 'çok pahalı = viel zu teuer',       audio: 'audio/pahali.mp3' },
      { tr: 'ucuz',      de: 'günstig / billig',     extra: 'Gegenteil von pahalı',             audio: 'audio/ucuz.mp3' },
    ],
    erklaerung: 'Adjektive kommen im Türkischen VOR das Nomen und ändern sich NICHT: "güzel kız" (schönes Mädchen), "güzel ev" (schönes Haus), "güzel arabalar" (schöne Autos). Mit "çok" (sehr): "çok güzel" = sehr schön. Achtung: "eski" für Dinge (altes Auto), aber "yaşlı" für Personen (alter Mann).',
    grammatiktipp: 'Superlativ: en + Adjektiv. en güzel = das Schönste. en büyük = das Größte. en iyi = das Beste. "Bu en güzel ev!" = Das ist das schönste Haus!',
    saatzbausteine: [
      '[Adjektiv] + [Nomen] → büyük ev (großes Haus)',
      'Bu çok [Adjektiv]! → Das ist sehr ...!',
      'Çok güzel! → Sehr schön!',
    ],
    beispiele: [
      { tr: 'Bu çok güzel!',          de: 'Das ist sehr schön!',          audio: 'audio/bu_cok_guzel.mp3' },
      { tr: 'Büyük bir ev.',          de: 'Ein großes Haus.',             audio: 'audio/buyuk_bir_ev.mp3' },
      { tr: 'Biraz kötü.',            de: 'Ein bisschen schlecht.',       audio: 'audio/biraz_kotu.mp3' },
      { tr: 'Çok iyi, teşekkürler.',  de: 'Sehr gut, danke.',            audio: 'audio/cok_iyi_tesekkurler.mp3' },
      { tr: 'Bu çok pahalı!',         de: 'Das ist viel zu teuer!',      audio: 'audio/bu_cok_pahali.mp3' },
      { tr: 'En güzel şehir!',        de: 'Die schönste Stadt!',          audio: 'audio/en_guzel_sehir.mp3' },
      { tr: 'Uzun boylu ve yakışıklı.', de: 'Groß und gut aussehend.',   audio: 'audio/uzun_boylu_yakisikli.mp3' },
      { tr: 'Yeni mi, eski mi?',      de: 'Neu oder alt?',               audio: 'audio/yeni_mi_eski_mi.mp3' },
    ],
    nachsprech: [
      { tr: 'güzel',   audio: 'audio/guzel.mp3' },
      { tr: 'büyük',   audio: 'audio/buyuk.mp3' },
      { tr: 'küçük',   audio: 'audio/kucuk.mp3' },
      { tr: 'yeni',    audio: 'audio/yeni.mp3' },
      { tr: 'eski',    audio: 'audio/eski.mp3' },
      { tr: 'iyi',     audio: 'audio/iyi.mp3' },
      { tr: 'kötü',    audio: 'audio/kotu.mp3' },
      { tr: 'pahalı',  audio: 'audio/pahali.mp3' },
    ],
    hoerUebung: 'Höre eine Beschreibung — welches Adjektiv wird benutzt? Positiv oder negativ?',
    miniDialog: [
      { sprecher: 'A', tr: 'Bu film nasıl?',              de: 'Wie ist dieser Film?' },
      { sprecher: 'B', tr: 'Çok güzel! Biraz uzun ama.',  de: 'Sehr schön! Aber ein bisschen lang.' },
      { sprecher: 'A', tr: 'Yeni mi?',                   de: 'Ist er neu?' },
      { sprecher: 'B', tr: 'Evet, bu hafta çıktı.',       de: 'Ja, er kam diese Woche raus.' },
      { sprecher: 'A', tr: 'En iyi film mi?',             de: 'Ist er der beste Film?' },
      { sprecher: 'B', tr: 'En iyilerden biri!',          de: 'Einer der besten!' },
      { sprecher: 'A', tr: 'Tamam, ben de izleyeceğim.', de: 'OK, ich werde ihn auch schauen.' },
      { sprecher: 'B', tr: 'Kesin beğeneceksin!',        de: 'Du wirst ihn bestimmt mögen!' },
    ],
    anwendung: 'Beschreibe 5 Dinge in deiner Umgebung mit Adjektiven auf Türkisch. Nutze auch "çok" und "biraz".',
    zusammenfassung: 'Adjektiv steht vor dem Nomen, ändert sich nicht. Çok = sehr, biraz = ein bisschen. Superlativ: en + Adjektiv.',
    kulturhinweis: '"Çok güzel!" und "Harika!" (Fantastisch!) sind die häufigsten Ausrufe wenn Türken etwas bewundern. Übertreibung ist kulturell normal und ausdrücklicher als in Deutschen.',
  },

  // ── Familie & Personen ─────────────────────────────────────────
  'Beziehungen & Freunde': {
    lernziel: 'Beziehungen und Freundschaften auf Türkisch beschreiben.',
    woerter: [
      { tr: 'arkadaş',        de: 'Freund / Freundin',         extra: 'arkadaşım = mein Freund',       audio: 'audio/arkadas.mp3' },
      { tr: 'en iyi arkadaş', de: 'bester Freund / beste Freundin', extra: 'en iyi = beste(r)',       audio: 'audio/en_iyi_arkadas.mp3' },
      { tr: 'komşu',          de: 'Nachbar / Nachbarin',        extra: 'komşum = mein Nachbar',        audio: 'audio/komsu.mp3' },
      { tr: 'sevgili',        de: 'Liebling / Geliebte(r)',     extra: 'auch: Freund/Freundin (romantisch)', audio: 'audio/sevgili.mp3' },
      { tr: 'nişanlı',        de: 'Verlobte(r)',               extra: 'nişan = Verlobung',             audio: 'audio/nisanli.mp3' },
      { tr: 'evli',           de: 'verheiratet',               extra: 'evlilik = Ehe',                 audio: 'audio/evli.mp3' },
      { tr: 'bekar',          de: 'ledig',                     extra: 'Gegenteil von evli',            audio: 'audio/bekar.mp3' },
      { tr: 'çift',           de: 'Paar / Ehepaar',            extra: 'çiftler = Paare',               audio: 'audio/cift.mp3' },
      { tr: 'tanışmak',       de: 'kennenlernen',              extra: 'tanıştım = ich habe kennengelernt', audio: 'audio/tanismak.mp3' },
      { tr: 'tanıştırmak',    de: 'vorstellen (jmd. anderen)', extra: 'sehr oft nötig',                audio: 'audio/tanistirmak.mp3' },
      { tr: 'sevmek',         de: 'lieben / mögen',            extra: 'seni seviyorum = ich liebe dich', audio: 'audio/sevmek.mp3' },
      { tr: 'özlemek',        de: 'vermissen',                 extra: 'seni özledim = ich habe dich vermisst', audio: 'audio/ozlemek.mp3' },
      { tr: 'yakın',          de: 'nah / eng (Beziehung)',     extra: 'yakın arkadaş = enger Freund',  audio: 'audio/yakin.mp3' },
      { tr: 'güvenmek',       de: 'vertrauen',                 extra: 'sana güveniyorum = ich vertraue dir', audio: 'audio/guvenmek.mp3' },
    ],
    erklaerung: 'Possessivsuffix -ım/-im/-um/-üm = mein: arkadaş-ım = mein Freund, komşu-m = mein Nachbar. Im Türkischen hat das Wort "sevgili" zwei Bedeutungen: romantisch (Freund/Freundin) und allgemein (Liebling). "Seni özledim" (Ich habe dich vermisst) ist eine sehr häufige Aussage unter türkischen Freunden.',
    grammatiktipp: 'Possessiv "mein": Nach Vokal → -m: komşu + m = komşum. Nach Konsonant → -ım/-im/-um/-üm: arkadaş + ım = arkadaşım. Wichtig: d→t und k→ğ können sich verändern: kitap → kitabım.',
    beispiele: [
      { tr: 'O benim en iyi arkadaşım.',      de: 'Er/Sie ist mein bester Freund.',          audio: 'audio/o_benim_en_iyi.mp3' },
      { tr: 'Komşularımla iyi geçiniyorum.',   de: 'Ich komme gut mit meinen Nachbarn aus.',  audio: 'audio/komsularimla.mp3' },
      { tr: 'Seni özledim.',                   de: 'Ich habe dich vermisst.',                 audio: 'audio/seni_ozledim.mp3' },
      { tr: 'Arkadaşımı sana tanıştırayım.',   de: 'Lass mich dir meinen Freund vorstellen.', audio: 'audio/arkadasimi_tanistir.mp3' },
      { tr: 'Evli misin?',                     de: 'Bist du verheiratet?',                   audio: 'audio/evli_misin.mp3' },
      { tr: 'Sana güveniyorum.',               de: 'Ich vertraue dir.',                       audio: 'audio/sana_guveniyorum.mp3' },
      { tr: 'En yakın arkadaşım o.',           de: 'Er/Sie ist mein engster Freund.',         audio: 'audio/en_yakin_arkadasim.mp3' },
      { tr: 'Çok iyi bir komşuyum var.',       de: 'Ich habe einen sehr guten Nachbarn.',     audio: 'audio/cok_iyi_komsuyum.mp3' },
    ],
    miniDialog: [
      { sprecher: 'A', tr: 'Bu kim?',                  de: 'Wer ist das?' },
      { sprecher: 'B', tr: 'O benim arkadaşım Elif.',  de: 'Das ist meine Freundin Elif.' },
      { sprecher: 'A', tr: 'Memnun oldum, Elif!',      de: 'Freut mich, Elif!' },
      { sprecher: 'Elif', tr: 'Ben de! Nerelisin?',    de: 'Mich auch! Woher kommst du?' },
      { sprecher: 'A', tr: 'Almanya\'danım.',          de: 'Aus Deutschland.' },
      { sprecher: 'Elif', tr: 'Ne zamandan beri arkadaşsınız?', de: 'Wie lange seid ihr schon befreundet?' },
      { sprecher: 'B', tr: 'Beş yıldır arkadaşız.',   de: 'Wir sind seit fünf Jahren befreundet.' },
      { sprecher: 'A', tr: 'Evet, çok yakın arkadaşız.', de: 'Ja, wir sind sehr enge Freunde.' },
    ],
    nachsprech: [
      { tr: 'arkadaş',  audio: 'audio/arkadas.mp3' },
      { tr: 'komşu',    audio: 'audio/komsu.mp3' },
      { tr: 'evli',     audio: 'audio/evli.mp3' },
      { tr: 'bekar',    audio: 'audio/bekar.mp3' },
      { tr: 'sevmek',   audio: 'audio/sevmek.mp3' },
      { tr: 'özlemek',  audio: 'audio/ozlemek.mp3' },
      { tr: 'Seni özledim.', audio: 'audio/seni_ozledim.mp3' },
      { tr: 'Seni seviyorum.', audio: 'audio/seni_seviyorum.mp3' },
    ],
    hoerUebung: 'Höre eine Beschreibung — welche Beziehung wird beschrieben?',
    anwendung: 'Beschreibe auf Türkisch: Bist du ledig oder verheiratet? Wie heißt dein bester Freund?',
    zusammenfassung: 'arkadaş = Freund, evli = verheiratet, bekar = ledig, sevmek = lieben, özlemek = vermissen.',
    kulturhinweis: 'In der Türkei sind Freundschaften oft sehr eng und von langer Dauer. Man besucht sich regelmäßig ohne viel Planung. "Evine buyur" (Komm zu mir nach Hause) ist eine häufige herzliche Einladung.',
  },

  'Eigenschaften & Charakter': {
    lernziel: 'Charaktereigenschaften auf Türkisch beschreiben.',
    woerter: [
      { tr: 'güzel',       de: 'schön / hübsch',          extra: 'çok güzel = sehr schön',          audio: 'audio/guzel.mp3' },
      { tr: 'yakışıklı',   de: 'gut aussehend (Mann)',     extra: 'Gegenteil: çirkin',               audio: 'audio/yakisikli.mp3' },
      { tr: 'zeki',        de: 'intelligent / klug',      extra: 'çok zeki = sehr klug',            audio: 'audio/zeki.mp3' },
      { tr: 'komik',       de: 'lustig / witzig',         extra: 'çok komik biri = eine sehr lustige Person', audio: 'audio/komik.mp3' },
      { tr: 'kibar',       de: 'höflich / nett',          extra: 'çok kibar = sehr höflich',        audio: 'audio/kibar.mp3' },
      { tr: 'nazik',       de: 'freundlich / sanft',      extra: 'nazik insan = freundlicher Mensch', audio: 'audio/nazik.mp3' },
      { tr: 'çalışkan',    de: 'fleißig',                 extra: 'Gegenteil: tembel',               audio: 'audio/caliskan.mp3' },
      { tr: 'tembel',      de: 'faul',                    extra: 'biraz tembel = ein bisschen faul', audio: 'audio/tembel.mp3' },
      { tr: 'sabırlı',     de: 'geduldig',               extra: 'sabır = Geduld',                   audio: 'audio/sabirli.mp3' },
      { tr: 'sinirli',     de: 'genervt / reizbar',      extra: 'çok sinirli = sehr gereizt',       audio: 'audio/sinirli.mp3' },
      { tr: 'cesur',       de: 'mutig',                  extra: 'Gegenteil: korkak (feige)',        audio: 'audio/cesur.mp3' },
      { tr: 'utangaç',     de: 'schüchtern',             extra: '',                                 audio: 'audio/utangac.mp3' },
      { tr: 'dürüst',      de: 'ehrlich',                extra: 'Gegenteil: yalancı (lügend)',      audio: 'audio/durust.mp3' },
      { tr: 'güvenilir',   de: 'zuverlässig',            extra: 'güvenilir biri = eine zuverlässige Person', audio: 'audio/guvenilir.mp3' },
    ],
    erklaerung: 'Charaktereigenschaften stehen direkt vor dem Nomen (güzel kız = schönes Mädchen) oder als Prädikat: "O çok sabırlı." (Er/Sie ist sehr geduldig). Das Adjektiv verändert sich nicht. Um jemanden zu beschreiben: "[Eigenschaft] biri" = jemand der ... ist: "zeki biri" = eine kluge Person.',
    grammatiktipp: '"Nasıl biri?" = Was für ein Mensch? Wörtlich: "Wie einer?". Antwort: direkt mit Adjektiven: "Çok kibar ve nazik biri." = "Er/Sie ist sehr höflich und freundlich."',
    beispiele: [
      { tr: 'Annem çok nazik.',                       de: 'Meine Mutter ist sehr freundlich.',         audio: 'audio/annem_cok_nazik.mp3' },
      { tr: 'Kardeşim biraz tembel ama çok komik.',   de: 'Mein Geschwister ist etwas faul, aber sehr lustig.', audio: 'audio/kardesim_tembel_komik.mp3' },
      { tr: 'O çok dürüst bir insan.',                de: 'Er/Sie ist ein sehr ehrlicher Mensch.',     audio: 'audio/o_cok_durust.mp3' },
      { tr: 'Zeki ama utangaç.',                      de: 'Klug aber schüchtern.',                     audio: 'audio/zeki_ama_utangac.mp3' },
      { tr: 'Çok güvenilir biridir.',                 de: 'Er/Sie ist sehr zuverlässig.',              audio: 'audio/cok_guvenilir.mp3' },
      { tr: 'Babam çok çalışkan.',                    de: 'Mein Vater ist sehr fleißig.',              audio: 'audio/babam_cok_caliskan.mp3' },
      { tr: 'Çok sabırlı olmalısın.',                 de: 'Du musst sehr geduldig sein.',              audio: 'audio/cok_sabirli_olmalisin.mp3' },
      { tr: 'Cesur ve dürüst.',                       de: 'Mutig und ehrlich.',                        audio: 'audio/cesur_ve_durust.mp3' },
    ],
    miniDialog: [
      { sprecher: 'A', tr: 'Arkadaşın nasıl biri?',           de: 'Was für ein Mensch ist dein Freund?' },
      { sprecher: 'B', tr: 'Çok komik ve zeki.',              de: 'Sehr lustig und klug.' },
      { sprecher: 'A', tr: 'Kibar mı?',                       de: 'Ist er höflich?' },
      { sprecher: 'B', tr: 'Evet, çok kibar ve güvenilir.',   de: 'Ja, sehr höflich und zuverlässig.' },
      { sprecher: 'A', tr: 'Çalışkan mı?',                    de: 'Ist er fleißig?' },
      { sprecher: 'B', tr: 'Biraz tembel bazen ama iyi biri.', de: 'Manchmal etwas faul, aber ein guter Mensch.' },
      { sprecher: 'A', tr: 'Haha, benim gibi!',               de: 'Haha, wie ich!' },
      { sprecher: 'B', tr: 'Evet, o yüzden çok iyi anlaşıyoruz!', de: 'Ja, deshalb verstehen wir uns so gut!' },
    ],
    nachsprech: [
      { tr: 'zeki',      audio: 'audio/zeki.mp3' },
      { tr: 'kibar',     audio: 'audio/kibar.mp3' },
      { tr: 'çalışkan',  audio: 'audio/caliskan.mp3' },
      { tr: 'tembel',    audio: 'audio/tembel.mp3' },
      { tr: 'sabırlı',   audio: 'audio/sabirli.mp3' },
      { tr: 'dürüst',    audio: 'audio/durust.mp3' },
      { tr: 'güvenilir', audio: 'audio/guvenilir.mp3' },
      { tr: 'cesur',     audio: 'audio/cesur.mp3' },
    ],
    hoerUebung: 'Höre eine Personenbeschreibung — welche Eigenschaften werden genannt?',
    anwendung: 'Beschreibe eine Person aus deiner Familie mit mindestens 3 Eigenschaften auf Türkisch.',
    zusammenfassung: 'zeki = klug, çalışkan = fleißig, tembel = faul, kibar = höflich, dürüst = ehrlich, güvenilir = zuverlässig. Çok davor = sehr.',
    kulturhinweis: 'In der türkischen Kultur wird Höflichkeit (kibarlık) sehr hoch geschätzt. "Kibar" und "nazik" zu sein gilt als große Tugend. Jemanden als "terbiyeli" (gut erzogen) zu bezeichnen ist ein großes Kompliment — es zeigt, dass er respektvoll und anständig ist.',
  },

  // ── Zahlen & Mengen ────────────────────────────────────────────
  'Ordinalzahlen & Mengen': {
    lernziel: 'Ordinalzahlen (erster, zweiter…) und Mengenangaben auf Türkisch.',
    woerter: [
      { tr: 'birinci',  de: 'erste(r/s)',       extra: 'bir + -(i)nci → birinci',      audio: 'audio/birinci.mp3' },
      { tr: 'ikinci',   de: 'zweite(r/s)',      extra: 'iki + -nci → ikinci',          audio: 'audio/ikinci.mp3' },
      { tr: 'üçüncü',   de: 'dritte(r/s)',      extra: 'üç + -üncü → üçüncü',         audio: 'audio/ucuncu.mp3' },
      { tr: 'dördüncü', de: 'vierte(r/s)',      extra: 'dört + -üncü → dördüncü',     audio: 'audio/dorduncu.mp3' },
      { tr: 'beşinci',  de: 'fünfte(r/s)',      extra: 'beş + -inci → beşinci',       audio: 'audio/besinci.mp3' },
      { tr: 'onuncu',   de: 'zehnte(r/s)',      extra: 'on + -uncu → onuncu',         audio: 'audio/onuncu.mp3' },
      { tr: 'son',      de: 'letzte(r/s)',      extra: 'son durak = letzte Haltestelle', audio: 'audio/son.mp3' },
      { tr: 'tane',     de: 'Stück (Zählwort)', extra: 'üç tane elma = drei Äpfel',   audio: 'audio/tane.mp3' },
      { tr: 'kilo',     de: 'Kilogramm',        extra: 'bir kilo = ein Kilo',          audio: 'audio/kilo.mp3' },
      { tr: 'gram',     de: 'Gramm',            extra: 'yüz gram = 100 Gramm',         audio: 'audio/gram.mp3' },
      { tr: 'litre',    de: 'Liter',            extra: 'iki litre su = zwei Liter Wasser', audio: 'audio/litre.mp3' },
      { tr: 'yarım',    de: 'ein halb',         extra: 'yarım kilo = ein halbes Kilo', audio: 'audio/yarim.mp3' },
      { tr: 'çeyrek',   de: 'ein Viertel',      extra: 'çeyrek ekmek = ein Viertel Brot', audio: 'audio/ceyrek.mp3' },
      { tr: 'birkaç',   de: 'ein paar / einige', extra: 'birkaç dakika = ein paar Minuten', audio: 'audio/birkac.mp3' },
    ],
    erklaerung: 'Ordinalzahl: Zahl + -(i)nci/-ıncı/-uncu/-üncü je nach Vokalharmonie. Mengenwörter (tane, kilo) stehen nach der Zahl: beş tane = fünf Stück. "Birinci" = erster/erste/erstes — im Türkischen gibt es keine Genusunterschiede!',
    grammatiktipp: 'Ordinalzahlendung -ıncı/-inci/-uncu/-üncü: bir + ıncı = birinci (1.), iki + nci = ikinci (2.), üç + üncü = üçüncü (3.). Vokalharmonie beachten! on + uncu = onuncu (10.).',
    beispiele: [
      { tr: 'Ben birinci sıraya oturuyorum.', de: 'Ich sitze in der ersten Reihe.',        audio: 'audio/birinci_siraya.mp3' },
      { tr: 'İki kilo domates lütfen.',       de: 'Zwei Kilo Tomaten bitte.',              audio: 'audio/iki_kilo_domates.mp3' },
      { tr: 'Birkaç dakika bekleyin lütfen.', de: 'Warten Sie bitte ein paar Minuten.',    audio: 'audio/birkac_dakika.mp3' },
      { tr: 'Hiç problem yok.',              de: 'Kein Problem.',                          audio: 'audio/hic_problem_yok.mp3' },
      { tr: 'Yarım kilo et lütfen.',         de: 'Ein halbes Kilo Fleisch bitte.',         audio: 'audio/yarim_kilo_et.mp3' },
      { tr: 'Üçüncü kapıdan girin.',         de: 'Gehen Sie durch die dritte Tür.',       audio: 'audio/ucuncu_kapidan.mp3' },
      { tr: 'İki litre su alabilir miyim?',  de: 'Kann ich zwei Liter Wasser bekommen?',  audio: 'audio/iki_litre_su.mp3' },
      { tr: 'Beş tane elma lütfen.',         de: 'Fünf Äpfel bitte.',                     audio: 'audio/bes_tane_elma.mp3' },
    ],
    miniDialog: [
      { sprecher: 'A', tr: 'Hangi duraksınız?',             de: 'An welcher Haltestelle sind Sie?' },
      { sprecher: 'B', tr: 'Üçüncü durakta iniyorum.',      de: 'Ich steige an der dritten Haltestelle aus.' },
      { sprecher: 'A', tr: 'Bu birinci mi?',                de: 'Ist das die erste?' },
      { sprecher: 'B', tr: 'Evet, şu an birincideyiz.',     de: 'Ja, wir sind gerade an der ersten.' },
      { sprecher: 'A', tr: 'Birkaç dakika daha var mı?',   de: 'Noch ein paar Minuten?' },
      { sprecher: 'B', tr: 'Yaklaşık beş dakika.',         de: 'Ungefähr fünf Minuten.' },
      { sprecher: 'A', tr: 'Tamam, teşekkürler!',          de: 'OK, danke!' },
      { sprecher: 'B', tr: 'Rica ederim.',                  de: 'Gern geschehen.' },
    ],
    nachsprech: [
      { tr: 'birinci',  audio: 'audio/birinci.mp3' },
      { tr: 'ikinci',   audio: 'audio/ikinci.mp3' },
      { tr: 'üçüncü',   audio: 'audio/ucuncu.mp3' },
      { tr: 'dördüncü', audio: 'audio/dorduncu.mp3' },
      { tr: 'beşinci',  audio: 'audio/besinci.mp3' },
      { tr: 'tane',     audio: 'audio/tane.mp3' },
      { tr: 'yarım',    audio: 'audio/yarim.mp3' },
      { tr: 'birkaç',   audio: 'audio/birkac.mp3' },
    ],
    hoerUebung: 'Höre eine Ordinalzahl oder eine Mengenangabe — welche ist es?',
    anwendung: 'Übe: Nenne die ersten 5 Ordinalzahlen laut. Dann: Wie viel von was kaufst du gerade ein?',
    zusammenfassung: 'birinci/ikinci/üçüncü = erste/zweite/dritte. tane = Stück, yarım = halb, birkaç = einige, hiç = gar nicht.',
    kulturhinweis: '"Birinci olmak" (Erster werden) ist in der türkischen Gesellschaft sehr geschätzt — ob in der Schule oder im Sport. Der Ausdruck "birinci sınıf" (erster Klasse) bedeutet auch "top quality".',
  },

  // ── Essen & Trinken ───────────────────────────────────────────
  'Türkische Gerichte': {
    lernziel: 'Typische türkische Gerichte kennen, benennen und im Restaurant bestellen.',
    woerter: [
      { tr: 'döner',            de: 'Döner (Fleisch am Spieß)',      extra: 'İskender döner = berühmte Variante',    audio: 'audio/doner.mp3' },
      { tr: 'kebap',            de: 'Kebab / Grillfleisch',           extra: 'Adana, Urfa, şiş kebap',               audio: 'audio/kebap.mp3' },
      { tr: 'köfte',            de: 'Hackfleischbällchen',            extra: 'ızgara köfte = gegrillte Köfte',       audio: 'audio/kofte.mp3' },
      { tr: 'börek',            de: 'Blätterteiggebäck (herzhaft)',   extra: 'su böreği, sigara böreği',             audio: 'audio/borek.mp3' },
      { tr: 'pilav',            de: 'Pilaw / Reisgericht',            extra: 'Beilage zu fast allem',                audio: 'audio/pilav.mp3' },
      { tr: 'çorba',            de: 'Suppe',                          extra: 'erstes Gericht beim türk. Essen',      audio: 'audio/corba.mp3' },
      { tr: 'mercimek çorbası', de: 'Linsensuppe',                    extra: 'mercimek = Linse',                     audio: 'audio/mercimek_corbasi.mp3' },
      { tr: 'baklava',          de: 'Baklava (süßes Gebäck)',         extra: 'mit Pistazien oder Walnüssen',         audio: 'audio/baklava.mp3' },
      { tr: 'ayran',            de: 'Joghurtgetränk (gesalzen)',      extra: 'klassisches Getränk zur Mahlzeit',     audio: 'audio/ayran.mp3' },
      { tr: 'simit',            de: 'Sesamkringel / türk. Bagel',     extra: 'Straßenfrühstück in der Türkei',       audio: 'audio/simit.mp3' },
      { tr: 'meze',             de: 'Vorspeisen / Beilagenauswahl',   extra: 'viele kleine Schälchen zusammen',      audio: 'audio/meze.mp3' },
      { tr: 'lahmacun',         de: 'Türkische Dünnbrot-Pizza',       extra: 'mit Hackfleisch + Kräutern belegt',    audio: 'audio/lahmacun.mp3' },
      { tr: 'pide',             de: 'Türkisches Fladenbrot / Pide',   extra: 'auch: belegtes Pide wie Pizza',        audio: 'audio/pide.mp3' },
      { tr: 'menü',             de: 'Menü / Tagesmenü',               extra: 'Menü almak = Menü nehmen',             audio: 'audio/menu.mp3' },
      { tr: 'hesap',            de: 'Rechnung',                       extra: 'Hesap lütfen! = Die Rechnung bitte!',  audio: 'audio/hesap.mp3' },
    ],
    erklaerung: 'In der Türkei ist Essen ein soziales Erlebnis — Gerichte werden geteilt, und die Mahlzeit beginnt meist mit Çorba (Suppe). Beim Bestellen hilft: "[Yemek adı] alabilir miyim?" (Kann ich [Gericht] bekommen?). Die Rechnung ruft man mit "Hesap lütfen!" herbei. Çay wird nach dem Essen fast immer angeboten — ablehnen gilt als ungewöhnlich.',
    grammatiktipp: '"Alabilir miyim?" = Kann ich ... bekommen? (al- = nehmen, -abilir = können, mı = Fragepartikel). Muster: [Yemek] + alabilir miyim?',
    beispiele: [
      { tr: 'Bir mercimek çorbası alabilir miyim?', de: 'Kann ich eine Linsensuppe bekommen?',      audio: 'audio/bir_mercimek_corbasi.mp3' },
      { tr: 'Baklava çok tatlı!',                   de: 'Baklava ist sehr süß!',                    audio: 'audio/baklava_cok_tatli.mp3' },
      { tr: 'Hangi yemekleri önerirsiniz?',          de: 'Welche Gerichte empfehlen Sie?',           audio: 'audio/hangi_yemekleri.mp3' },
      { tr: 'Pilav ve köfte lütfen.',                de: 'Pilaw und Köfte bitte.',                   audio: 'audio/pilav_ve_kofte.mp3' },
      { tr: 'Hesap lütfen!',                         de: 'Die Rechnung bitte!',                      audio: 'audio/hesap_lutfen.mp3' },
      { tr: 'Meze tabağı var mı?',                   de: 'Gibt es einen Meze-Teller?',               audio: 'audio/meze_tabagi_var_mi.mp3' },
      { tr: 'Simit çok lezzetli.',                   de: 'Das Simit ist sehr lecker.',               audio: 'audio/simit_cok_lezzetli.mp3' },
      { tr: 'Ayran soğuk mu?',                       de: 'Ist der Ayran kalt?',                      audio: 'audio/ayran_soguk_mu.mp3' },
    ],
    nachsprech: [
      { tr: 'döner',            audio: 'audio/doner.mp3' },
      { tr: 'köfte',            audio: 'audio/kofte.mp3' },
      { tr: 'baklava',          audio: 'audio/baklava.mp3' },
      { tr: 'ayran',            audio: 'audio/ayran.mp3' },
      { tr: 'mercimek çorbası', audio: 'audio/mercimek_corbasi.mp3' },
      { tr: 'lahmacun',         audio: 'audio/lahmacun.mp3' },
      { tr: 'simit',            audio: 'audio/simit.mp3' },
      { tr: 'hesap',            audio: 'audio/hesap.mp3' },
    ],
    hoerUebung: 'Höre 6 Gerichte — welches wird genannt? Schreibe den türkischen Namen und was du darüber weißt.',
    miniDialog: [
      { sprecher: 'A', tr: 'Acıktın mı?',                         de: 'Hast du Hunger?' },
      { sprecher: 'B', tr: 'Evet, çok acıktım! Ne yiyelim?',      de: 'Ja, ich habe großen Hunger! Was sollen wir essen?' },
      { sprecher: 'A', tr: 'Döner mi, köfte mi?',                  de: 'Döner oder Köfte?' },
      { sprecher: 'B', tr: 'Köfte olsun. Ve bir ayran lütfen.',    de: 'Köfte bitte. Und einen Ayran.' },
      { sprecher: 'A', tr: 'Çorba da alayım mı?',                  de: 'Soll ich auch eine Suppe nehmen?' },
      { sprecher: 'B', tr: 'Tabii, mercimek çorbası çok güzel.',   de: 'Natürlich, die Linsensuppe ist sehr gut.' },
      { sprecher: 'A', tr: 'Sonra baklava yiyelim mi?',            de: 'Sollen wir danach Baklava essen?' },
      { sprecher: 'B', tr: 'Kesinlikle! Ben baklavayı çok severim.', de: 'Auf jeden Fall! Ich liebe Baklava sehr.' },
    ],
    anwendung: 'Spiele eine Restaurantszene: Eine Person ist Kellner/Kellnerin, die andere bestellt auf Türkisch. Benutze: "... alabilir miyim?", "... lütfen" und "Hesap lütfen!"',
    zusammenfassung: 'döner, kebap, köfte, börek, pilav, çorba, baklava, ayran, simit, lahmacun — typisch türkisch! Hesap lütfen = Rechnung bitte.',
    kulturhinweis: 'In der Türkei ist das gemeinsame Essen ein zentrales Ritual der Gastfreundschaft. Wer zu Besuch kommt, wird immer bewirtet — und es gilt als unhöflich, Essen oder Çay abzulehnen. Die Linsensuppe (mercimek çorbası) ist das türkische Nationalgericht.',
  },

  // ── Mein Zuhause ──────────────────────────────────────────────
  'Möbel & Einrichtung': {
    lernziel: 'Möbel und Einrichtungsgegenstände auf Türkisch benennen und beschreiben.',
    woerter: [
      { tr: 'koltuk',           de: 'Sessel / Sofa',           extra: 'koltukta oturmak = im Sessel sitzen',     audio: 'audio/koltuk.mp3' },
      { tr: 'masa',             de: 'Tisch',                   extra: 'yemek masası = Esstisch',                 audio: 'audio/masa.mp3' },
      { tr: 'sandalye',         de: 'Stuhl',                   extra: 'sandalyeye oturmak = sich auf Stuhl setzen', audio: 'audio/sandalye.mp3' },
      { tr: 'yatak',            de: 'Bett',                    extra: 'yatakta uyumak = im Bett schlafen',       audio: 'audio/yatak.mp3' },
      { tr: 'dolap',            de: 'Schrank',                 extra: 'gardırop = Kleiderschrank',               audio: 'audio/dolap.mp3' },
      { tr: 'raf',              de: 'Regal',                   extra: 'kitap rafı = Bücherregal',                audio: 'audio/raf.mp3' },
      { tr: 'halı',             de: 'Teppich',                 extra: 'halı yıkamak = Teppich waschen',          audio: 'audio/hali.mp3' },
      { tr: 'pencere',          de: 'Fenster',                 extra: 'pencereyi açmak = Fenster öffnen',        audio: 'audio/pencere.mp3' },
      { tr: 'kapı',             de: 'Tür',                     extra: 'kapıyı açmak = Tür öffnen',               audio: 'audio/kapi.mp3' },
      { tr: 'lamba',            de: 'Lampe',                   extra: 'lambayı yakmak = Lampe anmachen',         audio: 'audio/lamba.mp3' },
      { tr: 'ayna',             de: 'Spiegel',                 extra: 'aynaya bakmak = in den Spiegel schauen',  audio: 'audio/ayna.mp3' },
      { tr: 'televizyon',       de: 'Fernseher',               extra: 'televizyon izlemek = fernsehen',          audio: 'audio/televizyon.mp3' },
      { tr: 'buzdolabı',        de: 'Kühlschrank',             extra: 'buzdolabı = buz(Eis) + dolabı(Schrank)',  audio: 'audio/buzdolabi.mp3' },
      { tr: 'çamaşır makinesi', de: 'Waschmaschine',           extra: 'çamaşır = Wäsche',                       audio: 'audio/camasir_makinesi.mp3' },
      { tr: 'kanepe',           de: 'Couch / Sofa',            extra: 'oturma odası kanepe = Wohnzimmercouch',   audio: 'audio/kanepe.mp3' },
    ],
    erklaerung: 'Möbelstandorte werden mit dem Lokalkasus ausgedrückt: masa + da = masada (auf dem Tisch). Für "auf dem/an dem" benutzt man Komposita: masanın üstünde (auf dem Tisch), dolabın içinde (im Schrank). Possessivsuffix -ım macht "odam" aus "oda" (Zimmer → mein Zimmer).',
    grammatiktipp: 'Ortsangaben: [Möbel]+da/de = am/im/an dem. Oder: [Möbel]+ın üstünde = auf dem, [Möbel]+ın içinde = im (drin).',
    beispiele: [
      { tr: 'Koltuk çok rahat.',                    de: 'Der Sessel ist sehr bequem.',                   audio: 'audio/koltuk_cok_rahat.mp3' },
      { tr: 'Dolap oturma odasında.',               de: 'Der Schrank ist im Wohnzimmer.',                audio: 'audio/dolap_oturma_odasinda.mp3' },
      { tr: 'Masanın üstünde bir lamba var.',       de: 'Auf dem Tisch steht eine Lampe.',               audio: 'audio/masanin_ustunde.mp3' },
      { tr: 'Yatak odamda büyük bir ayna var.',     de: 'In meinem Schlafzimmer gibt es einen großen Spiegel.', audio: 'audio/yatak_odamda.mp3' },
      { tr: 'Kitaplar rafın üstünde.',              de: 'Die Bücher sind auf dem Regal.',                audio: 'audio/kitaplar_rafin.mp3' },
      { tr: 'Pencere açık mı?',                     de: 'Ist das Fenster offen?',                        audio: 'audio/pencere_acik_mi.mp3' },
      { tr: 'Buzdolabında ne var?',                 de: 'Was ist im Kühlschrank?',                       audio: 'audio/buzdolabinda_ne_var.mp3' },
      { tr: 'Halı çok güzel.',                      de: 'Der Teppich ist sehr schön.',                   audio: 'audio/hali_cok_guzel.mp3' },
    ],
    nachsprech: [
      { tr: 'koltuk',    audio: 'audio/koltuk.mp3' },
      { tr: 'masa',      audio: 'audio/masa.mp3' },
      { tr: 'sandalye',  audio: 'audio/sandalye.mp3' },
      { tr: 'yatak',     audio: 'audio/yatak.mp3' },
      { tr: 'dolap',     audio: 'audio/dolap.mp3' },
      { tr: 'pencere',   audio: 'audio/pencere.mp3' },
      { tr: 'kapı',      audio: 'audio/kapi.mp3' },
      { tr: 'buzdolabı', audio: 'audio/buzdolabi.mp3' },
    ],
    hoerUebung: 'Höre 6 Möbelwörter — in welchem Zimmer steht dieses Möbelstück typischerweise? (Schlafzimmer / Wohnzimmer / Küche / Bad)',
    miniDialog: [
      { sprecher: 'A', tr: 'Evin nasıl?',                            de: 'Wie ist deine Wohnung?' },
      { sprecher: 'B', tr: 'Çok güzel! Büyük bir koltuk var.',       de: 'Sehr schön! Es gibt ein großes Sofa.' },
      { sprecher: 'A', tr: 'Yatak odanda ne var?',                   de: 'Was ist in deinem Schlafzimmer?' },
      { sprecher: 'B', tr: 'Büyük bir yatak ve dolap var.',          de: 'Es gibt ein großes Bett und einen Schrank.' },
      { sprecher: 'A', tr: 'Ayna var mı?',                           de: 'Gibt es einen Spiegel?' },
      { sprecher: 'B', tr: 'Evet, kapının yanında büyük bir ayna.', de: 'Ja, neben der Tür ein großer Spiegel.' },
      { sprecher: 'A', tr: 'Mutfakta buzdolabı nerede?',            de: 'Wo ist der Kühlschrank in der Küche?' },
      { sprecher: 'B', tr: 'Pencerenin yanında.',                    de: 'Neben dem Fenster.' },
    ],
    anwendung: 'Beschreibe dein Zimmer oder deine Wohnung auf Türkisch. Nenne mindestens 5 Möbelstücke und wo sie stehen.',
    zusammenfassung: 'koltuk=Sessel, masa=Tisch, sandalye=Stuhl, yatak=Bett, dolap=Schrank, pencere=Fenster, kapı=Tür, buzdolabı=Kühlschrank.',
    kulturhinweis: 'In vielen türkischen Wohnungen ist das "oturma odası" (Wohnzimmer) der zentrale Raum für Gäste. Auf dem Boden liegende Kissen und Teppiche (halı) spielen eine wichtige Rolle — man sitzt oft auf dem Boden beim gemeinsamen Essen.',
  },

  'In der Stadt & Verkehr': {
    lernziel: 'Orte in der Stadt benennen, nach dem Weg fragen und Transportmittel nutzen.',
    woerter: [
      { tr: 'market',      de: 'Supermarkt',              extra: 'markete gitmek = in den Supermarkt gehen',   audio: 'audio/market.mp3' },
      { tr: 'hastane',     de: 'Krankenhaus',              extra: 'hastaneye gitmek = ins Krankenhaus gehen',   audio: 'audio/hastane.mp3' },
      { tr: 'eczane',      de: 'Apotheke',                 extra: 'en yakın eczane = nächste Apotheke',         audio: 'audio/eczane.mp3' },
      { tr: 'okul',        de: 'Schule',                   extra: 'okula gitmek = zur Schule gehen',            audio: 'audio/okul.mp3' },
      { tr: 'banka',       de: 'Bank',                     extra: 'bankada para çekmek = Geld abheben',         audio: 'audio/banka.mp3' },
      { tr: 'postane',     de: 'Post / Postamt',           extra: 'postaneye paket göndermek = Paket schicken', audio: 'audio/postane.mp3' },
      { tr: 'park',        de: 'Park',                     extra: 'parkta oturmak = im Park sitzen',            audio: 'audio/park.mp3' },
      { tr: 'restoran',    de: 'Restaurant',               extra: 'restoranda yemek = im Restaurant essen',     audio: 'audio/restoran.mp3' },
      { tr: 'otobüs',      de: 'Bus',                      extra: 'otobüse binmek = in den Bus einsteigen',     audio: 'audio/otobus.mp3' },
      { tr: 'metro',       de: 'U-Bahn',                   extra: 'metroya binmek = U-Bahn nehmen',             audio: 'audio/metro.mp3' },
      { tr: 'taksi',       de: 'Taxi',                     extra: 'taksi çağırmak = Taxi rufen',                audio: 'audio/taksi.mp3' },
      { tr: 'istasyon',    de: 'Bahnhof / Station',        extra: 'tren istasyonu = Bahnhof',                   audio: 'audio/istasyon.mp3' },
      { tr: 'sağa',        de: 'rechts (Richtung)',         extra: 'sağa dön = rechts abbiegen',                audio: 'audio/saga.mp3' },
      { tr: 'sola',        de: 'links (Richtung)',          extra: 'sola dön = links abbiegen',                 audio: 'audio/sola.mp3' },
      { tr: 'düz git',     de: 'geradeaus gehen',           extra: 'karşıda = gegenüber',                       audio: 'audio/duz_git.mp3' },
    ],
    erklaerung: 'Richtungsangaben: sağa = nach rechts, sola = nach links, düz git = geradeaus. Nach dem Weg fragt man: "Nerede?" (Wo?) oder "Nasıl gidebilirim?" (Wie kann ich dorthin gehen?). Transportmittel werden mit dem Suffix -le/-la oder "ile" verwendet: otobüsle = mit dem Bus.',
    grammatiktipp: 'Transportmittel + -le/-la = mit dem ...: otobüsle (mit dem Bus), metroyla (mit der U-Bahn), taksiyle (mit dem Taxi). Vokalharmonie beachten!',
    beispiele: [
      { tr: 'En yakın eczane nerede?',        de: 'Wo ist die nächste Apotheke?',                    audio: 'audio/en_yakin_eczane.mp3' },
      { tr: 'Otobüs durağı nerede?',          de: 'Wo ist die Bushaltestelle?',                       audio: 'audio/otobus_duragi.mp3' },
      { tr: 'Sağa dönün, sonra düz gidin.',   de: 'Biegen Sie rechts ab, dann geradeaus.',            audio: 'audio/saga_donun.mp3' },
      { tr: 'Taksiyle gidebilirsiniz.',       de: 'Sie können mit dem Taxi fahren.',                  audio: 'audio/taksiyle_gidebilirsiniz.mp3' },
      { tr: 'Metroyla kaç dakika sürer?',     de: 'Wie viele Minuten dauert es mit der U-Bahn?',      audio: 'audio/metroyla_kac_dakika.mp3' },
      { tr: 'Hastane buradan uzak mı?',       de: 'Ist das Krankenhaus weit von hier?',               audio: 'audio/hastane_buradan_uzak.mp3' },
      { tr: 'Banka sağda, park solda.',       de: 'Die Bank ist rechts, der Park links.',             audio: 'audio/banka_sagda.mp3' },
      { tr: 'Karşıda büyük bir market var.',  de: 'Gegenüber gibt es einen großen Supermarkt.',       audio: 'audio/karsida_buyuk_market.mp3' },
    ],
    nachsprech: [
      { tr: 'market',   audio: 'audio/market.mp3' },
      { tr: 'hastane',  audio: 'audio/hastane.mp3' },
      { tr: 'eczane',   audio: 'audio/eczane.mp3' },
      { tr: 'otobüs',   audio: 'audio/otobus.mp3' },
      { tr: 'metro',    audio: 'audio/metro.mp3' },
      { tr: 'taksi',    audio: 'audio/taksi.mp3' },
      { tr: 'sağa',     audio: 'audio/saga.mp3' },
      { tr: 'sola',     audio: 'audio/sola.mp3' },
    ],
    hoerUebung: 'Höre eine Wegbeschreibung — zeichne die Route auf einem einfachen Stadtplan nach.',
    miniDialog: [
      { sprecher: 'A', tr: 'Affedersiniz, market nerede?',         de: 'Entschuldigung, wo ist der Supermarkt?' },
      { sprecher: 'B', tr: 'Düz gidin, sonra sola dönün.',         de: 'Gehen Sie geradeaus, dann links.' },
      { sprecher: 'A', tr: 'Yürüyerek kaç dakika sürer?',          de: 'Wie viele Minuten dauert es zu Fuß?' },
      { sprecher: 'B', tr: 'Yaklaşık on dakika.',                   de: 'Ungefähr zehn Minuten.' },
      { sprecher: 'A', tr: 'Otobüs var mı orada?',                 de: 'Gibt es dort einen Bus?' },
      { sprecher: 'B', tr: 'Evet, 14 numaralı otobüs gider.',      de: 'Ja, der Bus Nummer 14 fährt dorthin.' },
      { sprecher: 'A', tr: 'Durak uzak mı?',                       de: 'Ist die Haltestelle weit?' },
      { sprecher: 'B', tr: 'Hayır, tam karşıda.',                  de: 'Nein, direkt gegenüber.' },
    ],
    anwendung: 'Erkläre auf Türkisch den Weg von deiner Wohnung zu einem Ort deiner Wahl. Nutze: sağa, sola, düz git, und nenne ein Transportmittel.',
    zusammenfassung: 'market, hastane, eczane, okul, otobüs, metro, taksi, istasyon. sağa=rechts, sola=links, düz git=geradeaus.',
    kulturhinweis: 'In Istanbul ist das Verkehrsnetz sehr gut ausgebaut: Metro, Tram, Fähren (vapur) und Busse sind günstig und zuverlässig. Die İstanbulkart (Nahverkehrskarte) funktioniert für alle Verkehrsmittel.',
  },

  // ── Wetter ────────────────────────────────────────────────────
  'Jahreszeiten & Aktivitäten': {
    lernziel: 'Jahreszeiten und passende Aktivitäten auf Türkisch beschreiben und begründen.',
    woerter: [
      { tr: 'ilkbahar',        de: 'Frühling',                 extra: 'ilkbaharda = im Frühling',              audio: 'audio/ilkbahar.mp3' },
      { tr: 'yaz',             de: 'Sommer',                   extra: 'yazın = im Sommer',                     audio: 'audio/yaz.mp3' },
      { tr: 'sonbahar',        de: 'Herbst',                   extra: 'sonbaharda = im Herbst',                audio: 'audio/sonbahar.mp3' },
      { tr: 'kış',             de: 'Winter',                   extra: 'kışın = im Winter',                     audio: 'audio/kis.mp3' },
      { tr: 'yüzmek',          de: 'schwimmen',                extra: 'denizde yüzmek = im Meer schwimmen',    audio: 'audio/yuzmek.mp3' },
      { tr: 'kayak yapmak',    de: 'Ski fahren',               extra: 'kışın kayak = Ski im Winter',           audio: 'audio/kayak_yapmak.mp3' },
      { tr: 'piknik yapmak',   de: 'picknicken',               extra: 'parkta piknik = Picknick im Park',      audio: 'audio/piknik_yapmak.mp3' },
      { tr: 'yürüyüşe çıkmak', de: 'wandern gehen',           extra: 'dağda yürüyüş = Bergwanderung',         audio: 'audio/yuruyuse_cikmak.mp3' },
      { tr: 'tatile gitmek',   de: 'in den Urlaub fahren',     extra: 'tatil = Urlaub / Ferien',               audio: 'audio/tatile_gitmek.mp3' },
      { tr: 'sıcak',           de: 'heiß / warm',              extra: 'hava sıcak = das Wetter ist heiß',     audio: 'audio/sicak.mp3' },
      { tr: 'soğuk',           de: 'kalt',                     extra: 'hava soğuk = das Wetter ist kalt',     audio: 'audio/soguk.mp3' },
      { tr: 'serin',           de: 'kühl',                     extra: 'serin bir gün = ein kühler Tag',        audio: 'audio/serin.mp3' },
      { tr: 'ılık',            de: 'lauwarm / mild',           extra: 'ılık hava = mildes Wetter',             audio: 'audio/ilik.mp3' },
      { tr: 'yağmur yağmak',   de: 'regnen',                   extra: 'yağmur yağıyor = es regnet',            audio: 'audio/yagmur_yagmak.mp3' },
      { tr: 'kar yağmak',      de: 'schneien',                 extra: 'kar yağıyor = es schneit',              audio: 'audio/kar_yagmak.mp3' },
    ],
    erklaerung: 'Jahreszeiten werden mit speziellen Zeitadverbien benutzt: yazın (im Sommer), kışın (im Winter), ilkbaharda (im Frühling), sonbaharda (im Herbst). "Seviyorum" bedeutet "ich mag / ich liebe" — Begründungen folgen mit "çünkü" (weil). Aktivitäten: Verb + "mak/mek seviyorum" = ich liebe es zu ...',
    grammatiktipp: '"Çünkü" (weil) verbindet Sätze: Yaz seviyorum, çünkü sıcak. Oder: Yüzmek seviyorum çünkü eğlenceli (weil es Spaß macht).',
    beispiele: [
      { tr: 'Yazın denize gidiyorum.',           de: 'Im Sommer fahre ich ans Meer.',                 audio: 'audio/yazin_denize.mp3' },
      { tr: 'Kışın kayak yapmayı seviyorum.',    de: 'Im Winter liebe ich Skifahren.',                audio: 'audio/kisin_kayak.mp3' },
      { tr: 'İlkbaharda hava çok güzel olur.',   de: 'Im Frühling ist das Wetter sehr schön.',        audio: 'audio/ilkbaharda_hava.mp3' },
      { tr: 'Sonbaharda yapraklar dökülür.',     de: 'Im Herbst fallen die Blätter.',                 audio: 'audio/sonbaharda_yapraklar.mp3' },
      { tr: 'Bugün hava çok sıcak!',             de: 'Das Wetter ist heute sehr heiß!',               audio: 'audio/bugun_hava_sicak.mp3' },
      { tr: 'Kışın kar yağıyor mu?',             de: 'Schneit es im Winter?',                         audio: 'audio/kisin_kar_yagiyor.mp3' },
      { tr: 'İlkbaharda piknik yapalım!',        de: 'Im Frühling lass uns ein Picknick machen!',     audio: 'audio/ilkbaharda_piknik.mp3' },
      { tr: 'Tatile gitmek istiyorum.',          de: 'Ich möchte in den Urlaub fahren.',              audio: 'audio/tatile_gitmek_istiyorum.mp3' },
    ],
    nachsprech: [
      { tr: 'ilkbahar',      audio: 'audio/ilkbahar.mp3' },
      { tr: 'yaz',           audio: 'audio/yaz.mp3' },
      { tr: 'sonbahar',      audio: 'audio/sonbahar.mp3' },
      { tr: 'kış',           audio: 'audio/kis.mp3' },
      { tr: 'yüzmek',        audio: 'audio/yuzmek.mp3' },
      { tr: 'sıcak',         audio: 'audio/sicak.mp3' },
      { tr: 'soğuk',         audio: 'audio/soguk.mp3' },
      { tr: 'tatile gitmek', audio: 'audio/tatile_gitmek.mp3' },
    ],
    hoerUebung: 'Höre 5 kurze Sätze — welche Jahreszeit und welche Aktivität wird beschrieben?',
    miniDialog: [
      { sprecher: 'A', tr: 'En sevdiğin mevsim hangisi?',              de: 'Welche Jahreszeit magst du am liebsten?' },
      { sprecher: 'B', tr: 'Yaz! Çünkü yüzmeyi çok seviyorum.',       de: 'Sommer! Weil ich gerne schwimme.' },
      { sprecher: 'A', tr: 'Ben kışı seviyorum. Kayak çok güzel.',     de: 'Ich mag den Winter. Skifahren ist toll.' },
      { sprecher: 'B', tr: 'Kışın çok soğuk olmuyor mu?',             de: 'Ist es im Winter nicht zu kalt?' },
      { sprecher: 'A', tr: 'Biraz soğuk, ama kar çok güzel.',         de: 'Etwas kalt, aber der Schnee ist sehr schön.' },
      { sprecher: 'B', tr: 'Haklısın! Sonbaharda yürüyüşe çıkıyoruz.', de: 'Du hast Recht! Im Herbst gehen wir wandern.' },
      { sprecher: 'A', tr: 'Nereye gidiyorsunuz?',                    de: 'Wohin geht ihr?' },
      { sprecher: 'B', tr: 'Bursa\'ya, Uludağ\'a. Çok güzel orası!', de: 'Nach Bursa, zum Uludağ. Es ist sehr schön dort!' },
    ],
    anwendung: 'Welche Jahreszeit magst du am liebsten und warum? Schreibe 3 Sätze auf Türkisch mit "çünkü" und einer Aktivität.',
    zusammenfassung: 'ilkbahar=Frühling, yaz=Sommer, sonbahar=Herbst, kış=Winter. yazın=im Sommer, kışın=im Winter. Çünkü=weil.',
    kulturhinweis: 'Die Türkei hat sehr unterschiedliche Klimazonen: Am Mittelmeer ist es im Sommer sehr heiß, in Ostanatolien gibt es harte Winter mit viel Schnee. Skigebiete wie Uludağ (Bursa) oder Palandöken (Erzurum) sind sehr beliebt.',
  },

  // ── Körper & Gesundheit ───────────────────────────────────────
  'Gefühle & Emotionen': {
    lernziel: 'Gefühle und emotionale Zustände auf Türkisch ausdrücken und nach dem Befinden fragen.',
    woerter: [
      { tr: 'mutlu',        de: 'glücklich / froh',          extra: 'mutluyum = ich bin glücklich',           audio: 'audio/mutlu.mp3' },
      { tr: 'üzgün',        de: 'traurig',                   extra: 'üzgünüm = ich bin traurig',              audio: 'audio/uzgun.mp3' },
      { tr: 'kızgın',       de: 'wütend / ärgerlich',        extra: 'kızgınım = ich bin wütend',              audio: 'audio/kizgin.mp3' },
      { tr: 'korku',        de: 'Angst / Furcht',             extra: 'korkuyorum = ich habe Angst',           audio: 'audio/korku.mp3' },
      { tr: 'korkmuş',      de: 'verängstigt / erschrocken', extra: 'çok korktum = ich habe sehr erschrocken', audio: 'audio/korkmus.mp3' },
      { tr: 'şaşkın',       de: 'überrascht / verwirrt',     extra: 'şaşkınım = ich bin überrascht',         audio: 'audio/saskin.mp3' },
      { tr: 'yorgun',       de: 'müde',                      extra: 'yorgunum = ich bin müde',                audio: 'audio/yorgun.mp3' },
      { tr: 'heyecanlı',    de: 'aufgeregt / begeistert',    extra: 'heyecanlıyım = ich bin aufgeregt',       audio: 'audio/heyecanli.mp3' },
      { tr: 'stresli',      de: 'gestresst',                 extra: 'stres altındayım = ich bin unter Stress', audio: 'audio/stresli.mp3' },
      { tr: 'rahat',        de: 'entspannt / ruhig',         extra: 'rahatım = ich bin entspannt',            audio: 'audio/rahat.mp3' },
      { tr: 'özlemek',      de: 'vermissen',                 extra: 'seni özledim = ich vermisse dich',        audio: 'audio/ozlemek.mp3' },
      { tr: 'sevmek',       de: 'lieben / mögen',            extra: 'seni seviyorum = ich liebe dich',        audio: 'audio/sevmek.mp3' },
      { tr: 'nefret etmek', de: 'hassen',                    extra: 'nefret ediyorum = ich hasse (es)',       audio: 'audio/nefret_etmek.mp3' },
      { tr: 'endişeli',     de: 'besorgt / ängstlich',       extra: 'endişeleniyorum = ich mache mir Sorgen', audio: 'audio/endiseli.mp3' },
    ],
    erklaerung: 'Gefühle werden als Adjektiv + Kopula (Personalsuffix) ausgedrückt: mutlu + -yum = mutluyum (ich bin glücklich). Nasılsın? = Wie geht es dir? (formell: Nasılsınız?). Das Muster: [Adjektiv] + -yım/-yim/-yum/-yüm für "ich bin [Gefühl]".',
    grammatiktipp: 'Ich bin [Gefühl]: mutluyum, üzgünüm, yorgunum, heyecanlıyım. Frage: [Adjektiv] + -mısın/-misin? → Mutlu musun? (Bist du glücklich?)',
    beispiele: [
      { tr: 'Bugün çok mutluyum!',               de: 'Heute bin ich sehr glücklich!',                  audio: 'audio/bugun_cok_mutluyum.mp3' },
      { tr: 'Biraz üzgünüm, özür dilerim.',      de: 'Ich bin ein bisschen traurig, tut mir leid.',    audio: 'audio/biraz_uzgunum.mp3' },
      { tr: 'Neden bu kadar streslisin?',        de: 'Warum bist du so gestresst?',                    audio: 'audio/neden_bu_kadar.mp3' },
      { tr: 'Seni görünce hep heyecanlanırım.',  de: 'Wenn ich dich sehe, werde ich immer aufgeregt.', audio: 'audio/seni_gorunce.mp3' },
      { tr: 'Çok yorgunum, uyuyacağım.',         de: 'Ich bin sehr müde, ich werde schlafen.',         audio: 'audio/cok_yorgunum.mp3' },
      { tr: 'Neden kızgınsın?',                  de: 'Warum bist du wütend?',                          audio: 'audio/neden_kizginsin.mp3' },
      { tr: 'Seni çok özledim.',                 de: 'Ich habe dich sehr vermisst.',                   audio: 'audio/seni_cok_ozledim.mp3' },
      { tr: 'Rahat mısın? Endişeli görünüyorsun.', de: 'Bist du entspannt? Du siehst besorgt aus.',   audio: 'audio/rahat_misin.mp3' },
    ],
    nachsprech: [
      { tr: 'mutlu',     audio: 'audio/mutlu.mp3' },
      { tr: 'üzgün',     audio: 'audio/uzgun.mp3' },
      { tr: 'kızgın',    audio: 'audio/kizgin.mp3' },
      { tr: 'yorgun',    audio: 'audio/yorgun.mp3' },
      { tr: 'heyecanlı', audio: 'audio/heyecanli.mp3' },
      { tr: 'rahat',     audio: 'audio/rahat.mp3' },
      { tr: 'stresli',   audio: 'audio/stresli.mp3' },
      { tr: 'özlemek',   audio: 'audio/ozlemek.mp3' },
    ],
    hoerUebung: 'Höre 5 kurze Aussagen — welches Gefühl wird ausgedrückt? (mutlu / üzgün / yorgun / heyecanlı / kızgın)',
    miniDialog: [
      { sprecher: 'A', tr: 'Nasılsın bugün?',                          de: 'Wie geht es dir heute?' },
      { sprecher: 'B', tr: 'Biraz yorgunum. Çok çalıştım.',            de: 'Etwas müde. Ich habe viel gearbeitet.' },
      { sprecher: 'A', tr: 'Üzgün müsün de?',                         de: 'Bist du auch traurig?' },
      { sprecher: 'B', tr: 'Hayır, sadece yorgunum. Sen nasılsın?',    de: 'Nein, nur müde. Wie geht es dir?' },
      { sprecher: 'A', tr: 'Ben çok heyecanlıyım! Yarın tatile gidiyorum.', de: 'Ich bin sehr aufgeregt! Morgen fahre ich in den Urlaub.' },
      { sprecher: 'B', tr: 'Vay be! Nereye gidiyorsun?',              de: 'Wow! Wohin fährst du?' },
      { sprecher: 'A', tr: 'İstanbul\'a! Çok özledim orası.',         de: 'Nach Istanbul! Ich habe es sehr vermisst.' },
      { sprecher: 'B', tr: 'Kesinlikle güzel olacak. İyi eğlenceler!', de: 'Das wird sicher schön. Viel Spaß!' },
    ],
    anwendung: 'Wie fühlst du dich gerade? Schreibe 3 Sätze über deine aktuellen Gefühle auf Türkisch. Benutze das Muster: "[Gefühl]yum/im, çünkü..."',
    zusammenfassung: 'mutlu=glücklich, üzgün=traurig, kızgın=wütend, yorgun=müde, heyecanlı=aufgeregt, stresli=gestresst, rahat=entspannt.',
    kulturhinweis: 'Türken drücken Mitgefühl sehr direkt aus: "Geçmiş olsun!" (Gute Besserung / Werde bald gesund) ist eine häufige Antwort auf Krankheit oder Kummer. "Allah sabır versin" (Gott gebe dir Geduld) sagt man in schwierigen Situationen.',
  },

  'Beim Arzt': {
    lernziel: 'Beim Arzt kommunizieren: Symptome beschreiben, Fragen verstehen und auf Rezept antworten.',
    woerter: [
      { tr: 'doktor',       de: 'Arzt / Ärztin',            extra: 'doktora gitmek = zum Arzt gehen',          audio: 'audio/doktor.mp3' },
      { tr: 'hasta',        de: 'krank / Patient',           extra: 'hasta hissetmek = sich krank fühlen',      audio: 'audio/hasta.mp3' },
      { tr: 'ağrı',         de: 'Schmerz',                   extra: 'ağrı var = es tut weh',                    audio: 'audio/agri.mp3' },
      { tr: 'baş ağrısı',   de: 'Kopfschmerzen',             extra: 'baş = Kopf, ağrı = Schmerz',               audio: 'audio/bas_agrisi.mp3' },
      { tr: 'karın ağrısı', de: 'Bauchschmerzen',            extra: 'karın = Bauch / Magen',                    audio: 'audio/karin_agrisi.mp3' },
      { tr: 'ateş',         de: 'Fieber',                    extra: 'ateşim var = ich habe Fieber',             audio: 'audio/ates.mp3' },
      { tr: 'öksürük',      de: 'Husten',                    extra: 'öksürmek = husten',                        audio: 'audio/oksuruk.mp3' },
      { tr: 'nezle',        de: 'Erkältung / Schnupfen',     extra: 'nezle olmak = eine Erkältung haben',       audio: 'audio/nezle.mp3' },
      { tr: 'grip',         de: 'Grippe',                    extra: 'grip olmak = Grippe haben',                audio: 'audio/grip.mp3' },
      { tr: 'ilaç',         de: 'Medikament',                extra: 'ilaç almak = Medikament nehmen',           audio: 'audio/ilac.mp3' },
      { tr: 'reçete',       de: 'Rezept',                    extra: 'reçete yazmak = Rezept ausstellen',        audio: 'audio/recete.mp3' },
      { tr: 'muayene',      de: 'Untersuchung / Arztbesuch', extra: 'muayene olmak = untersucht werden',        audio: 'audio/muayene.mp3' },
      { tr: 'ambulans',     de: 'Krankenwagen',              extra: 'ambulans çağırmak = Krankenwagen rufen',   audio: 'audio/ambulans.mp3' },
      { tr: 'diş ağrısı',   de: 'Zahnschmerzen',            extra: 'diş = Zahn',                               audio: 'audio/dis_agrisi.mp3' },
    ],
    erklaerung: 'Schmerz wird mit Körperteil + ağrısı gebildet: baş (Kopf) → baş ağrısı, diş (Zahn) → diş ağrısı, bel (Rücken) → bel ağrısı. Um Schmerzen auszudrücken: "[Körperteil]ım ağrıyor" = mein [Körperteil] tut weh. Zeitangabe: "üç gündür" = seit drei Tagen.',
    grammatiktipp: '"[Körperteil]+ım ağrıyor" = mein [Körperteil] tut weh: başım ağrıyor (mein Kopf), karnım ağrıyor (mein Bauch), boğazım ağrıyor (mein Hals).',
    beispiele: [
      { tr: 'Çok hasta hissediyorum.',                de: 'Ich fühle mich sehr krank.',                       audio: 'audio/cok_hasta_hissediyorum.mp3' },
      { tr: 'Başım çok ağrıyor.',                     de: 'Mein Kopf schmerzt sehr.',                         audio: 'audio/basim_cok_agriyor.mp3' },
      { tr: 'Ateşim var, öksürüyorum.',               de: 'Ich habe Fieber und Husten.',                       audio: 'audio/atesim_var_oksuruyorum.mp3' },
      { tr: 'Doktora gitmem lazım.',                  de: 'Ich muss zum Arzt gehen.',                         audio: 'audio/doktora_gitmem.mp3' },
      { tr: 'Üç gündür ateşim var.',                  de: 'Ich habe seit drei Tagen Fieber.',                 audio: 'audio/uc_gundur_atesim.mp3' },
      { tr: 'Boğazım çok ağrıyor.',                   de: 'Mein Hals tut sehr weh.',                          audio: 'audio/bogazim_cok_agriyor.mp3' },
      { tr: 'Bu ilaçları nasıl kullanacağım?',        de: 'Wie soll ich diese Medikamente benutzen?',         audio: 'audio/bu_ilaclari_nasil.mp3' },
      { tr: 'Nezleyim, istirahat edeceğim.',          de: 'Ich habe eine Erkältung, ich werde mich ausruhen.', audio: 'audio/nezleyim_istirahat.mp3' },
    ],
    nachsprech: [
      { tr: 'doktor',      audio: 'audio/doktor.mp3' },
      { tr: 'ağrı',        audio: 'audio/agri.mp3' },
      { tr: 'ateş',        audio: 'audio/ates.mp3' },
      { tr: 'öksürük',     audio: 'audio/oksuruk.mp3' },
      { tr: 'nezle',       audio: 'audio/nezle.mp3' },
      { tr: 'ilaç',        audio: 'audio/ilac.mp3' },
      { tr: 'reçete',      audio: 'audio/recete.mp3' },
      { tr: 'muayene',     audio: 'audio/muayene.mp3' },
    ],
    hoerUebung: 'Höre eine Arztgespräch — welche Symptome werden genannt? Notiere: Schmerz, Fieber, Husten oder andere.',
    miniDialog: [
      { sprecher: 'Doktor', tr: 'Nasılsınız? Neyiniz var?',                       de: 'Wie geht es Ihnen? Was haben Sie?' },
      { sprecher: 'Hasta',  tr: 'Üç gündür ateşim var ve çok öksürüyorum.',       de: 'Ich habe seit drei Tagen Fieber und huste viel.' },
      { sprecher: 'Doktor', tr: 'Başka şikayetiniz var mı?',                      de: 'Haben Sie weitere Beschwerden?' },
      { sprecher: 'Hasta',  tr: 'Evet, boğazım da ağrıyor.',                      de: 'Ja, mein Hals tut auch weh.' },
      { sprecher: 'Doktor', tr: 'Anladım. Sizi muayene edeyim.',                  de: 'Verstanden. Lassen Sie mich Sie untersuchen.' },
      { sprecher: 'Hasta',  tr: 'Tamam, doktor bey.',                             de: 'In Ordnung, Herr Doktor.' },
      { sprecher: 'Doktor', tr: 'Grip gibi görünüyor. Size ilaç yazacağım.',      de: 'Sieht nach Grippe aus. Ich werde Ihnen Medikamente aufschreiben.' },
      { sprecher: 'Hasta',  tr: 'Teşekkür ederim. Bu ilaçları nasıl kullanacağım?', de: 'Danke. Wie soll ich diese Medikamente nehmen?' },
    ],
    anwendung: 'Spiele eine Arztszene: Eine Person ist Arzt/Ärztin, die andere ist Patient. Beschreibe auf Türkisch: was tut weh? Seit wann? Was hat man schon versucht?',
    zusammenfassung: 'hasta=krank, ağrı=Schmerz, ateş=Fieber, öksürük=Husten, nezle=Erkältung, grip=Grippe, ilaç=Medikament, reçete=Rezept.',
    kulturhinweis: 'In der Türkei gibt es staatliche Gesundheitszentren (Sağlık Merkezi) für einfache Beschwerden, die günstig und schnell erreichbar sind. "Geçmiş olsun!" (Gute Besserung!) ist eine sehr häufige und herzliche Grußformel bei Krankheit.',
  },

  // ── Grammatik A1 ──────────────────────────────────────────────
  'Possessivsuffixe': {
    lernziel: 'Possessivsuffixe benutzen: mein, dein, sein/ihr auf Türkisch — mit Vokalharmonie.',
    woerter: [
      { tr: '-ım / -im / -um / -üm', de: 'mein (ich)',             extra: 'evim = mein Haus, arabam = mein Auto',  audio: 'audio/suffix_im.mp3' },
      { tr: '-ın / -in / -un / -ün', de: 'dein (du)',              extra: 'evin = dein Haus, kitabın = dein Buch', audio: 'audio/suffix_in.mp3' },
      { tr: '-ı / -i / -u / -ü',    de: 'sein / ihr (er/sie/es)', extra: 'evi = sein Haus, arabası = sein Auto',   audio: 'audio/suffix_i.mp3' },
      { tr: 'evim',        de: 'mein Haus',                    extra: 'ev + im (vorderer Vokal e)',              audio: 'audio/evim.mp3' },
      { tr: 'evin',        de: 'dein Haus',                    extra: 'ev + in',                                 audio: 'audio/evin.mp3' },
      { tr: 'evi',         de: 'sein / ihr Haus',              extra: 'ev + i',                                  audio: 'audio/evi.mp3' },
      { tr: 'arabam',      de: 'mein Auto',                    extra: 'araba + m (nach Vokal nur -m)',            audio: 'audio/arabam.mp3' },
      { tr: 'araban',      de: 'dein Auto',                    extra: 'araba + n',                               audio: 'audio/araban.mp3' },
      { tr: 'kitabım',     de: 'mein Buch',                    extra: 'kitap → kitab- (p→b vor Vokal)',           audio: 'audio/kitabim.mp3' },
      { tr: 'adım',        de: 'mein Name',                    extra: 'ad + ım (hinterer Vokal a)',               audio: 'audio/adim.mp3' },
      { tr: 'ailem',       de: 'meine Familie',                extra: 'aile + m (nach Vokal nur -m)',             audio: 'audio/ailem.mp3' },
      { tr: 'arkadaşım',   de: 'mein Freund/meine Freundin',  extra: 'arkadaş + ım',                            audio: 'audio/arkadasim.mp3' },
      { tr: 'kardeşim',    de: 'mein Geschwisterteil',         extra: 'kardeş + im (vorderer Vokal e)',           audio: 'audio/kardesim.mp3' },
      { tr: 'babam',       de: 'mein Vater',                   extra: 'baba + m (nach Vokal nur -m)',             audio: 'audio/babam.mp3' },
    ],
    erklaerung: 'Possessivsuffixe werden direkt ans Nomen gehängt und folgen der Vokalharmonie: nach a/ı → -ım, nach e/i → -im, nach o/u → -um, nach ö/ü → -üm. Endet das Nomen auf einen Vokal, fällt der Binde-Vokal weg: araba + m = arabam. Wichtig: manche Konsonanten ändern sich vor Vokalen (kitap → kitabım, p→b).',
    grammatiktipp: 'Regel: Nomen + Possessivsuffix. Endet das Wort auf Konsonant: +ım/im/um/üm. Endet auf Vokal: nur +m/-n/-sı. Konsonantenwechsel: p→b, ç→c, k→ğ, t→d vor Vokal.',
    saatzbausteine: [
      'Benim [Nomen]ım/im. → Mein/e ... (ich)',
      'Senin [Nomen]ın/in. → Dein/e ... (du)',
      'Onun [Nomen]ı/i. → Sein/Ihr ... (er/sie)',
    ],
    beispiele: [
      { tr: 'Benim adım Berkay.',            de: 'Mein Name ist Berkay.',                    audio: 'audio/benim_adim.mp3' },
      { tr: 'Senin evin çok büyük.',         de: 'Dein Haus ist sehr groß.',                 audio: 'audio/senin_evin.mp3' },
      { tr: 'Onun arabası çok hızlı.',       de: 'Sein/Ihr Auto ist sehr schnell.',          audio: 'audio/onun_arabasi.mp3' },
      { tr: 'Ailem İstanbul\'da yaşıyor.',   de: 'Meine Familie lebt in Istanbul.',          audio: 'audio/ailem_istanbulda.mp3' },
      { tr: 'Kitabım nerede?',               de: 'Wo ist mein Buch?',                        audio: 'audio/kitabim_nerede.mp3' },
      { tr: 'Arkadaşım çok iyi.',            de: 'Mein Freund ist sehr gut.',                audio: 'audio/arkadasim_cok_iyi.mp3' },
      { tr: 'Kardeşim Ankara\'da oturuyor.', de: 'Mein Geschwisterteil wohnt in Ankara.',   audio: 'audio/kardesim_ankarada.mp3' },
      { tr: 'Babam mühendis.',               de: 'Mein Vater ist Ingenieur.',                audio: 'audio/babam_muhendis.mp3' },
    ],
    nachsprech: [
      { tr: 'evim',      audio: 'audio/evim.mp3' },
      { tr: 'evin',      audio: 'audio/evin.mp3' },
      { tr: 'arabam',    audio: 'audio/arabam.mp3' },
      { tr: 'kitabım',   audio: 'audio/kitabim.mp3' },
      { tr: 'adım',      audio: 'audio/adim.mp3' },
      { tr: 'ailem',     audio: 'audio/ailem.mp3' },
      { tr: 'kardeşim',  audio: 'audio/kardesim.mp3' },
      { tr: 'babam',     audio: 'audio/babam.mp3' },
    ],
    hoerUebung: 'Höre 6 Nomen mit Possessivsuffix — welche Person (ich/du/er-sie) wird ausgedrückt?',
    miniDialog: [
      { sprecher: 'A', tr: 'Bu senin kitabın mı?',                   de: 'Ist das dein Buch?' },
      { sprecher: 'B', tr: 'Evet, bu benim kitabım.',                de: 'Ja, das ist mein Buch.' },
      { sprecher: 'A', tr: 'Ve bu araba? Senin mi?',                 de: 'Und dieses Auto? Deins?' },
      { sprecher: 'B', tr: 'Hayır, bu babamın arabası.',             de: 'Nein, das ist das Auto meines Vaters.' },
      { sprecher: 'A', tr: 'Kardeşin de araba kullanıyor mu?',       de: 'Fährt dein Geschwisterteil auch Auto?' },
      { sprecher: 'B', tr: 'Evet, kardeşimin de arabası var.',       de: 'Ja, mein Geschwisterteil hat auch ein Auto.' },
      { sprecher: 'A', tr: 'Aileniz İstanbul\'da mı oturuyor?',      de: 'Wohnt eure Familie in Istanbul?' },
      { sprecher: 'B', tr: 'Evet, ailem İstanbul\'da yaşıyor.',      de: 'Ja, meine Familie lebt in Istanbul.' },
    ],
    anwendung: 'Übe: Schreibe 5 Sätze über deine Familie oder Besitztümer. Benutze mindestens 3 verschiedene Possessivsuffixe.',
    zusammenfassung: '-ım/-im/-um/-üm = mein, -ın/-in/-un/-ün = dein, -ı/-i/-u/-ü = sein/ihr. Vokalharmonie beachten! evim=mein Haus, araban=dein Auto.',
    kulturhinweis: 'In der türkischen Kultur sind Familienbande sehr eng. Possessivformen werden häufig benutzt, wenn man über Familienangehörige spricht — "annem" (meine Mutter), "babam" (mein Vater). Es ist ganz natürlich, auch in formellen Situationen von "ailem" zu sprechen.',
  },

  'Lokalkasus: -de/-da/-den/-dan': {
    lernziel: 'Den Ort ausdrücken (wo? = -de/-da) und die Herkunft (woher? = -den/-dan) auf Türkisch.',
    woerter: [
      { tr: '-de / -da',    de: 'in / an / auf (Ort)',      extra: 'evde = zu Hause; parkta = im Park',           audio: 'audio/suffix_de.mp3' },
      { tr: '-den / -dan',  de: 'aus / von (Herkunft)',     extra: 'evden = von zu Hause; Almanya\'dan = aus DE',  audio: 'audio/suffix_den.mp3' },
      { tr: 'evde',         de: 'zu Hause / im Haus',       extra: 'ev + de (vorderer Vokal e)',                   audio: 'audio/evde.mp3' },
      { tr: 'okulda',       de: 'in der Schule',             extra: 'okul + da (hinterer Vokal u)',                 audio: 'audio/okulda.mp3' },
      { tr: 'markette',     de: 'im Supermarkt',             extra: 'market + te (stimmlos t → -te)',               audio: 'audio/markette.mp3' },
      { tr: 'Türkiye\'de',  de: 'in der Türkei',             extra: 'nach Vokal direkt -de',                       audio: 'audio/turkiyede.mp3' },
      { tr: 'Almanya\'da',  de: 'in Deutschland',            extra: 'nach a → -da',                                audio: 'audio/almanyada.mp3' },
      { tr: 'evden',        de: 'von zu Hause',              extra: 'ev + den',                                    audio: 'audio/evden.mp3' },
      { tr: 'okuldan',      de: 'von der Schule',            extra: 'okul + dan (hinterer Vokal)',                  audio: 'audio/okuldan.mp3' },
      { tr: 'Almanya\'dan', de: 'aus Deutschland',           extra: 'Almanya + dan',                               audio: 'audio/almanyadan.mp3' },
      { tr: 'nerede',       de: 'wo?',                       extra: 'Neredesin? = Wo bist du?',                    audio: 'audio/nerede.mp3' },
      { tr: 'nereden',      de: 'woher?',                    extra: 'Nereden geliyorsun? = Woher kommst du?',       audio: 'audio/nereden.mp3' },
      { tr: 'kütüphanede',  de: 'in der Bibliothek',         extra: 'kütüphane + de',                              audio: 'audio/kutuphanede.mp3' },
      { tr: 'hastaneden',   de: 'vom Krankenhaus',           extra: 'hastane + den',                               audio: 'audio/hastaneden.mp3' },
    ],
    erklaerung: 'Der Lokalkasus (-de/-da) zeigt: wo etwas ist. Der Ablativ (-den/-dan) zeigt: woher etwas kommt. Vokalharmonie: nach vorderen Vokalen (e/i/ö/ü) → -de/-den; nach hinteren (a/ı/o/u) → -da/-dan. Nach stimmlosen Konsonanten (ç f h k p s ş t) wird d → t: market → markette, kitap → kitapta.',
    grammatiktipp: 'Zwei Regeln: (1) Vokal-Harmonie: vorderer Vokal → -de/-den, hinterer → -da/-dan. (2) Stimmlos-Assimilation: nach ç,f,h,k,p,s,ş,t → -te/-ten statt -de/-den.',
    saatzbausteine: [
      '[Ort] + -de/-da = ich bin in/an/auf dem Ort: evde, okulda, markette',
      '[Ort] + -den/-dan = ich komme von/aus: evden, okuldan, Almanya\'dan',
      'Nerede? = Wo? / Nereden? = Woher?',
    ],
    beispiele: [
      { tr: 'Ben şimdi evdeyim.',              de: 'Ich bin jetzt zu Hause.',                        audio: 'audio/ben_simdi_evdeyim.mp3' },
      { tr: 'O Almanya\'dan geldi.',           de: 'Er/Sie kam aus Deutschland.',                    audio: 'audio/almanyadan_geldi.mp3' },
      { tr: 'Nerede oturuyorsun?',             de: 'Wo wohnst du?',                                  audio: 'audio/nerede_oturuyorsun.mp3' },
      { tr: 'Nereden geliyorsun?',             de: 'Woher kommst du?',                               audio: 'audio/nereden_geliyorsun.mp3' },
      { tr: 'Çocuklar okulda.',                de: 'Die Kinder sind in der Schule.',                 audio: 'audio/cocuklar_okulda.mp3' },
      { tr: 'Marketten geliyorum.',            de: 'Ich komme vom Supermarkt.',                      audio: 'audio/marketten_geliyorum.mp3' },
      { tr: 'Türkiye\'de yaşıyorum.',          de: 'Ich wohne in der Türkei.',                       audio: 'audio/turkiyede_yasiyorum.mp3' },
      { tr: 'Hastaneden çıktı.',               de: 'Er/Sie ist aus dem Krankenhaus raus.',           audio: 'audio/hastaneden_cikti.mp3' },
    ],
    nachsprech: [
      { tr: 'evde',          audio: 'audio/evde.mp3' },
      { tr: 'okulda',        audio: 'audio/okulda.mp3' },
      { tr: 'markette',      audio: 'audio/markette.mp3' },
      { tr: 'evden',         audio: 'audio/evden.mp3' },
      { tr: 'okuldan',       audio: 'audio/okuldan.mp3' },
      { tr: 'Almanya\'dan',  audio: 'audio/almanyadan.mp3' },
      { tr: 'nerede',        audio: 'audio/nerede.mp3' },
      { tr: 'nereden',       audio: 'audio/nereden.mp3' },
    ],
    hoerUebung: 'Höre 6 Sätze — wird ein Ort (-de/-da) oder eine Herkunft (-den/-dan) ausgedrückt?',
    miniDialog: [
      { sprecher: 'A', tr: 'Şu an neredesin?',                       de: 'Wo bist du gerade?' },
      { sprecher: 'B', tr: 'Kütüphanedeyim. Sen?',                   de: 'Ich bin in der Bibliothek. Du?' },
      { sprecher: 'A', tr: 'Ben evden çalışıyorum.',                 de: 'Ich arbeite von zu Hause.' },
      { sprecher: 'B', tr: 'Nereden geliyorsun normalde?',           de: 'Woher kommst du normalerweise?' },
      { sprecher: 'A', tr: 'Almanya\'dan. Köln\'den.',               de: 'Aus Deutschland. Aus Köln.' },
      { sprecher: 'B', tr: 'Vay be! Almanya\'da nerede yaşıyordun?', de: 'Wow! Wo hast du in Deutschland gelebt?' },
      { sprecher: 'A', tr: 'Köln\'de, ama şimdi İstanbul\'dayım.',   de: 'In Köln, aber jetzt bin ich in Istanbul.' },
      { sprecher: 'B', tr: 'İstanbul\'u seviyor musun?',             de: 'Magst du Istanbul?' },
    ],
    anwendung: 'Übe: Wo bist du gerade? Woher kommst du? Woher kommst du heute? Beantworte diese 3 Fragen auf Türkisch mit -de/-da und -den/-dan.',
    zusammenfassung: '-de/-da = in/an (Ort, nerede?). -den/-dan = aus/von (Herkunft, nereden?). Vokalharmonie + Stimmlos-Regel beachten!',
    kulturhinweis: 'Herkunftsfragen ("Nerelisin?" = Woher bist du?) sind in der Türkei ein völlig normaler Gesprächseinstieg. Stadt und Region sind Teil der Identität — und es gibt großen regionalen Stolz, z.B. auf Istanbul, Ankara oder die Schwarzmeerregion.',
  }
};

// =============================================
// AUDIO LOOKUP — automatische Zuordnung Text → MP3
// Wird aus den woerter-Arrays aller Lektionen gebaut.
// Nachsprechen- und Beispiele-Buttons nutzen das automatisch.
// =============================================
// Dialog-Sätze die nicht in woerter/beispiele stehen
const DIALOG_AUDIO = {
  'Tabii!':                                'audio/tabii.mp3',
  'İyiyim, teşekkürler.':                  'audio/iyiyim_tesekkurler.mp3',
  'Güle güle!':                            'audio/gule_gule.mp3',
  'Şekerli mi?':                           'audio/sekerli_mi.mp3',
  'Günaydın! Nasılsın?':                   'audio/gunaydin_nasilsin.mp3',
  'İyiyim, teşekkürler!':                  'audio/iyiyim_tesekkurler.mp3',
  'Hayır, biraz.':                         'audio/hayir_biraz.mp3',
  'Merhaba! Benim adım Leyla.':            'audio/merhaba_benim_adim_leyla.mp3',
  'Merhaba! Ben Tom. Memnun oldum.':       'audio/merhaba_ben_tom.mp3',
  'Ben Almanya\'danım. Sen?':              'audio/ben_almanyadan_sen.mp3',
  'Ben İstanbul\'danım.':                  'audio/ben_istanbuldan.mp3',
  'Kaç çay istiyorsunuz?':                 'audio/kac_cay_istiyorsunuz.mp3',
  'İki çay lütfen.':                       'audio/iki_cay_lutfen.mp3',
  'Merhaba! Ne alırsınız?':               'audio/merhaba_ne_alirsiniz.mp3',
  'Bir çay, bir kahve lütfen.':            'audio/bir_cay_bir_kahve.mp3',
  'Tamam. Başka?':                         'audio/tamam_baska.mp3',
  'Hesap lütfen!':                         'audio/hesap_lutfen.mp3',
  'On beş lira.':                          'audio/on_bes_lira.mp3',
  'Ben yirmi sekiz yaşındayım. Sen?':      'audio/ben_yirmi_sekiz_sen.mp3',
  'Ben otuz iki yaşındayım.':              'audio/ben_otuz_iki.mp3',
  'Günaydın! Benim adım Lisa. Sen?':       'audio/gunaydin_lisa_sen.mp3',
  'Ben Ahmet. Memnun oldum! Nerelisin?':   'audio/ben_ahmet_nerelisin.mp3',
  'Ben Almanya\'danım. Kaç yaşındasın?':   'audio/almanyadan_kac_yasin.mp3',
  'Yirmi dört yaşındayım. Hoşça kal!':     'audio/yirmi_dort_hosca_kal.mp3',
};

const AUDIO_LOOKUP = (() => {
  const map = {};
  Object.values(LESSON_CONTENT).forEach(lc => {
    (lc.woerter  || []).forEach(w => { if (w.audio) map[w.tr] = w.audio; });
    (lc.beispiele|| []).forEach(b => { if (b.audio) map[b.tr] = b.audio; });
  });
  Object.assign(map, DIALOG_AUDIO);
  return map;
})();

function audioFor(text) {
  return AUDIO_LOOKUP[text] || '';
}

// =============================================
// CATEGORY VISUALS — icon + accent color
// =============================================

const CATEGORY_VISUAL = {
  'Aussprache & Alphabet':   { icon: '🔤', color: '#4A90D9' },
  'Erste Schritte':          { icon: '👋', color: '#2E8B57' },
  'Sich vorstellen':         { icon: '🙋', color: '#16A085' },
  'Zahlen & Mengen':         { icon: '🔢', color: '#E67E22' },
  'Farben & Beschreibungen': { icon: '🎨', color: '#9B59B6' },
  'Familie & Personen':      { icon: '👨‍👩‍👧', color: '#E91E63' },
  'Essen & Trinken':         { icon: '🍽️', color: '#FF5722' },
  'Uhrzeit & Kalender':      { icon: '🕐', color: '#795548' },
  'Mein Zuhause':            { icon: '🏠', color: '#8BC34A' },
  'Wetter':                  { icon: '🌤️', color: '#FFC107' },
  'Körper & Gesundheit':     { icon: '🏥', color: '#F44336' },
  'Grammatik A1':            { icon: '📝', color: '#673AB7' },
};

// =============================================
// CATEGORY DATA — optimierte Reihenfolge
// =============================================

const CATEGORY_DATA = [
  { title: 'Aussprache & Alphabet', lessons: [
    { title: 'Die türkischen Sonderbuchstaben', progress: 0 },
    { title: 'Vokale & Vokalharmonie', progress: 0 },
    { title: 'Aussprache-Training', progress: 0 },
  ]},
  { title: 'Erste Schritte', lessons: [
    { title: 'Hallo & Tschüss', progress: 0 },
    { title: 'Bitte & Danke', progress: 0 },
    { title: 'Ja, Nein, Ich verstehe nicht', progress: 0 },
  ]},
  { title: 'Sich vorstellen', lessons: [
    { title: 'Mein Name ist...', progress: 0 },
    { title: 'Woher kommst du?', progress: 0 },
    { title: 'Wie alt bist du?', progress: 0 },
    { title: 'Alles zusammen — erstes Gespräch', progress: 0 },
  ]},
  { title: 'Zahlen & Mengen', lessons: [
    { title: 'Zahlen 1–10', progress: 0 },
    { title: 'Zahlen 11–100', progress: 0 },
    { title: 'Ordinalzahlen & Mengen', progress: 0 },
  ]},
  { title: 'Farben & Beschreibungen', lessons: [
    { title: 'Farben lernen', progress: 0 },
    { title: 'Adjektive & Beschreibungen', progress: 0 },
    { title: 'Kleidung benennen', progress: 0 },
  ]},
  { title: 'Familie & Personen', lessons: [
    { title: 'Familienmitglieder', progress: 0 },
    { title: 'Beziehungen & Freunde', progress: 0 },
    { title: 'Eigenschaften & Charakter', progress: 0 },
  ]},
  { title: 'Essen & Trinken', lessons: [
    { title: 'Im Café — Bestellen', progress: 0 },
    { title: 'Lebensmittel & Zutaten', progress: 0 },
    { title: 'Essen bestellen', progress: 0 },
    { title: 'Türkische Gerichte', progress: 0 },
  ]},
  { title: 'Uhrzeit & Kalender', lessons: [
    { title: 'Die Uhrzeit', progress: 0 },
    { title: 'Datum & Wochentage', progress: 0 },
    { title: 'Monate & Jahreszeiten', progress: 0 },
  ]},
  { title: 'Mein Zuhause', lessons: [
    { title: 'Das Haus & Zimmer', progress: 0 },
    { title: 'Möbel & Einrichtung', progress: 0 },
    { title: 'In der Stadt & Verkehr', progress: 0 },
  ]},
  { title: 'Wetter', lessons: [
    { title: 'Wetter beschreiben', progress: 0 },
    { title: 'Jahreszeiten & Aktivitäten', progress: 0 },
  ]},
  { title: 'Körper & Gesundheit', lessons: [
    { title: 'Körper & Beschwerden', progress: 0 },
    { title: 'Gefühle & Emotionen', progress: 0 },
    { title: 'Beim Arzt', progress: 0 },
  ]},
  { title: 'Grammatik A1', lessons: [
    { title: 'Verben im Präsens', progress: 0 },
    { title: 'Verneinung & Fragen', progress: 0 },
    { title: 'Possessivsuffixe', progress: 0 },
    { title: 'Lokalkasus: -de/-da/-den/-dan', progress: 0 },
  ]},
];

// =============================================
// SRS — Spaced Repetition System (Light)
// =============================================
// Jede Vokabel bekommt: level (1–5) + nextReview (Timestamp)
// Richtig → level +1 → länger warten | Falsch → level -1 → kürzer warten

const SRS_DAYS = [0, 1, 2, 4, 7, 14]; // Tage pro Level (Index = Level)

function getSrsData(email) {
  return JSON.parse(localStorage.getItem('srs_' + email) || '{}');
}

function setSrsData(email, data) {
  localStorage.setItem('srs_' + email, JSON.stringify(data));
}

function updateReview(email, wordTr, isCorrect) {
  const data  = getSrsData(email);
  const entry = data[wordTr] || { level: 1, nextReview: 0 };
  entry.level  = isCorrect ? Math.min(5, entry.level + 1) : Math.max(1, entry.level - 1);
  entry.nextReview = Date.now() + SRS_DAYS[entry.level] * 86400000;
  data[wordTr] = entry;
  setSrsData(email, data);
}

function getDueWords(email, maxCount) {
  const data = getSrsData(email);
  const now  = Date.now();
  const due  = [];
  Object.values(LESSON_CONTENT).forEach(lc => {
    (lc.woerter || []).forEach(w => {
      const entry = data[w.tr];
      if (entry && entry.nextReview <= now && w.de && !w.de.includes('"')) {
        due.push(w);
      }
    });
  });
  const limit = maxCount || 10;
  return due.sort(() => Math.random() - 0.5).slice(0, limit);
}

function initWordsFromLesson(email, content) {
  if (!content || !content.woerter) return;
  const data     = getSrsData(email);
  const tomorrow = Date.now() + 86400000;
  content.woerter.forEach(w => {
    if (!data[w.tr] && w.de && !w.de.includes('"')) {
      data[w.tr] = { level: 1, nextReview: tomorrow };
    }
  });
  setSrsData(email, data);
}

function renderReviewSection(email) {
  const section = document.getElementById('review-section');
  if (!section) return;
  const due = getDueWords(email);
  if (due.length === 0) { section.classList.add('hidden'); return; }
  section.classList.remove('hidden');
  const sub = document.getElementById('review-subtitle');
  if (sub) sub.innerText = due.length + (due.length === 1 ? ' Wort ist' : ' Wörter sind') + ' bereit zur Wiederholung';
}

// =============================================
// STREAK
// =============================================

function getStreakData(email) {
  return JSON.parse(localStorage.getItem('streak_' + email) || '{"count":0,"lastActiveDate":""}');
}

function setStreakData(email, data) {
  localStorage.setItem('streak_' + email, JSON.stringify(data));
}

function _streakLevel(count) {
  if (count === 0)  return 0;
  if (count < 3)    return 1;
  if (count < 7)    return 2;
  if (count < 14)   return 3;
  if (count < 30)   return 4;
  return 5;
}

function _streakMessage(count) {
  if (count === 0)  return 'Starte heute deine Streak!';
  if (count === 1)  return 'Erster Tag — weiter so!';
  if (count < 3)    return count + ' Tage in Folge — bleib dabei!';
  if (count < 7)    return count + ' Tage am Stück — du brennst! 🔥';
  if (count < 14)   return 'Eine Woche! Harika — wunderbar!';
  if (count < 30)   return count + ' Tage — du bist unaufhaltsam!';
  return count + ' Tage! Legendäre Streak! 🏆';
}

function renderStreakBadge(count, leveledUp) {
  const badge   = document.getElementById('streak-badge');
  const countEl = document.getElementById('streak-count');
  const msgEl   = document.getElementById('streak-message');
  const flameEl = document.getElementById('streak-flame');
  const todayEl = document.getElementById('streak-today');
  if (!badge) return;

  countEl.innerText = count;
  msgEl.innerText   = _streakMessage(count);
  badge.className   = 'streak-badge streak-level-' + _streakLevel(count);

  if (leveledUp && flameEl) {
    flameEl.classList.add('streak-flame-levelup');
    setTimeout(() => flameEl.classList.remove('streak-flame-levelup'), 700);
  }

  if (todayEl) {
    const today = new Date().toISOString().slice(0, 10);
    const data  = getCurrentUser() ? getStreakData(getCurrentUser().email) : { lastActiveDate: '' };
    const doneTodayClass = data.lastActiveDate === today ? 'streak-today-done' : 'streak-today-pending';
    const doneTodayText  = data.lastActiveDate === today ? '✓ Heute gelernt' : '○ Heute noch lernen';
    todayEl.className  = 'streak-today ' + doneTodayClass;
    todayEl.innerText  = doneTodayText;
  }
}

function updateStreak(email) {
  const data      = getStreakData(email);
  const today     = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

  if (data.lastActiveDate === today) {
    renderStreakBadge(data.count, false);
    return; // heute schon gezählt
  }

  const prevCount = data.count;
  if (data.lastActiveDate === yesterday) {
    data.count++;          // Streak fortsetzt
  } else {
    data.count = 1;        // Tag verpasst → neu starten
  }
  data.lastActiveDate = today;
  setStreakData(email, data);

  renderStreakBadge(data.count, data.count > prevCount);

  const milestones = {
    3:  '🔥 3 Tage in Folge! Du brennst für Türkisch!',
    7:  '🔥🔥 Eine Woche am Stück! Harika!',
    14: '🔥🔥🔥 Zwei Wochen! Du bist unaufhaltsam!',
    30: '🏆 30 Tage! Legendäre Streak! Aferin!'
  };
  if (milestones[data.count]) showToast(milestones[data.count]);
}

// =============================================
// CONSTANTS
// =============================================

const UNLOCK_THRESHOLD = 3; // Lektionen die abgeschlossen sein müssen

// =============================================
// STATE
// =============================================

let currentCategoryTitle = '';
let currentLessonTitle = '';
let quizState = { total: 0, answered: 0, correct: 0 };

// =============================================
// AUTH HELPERS
// =============================================

function getCurrentUser() {
  const saved = localStorage.getItem('loggedInUser');
  return saved ? JSON.parse(saved) : null;
}

function getProgressForUser(email) {
  return JSON.parse(localStorage.getItem('progress_' + email) || '{}');
}

function setProgressForUser(email, progress) {
  localStorage.setItem('progress_' + email, JSON.stringify(progress));
}

function loadProgressIntoData(email) {
  const progress = getProgressForUser(email);
  CATEGORY_DATA.forEach(cat => {
    cat.lessons.forEach(lesson => {
      lesson.progress = progress[cat.title + '|||' + lesson.title] || 0;
    });
  });
}

// =============================================
// LEVEL SYSTEM
// =============================================

function getCompletedCount(categoryTitle) {
  const user = getCurrentUser();
  if (!user) return 0;
  const progress = getProgressForUser(user.email);
  const cat = CATEGORY_DATA.find(c => c.title === categoryTitle);
  if (!cat) return 0;
  return cat.lessons.filter(l => (progress[categoryTitle + '|||' + l.title] || 0) === 100).length;
}

function isContainerUnlocked(index) {
  if (index < 3) return true;              // erste 3 immer offen
  const gate = CATEGORY_DATA[index - 3];  // Container 3 Positionen davor ist das Tor
  const threshold = Math.min(UNLOCK_THRESHOLD, gate.lessons.length);
  return getCompletedCount(gate.title) >= threshold;
}

// =============================================
// VIEW SWITCHING
// =============================================

function showRegister() {
  document.getElementById('auth-section').classList.remove('hidden');
  document.getElementById('auth-title').classList.remove('hidden');
  document.getElementById('auth-title').innerText = 'Registrieren';
  document.getElementById('register-box').classList.remove('hidden');
  document.getElementById('login-box').classList.add('hidden');
  document.getElementById('dashboard-section').classList.add('hidden');
}

function showLogin() {
  document.getElementById('auth-section').classList.remove('hidden');
  document.getElementById('auth-title').classList.remove('hidden');
  document.getElementById('auth-title').innerText = 'Login';
  document.getElementById('register-box').classList.add('hidden');
  document.getElementById('login-box').classList.remove('hidden');
  document.getElementById('dashboard-section').classList.add('hidden');
}

function showDashboard(name) {
  const user = getCurrentUser();
  if (!user) { showLogin(); return; }

  loadProgressIntoData(user.email);

  document.getElementById('auth-section').classList.add('hidden');
  document.getElementById('dashboard-section').classList.remove('hidden');
  document.getElementById('greeting').innerText = 'Hoş geldin ' + name + '!';
  document.querySelector('.turkish-greeting').innerText = 'Bugün ne öğrenmek istiyorsun?';

  document.getElementById('category-list').classList.remove('hidden');
  document.getElementById('lesson-list').classList.add('hidden');
  document.getElementById('lesson-detail').classList.add('hidden');
  document.getElementById('review-view').classList.add('hidden');
  document.getElementById('overall-progress').classList.remove('hidden');

  // Motivations-Motto des Tages
  const mottos = [
    'Jede Lektion bringt dich deinem Ziel näher!',
    'Türkisch lernen — Schritt für Schritt zum Erfolg.',
    'Dein Gehirn wächst mit jeder neuen Vokabel!',
    'Heute gelernt = morgen besser kommuniziert.',
    'Kleine Schritte, große Wirkung — weiter so!',
    'Bir adım daha! — Noch ein Schritt!',
    'Sprachen öffnen Türen — du öffnest gerade eine!',
    'Konsistenz schlägt Talent — du bist auf dem richtigen Weg!',
    'Harika! — Fantastisch! Du bist dabei!',
    'Jede Minute die du lernst, zählt.',
  ];
  const banner = document.getElementById('motto-banner');
  if (banner) {
    const idx = new Date().getDate() % mottos.length;
    banner.textContent = mottos[idx];
  }

  const allLessons = CATEGORY_DATA.flatMap(c => c.lessons);
  const totalSum = allLessons.reduce((acc, l) => acc + l.progress, 0);
  // Each fully-complete category (all lessons + test) adds bonus points
  const completedCats = CATEGORY_DATA.filter(c => isCategoryFullyComplete(c.title)).length;
  const lessonPct = allLessons.length > 0 ? Math.round(totalSum / allLessons.length) : 0;
  // Weight: 80% lessons, 20% category completions
  const catBonus = CATEGORY_DATA.length > 0 ? Math.round((completedCats / CATEGORY_DATA.length) * 100) : 0;
  const overall = Math.round(lessonPct * 0.8 + catBonus * 0.2);
  document.getElementById('overall-percent').innerText = overall + '%';
  document.getElementById('overall-fill').style.width = overall + '%';

  const streakData = getStreakData(user.email);
  renderStreakBadge(streakData.count, false);

  renderReviewSection(user.email);
  renderCategories();
}

function showCategory(categoryTitle, index) {
  if (!isContainerUnlocked(index)) {
    const gate = CATEGORY_DATA[index - 3];
    const threshold = Math.min(UNLOCK_THRESHOLD, gate.lessons.length);
    const done = getCompletedCount(gate.title);
    showToast(`🔒 Schließe noch ${threshold - done} Lektion(en) in "${gate.title}" ab, um 3 neue Themen freizuschalten.`);
    return;
  }

  const category = CATEGORY_DATA.find(c => c.title === categoryTitle);
  if (!category) return;

  currentCategoryTitle = categoryTitle;

  document.getElementById('category-list').classList.add('hidden');
  document.getElementById('lesson-detail').classList.add('hidden');
  document.getElementById('lesson-list').classList.remove('hidden');
  document.getElementById('lesson-category-title').innerText = categoryTitle;

  const lessonCards = document.getElementById('lesson-cards');
  lessonCards.innerHTML = '';

  category.lessons.forEach(lesson => {
    const item = document.createElement('div');
    item.className = 'lesson-item';
    item.onclick = () => showLesson(categoryTitle, lesson.title);

    const hasContent = !!LESSON_CONTENT[lesson.title];
    const isDone = lesson.progress === 100;

    const info = document.createElement('div');
    info.className = 'lesson-info';

    const label = document.createElement('div');
    label.style.cssText = 'display:flex;align-items:center;gap:6px;flex-wrap:wrap;';
    label.innerHTML = lesson.title
      + (isDone ? ' <span class="badge badge-done">✓ Fertig</span>' : '')
      + (hasContent && !isDone ? ' <span class="badge badge-available">Verfügbar</span>' : '');

    const percent = document.createElement('div');
    percent.style.cssText = 'font-weight:600;color:#2f4f4f;';
    percent.innerText = lesson.progress + '%';

    info.appendChild(label);
    info.appendChild(percent);

    const barBg = document.createElement('div');
    barBg.className = 'lesson-progress-bar';
    const barFill = document.createElement('div');
    barFill.className = 'lesson-progress-fill' + (isDone ? ' fill-done' : '');
    barFill.style.width = lesson.progress + '%';
    barBg.appendChild(barFill);

    item.appendChild(info);
    item.appendChild(barBg);
    lessonCards.appendChild(item);
  });

  // ── Final Test & Completion Banner ──────────────────────────
  const user = getCurrentUser();
  const testPassed = user ? getCategoryTestPassed(user.email, categoryTitle) : false;
  const lessonsAllDone = allLessonsDone(categoryTitle);

  const finalTestWrap = document.createElement('div');
  finalTestWrap.className = 'ct-final-wrap';

  if (testPassed) {
    // Category fully complete
    finalTestWrap.innerHTML = `
      <div class="ct-complete-banner">
        <span class="ct-complete-icon">🏆</span>
        <div>
          <div class="ct-complete-title">Container abgeschlossen!</div>
          <div class="ct-complete-sub">Alle Lektionen + Abschlusstest bestanden</div>
        </div>
      </div>
    `;
  } else if (lessonsAllDone) {
    // All lessons done — test available
    finalTestWrap.innerHTML = `
      <div class="ct-test-available">
        <div class="ct-test-info">
          <span class="ct-test-icon">📝</span>
          <div>
            <div class="ct-test-title">Abschlusstest verfügbar!</div>
            <div class="ct-test-sub">12 Fragen aus allen Lektionen · Mindestens 70% zum Bestehen</div>
          </div>
        </div>
        <button class="ct-start-btn" onclick="startCategoryTest('${categoryTitle.replace(/'/g, "\\'")}')">
          Test starten →
        </button>
      </div>
    `;
  } else {
    // Not all lessons done yet — show how many are left
    const done = category.lessons.filter(l => l.progress === 100).length;
    const remaining = category.lessons.length - done;
    finalTestWrap.innerHTML = `
      <div class="ct-test-locked">
        <span class="ct-test-lock-icon">🔒</span>
        <div class="ct-test-locked-text">
          Abschlusstest: noch ${remaining} Lektion${remaining === 1 ? '' : 'en'} abzuschließen
        </div>
      </div>
    `;
  }
  lessonCards.appendChild(finalTestWrap);
}

function backToCategories() {
  document.getElementById('lesson-list').classList.add('hidden');
  document.getElementById('lesson-detail').classList.add('hidden');
  const user = getCurrentUser();
  if (user) showDashboard(user.name);
}

function backToLessonList() {
  document.getElementById('lesson-detail').classList.add('hidden');
  const cat = CATEGORY_DATA.find(c => c.title === currentCategoryTitle);
  const catIndex = CATEGORY_DATA.indexOf(cat);
  showCategory(currentCategoryTitle, catIndex);
}

// =============================================
// AUDIO — Web Speech API + Audio-Datei-Support
// =============================================

let _turkishVoice = null;

function _initTurkishVoice() {
  const voices = speechSynthesis.getVoices();
  if (!voices.length) return;

  _turkishVoice =
    // 1. Lokale tr-TR Stimme (beste Qualität, kein Internet nötig)
    voices.find(v => v.lang === 'tr-TR' && v.localService) ||
    // 2. Jede tr-TR Stimme (auch online)
    voices.find(v => v.lang === 'tr-TR') ||
    // 3. Jede türkische Stimme (z.B. tr-CY)
    voices.find(v => v.lang.startsWith('tr')) ||
    // 4. null → Browser-Fallback, lang='tr-TR' wird trotzdem gesetzt
    null;
}

if ('speechSynthesis' in window) {
  // Async: Stimmen laden sich nach dem ersten Aufruf
  speechSynthesis.addEventListener('voiceschanged', _initTurkishVoice);
  // Sync: funktioniert sofort in Firefox
  _initTurkishVoice();
}

/**
 * Türkischen Text aussprechen.
 *
 * @param {string} text     - Türkischer Text
 * @param {string|null} audioUrl - Optionaler Pfad zur MP3-Datei (z.B. "audio/cay.mp3")
 *
 * ─── HIER ECHTE AUDIO-DATEIEN EINBAUEN ────────────────────────────────────
 * Jedes Wort / jeder Satz kann eine eigene Audiodatei bekommen:
 *
 *   In LESSON_CONTENT:
 *     { tr: 'çay', de: 'Tee', audio: 'audio/cay.mp3' }
 *
 *   Im Button-HTML:
 *     data-audio="${w.audio || ''}"
 *
 *   Dann ruft speakFromBtn(this) automatisch die Datei ab,
 *   und fällt nur auf TTS zurück wenn keine Datei gesetzt ist.
 * ──────────────────────────────────────────────────────────────────────────
 */
function speakTurkish(text, audioUrl = null) {
  if (audioUrl) {
    const audio = new Audio(audioUrl);
    audio.play()
      .then(() => console.log('🔊 MP3:', audioUrl))
      .catch(err => {
        console.warn('⚠ MP3 fehlgeschlagen, TTS-Fallback:', audioUrl, err.message);
        _speakViaTTS(text);
      });
    return;
  }
  console.log('🔊 TTS (kein Audio-Pfad):', text);
  _speakViaTTS(text);
}

function _speakViaTTS(text) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();

  const u = new SpeechSynthesisUtterance(text);
  u.lang   = 'tr-TR'; // immer setzen, auch ohne explizite Stimme
  u.rate   = 0.82;    // etwas langsamer → leichter zu folgen für Lernende
  u.pitch  = 1.0;     // natürliche Tonhöhe
  u.volume = 1.0;     // volle Lautstärke

  if (_turkishVoice) u.voice = _turkishVoice; // beste verfügbare türkische Stimme

  speechSynthesis.speak(u);
}

/** Für Buttons mit data-text + optionalem data-audio Attribut */
function speakFromBtn(btn) {
  const text     = btn.dataset.text  || '';
  const audioUrl = btn.dataset.audio || null;
  speakTurkish(text, audioUrl || null);
}

// =============================================
// QUIZ
// =============================================

function getWrongAnswers(correctDe, count) {
  const pool = new Set();
  Object.values(LESSON_CONTENT).forEach(lc => {
    if (lc && lc.woerter) {
      lc.woerter.forEach(w => {
        if (w.de && w.de !== correctDe && w.de.length < 30 && !w.de.includes('"') && !w.de.includes('(')) {
          pool.add(w.de);
        }
      });
    }
  });
  const arr = [...pool].sort(() => Math.random() - 0.5);
  return arr.slice(0, count);
}

function checkAnswer(btn, isCorrect, questionId) {
  const qEl = document.getElementById(questionId);
  if (!qEl || qEl.dataset.answered) return;
  qEl.dataset.answered = 'true';

  const allBtns = qEl.querySelectorAll('.quiz-btn');
  let correctText = '';
  allBtns.forEach(b => {
    b.disabled = true;
    if (b.dataset.correct === 'true') {
      b.classList.add('quiz-correct');
      correctText = b.innerText.trim();
    }
  });
  if (!isCorrect) btn.classList.add('quiz-wrong');
  else quizState.correct++;

  quizState.answered++;

  // SRS update via data-word-tr on the question div
  const wordTr = qEl.dataset.wordTr;
  if (wordTr) {
    const user = getCurrentUser();
    if (user) updateReview(user.email, wordTr, isCorrect);
  }

  // Micro-Feedback
  showMicroFeedback(qEl, isCorrect, correctText);

  const progressEl = document.getElementById('quiz-progress');
  if (progressEl) progressEl.innerText = `${quizState.answered} / ${quizState.total} beantwortet`;

  if (quizState.answered === quizState.total) {
    setTimeout(showQuizResult, 950);
  }
}

function showMicroFeedback(qEl, isCorrect, correctText) {
  const fb = document.createElement('div');
  fb.className = 'micro-feedback ' + (isCorrect ? 'micro-correct' : 'micro-wrong');
  fb.innerText  = isCorrect ? '✓ Richtig!' : '✗ ' + correctText;
  qEl.appendChild(fb);
  requestAnimationFrame(() => fb.classList.add('micro-feedback-show'));
  setTimeout(() => fb.classList.add('micro-feedback-hide'), 950);
  setTimeout(() => fb.remove(), 1250);
}

function showQuizResult() {
  const pct = Math.round((quizState.correct / quizState.total) * 100);
  const passed = pct >= 50;

  let emoji, text, noteLabel, noteClass;
  if (pct === 100) {
    emoji = '🏆'; text = 'Perfekt!';          noteLabel = 'Note 1'; noteClass = 'note-1';
  } else if (pct >= 90) {
    emoji = '⭐'; text = 'Sehr gut!';          noteLabel = 'Note 1'; noteClass = 'note-1';
  } else if (pct >= 75) {
    emoji = '💪'; text = 'Stark gemacht!';     noteLabel = 'Note 2'; noteClass = 'note-2';
  } else if (pct >= 60) {
    emoji = '👍'; text = 'Gut gemacht!';       noteLabel = 'Note 3'; noteClass = 'note-3';
  } else if (pct >= 50) {
    emoji = '✅'; text = 'Bestanden!';         noteLabel = 'Note 4'; noteClass = 'note-4';
  } else {
    emoji = '🔄'; text = 'Fast! Noch einmal?'; noteLabel = 'Nicht bestanden'; noteClass = 'note-fail';
  }

  const overlay = document.createElement('div');
  overlay.className = 'grade-overlay';
  overlay.id = 'grade-overlay';
  overlay.innerHTML = `
    <div class="grade-popup">
      <span class="grade-popup-emoji">${emoji}</span>
      <div class="grade-popup-text">${text}</div>
      <div class="grade-popup-score">${quizState.correct} von ${quizState.total} richtig — ${pct}%</div>
      <span class="grade-popup-note ${noteClass}">${noteLabel}</span><br>
      ${quizState.mode === 'review'
        ? `<button class="grade-popup-btn grade-btn-pass" onclick="closeGradePopup(); finishReview()">Fertig! Zum Dashboard →</button>`
        : passed
          ? `<button class="grade-popup-btn grade-btn-pass" onclick="closeGradePopupAndComplete()">Lektion abschließen ✓</button>`
          : `<button class="grade-popup-btn grade-btn-fail" onclick="closeGradePopupAndRetry()">Nochmal versuchen 🔄</button>`
      }
    </div>
  `;
  document.body.appendChild(overlay);
}

function closeGradePopupAndComplete() {
  document.getElementById('grade-overlay')?.remove();
  completeLesson(currentCategoryTitle, currentLessonTitle);
}

function closeGradePopupAndRetry() {
  document.getElementById('grade-overlay')?.remove();
  showLesson(currentCategoryTitle, currentLessonTitle);
}

function closeGradePopup() {
  document.getElementById('grade-overlay')?.remove();
}

// ─── Falsche Deutsche Antworten (already exists as getWrongAnswers) ────────

function getWrongTurkishAnswers(correctTr, count) {
  const pool = [];
  Object.values(LESSON_CONTENT).forEach(lc => {
    (lc.woerter || []).forEach(w => {
      if (w.tr && w.tr !== correctTr && w.tr.length < 22 && !w.tr.includes('"')) {
        pool.push(w.tr);
      }
    });
  });
  return pool.sort(() => Math.random() - 0.5).slice(0, count);
}

// ─── Frage-Builder — TR→DE ───────────────────────────────────────────────
function buildTrDeQuestion(word, i, prefix) {
  const wrong = getWrongAnswers(word.de, 2);
  const opts  = [{ text: word.de, correct: true }, ...wrong.map(t => ({ text: t, correct: false }))]
    .sort(() => Math.random() - 0.5);
  const optsHTML = opts.map(o => `
    <button class="quiz-btn" data-correct="${o.correct}"
            onclick="checkAnswer(this, ${o.correct}, '${prefix}-q-${i}')">
      ${o.text}
    </button>`).join('');
  const audioBtn = word.audio
    ? `<button class="speak-btn-small" onclick="speakFromBtn(this)" data-text="${word.tr}" data-audio="${word.audio}">🔊</button>`
    : '';
  return `
    <div class="quiz-question" id="${prefix}-q-${i}" data-word-tr="${word.tr}">
      <div class="quiz-type-label">🇹🇷 Was bedeutet…</div>
      <div class="quiz-word-row">
        ${audioBtn}
        <span class="quiz-tr-word">${word.tr}</span>
      </div>
      <div class="quiz-options">${optsHTML}</div>
    </div>`;
}

// ─── Frage-Builder — DE→TR ───────────────────────────────────────────────
function buildDeTrQuestion(word, i, prefix) {
  const wrong = getWrongTurkishAnswers(word.tr, 2);
  if (wrong.length < 2) return buildTrDeQuestion(word, i, prefix); // Fallback
  const opts = [{ text: word.tr, correct: true }, ...wrong.map(t => ({ text: t, correct: false }))]
    .sort(() => Math.random() - 0.5);
  const optsHTML = opts.map(o => `
    <button class="quiz-btn" data-correct="${o.correct}"
            onclick="checkAnswer(this, ${o.correct}, '${prefix}-q-${i}')">
      ${o.text}
    </button>`).join('');
  return `
    <div class="quiz-question" id="${prefix}-q-${i}" data-word-tr="${word.tr}">
      <div class="quiz-type-label">🇩🇪 Wie heißt auf Türkisch…</div>
      <div class="quiz-word-row">
        <span class="quiz-tr-word">${word.de}</span>
      </div>
      <div class="quiz-options">${optsHTML}</div>
    </div>`;
}

// ─── SATZBAU — Drag & Click Satz-Reihenfolge ─────────────────────────────
let _dragSrc = null;

function moveChip(chip, targetZoneId) {
  const zone = document.getElementById(targetZoneId);
  if (!zone) return;
  const oldParent = chip.parentNode;
  zone.querySelectorAll('.satzbau-placeholder').forEach(p => p.remove());
  zone.appendChild(chip);
  if (oldParent && oldParent !== zone && oldParent.classList.contains('satzbau-area')
      && !oldParent.querySelector('.word-chip')) {
    const p = document.createElement('span');
    p.className = 'satzbau-placeholder';
    p.innerText = 'Wörter hier ablegen…';
    oldParent.appendChild(p);
  }
}

function chipClick(chip, questionId) {
  const qEl = document.getElementById(questionId);
  if (!qEl || qEl.dataset.answered) return;
  const inBank = !!chip.closest('#' + questionId + '-bank');
  moveChip(chip, questionId + (inBank ? '-answer' : '-bank'));
}

function satzbauDragStart(e) {
  _dragSrc = e.currentTarget;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', '');
  setTimeout(() => { if (_dragSrc) _dragSrc.classList.add('dragging'); }, 0);
}

function satzbauDragEnd() {
  document.querySelectorAll('.word-chip.dragging, .satzbau-area.drag-over-zone')
    .forEach(el => el.classList.remove('dragging', 'drag-over-zone'));
  _dragSrc = null;
}

function satzbauZoneDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add('drag-over-zone');
}

function satzbauZoneDragLeave(e) {
  e.currentTarget.classList.remove('drag-over-zone');
}

function satzbauZoneDrop(e, zoneId) {
  e.preventDefault();
  document.querySelectorAll('.satzbau-area.drag-over-zone').forEach(z => z.classList.remove('drag-over-zone'));
  if (!_dragSrc) return;
  const zone = document.getElementById(zoneId);
  if (!zone) return;

  // Reorder within the same zone (drag left/right to change position)
  const targetChip = e.target.closest('.word-chip');
  if (targetChip && targetChip !== _dragSrc && zone.contains(targetChip) && zone.contains(_dragSrc)) {
    const rect = targetChip.getBoundingClientRect();
    zone.insertBefore(_dragSrc, e.clientX < rect.left + rect.width / 2 ? targetChip : targetChip.nextSibling);
  } else {
    moveChip(_dragSrc, zoneId);
  }
  _dragSrc.classList.remove('dragging');
  _dragSrc = null;
}

function checkSatzbau(questionId) {
  const qEl = document.getElementById(questionId);
  if (!qEl || qEl.dataset.answered) return;
  const correct   = qEl.dataset.correct;
  const answerEl  = document.getElementById(questionId + '-answer');
  const chips     = [...answerEl.querySelectorAll('.word-chip')];
  if (chips.length === 0) { showToast('Lege zuerst die Wörter in die richtige Reihenfolge!'); return; }
  const isCorrect = chips.map(c => c.dataset.word).join(' ') === correct;
  qEl.dataset.answered = 'true';
  qEl.querySelectorAll('.word-chip').forEach(c => {
    c.setAttribute('draggable', 'false');
    c.style.cursor = 'default';
    c.onclick = null;
    c.classList.add(isCorrect ? 'quiz-correct' : 'quiz-wrong');
  });
  qEl.querySelectorAll('.quiz-check-btn').forEach(b => b.disabled = true);
  if (isCorrect) quizState.correct++;
  quizState.answered++;
  const fb = document.getElementById(questionId + '-satzbau-result');
  if (fb) {
    fb.innerText  = isCorrect ? '✓ Richtig!' : '✗ Richtig wäre: ' + correct;
    fb.className  = 'micro-feedback micro-feedback-show ' + (isCorrect ? 'micro-correct' : 'micro-wrong');
  }
  const progressEl = document.getElementById('quiz-progress');
  if (progressEl) progressEl.innerText = `${quizState.answered} / ${quizState.total} beantwortet`;
  if (quizState.answered === quizState.total) setTimeout(showQuizResult, 950);
}

function buildSatzbauQuestion(beispiel, i, prefix) {
  const words    = beispiel.tr.trim().split(/\s+/);
  const shuffled = [...words].sort(() => Math.random() - 0.5);
  while (words.length > 1 && shuffled.join(' ') === words.join(' ')) shuffled.sort(() => Math.random() - 0.5);
  const chipsHTML = shuffled.map(w => {
    const esc = w.replace(/"/g, '&quot;');
    return `<div class="word-chip" draggable="true" data-word="${esc}"
                 ondragstart="satzbauDragStart(event)" ondragend="satzbauDragEnd(event)"
                 onclick="chipClick(this, '${prefix}-q-${i}')">${w}</div>`;
  }).join('');
  const correctEsc = beispiel.tr.replace(/"/g, '&quot;');
  return `
    <div class="quiz-question satzbau-question" id="${prefix}-q-${i}" data-correct="${correctEsc}">
      <div class="quiz-type-label">🔀 Bringe den Satz in die richtige Reihenfolge</div>
      <div class="satzbau-hint">📖 Bedeutung: <em>${beispiel.de}</em></div>
      <div class="satzbau-area satzbau-answer" id="${prefix}-q-${i}-answer"
           ondragover="satzbauZoneDragOver(event)" ondragleave="satzbauZoneDragLeave(event)"
           ondrop="satzbauZoneDrop(event, '${prefix}-q-${i}-answer')">
        <span class="satzbau-placeholder">Wörter hier ablegen…</span>
      </div>
      <div class="satzbau-area satzbau-bank" id="${prefix}-q-${i}-bank"
           ondragover="satzbauZoneDragOver(event)" ondragleave="satzbauZoneDragLeave(event)"
           ondrop="satzbauZoneDrop(event, '${prefix}-q-${i}-bank')">
        ${chipsHTML}
      </div>
      <button class="quiz-check-btn" onclick="checkSatzbau('${prefix}-q-${i}')">Überprüfen ✓</button>
      <div id="${prefix}-q-${i}-satzbau-result" class="micro-feedback"></div>
    </div>`;
}

// ─── HÖRVERSTÄNDNIS — Audio hören + Deutsch tippen ───────────────────────
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const d = Array.from({length: m + 1}, (_, i) =>
    Array.from({length: n + 1}, (_, j) => i === 0 ? j : j === 0 ? i : 0)
  );
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) {
    d[i][j] = a[i-1] === b[j-1] ? d[i-1][j-1] : 1 + Math.min(d[i-1][j], d[i][j-1], d[i-1][j-1]);
  }
  return d[m][n];
}

function checkHoer(questionId) {
  const qEl     = document.getElementById(questionId);
  if (!qEl || qEl.dataset.answered) return;
  const correct = qEl.dataset.correctDe;
  const wordTr  = qEl.dataset.wordTr;
  const input   = document.getElementById(questionId + '-input');
  const answer  = (input.value || '').trim().toLowerCase();
  if (!answer) { showToast('Bitte eine Antwort eingeben!'); return; }
  const dist    = levenshtein(answer, correct.trim().toLowerCase());
  const maxDist = correct.length <= 4 ? 0 : correct.length <= 9 ? 1 : 2;
  const isCorrect = dist <= maxDist;
  qEl.dataset.answered = 'true';
  input.disabled = true;
  qEl.querySelector('.quiz-check-btn').disabled = true;
  input.classList.add(isCorrect ? 'hoer-correct' : 'hoer-wrong');
  if (isCorrect) quizState.correct++;
  quizState.answered++;
  if (wordTr) { const u = getCurrentUser(); if (u) updateReview(u.email, wordTr, isCorrect); }
  const fb = document.getElementById(questionId + '-hoer-result');
  if (fb) {
    fb.innerText = isCorrect ? '✓ Richtig!' : '✗ Richtig: ' + correct;
    fb.className = 'micro-feedback micro-feedback-show ' + (isCorrect ? 'micro-correct' : 'micro-wrong');
  }
  const progressEl = document.getElementById('quiz-progress');
  if (progressEl) progressEl.innerText = `${quizState.answered} / ${quizState.total} beantwortet`;
  if (quizState.answered === quizState.total) setTimeout(showQuizResult, 950);
}

function buildHoerQuestion(word, i, prefix) {
  const trEsc = word.tr.replace(/"/g, '&quot;');
  const deEsc = word.de.replace(/"/g, '&quot;');
  return `
    <div class="quiz-question hoer-question" id="${prefix}-q-${i}"
         data-word-tr="${trEsc}" data-correct-de="${deEsc}">
      <div class="quiz-type-label">🎧 Höre und tippe die deutsche Übersetzung</div>
      <div class="hoer-play-area">
        <button class="hoer-play-btn" onclick="speakFromBtn(this)"
                data-text="${trEsc}" data-audio="${word.audio || ''}">🔊 Anhören</button>
        <span class="hoer-play-hint">Was hörst du? Tippe es auf Deutsch.</span>
      </div>
      <input type="text" class="hoer-input" id="${prefix}-q-${i}-input"
             placeholder="Deutsche Übersetzung…"
             autocomplete="off" autocorrect="off" spellcheck="false"
             onkeydown="if(event.key==='Enter') checkHoer('${prefix}-q-${i}')">
      <button class="quiz-check-btn" onclick="checkHoer('${prefix}-q-${i}')">Überprüfen ✓</button>
      <div id="${prefix}-q-${i}-hoer-result" class="micro-feedback"></div>
    </div>`;
}

// ─── Lektion Quiz — alle 4 Typen gemischt ────────────────────────────────
function generateQuizHTML(content) {
  if (!content.woerter || content.woerter.length < 2) return '';
  const eligible  = content.woerter.filter(w => w.de && w.de.length > 0 && !w.de.includes('"'));
  const mcWords   = eligible.slice(0, Math.min(4, eligible.length));
  const satzbauEx = (content.beispiele || []).find(b =>
    b.de && b.tr.trim().split(/\s+/).length >= 3
  );
  const hoerWord = eligible.find(w => w.audio && !w.de.includes('(') && w.de.length <= 25);
  const totalQ   = mcWords.length + (satzbauEx ? 1 : 0) + (hoerWord ? 1 : 0);
  quizState = { total: totalQ, answered: 0, correct: 0, mode: 'lesson' };
  let qi = 0;
  const mcHTML      = mcWords.map((w, i) =>
    i % 2 === 0 ? buildTrDeQuestion(w, qi++, 'quiz') : buildDeTrQuestion(w, qi++, 'quiz')
  ).join('');
  const satzbauHTML = satzbauEx ? buildSatzbauQuestion(satzbauEx, qi++, 'quiz') : '';
  const hoerHTML    = hoerWord  ? buildHoerQuestion(hoerWord,  qi++, 'quiz')    : '';
  return `
    <div class="lesson-section quiz-section">
      <h3 class="section-title">🧠 Mini-Quiz</h3>
      <p class="quiz-progress-label" id="quiz-progress">0 / ${totalQ} beantwortet</p>
      ${mcHTML}${satzbauHTML}${hoerHTML}
    </div>`;
}

// ─── Wiederholungs-Session ────────────────────────────────────────────────
function startReviewSession() {
  const user = getCurrentUser();
  if (!user) return;
  const words = getDueWords(user.email);
  if (words.length === 0) { showToast('Keine Wörter zur Wiederholung fällig! Komm später wieder.'); return; }

  document.getElementById('category-list').classList.add('hidden');
  document.getElementById('lesson-list').classList.add('hidden');
  document.getElementById('lesson-detail').classList.add('hidden');
  document.getElementById('review-section').classList.add('hidden');
  document.getElementById('overall-progress').classList.add('hidden');

  const reviewEl = document.getElementById('review-view');
  reviewEl.classList.remove('hidden');
  quizState = { total: words.length, answered: 0, correct: 0, mode: 'review' };

  const questionsHTML = words.map((word, i) =>
    i % 2 === 0 ? buildTrDeQuestion(word, i, 'rv') : buildDeTrQuestion(word, i, 'rv')
  ).join('');

  reviewEl.innerHTML = `
    <button class="back-btn" onclick="finishReview()">← Zurück zum Dashboard</button>
    <div class="lesson-header-box">
      <h2 class="lesson-detail-title">🔄 Wiederholung</h2>
      <p class="lesson-lernziel">🎯 ${words.length} Wörter wiederholen</p>
    </div>
    <div class="lesson-section quiz-section">
      <h3 class="section-title">🧠 Vokabel-Test</h3>
      <p class="quiz-progress-label" id="quiz-progress">0 / ${words.length} beantwortet</p>
      ${questionsHTML}
    </div>`;
  window.scrollTo(0, 0);
}

function finishReview() {
  document.getElementById('review-view').classList.add('hidden');
  const user = getCurrentUser();
  if (user) showDashboard(user.name);
}

// =============================================
// LESSON DETAIL
// =============================================

function showLesson(categoryTitle, lessonTitle) {
  setLastLesson(categoryTitle, lessonTitle);
  currentCategoryTitle = categoryTitle;
  currentLessonTitle = lessonTitle;

  const content = LESSON_CONTENT[lessonTitle];
  document.getElementById('lesson-list').classList.add('hidden');
  const detailEl = document.getElementById('lesson-detail');
  detailEl.classList.remove('hidden');
  window.scrollTo(0, 0);

  if (!content) {
    detailEl.innerHTML = `
      <button class="back-btn" onclick="backToLessonList()">← Zurück zu Lektionen</button>
      <div class="lesson-header-box">
        <h2 class="lesson-detail-title">${lessonTitle}</h2>
      </div>
      <div class="coming-soon-box">
        <p style="font-size:2rem;margin:0">🚧</p>
        <p><strong>Diese Lektion wird bald verfügbar sein!</strong></p>
        <p>Schau bald wieder vorbei.</p>
      </div>
    `;
    return;
  }

  detailEl.innerHTML = buildLessonHTML(categoryTitle, lessonTitle, content);
}

function buildLessonHTML(categoryTitle, lessonTitle, content) {
  // Check if next lesson exists
  const cat = CATEGORY_DATA.find(c => c.title === categoryTitle);
  const lessonIndex = cat ? cat.lessons.findIndex(l => l.title === lessonTitle) : -1;
  const hasNext = cat && lessonIndex >= 0 && lessonIndex < cat.lessons.length - 1;

  const woerterRows = content.woerter.map(w => `
    <tr>
      <td class="vocab-tr">
        <button class="speak-btn-inline"
                onclick="speakFromBtn(this)"
                data-text="${w.tr}"
                data-audio="${w.audio || ''}">🔊</button>
        ${w.tr}
      </td>
      <td class="vocab-de">${w.de}</td>
      <td class="vocab-extra">${w.extra || ''}</td>
    </tr>
  `).join('');

  const saatzbausteineHTML = content.saatzbausteine ? `
    <div class="lesson-section">
      <h3 class="section-title">💬 Satzbausteine</h3>
      <ul class="saatzbausteine-list">
        ${content.saatzbausteine.map(s => `<li>${s}</li>`).join('')}
      </ul>
    </div>
  ` : '';

  const beispieleHTML = content.beispiele.map(b => `
    <div class="beispiel-item">
      <div class="beispiel-top">
        <span class="beispiel-tr">${b.tr}</span>
        <button class="speak-btn-small"
                onclick="speakFromBtn(this)"
                data-text="${b.tr}"
                data-audio="${b.audio || audioFor(b.tr)}">🔊</button>
      </div>
      <span class="beispiel-de">${b.de}</span>
    </div>
  `).join('');

  const nachsprechHTML = content.nachsprech.map(w => {
    const text  = typeof w === 'string' ? w : w.tr;
    const audio = typeof w === 'string' ? audioFor(text) : (w.audio || audioFor(text));
    return `
    <button class="nachsprech-word"
            onclick="speakFromBtn(this)"
            data-text="${text}"
            data-audio="${audio}">🔊 ${text}</button>`;
  }).join('');

  const dialogHTML = content.miniDialog.map((line, i) => {
    const isLeft = i % 2 === 0;
    return `
      <div class="dialog-line ${isLeft ? 'dialog-left' : 'dialog-right'}">
        <div class="dialog-sprecher">${line.sprecher}</div>
        <div class="dialog-bubble">
          <div class="dialog-tr">
            ${line.tr}
            <button class="speak-btn-dialog"
                    onclick="speakFromBtn(this)"
                    data-text="${line.tr}"
                    data-audio="${line.audio || audioFor(line.tr)}">🔊</button>
          </div>
          <div class="dialog-de">${line.de}</div>
        </div>
      </div>
    `;
  }).join('');

  const quizHTML = generateQuizHTML(content);

  const nextBtn = hasNext
    ? `<button class="next-lesson-btn" onclick="goToNextLesson()">Weiter zur nächsten Lektion →</button>`
    : `<button class="next-lesson-btn" onclick="backToLessonList()">Alle Lektionen dieser Kategorie →</button>`;

  return `
    <button class="back-btn" onclick="backToLessonList()">← Zurück zu Lektionen</button>

    <div class="lesson-header-box">
      <h2 class="lesson-detail-title">${lessonTitle}</h2>
      <p class="lesson-lernziel">🎯 ${content.lernziel}</p>
    </div>

    <div class="lesson-section">
      <h3 class="section-title">📚 Neue Wörter</h3>
      <table class="vocab-table">
        <thead><tr><th></th><th>Türkisch</th><th>Deutsch</th><th>Hinweis</th></tr></thead>
        <tbody>${woerterRows}</tbody>
      </table>
    </div>

    ${saatzbausteineHTML}

    <div class="lesson-section erklaerung-box">
      <h3 class="section-title">💡 Kurze Erklärung</h3>
      <p>${content.erklaerung}</p>
    </div>

    <div class="lesson-section">
      <h3 class="section-title">📝 Beispiele</h3>
      <div class="beispiele-list">${beispieleHTML}</div>
    </div>

    <div class="lesson-section nachsprech-section">
      <h3 class="section-title">🔊 Nachsprechen — klicke zum Anhören!</h3>
      <div class="nachsprech-words">${nachsprechHTML}</div>
    </div>

    <div class="lesson-section hoer-section">
      <h3 class="section-title">👂 Hör-Übung</h3>
      <p>${content.hoerUebung}</p>
    </div>

    <div class="lesson-section">
      <h3 class="section-title">🗣️ Mini-Dialog</h3>
      <div class="mini-dialog">${dialogHTML}</div>
    </div>

    <div class="lesson-section anwendung-section">
      <h3 class="section-title">🌍 Mini-Anwendung im Alltag</h3>
      <p>${content.anwendung}</p>
    </div>

    <div class="lesson-section zusammenfassung-section">
      <h3 class="section-title">✅ Zusammenfassung</h3>
      <p>${content.zusammenfassung}</p>
    </div>

    ${quizHTML}

    <button id="complete-lesson-btn" class="complete-btn ${quizHTML ? 'hidden' : ''}"
            onclick="completeLesson('${categoryTitle}', '${lessonTitle}')">
      Lektion abschließen ✓
    </button>

    ${nextBtn}
  `;
}

function goToNextLesson() {
  const cat = CATEGORY_DATA.find(c => c.title === currentCategoryTitle);
  if (!cat) return;
  const idx = cat.lessons.findIndex(l => l.title === currentLessonTitle);
  if (idx >= 0 && idx < cat.lessons.length - 1) {
    showLesson(currentCategoryTitle, cat.lessons[idx + 1].title);
  } else {
    backToLessonList();
  }
}

function completeLesson(categoryTitle, lessonTitle) {
  const user = getCurrentUser();
  if (!user) return;

  const progress = getProgressForUser(user.email);
  progress[categoryTitle + '|||' + lessonTitle] = 100;
  setProgressForUser(user.email, progress);

  updateStreak(user.email);

  const lessonContent = LESSON_CONTENT[lessonTitle];
  initWordsFromLesson(user.email, lessonContent);
  addWordsFromLesson(user.email, lessonTitle, categoryTitle);

  const cat = CATEGORY_DATA.find(c => c.title === categoryTitle);
  if (cat) {
    const lesson = cat.lessons.find(l => l.title === lessonTitle);
    if (lesson) lesson.progress = 100;
  }

  // Check if completing this container unlocks the next batch of 3
  const catIndex = CATEGORY_DATA.findIndex(c => c.title === categoryTitle);
  if (catIndex >= 0) {
    // This container gates the ones 3 positions ahead
    const newlyUnlocked = [];
    for (let i = catIndex + 3; i <= catIndex + 5 && i < CATEGORY_DATA.length; i++) {
      if (isContainerUnlocked(i)) {
        const alreadyShown = localStorage.getItem('unlocked_' + CATEGORY_DATA[i].title);
        if (!alreadyShown) {
          localStorage.setItem('unlocked_' + CATEGORY_DATA[i].title, '1');
          newlyUnlocked.push(CATEGORY_DATA[i].title);
        }
      }
    }
    if (newlyUnlocked.length > 0) {
      showToast('🔓 ' + newlyUnlocked.length + ' neue Themen freigeschaltet!');
    }
  }

  backToLessonList();
}

// =============================================
// CATEGORY FINAL TEST SYSTEM
// =============================================

function getCategoryTestPassed(email, catTitle) {
  return localStorage.getItem('cattest_' + email + '_' + catTitle) === 'passed';
}

function setCategoryTestPassed(email, catTitle) {
  localStorage.setItem('cattest_' + email + '_' + catTitle, 'passed');
}

function allLessonsDone(catTitle) {
  const cat = CATEGORY_DATA.find(c => c.title === catTitle);
  if (!cat) return false;
  return cat.lessons.every(l => l.progress === 100);
}

function isCategoryFullyComplete(catTitle) {
  const user = getCurrentUser();
  if (!user) return false;
  return allLessonsDone(catTitle) && getCategoryTestPassed(user.email, catTitle);
}

// Generates 12 randomized questions from all lessons in a category
function generateCategoryTestQuestions(catTitle) {
  const cat = CATEGORY_DATA.find(c => c.title === catTitle);
  if (!cat) return [];

  // Collect all valid words from this category
  const allWords = [];
  cat.lessons.forEach(lesson => {
    const lc = LESSON_CONTENT[lesson.title];
    if (!lc || !lc.woerter) return;
    lc.woerter.forEach(w => {
      if (w.tr && w.de && !w.de.startsWith('"') && !w.tr.startsWith('-') && w.de.length < 40) {
        allWords.push({ tr: w.tr, de: w.de });
      }
    });
  });

  if (allWords.length < 4) return [];

  // Shuffle and pick up to 12
  const shuffled = [...allWords].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(12, shuffled.length));

  return selected.map((word, i) => {
    // Wrong answers come from within the same category (harder!)
    const pool = allWords.filter(w => w.tr !== word.tr);
    const wrong = pool.sort(() => Math.random() - 0.5).slice(0, 3);

    if (i % 2 === 0) {
      // TR → DE
      const opts = [word.de, ...wrong.map(w => w.de)].sort(() => Math.random() - 0.5);
      return { type: 'tr-de', question: word.tr, correct: word.de, options: opts };
    } else {
      // DE → TR
      const opts = [word.tr, ...wrong.map(w => w.tr)].sort(() => Math.random() - 0.5);
      return { type: 'de-tr', question: word.de, correct: word.tr, options: opts };
    }
  });
}

let catTestState = { catTitle: '', questions: [], index: 0, correct: 0, answered: false };

function startCategoryTest(catTitle) {
  const questions = generateCategoryTestQuestions(catTitle);
  if (questions.length < 4) { showToast('Zu wenig Vokabeln für den Test — schließe zuerst alle Lektionen ab!'); return; }

  catTestState = { catTitle, questions, index: 0, correct: 0, answered: false };

  // Hide lesson list, show detail view
  document.getElementById('lesson-list').classList.add('hidden');
  const detailEl = document.getElementById('lesson-detail');
  detailEl.classList.remove('hidden');
  window.scrollTo(0, 0);

  renderCategoryTestQuestion();
}

function renderCategoryTestQuestion() {
  const { catTitle, questions, index } = catTestState;
  const q = questions[index];
  const total = questions.length;
  const pct = Math.round((index / total) * 100);

  const detailEl = document.getElementById('lesson-detail');
  const typeLabel = q.type === 'tr-de' ? '🇹🇷 Türkisch → Deutsch' : '🇩🇪 Deutsch → Türkisch';
  const diffBadge = index >= 8 ? '<span class="ct-hard-badge">Schwer</span>' : '';

  detailEl.innerHTML = `
    <div class="ct-header">
      <button class="back-btn" onclick="backToLessonList()">← Abbrechen</button>
      <div class="ct-title-row">
        <span class="ct-title">🏆 Abschlusstest</span>
        <span class="ct-category">${catTitle}</span>
      </div>
    </div>
    <div class="ct-progress-wrap">
      <div class="ct-progress-bg"><div class="ct-progress-fill" style="width:${pct}%"></div></div>
      <span class="ct-counter">${index + 1} / ${total}</span>
    </div>
    <div class="ct-question-box">
      <div class="ct-type-label">${typeLabel} ${diffBadge}</div>
      <div class="ct-question-word">${q.question}</div>
      <div class="ct-options" id="ct-options">
        ${q.options.map((opt, oi) => `
          <button class="ct-option-btn" onclick="answerCatTest(${oi})">${opt}</button>
        `).join('')}
      </div>
    </div>
    <div id="ct-feedback" class="ct-feedback"></div>
  `;
}

function answerCatTest(optionIndex) {
  if (catTestState.answered) return;
  catTestState.answered = true;

  const q = catTestState.questions[catTestState.index];
  const chosen = q.options[optionIndex];
  const isCorrect = chosen === q.correct;
  if (isCorrect) catTestState.correct++;

  // Highlight buttons
  const btns = document.querySelectorAll('.ct-option-btn');
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (q.options[i] === q.correct) btn.classList.add('ct-opt-correct');
    else if (i === optionIndex && !isCorrect) btn.classList.add('ct-opt-wrong');
  });

  const fb = document.getElementById('ct-feedback');
  if (fb) {
    fb.textContent = isCorrect ? '✓ Richtig!' : '✗ Richtig wäre: ' + q.correct;
    fb.className = 'ct-feedback ' + (isCorrect ? 'ct-fb-correct' : 'ct-fb-wrong');
  }

  setTimeout(() => {
    catTestState.answered = false;
    catTestState.index++;
    if (catTestState.index >= catTestState.questions.length) {
      showCategoryTestResult();
    } else {
      renderCategoryTestQuestion();
    }
  }, 1100);
}

function showCategoryTestResult() {
  const { catTitle, questions, correct } = catTestState;
  const total = questions.length;
  const pct = Math.round((correct / total) * 100);
  const passed = pct >= 70;

  const user = getCurrentUser();
  if (user && passed) {
    setCategoryTestPassed(user.email, catTitle);
  }

  let emoji, grade, note;
  if (pct === 100) { emoji = '🏆'; grade = 'Perfekt — Meisterklasse!'; note = 'Note 1'; }
  else if (pct >= 90) { emoji = '⭐'; grade = 'Ausgezeichnet!'; note = 'Note 1'; }
  else if (pct >= 80) { emoji = '💪'; grade = 'Sehr gut!'; note = 'Note 2'; }
  else if (pct >= 70) { emoji = '✅'; grade = 'Bestanden!'; note = 'Note 3 — Container abgeschlossen!'; }
  else if (pct >= 50) { emoji = '😓'; grade = 'Knapp nicht bestanden — du brauchst 70%!'; note = 'Nicht bestanden'; }
  else { emoji = '🔄'; grade = 'Nochmal üben — du schaffst das!'; note = 'Nicht bestanden'; }

  const detailEl = document.getElementById('lesson-detail');
  detailEl.innerHTML = `
    <div class="ct-result-box">
      <div class="ct-result-emoji">${emoji}</div>
      <div class="ct-result-grade">${grade}</div>
      <div class="ct-result-score">${correct} von ${total} richtig — ${pct}%</div>
      <div class="ct-result-note ${passed ? 'ct-note-pass' : 'ct-note-fail'}">${note}</div>
      ${passed ? `
        <div class="ct-result-complete">
          🎉 Container <strong>${catTitle}</strong> vollständig abgeschlossen!
        </div>
        <button class="ct-result-btn ct-btn-primary" onclick="backToCategories()">Zurück zur Übersicht →</button>
      ` : `
        <button class="ct-result-btn ct-btn-retry" onclick="startCategoryTest('${catTitle.replace(/'/g, "\\'")}')">Nochmal versuchen 🔄</button>
        <button class="ct-result-btn ct-btn-back" onclick="backToLessonList()">Zurück zu Lektionen</button>
      `}
    </div>
  `;
}

// =============================================
// RENDER CATEGORIES
// =============================================

function renderCategories() {
  const categoryList = document.getElementById('category-list');
  categoryList.innerHTML = '';

  const user = getCurrentUser();

  CATEGORY_DATA.forEach((category, index) => {
    const unlocked = isContainerUnlocked(index);
    const completed = category.lessons.filter(l => l.progress === 100).length;
    const overall = Math.round(category.lessons.reduce((s, l) => s + l.progress, 0) / category.lessons.length);
    const fullyComplete = user ? isCategoryFullyComplete(category.title) : false;

    const card = document.createElement('div');
    card.className = 'category-card'
      + (unlocked ? '' : ' category-locked')
      + (fullyComplete ? ' category-complete' : '');
    card.onclick = () => showCategory(category.title, index);

    const gateCat = index >= 3 ? CATEGORY_DATA[index - 3] : null;
    const threshold = gateCat ? Math.min(UNLOCK_THRESHOLD, gateCat.lessons.length) : 0;
    const gateDone = gateCat ? getCompletedCount(gateCat.title) : 0;

    const visual = CATEGORY_VISUAL[category.title] || { icon: '📖', color: '#2e8b57' };
    card.style.setProperty('--cat-color', visual.color);

    const completionBadge = fullyComplete
      ? `<span class="cat-complete-badge">🏆 Abgeschlossen</span>`
      : (unlocked && completed === category.lessons.length)
        ? `<span class="cat-test-pending-badge">📝 Test ausstehend</span>`
        : '';

    card.innerHTML = `
      <div class="category-card-top">
        <div class="category-icon-badge" style="background:${visual.color}22">${unlocked ? (fullyComplete ? '🏆' : visual.icon) : '🔒'}</div>
        <div style="flex:1;min-width:0">
          <h2 class="category-title">${category.title}</h2>
          ${unlocked ? completionBadge : `<span class="lock-hint">${gateDone}/${threshold} in "${gateCat.title}"</span>`}
        </div>
      </div>
      <div class="lesson-count-row">${completed}/${category.lessons.length} Lektionen abgeschlossen</div>
      <div class="progress-bar-bg">
        <div class="progress-bar-fill${fullyComplete ? ' fill-complete' : ''}" style="width:${fullyComplete ? 100 : overall}%"></div>
      </div>
      <div class="lesson-header" style="margin-top:8px">
        <div>Fortschritt</div><div>${fullyComplete ? '✓ 100%' : overall + '%'}</div>
      </div>
    `;

    categoryList.appendChild(card);
  });
}

// =============================================
// TOAST NOTIFICATION
// =============================================

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerText = message;
  toast.className = 'toast toast-show';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.className = 'toast'; }, 3500);
}

// =============================================
// LAST LESSON
// =============================================

function setLastLesson(categoryTitle, lessonTitle) {
  localStorage.setItem('lastLesson', JSON.stringify({ category: categoryTitle, lesson: lessonTitle }));
}

// =============================================
// ACCOUNT
// =============================================

function toggleAccountMenu() {
  document.getElementById('account-menu').classList.toggle('hidden');
}

function editAccount() {
  const user = getCurrentUser();
  if (!user) return;
  const newName = prompt('Neuen Namen eingeben:', user.name);
  if (newName && newName.trim()) {
    user.name = newName.trim();
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    document.getElementById('greeting').innerText = 'Hoş geldin ' + user.name + '!';
  }
}

function logoutUser() {
  localStorage.removeItem('loggedInUser');
  document.getElementById('account-menu').classList.add('hidden');
  showRegister();
}

// =============================================
// AUTH
// =============================================

function registerUser() {
  const name = document.getElementById('register-name').value.trim();
  const email = document.getElementById('register-email').value.trim();
  const password = document.getElementById('register-password').value.trim();
  if (!name || !email || !password) { alert('Bitte alle Felder ausfüllen'); return; }
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  if (users.some(u => u.email === email)) { alert('E-Mail ist bereits registriert'); return; }
  users.push({ name, email, password });
  localStorage.setItem('users', JSON.stringify(users));
  alert('Registrierung erfolgreich. Bitte einloggen.');
  document.getElementById('register-name').value = '';
  document.getElementById('register-email').value = '';
  document.getElementById('register-password').value = '';
  showLogin();
}

function loginUser() {
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();
  if (!email || !password) { alert('Bitte E-Mail und Passwort eingeben'); return; }
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) { alert('Falsche E-Mail oder Passwort'); return; }
  localStorage.setItem('loggedInUser', JSON.stringify(user));
  showDashboard(user.name);
}

function forgotPassword() {
  const email = prompt('Bitte E-Mail eingeben, um Passwort zurückzusetzen:');
  if (!email || !email.trim()) return;
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const i = users.findIndex(u => u.email === email.trim());
  if (i === -1) { alert('Kein Nutzer mit dieser E-Mail gefunden.'); return; }
  const pw = prompt('Neues Passwort eingeben:');
  if (!pw || !pw.trim()) { alert('Passwort kann nicht leer sein.'); return; }
  users[i].password = pw.trim();
  localStorage.setItem('users', JSON.stringify(users));
  alert('Passwort geändert. Bitte melde dich jetzt an.');
  showLogin();
}

// =============================================
// WORD BANK — Persönlicher Wortspeicher
// =============================================

const WB_INTERVALS = [0, 1, 3, 7, 14, 30, 60]; // Tage pro Level 0–6

function getWordBank(email) {
  return JSON.parse(localStorage.getItem('wordbank_' + email) || '{}');
}
function saveWordBank(email, bank) {
  localStorage.setItem('wordbank_' + email, JSON.stringify(bank));
}
function makeWordId(tr) {
  return 'wb_' + tr.toLowerCase().replace(/\s+/g, '_').replace(/[^\w\u00C0-\u024F]/g, '');
}

function addWordsFromLesson(email, lessonTitle, categoryTitle) {
  const lc = LESSON_CONTENT[lessonTitle];
  if (!lc || !lc.woerter) return;
  const bank = getWordBank(email);
  const now  = Date.now();
  lc.woerter.forEach(w => {
    if (!w.tr || !w.de || w.de.startsWith('"')) return;
    const id = makeWordId(w.tr);
    if (!bank[id]) {
      bank[id] = {
        id, tr: w.tr, de: w.de,
        example: w.extra || '',
        category: categoryTitle,
        lessonTitle,
        level: 0,
        timesCorrect: 0, timesWrong: 0,
        lastReviewed: null,
        nextReview: now,
        difficult: false,
        addedAt: now
      };
    }
  });
  saveWordBank(email, bank);
}

function updateWordBankReview(email, wordId, result) {
  const bank = getWordBank(email);
  const w = bank[wordId];
  if (!w) return;
  const now = Date.now();
  w.lastReviewed = now;
  if (result === 'correct') {
    w.timesCorrect++;
    w.level = Math.min(6, w.level + 1);
    w.difficult = false;
    w.nextReview = now + WB_INTERVALS[w.level] * 86400000;
  } else if (result === 'hard') {
    w.timesCorrect++;
    w.difficult = true;
    const half = Math.max(1, Math.floor(WB_INTERVALS[w.level] / 2));
    w.nextReview = now + half * 86400000;
  } else {
    w.timesWrong++;
    w.level = Math.max(1, w.level - 1);
    w.difficult = true;
    w.nextReview = now + WB_INTERVALS[w.level] * 86400000;
  }
  saveWordBank(email, bank);
}

function getDueWordsFromBank(email, max) {
  const bank = getWordBank(email);
  const now  = Date.now();
  const due  = Object.values(bank).filter(w => w.nextReview <= now);
  due.sort((a, b) => (b.difficult - a.difficult) || (a.nextReview - b.nextReview));
  return max ? due.slice(0, max) : due;
}
function getWordsByCategory(email, cat) {
  const all = Object.values(getWordBank(email));
  return cat ? all.filter(w => w.category === cat) : all;
}
function getDifficultWords(email) {
  return Object.values(getWordBank(email)).filter(w => w.difficult);
}
function getAllWordCategories(email) {
  return [...new Set(Object.values(getWordBank(email)).map(w => w.category))];
}

// =============================================
// MEINE WÖRTER — View
// =============================================

function showMeineWoerter(filter, sort) {
  const user = getCurrentUser();
  if (!user) return;
  ['category-list','lesson-list','lesson-detail','review-view',
   'overall-progress','review-section','motto-banner'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
  document.getElementById('meine-woerter-view').classList.remove('hidden');
  renderMWContent(filter || 'all', sort || 'nextReview');
}

function hideMeineWoerter() {
  document.getElementById('meine-woerter-view').classList.add('hidden');
  const user = getCurrentUser();
  if (user) showDashboard(user.name);
}

function renderMWContent(filter, sort) {
  const user  = getCurrentUser();
  const bank  = getWordBank(user.email);
  const now   = Date.now();
  let words   = Object.values(bank);
  const total = words.length;
  const dueCount  = words.filter(w => w.nextReview <= now).length;
  const hardCount = words.filter(w => w.difficult).length;
  const cats  = getAllWordCategories(user.email);

  if (filter === 'due')       words = words.filter(w => w.nextReview <= now);
  else if (filter === 'hard') words = words.filter(w => w.difficult);
  else if (filter !== 'all')  words = words.filter(w => w.category === filter);

  if (sort === 'nextReview') words.sort((a,b) => a.nextReview - b.nextReview);
  else if (sort === 'level') words.sort((a,b) => a.level - b.level);
  else if (sort === 'alpha') words.sort((a,b) => a.tr.localeCompare(b.tr));

  const filterOpts = [
    `<option value="all"  ${filter==='all' ?'selected':''}>Alle (${total})</option>`,
    `<option value="due"  ${filter==='due' ?'selected':''}>Fällig (${dueCount})</option>`,
    `<option value="hard" ${filter==='hard'?'selected':''}>Schwierig (${hardCount})</option>`,
    ...cats.map(c => `<option value="${c}" ${filter===c?'selected':''}>${c}</option>`)
  ].join('');

  const cardsHTML = words.length === 0
    ? `<p class="mw-empty">Keine Wörter gefunden. Schließe eine Lektion ab!</p>`
    : words.map(w => {
        const due  = w.nextReview <= now;
        const days = Math.max(0, Math.ceil((w.nextReview - now) / 86400000));
        const acc  = (w.timesCorrect + w.timesWrong) > 0
          ? Math.round(w.timesCorrect / (w.timesCorrect + w.timesWrong) * 100) : null;
        return `<div class="mw-card ${w.difficult?'mw-card-hard':''} ${due?'mw-card-due':''}">
          <div class="mw-card-top">
            <span class="mw-tr">${w.tr}</span>
            <span class="mw-badges">
              ${w.difficult?'<span class="mwb mwb-hard">Schwer</span>':''}
              ${due?'<span class="mwb mwb-due">Fällig</span>':''}
              <span class="mwb mwb-lvl">Lvl ${w.level}</span>
            </span>
          </div>
          <div class="mw-de">${w.de}</div>
          ${w.example?`<div class="mw-ex">${w.example}</div>`:''}
          <div class="mw-meta">
            ${acc!==null?`<span>✓ ${acc}%</span>`:''}
            <span>${due?'🔔 Jetzt':'⏱ '+days+'d'}</span>
            <span class="mw-cat-tag">${w.category}</span>
          </div>
        </div>`;
      }).join('');

  const fcIds = JSON.stringify(words.map(w => w.id));
  document.getElementById('meine-woerter-view').innerHTML = `
    <div class="mw-header">
      <button class="back-btn" onclick="hideMeineWoerter()">← Zurück</button>
      <h2 class="mw-title">📚 Meine Wörter</h2>
      <p class="mw-sub">${total} gespeichert · ${dueCount} fällig heute</p>
    </div>
    <div class="mw-controls">
      <select class="mw-sel" onchange="renderMWContent(this.value,'${sort}')">${filterOpts}</select>
      <select class="mw-sel" onchange="renderMWContent('${filter}',this.value)">
        <option value="nextReview" ${sort==='nextReview'?'selected':''}>Nach Fälligkeit</option>
        <option value="level"      ${sort==='level'     ?'selected':''}>Nach Level</option>
        <option value="alpha"      ${sort==='alpha'     ?'selected':''}>A–Z</option>
      </select>
      ${words.length>0?`<button class="mw-fc-btn" onclick='startFlashcardSession(${fcIds})'>🃏 Karteikarten</button>`:''}
    </div>
    <div class="mw-list">${cardsHTML}</div>`;
}

// =============================================
// KARTEIKARTENMODUS
// =============================================

let fcState = { words: [], index: 0, flipped: false };

function startFlashcardSession(wordIds) {
  const user = getCurrentUser();
  if (!user) return;
  const bank  = getWordBank(user.email);
  const words = (Array.isArray(wordIds) ? wordIds : []).map(id => bank[id]).filter(Boolean);
  if (words.length === 0) { showToast('Keine Wörter zum Üben.'); return; }
  fcState = { words, index: 0, flipped: false };
  ['meine-woerter-view','category-list','review-view','lesson-detail',
   'lesson-list','overall-progress','review-section','motto-banner'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
  document.getElementById('flashcard-view').classList.remove('hidden');
  renderFlashcard();
  window.scrollTo(0, 0);
}

function startFlashcardFromDue() {
  const user = getCurrentUser();
  if (!user) return;
  const due = getDueWordsFromBank(user.email, 20);
  if (due.length > 0) {
    startFlashcardSession(due.map(w => w.id));
    return;
  }
  // No due words — check if any words exist at all
  let all = Object.values(getWordBank(user.email));
  if (all.length === 0) {
    // Try to auto-populate from completed lessons
    const progress = getProgressForUser(user.email);
    let added = 0;
    CATEGORY_DATA.forEach(cat => {
      cat.lessons.forEach(lesson => {
        if ((progress[cat.title + '|||' + lesson.title] || 0) === 100) {
          addWordsFromLesson(user.email, lesson.title, cat.title);
          added++;
        }
      });
    });
    all = Object.values(getWordBank(user.email));
    if (all.length === 0) {
      showToast('Schließe zuerst eine Lektion ab, um Wörter zu sammeln!');
      return;
    }
  }
  // Words exist but none due — offer to review all
  startFlashcardSession(all.map(w => w.id));
}

function renderFlashcard() {
  const { words, index, flipped } = fcState;
  const w   = words[index];
  const pct = Math.round((index / words.length) * 100);
  document.getElementById('flashcard-view').innerHTML = `
    <div class="fc-header">
      <button class="back-btn" onclick="closeFlashcards()">← Beenden</button>
      <span class="fc-counter">${index + 1} / ${words.length}</span>
    </div>
    <div class="fc-prog-bg"><div class="fc-prog-fill" style="width:${pct}%"></div></div>
    <div class="fc-scene" onclick="flipFlashcard()">
      <div class="fc-card ${flipped?'fc-flipped':''}" id="fc-card">
        <div class="fc-face fc-front">
          <div class="fc-label">Türkisch</div>
          <div class="fc-word">${w.tr}</div>
          <div class="fc-flip-hint">Tippen zum Umdrehen</div>
          ${w.difficult?'<span class="fc-hard-badge">Schwer</span>':''}
        </div>
        <div class="fc-face fc-back">
          <div class="fc-label">Deutsch</div>
          <div class="fc-word fc-word-de">${w.de}</div>
          ${w.example?`<div class="fc-example">${w.example}</div>`:''}
          <div class="fc-back-cat">${w.category} · Lvl ${w.level}</div>
        </div>
      </div>
    </div>
    <div class="fc-btns ${flipped?'':'fc-btns-hidden'}">
      <button class="fc-btn fc-btn-wrong"   onclick="answerFlashcard('wrong')">🔄<br><small>Nochmal</small></button>
      <button class="fc-btn fc-btn-hard"    onclick="answerFlashcard('hard')">😅<br><small>War schwer</small></button>
      <button class="fc-btn fc-btn-correct" onclick="answerFlashcard('correct')">✓<br><small>Wusste ich</small></button>
    </div>`;
}

function flipFlashcard() {
  fcState.flipped = !fcState.flipped;
  const card = document.getElementById('fc-card');
  if (card) card.classList.toggle('fc-flipped');
  const btns = document.querySelector('.fc-btns');
  if (btns) btns.classList.toggle('fc-btns-hidden', !fcState.flipped);
}

function answerFlashcard(result) {
  const user = getCurrentUser();
  updateWordBankReview(user.email, fcState.words[fcState.index].id, result);
  const next = fcState.index + 1;
  if (next >= fcState.words.length) {
    closeFlashcards();
    showToast('🎉 ' + fcState.words.length + ' Karten abgeschlossen!');
    const u = getCurrentUser();
    if (u) showDashboard(u.name);
    return;
  }
  fcState.index   = next;
  fcState.flipped = false;
  renderFlashcard();
}

function closeFlashcards() {
  document.getElementById('flashcard-view').classList.add('hidden');
  const u = getCurrentUser();
  if (u) showMeineWoerter();
}

// =============================================
// INIT
// =============================================

window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('loggedInUser');
  if (saved) {
    showDashboard(JSON.parse(saved).name);
  } else {
    showRegister();
  }
});
