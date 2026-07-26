// Server-seitige API-Route: Der Gemini-Key bleibt auf dem Server
// und ist im Browser nicht mehr sichtbar.
import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Nur POST erlaubt.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'GEMINI_API_KEY ist nicht gesetzt. Bitte in Vercel unter Settings → Environment Variables eintragen.',
    });
  }

  const { startDate, endDate, interests, destinationType, styles, budget } = req.body ?? {};
  if (!startDate || !endDate || !interests || !destinationType || !budget) {
    return res.status(400).json({ error: 'Unvollständige Angaben.' });
  }

  const prompt = `
Du bist ein Reiseexperte für Japan. Bitte erstelle einen klar strukturierten Reiseplan basierend auf folgenden Angaben:

• Reisezeit: ${startDate} bis ${endDate}
• Interessen: ${interests}
• Reisezieltyp: ${destinationType}
• Stil: ${Array.isArray(styles) ? styles.join(', ') : styles}
• Budget: ${budget} Euro

Struktur:
Gib jeden Reisetag als eigene Sektion mit einer Überschrift wie "Tag 1 – Kyoto", "Tag 2 – ..." etc.
Jeder Tag soll folgende Abschnitte enthalten:
- Ort:
- Aktivitäten:
- Tipps:

Anforderungen:
- Klare Absätze
- Keine Emojis, Sternchen (*) oder Markdown-Syntax
- Bulletpoints mit "-" für die Struktur

Antworte nur mit dem fertigen Reiseplan.
`;

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const result = await model.generateContent(prompt);
    const text = (await result.response.text()).replace(/\*/g, '');
    return res.status(200).json({ plan: text });
  } catch (error) {
    console.error('Gemini-Fehler:', error);
    return res.status(502).json({ error: 'Der Reiseplan konnte gerade nicht erstellt werden. Bitte später erneut versuchen.' });
  }
}
