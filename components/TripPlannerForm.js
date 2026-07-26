'use client';

import { useState } from 'react';
import { Sparkles, FileDown, Loader2, MapPin } from 'lucide-react';
import { generatePlan } from '@/utils/generatePlan';
import { exportPlanPdf } from '@/utils/exportPdf';

const INTERESTS = ['Tempel', 'Natur', 'Essen', 'Technologie', 'Kunst', 'Shopping', 'Historische Orte'];
const STYLES = ['Abenteuer', 'Entspannung', 'Kulinarik', 'Sightseeing'];

const inputClasses =
  'w-full rounded-xl border border-textLight/15 dark:border-textDark/15 px-4 py-3 text-[15px] ' +
  'bg-bgLight dark:bg-bgDark text-textLight dark:text-textDark placeholder:text-inkSoft/60 ' +
  'focus:border-accentLight dark:focus:border-accentDark focus:ring-2 focus:ring-accentLight/20 dark:focus:ring-accentDark/20 ' +
  'outline-none transition-colors';

// Plan-Text in Tages-Abschnitte gliedern, damit er als Karten dargestellt werden kann
const splitIntoDays = (text) => {
  const lines = (text ?? '').replace(/\r/g, '').split('\n');
  const sections = [];
  let current = { heading: null, lines: [] };
  for (const line of lines) {
    if (/^tag\s*\d+/i.test(line.trim())) {
      if (current.heading || current.lines.length) sections.push(current);
      current = { heading: line.trim(), lines: [] };
    } else if (line.trim()) {
      current.lines.push(line.trim());
    }
  }
  if (current.heading || current.lines.length) sections.push(current);
  return sections;
};

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
  const [error, setError] = useState('');

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
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const toggleInterest = (interest) => {
    setFormData((prev) => {
      const arr = prev.interests ? prev.interests.split(', ') : [];
      const next = arr.includes(interest)
        ? arr.filter((i) => i !== interest)
        : [...arr, interest];
      return { ...prev, interests: next.join(', ') };
    });
  };

  const handleSubmit = async () => {
    const { startDate, endDate, interests, budget, destinationType } = formData;
    if (!startDate || !endDate || !interests || !budget || !destinationType) {
      setError('Bitte fülle alle Felder aus – dann kann der Plan losgehen.');
      return;
    }
    if (new Date(endDate) < new Date(startDate)) {
      setError('Das Reiseende liegt vor dem Reisebeginn – bitte Daten prüfen.');
      return;
    }
    setError('');
    setLoading(true);
    setSuggestion('');
    const result = await generatePlan(formData);
    setSuggestion(result);
    setLoading(false);
  };

  const handlePdf = () => {
    exportPlanPdf({
      planText: suggestion,
      meta: formData,
      filename: 'arigatogo-reiseplan.pdf',
    });
  };

  const daySections = suggestion ? splitIntoDays(suggestion) : [];

  return (
    <div className="bg-bgLight dark:bg-paperDark rounded-3xl p-8 sm:p-10 space-y-10 ring-1 ring-black/5 dark:ring-white/10 shadow-xl shadow-black/5 dark:shadow-black/30 transition-all duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div>
          <label htmlFor="startDate" className="block text-sm font-semibold mb-2">Reisebeginn</label>
          <input
            id="startDate"
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block text-sm font-semibold mb-2">Reiseende</label>
          <input
            id="endDate"
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-3">Interessen</label>
          <div className="flex flex-wrap gap-2.5">
            {INTERESTS.map((interest) => {
              const selected = formData.interests.split(', ').includes(interest);
              return (
                <button
                  key={interest}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => toggleInterest(interest)}
                  className={`px-4 py-2 text-sm rounded-full border transition-all duration-200 ${
                    selected
                      ? 'bg-accentLight dark:bg-accentDark border-transparent text-white dark:text-bgDark shadow-md shadow-accentLight/20 dark:shadow-accentDark/20'
                      : 'border-textLight/20 dark:border-textDark/20 text-textLight/80 dark:text-textDark/80 hover:border-accentLight dark:hover:border-accentDark hover:text-accentLight dark:hover:text-accentDark'
                  }`}
                >
                  {interest}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label htmlFor="destinationType" className="block text-sm font-semibold mb-2">Zieltyp</label>
          <select
            id="destinationType"
            name="destinationType"
            value={formData.destinationType}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Bitte wählen</option>
            <option value="Stadt">Stadt</option>
            <option value="Kultur & Geschichte">Kultur & Geschichte</option>
            <option value="Natur & Ruhe">Natur & Ruhe</option>
            <option value="Strand & Meer">Strand & Meer</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-semibold mb-2">Budget (€)</label>
          <input
            id="budget"
            type="number"
            min="0"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="z. B. 1500"
            className={inputClasses}
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-3">Reisestil (Mehrfachauswahl)</label>
          <div className="flex flex-wrap gap-5">
            {STYLES.map((style) => (
              <label key={style} className="flex items-center gap-2 text-sm cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="styles"
                  value={style}
                  checked={formData.styles.includes(style)}
                  onChange={handleChange}
                  className="w-4 h-4 accent-accentLight dark:accent-accentDark"
                />
                {style}
              </label>
            ))}
          </div>
        </div>
      </div>

      {error && (
        <p role="alert" className="text-sm text-accentLight dark:text-accentDark font-medium">
          {error}
        </p>
      )}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 bg-accentLight dark:bg-accentDark text-white dark:text-bgDark px-6 py-3.5 text-lg font-semibold rounded-full shadow-lg shadow-accentLight/25 dark:shadow-accentDark/20 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {loading ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Dein Plan entsteht …
          </>
        ) : (
          <>
            <Sparkles size={20} />
            Reiseplan erstellen
          </>
        )}
      </button>

      {suggestion && (
        <div className="pt-4 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h3 className="text-2xl font-bold">Dein Reisevorschlag</h3>
            <button
              onClick={handlePdf}
              className="inline-flex items-center gap-2 border border-accentLight dark:border-accentDark text-accentLight dark:text-accentDark px-5 py-2.5 rounded-full font-semibold hover:bg-accentLight hover:text-white dark:hover:bg-accentDark dark:hover:text-bgDark transition-colors"
            >
              <FileDown size={18} />
              Als PDF speichern
            </button>
          </div>

          <div className="space-y-5">
            {daySections.map((section, i) => (
              <div
                key={i}
                className="rounded-2xl bg-paper dark:bg-bgDark ring-1 ring-black/5 dark:ring-white/10 p-6 sm:p-7"
              >
                {section.heading && (
                  <h4 className="flex items-center gap-2.5 text-lg font-bold text-accentLight dark:text-accentDark mb-3">
                    <MapPin size={18} className="shrink-0" />
                    {section.heading}
                  </h4>
                )}
                <div className="space-y-1.5 text-[15px] leading-relaxed text-textLight/90 dark:text-textDark/85">
                  {section.lines.map((line, j) => {
                    const isLabel = /^(ort|aktivitäten|aktivitaeten|tipps|hinweise|übernachtung|uebernachtung|essen)\s*:/i.test(line);
                    const isBullet = /^[-•·▪]/.test(line);
                    if (isLabel) {
                      const idx = line.indexOf(':');
                      return (
                        <p key={j} className="pt-1.5">
                          <span className="font-semibold text-textLight dark:text-textDark">
                            {line.slice(0, idx + 1)}
                          </span>{' '}
                          {line.slice(idx + 1).trim()}
                        </p>
                      );
                    }
                    if (isBullet) {
                      return (
                        <p key={j} className="flex gap-2.5">
                          <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-accentLight dark:bg-accentDark shrink-0" />
                          <span>{line.replace(/^[-•·▪]\s*/, '')}</span>
                        </p>
                      );
                    }
                    return <p key={j}>{line}</p>;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
