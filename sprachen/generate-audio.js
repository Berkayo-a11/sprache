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

// ─── AUTO-EXTRAKTION aus app.js ──────────────────────────────────────────────
// Liest alle { tr: '...', audio: 'audio/xxx.mp3' } Paare direkt aus app.js.
// Keine manuelle Pflege der WORDS-Liste nötig!
function extractWordsFromAppJs() {
  const appJsPath = path.join(__dirname, 'sprachen', 'app.js');
  const content   = fs.readFileSync(appJsPath, 'utf8');
  const lines     = content.split('\n');
  const pairs     = new Map(); // filename → text (Duplikate per Dateiname entfernen)

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Suche nach audio: 'audio/xxx.mp3'
    const audioMatch = line.match(/audio:\s*['"]audio\/([^'"]+?)['"]/);
    if (!audioMatch) continue;

    const filename = audioMatch[1].replace(/\.mp3$/, '');
    if (pairs.has(filename)) continue; // bereits gefunden

    // Hilfsfunktion: tr-Wert aus einer Zeile extrahieren
    function extractTr(l) {
      const m1 = l.match(/\btr:\s*'((?:[^'\\]|\\.)*)'/);
      if (m1) return m1[1].replace(/\\'/g, "'");
      const m2 = l.match(/\btr:\s*"((?:[^"\\]|\\.)*)"/);
      if (m2) return m2[1].replace(/\\"/g, '"');
      return null;
    }

    // 1. Gleiche Zeile priorisieren (tr und audio im selben Objekt auf einer Zeile)
    let trText = extractTr(line);

    // 2. Nur wenn nicht auf gleicher Zeile: umliegende Zeilen prüfen (bis ±3)
    if (!trText) {
      for (let delta = 1; delta <= 3 && !trText; delta++) {
        if (i - delta >= 0)              trText = extractTr(lines[i - delta]);
        if (!trText && i + delta < lines.length) trText = extractTr(lines[i + delta]);
      }
    }

    if (trText) pairs.set(filename, trText);
  }

  const result = [...pairs.entries()].map(([file, text]) => ({ text, file }));
  console.log(`📖 ${result.length} Audio-Einträge aus app.js extrahiert.`);
  return result;
}

// ─── GENERATOR ───────────────────────────────────────────────────────────────
async function generateOne(text, filename) {
  const outPath = path.join(OUTPUT_DIR, filename + '.mp3');

  if (fs.existsSync(outPath)) {
    console.log(`⏭  ${filename}.mp3  (bereits vorhanden)`);
    return 'skip';
  }

  const [response] = await client.synthesizeSpeech({
    input:       { text },
    voice:       VOICE,
    audioConfig: AUDIO_CONFIG,
  });

  fs.writeFileSync(outPath, response.audioContent, 'binary');
  console.log(`✓  ${filename}.mp3`);
  return 'ok';
}

async function main() {
  if (!fs.existsSync(path.join(__dirname, 'google-key.json'))) {
    console.error('✗  google-key.json nicht gefunden!');
    process.exit(1);
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const WORDS = extractWordsFromAppJs();

  if (WORDS.length === 0) {
    console.error('✗  Keine Einträge gefunden. Prüfe app.js.');
    process.exit(1);
  }

  console.log(`\n🎙  Generiere bis zu ${WORDS.length} Audio-Dateien nach sprachen/audio/\n`);

  let ok = 0, skip = 0, err = 0;

  for (const word of WORDS) {
    try {
      const result = await generateOne(word.text, word.file);
      result === 'skip' ? skip++ : ok++;
      // kurze Pause → Rate-Limit vermeiden
      if (result === 'ok') await new Promise(r => setTimeout(r, 120));
    } catch (e) {
      console.error(`✗  ${word.file}: ${e.message}`);
      err++;
    }
  }

  console.log(`\n─────────────────────────────────────`);
  console.log(`✓  Neu generiert: ${ok}`);
  console.log(`⏭  Übersprungen:  ${skip}`);
  console.log(`✗  Fehler:        ${err}`);
  console.log(`─────────────────────────────────────`);
  console.log(`\n✅ Fertig! Dateien liegen in: sprachen/audio/`);
}

main().catch(err => {
  console.error('\n✗  Fehler:', err.message);
  process.exit(1);
});
