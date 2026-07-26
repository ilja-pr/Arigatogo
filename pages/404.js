'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-24">
      {/* Hinomaru */}
      <div className="w-20 h-20 rounded-full bg-accentLight dark:bg-accentDark mb-8 shadow-[0_0_80px_-15px] shadow-accentLight/50 dark:shadow-accentDark/40" />
      <p className="text-sm font-medium tracking-[0.35em] uppercase text-inkSoft dark:text-textDark/50 mb-3">
        404 · 迷子
      </p>
      <h1 className="text-4xl sm:text-5xl mb-4">Seite nicht gefunden</h1>
      <p className="max-w-md text-lg text-inkSoft dark:text-textDark/70 mb-9">
        Diese Seite gibt es nicht (mehr) – so verlaufen wie in den Gassen von Shinjuku.
        Zurück zum bekannten Weg:
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="bg-accentLight dark:bg-accentDark text-white dark:text-bgDark px-7 py-3 rounded-full font-semibold shadow-lg shadow-accentLight/25 dark:shadow-accentDark/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
        >
          Zur Startseite
        </Link>
        <Link
          href="/plan-your-trip"
          className="px-7 py-3 rounded-full font-semibold border border-textLight/20 dark:border-textDark/20 hover:border-accentLight dark:hover:border-accentDark hover:text-accentLight dark:hover:text-accentDark transition-colors"
        >
          Reise planen
        </Link>
      </div>
    </section>
  );
}
