// ================================================
// GOOGLE CLOUD TTS — Audio-Generator für Türkisch
// ================================================
// Voraussetzung: google-key.json im selben Ordner
// Ausführen mit: npm run generate
// ================================================

const textToSpeech = require('@google-cloud/text-to-speech');
const fs           = require('fs');
const path         = require('path');

process.env.GOOGLE_APPLICATION_CREDENTIALS = path.join(__dirname, 'google-key.json');

const client     = new textToSpeech.TextToSpeechClient();
const OUTPUT_DIR = path.join(__dirname, 'sprachen', 'audio');

// ─── VOICE CONFIG ────────────────────────────────────────────────────────────
// tr-TR-Wavenet-A = weiblich  |  tr-TR-Wavenet-B = männlich
// Standard-Varianten kosten ~10x weniger, aber schlechtere Qualität
// tr-TR-Chirp3-HD-Aoede = weiblich, modernste Google-Stimme (höchste Qualität)
// Alternativen: tr-TR-Wavenet-A (weiblich), tr-TR-Wavenet-B (männlich)
const VOICE = {
  languageCode: 'tr-TR',
  name:         'tr-TR-Chirp3-HD-Aoede',
};
const AUDIO_CONFIG = {
  audioEncoding: 'MP3',
  speakingRate:  0.85,
  volumeGainDb:  1.0,
};

