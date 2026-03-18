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
  'Aussprache & Alphabet':          { icon: '🔤', color: '#4A90D9' },
  'Erste Schritte':                 { icon: '👋', color: '#2E8B57' },
  'Zahlen & Zeit':                  { icon: '🔢', color: '#E67E22' },
  'Farben & Formen':                { icon: '🎨', color: '#9B59B6' },
  'Familie & Menschen':             { icon: '👨‍👩‍👧', color: '#E91E63' },
  'Essen & Trinken':                { icon: '🍽️', color: '#FF5722' },
  'Einkaufen & Preise':             { icon: '🛍️', color: '#795548' },
  'Reisen & Verkehr':               { icon: '✈️', color: '#00BCD4' },
  'Stadt & Orientierung':           { icon: '🗺️', color: '#607D8B' },
  'Wetter & Jahreszeiten':          { icon: '🌤️', color: '#FFC107' },
  'Körper & Gesundheit':            { icon: '🏥', color: '#F44336' },
  'Berufe & Arbeit':                { icon: '💼', color: '#3F51B5' },
  'Hobbys & Freizeit':              { icon: '🎯', color: '#009688' },
  'Wohnen & Zuhause':               { icon: '🏠', color: '#8BC34A' },
  'Natur & Tiere':                  { icon: '🌿', color: '#4CAF50' },
  'Schule & Lernen':                { icon: '📚', color: '#673AB7' },
  'Kommunikation & Medien':         { icon: '📱', color: '#2196F3' },
  'Grammatik & Sätze':              { icon: '📝', color: '#FF9800' },
  'Kultur & Traditionen':           { icon: '🕌', color: '#C0392B' },
};

// =============================================
// CATEGORY DATA — optimierte Reihenfolge
// =============================================

const CATEGORY_DATA = [
  { title: 'Aussprache & Alphabet', lessons: [
    { title: 'Die türkischen Sonderbuchstaben', progress: 0 },
    { title: 'Vokale & Vokalharmonie', progress: 0 },
    { title: 'Aussprache-Training', progress: 0 }
  ]},
  { title: 'Erste Schritte', lessons: [
    { title: 'Hallo & Tschüss', progress: 0 },
    { title: 'Bitte & Danke', progress: 0 },
    { title: 'Ja, Nein, Ich verstehe nicht', progress: 0 },
    { title: 'Wiederholung & Mini-Test', progress: 0 }
  ]},
  { title: 'Sich vorstellen', lessons: [
    { title: 'Mein Name ist...', progress: 0 },
    { title: 'Woher kommst du?', progress: 0 },
    { title: 'Wie alt bist du?', progress: 0 },
    { title: 'Alles zusammen — erstes Gespräch', progress: 0 },
    { title: 'Mini-Test: Vorstellen', progress: 0 }
  ]},
  { title: 'Zahlen 1–10', lessons: [
    { title: 'Zahlen 1–10', progress: 0 },
    { title: 'Zahlen im Alltag', progress: 0 },
    { title: 'Zahlen-Test', progress: 0 }
  ]},
  { title: 'Im Café', lessons: [
    { title: 'Im Café — Bestellen', progress: 0 },
    { title: 'Nach dem Preis fragen', progress: 0 },
    { title: 'Bezahlen', progress: 0 }
  ]},
  { title: 'Im Restaurant', lessons: [
    { title: 'Tisch reservieren', progress: 0 },
    { title: 'Essen bestellen', progress: 0 },
    { title: 'Rechnung bitte', progress: 0 }
  ]},
  { title: 'Einkaufen & Markt', lessons: [
    { title: 'Im Supermarkt', progress: 0 },
    { title: 'Auf dem Markt', progress: 0 },
    { title: 'In der Bäckerei', progress: 0 },
    { title: 'Einkaufs-Test', progress: 0 }
  ]},
  { title: 'Farben & Kleidung', lessons: [
    { title: 'Farben lernen', progress: 0 },
    { title: 'Kleidung benennen', progress: 0 },
    { title: 'Einkaufen im Bekleidungsgeschäft', progress: 0 },
    { title: 'Farben- & Kleidungstest', progress: 0 }
  ]},
  { title: 'Zahlen 11–1000 & Preise', lessons: [
    { title: 'Zahlen 11–100', progress: 0 },
    { title: 'Zahlen 100–1000', progress: 0 },
    { title: 'Preise & Mengen', progress: 0 },
    { title: 'Zahlen-Preis-Test', progress: 0 }
  ]},
  { title: 'Uhrzeit & Datum', lessons: [
    { title: 'Die Uhrzeit', progress: 0 },
    { title: 'Datum & Wochentage', progress: 0 },
    { title: 'Monate & Jahreszeiten', progress: 0 },
    { title: 'Zeit-Test', progress: 0 }
  ]},
  { title: 'Unterwegs & Verkehr', lessons: [
    { title: 'Fragen nach dem Weg', progress: 0 },
    { title: 'Öffentliche Verkehrsmittel', progress: 0 },
    { title: 'Taxi nehmen & Fahrpläne', progress: 0 },
    { title: 'Verkehrs-Test', progress: 0 }
  ]},
  { title: 'Wetter & Jahreszeiten', lessons: [
    { title: 'Wetter beschreiben', progress: 0 },
    { title: 'Jahreszeiten & Kleidung', progress: 0 },
    { title: 'Smalltalk über das Wetter', progress: 0 },
    { title: 'Wetter-Test', progress: 0 }
  ]},
  { title: 'Bei der Familie', lessons: [
    { title: 'Familienmitglieder', progress: 0 },
    { title: 'Einfache Gespräche', progress: 0 }
  ]},
  { title: 'Essen zu Hause & Kochen', lessons: [
    { title: 'Lebensmittel & Zutaten', progress: 0 },
    { title: 'Kochen & Rezepte', progress: 0 },
    { title: 'Einladung zum Essen', progress: 0 },
    { title: 'Koch-Test', progress: 0 }
  ]},
  { title: 'Freizeit & Hobbys', lessons: [
    { title: 'Hobbys nennen', progress: 0 },
    { title: 'Treffen & Verabredungen', progress: 0 },
    { title: 'Urlaub & Reisen', progress: 0 },
    { title: 'Freizeit-Test', progress: 0 }
  ]},
  { title: 'Gesundheit & Arztbesuch', lessons: [
    { title: 'Körper & Beschwerden', progress: 0 },
    { title: 'Beim Arzt', progress: 0 },
    { title: 'Apotheke & Medikamente', progress: 0 },
    { title: 'Gesundheits-Test', progress: 0 }
  ]},
  { title: 'Arbeit & Beruf', lessons: [
    { title: 'Berufe & Arbeitsplätze', progress: 0 },
    { title: 'Im Büro', progress: 0 },
    { title: 'Vorstellungsgespräch', progress: 0 },
    { title: 'Berufs-Test', progress: 0 }
  ]},
  { title: 'Länder & Nationalitäten', lessons: [
    { title: 'Länder & Nationalitäten', progress: 0 },
    { title: 'Sprachen & Herkunft', progress: 0 },
    { title: 'Länder-Test', progress: 0 }
  ]},
  { title: 'Häufige Redewendungen', lessons: [
    { title: 'Häufige Phrasen', progress: 0 },
    { title: 'Sprichwörter & Redensarten', progress: 0 },
    { title: 'Rede-Test', progress: 0 }
  ]}
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
  document.getElementById('auth-title').classList.remove('hidden');
  document.getElementById('auth-title').innerText = 'Registrieren';
  document.getElementById('register-box').classList.remove('hidden');
  document.getElementById('login-box').classList.add('hidden');
  document.getElementById('dashboard-section').classList.add('hidden');
}

