/**
 * Google Cloud Text-to-Speech — Batch Audio Generator
 * für Türkisch-Lern-App
 *
 * VORAUSSETZUNGEN:
 *   1. Node.js installiert (nodejs.org)
 *   2. Google Cloud Key-JSON im Projektordner:
 *      c:\Users\berka\projects\helloworld\google-key.json
 *   3. Text-to-Speech API in Google Cloud Console aktiviert
 *
 * AUSFÜHREN:
 *   cd generate-audio
 *   npm install
 *   npm run generate
 */

const textToSpeech = require('@google-cloud/text-to-speech');
const fs   = require('fs');
const path = require('path');

// ─── KEY EINLESEN ────────────────────────────────────────────────────────────
// Lege deine google-key.json hier ab:
const KEY_PATH = path.join(__dirname, '..', 'google-key.json');

if (!fs.existsSync(KEY_PATH)) {
  console.error('\n❌  Fehler: google-key.json nicht gefunden!');
  console.error('    Erwartet unter:', KEY_PATH);
  console.error('    → Lade die JSON-Datei aus Google Cloud Console herunter');
  console.error('      und lege sie in: c:\\Users\\berka\\projects\\helloworld\\\n');
  process.exit(1);
}

process.env.GOOGLE_APPLICATION_CREDENTIALS = KEY_PATH;

// ─── KONFIGURATION ───────────────────────────────────────────────────────────
const OUTPUT_DIR = path.join(__dirname, '..', 'sprachen', 'audio');

const VOICE_CONFIG = {
  languageCode: 'tr-TR',
  name: 'tr-TR-Wavenet-B',  // Männliche WaveNet-Stimme (sehr natürlich)
  // Alternativen:
  // 'tr-TR-Wavenet-A'  → Weiblich, WaveNet (beste Qualität)
  // 'tr-TR-Wavenet-B'  → Männlich, WaveNet
  // 'tr-TR-Standard-A' → Weiblich, Standard (günstiger, weniger natürlich)
  // 'tr-TR-Standard-B' → Männlich, Standard
};

const AUDIO_CONFIG = {
  audioEncoding: 'MP3',
  speakingRate: 0.82,  // etwas langsamer → besser für Lernende
  pitch: 0.0,          // natürliche Tonhöhe
  volumeGainDb: 1.0,   // leicht erhöht
  // sampleRateHertz: 24000 // optional, Standard reicht
};

// ─── WORTLISTE ───────────────────────────────────────────────────────────────
// format: { text: 'Türkisch', file: 'dateiname_ohne_mp3' }
//
// Ergänze hier alle Wörter aus deiner App.
// Dateinamen: nur Kleinbuchstaben, keine Sonderzeichen, _ statt Leerzeichen

