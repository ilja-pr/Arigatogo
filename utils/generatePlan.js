// Client ruft nur noch die eigene API-Route auf – kein API-Key im Browser.
export const generatePlan = async (formData) => {
  try {
    const res = await fetch('/api/generate-plan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (!res.ok) {
      return data.error ?? 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.';
    }
    return data.plan;
  } catch (error) {
    console.error('Fehler beim Generieren des Reiseplans:', error);
    return 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.';
  }
};
