'use client';

import { useState } from 'react';
import { Send, Compass, Heart, Lightbulb } from 'lucide-react';
import HeroDefault from '@/components/HeroDefault';

const inputClasses =
  'w-full rounded-xl border border-textLight/15 dark:border-textDark/15 px-4 py-3 text-[15px] ' +
  'bg-bgLight dark:bg-bgDark text-textLight dark:text-textDark placeholder:text-inkSoft/60 ' +
  'focus:border-accentLight dark:focus:border-accentDark focus:ring-2 focus:ring-accentLight/20 dark:focus:ring-accentDark/20 ' +
  'outline-none transition-colors';

const values = [
  {
    icon: Compass,
    title: 'Ehrliche Tipps',
    desc: 'Wir empfehlen, was wir selbst erlebt haben – keine austauschbaren Top-10-Listen.',
  },
  {
    icon: Heart,
    title: 'Respekt vor der Kultur',
    desc: 'Japan verdient Neugier und Rücksicht. Beides geben wir dir mit auf den Weg.',
  },
  {
    icon: Lightbulb,
    title: 'Einfach planen',
    desc: 'Von der Checkliste bis zum AI-Reiseplan: Wir machen Vorbereitung unkompliziert.',
  },
];

export default function AboutPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Kontaktformular abgeschickt:', form);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      <HeroDefault
        title="Über uns"
        eyebrow="私たち · Das Team"
        textLines={[
          'Ein kleines Team, eine große Mission:',
          'Dir die Schönheit, Kultur und Vielfalt Japans näherzubringen.',
        ]}
      />
      <div id="after-hero" />

      {/* Werte */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <p className="text-sm font-medium tracking-[0.3em] uppercase text-accentLight dark:text-accentDark mb-3">
          Was uns antreibt
        </p>
        <h2 className="heading-rule text-3xl sm:text-4xl">Dafür stehen wir</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl bg-paper dark:bg-paperDark ring-1 ring-black/5 dark:ring-white/10 p-7"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-accentLight/10 dark:bg-accentDark/15 text-accentLight dark:text-accentDark mb-4">
                <Icon size={22} />
              </span>
              <h3 className="text-lg font-bold mb-1.5">{title}</h3>
              <p className="text-inkSoft dark:text-textDark/65 leading-relaxed text-[15px]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Kontakt */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="rounded-3xl bg-paper dark:bg-paperDark ring-1 ring-black/5 dark:ring-white/10 p-8 sm:p-10 md:p-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-accentLight dark:text-accentDark mb-3">
                Kontakt · 連絡
              </p>
              <h2 className="heading-rule text-3xl sm:text-4xl">Schreib uns</h2>
              <p className="mt-5 text-lg leading-relaxed text-inkSoft dark:text-textDark/70">
                Fragen zur Reiseplanung, Feedback zur Seite oder ein Geheimtipp,
                der hier fehlt? Wir freuen uns über jede Nachricht.
              </p>
              <p className="mt-6 text-base italic text-inkSoft/80 dark:text-textDark/50">
                „Reisen verändert dich – Japan noch mehr."
              </p>
            </div>

            <div>
              {sent ? (
                <div
                  role="status"
                  className="rounded-2xl bg-bgLight dark:bg-bgDark ring-1 ring-black/5 dark:ring-white/10 p-8 text-center"
                >
                  <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-accentLight dark:bg-accentDark flex items-center justify-center text-white dark:text-bgDark">
                    <Send size={20} />
                  </div>
                  <h3 className="text-xl font-bold mb-1">Nachricht gesendet</h3>
                  <p className="text-inkSoft dark:text-textDark/60 text-sm">
                    Danke! Wir melden uns so schnell wie möglich.
                    (Demo – es wird noch nichts wirklich verschickt.)
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-1.5">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Dein Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-1.5">E-Mail</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="du@beispiel.de"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-1.5">Nachricht</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Worum geht's?"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-accentLight dark:bg-accentDark text-white dark:text-bgDark px-6 py-3.5 rounded-full font-semibold text-lg shadow-lg shadow-accentLight/25 dark:shadow-accentDark/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    <Send size={18} />
                    Nachricht senden
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
