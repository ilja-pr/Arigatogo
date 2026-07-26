import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return (
    <footer className="bg-paper dark:bg-paperDark text-textLight dark:text-textDark transition-colors border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

          {/* Marke */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="block dark:hidden w-7 h-7">
                <img src={`${basePath}/assets/svg/Arigatogo_Logo_black.svg`} alt="" className="w-full h-full object-contain" />
              </span>
              <span className="hidden dark:block w-7 h-7">
                <img src={`${basePath}/assets/svg/Arigatogo_Logo_white.svg`} alt="" className="w-full h-full object-contain" />
              </span>
              <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                Arigatogo
              </span>
            </div>
            <p className="text-inkSoft dark:text-textDark/60 leading-relaxed max-w-sm">
              Dein Wegweiser für Japan: Kultur, Natur, Städte und ein Reiseplaner,
              der aus ein paar Antworten eine ganze Route macht.
            </p>
          </div>

          {/* Entdecken */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-inkSoft dark:text-textDark/50 mb-4">
              Entdecken
            </h3>
            <ul className="space-y-2.5">
              <li><Link href="/japan" className="hover:text-accentLight dark:hover:text-accentDark transition-colors">Japan</Link></li>
              <li><Link href="/travel" className="hover:text-accentLight dark:hover:text-accentDark transition-colors">Reisetipps</Link></li>
              <li><Link href="/gallery" className="hover:text-accentLight dark:hover:text-accentDark transition-colors">Städte</Link></li>
              <li><Link href="/plan-your-trip" className="hover:text-accentLight dark:hover:text-accentDark transition-colors">Reise planen</Link></li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-inkSoft dark:text-textDark/50 mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-2.5">
              <li><Link href="/impressum" className="hover:text-accentLight dark:hover:text-accentDark transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-accentLight dark:hover:text-accentDark transition-colors">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/5 dark:border-white/5 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-inkSoft dark:text-textDark/50">
          <span>© {new Date().getFullYear()} Arigatogo. Alle Rechte vorbehalten.</span>
          <span aria-hidden="true">ありがとうございます</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
