'use client';

import { motion } from 'framer-motion';
import { ClipboardEdit, Sparkles, FileDown } from 'lucide-react';

const steps = [
  {
    title: 'Daten eingeben',
    description: 'Reisezeitraum, Interessen, Stil und Budget auswählen.',
    icon: ClipboardEdit,
  },
  {
    title: 'Vorschlag erhalten',
    description: 'Die AI stellt daraus deinen persönlichen Reiseplan zusammen.',
    icon: Sparkles,
  },
  {
    title: 'PDF speichern',
    description: 'Plan als sauber formatiertes PDF herunterladen und mitnehmen.',
    icon: FileDown,
  },
];

export default function StepGuide() {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <p className="text-sm font-medium tracking-[0.3em] uppercase text-accentLight dark:text-accentDark mb-3">
        Drei Schritte · 三段階
      </p>
      <h2 className="heading-rule text-3xl md:text-4xl">So funktioniert's</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.07, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1, margin: '0px 0px -40px 0px' }}
            className="relative rounded-2xl bg-paper dark:bg-paperDark ring-1 ring-black/5 dark:ring-white/10 p-7"
          >
            <span className="absolute top-5 right-6 text-4xl font-bold text-textLight/[0.07] dark:text-textDark/[0.07] select-none">
              {index + 1}
            </span>
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-accentLight/10 dark:bg-accentDark/15 text-accentLight dark:text-accentDark mb-4">
              <step.icon size={22} />
            </span>
            <h3 className="text-lg font-bold mb-1.5">{step.title}</h3>
            <p className="text-[15px] text-inkSoft dark:text-textDark/65 leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