function showLogin() {
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

  document.getElementById('auth-title').classList.add('hidden');
  document.getElementById('register-box').classList.add('hidden');
  document.getElementById('login-box').classList.add('hidden');
  document.getElementById('dashboard-section').classList.remove('hidden');
  document.getElementById('greeting').innerText = 'Hoş geldin ' + name + '!';
  document.querySelector('.turkish-greeting').innerText = 'Bugün ne öğrenmek istiyorsun?';

  document.getElementById('category-list').classList.remove('hidden');
  document.getElementById('lesson-list').classList.add('hidden');
  document.getElementById('lesson-detail').classList.add('hidden');
  document.getElementById('review-view').classList.add('hidden');
  document.getElementById('overall-progress').classList.remove('hidden');

  const allLessons = CATEGORY_DATA.flatMap(c => c.lessons);
  const totalSum = allLessons.reduce((acc, l) => acc + l.progress, 0);
  const overall = allLessons.length > 0 ? Math.round(totalSum / allLessons.length) : 0;
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
// RENDER CATEGORIES
// =============================================

function renderCategories() {
  const categoryList = document.getElementById('category-list');
  categoryList.innerHTML = '';

  CATEGORY_DATA.forEach((category, index) => {
    const unlocked = isContainerUnlocked(index);
    const completed = category.lessons.filter(l => l.progress === 100).length;
    const overall = Math.round(category.lessons.reduce((s, l) => s + l.progress, 0) / category.lessons.length);

    const card = document.createElement('div');
    card.className = 'category-card' + (unlocked ? '' : ' category-locked');
    card.onclick = () => showCategory(category.title, index);

    const gateCat = index >= 3 ? CATEGORY_DATA[index - 3] : null;
    const threshold = gateCat ? Math.min(UNLOCK_THRESHOLD, gateCat.lessons.length) : 0;
    const gateDone = gateCat ? getCompletedCount(gateCat.title) : 0;

    const visual = CATEGORY_VISUAL[category.title] || { icon: '📖', color: '#2e8b57' };
    card.style.setProperty('--cat-color', visual.color);

    card.innerHTML = `
      <div class="category-card-top">
        <div class="category-icon-badge" style="background:${visual.color}22">${unlocked ? visual.icon : '🔒'}</div>
        <div style="flex:1;min-width:0">
          <h2 class="category-title">${category.title}</h2>
          ${unlocked ? '' : `<span class="lock-hint">${gateDone}/${threshold} in "${gateCat.title}"</span>`}
        </div>
      </div>
      <div class="lesson-count-row">${completed}/${category.lessons.length} Lektionen abgeschlossen</div>
      <div class="progress-bar-bg">
        <div class="progress-bar-fill" style="width:${overall}%"></div>
      </div>
      <div class="lesson-header" style="margin-top:8px">
        <div>Fortschritt</div><div>${overall}%</div>
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