const WORDS = [

  // === AUSSPRACHE & ALPHABET ===
  { text: 'çay',      file: 'cay' },
  { text: 'şeker',    file: 'seker' },
  { text: 'güzel',    file: 'guzel' },
  { text: 'lütfen',   file: 'lutfen' },
  { text: 'değil',    file: 'degil' },

  // === BEGRÜSSUNGEN ===
  { text: 'Merhaba',       file: 'merhaba' },
  { text: 'Günaydın',      file: 'gunaydin' },
  { text: 'İyi günler',    file: 'iyi_gunler' },
  { text: 'İyi akşamlar',  file: 'iyi_aksamlar' },
  { text: 'Hoşça kal',     file: 'hosca_kal' },
  { text: 'Güle güle',     file: 'gule_gule' },
  { text: 'Nasılsın?',     file: 'nasilsin' },
  { text: 'İyiyim',        file: 'iyiyim' },

  // === HÖFLICHKEIT ===
  { text: 'Teşekkür ederim', file: 'tesekkur_ederim' },
  { text: 'Sağ ol',          file: 'sag_ol' },
  { text: 'Rica ederim',     file: 'rica_ederim' },
  { text: 'Bir şey değil',   file: 'bir_sey_degil' },

  // === JA / NEIN / VERSTEHEN ===
  { text: 'Evet',                      file: 'evet' },
  { text: 'Hayır',                     file: 'hayir' },
  { text: 'Tamam',                     file: 'tamam' },
  { text: 'Anlamıyorum',               file: 'anlamiyorum' },
  { text: 'Tekrar eder misiniz?',      file: 'tekrar_eder_misiniz' },
  { text: 'Yavaş konuşur musunuz?',    file: 'yavas_konusur_musunuz' },
  { text: 'Türkçe bilmiyorum',         file: 'turkce_bilmiyorum' },

  // === SICH VORSTELLEN ===
  { text: 'Benim adım',      file: 'benim_adim' },
  { text: 'Adın ne?',        file: 'adin_ne' },
  { text: 'Memnun oldum',    file: 'memnun_oldum' },
  { text: 'Ben de memnun oldum', file: 'ben_de_memnun_oldum' },
  { text: 'Nerelisin?',      file: 'nerelisin' },
  { text: 'Almanya',         file: 'almanya' },
  { text: 'Avusturya',       file: 'avusturya' },
  { text: 'Türkiye',         file: 'turkiye' },
  { text: 'Vay canına!',     file: 'vay_canina' },
  { text: 'Kaç yaşındasın?', file: 'kac_yasindasin' },

  // === ZAHLEN 1–10 ===
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

  // === IM CAFÉ ===
  { text: 'çay',                    file: 'cay' },        // bereits oben — wird übersprungen
  { text: 'kahve',                  file: 'kahve' },
  { text: 'su',                     file: 'su' },
  { text: 'meyve suyu',             file: 'meyve_suyu' },
  { text: 'sütlü',                  file: 'sutlu' },
  { text: 'şekerli',                file: 'sekerli' },
  { text: 'hesap lütfen',           file: 'hesap_lutfen' },
  { text: 'Kaç para?',              file: 'kac_para' },
  { text: 'Bir çay lütfen.',        file: 'bir_cay_lutfen' },
  { text: 'İki kahve lütfen.',      file: 'iki_kahve_lutfen' },

  // === MINI-DIALOGE (wichtigste Sätze) ===
  { text: 'Merhaba! Ne alırsınız?', file: 'dialog_ne_alirsiniz' },
  { text: 'Tamam. Başka?',          file: 'dialog_baska' },
  { text: 'On beş lira.',           file: 'on_bes_lira' },
  { text: 'Hayır, teşekkürler.',    file: 'hayir_tesekkurler' },

];

// ─── DUPLIKATE ENTFERNEN ─────────────────────────────────────────────────────
const seen = new Set();
const uniqueWords = WORDS.filter(w => {
  if (seen.has(w.file)) return false;
  seen.add(w.file);
  return true;
});

// ─── GENERATOR ───────────────────────────────────────────────────────────────
async function generateOne(client, text, filename) {
  const outPath = path.join(OUTPUT_DIR, filename + '.mp3');

  // Bereits vorhanden? Überspringen (spart API-Kosten)
  if (fs.existsSync(outPath)) {
    console.log(`⏭️  übersprungen (existiert): ${filename}.mp3`);
    return;
  }

  const [response] = await client.synthesizeSpeech({
    input: { text },
    voice: VOICE_CONFIG,
    audioConfig: AUDIO_CONFIG,
  });

  fs.writeFileSync(outPath, response.audioContent, 'binary');
  console.log(`✓  ${filename}.mp3  ("${text}")`);
}

async function main() {
  console.log('\n🔊  Google Cloud TTS — Audio Generator');
  console.log('─'.repeat(45));
  console.log(`Stimme:     ${VOICE_CONFIG.name}`);
  console.log(`Wörter:     ${uniqueWords.length}`);
  console.log(`Ausgabe:    ${OUTPUT_DIR}`);
  console.log('─'.repeat(45) + '\n');

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const client = new textToSpeech.TextToSpeechClient();
  let success = 0, skipped = 0, errors = 0;

  for (const word of uniqueWords) {
    try {
      const before = fs.existsSync(path.join(OUTPUT_DIR, word.file + '.mp3'));
      await generateOne(client, word.text, word.file);
      if (before) skipped++; else success++;
      // Rate-Limit: max ~300 Requests/Minute → 200ms Pause reicht
      await new Promise(r => setTimeout(r, 200));
    } catch (err) {
      console.error(`✗  ${word.file}: ${err.message}`);
      errors++;
    }
  }

  console.log('\n─'.repeat(45));
  console.log(`✅  Fertig! Neu: ${success} | Übersprungen: ${skipped} | Fehler: ${errors}`);
  console.log('\nNächster Schritt:');
  console.log('  cd generate-audio && npm run update-app');
  console.log('  → Trägt alle Audio-Pfade automatisch in app.js ein\n');
}

main().catch(err => {
  console.error('\n❌  Fehler:', err.message);
  if (err.message.includes('credentials')) {
    console.error('    → Prüfe ob google-key.json korrekt ist');
  }
  if (err.message.includes('API')) {
    console.error('    → Prüfe ob Text-to-Speech API in Google Cloud aktiviert ist');
  }
  process.exit(1);
});