// ─── WORTLISTE ───────────────────────────────────────────────────────────────
// Format: { text: 'türkischer Text', file: 'dateiname_ohne_mp3' }
// Neue Einträge einfach unten anhängen.
const WORDS = [

  // ── Sonderbuchstaben — Beispielwörter ────────────────────────────────────
  { text: 'çay',        file: 'cay' },       // ç = tsch
  { text: 'şeker',      file: 'seker' },     // ş = sch
  { text: 'dağ',        file: 'dag' },       // ğ = dehnt Vokal
  { text: 'üç',         file: 'uc' },        // ü = wie dt. ü
  { text: 'söyle',      file: 'soyle' },     // ö = wie dt. ö
  { text: 'ısı',        file: 'isi' },       // ı = dunkles i
  { text: 'güzel',      file: 'guzel' },
  { text: 'lütfen',     file: 'lutfen' },
  { text: 'değil',      file: 'degil' },
  { text: 'öğrenci',    file: 'ogrenci' },

  // ── Begrüßungen ───────────────────────────────────────────────────────────
  { text: 'Merhaba',        file: 'merhaba' },
  { text: 'Günaydın',       file: 'gunaydin' },
  { text: 'İyi günler',     file: 'iyi_gunler' },
  { text: 'İyi akşamlar',   file: 'iyi_aksamlar' },
  { text: 'Hoşça kal',      file: 'hosca_kal' },
  { text: 'Güle güle',      file: 'gule_gule' },
  { text: 'Nasılsın?',      file: 'nasilsin' },
  { text: 'İyiyim',         file: 'iyiyim' },

  // ── Höflichkeit ───────────────────────────────────────────────────────────
  { text: 'Teşekkür ederim', file: 'tesekkur_ederim' },
  { text: 'Sağ ol',          file: 'sag_ol' },
  { text: 'Rica ederim',     file: 'rica_ederim' },
  { text: 'Bir şey değil',   file: 'bir_sey_degil' },

  // ── Ja / Nein / Basics ───────────────────────────────────────────────────
  { text: 'Evet',                      file: 'evet' },
  { text: 'Hayır',                     file: 'hayir' },
  { text: 'Tamam',                     file: 'tamam' },
  { text: 'Anlamıyorum',               file: 'anlamiyorum' },
  { text: 'Tekrar eder misiniz?',      file: 'tekrar_eder_misiniz' },
  { text: 'Yavaş konuşur musunuz?',    file: 'yavas_konusur_musunuz' },
  { text: 'Türkçe bilmiyorum',         file: 'turkce_bilmiyorum' },

  // ── Vorstellen ────────────────────────────────────────────────────────────
  { text: 'Benim adım',       file: 'benim_adim' },
  { text: 'Adın ne?',         file: 'adin_ne' },
  { text: 'Adınız ne?',       file: 'adiniz_ne' },
  { text: 'Memnun oldum',     file: 'memnun_oldum' },
  { text: 'Ben de memnun oldum', file: 'ben_de_memnun_oldum' },
  { text: 'Nerelisin?',       file: 'nerelisin' },

  // ── Länder ────────────────────────────────────────────────────────────────
  { text: 'Almanya',             file: 'almanya' },
  { text: 'Ben Almanya\'danım', file: 'ben_almanyadan_im' },
  { text: 'Türkiye',             file: 'turkiye' },
  { text: 'Avusturya',           file: 'avusturya' },
  { text: 'İsviçre',             file: 'isviçre' },

  // ── Zahlen ────────────────────────────────────────────────────────────────
  { text: 'bir',   file: 'bir' },
  { text: 'iki',   file: 'iki' },
  { text: 'üç',    file: 'uc' },
  { text: 'dört',  file: 'dort' },
  { text: 'beş',   file: 'bes' },
  { text: 'altı',  file: 'alti' },
  { text: 'yedi',  file: 'yedi' },
  { text: 'sekiz', file: 'sekiz' },
  { text: 'dokuz', file: 'dokuz' },
  { text: 'on',    file: 'on' },
  { text: 'Kaç tane?', file: 'kac_tane' },

  // ── Café ──────────────────────────────────────────────────────────────────
  { text: 'çay',            file: 'cay' },
  { text: 'kahve',          file: 'kahve' },
  { text: 'su',             file: 'su' },
  { text: 'meyve suyu',     file: 'meyve_suyu' },
  { text: 'sütlü',          file: 'sutlu' },
  { text: 'şekerli',        file: 'sekerli' },
  { text: 'Bir çay lütfen.',     file: 'bir_cay_lutfen' },
  { text: 'İki kahve lütfen.',   file: 'iki_kahve_lutfen' },
  { text: 'Hesap lütfen.',       file: 'hesap_lutfen' },
  { text: 'Kaç para?',           file: 'kac_para' },
  { text: 'Ne alırsınız?',       file: 'ne_alirsiniz' },
  { text: 'Başka?',              file: 'baska' },

  // ── Alter ─────────────────────────────────────────────────────────────────
  { text: 'Kaç yaşındasın?',        file: 'kac_yasindasin' },
  { text: 'Ben yirmi beş yaşındayım.', file: 'ben_yirmi_bes_yasin' },
  { text: 'genç',                   file: 'genc' },
  { text: 'yaşlı',                  file: 'yasli' },

  // ── Beispiel-Sätze ───────────────────────────────────────────────────────
  { text: 'Bir çay lütfen.',       file: 'bir_cay_lutfen' },
  { text: 'Şeker var mı?',         file: 'seker_var_mi' },
  { text: 'Üç tane lütfen.',       file: 'uc_tane_lutfen' },
  { text: 'Güzel!',                file: 'guzel_sentence' },
  { text: 'Bir su lütfen.',        file: 'bir_su_lutfen' },
  { text: 'Evet, lütfen.',         file: 'evet_lutfen' },
  { text: 'Hayır, teşekkürler.',   file: 'hayir_tesekkurler' },
  { text: 'Anlamıyorum.',          file: 'anlamiyorum_sentence' },
  { text: 'Ben Almanya\'danım.',   file: 'ben_almanyadan_sentence' },
  { text: 'Ben Türkiye\'denim.',   file: 'ben_turkiyedenim' },
  { text: 'Benim adım Anna.',      file: 'benim_adim_anna' },
  { text: 'Memnun oldum!',         file: 'memnun_oldum_sentence' },
  { text: 'İki su lütfen.',        file: 'iki_su_lutfen' },
  { text: 'Beş lira.',             file: 'bes_lira' },
  { text: 'Sütlü kahve lütfen.',   file: 'sutlu_kahve_lutfen' },
  { text: 'Ben yirmi beş yaşındayım.', file: 'ben_yirmi_bes_complete' },

  // ── Mini-Dialog Sätze ────────────────────────────────────────────────────
  { text: 'Türkçe biliyor musunuz?',       file: 'turkce_biliyor_musunuz' },
  { text: 'Yavaş konuşayım.',              file: 'yavas_konusayim' },
  { text: 'Tabii!',                        file: 'tabii' },
  { text: 'Vay canına!',                   file: 'vay_canina' },
  { text: 'Şekerli mi?',                   file: 'sekerli_mi' },
  { text: 'Günaydın! Nasılsın?',           file: 'gunaydin_nasilsin' },
  { text: 'İyiyim, teşekkürler!',          file: 'iyiyim_tesekkurler' },
  { text: 'Hayır, biraz.',                 file: 'hayir_biraz' },
  { text: 'Merhaba! Benim adım Leyla.',    file: 'merhaba_benim_adim_leyla' },
  { text: 'Merhaba! Ben Tom. Memnun oldum.', file: 'merhaba_ben_tom' },
  { text: 'Ben Almanya\'danım. Sen?',      file: 'ben_almanyadan_sen' },
  { text: 'Ben İstanbul\'danım.',          file: 'ben_istanbuldan' },
  { text: 'Kaç çay istiyorsunuz?',         file: 'kac_cay_istiyorsunuz' },
  { text: 'İki çay lütfen.',               file: 'iki_cay_lutfen' },
  { text: 'Merhaba! Ne alırsınız?',        file: 'merhaba_ne_alirsiniz' },
  { text: 'Bir çay, bir kahve lütfen.',    file: 'bir_cay_bir_kahve' },
  { text: 'Tamam. Başka?',                 file: 'tamam_baska' },
  { text: 'On beş lira.',                  file: 'on_bes_lira' },
  { text: 'Ben yirmi sekiz yaşındayım. Sen?', file: 'ben_yirmi_sekiz_sen' },
  { text: 'Ben otuz iki yaşındayım.',         file: 'ben_otuz_iki' },
  // ── Fehlende Beispiel-Sätze ──────────────────────────────────────────────
  { text: 'Ben Mehmet.',              file: 'ben_mehmet' },
  { text: 'Sen nerelisin?',           file: 'sen_nerelisin' },
  { text: 'Üç kişi.',                 file: 'uc_kisi' },
  { text: 'Ben otuz yaşındayım.',     file: 'ben_otuz_yasinday' },
  { text: 'On altı yaşındayım.',      file: 'on_alti_yasinday' },
  // ── Fehlende Vokabeln ───────────────────────────────────────────────────
  { text: 'Kaç yaşındasınız?',        file: 'kac_yasindasiniz' },
  { text: 'yaş',                      file: 'yas' },
  { text: 'Sen?',                     file: 'sen_soru' },
  { text: 'Teşekkürler',              file: 'tesekkurler' },
  // ── Fehlende Zahlen für Nachsprechen ────────────────────────────────────
  { text: 'on bir',                   file: 'on_bir' },
  { text: 'yirmi',                    file: 'yirmi' },
  { text: 'otuz',                     file: 'otuz' },
  // ── Alles zusammen Dialog ───────────────────────────────────────────────
  { text: 'Günaydın! Benim adım Lisa. Sen?',  file: 'gunaydin_lisa_sen' },
  { text: 'Ben Ahmet. Memnun oldum! Nerelisin?', file: 'ben_ahmet_nerelisin' },
  { text: 'Ben Almanya\'danım. Kaç yaşındasın?', file: 'almanyadan_kac_yasin' },
  { text: 'Yirmi dört yaşındayım. Hoşça kal!',  file: 'yirmi_dort_hosca_kal' },

  // ── Vokale & Vokalharmonie ───────────────────────────────────────────────
  { text: 'ada',           file: 'ada' },
  { text: 'ev',            file: 'ev' },
  { text: 'ışık',          file: 'isik' },
  { text: 'ip',            file: 'ip' },
  { text: 'okul',          file: 'okul' },
  { text: 'uçak',          file: 'ucak' },
  { text: 'üzüm',          file: 'uzum' },
  { text: 'Bu bir ev.',    file: 'bu_bir_ev' },
  { text: 'Bu bir okul.',  file: 'bu_bir_okul' },
  { text: 'Üzüm var mı?',  file: 'uzum_var_mi' },
  { text: 'Uçak var.',     file: 'ucak_var' },
  { text: 'Bu ne?',        file: 'bu_ne' },
  { text: 'Büyük mü?',     file: 'buyuk_mu' },
  { text: 'Evet, çok büyük!', file: 'evet_cok_buyuk' },

  // ── Aussprache-Training ──────────────────────────────────────────────────
  { text: 'çikolata',              file: 'cikolata' },
  { text: 'şehir',                 file: 'sehir' },
  { text: 'öğretmen',              file: 'ogretmen' },
  { text: 'büyük',                 file: 'buyuk' },
  { text: 'küçük',                 file: 'kucuk' },
  { text: 'kız',                   file: 'kiz' },
  { text: 'Çikolata lütfen!',      file: 'cikolata_lutfen' },
  { text: 'Bu şehir büyük mü?',    file: 'bu_sehir_buyuk_mu' },
  { text: 'O bir öğretmen.',       file: 'o_bir_ogretmen' },
  { text: 'Küçük bir çay lütfen.', file: 'kucuk_bir_cay' },
  { text: 'Öğretmen Şule.',        file: 'ogretmen_sule' },
  { text: 'Büyük şehirden misiniz?', file: 'buyuk_sehirden_misiniz' },
  { text: 'Evet, İstanbul\'dan.',  file: 'evet_istanbuldan' },
];

