// =============================================
// LESSON CONTENT — erste 10 Lektionen komplett
// =============================================

const LESSON_CONTENT = {
  'Die türkischen Sonderbuchstaben': {
    lernziel: 'Du kannst die 6 Sonderbuchstaben erkennen und grundlegend aussprechen.',
    woerter: [
      { tr: 'ç', de: '"tsch"',         extra: 'çay = Tee',   audio: 'audio/cay.mp3' },
      { tr: 'ş', de: '"sch"',           extra: 'şeker = Zucker', audio: 'audio/seker.mp3' },
      { tr: 'ğ', de: 'dehnt den Vokal', extra: 'dağ = Berg',  audio: 'audio/dag.mp3' },
      { tr: 'ü', de: 'wie dt. "ü"',     extra: 'üç = drei',  audio: 'audio/uc.mp3' },
      { tr: 'ö', de: 'wie dt. "ö"',     extra: 'söyle = sag', audio: 'audio/soyle.mp3' },
      { tr: 'ı', de: 'dunkles "i"',     extra: 'ısı = Wärme', audio: 'audio/isi.mp3' }
    ],
    erklaerung: 'Türkisch schreibt man wie man spricht — das ist super! Wenn du die Buchstaben kennst, kannst du alles lesen.',
    beispiele: [
      { tr: 'Bir çay lütfen.', de: 'Einen Tee bitte.',  audio: 'audio/bir_cay_lutfen.mp3' },
      { tr: 'Şeker var mı?',   de: 'Gibt es Zucker?',   audio: 'audio/seker_var_mi.mp3' },
      { tr: 'Üç tane lütfen.', de: 'Drei Stück bitte.', audio: 'audio/uc_tane_lutfen.mp3' },
      { tr: 'Güzel!',          de: 'Schön / Super!',    audio: 'audio/guzel_sentence.mp3' },
    ],
    nachsprech: [
      { tr: 'çay',     audio: 'audio/cay.mp3' },
      { tr: 'şeker',   audio: 'audio/seker.mp3' },
      { tr: 'güzel',   audio: 'audio/guzel.mp3' },
      { tr: 'lütfen',  audio: 'audio/lutfen.mp3' },
      { tr: 'değil',   audio: 'audio/degil.mp3' },
      { tr: 'öğrenci', audio: 'audio/ogrenci.mp3' },
    ],
    hoerUebung: 'Höre 5 Wörter — welchen Sonderbuchstaben hörst du? (ç / ş / ğ / ü / ö / ı)',
    miniDialog: [
      { sprecher: 'A', tr: 'Bir çay lütfen.', de: 'Einen Tee bitte.' },
      { sprecher: 'B', tr: 'Şekerli mi?', de: 'Mit Zucker?' },
      { sprecher: 'A', tr: 'Evet, lütfen.', de: 'Ja, bitte.' }
    ],
    anwendung: 'Lies laut vor: "Bir çay lütfen." — Dann: "Şekerli lütfen." — Und: "Teşekkür ederim."',
    zusammenfassung: '6 Sonderbuchstaben gelernt. Türkisch spricht man so wie man schreibt — das macht es einfacher!'
  },

  'Vokale & Vokalharmonie': {
    lernziel: 'Du kennst die 8 türkischen Vokale und verstehst das Grundprinzip der Vokalharmonie.',
    woerter: [
      { tr: 'ada',     de: 'Insel',      extra: 'Vokal: a',  audio: 'audio/ada.mp3' },
      { tr: 'ev',      de: 'Haus',       extra: 'Vokal: e',  audio: 'audio/ev.mp3' },
      { tr: 'ışık',    de: 'Licht',      extra: 'Vokal: ı',  audio: 'audio/isik.mp3' },
      { tr: 'ip',      de: 'Seil',       extra: 'Vokal: i',  audio: 'audio/ip.mp3' },
      { tr: 'okul',    de: 'Schule',     extra: 'Vokal: o',  audio: 'audio/okul.mp3' },
      { tr: 'öğrenci', de: 'Schüler/in', extra: 'Vokal: ö',  audio: 'audio/ogrenci.mp3' },
      { tr: 'uçak',    de: 'Flugzeug',   extra: 'Vokal: u',  audio: 'audio/ucak.mp3' },
      { tr: 'üzüm',    de: 'Traube',     extra: 'Vokal: ü',  audio: 'audio/uzum.mp3' },
    ],
    erklaerung: 'Türkisch hat 8 Vokale: a – e – ı – i – o – ö – u – ü. Die wichtigste Regel: Vokale in einem Wort "passen zusammen". Hintere Vokale (a, ı, o, u) bleiben unter sich — vordere Vokale (e, i, ö, ü) bleiben unter sich. Das nennt man Vokalharmonie. Endungen passen sich automatisch an!',
    saatzbausteine: [
      'Bu bir [Nomen]. → Das ist ein/e ...',
      '[Nomen] var. → Es gibt ... / Ich habe ...',
      '[Nomen] yok. → Es gibt kein ... / Ich habe kein ...',
    ],
    beispiele: [
      { tr: 'Bu bir ev.',    de: 'Das ist ein Haus.',    audio: 'audio/bu_bir_ev.mp3' },
      { tr: 'Bu bir okul.',  de: 'Das ist eine Schule.', audio: 'audio/bu_bir_okul.mp3' },
      { tr: 'Üzüm var mı?',  de: 'Gibt es Trauben?',    audio: 'audio/uzum_var_mi.mp3' },
      { tr: 'Uçak var.',     de: 'Es gibt ein Flugzeug.', audio: 'audio/ucak_var.mp3' },
    ],
    nachsprech: [
      { tr: 'ada',     audio: 'audio/ada.mp3' },
      { tr: 'ev',      audio: 'audio/ev.mp3' },
      { tr: 'ışık',    audio: 'audio/isik.mp3' },
      { tr: 'okul',    audio: 'audio/okul.mp3' },
      { tr: 'öğrenci', audio: 'audio/ogrenci.mp3' },
      { tr: 'uçak',    audio: 'audio/ucak.mp3' },
      { tr: 'üzüm',    audio: 'audio/uzum.mp3' },
    ],
    hoerUebung: 'Höre 6 Wörter — welcher Vokal steckt darin? (a / e / ı / i / o / ö / u / ü)',
    miniDialog: [
      { sprecher: 'A', tr: 'Bu ne?',           de: 'Was ist das?' },
      { sprecher: 'B', tr: 'Bu bir okul.',      de: 'Das ist eine Schule.' },
      { sprecher: 'A', tr: 'Büyük mü?',         de: 'Ist sie groß?' },
      { sprecher: 'B', tr: 'Evet, çok büyük!',  de: 'Ja, sehr groß!' },
    ],
    anwendung: 'Schau dich um — benenne 5 Dinge auf Türkisch. Falls du das Wort nicht kennst, tippe "X nedir?" (Was ist X?) in Google Translate.',
    zusammenfassung: '8 Vokale gelernt. Vokalharmonie = Vokale passen zusammen. Das ist die Geheimwaffe der türkischen Grammatik!'
  },

  'Aussprache-Training': {
    lernziel: 'Du kannst alle 6 türkischen Sonderbuchstaben in echten Wörtern korrekt aussprechen.',
    woerter: [
      { tr: 'çikolata',  de: 'Schokolade', extra: 'ç = tsch',      audio: 'audio/cikolata.mp3' },
      { tr: 'şehir',     de: 'Stadt',       extra: 'ş = sch',       audio: 'audio/sehir.mp3' },
      { tr: 'öğretmen',  de: 'Lehrer/in',   extra: 'ğ dehnt Vokal', audio: 'audio/ogretmen.mp3' },
      { tr: 'büyük',     de: 'groß',         extra: 'ü = ü',        audio: 'audio/buyuk.mp3' },
      { tr: 'küçük',     de: 'klein',        extra: 'ü + ç',        audio: 'audio/kucuk.mp3' },
      { tr: 'kız',       de: 'Mädchen',      extra: 'ı = dunkles i', audio: 'audio/kiz.mp3' },
    ],
    erklaerung: 'Wiederholung der 6 Sonderbuchstaben: ç (tsch) — ş (sch) — ğ (dehnt Vokal, kaum hörbar) — ü (wie dt. ü) — ö (wie dt. ö) — ı (dunkles i, kein Punkt!). Je öfter du hörst und nachmachst, desto besser wird deine Aussprache!',
    saatzbausteine: [
      'Büyük / Küçük → groß / klein',
      'Şehir merkezi → Stadtzentrum',
      'Öğretmen / Öğrenci → Lehrer/in / Schüler/in',
    ],
    beispiele: [
      { tr: 'Çikolata lütfen!',       de: 'Schokolade bitte!',        audio: 'audio/cikolata_lutfen.mp3' },
      { tr: 'Bu şehir büyük mü?',     de: 'Ist diese Stadt groß?',    audio: 'audio/bu_sehir_buyuk_mu.mp3' },
      { tr: 'O bir öğretmen.',         de: 'Er/Sie ist Lehrer/in.',   audio: 'audio/o_bir_ogretmen.mp3' },
      { tr: 'Küçük bir çay lütfen.',   de: 'Einen kleinen Tee bitte.', audio: 'audio/kucuk_bir_cay.mp3' },
    ],
    nachsprech: [
      { tr: 'çikolata',  audio: 'audio/cikolata.mp3' },
      { tr: 'şehir',     audio: 'audio/sehir.mp3' },
      { tr: 'öğretmen',  audio: 'audio/ogretmen.mp3' },
      { tr: 'büyük',     audio: 'audio/buyuk.mp3' },
      { tr: 'küçük',     audio: 'audio/kucuk.mp3' },
      { tr: 'kız',       audio: 'audio/kiz.mp3' },
      { tr: 'çay',       audio: 'audio/cay.mp3' },
      { tr: 'şeker',     audio: 'audio/seker.mp3' },
    ],
    hoerUebung: 'Höre 5 Wörter — welcher Sonderbuchstabe steckt darin? Schreibe ihn auf.',
    miniDialog: [
      { sprecher: 'A', tr: 'Adınız ne?',               de: 'Wie heißen Sie?' },
      { sprecher: 'B', tr: 'Öğretmen Şule.',            de: 'Lehrerin Şule.' },
      { sprecher: 'A', tr: 'Büyük şehirden misiniz?',   de: 'Kommen Sie aus einer großen Stadt?' },
      { sprecher: 'B', tr: 'Evet, İstanbul\'dan.',       de: 'Ja, aus Istanbul.' },
    ],
    anwendung: 'Hör dir die 8 Nachsprech-Wörter noch einmal an und sprich nach — dreimal jedes Wort. Dann schreibe sie aus dem Gedächtnis auf.',
    zusammenfassung: '6 Sonderbuchstaben geübt. Regelmäßiges Hören + Nachsprechen ist der Schlüssel. Du machst Fortschritte!'
  },

  'Hallo & Tschüss': {
    lernziel: 'Du kannst jemanden begrüßen und dich verabschieden.',
    woerter: [
      { tr: 'Merhaba',      de: 'Hallo',             extra: 'immer passend',  audio: 'audio/merhaba.mp3' },
      { tr: 'Günaydın',     de: 'Guten Morgen',      extra: 'morgens',        audio: 'audio/gunaydin.mp3' },
      { tr: 'İyi günler',   de: 'Guten Tag',          extra: 'tagsüber',      audio: 'audio/iyi_gunler.mp3' },
      { tr: 'İyi akşamlar', de: 'Guten Abend',        extra: 'abends',        audio: 'audio/iyi_aksamlar.mp3' },
      { tr: 'Hoşça kal',    de: 'Tschüss (ich gehe)', extra: 'du gehst',      audio: 'audio/hosca_kal.mp3' },
      { tr: 'Güle güle',    de: 'Tschüss (du gehst)', extra: 'der andere geht', audio: 'audio/gule_gule.mp3' }
    ],
    erklaerung: '"Hoşça kal" sagt die Person, die geht. "Güle güle" sagt die Person, die bleibt. Das ist anders als im Deutschen!',
    beispiele: [
      { tr: 'Merhaba!',       de: 'Hallo!',               audio: 'audio/merhaba.mp3' },
      { tr: 'Günaydın!',      de: 'Guten Morgen!',        audio: 'audio/gunaydin.mp3' },
      { tr: 'İyi akşamlar!',  de: 'Guten Abend!',         audio: 'audio/iyi_aksamlar.mp3' },
      { tr: 'Hoşça kal!',     de: 'Tschüss! (ich gehe)',  audio: 'audio/hosca_kal.mp3' },
      { tr: 'Güle güle!',     de: 'Tschüss! (ich bleibe)', audio: 'audio/gule_gule.mp3' }
    ],
    nachsprech: ['Merhaba', 'Günaydın', 'İyi günler', 'İyi akşamlar', 'Hoşça kal', 'Güle güle'],
    hoerUebung: 'Höre einen kurzen Dialog — wann spielt er? Morgen, Tag oder Abend?',
    miniDialog: [
      { sprecher: 'A', tr: 'Günaydın!', de: 'Guten Morgen!' },
      { sprecher: 'B', tr: 'Günaydın! Nasılsın?', de: 'Guten Morgen! Wie geht\'s?' },
      { sprecher: 'A', tr: 'İyiyim, teşekkürler!', de: 'Gut, danke!' },
      { sprecher: 'B', tr: 'Güle güle!', de: 'Tschüss!' },
      { sprecher: 'A', tr: 'Hoşça kal!', de: 'Tschüss!' }
    ],
    anwendung: 'Begrüße heute jemanden auf Türkisch — im echten Leben oder laut vor dem Spiegel!',
    zusammenfassung: '6 Begrüßungen gelernt. Du weißt wann du welche nutzt. Merhaba ist immer richtig!'
  },

  'Bitte & Danke': {
    lernziel: 'Du kannst dich bedanken, bitten und höflich reagieren.',
    woerter: [
      { tr: 'Teşekkür ederim', de: 'Danke schön',      extra: 'formell',          audio: 'audio/tesekkur_ederim.mp3' },
      { tr: 'Sağ ol',          de: 'Danke',            extra: 'informell',        audio: 'audio/sag_ol.mp3' },
      { tr: 'Rica ederim',     de: 'Gern geschehen',   extra: 'Antwort auf Danke', audio: 'audio/rica_ederim.mp3' },
      { tr: 'Lütfen',          de: 'Bitte',            extra: 'ans Ende!',        audio: 'audio/lutfen.mp3' },
      { tr: 'Bir şey değil',   de: 'Nichts zu danken', extra: 'informell',        audio: 'audio/bir_sey_degil.mp3' }
    ],
    saatzbausteine: [
      '[Wunsch] + lütfen → Bir çay lütfen. (Einen Tee bitte.)',
      'Teşekkür ederim. → Danke schön.',
      'Rica ederim. → Gern geschehen.'
    ],
    erklaerung: '"Lütfen" kommt immer ans Ende des Satzes — nicht an den Anfang wie im Deutschen!',
    beispiele: [
      { tr: 'Bir su lütfen.',   de: 'Ein Wasser bitte.',       audio: 'audio/bir_su_lutfen.mp3' },
      { tr: 'Teşekkür ederim.', de: 'Danke schön.',            audio: 'audio/tesekkur_ederim.mp3' },
      { tr: 'Rica ederim.',     de: 'Gern geschehen.',          audio: 'audio/rica_ederim.mp3' },
      { tr: 'Sağ ol!',          de: 'Danke! (unter Freunden)', audio: 'audio/sag_ol.mp3' },
      { tr: 'Bir şey değil.',   de: 'Nichts zu danken.',       audio: 'audio/bir_sey_degil.mp3' },
    ],
    nachsprech: ['Teşekkür ederim', 'Lütfen', 'Rica ederim', 'Sağ ol', 'Bir şey değil'],
    hoerUebung: 'Höre 4 kurze Sätze — wird gedankt oder gebeten?',
    miniDialog: [
      { sprecher: 'A', tr: 'Bir çay lütfen.', de: 'Einen Tee bitte.' },
      { sprecher: 'B', tr: 'Tabii!', de: 'Natürlich!' },
      { sprecher: 'A', tr: 'Teşekkür ederim.', de: 'Danke schön.' },
      { sprecher: 'B', tr: 'Rica ederim.', de: 'Gern geschehen.' }
    ],
    anwendung: 'Bestelle heute gedanklich etwas auf Türkisch: Was möchtest du? + lütfen. Dann: Teşekkür ederim!',
    zusammenfassung: 'Lütfen kommt ans Ende. Teşekkür ederim = Danke. Rica ederim = Gern. Das reicht!'
  },

  'Ja, Nein, Ich verstehe nicht': {
    lernziel: 'Du kannst zustimmen, ablehnen und nachfragen wenn du etwas nicht verstehst.',
    woerter: [
      { tr: 'Evet',                   de: 'Ja',                        extra: '',              audio: 'audio/evet.mp3' },
      { tr: 'Hayır',                  de: 'Nein',                       extra: '',              audio: 'audio/hayir.mp3' },
      { tr: 'Tamam',                  de: 'OK / Alles klar',            extra: '',              audio: 'audio/tamam.mp3' },
      { tr: 'Anlamıyorum',            de: 'Ich verstehe nicht',         extra: 'Notfallsatz!',  audio: 'audio/anlamiyorum.mp3' },
      { tr: 'Tekrar eder misiniz?',   de: 'Können Sie wiederholen?',    extra: 'formell',       audio: 'audio/tekrar_eder_misiniz.mp3' },
      { tr: 'Yavaş konuşur musunuz?', de: 'Langsamer bitte',            extra: 'sehr wichtig!', audio: 'audio/yavas_konusur_musunuz.mp3' },
      { tr: 'Türkçe bilmiyorum',      de: 'Ich spreche kein Türkisch',  extra: '',              audio: 'audio/turkce_bilmiyorum.mp3' }
    ],
    erklaerung: 'Diese Sätze sind deine "Notfallsätze". Lerne sie auswendig — du wirst sie sehr oft brauchen!',
    beispiele: [
      { tr: 'Evet, lütfen.',           de: 'Ja, bitte.',                      audio: 'audio/evet_lutfen.mp3' },
      { tr: 'Hayır, teşekkürler.',     de: 'Nein, danke.',                    audio: 'audio/hayir_tesekkurler.mp3' },
      { tr: 'Tamam!',                  de: 'OK!',                             audio: 'audio/tamam.mp3' },
      { tr: 'Anlamıyorum.',            de: 'Ich verstehe nicht.',             audio: 'audio/anlamiyorum_sentence.mp3' },
      { tr: 'Yavaş konuşur musunuz?',  de: 'Können Sie langsamer sprechen?', audio: 'audio/yavas_konusur_musunuz.mp3' },
    ],
    nachsprech: ['Evet', 'Hayır', 'Tamam', 'Anlamıyorum', 'Tekrar eder misiniz?', 'Yavaş konuşur musunuz?'],
    hoerUebung: 'Höre Fragen — antworte automatisch mit Evet oder Hayır.',
    miniDialog: [
      { sprecher: 'A', tr: 'Türkçe biliyor musunuz?', de: 'Sprechen Sie Türkisch?' },
      { sprecher: 'B', tr: 'Hayır, biraz.', de: 'Nein, ein bisschen.' },
      { sprecher: 'A', tr: 'Yavaş konuşayım.', de: 'Ich spreche langsam.' },
      { sprecher: 'B', tr: 'Teşekkür ederim!', de: 'Danke!' }
    ],
    anwendung: 'Dein wichtigster Satz: "Yavaş konuşur musunuz?" — Übe ihn bis er automatisch kommt.',
    zusammenfassung: 'Evet, Hayır, Tamam, Anlamıyorum — 4 Wörter die du täglich brauchst!'
  },

  'Mein Name ist...': {
    lernziel: 'Du kannst deinen Namen sagen und nach dem Namen fragen.',
    woerter: [
      { tr: 'Benim adım',        de: 'Mein Name ist',              extra: '',        audio: 'audio/benim_adim.mp3' },
      { tr: 'Adın ne?',          de: 'Wie heißt du?',              extra: 'informell', audio: 'audio/adin_ne.mp3' },
      { tr: 'Adınız ne?',        de: 'Wie heißen Sie?',            extra: 'formell', audio: 'audio/adiniz_ne.mp3' },
      { tr: 'Memnun oldum',      de: 'Schön, dich kennenzulernen', extra: '',        audio: 'audio/memnun_oldum.mp3' },
      { tr: 'Ben de memnun oldum', de: 'Freut mich auch',          extra: 'Antwort', audio: 'audio/ben_de_memnun_oldum.mp3' }
    ],
    erklaerung: 'Im Türkischen gibt es "du" (sen) und "Sie" (siz). Mit fremden Erwachsenen immer "siz". Mit Freunden / Gleichaltrigen "sen".',
    beispiele: [
      { tr: 'Benim adım Anna.',     de: 'Mein Name ist Anna.',            audio: 'audio/benim_adim_anna.mp3' },
      { tr: 'Adın ne?',             de: 'Wie heißt du?',                  audio: 'audio/adin_ne.mp3' },
      { tr: 'Ben Mehmet.',          de: 'Ich bin Mehmet.',                audio: 'audio/ben_mehmet.mp3' },
      { tr: 'Memnun oldum!',        de: 'Schön, dich kennenzulernen!',   audio: 'audio/memnun_oldum_sentence.mp3' },
      { tr: 'Ben de memnun oldum!', de: 'Freut mich auch!',              audio: 'audio/ben_de_memnun_oldum.mp3' },
    ],
    nachsprech: ['Benim adım', 'Adın ne?', 'Memnun oldum', 'Ben de memnun oldum'],
    hoerUebung: 'Höre 3 Vorstellungen — wie heißen die Personen?',
    miniDialog: [
      { sprecher: 'A', tr: 'Merhaba! Benim adım Leyla.', de: 'Hallo! Mein Name ist Leyla.' },
      { sprecher: 'B', tr: 'Merhaba! Ben Tom. Memnun oldum.', de: 'Hallo! Ich bin Tom. Schön dich kennenzulernen.' },
      { sprecher: 'A', tr: 'Ben de memnun oldum!', de: 'Freut mich auch!' }
    ],
    anwendung: 'Stell dich auf Türkisch vor — laut, dreimal: Benim adım [dein Name]. Memnun oldum!',
    zusammenfassung: 'Benim adım + [Name] = fertig vorgestellt! Memnun oldum nicht vergessen.'
  },

  'Woher kommst du?': {
    lernziel: 'Du kannst nach der Herkunft fragen und antworten.',
    woerter: [
      { tr: 'Nerelisin?',   de: 'Woher kommst du?', extra: 'informell',        audio: 'audio/nerelisin.mp3' },
      { tr: 'Almanya',      de: 'Deutschland',      extra: 'Almanya\'danım',  audio: 'audio/almanya.mp3' },
      { tr: 'Avusturya',    de: 'Österreich',        extra: 'Avusturya\'danım', audio: 'audio/avusturya.mp3' },
      { tr: 'İsviçre',      de: 'Schweiz',           extra: 'İsviçre\'denim', audio: 'audio/isviçre.mp3' },
      { tr: 'Türkiye',      de: 'Türkei',            extra: 'Türkiye\'denim', audio: 'audio/turkiye.mp3' },
      { tr: 'Vay canına!',  de: 'Wow!',              extra: 'Ausruf',         audio: 'audio/vay_canina.mp3' }
    ],
    erklaerung: 'Die Endung "-dan / -den" bedeutet "aus". Almanya + dan = aus Deutschland. Merke dir einfach die ganzen Wörter!',
    beispiele: [
      { tr: 'Nerelisin?',         de: 'Woher kommst du?',           audio: 'audio/nerelisin.mp3' },
      { tr: 'Ben Almanya\'danım.', de: 'Ich komme aus Deutschland.', audio: 'audio/ben_almanyadan_sentence.mp3' },
      { tr: 'Ben Türkiye\'denim.', de: 'Ich komme aus der Türkei.',  audio: 'audio/ben_turkiyedenim.mp3' },
      { tr: 'Sen nerelisin?',     de: 'Und du, woher kommst du?',   audio: 'audio/sen_nerelisin.mp3' },
    ],
    nachsprech: ['Nerelisin?', 'Ben Almanya\'danım.', 'Ben Türkiye\'denim.', 'Vay canına!'],
    hoerUebung: 'Höre 3 Personen — woher kommen sie jeweils?',
    miniDialog: [
      { sprecher: 'A', tr: 'Nerelisin?', de: 'Woher kommst du?' },
      { sprecher: 'B', tr: 'Ben Almanya\'danım. Sen?', de: 'Aus Deutschland. Und du?' },
      { sprecher: 'A', tr: 'Ben İstanbul\'danım.', de: 'Ich komme aus Istanbul.' },
      { sprecher: 'B', tr: 'Vay canına!', de: 'Wow!' }
    ],
    anwendung: 'Sag laut: "Ben [dein Land]\'danım." — Dreimal. Ohne abzulesen.',
    zusammenfassung: 'Nerelisin? + Ben...danım = du kannst über Herkunft sprechen!'
  },

  'Zahlen 1–10': {
    lernziel: 'Du kannst die Zahlen 1–10 sagen, verstehen und beim Bestellen nutzen.',
    woerter: [
      { tr: 'bir',   de: 'eins (1)',    extra: '',               audio: 'audio/bir.mp3' },
      { tr: 'iki',   de: 'zwei (2)',    extra: '',               audio: 'audio/iki.mp3' },
      { tr: 'üç',    de: 'drei (3)',    extra: 'sprich: ütsch',  audio: 'audio/uc.mp3' },
      { tr: 'dört',  de: 'vier (4)',    extra: '',               audio: 'audio/dort.mp3' },
      { tr: 'beş',   de: 'fünf (5)',    extra: 'sprich: besch',  audio: 'audio/bes.mp3' },
      { tr: 'altı',  de: 'sechs (6)',   extra: '',               audio: 'audio/alti.mp3' },
      { tr: 'yedi',  de: 'sieben (7)',  extra: '',               audio: 'audio/yedi.mp3' },
      { tr: 'sekiz', de: 'acht (8)',    extra: '',               audio: 'audio/sekiz.mp3' },
      { tr: 'dokuz', de: 'neun (9)',   extra: '', audio: 'audio/dokuz.mp3' },
      { tr: 'on',    de: 'zehn (10)', extra: '', audio: 'audio/on.mp3' }
    ],
    saatzbausteine: [
      'Kaç tane? → Wie viele Stück?',
      '[Zahl] + [Nomen] → üç çay (drei Tee)',
      'Nomen bleibt Singular! "üç çay" nicht "üç çaylar".'
    ],
    erklaerung: 'Zahlen kommen VOR dem Nomen — und das Nomen bleibt im Singular! "Üç çay" = drei Tee (nicht "drei Tees").',
    beispiele: [
      { tr: 'Bir çay lütfen.', de: 'Einen Tee bitte.',   audio: 'audio/bir_cay_lutfen.mp3' },
      { tr: 'İki su lütfen.', de: 'Zwei Wasser bitte.', audio: 'audio/iki_su_lutfen.mp3' },
      { tr: 'Üç kişi.',  de: 'Drei Personen.',   audio: 'audio/uc_kisi.mp3' },
      { tr: 'Kaç tane?', de: 'Wie viele Stück?', audio: 'audio/kac_tane.mp3' },
      { tr: 'Beş lira.', de: 'Fünf Lira.',       audio: 'audio/bes_lira.mp3' },
    ],
    nachsprech: ['bir', 'iki', 'üç', 'dört', 'beş', 'altı', 'yedi', 'sekiz', 'dokuz', 'on'],
    hoerUebung: 'Höre eine Zahl — zeige sie mit den Fingern!',
    miniDialog: [
      { sprecher: 'Kellner', tr: 'Kaç çay istiyorsunuz?', de: 'Wie viele Tee möchten Sie?' },
      { sprecher: 'Gast', tr: 'İki çay lütfen.', de: 'Zwei Tee bitte.' },
      { sprecher: 'Kellner', tr: 'Tamam!', de: 'Alles klar!' }
    ],
    anwendung: 'Zähle heute alles was du siehst auf Türkisch — Äpfel, Autos, Stühle, Fenster.',
    zusammenfassung: '10 Zahlen + "Kaç?" (Wie viele?) — du kannst im Café und Laden bestellen!'
  },

  'Im Café — Bestellen': {
    lernziel: 'Du kannst im Café etwas bestellen, nach dem Preis fragen und bezahlen.',
    woerter: [
      { tr: 'çay',         de: 'Tee',           extra: '', audio: 'audio/cay.mp3' },
      { tr: 'kahve',       de: 'Kaffee',         extra: '', audio: 'audio/kahve.mp3' },
      { tr: 'su',          de: 'Wasser',         extra: '', audio: 'audio/su.mp3' },
      { tr: 'meyve suyu',  de: 'Fruchtsaft',     extra: '', audio: 'audio/meyve_suyu.mp3' },
      { tr: 'sütlü',       de: 'mit Milch',      extra: '', audio: 'audio/sutlu.mp3' },
      { tr: 'şekerli',     de: 'mit Zucker',     extra: '', audio: 'audio/sekerli.mp3' },
      { tr: 'hesap lütfen', de: 'Rechnung bitte', extra: '', audio: 'audio/hesap_lutfen.mp3' }
    ],
    saatzbausteine: [
      'Bir [Getränk] lütfen. → Ein ... bitte.',
      'Kaç para? → Wie viel kostet das?',
      'Hesap lütfen. → Die Rechnung bitte.'
    ],
    erklaerung: '"Bir çay lütfen" — das reicht! Du brauchst keinen ganzen Satz. Im Café funktioniert das immer.',
    beispiele: [
      { tr: 'Bir çay lütfen.',     de: 'Einen Tee bitte.',        audio: 'audio/bir_cay_lutfen.mp3' },
      { tr: 'İki kahve lütfen.',   de: 'Zwei Kaffee bitte.',      audio: 'audio/iki_kahve_lutfen.mp3' },
      { tr: 'Sütlü kahve lütfen.', de: 'Kaffee mit Milch bitte.', audio: 'audio/sutlu_kahve_lutfen.mp3' },
      { tr: 'Kaç para?',           de: 'Wie viel kostet das?',    audio: 'audio/kac_para.mp3' },
      { tr: 'Hesap lütfen.',       de: 'Die Rechnung bitte.',     audio: 'audio/hesap_lutfen.mp3' },
    ],
    nachsprech: ['Bir çay lütfen.', 'İki kahve lütfen.', 'Kaç para?', 'Hesap lütfen.'],
    hoerUebung: 'Höre eine Bestellung — was wird bestellt und wie viel kostet es?',
    miniDialog: [
      { sprecher: 'Kellner', tr: 'Merhaba! Ne alırsınız?', de: 'Hallo! Was nehmen Sie?' },
      { sprecher: 'Gast', tr: 'Bir çay, bir kahve lütfen.', de: 'Einen Tee, einen Kaffee bitte.' },
      { sprecher: 'Kellner', tr: 'Tamam. Başka?', de: 'Alles klar. Sonst noch etwas?' },
      { sprecher: 'Gast', tr: 'Hayır, teşekkürler.', de: 'Nein, danke.' },
      { sprecher: 'Gast', tr: 'Hesap lütfen!', de: 'Die Rechnung bitte!' },
      { sprecher: 'Kellner', tr: 'On beş lira.', de: '15 Lira.' }
    ],
    anwendung: 'Übe diesen Dialog laut — stell dir vor du sitzt in einem Istanbuler Café.',
    zusammenfassung: 'Bir + [Getränk] + lütfen = du kannst im Café bestellen! Hesap lütfen = Rechnung.'
  },

  'Wie alt bist du?': {
    lernziel: 'Du kannst dein Alter sagen, danach fragen und Zahlen 11–30 nutzen.',
    woerter: [
      { tr: 'Kaç yaşındasın?',  de: 'Wie alt bist du?',       extra: 'informell', audio: 'audio/kac_yasindasin.mp3' },
      { tr: 'Kaç yaşındasınız?', de: 'Wie alt sind Sie?',      extra: 'formell',   audio: 'audio/kac_yasindasiniz.mp3' },
      { tr: 'yaş',              de: 'Jahr(e) / Alter',         extra: '',          audio: 'audio/yas.mp3' },
      { tr: 'on bir',           de: 'elf (11)',                extra: '',          audio: 'audio/on_bir.mp3' },
      { tr: 'yirmi',            de: 'zwanzig (20)',            extra: '',          audio: 'audio/yirmi.mp3' },
      { tr: 'yirmi beş',        de: 'fünfundzwanzig (25)',     extra: '',          audio: 'audio/ben_yirmi_bes_yasin.mp3' },
      { tr: 'otuz',             de: 'dreißig (30)',            extra: '',          audio: 'audio/otuz.mp3' }
    ],
    saatzbausteine: [
      'Kaç yaşındasın? → Wie alt bist du?',
      'Ben [Zahl] yaşındayım. → Ich bin X Jahre alt.',
      '11–19: on + Zahl → on iki = 12, on sekiz = 18'
    ],
    erklaerung: 'Zahl + yaşındayım = Ich bin X Jahre alt. Und hier lernst du die Zahlen 11–30: on = 10, yirmi = 20, otuz = 30.',
    beispiele: [
      { tr: 'Kaç yaşındasın?',          de: 'Wie alt bist du?',    audio: 'audio/kac_yasindasin.mp3' },
      { tr: 'Ben yirmi beş yaşındayım.', de: 'Ich bin 25 Jahre alt.', audio: 'audio/ben_yirmi_bes_complete.mp3' },
      { tr: 'Ben otuz yaşındayım.',      de: 'Ich bin 30.',          audio: 'audio/ben_otuz_yasinday.mp3' },
      { tr: 'On altı yaşındayım.',      de: 'Ich bin 16.',          audio: 'audio/on_alti_yasinday.mp3' }
    ],
    nachsprech: ['Kaç yaşındasın?', 'Ben yirmi beş yaşındayım.', 'on bir', 'yirmi', 'otuz'],
    hoerUebung: 'Höre 4 Personen — wie alt sind sie jeweils?',
    miniDialog: [
      { sprecher: 'A', tr: 'Kaç yaşındasın?', de: 'Wie alt bist du?' },
      { sprecher: 'B', tr: 'Ben yirmi sekiz yaşındayım. Sen?', de: 'Ich bin 28. Und du?' },
      { sprecher: 'A', tr: 'Ben otuz iki yaşındayım.', de: 'Ich bin 32.' }
    ],
    anwendung: 'Sag laut dein Alter auf Türkisch. Dreimal. Dann frag imaginär: "Kaç yaşındasın?"',
    zusammenfassung: 'Kaç yaşındasın? + Ben X yaşındayım. Zahlen 11–30 dabei. Du wächst!'
  },

  'Alles zusammen — erstes Gespräch': {
    lernziel: 'Du führst ein vollständiges Mini-Gespräch mit allem was du bisher gelernt hast.',
    woerter: [
      { tr: 'Nasılsın?',   de: 'Wie geht\'s?',     extra: 'informell',  audio: 'audio/nasilsin.mp3' },
      { tr: 'İyiyim',     de: 'Mir geht\'s gut',  extra: '',           audio: 'audio/iyiyim.mp3' },
      { tr: 'Teşekkürler', de: 'Danke',           extra: 'kurze Form', audio: 'audio/tesekkurler.mp3' },
      { tr: 'Sen?',        de: 'Und du?',          extra: '',           audio: 'audio/sen_soru.mp3' }
    ],
    erklaerung: 'Heute kombinierst du alles: Begrüßung + Name + Herkunft + Alter + Verabschiedung. Das ist ein echter Türkisch-Dialog!',
    beispiele: [
      { tr: 'Merhaba! Benim adım...', de: 'Hallo! Mein Name ist...' },
      { tr: 'Nerelisin? — Ben Almanya\'danım.', de: 'Woher? — Ich komme aus Deutschland.' },
      { tr: 'Kaç yaşındasın? — Ben yirmi dört yaşındayım.', de: 'Wie alt? — Ich bin 24.' },
      { tr: 'Memnun oldum! Hoşça kal!', de: 'Schön, dich kennenzulernen! Tschüss!' }
    ],
    nachsprech: ['Nasılsın?', 'İyiyim, teşekkürler.', 'Sen?', 'Memnun oldum!'],
    hoerUebung: 'Höre den vollständigen Dialog — beantworte: Name? Herkunft? Alter?',
    miniDialog: [
      { sprecher: 'A', tr: 'Günaydın! Benim adım Lisa. Sen?', de: 'Guten Morgen! Ich bin Lisa. Und du?' },
      { sprecher: 'B', tr: 'Ben Ahmet. Memnun oldum! Nerelisin?', de: 'Ich bin Ahmet. Freut mich! Woher kommst du?' },
      { sprecher: 'A', tr: 'Ben Almanya\'danım. Kaç yaşındasın?', de: 'Aus Deutschland. Wie alt bist du?' },
      { sprecher: 'B', tr: 'Yirmi dört yaşındayım. Hoşça kal!', de: 'Ich bin 24. Tschüss!' },
      { sprecher: 'A', tr: 'Güle güle!', de: 'Tschüss!' }
    ],
    anwendung: 'Führe diesen Dialog mit dir selbst vor dem Spiegel. 3 Mal. Ohne Text.',
    zusammenfassung: 'Du kannst dich vorstellen, begrüßen und nach Name, Herkunft und Alter fragen. Echter Türkisch-Alltag!'
  },

  'Zahlen 11–100': {
    lernziel: 'Du kannst Zahlen bis 100 bilden, verstehen und beim Einkaufen nutzen.',
    woerter: [
      { tr: 'on bir',   de: 'elf (11)',         extra: 'on + bir',    audio: '' },
      { tr: 'on beş',   de: 'fünfzehn (15)',    extra: 'on + beş',   audio: '' },
      { tr: 'yirmi',    de: 'zwanzig (20)',      extra: '',            audio: '' },
      { tr: 'otuz',     de: 'dreißig (30)',      extra: '',            audio: '' },
      { tr: 'kırk',     de: 'vierzig (40)',      extra: '',            audio: '' },
      { tr: 'elli',     de: 'fünfzig (50)',      extra: '',            audio: '' },
      { tr: 'altmış',   de: 'sechzig (60)',      extra: '',            audio: '' },
      { tr: 'yetmiş',   de: 'siebzig (70)',      extra: '',            audio: '' },
      { tr: 'seksen',   de: 'achtzig (80)',      extra: '',            audio: '' },
      { tr: 'doksan',   de: 'neunzig (90)',      extra: '',            audio: '' },
      { tr: 'yüz',      de: 'hundert (100)',     extra: '',            audio: '' },
    ],
    erklaerung: '11–19: "on" + Zahl → on bir (11), on iki (12), on dokuz (19). 21: "yirmi bir", 35: "otuz beş". Einfach die Zehner + Einer zusammensetzen!',
    saatzbausteine: [
      'Yirmi + bir = yirmi bir (21)',
      'Otuz + beş = otuz beş (35)',
      'Elli + dokuz = elli dokuz (59)',
    ],
    beispiele: [
      { tr: 'On beş lira.',       de: '15 Lira.',                audio: '' },
      { tr: 'Yirmi üç yaşındayım.', de: 'Ich bin 23.',           audio: '' },
      { tr: 'Otuz iki kişi.',     de: '32 Personen.',            audio: '' },
      { tr: 'Seksen lira.',       de: '80 Lira.',                audio: '' },
    ],
    nachsprech: ['yirmi', 'otuz', 'kırk', 'elli', 'altmış', 'yetmiş', 'seksen', 'doksan', 'yüz'],
    hoerUebung: 'Höre eine Zahl — schreibe sie auf.',
    miniDialog: [
      { sprecher: 'Verkäufer', tr: 'Kaç para?', de: 'Wie viel?' },
      { sprecher: 'Kunde', tr: 'Yirmi beş lira mı?', de: '25 Lira?' },
      { sprecher: 'Verkäufer', tr: 'Evet, yirmi beş lira.', de: 'Ja, 25 Lira.' },
    ],
    anwendung: 'Zähle von 10 bis 100 in Zehnerschritten laut auf Türkisch.',
    zusammenfassung: 'Zahlen bis 100 = Zehner + Einer. Kırk elli altmış yetmiş seksen doksan yüz — lern die Zehner, den Rest kannst du ableiten!'
  },

  'Familienmitglieder': {
    lernziel: 'Du kannst deine Familie vorstellen und nach Familienmitgliedern fragen.',
    woerter: [
      { tr: 'anne',         de: 'Mutter',              extra: 'annem = meine Mutter',   audio: '' },
      { tr: 'baba',         de: 'Vater',               extra: 'babam = mein Vater',     audio: '' },
      { tr: 'abla',         de: 'ältere Schwester',    extra: 'ablam',                  audio: '' },
      { tr: 'abi',          de: 'älterer Bruder',      extra: 'abim',                   audio: '' },
      { tr: 'kız kardeş',   de: 'jüngere Schwester',   extra: '',                       audio: '' },
      { tr: 'erkek kardeş', de: 'jüngerer Bruder',     extra: '',                       audio: '' },
      { tr: 'anneanne',     de: 'Oma (mütterlich)',    extra: '',                       audio: '' },
      { tr: 'babaanne',     de: 'Oma (väterlich)',     extra: '',                       audio: '' },
      { tr: 'dede',         de: 'Opa',                 extra: '',                       audio: '' },
      { tr: 'kardeş',       de: 'Geschwister',         extra: 'allgemein',              audio: '' },
      { tr: 'çocuk',        de: 'Kind',                extra: '',                       audio: '' },
    ],
    erklaerung: 'Im Türkischen unterscheidet man ob das Geschwister älter oder jünger ist! "Abla" = ältere Schwester, "abi" = älterer Bruder. Besitzendung: anne → annem (meine Mutter), baba → babam (mein Vater).',
    saatzbausteine: [
      'Benim [Familienmitglied]im var. → Ich habe einen/eine ...',
      'O benim [Familienmitglied]im. → Das ist mein/e ...',
      'Kaç kardeşin var? → Wie viele Geschwister hast du?',
    ],
    beispiele: [
      { tr: 'Annem ve babam İstanbul\'da.', de: 'Meine Mutter und mein Vater sind in Istanbul.', audio: '' },
      { tr: 'Bir ablam var.',              de: 'Ich habe eine ältere Schwester.',               audio: '' },
      { tr: 'Kaç kardeşin var?',           de: 'Wie viele Geschwister hast du?',                audio: '' },
      { tr: 'İki kardeşim var.',           de: 'Ich habe zwei Geschwister.',                    audio: '' },
    ],
    nachsprech: ['anne', 'baba', 'abla', 'abi', 'kardeş', 'dede', 'anneanne'],
    hoerUebung: 'Höre eine Familienbeschreibung — wie viele Familienmitglieder?',
    miniDialog: [
      { sprecher: 'A', tr: 'Kaç kardeşin var?', de: 'Wie viele Geschwister hast du?' },
      { sprecher: 'B', tr: 'İki kardeşim var. Bir ablam, bir erkek kardeşim.', de: 'Zwei. Eine ältere Schwester und ein jüngerer Bruder.' },
      { sprecher: 'A', tr: 'Annen ve baban nerede?', de: 'Wo sind deine Eltern?' },
      { sprecher: 'B', tr: 'Ankara\'da.', de: 'In Ankara.' },
    ],
    anwendung: 'Beschreibe deine Familie laut auf Türkisch. Wer ist wer?',
    zusammenfassung: 'Anne, baba, abla, abi, kardeş — die 5 wichtigsten Familienwörter. Besitzendung -m/im/ım dranhängen!'
  },

  'Farben lernen': {
    lernziel: 'Du kannst alle Grundfarben auf Türkisch nennen und beschreiben.',
    woerter: [
      { tr: 'kırmızı',     de: 'rot',            extra: '',  audio: '' },
      { tr: 'mavi',        de: 'blau',           extra: '',  audio: '' },
      { tr: 'yeşil',       de: 'grün',           extra: '',  audio: '' },
      { tr: 'sarı',        de: 'gelb',           extra: '',  audio: '' },
      { tr: 'beyaz',       de: 'weiß',           extra: '',  audio: '' },
      { tr: 'siyah',       de: 'schwarz',        extra: '',  audio: '' },
      { tr: 'turuncu',     de: 'orange',         extra: '',  audio: '' },
      { tr: 'mor',         de: 'lila / violett', extra: '',  audio: '' },
      { tr: 'pembe',       de: 'rosa',           extra: '',  audio: '' },
      { tr: 'kahverengi',  de: 'braun',          extra: 'kahve = Kaffee!', audio: '' },
      { tr: 'gri',         de: 'grau',           extra: '',  audio: '' },
    ],
    erklaerung: 'Adjektive kommen im Türkischen VOR das Nomen: "kırmızı araba" = das rote Auto. Sie verändern sich nicht nach Geschlecht (es gibt keins!).',
    saatzbausteine: [
      '[Farbe] + [Nomen] → kırmızı araba (rotes Auto)',
      'Bu [Farbe]. → Das ist [Farbe].',
      'Rengi ne? → Welche Farbe hat es?',
    ],
    beispiele: [
      { tr: 'Kırmızı araba.',   de: 'Das rote Auto.',         audio: '' },
      { tr: 'Mavi gökyüzü.',    de: 'Der blaue Himmel.',      audio: '' },
      { tr: 'Rengi ne?',        de: 'Welche Farbe hat es?',   audio: '' },
      { tr: 'Siyah ve beyaz.', de: 'Schwarz und weiß.',      audio: '' },
    ],
    nachsprech: ['kırmızı', 'mavi', 'yeşil', 'sarı', 'beyaz', 'siyah', 'turuncu', 'mor', 'pembe'],
    hoerUebung: 'Höre eine Farbe — welche ist es?',
    miniDialog: [
      { sprecher: 'A', tr: 'Bu çanta hangi renk?', de: 'Welche Farbe hat diese Tasche?' },
      { sprecher: 'B', tr: 'Kırmızı.', de: 'Rot.' },
      { sprecher: 'A', tr: 'Mavi yok mu?', de: 'Gibt es kein Blau?' },
      { sprecher: 'B', tr: 'Var, işte!', de: 'Doch, hier!' },
    ],
    anwendung: 'Schau dich um — benenne 10 Dinge nach ihrer Farbe auf Türkisch.',
    zusammenfassung: 'Adjektive kommen vor das Nomen, ändern sich nicht. Kırmızı mavi yeşil sarı beyaz siyah — lern die 6 Grundfarben zuerst!'
  },

  'Kleidung benennen': {
    lernziel: 'Du kannst Kleidungsstücke benennen und beim Einkaufen beschreiben.',
    woerter: [
      { tr: 'tişört',    de: 'T-Shirt',        extra: '',  audio: '' },
      { tr: 'gömlek',    de: 'Hemd / Bluse',   extra: '',  audio: '' },
      { tr: 'pantolon',  de: 'Hose',           extra: '',  audio: '' },
      { tr: 'etek',      de: 'Rock',           extra: '',  audio: '' },
      { tr: 'elbise',    de: 'Kleid',          extra: '',  audio: '' },
      { tr: 'ceket',     de: 'Jacke',          extra: '',  audio: '' },
      { tr: 'ayakkabı',  de: 'Schuhe',         extra: '',  audio: '' },
      { tr: 'çanta',     de: 'Tasche',         extra: '',  audio: '' },
      { tr: 'büyük',     de: 'groß',           extra: '',  audio: '' },
      { tr: 'küçük',     de: 'klein',          extra: '',  audio: '' },
    ],
    erklaerung: 'Farbe + Kleidung = fertige Beschreibung: "mavi gömlek" (blaues Hemd). Größen auf Türkisch: küçük (S), orta (M), büyük (L).',
    saatzbausteine: [
      '[Farbe] + [Kleidung] → sarı elbise (gelbes Kleid)',
      'Bu [Kleidung] kaç para? → Was kostet dieses/r ...?',
      'Deneyebilir miyim? → Kann ich es anprobieren?',
    ],
    beispiele: [
      { tr: 'Mavi pantolon lütfen.',    de: 'Eine blaue Hose bitte.',       audio: '' },
      { tr: 'Bu kaç para?',             de: 'Was kostet das?',              audio: '' },
      { tr: 'Büyük beden var mı?',      de: 'Haben Sie Größe L?',           audio: '' },
      { tr: 'Deneyebilir miyim?',       de: 'Kann ich es anprobieren?',     audio: '' },
    ],
    nachsprech: ['tişört', 'gömlek', 'pantolon', 'elbise', 'ceket', 'ayakkabı', 'çanta'],
    hoerUebung: 'Höre eine Beschreibung — welches Kleidungsstück in welcher Farbe?',
    miniDialog: [
      { sprecher: 'Kunde', tr: 'Bu gömlek kaç para?', de: 'Was kostet dieses Hemd?' },
      { sprecher: 'Verkäufer', tr: 'Yüz elli lira.', de: '150 Lira.' },
      { sprecher: 'Kunde', tr: 'Mavi renkte var mı?', de: 'Haben Sie es in Blau?' },
      { sprecher: 'Verkäufer', tr: 'Evet, buyurun.', de: 'Ja, bitte sehr.' },
    ],
    anwendung: 'Beschreibe was du gerade trägst auf Türkisch — Farbe + Kleidungsstück.',
    zusammenfassung: 'Farbe + Kleidung = fertige Beschreibung. Bu kaç para? und Deneyebilir miyim? sind deine wichtigsten Einkaufssätze!'
  },

  'Die Uhrzeit': {
    lernziel: 'Du kannst die Uhrzeit auf Türkisch sagen und verstehen.',
    woerter: [
      { tr: 'Saat kaç?',   de: 'Wie spät ist es?',    extra: '',                     audio: '' },
      { tr: 'Saat bir.',   de: 'Es ist ein Uhr.',      extra: '',                     audio: '' },
      { tr: 'buçuk',       de: 'halb',                 extra: 'iki buçuk = halb drei', audio: '' },
      { tr: 'çeyrek geçe', de: 'Viertel nach',         extra: 'ikiyi çeyrek geçe',    audio: '' },
      { tr: 'çeyrek var',  de: 'Viertel vor',          extra: 'üçe çeyrek var',       audio: '' },
      { tr: 'sabah',       de: 'morgens',              extra: '',                     audio: '' },
      { tr: 'öğleden sonra', de: 'nachmittags',        extra: '',                     audio: '' },
      { tr: 'akşam',       de: 'abends',               extra: '',                     audio: '' },
      { tr: 'gece',        de: 'nachts',               extra: '',                     audio: '' },
    ],
    erklaerung: 'Volle Stunde: "Saat üç." (Es ist drei Uhr). Halb: "Saat üç buçuk." (Halb vier). Für "nach" wird der Akkusativ genutzt: "İkiyi beş geçiyor." (5 nach zwei).',
    saatzbausteine: [
      'Saat kaç? → Wie spät ist es?',
      'Saat [Zahl]. → Es ist [Zahl] Uhr.',
      'Saat [Zahl] buçuk. → Halb [Zahl+1].',
      'Saat kaçta? → Um wie viel Uhr?',
    ],
    beispiele: [
      { tr: 'Saat kaç?',          de: 'Wie spät ist es?',         audio: '' },
      { tr: 'Saat dört.',         de: 'Es ist vier Uhr.',         audio: '' },
      { tr: 'Saat yedi buçuk.',   de: 'Es ist halb acht.',        audio: '' },
      { tr: 'Saat kaçta buluşalım?', de: 'Um wie viel Uhr treffen wir uns?', audio: '' },
    ],
    nachsprech: ['Saat kaç?', 'Saat bir.', 'Saat iki buçuk.', 'sabah', 'akşam', 'gece'],
    hoerUebung: 'Höre eine Uhrzeit — schreibe sie auf.',
    miniDialog: [
      { sprecher: 'A', tr: 'Saat kaç?', de: 'Wie spät ist es?' },
      { sprecher: 'B', tr: 'Saat on bir.', de: 'Es ist elf Uhr.' },
      { sprecher: 'A', tr: 'Saat kaçta buluşuyoruz?', de: 'Um wie viel Uhr treffen wir uns?' },
      { sprecher: 'B', tr: 'Saat ikide.', de: 'Um zwei Uhr.' },
    ],
    anwendung: 'Schau auf die Uhr — sag die Uhrzeit auf Türkisch. Übe jede Stunde einmal.',
    zusammenfassung: 'Saat kaç? = Wie spät ist es? Saat + Zahl = fertig. Buçuk = halb. Das reicht für den Alltag!'
  },

  'Datum & Wochentage': {
    lernziel: 'Du kannst Wochentage und das Datum nennen und nach dem Datum fragen.',
    woerter: [
      { tr: 'Pazartesi',  de: 'Montag',       extra: '',             audio: '' },
      { tr: 'Salı',       de: 'Dienstag',     extra: '',             audio: '' },
      { tr: 'Çarşamba',   de: 'Mittwoch',     extra: '',             audio: '' },
      { tr: 'Perşembe',   de: 'Donnerstag',   extra: '',             audio: '' },
      { tr: 'Cuma',       de: 'Freitag',      extra: 'heiliger Tag', audio: '' },
      { tr: 'Cumartesi',  de: 'Samstag',      extra: '',             audio: '' },
      { tr: 'Pazar',      de: 'Sonntag',      extra: '',             audio: '' },
      { tr: 'bugün',      de: 'heute',        extra: '',             audio: '' },
      { tr: 'yarın',      de: 'morgen',       extra: '',             audio: '' },
      { tr: 'dün',        de: 'gestern',      extra: '',             audio: '' },
      { tr: 'hafta',      de: 'Woche',        extra: '',             audio: '' },
    ],
    erklaerung: '"Bugün ne günü?" = Was ist heute für ein Tag? "Bugün Pazartesi." = Heute ist Montag. Der Wochenbeginn ist in der Türkei der Montag — wie in Deutschland.',
    saatzbausteine: [
      'Bugün ne günü? → Was ist heute für ein Tag?',
      'Bugün [Wochentag]. → Heute ist [Tag].',
      'Yarın [Wochentag]. → Morgen ist [Tag].',
    ],
    beispiele: [
      { tr: 'Bugün Çarşamba.',       de: 'Heute ist Mittwoch.',         audio: '' },
      { tr: 'Yarın Perşembe.',       de: 'Morgen ist Donnerstag.',      audio: '' },
      { tr: 'Dün Pazartesiydi.',     de: 'Gestern war Montag.',         audio: '' },
      { tr: 'Bu hafta sonu ne yapıyorsun?', de: 'Was machst du dieses Wochenende?', audio: '' },
    ],
    nachsprech: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
    hoerUebung: 'Höre einen Tag — welcher Wochentag ist es?',
    miniDialog: [
      { sprecher: 'A', tr: 'Bugün ne günü?', de: 'Was ist heute für ein Tag?' },
      { sprecher: 'B', tr: 'Bugün Cuma.', de: 'Heute ist Freitag.' },
      { sprecher: 'A', tr: 'Yarın ne?', de: 'Was ist morgen?' },
      { sprecher: 'B', tr: 'Yarın Cumartesi. Hafta sonu!', de: 'Morgen Samstag. Wochenende!' },
    ],
    anwendung: 'Sag heute laut welcher Tag es ist — und was du morgen machst.',
    zusammenfassung: '7 Wochentage gelernt. Bugün / yarın / dün — drei wichtige Zeitwörter. Cuma = Freitag ist besonders wichtig in der Türkei!'
  },

  'Monate & Jahreszeiten': {
    lernziel: 'Du kennst alle 12 Monate und 4 Jahreszeiten auf Türkisch.',
    woerter: [
      { tr: 'Ocak',      de: 'Januar',     extra: '',  audio: '' },
      { tr: 'Şubat',     de: 'Februar',    extra: '',  audio: '' },
      { tr: 'Mart',      de: 'März',       extra: '',  audio: '' },
      { tr: 'Nisan',     de: 'April',      extra: '',  audio: '' },
      { tr: 'Mayıs',     de: 'Mai',        extra: '',  audio: '' },
      { tr: 'Haziran',   de: 'Juni',       extra: '',  audio: '' },
      { tr: 'Temmuz',    de: 'Juli',       extra: 'heiß!', audio: '' },
      { tr: 'Ağustos',   de: 'August',     extra: '',  audio: '' },
      { tr: 'Eylül',     de: 'September',  extra: '',  audio: '' },
      { tr: 'Ekim',      de: 'Oktober',    extra: '',  audio: '' },
      { tr: 'Kasım',     de: 'November',   extra: '',  audio: '' },
      { tr: 'Aralık',    de: 'Dezember',   extra: '',  audio: '' },
    ],
    erklaerung: 'Jahreszeiten: ilkbahar (Frühling), yaz (Sommer), sonbahar (Herbst), kış (Winter). "Hangi ayda doğdun?" = In welchem Monat bist du geboren?',
    saatzbausteine: [
      'Hangi ayda doğdun? → In welchem Monat bist du geboren?',
      '[Monat]\'da doğdum. → Ich bin im [Monat] geboren.',
      'Şu an hangi mevsim? → Welche Jahreszeit ist gerade?',
    ],
    beispiele: [
      { tr: 'Temmuz\'da doğdum.',    de: 'Ich bin im Juli geboren.',       audio: '' },
      { tr: 'Ocak\'ta çok soğuk.',  de: 'Im Januar ist es sehr kalt.',    audio: '' },
      { tr: 'Yaz tatili Haziran\'da başlar.', de: 'Die Sommerferien beginnen im Juni.', audio: '' },
    ],
    nachsprech: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
    hoerUebung: 'Höre einen Monat — welcher ist es?',
    miniDialog: [
      { sprecher: 'A', tr: 'Hangi ayda doğdun?', de: 'In welchem Monat bist du geboren?' },
      { sprecher: 'B', tr: 'Nisan\'da. Sen?', de: 'Im April. Und du?' },
      { sprecher: 'A', tr: 'Ben Aralık\'ta.', de: 'Ich im Dezember.' },
      { sprecher: 'B', tr: 'Kış çocuğusun!', de: 'Du bist ein Winterkind!' },
    ],
    anwendung: 'Sag deinen Geburtstagsmonat auf Türkisch. Dann nenne alle 12 Monate auswendig.',
    zusammenfassung: '12 Monate + 4 Jahreszeiten. "Tda/te" = im Monat. Ocak bis Aralık — das reicht!'
  },

  'Lebensmittel & Zutaten': {
    lernziel: 'Du kannst Lebensmittel benennen, einkaufen und nach Zutaten fragen.',
    woerter: [
      { tr: 'ekmek',    de: 'Brot',        extra: '',            audio: '' },
      { tr: 'süt',      de: 'Milch',       extra: '',            audio: '' },
      { tr: 'peynir',   de: 'Käse',        extra: '',            audio: '' },
      { tr: 'yumurta',  de: 'Ei',          extra: '',            audio: '' },
      { tr: 'et',       de: 'Fleisch',     extra: '',            audio: '' },
      { tr: 'tavuk',    de: 'Hühnchen',    extra: '',            audio: '' },
      { tr: 'balık',    de: 'Fisch',       extra: '',            audio: '' },
      { tr: 'domates',  de: 'Tomate',      extra: '',            audio: '' },
      { tr: 'elma',     de: 'Apfel',       extra: '',            audio: '' },
      { tr: 'pilav',    de: 'Reis',        extra: 'Grundnahrung', audio: '' },
      { tr: 'ekmek',    de: 'Brot',        extra: '',            audio: '' },
      { tr: 'şeker',    de: 'Zucker',      extra: '',            audio: '' },
    ],
    erklaerung: 'Im türkischen Markt fragt man "... var mı?" (Gibt es ...?) oder "... istiyorum." (Ich möchte ...). Mengen: "bir kilo" (ein Kilo), "yarım kilo" (ein halbes Kilo), "bir paket" (ein Paket).',
    saatzbausteine: [
      'Bir kilo [Lebensmittel] lütfen. → Ein Kilo ... bitte.',
      'Yarım kilo → ein halbes Kilo',
      '[Lebensmittel] var mı? → Haben Sie ...?',
    ],
    beispiele: [
      { tr: 'Bir kilo domates lütfen.',    de: 'Ein Kilo Tomaten bitte.',     audio: '' },
      { tr: 'Peynir var mı?',             de: 'Haben Sie Käse?',             audio: '' },
      { tr: 'Yarım kilo et lütfen.',       de: 'Ein halbes Kilo Fleisch bitte.', audio: '' },
      { tr: 'Ne kadar?',                  de: 'Wie viel kostet das?',        audio: '' },
    ],
    nachsprech: ['ekmek', 'süt', 'peynir', 'yumurta', 'et', 'tavuk', 'domates', 'elma'],
    hoerUebung: 'Höre eine Einkaufsliste — was wird gekauft?',
    miniDialog: [
      { sprecher: 'Kunde', tr: 'Merhaba! Bir kilo domates var mı?', de: 'Hallo! Haben Sie ein Kilo Tomaten?' },
      { sprecher: 'Verkäufer', tr: 'Var, tabii. Başka?', de: 'Ja, natürlich. Sonst noch was?' },
      { sprecher: 'Kunde', tr: 'Yarım kilo peynir de lütfen.', de: 'Und ein halbes Kilo Käse bitte.' },
      { sprecher: 'Verkäufer', tr: 'Tamam, otuz lira.', de: 'Alles klar, 30 Lira.' },
    ],
    anwendung: 'Schreib eine kurze Einkaufsliste auf Türkisch — 5 Lebensmittel die du diese Woche brauchst.',
    zusammenfassung: 'Ekmek süt peynir yumurta et tavuk balık — die 7 Basis-Lebensmittel. Bir kilo + Lütfen = du kannst einkaufen!'
  },

  'Essen bestellen': {
    lernziel: 'Du kannst im Restaurant ein vollständiges Essen bestellen.',
    woerter: [
      { tr: 'menü',        de: 'Speisekarte',    extra: '',  audio: '' },
      { tr: 'çorba',       de: 'Suppe',          extra: '',  audio: '' },
      { tr: 'salata',      de: 'Salat',          extra: '',  audio: '' },
      { tr: 'kebap',       de: 'Kebab',          extra: '',  audio: '' },
      { tr: 'pilav',       de: 'Reis',           extra: '',  audio: '' },
      { tr: 'tatlı',       de: 'Dessert / süß',  extra: '',  audio: '' },
      { tr: 'Ne istersiniz?', de: 'Was möchten Sie?', extra: 'der Kellner fragt', audio: '' },
      { tr: 'afiyet olsun', de: 'Guten Appetit', extra: '',  audio: '' },
    ],
    erklaerung: '"Menü var mı?" = Haben Sie eine Speisekarte? "Ne tavsiye edersiniz?" = Was empfehlen Sie? "Hesap lütfen." = Die Rechnung bitte.',
    saatzbausteine: [
      'Bir [Gericht] lütfen. → Ein/e ... bitte.',
      'Ne tavsiye edersiniz? → Was empfehlen Sie?',
      'Hesap lütfen. → Die Rechnung bitte.',
      'Afiyet olsun! → Guten Appetit!',
    ],
    beispiele: [
      { tr: 'Bir çorba lütfen.',         de: 'Eine Suppe bitte.',              audio: '' },
      { tr: 'Ne tavsiye edersiniz?',     de: 'Was empfehlen Sie?',             audio: '' },
      { tr: 'Kebap ve salata lütfen.',   de: 'Kebab und Salat bitte.',         audio: '' },
      { tr: 'Afiyet olsun!',             de: 'Guten Appetit!',                 audio: '' },
    ],
    nachsprech: ['menü', 'çorba', 'salata', 'kebap', 'tatlı', 'Afiyet olsun!', 'Ne tavsiye edersiniz?'],
    hoerUebung: 'Höre eine Bestellung — was wird bestellt?',
    miniDialog: [
      { sprecher: 'Kellner', tr: 'İyi akşamlar! Ne istersiniz?', de: 'Guten Abend! Was möchten Sie?' },
      { sprecher: 'Gast', tr: 'Menü var mı?', de: 'Haben Sie eine Speisekarte?' },
      { sprecher: 'Kellner', tr: 'Buyurun.', de: 'Bitte sehr.' },
      { sprecher: 'Gast', tr: 'Bir çorba, bir kebap lütfen.', de: 'Eine Suppe, einen Kebab bitte.' },
      { sprecher: 'Kellner', tr: 'Afiyet olsun!', de: 'Guten Appetit!' },
    ],
    anwendung: 'Bestelle dein Lieblingsessen gedanklich auf Türkisch. Laut sprechen!',
    zusammenfassung: 'Çorba salata kebap pilav tatlı — die wichtigsten Gerichte. Ne istersiniz? und Hesap lütfen — mehr brauchst du nicht!'
  },

  'Wetter beschreiben': {
    lernziel: 'Du kannst das Wetter beschreiben und nach dem Wetter fragen.',
    woerter: [
      { tr: 'Hava nasıl?',  de: 'Wie ist das Wetter?',  extra: '',           audio: '' },
      { tr: 'güneşli',      de: 'sonnig',               extra: '',           audio: '' },
      { tr: 'yağmurlu',     de: 'regnerisch',           extra: '',           audio: '' },
      { tr: 'bulutlu',      de: 'bewölkt',              extra: '',           audio: '' },
      { tr: 'karlı',        de: 'schneeig',             extra: '',           audio: '' },
      { tr: 'sıcak',        de: 'heiß / warm',          extra: '',           audio: '' },
      { tr: 'soğuk',        de: 'kalt',                 extra: '',           audio: '' },
      { tr: 'rüzgarlı',     de: 'windig',               extra: '',           audio: '' },
      { tr: 'hava',         de: 'Wetter / Luft',        extra: '',           audio: '' },
      { tr: 'derece',       de: 'Grad',                 extra: 'yirmi derece = 20°', audio: '' },
    ],
    erklaerung: '"Hava güneşli." = Es ist sonnig. "Hava çok sıcak." = Es ist sehr heiß. Temperatur: "Hava kaç derece?" (Wie viel Grad?) — "Yirmi beş derece." (25 Grad).',
    saatzbausteine: [
      'Hava nasıl? → Wie ist das Wetter?',
      'Hava [Wetter]. → Es ist [Wetter].',
      'Hava kaç derece? → Wie viel Grad?',
    ],
    beispiele: [
      { tr: 'Hava nasıl?',          de: 'Wie ist das Wetter?',         audio: '' },
      { tr: 'Hava güneşli ve sıcak.', de: 'Es ist sonnig und warm.',  audio: '' },
      { tr: 'Hava çok soğuk!',      de: 'Es ist sehr kalt!',          audio: '' },
      { tr: 'Bugün yağmur var.',    de: 'Heute regnet es.',           audio: '' },
    ],
    nachsprech: ['Hava nasıl?', 'güneşli', 'yağmurlu', 'bulutlu', 'sıcak', 'soğuk', 'karlı'],
    hoerUebung: 'Höre eine Wettervorhersage — was wird beschrieben?',
    miniDialog: [
      { sprecher: 'A', tr: 'Hava nasıl bugün?', de: 'Wie ist das Wetter heute?' },
      { sprecher: 'B', tr: 'Çok güneşli ve sıcak!', de: 'Sehr sonnig und heiß!' },
      { sprecher: 'A', tr: 'Kaç derece?', de: 'Wie viel Grad?' },
      { sprecher: 'B', tr: 'Otuz iki derece.', de: '32 Grad.' },
    ],
    anwendung: 'Beschreibe das Wetter gerade draußen auf Türkisch. Dann morgens und abends wiederholen.',
    zusammenfassung: 'Hava nasıl? + güneşli/yağmurlu/sıcak/soğuk = du kannst über Wetter reden. Super für Smalltalk!'
  },

  'Körper & Beschwerden': {
    lernziel: 'Du kannst Körperteile benennen und sagen wenn etwas wehtut.',
    woerter: [
      { tr: 'baş',      de: 'Kopf',      extra: 'başım ağrıyor = Kopfweh',   audio: '' },
      { tr: 'göz',      de: 'Auge',      extra: '',                          audio: '' },
      { tr: 'kulak',    de: 'Ohr',       extra: '',                          audio: '' },
      { tr: 'burun',    de: 'Nase',      extra: '',                          audio: '' },
      { tr: 'ağız',     de: 'Mund',      extra: '',                          audio: '' },
      { tr: 'diş',      de: 'Zahn',      extra: 'dişim ağrıyor = Zahnweh',  audio: '' },
      { tr: 'boyun',    de: 'Hals / Nacken', extra: '',                     audio: '' },
      { tr: 'el',       de: 'Hand',      extra: '',                          audio: '' },
      { tr: 'kol',      de: 'Arm',       extra: '',                          audio: '' },
      { tr: 'ayak',     de: 'Fuß',       extra: '',                          audio: '' },
      { tr: 'karın',    de: 'Bauch',     extra: 'karın ağrısı = Bauchschmerzen', audio: '' },
    ],
    erklaerung: '"Başım ağrıyor." = Mein Kopf tut weh. Formel: [Körperteil] + ım/im/um/üm + ağrıyor. "Hastayım." = Ich bin krank. "Doktora gitmem lazım." = Ich muss zum Arzt.',
    saatzbausteine: [
      '[Körperteil]ım ağrıyor. → Mein ... tut weh.',
      'Hastayım. → Ich bin krank.',
      'Doktora gitmem lazım. → Ich muss zum Arzt.',
    ],
    beispiele: [
      { tr: 'Başım ağrıyor.',         de: 'Mein Kopf tut weh.',           audio: '' },
      { tr: 'Dişim çok ağrıyor.',     de: 'Mein Zahn tut sehr weh.',      audio: '' },
      { tr: 'Hastayım.',              de: 'Ich bin krank.',               audio: '' },
      { tr: 'Ateşim var.',            de: 'Ich habe Fieber.',             audio: '' },
    ],
    nachsprech: ['baş', 'göz', 'kulak', 'diş', 'el', 'kol', 'ayak', 'Başım ağrıyor.', 'Hastayım.'],
    hoerUebung: 'Höre eine Beschwerde — welcher Körperteil tut weh?',
    miniDialog: [
      { sprecher: 'Arzt', tr: 'Neyiniz var?', de: 'Was fehlt Ihnen?' },
      { sprecher: 'Patient', tr: 'Başım çok ağrıyor.', de: 'Mein Kopf tut sehr weh.' },
      { sprecher: 'Arzt', tr: 'Ateşiniz var mı?', de: 'Haben Sie Fieber?' },
      { sprecher: 'Patient', tr: 'Evet, biraz.', de: 'Ja, ein bisschen.' },
    ],
    anwendung: 'Zeig auf deinen Körper und benenne jeden Teil auf Türkisch.',
    zusammenfassung: 'Baş göz kulak diş el kol ayak — 7 wichtige Körperteile. [Körperteil]ım ağrıyor = ... tut weh. Hastayım = ich bin krank!'
  },

  'Das Haus & Zimmer': {
    lernziel: 'Du kannst Zimmer und Möbel benennen und beschreiben wo etwas ist.',
    woerter: [
      { tr: 'ev',           de: 'Haus',              extra: '',  audio: '' },
      { tr: 'oda',          de: 'Zimmer',            extra: '',  audio: '' },
      { tr: 'mutfak',       de: 'Küche',             extra: '',  audio: '' },
      { tr: 'banyo',        de: 'Bad',               extra: '',  audio: '' },
      { tr: 'tuvalet',      de: 'Toilette',          extra: '',  audio: '' },
      { tr: 'salon',        de: 'Wohnzimmer',        extra: '',  audio: '' },
      { tr: 'yatak odası',  de: 'Schlafzimmer',      extra: '',  audio: '' },
      { tr: 'masa',         de: 'Tisch',             extra: '',  audio: '' },
      { tr: 'sandalye',     de: 'Stuhl',             extra: '',  audio: '' },
      { tr: 'yatak',        de: 'Bett',              extra: '',  audio: '' },
      { tr: 'kapı',         de: 'Tür',               extra: '',  audio: '' },
      { tr: 'pencere',      de: 'Fenster',           extra: '',  audio: '' },
    ],
    erklaerung: 'Lageangaben: "masanın üstünde" (auf dem Tisch), "kapının yanında" (neben der Tür). Einfacher: "orada" (dort), "burada" (hier), "içinde" (drinnen).',
    saatzbausteine: [
      'Bu [Zimmer]. → Das ist die/das ...',
      'Tuvalet nerede? → Wo ist die Toilette?',
      'Orada / Burada. → Dort / Hier.',
    ],
    beispiele: [
      { tr: 'Mutfak nerede?',       de: 'Wo ist die Küche?',       audio: '' },
      { tr: 'Tuvalet orada.',       de: 'Die Toilette ist dort.',  audio: '' },
      { tr: 'Evim küçük ama güzel.', de: 'Mein Haus ist klein aber schön.', audio: '' },
      { tr: 'Kaç odalı?',           de: 'Wie viele Zimmer?',      audio: '' },
    ],
    nachsprech: ['ev', 'mutfak', 'banyo', 'salon', 'yatak odası', 'masa', 'yatak', 'kapı'],
    hoerUebung: 'Höre eine Beschreibung — welches Zimmer wird beschrieben?',
    miniDialog: [
      { sprecher: 'Gast', tr: 'Tuvalet nerede?', de: 'Wo ist die Toilette?' },
      { sprecher: 'Gastgeber', tr: 'Orada, sağda.', de: 'Dort, rechts.' },
      { sprecher: 'Gast', tr: 'Eviniz çok güzel!', de: 'Ihr Haus ist sehr schön!' },
      { sprecher: 'Gastgeber', tr: 'Teşekkürler!', de: 'Danke!' },
    ],
    anwendung: 'Geh durch deine Wohnung und benenne jedes Zimmer und 3 Möbel pro Zimmer auf Türkisch.',
    zusammenfassung: 'Mutfak banyo salon yatak odası — die 4 Hauptzimmer. Tuvalet nerede? ist einer der nützlichsten Sätze überhaupt!'
  },

  'Verben im Präsens': {
    lernziel: 'Du kannst einfache Sätze mit den häufigsten Verben im Präsens bilden.',
    woerter: [
      { tr: 'gitmek',     de: 'gehen',     extra: 'gidiyorum = ich gehe',     audio: '' },
      { tr: 'gelmek',     de: 'kommen',    extra: 'geliyorum = ich komme',    audio: '' },
      { tr: 'yemek',      de: 'essen',     extra: 'yiyorum = ich esse',       audio: '' },
      { tr: 'içmek',      de: 'trinken',   extra: 'içiyorum = ich trinke',    audio: '' },
      { tr: 'yapmak',     de: 'machen',    extra: 'yapıyorum = ich mache',    audio: '' },
      { tr: 'konuşmak',   de: 'sprechen',  extra: 'konuşuyorum = ich spreche', audio: '' },
      { tr: 'anlamak',    de: 'verstehen', extra: 'anlıyorum = ich verstehe', audio: '' },
      { tr: 'sevmek',     de: 'lieben / mögen', extra: 'seviyorum = ich liebe', audio: '' },
      { tr: 'oturmak',    de: 'sitzen / wohnen', extra: 'oturuyorum',         audio: '' },
      { tr: 'çalışmak',   de: 'arbeiten / lernen', extra: 'çalışıyorum',     audio: '' },
    ],
    erklaerung: 'Präsens (şimdiki zaman) — was ich gerade tue: Verbstamm + ıyor/iyor/uyor/üyor + Personendung. Ben (ich): -um/im/um/üm. Sen (du): -sun/sin/sun/sün. Klingt kompliziert, lern erstmal die Ich-Form!',
    saatzbausteine: [
      'Ben [Verbstamm]ıyorum. → Ich [Verb].',
      'Ben çay içiyorum. → Ich trinke Tee.',
      'Ben Türkçe öğreniyorum. → Ich lerne Türkisch.',
    ],
    beispiele: [
      { tr: 'Ben çay içiyorum.',       de: 'Ich trinke Tee.',               audio: '' },
      { tr: 'Ben Türkçe öğreniyorum.', de: 'Ich lerne Türkisch.',           audio: '' },
      { tr: 'Nereye gidiyorsun?',      de: 'Wohin gehst du?',              audio: '' },
      { tr: 'Seni seviyorum.',         de: 'Ich liebe dich.',              audio: '' },
    ],
    nachsprech: ['gidiyorum', 'geliyorum', 'yiyorum', 'içiyorum', 'yapıyorum', 'seviyorum'],
    hoerUebung: 'Höre einen Satz — was macht die Person gerade?',
    miniDialog: [
      { sprecher: 'A', tr: 'Ne yapıyorsun?', de: 'Was machst du?' },
      { sprecher: 'B', tr: 'Türkçe öğreniyorum.', de: 'Ich lerne Türkisch.' },
      { sprecher: 'A', tr: 'Harika! Ben de öğreniyorum.', de: 'Super! Ich auch.' },
    ],
    anwendung: 'Sag 5 Sätze was du gerade tust — auf Türkisch. Ich esse, ich trinke, ich lerne ...',
    zusammenfassung: '[Verbstamm] + ıyor + um = ich tue gerade etwas. Ben çay içiyorum, ben Türkçe öğreniyorum — diese Formen reichen für den Alltag!'
  },

  'Verneinung & Fragen': {
    lernziel: 'Du kannst Sätze verneinen und einfache Fragen stellen.',
    woerter: [
      { tr: 'değil',      de: 'nicht / kein',     extra: 'nach Nomen/Adj',     audio: '' },
      { tr: 'yok',        de: 'es gibt nicht',    extra: 'Gegenpart zu "var"',  audio: '' },
      { tr: 'hayır',      de: 'nein',             extra: '',                    audio: '' },
      { tr: 'ne',         de: 'was',              extra: 'ne yapıyorsun?',      audio: '' },
      { tr: 'nerede',     de: 'wo',               extra: 'nerede?',            audio: '' },
      { tr: 'ne zaman',   de: 'wann',             extra: 'ne zaman geliyorsun?', audio: '' },
      { tr: 'neden',      de: 'warum',            extra: 'neden?',             audio: '' },
      { tr: 'nasıl',      de: 'wie',              extra: 'nasıl?',             audio: '' },
      { tr: 'kim',        de: 'wer',              extra: 'kim geldi?',         audio: '' },
      { tr: 'kaç',        de: 'wie viele / viel', extra: 'kaç tane?',          audio: '' },
    ],
    erklaerung: 'Verneinung Verb: -mıyor/-miyor/-muyor/-müyor (statt -ıyor). Ich gehe NICHT: "gitmiyorum". Verneinung Nomen: + "değil". "Öğrenci değilim." = Ich bin kein Schüler. Fragen: Fragewort an den Anfang, Verb ans Ende.',
    saatzbausteine: [
      '[Verb]miyorum. → Ich [Verb] nicht.',
      'Ben [Nomen] değilim. → Ich bin kein/e ...',
      'Nerede [Verb]iyor[sun]? → Wo [Verb]st du?',
    ],
    beispiele: [
      { tr: 'Anlamıyorum.',           de: 'Ich verstehe nicht.',          audio: '' },
      { tr: 'Türkçe bilmiyorum.',     de: 'Ich spreche kein Türkisch.',   audio: '' },
      { tr: 'O öğrenci değil.',       de: 'Er/Sie ist kein Schüler.',     audio: '' },
      { tr: 'Nerede oturuyorsun?',    de: 'Wo wohnst du?',               audio: '' },
    ],
    nachsprech: ['değil', 'yok', 'Anlamıyorum.', 'Bilmiyorum.', 'Nerede?', 'Ne zaman?'],
    hoerUebung: 'Höre einen Satz — positiv oder negativ?',
    miniDialog: [
      { sprecher: 'A', tr: 'Türkçe biliyor musun?', de: 'Sprichst du Türkisch?' },
      { sprecher: 'B', tr: 'Biraz. Çok iyi değil.', de: 'Ein bisschen. Nicht sehr gut.' },
      { sprecher: 'A', tr: 'Neden öğreniyorsun?', de: 'Warum lernst du es?' },
      { sprecher: 'B', tr: 'Çünkü Türkiye\'yi seviyorum!', de: 'Weil ich die Türkei liebe!' },
    ],
    anwendung: 'Bilde 5 negative Sätze über dich: Was bist du NICHT, was machst du NICHT.',
    zusammenfassung: '-mıyor = Verneinung Verb. değil = Verneinung Nomen/Adjektiv. Ne nerede kim ne zaman — 4 wichtigste Fragewörter!'
  },

  'Adjektive & Beschreibungen': {
    lernziel: 'Du kannst Dinge und Personen mit Adjektiven beschreiben.',
    woerter: [
      { tr: 'güzel',     de: 'schön',         extra: '',  audio: '' },
      { tr: 'çirkin',    de: 'hässlich',       extra: '',  audio: '' },
      { tr: 'büyük',     de: 'groß',           extra: '',  audio: '' },
      { tr: 'küçük',     de: 'klein',          extra: '',  audio: '' },
      { tr: 'uzun',      de: 'lang / groß',    extra: '',  audio: '' },
      { tr: 'kısa',      de: 'kurz / klein',   extra: '',  audio: '' },
      { tr: 'yeni',      de: 'neu',            extra: '',  audio: '' },
      { tr: 'eski',      de: 'alt (nicht jung)', extra: '', audio: '' },
      { tr: 'iyi',       de: 'gut',            extra: '',  audio: '' },
      { tr: 'kötü',      de: 'schlecht',       extra: '',  audio: '' },
      { tr: 'çok',       de: 'sehr / viel',    extra: '',  audio: '' },
      { tr: 'biraz',     de: 'ein bisschen',   extra: '',  audio: '' },
    ],
    erklaerung: 'Adjektive kommen im Türkischen VOR das Nomen und ändern sich NICHT: "güzel kız" (schönes Mädchen), "güzel ev" (schönes Haus). Mit "çok" (sehr): "çok güzel" = sehr schön.',
    saatzbausteine: [
      '[Adjektiv] + [Nomen] → büyük ev (großes Haus)',
      'Bu çok [Adjektiv]! → Das ist sehr ...!',
      'Çok güzel! → Sehr schön!',
    ],
    beispiele: [
      { tr: 'Bu çok güzel!',      de: 'Das ist sehr schön!',      audio: '' },
      { tr: 'Büyük bir ev.',      de: 'Ein großes Haus.',         audio: '' },
      { tr: 'Biraz kötü.',        de: 'Ein bisschen schlecht.',   audio: '' },
      { tr: 'Çok iyi, teşekkürler.', de: 'Sehr gut, danke.',    audio: '' },
    ],
    nachsprech: ['güzel', 'büyük', 'küçük', 'yeni', 'eski', 'iyi', 'kötü', 'çok güzel'],
    hoerUebung: 'Höre eine Beschreibung — welches Adjektiv wird benutzt?',
    miniDialog: [
      { sprecher: 'A', tr: 'Bu film nasıl?', de: 'Wie ist dieser Film?' },
      { sprecher: 'B', tr: 'Çok güzel! Biraz uzun ama.', de: 'Sehr schön! Aber ein bisschen lang.' },
      { sprecher: 'A', tr: 'Yeni mi?', de: 'Ist er neu?' },
      { sprecher: 'B', tr: 'Evet, bu hafta çıktı.', de: 'Ja, er kam diese Woche raus.' },
    ],
    anwendung: 'Beschreibe 5 Dinge in deiner Umgebung mit Adjektiven auf Türkisch.',
    zusammenfassung: 'Adjektiv steht vor dem Nomen, ändert sich nicht. Çok = sehr. Güzel büyük küçük yeni eski iyi kötü — 7 Adjektive für den Start!'
  },

  // ── Familie & Personen ─────────────────────────────────────────
  'Beziehungen & Freunde': {
    lernziel: 'Beziehungen und Freundschaften auf Türkisch beschreiben.',
    woerter: [
      { tr: 'arkadaş',       de: 'Freund / Freundin',         extra: 'arkadaşım = mein Freund' },
      { tr: 'en iyi arkadaş',de: 'bester Freund / beste Freundin' },
      { tr: 'komşu',         de: 'Nachbar / Nachbarin' },
      { tr: 'sevgili',       de: 'Liebling / Geliebte(r)',    extra: 'auch: Liebe(r)' },
      { tr: 'nişanlı',       de: 'Verlobte(r)' },
      { tr: 'evli',          de: 'verheiratet' },
      { tr: 'bekar',         de: 'ledig' },
      { tr: 'çift',          de: 'Paar / Ehepaar' },
      { tr: 'tanışmak',      de: 'kennenlernen' },
      { tr: 'tanıştırmak',   de: 'vorstellen (jmd. anderen)' },
      { tr: 'sevmek',        de: 'lieben / mögen' },
      { tr: 'özlemek',       de: 'vermissen' },
    ],
    erklaerung: 'Possessivsuffix -ım/-im/-um/-üm = mein: arkadaş-ım = mein Freund, komşu-m = mein Nachbar.',
    beispiele: [
      { tr: 'O benim en iyi arkadaşım.',         de: 'Er/Sie ist mein bester Freund / meine beste Freundin.' },
      { tr: 'Komşularımla iyi geçiniyorum.',      de: 'Ich komme gut mit meinen Nachbarn aus.' },
      { tr: 'Seni özledim.',                      de: 'Ich habe dich vermisst.' },
      { tr: 'Arkadaşımı sana tanıştırayım.',      de: 'Lass mich dir meinen Freund vorstellen.' },
    ],
    gespräche: [
      { sprecher: 'A', tr: 'Bu kim?', de: 'Wer ist das?' },
      { sprecher: 'B', tr: 'O benim arkadaşım Elif.', de: 'Das ist meine Freundin Elif.' },
      { sprecher: 'A', tr: 'Memnun oldum, Elif!', de: 'Freut mich, Elif!' },
      { sprecher: 'B', tr: 'Ben de! Nerelisin?', de: 'Mich auch! Woher kommst du?' },
    ],
    anwendung: 'Beschreibe auf Türkisch: Bist du ledig oder verheiratet? Wie heißt dein bester Freund?',
    zusammenfassung: 'arkadaş = Freund, evli = verheiratet, bekar = ledig, sevmek = lieben, özlemek = vermissen.'
  },

  'Eigenschaften & Charakter': {
    lernziel: 'Charaktereigenschaften auf Türkisch beschreiben.',
    woerter: [
      { tr: 'güzel',       de: 'schön / hübsch' },
      { tr: 'yakışıklı',   de: 'gut aussehend (Mann)' },
      { tr: 'zeki',        de: 'intelligent / klug' },
      { tr: 'komik',       de: 'lustig / komisch' },
      { tr: 'kibar',       de: 'höflich / nett' },
      { tr: 'nazik',       de: 'freundlich / sanft' },
      { tr: 'çalışkan',    de: 'fleißig' },
      { tr: 'tembel',      de: 'faul' },
      { tr: 'sabırlı',     de: 'geduldig' },
      { tr: 'sinirli',     de: 'genervt / reizbar' },
      { tr: 'cesur',       de: 'mutig' },
      { tr: 'utangaç',     de: 'schüchtern' },
      { tr: 'dürüst',      de: 'ehrlich' },
      { tr: 'güvenilir',   de: 'zuverlässig' },
    ],
    erklaerung: 'Eigenschaften stehen direkt vor dem Nomen (güzel kız = schönes Mädchen) oder nach dem Verb olmak: Çok sabırlı. Das Adjektiv verändert sich nicht.',
    beispiele: [
      { tr: 'Annem çok nazik.',                      de: 'Meine Mutter ist sehr freundlich.' },
      { tr: 'Kardeşim biraz tembel ama çok komik.',  de: 'Mein Geschwisterkind ist etwas faul, aber sehr lustig.' },
      { tr: 'O çok dürüst bir insan.',               de: 'Er/Sie ist ein sehr ehrlicher Mensch.' },
      { tr: 'Zeki ama utangaç.',                     de: 'Klug aber schüchtern.' },
    ],
    gespräche: [
      { sprecher: 'A', tr: 'Arkadaşın nasıl biri?', de: 'Was für ein Mensch ist dein Freund?' },
      { sprecher: 'B', tr: 'Çok komik ve zeki.', de: 'Sehr lustig und klug.' },
      { sprecher: 'A', tr: 'Kibar mı?', de: 'Ist er höflich?' },
      { sprecher: 'B', tr: 'Evet, çok kibar ve güvenilir.', de: 'Ja, sehr höflich und zuverlässig.' },
    ],
    anwendung: 'Beschreibe eine Person aus deiner Familie mit mindestens 3 Eigenschaften auf Türkisch.',
    zusammenfassung: 'zeki = klug, çalışkan = fleißig, tembel = faul, kibar = höflich, dürüst = ehrlich. Çok davor = sehr.'
  },

  // ── Zahlen & Mengen ────────────────────────────────────────────
  'Ordinalzahlen & Mengen': {
    lernziel: 'Ordinalzahlen (erster, zweiter…) und Mengenangaben auf Türkisch.',
    woerter: [
      { tr: 'birinci',     de: 'erste(r/s)',        extra: 'bir → birinci' },
      { tr: 'ikinci',      de: 'zweite(r/s)',        extra: 'iki → ikinci' },
      { tr: 'üçüncü',      de: 'dritte(r/s)',        extra: 'üç → üçüncü' },
      { tr: 'dördüncü',    de: 'vierte(r/s)' },
      { tr: 'beşinci',     de: 'fünfte(r/s)' },
      { tr: 'son',         de: 'letzte(r/s)' },
      { tr: 'tane',        de: 'Stück (Zählwort)',   extra: 'üç tane elma = drei Äpfel' },
      { tr: 'kilo',        de: 'Kilogramm' },
      { tr: 'gram',        de: 'Gramm' },
      { tr: 'litre',       de: 'Liter' },
      { tr: 'yarım',       de: 'ein halb',           extra: 'yarım kilo = ein halbes Kilo' },
      { tr: 'çeyrek',      de: 'ein Viertel' },
      { tr: 'birkaç',      de: 'ein paar / einige' },
      { tr: 'hiç',         de: 'gar nicht / kein',  extra: 'hiç para yok = kein Geld' },
    ],
    erklaerung: 'Ordinalzahl: Zahl + -(i)nci/-ıncı/-uncu/-üncü je nach Vokalharmonie. Mengenwörter (tane, kilo) stehen nach der Zahl: beş tane = fünf Stück.',
    beispiele: [
      { tr: 'Ben birinci sıraya oturuyorum.',  de: 'Ich sitze in der ersten Reihe.' },
      { tr: 'İki kilo domates lütfen.',        de: 'Zwei Kilo Tomaten bitte.' },
      { tr: 'Birkaç dakika bekleyin lütfen.',  de: 'Warten Sie bitte ein paar Minuten.' },
      { tr: 'Hiç problem yok.',               de: 'Kein Problem.' },
    ],
    anwendung: 'Übe: Nenne die ersten 5 Ordinalzahlen laut. Dann: Wie viel von was kaufst du gerade ein?',
    zusammenfassung: 'birinci/ikinci/üçüncü = erste/zweite/dritte. tane = Stück, yarım = halb, birkaç = einige, hiç = gar nicht.'
  },

  // ── Essen & Trinken ───────────────────────────────────────────
  'Türkische Gerichte': {
    lernziel: 'Typische türkische Gerichte kennen und benennen.',
    woerter: [
      { tr: 'döner',       de: 'Döner (Fleisch am Spieß)' },
      { tr: 'kebap',       de: 'Kebab / Grillfleisch' },
      { tr: 'köfte',       de: 'Hackfleischbällchen' },
      { tr: 'börek',       de: 'Blätterteiggebäck (herzhaft)' },
      { tr: 'pilav',       de: 'Pilaw / Reisgericht' },
      { tr: 'çorba',       de: 'Suppe' },
      { tr: 'mercimek çorbası', de: 'Linsensuppe' },
      { tr: 'baklava',     de: 'Baklava (süßes Gebäck)' },
      { tr: 'ayran',       de: 'Joghurtgetränk (gesalzen)' },
      { tr: 'çay',         de: 'Tee (Schwarztee)' },
      { tr: 'kahve',       de: 'Kaffee' },
      { tr: 'simit',       de: 'Sesamkringel / türkisches Bagel' },
      { tr: 'meze',        de: 'Vorspeisen / Beilagenauswahl' },
      { tr: 'lahmacun',    de: 'Türkische Dünnbrot-Pizza' },
    ],
    erklaerung: 'In der Türkei ist Essen Kultur. Gerichte werden oft geteilt (meze). Çay wird immer angeboten — ablehnen ist ungewöhnlich!',
    beispiele: [
      { tr: 'Bir mercimek çorbası alabilir miyim?', de: 'Kann ich eine Linsensuppe bekommen?' },
      { tr: 'Baklava çok tatlı!',                  de: 'Baklava ist sehr süß!' },
      { tr: 'Hangi yemekleri önerirsiniz?',         de: 'Welche Gerichte empfehlen Sie?' },
      { tr: 'Pilav ve köfte lütfen.',               de: 'Pilaw und Köfte bitte.' },
    ],
    gespräche: [
      { sprecher: 'A', tr: 'Açsın mısın?', de: 'Hast du Hunger?' },
      { sprecher: 'B', tr: 'Evet, çok açım! Ne yiyelim?', de: 'Ja, ich habe großen Hunger! Was sollen wir essen?' },
      { sprecher: 'A', tr: 'Döner mi, köfte mi?', de: 'Döner oder Köfte?' },
      { sprecher: 'B', tr: 'Köfte olsun. Ve bir ayran.', de: 'Köfte bitte. Und ein Ayran.' },
    ],
    anwendung: 'Welches türkische Gericht kennst du schon? Sag es auf Türkisch und erkläre es kurz auf Deutsch.',
    zusammenfassung: 'döner, kebap, köfte, börek, pilav, çorba, baklava, ayran, simit — typisch türkisch!'
  },

  // ── Mein Zuhause ──────────────────────────────────────────────
  'Möbel & Einrichtung': {
    lernziel: 'Möbel und Einrichtungsgegenstände auf Türkisch benennen.',
    woerter: [
      { tr: 'koltuk',      de: 'Sessel / Couch' },
      { tr: 'masa',        de: 'Tisch' },
      { tr: 'sandalye',    de: 'Stuhl' },
      { tr: 'yatak',       de: 'Bett' },
      { tr: 'dolap',       de: 'Schrank' },
      { tr: 'raf',         de: 'Regal' },
      { tr: 'halı',        de: 'Teppich' },
      { tr: 'pencere',     de: 'Fenster' },
      { tr: 'kapı',        de: 'Tür' },
      { tr: 'lamba',       de: 'Lampe' },
      { tr: 'ayna',        de: 'Spiegel' },
      { tr: 'televizyon',  de: 'Fernseher' },
      { tr: 'buzdolabı',   de: 'Kühlschrank' },
      { tr: 'çamaşır makinesi', de: 'Waschmaschine' },
    ],
    erklaerung: 'Türkisch beschreibt Möbel direkt: "Masanın üstünde" = auf dem Tisch (üst = Oberseite + -de = Lokalsuffix).',
    beispiele: [
      { tr: 'Koltuk çok rahat.',                   de: 'Der Sessel ist sehr bequem.' },
      { tr: 'Dolap oturma odasında.',              de: 'Der Schrank ist im Wohnzimmer.' },
      { tr: 'Masanın üstünde bir lamba var.',      de: 'Auf dem Tisch steht eine Lampe.' },
      { tr: 'Yatak odamda büyük bir ayna var.',    de: 'In meinem Schlafzimmer gibt es einen großen Spiegel.' },
    ],
    anwendung: 'Schau dich um und benenne 5 Möbelstücke in deiner Umgebung auf Türkisch.',
    zusammenfassung: 'koltuk=Sessel, masa=Tisch, sandalye=Stuhl, yatak=Bett, dolap=Schrank, pencere=Fenster, kapı=Tür.'
  },

  'In der Stadt & Verkehr': {
    lernziel: 'Orte in der Stadt und Transportmittel auf Türkisch benennen.',
    woerter: [
      { tr: 'market',      de: 'Supermarkt' },
      { tr: 'hastane',     de: 'Krankenhaus' },
      { tr: 'eczane',      de: 'Apotheke' },
      { tr: 'okul',        de: 'Schule' },
      { tr: 'banka',       de: 'Bank' },
      { tr: 'postane',     de: 'Post / Postamt' },
      { tr: 'park',        de: 'Park' },
      { tr: 'restoran',    de: 'Restaurant' },
      { tr: 'otobüs',      de: 'Bus' },
      { tr: 'metro',       de: 'U-Bahn' },
      { tr: 'taksi',       de: 'Taxi' },
      { tr: 'istasyon',    de: 'Bahnhof / Station' },
      { tr: 'sağa',        de: 'rechts (Richtung)',     extra: 'sağa dön = rechts abbiegen' },
      { tr: 'sola',        de: 'links (Richtung)',      extra: 'sola dön = links abbiegen' },
      { tr: 'düz git',     de: 'geradeaus gehen' },
    ],
    erklaerung: 'Richtungsangaben: sağa = nach rechts, sola = nach links, düz git = geradeaus. Nerede? = Wo? Nasıl gidebilirim? = Wie kann ich dort hingehen?',
    beispiele: [
      { tr: 'En yakın eczane nerede?',       de: 'Wo ist die nächste Apotheke?' },
      { tr: 'Otobüs durağı nerede?',         de: 'Wo ist die Bushaltestelle?' },
      { tr: 'Sağa dön, sonra düz git.',      de: 'Rechts abbiegen, dann geradeaus.' },
      { tr: 'Taksi ile gidebilirsiniz.',     de: 'Sie können mit dem Taxi fahren.' },
    ],
    gespräche: [
      { sprecher: 'A', tr: 'Affedersiniz, market nerede?', de: 'Entschuldigung, wo ist der Supermarkt?' },
      { sprecher: 'B', tr: 'Düz gidin, sonra sola dönün.', de: 'Gehen Sie geradeaus, dann links.' },
      { sprecher: 'A', tr: 'Yürüyerek kaç dakika?', de: 'Wie viele Minuten zu Fuß?' },
      { sprecher: 'B', tr: 'Yaklaşık on dakika.', de: 'Ungefähr zehn Minuten.' },
    ],
    anwendung: 'Erkläre auf Türkisch den Weg von deiner Wohnung zu einer Schule oder einem Supermarkt.',
    zusammenfassung: 'market, hastane, eczane, okul, otobüs, metro, taksi. sağa=rechts, sola=links, düz git=geradeaus.'
  },

  // ── Wetter ────────────────────────────────────────────────────
  'Jahreszeiten & Aktivitäten': {
    lernziel: 'Jahreszeiten und passende Aktivitäten auf Türkisch beschreiben.',
    woerter: [
      { tr: 'ilkbahar',    de: 'Frühling' },
      { tr: 'yaz',         de: 'Sommer' },
      { tr: 'sonbahar',    de: 'Herbst' },
      { tr: 'kış',         de: 'Winter' },
      { tr: 'yüzmek',      de: 'schwimmen' },
      { tr: 'kayak yapmak',de: 'Ski fahren' },
      { tr: 'piknik yapmak',de: 'picknicken' },
      { tr: 'yürüyüşe çıkmak', de: 'wandern gehen' },
      { tr: 'tatile gitmek',   de: 'in den Urlaub fahren' },
      { tr: 'sıcak',       de: 'heiß / warm' },
      { tr: 'soğuk',       de: 'kalt' },
      { tr: 'serin',       de: 'kühl' },
      { tr: 'ılık',        de: 'lauwarm / mild' },
    ],
    erklaerung: 'Jahreszeiten + -de/-da = im Sommer/Winter: yazın (im Sommer), kışın (im Winter). Diese Form ist unregelmäßig.',
    beispiele: [
      { tr: 'Yazın denize gidiyorum.',           de: 'Im Sommer fahre ich ans Meer.' },
      { tr: 'Kışın kayak yapmayı seviyorum.',    de: 'Im Winter liebe ich Skifahren.' },
      { tr: 'İlkbaharda hava çok güzel olur.',   de: 'Im Frühling ist das Wetter sehr schön.' },
      { tr: 'Sonbaharda yapraklar dökülür.',     de: 'Im Herbst fallen die Blätter.' },
    ],
    gespräche: [
      { sprecher: 'A', tr: 'En sevdiğin mevsim hangisi?', de: 'Welche Jahreszeit magst du am liebsten?' },
      { sprecher: 'B', tr: 'Yaz! Çünkü yüzmeyi seviyorum.', de: 'Sommer! Weil ich gerne schwimme.' },
      { sprecher: 'A', tr: 'Ben kışı seviyorum. Kayak çok güzel.', de: 'Ich mag den Winter. Skifahren ist toll.' },
    ],
    anwendung: 'Welche Jahreszeit magst du am liebsten und warum? Schreibe 2 Sätze auf Türkisch.',
    zusammenfassung: 'ilkbahar=Frühling, yaz=Sommer, sonbahar=Herbst, kış=Winter. yazın=im Sommer, kışın=im Winter.'
  },

  // ── Körper & Gesundheit ───────────────────────────────────────
  'Gefühle & Emotionen': {
    lernziel: 'Gefühle und emotionale Zustände auf Türkisch ausdrücken.',
    woerter: [
      { tr: 'mutlu',       de: 'glücklich / froh' },
      { tr: 'üzgün',       de: 'traurig' },
      { tr: 'kızgın',      de: 'wütend / ärgerlich' },
      { tr: 'korku',       de: 'Angst / Furcht' },
      { tr: 'korkmuş',     de: 'verängstigt / erschrocken' },
      { tr: 'şaşkın',      de: 'überrascht / verwirrt' },
      { tr: 'yorgun',      de: 'müde' },
      { tr: 'heyecanlı',   de: 'aufgeregt / begeistert' },
      { tr: 'stresli',     de: 'gestresst' },
      { tr: 'rahat',       de: 'entspannt / bequem' },
      { tr: 'özlemek',     de: 'vermissen' },
      { tr: 'sevmek',      de: 'lieben / mögen' },
      { tr: 'nefret etmek',de: 'hassen' },
    ],
    erklaerung: 'Gefühle werden als Adjektiv benutzt: Ben çok mutluyum = Ich bin sehr glücklich (-yum = ich bin). Nasılsın? = Wie geht es dir?',
    beispiele: [
      { tr: 'Bugün çok mutluyum!',              de: 'Heute bin ich sehr glücklich!' },
      { tr: 'Biraz üzgünüm, özür dilerim.',     de: 'Ich bin ein bisschen traurig, tut mir leid.' },
      { tr: 'Neden bu kadar streslisin?',       de: 'Warum bist du so gestresst?' },
      { tr: 'Seni görünce hep heyecanlanırım.', de: 'Wenn ich dich sehe, werde ich immer aufgeregt.' },
    ],
    gespräche: [
      { sprecher: 'A', tr: 'Nasılsın bugün?', de: 'Wie geht es dir heute?' },
      { sprecher: 'B', tr: 'Biraz yorgunum. Çok çalıştım.', de: 'Etwas müde. Ich habe viel gearbeitet.' },
      { sprecher: 'A', tr: 'Üzgün müsün?', de: 'Bist du traurig?' },
      { sprecher: 'B', tr: 'Hayır, sadece yorgunum. Sen nasılsın?', de: 'Nein, nur müde. Wie geht es dir?' },
    ],
    anwendung: 'Wie fühlst du dich gerade? Schreibe 3 Sätze über deine aktuellen Gefühle auf Türkisch.',
    zusammenfassung: 'mutlu=glücklich, üzgün=traurig, kızgın=wütend, yorgun=müde, heyecanlı=aufgeregt, stresli=gestresst.'
  },

  'Beim Arzt': {
    lernziel: 'Beim Arzt kommunizieren: Symptome beschreiben und verstehen.',
    woerter: [
      { tr: 'doktor',      de: 'Arzt / Ärztin' },
      { tr: 'hasta',       de: 'krank / Patient' },
      { tr: 'ağrı',        de: 'Schmerz' },
      { tr: 'baş ağrısı',  de: 'Kopfschmerzen',    extra: 'baş = Kopf' },
      { tr: 'karın ağrısı',de: 'Bauchschmerzen' },
      { tr: 'ateş',        de: 'Fieber' },
      { tr: 'öksürük',     de: 'Husten' },
      { tr: 'nezle',       de: 'Erkältung / Schnupfen' },
      { tr: 'grip',        de: 'Grippe' },
      { tr: 'ilaç',        de: 'Medikament' },
      { tr: 'reçete',      de: 'Rezept' },
      { tr: 'muayene',     de: 'Untersuchung / Arzttermin' },
      { tr: 'ambulans',    de: 'Krankenwagen' },
    ],
    erklaerung: 'Schmerz + Körperteil: baş ağrısı = Kopfschmerz, diş ağrısı = Zahnschmerz, bel ağrısı = Rückenschmerz. "Bende ağrı var" = Ich habe Schmerzen.',
    beispiele: [
      { tr: 'Çok hasta hissediyorum.',              de: 'Ich fühle mich sehr krank.' },
      { tr: 'Başım çok ağrıyor.',                   de: 'Mein Kopf schmerzt sehr.' },
      { tr: 'Ateşim var, öksürüyorum.',             de: 'Ich habe Fieber und Husten.' },
      { tr: 'Doktora gitmem lazım.',                de: 'Ich muss zum Arzt gehen.' },
    ],
    gespräche: [
      { sprecher: 'Doktor', tr: 'Nasılsınız, neyiniz var?', de: 'Wie geht es Ihnen, was haben Sie?' },
      { sprecher: 'Hasta',  tr: 'Üç gündür ateşim var ve çok öksürüyorum.', de: 'Ich habe seit drei Tagen Fieber und huste viel.' },
      { sprecher: 'Doktor', tr: 'Başka şikayetiniz var mı?', de: 'Haben Sie weitere Beschwerden?' },
      { sprecher: 'Hasta',  tr: 'Evet, boğazım da ağrıyor.', de: 'Ja, mein Hals tut auch weh.' },
    ],
    anwendung: 'Übe: Beschreibe auf Türkisch wie du dich fühlst, wenn du krank bist.',
    zusammenfassung: 'hasta=krank, ağrı=Schmerz, ateş=Fieber, öksürük=Husten, nezle=Erkältung, ilaç=Medikament, reçete=Rezept.'
  },

  // ── Grammatik A1 ──────────────────────────────────────────────
  'Possessivsuffixe': {
    lernziel: 'Possessivsuffixe benutzen: mein, dein, sein/ihr auf Türkisch.',
    woerter: [
      { tr: '-ım / -im / -um / -üm', de: 'mein (ich)',           extra: 'evim = mein Haus' },
      { tr: '-ın / -in / -un / -ün', de: 'dein (du)',            extra: 'evin = dein Haus' },
      { tr: '-ı / -i / -u / -ü',    de: 'sein / ihr (er/sie)',   extra: 'evi = sein/ihr Haus' },
      { tr: 'evim',        de: 'mein Haus' },
      { tr: 'evin',        de: 'dein Haus' },
      { tr: 'evi',         de: 'sein / ihr Haus' },
      { tr: 'arabam',      de: 'mein Auto' },
      { tr: 'araban',      de: 'dein Auto' },
      { tr: 'kitabım',     de: 'mein Buch' },
      { tr: 'adım',        de: 'mein Name' },
      { tr: 'ailem',       de: 'meine Familie' },
      { tr: 'arkadaşım',   de: 'mein Freund / meine Freundin' },
    ],
    erklaerung: 'Possessivsuffixe werden direkt ans Nomen gehängt. Vokalharmonie: nach a/ı → -ım, nach e/i → -im, nach o/u → -um, nach ö/ü → -üm. Wichtig: Konsonanten können sich verändern (kitap → kitabım).',
    beispiele: [
      { tr: 'Benim adım Berkay.',          de: 'Mein Name ist Berkay.' },
      { tr: 'Senin evin çok büyük.',       de: 'Dein Haus ist sehr groß.' },
      { tr: 'Onun arabası çok hızlı.',     de: 'Sein/Ihr Auto ist sehr schnell.' },
      { tr: 'Ailem İstanbul\'da yaşıyor.', de: 'Meine Familie lebt in Istanbul.' },
    ],
    anwendung: 'Übe: Schreibe "mein Name, dein Buch, sein Freund, meine Familie" auf Türkisch.',
    zusammenfassung: '-ım = mein, -ın = dein, -ı = sein/ihr. Vokalharmonie beachten! evim=mein Haus, araban=dein Auto.'
  },

  'Lokalkasus: -de/-da/-den/-dan': {
    lernziel: 'Den Ort ausdrücken: wo etwas ist (-de/-da) und woher (-den/-dan).',
    woerter: [
      { tr: '-de / -da',    de: 'in / an / auf (Ort)',     extra: 'evde = zu Hause; parkta = im Park' },
      { tr: '-den / -dan',  de: 'aus / von (Herkunft)',    extra: 'evden = von zu Hause; Almanya\'dan = aus Deutschland' },
      { tr: 'evde',         de: 'zu Hause / im Haus' },
      { tr: 'okulda',       de: 'in der Schule' },
      { tr: 'markette',     de: 'im Supermarkt' },
      { tr: 'Türkiye\'de',  de: 'in der Türkei' },
      { tr: 'Almanya\'da',  de: 'in Deutschland' },
      { tr: 'evden',        de: 'von zu Hause' },
      { tr: 'okuldan',      de: 'von der Schule' },
      { tr: 'Almanya\'dan', de: 'aus Deutschland' },
      { tr: 'nerede',       de: 'wo?' },
      { tr: 'nereden',      de: 'woher?' },
    ],
    erklaerung: 'Vokalharmonie: nach e/i/ö/ü → -de/-den, nach a/ı/o/u → -da/-dan. Nach stimmlosem Konsonant (ç,f,h,k,p,s,ş,t) → -te/-tan statt -de/-dan: markette (nicht markede).',
    beispiele: [
      { tr: 'Ben şimdi evdeyim.',           de: 'Ich bin jetzt zu Hause.' },
      { tr: 'O Almanya\'dan geldi.',        de: 'Er/Sie kam aus Deutschland.' },
      { tr: 'Nerede oturuyorsun?',          de: 'Wo wohnst du?' },
      { tr: 'Nereden geliyorsun?',          de: 'Woher kommst du?' },
    ],
    gespräche: [
      { sprecher: 'A', tr: 'Şu an neredesin?', de: 'Wo bist du gerade?' },
      { sprecher: 'B', tr: 'Kütüphanedeyim. Sen?', de: 'Ich bin in der Bibliothek. Du?' },
      { sprecher: 'A', tr: 'Ben evden çalışıyorum.', de: 'Ich arbeite von zu Hause.' },
    ],
    anwendung: 'Übe: Wo bist du gerade? Woher kommst du? Beantworte diese Fragen auf Türkisch mit -de und -den.',
    zusammenfassung: '-de/-da = in/an (Ort). -den/-dan = aus/von (Herkunft). nerede=wo?, nereden=woher? Vokalharmonie!'
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
