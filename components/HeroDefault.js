'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const HeroDefault = ({
  title = 'Standard Titel',
  textLines = ['Standard Text'],
  eyebrow = '',            // optional: kleines Label über dem Titel, z. B. "都市 · Stadt"
  buttonText = '',
  buttonLink = '#',
  backgroundImage = null,
}) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const defaultImage = `${basePath}/assets/img/herodefault.webp`;
  const imageSrc = backgroundImage ?? defaultImage;

  const handleScroll = () => {
    const nextSection = document.getElementById('after-hero');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Volle Höhe, liegt hinter der transparenten Navbar – kein Überlappen mehr,
    // weil der Inhalt selbst pt-20 (Navbar-Höhe) bekommt.
    <section className="relative w-full min-h-[100svh] overflow-hidden flex items-center justify-center">

      {/* Hintergrundbild mit Ken-Burns-Bewegung */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          quality={90}
          priority
          className="object-cover object-right sm:object-center"
        />
        {/* Verlauf: oben etwas dunkler für Navbar-Lesbarkeit, unten für Übergang */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/55 via-black/35 to-black/60" />
      </motion.div>

      {/* Inhalt */}
      <motion.div
        className="relative z-20 text-center max-w-4xl px-6 sm:px-10 pt-20"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        {eyebrow && (
          <p className="text-sm sm:text-base font-medium tracking-[0.35em] uppercase text-white/80 mb-4">
            {eyebrow}
          </p>
        )}

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          {title}
        </h1>

        {/* Kurzer roter Akzentstrich unter dem Titel */}
        <div className="mx-auto mt-6 h-[3px] w-14 rounded-full bg-accentLight dark:bg-accentDark" />

        <div className="mt-6 space-y-2 text-base sm:text-xl text-white/85 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
          {textLines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        {buttonText && (
          <div className="mt-9">
            <Link href={buttonLink}>
              <span className="inline-block px-8 py-3.5 text-base font-semibold rounded-full bg-accentLight dark:bg-accentDark text-white dark:text-bgDark shadow-lg shadow-black/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ease-in-out">
                {buttonText}
              </span>
            </Link>
          </div>
        )}
      </motion.div>

      {/* Scroll-Hinweis */}
      {!buttonText && (
        <motion.button
          onClick={handleScroll}
          aria-label="Zum Inhalt scrollen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.2, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 text-white/80 hover:text-white transition-colors"
        >
          <ChevronDown size={30} className="drop-shadow-xl" />
        </motion.button>
      )}
    </section>
  );
};

export default HeroDefault;
