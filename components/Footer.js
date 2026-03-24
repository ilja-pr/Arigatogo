import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-bgLight dark:bg-bgDark text-textLight dark:text-textDark transition-colors ">
      
      {/* Wrapper mit gleicher Breite wie Navbar */}
      <div className="max-w-7xl mx-auto px-4 align-center">

        {/* Hauptbereich */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-center md:text-center">
          
          {/* Spalte 1 */}
          <div>
            <h3 className="text-base font-semibold mb-2">Über uns</h3>
            <p className="opacity-80 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
            </p>
          </div>

          {/* Spalte 2 */}
          <div>
            <h3 className="text-base font-semibold mb-2">Kontakt</h3>
            <p className="opacity-80">info@japan-modern-ui.com</p>
            <p className="opacity-80">+49 123 456789</p>
            <p className="opacity-80">Loremstraße 1, Tokio</p>
          </div>

          {/* Spalte 3 */}
          <div>
            <h3 className="text-base font-semibold mb-2">Links</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline opacity-80">Impressum</a></li>
              <li><a href="#" className="hover:underline opacity-80">Datenschutz</a></li>
              <li><a href="#" className="hover:underline opacity-80">AGB</a></li>
            </ul>
          </div>
        </div>

        {/* Untere Zeile */}
        <div className="border-t border-slate-200 dark:border-slate-700 py-4 text-center text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Japan Modern UI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
