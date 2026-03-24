'use client';

import { motion } from 'framer-motion';
import { ClipboardEdit, Brain, Download } from 'lucide-react';

const steps = [
  {
    title: 'Daten eingeben',
    description: 'Reisedaten, Städte und Interessen auswählen.',
    icon: ClipboardEdit,
    color: 'text-blue-600',
  },
  {
    title: 'Vorschlag erhalten',
    description: 'Unsere AI erstellt deinen Reiseplan.',
    icon: Brain,
    color: 'text-green-600',
  },
  {
    title: 'PDF speichern',
    description: 'Plan herunterladen und mitnehmen.',
    icon: Download,
    color: 'text-purple-600',
  },
];

export default function StepGuide() {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-16 mb-12">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-accentLight dark:text-accentDark">
          So funktioniert’s
        </h2>
        <p className="mt-2 text-lg text-textLight dark:text-textDark opacity-80">
          In drei einfachen Schritten zu deinem Reiseplan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-bgDark rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-md"
          >
            <step.icon className={`w-10 h-10 mb-4 ${step.color}`} />
            <h3 className="text-xl font-semibold text-textLight dark:text-textDark mb-2">
              {step.title}
            </h3>
            <p className="text-base text-textLight dark:text-textDark opacity-80 leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