// ─── GENERATOR ───────────────────────────────────────────────────────────────
async function generateOne(text, filename) {
  const outPath = path.join(OUTPUT_DIR, filename + '.mp3');

  // Bereits vorhanden? Überspringen.
  if (fs.existsSync(outPath)) {
    console.log(`⏭  ${filename}.mp3  (bereits vorhanden)`);
    return;
  }

  const [response] = await client.synthesizeSpeech({
    input:       { text },
    voice:       VOICE,
    audioConfig: AUDIO_CONFIG,
  });

  fs.writeFileSync(outPath, response.audioContent, 'binary');
  console.log(`✓  ${filename}.mp3`);
}

async function main() {
  // Key-Datei prüfen
  if (!fs.existsSync(path.join(__dirname, 'google-key.json'))) {
    console.error('✗  google-key.json nicht gefunden!');
    process.exit(1);
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Duplikate entfernen (selbe Datei, anderer Text → erste gewinnt)
  const seen = new Set();
  const unique = WORDS.filter(w => {
    if (seen.has(w.file)) return false;
    seen.add(w.file);
    return true;
  });

  console.log(`\n🎙  Generiere ${unique.length} Audio-Dateien nach sprachen/audio/\n`);

  let ok = 0, skip = 0, err = 0;

  for (const word of unique) {
    try {
      const existed = fs.existsSync(path.join(OUTPUT_DIR, word.file + '.mp3'));
      await generateOne(word.text, word.file);
      existed ? skip++ : ok++;
      // kurze Pause → Rate-Limit vermeiden
      await new Promise(r => setTimeout(r, 120));
    } catch (e) {
      console.error(`✗  ${word.file}: ${e.message}`);
      err++;
    }
  }

  console.log(`\n─────────────────────────────────────`);
  console.log(`✓  Neu:        ${ok}`);
  console.log(`⏭  Übersprungen: ${skip}`);
  console.log(`✗  Fehler:     ${err}`);
  console.log(`─────────────────────────────────────`);
  console.log(`\n✅ Fertig! Dateien liegen in: sprachen/audio/`);
}

main().catch(err => {
  console.error('\n✗  Fehler:', err.message);
  process.exit(1);
});
