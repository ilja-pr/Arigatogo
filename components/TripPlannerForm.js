'use client';

import { useState } from 'react';
import { generatePlan } from '@/utils/generatePlan';
import { exportPdf } from '@/utils/exportPdf';

export default function TripPlannerForm() {
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    interests: '',
    budget: '',
    destinationType: '',
    styles: [],
  });

  const [suggestion, setSuggestion] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        styles: checked
          ? [...prev.styles, value]
          : prev.styles.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    if (!formData.startDate || !formData.endDate || !formData.interests || !formData.budget || !formData.destinationType) {
      alert('Bitte fülle alle Felder aus.');
      return;
    }

    setLoading(true);
    const result = await generatePlan(formData);
    setSuggestion(result);
    setLoading(false);
  };

  return (
    <div className="bg-white dark:bg-bgDark border border-textLight dark:border-textDark shadow-2xl rounded-3xl p-8 sm:p-10 space-y-10 transition-all duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-base font-semibold mb-2">Reisebeginn</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full rounded-xl border border-textLight dark:border-textDark px-4 py-3 text-sm bg-white dark:bg-bgDark text-textLight dark:text-textDark"
          />
        </div>
        <div>
          <label className="block text-base font-semibold mb-2">Reiseende</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full rounded-xl border border-textLight dark:border-textDark px-4 py-3 text-sm bg-white dark:bg-bgDark text-textLight dark:text-textDark"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-base font-semibold mb-3">Interessen</label>
          <div className="flex flex-wrap gap-3">
            {['Tempel', 'Natur', 'Essen', 'Technologie', 'Kunst', 'Shopping', 'Historische Orte'].map((interest) => {
              const selected = formData.interests.includes(interest);
              return (
                <button
                  key={interest}
                  type="button"
                  onClick={() => {
                    setFormData((prev) => {
                      const interestsArray = prev.interests ? prev.interests.split(', ') : [];
                      const newArray = selected
                        ? interestsArray.filter((i) => i !== interest)
                        : [...interestsArray, interest];
                      return {
                        ...prev,
                        interests: newArray.join(', '),
                      };
                    });
                  }}
                  className={`px-4 py-2 text-sm rounded-full border transition-all ${
                    selected
                      ? 'bg-accentLight dark:bg-accentDark text-white dark:text-bgDark'
                      : 'border-textLight dark:border-textDark text-textLight dark:text-textDark'
                  }`}
                >
                  {interest}
                </button>
              );
            })}
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="block text-base font-semibold mb-2">Zieltyp</label>
          <select
            name="destinationType"
            value={formData.destinationType}
            onChange={handleChange}
            className="w-full rounded-xl border border-textLight dark:border-textDark px-4 py-3 text-sm bg-white dark:bg-bgDark text-textLight dark:text-textDark"
          >
            <option value="">Bitte wählen</option>
            <option value="Stadt">Stadt</option>
            <option value="Kultur & Geschichte">Kultur & Geschichte</option>
            <option value="Natur & Ruhe">Natur & Ruhe</option>
            <option value="Strand & Meer">Strand & Meer</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-base font-semibold mb-2">Budget (€)</label>
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="z. B. 1500"
            className="w-full rounded-xl border border-textLight dark:border-textDark px-4 py-3 text-sm bg-white dark:bg-bgDark text-textLight dark:text-textDark"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-base font-semibold mb-3">Reisestil (Mehrfachauswahl)</label>
          <div className="flex flex-wrap gap-4">
            {['Abenteuer', 'Entspannung', 'Kulinarik', 'Sightseeing'].map((style) => (
              <label key={style} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  name="styles"
                  value={style}
                  checked={formData.styles.includes(style)}
                  onChange={handleChange}
                  className="accent-accentLight dark:accent-accentDark"
                />
                {style}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Ladeanzeige */}
      {loading && (
        <p className="text-sm text-center text-textLight dark:text-textDark animate-pulse">
          🧠 KI denkt nach...
        </p>
      )}

      <div className="pt-4">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-accentLight dark:bg-accentDark text-white dark:text-bgDark px-6 py-3 text-lg rounded-full hover:opacity-90 transition-all"
        >
          {loading ? 'Lade Vorschlag...' : '🌏 Vorschlag anzeigen'}
        </button>
      </div>

      {suggestion && (
        <div className="pt-10 space-y-4">
          <div
            id="reiseplan"
            className="p-6 rounded-xl bg-white dark:bg-bgDark border border-textLight dark:border-textDark text-sm shadow-md"
          >
            <h3 className="text-lg font-semibold mb-3 text-accentLight dark:text-accentDark">
              🧭 Dein Reisevorschlag
            </h3>
            <p className="text-base leading-relaxed whitespace-pre-line text-textLight dark:text-slate-300">
              {suggestion}
            </p>
          </div>

          <button
            onClick={() => exportPdf('reiseplan')}
            className="bg-accentLight dark:bg-accentDark text-white dark:text-bgDark px-6 py-2 rounded-full hover:opacity-90 transition"
          >
            📄 Als PDF speichern
          </button>
        </div>
      )}
    </div>
  );
}
