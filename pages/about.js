'use client';

import { useState } from 'react';
import LayoutWrapper from '@/components/LayoutWrapper';
import HeroDefault from '@/components/HeroDefault';

export default function AboutPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Kontaktformular abgeschickt:', form);
    alert('Nachricht gesendet! (Dies ist nur ein Beispiel)');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <LayoutWrapper>
      <HeroDefault
        title="Über Uns & Kontakt"
        textLines={[
          'Lerne das Team hinter deiner nächsten Japanreise kennen und wie du uns erreichst.',
          'Wir sind hier, um deine Fragen zu beantworten und deine Reiseplanung zu unterstützen.',
        ]}
      />
      <div id="after-hero" />

      <section className="max-w-7xl mx-auto px-4 sm:px-10 py-24">
        <div className="bg-white/90 dark:bg-bgDark border-2 border-accentLight dark:border-accentDark rounded-3xl p-6 sm:p-8 md:p-12 transition-all">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            
            {/* Textblock */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-accentLight dark:text-accentDark mb-6">
                Über uns
              </h1>
              <p className="text-lg leading-relaxed mb-4 text-textLight dark:text-textDark">
                Wir sind ein kleines Team mit einer großen Mission: 
                Dir die Schönheit, Kultur und Vielfalt Japans näherzubringen.
              </p>
              <p className="text-base italic opacity-70 text-textLight dark:text-textDark">
                „Reisen verändert dich – Japan noch mehr.“
              </p>
            </div>

            {/* Kontaktformular */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-6 text-accentLight dark:text-accentDark">
                Kontaktiere uns
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Dein Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-textLight/30 dark:border-textDark/40 bg-white dark:bg-bgDark text-sm text-textLight dark:text-textDark focus:outline-none focus:ring-2 focus:ring-accentLight focus:border-transparent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Deine E-Mail"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-textLight/30 dark:border-textDark/40 bg-white dark:bg-bgDark text-sm text-textLight dark:text-textDark focus:outline-none focus:ring-2 focus:ring-accentLight focus:border-transparent"
                />
                <textarea
                  name="message"
                  placeholder="Deine Nachricht"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-textLight/30 dark:border-textDark/40 bg-white dark:bg-bgDark text-sm text-textLight dark:text-textDark focus:outline-none focus:ring-2 focus:ring-accentLight focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-accentLight dark:bg-accentDark text-white dark:text-bgDark px-6 py-3 rounded-full hover:opacity-90 transition w-full font-semibold text-lg shadow-md"
                >
                  Nachricht senden
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
