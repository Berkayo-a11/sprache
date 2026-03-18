/**
 * Trägt alle generierten Audio-Pfade automatisch in app.js ein.
 *
 * AUSFÜHREN (nach generate.js):
 *   npm run update-app
 */

const fs   = require('fs');
const path = require('path');

const AUDIO_DIR = path.join(__dirname, '..', 'sprachen', 'audio');
const APP_JS    = path.join(__dirname, '..', 'sprachen', 'app.js');

// Mapping: türkischer Text → Dateipfad (relativ zur app.js)
// Wird aus den vorhandenen MP3-Dateien und der WORDS-Liste gebaut
const WORDS = require('./generate.js'); // Nein — wir lesen die Dateien direkt

function buildMapping() {
  if (!fs.existsSync(AUDIO_DIR)) {
    console.error('❌  Audio-Ordner nicht gefunden:', AUDIO_DIR);
    console.error('    Führe zuerst "npm run generate" aus.');
    process.exit(1);
  }

  // Alle MP3-Dateien einlesen
  const files = fs.readdirSync(AUDIO_DIR).filter(f => f.endsWith('.mp3'));
  console.log(`📂  ${files.length} MP3-Dateien gefunden in: ${AUDIO_DIR}`);
  return files;
}

// Die WORDS-Liste direkt hier (Kopie aus generate.js, um require-Probleme zu vermeiden)
const WORD_MAP = {
  'çay':                     'cay',
  'şeker':                   'seker',
  'güzel':                   'guzel',
  'lütfen':                  'lutfen',
  'değil':                   'degil',
  'Merhaba':                 'merhaba',
  'Günaydın':                'gunaydin',
  'İyi günler':              'iyi_gunler',
  'İyi akşamlar':            'iyi_aksamlar',
  'Hoşça kal':               'hosca_kal',
  'Güle güle':               'gule_gule',
  'Nasılsın?':               'nasilsin',
  'İyiyim':                  'iyiyim',
  'Teşekkür ederim':         'tesekkur_ederim',
  'Sağ ol':                  'sag_ol',
  'Rica ederim':             'rica_ederim',
  'Bir şey değil':           'bir_sey_degil',
  'Evet':                    'evet',
  'Hayır':                   'hayir',
  'Tamam':                   'tamam',
  'Anlamıyorum':             'anlamiyorum',
  'Tekrar eder misiniz?':    'tekrar_eder_misiniz',
  'Yavaş konuşur musunuz?':  'yavas_konusur_musunuz',
  'Türkçe bilmiyorum':       'turkce_bilmiyorum',
  'Benim adım':              'benim_adim',
  'Adın ne?':                'adin_ne',
  'Memnun oldum':            'memnun_oldum',
  'Ben de memnun oldum':     'ben_de_memnun_oldum',
  'Nerelisin?':              'nerelisin',
  'Almanya':                 'almanya',
  'Avusturya':               'avusturya',
  'Türkiye':                 'turkiye',
  'Vay canına!':             'vay_canina',
  'Kaç yaşındasın?':         'kac_yasindasin',
  'bir':                     'bir',
  'iki':                     'iki',
  'üç':                      'uc',
  'dört':                    'dort',
  'beş':                     'bes',
  'altı':                    'alti',
  'yedi':                    'yedi',
  'sekiz':                   'sekiz',
  'dokuz':                   'dokuz',
  'on':                      'on',
  'kahve':                   'kahve',
  'su':                      'su',
  'meyve suyu':              'meyve_suyu',
  'sütlü':                   'sutlu',
  'şekerli':                 'sekerli',
  'hesap lütfen':            'hesap_lutfen',
  'Kaç para?':               'kac_para',
  'Bir çay lütfen.':         'bir_cay_lutfen',
  'İki kahve lütfen.':       'iki_kahve_lutfen',
};

function main() {
  const availableFiles = new Set(buildMapping());
  let appJs = fs.readFileSync(APP_JS, 'utf8');
  let updated = 0;

  for (const [trText, fileBase] of Object.entries(WORD_MAP)) {
    const mp3File = fileBase + '.mp3';
    if (!availableFiles.has(mp3File)) continue; // Datei nicht generiert → überspringen

    const audioPath = `audio/${mp3File}`;

    // Ersetze audio: '' für dieses Wort (matcht tr: '...' ... audio: '')
    // Strategie: ersetze das nächste audio: '' nach dem türkischen Text
    const escapedText = trText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Pattern: irgendwo in der gleichen Zeile oder direkt danach, audio: ''
    const pattern = new RegExp(
      `((?:tr|text):\\s*'${escapedText}'[^}]*?audio:\\s*)'[^']*'`,
      'g'
    );

    const newJs = appJs.replace(pattern, `$1'${audioPath}'`);
    if (newJs !== appJs) {
      appJs = newJs;
      updated++;
      console.log(`✓  "${trText}" → ${audioPath}`);
    }
  }

  fs.writeFileSync(APP_JS, appJs, 'utf8');
  console.log(`\n✅  ${updated} Audio-Pfade in app.js eingetragen.`);

  if (updated === 0) {
    console.log('\n⚠️  Keine Änderungen. Mögliche Ursachen:');
    console.log('   - audio: "" Felder fehlen in LESSON_CONTENT');
    console.log('   - Texte stimmen nicht exakt überein');
    console.log('   Prüfe app.js manuell und trage audio-Pfade bei Bedarf von Hand ein.');
  }
}

main();
