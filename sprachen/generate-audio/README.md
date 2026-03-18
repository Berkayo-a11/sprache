# Audio Generator — Schritt-für-Schritt

## Einmalige Vorbereitung (du machst das)

### 1. Node.js installieren
- https://nodejs.org → LTS-Version herunterladen und installieren
- Danach prüfen: `node --version` im Terminal

### 2. Google Cloud einrichten
1. https://console.cloud.google.com → mit Google-Konto einloggen
2. Oben: **"Neues Projekt"** → Name: `sprachen-app` → Erstellen
3. Suchleiste oben: `Cloud Text-to-Speech API` → **Aktivieren**
4. Linkes Menü → **APIs & Dienste → Anmeldedaten**
5. **"+ Anmeldedaten erstellen"** → **"Dienstkonto"**
6. Name eingeben (z.B. `tts-service`) → **Erstellen und fortfahren** → **Fertig**
7. Auf das erstellte Dienstkonto klicken → Tab **"Schlüssel"**
8. **"Schlüssel hinzufügen"** → **"Neuen Schlüssel erstellen"** → **JSON**
9. Datei wird heruntergeladen → umbenennen in `google-key.json`
10. Datei hierhin legen: `c:\Users\berka\projects\helloworld\google-key.json`

---

## Audio generieren (ab hier macht Claude alles)

```bash
# Terminal öffnen in: c:\Users\berka\projects\helloworld\generate-audio\

# 1. Abhängigkeiten installieren (nur einmal nötig)
npm install

# 2. Audio-Dateien generieren
npm run generate

# 3. Pfade automatisch in app.js eintragen
npm run update-app
```

Das war's. Die MP3-Dateien landen in:
`c:\Users\berka\projects\helloworld\sprachen\audio\`

---

## Stimme wechseln (optional)

In `generate.js`, Zeile ~30:
```js
name: 'tr-TR-Wavenet-B',   // Männlich
// name: 'tr-TR-Wavenet-A', // Weiblich
```

## Neue Wörter hinzufügen

In `generate.js` unter `const WORDS = [...]` eintragen:
```js
{ text: 'yeni kelime', file: 'yeni_kelime' },
```
Dann: `npm run generate && npm run update-app`

---

## Kosten

WaveNet: $16 / 1 Million Zeichen
Deine ~50 Wörter ≈ ~500 Zeichen → **$0.008** (weniger als 1 Cent)
