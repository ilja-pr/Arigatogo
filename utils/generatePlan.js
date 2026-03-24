'use client';

import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

export const generatePlan = async (formData) => {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const prompt = `
Du bist ein Reiseexperte für Japan. Bitte erstelle einen klar strukturierten Reiseplan basierend auf folgenden Angaben:

• Reisezeit: ${formData.startDate} bis ${formData.endDate}  
• Interessen: ${formData.interests}  
• Reisezieltyp: ${formData.destinationType}  
• Stil: ${formData.styles.join(', ')}  
• Budget: ${formData.budget} Euro

🔹 Struktur:
Gib jeden Reisetag als eigene Sektion mit einer Überschrift wie "Tag 1", "Tag 2", etc.  
Jeder Tag soll folgende Abschnitte enthalten:
- Ort:
- Aktivitäten:
- Tipps:

🔹 Anforderungen:
- Klare Absätze
- Keine Emojis, Sternchen (*) oder Markdown-Syntax
- Bulletpoints für die Struktur
- Überschriften sollen visuell gut erkennbar sein (z. B. "Tag 1 – Kyoto")

Antworte nur mit dem fertigen Reiseplan.
`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    return text.replace(/\*/g, '');
  } catch (error) {
    console.error('Fehler beim Generieren des Reiseplans:', error);
    return 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.';
  }
};
