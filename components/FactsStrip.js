'use client';

import { motion } from 'framer-motion';

/*
 * Kompakte Fakten-Leiste, z. B. für Städteseiten:
 * <FactsStrip facts={[{ label: 'Einwohner', value: '14 Mio.' }, ...]} />
 */
const FactsStrip = ({ facts = [] }) => {
  if (!facts.length) return null;

  return (
    <motion.section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -30px 0px' }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl bg-black/5 dark:bg-white/10 ring-1 ring-black/5 dark:ring-white/10">
        {facts.map(({ label, value }) => (
          <div
            key={label}
            className="bg-paper dark:bg-paperDark px-5 py-6 text-center"
          >
            <p
              className="text-xl sm:text-2xl font-bold text-accentLight dark:text-accentDark"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {value}
            </p>
            <p className="mt-1 text-xs sm:text-sm font-medium tracking-wide uppercase text-inkSoft dark:text-textDark/50">
              {label}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default FactsStrip;
