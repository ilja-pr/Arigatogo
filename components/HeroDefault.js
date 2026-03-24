'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const HeroDefault = ({
  title = 'Standard Titel',
  textLines = ['Standard Text'],
  buttonText = '',
  buttonLink = '#',
  backgroundImage = null,
}) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const defaultImage = `${basePath}/assets/img/herodefault.webp`;
  const imageSrc = backgroundImage ?? defaultImage;

  const [navHeight, setNavHeight] = useState(80); // Default-Höhe (Fallback)

  useEffect(() => {
    const updateHeight = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        setNavHeight(nav.offsetHeight);
      }
    };

    updateHeight(); // Initial berechnen
    window.addEventListener('resize', updateHeight); // On resize aktualisieren
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const handleScroll = () => {
    const nextSection = document.getElementById('after-hero');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative w-screen overflow-hidden flex items-center justify-center"
      style={{ minHeight: `calc(103vh - ${navHeight}px)` }}
    >
      {/* Hintergrundbild mit Bewegung */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        <Image
          src={imageSrc}
          alt="Hero Hintergrund"
          fill
          quality={100}
          priority
          className="object-cover object-right sm:object-center"
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-10" />
      </motion.div>

      {/* Text-Inhalt */}
      <motion.div
        className="relative z-20 text-center max-w-5xl px-4 sm:px-8 md:px-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]">
          {title}
        </h1>

        <div className="mt-4 space-y-3 text-base sm:text-lg text-white/90 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          {textLines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        {buttonText && (
          <div className="mt-8">
            <Link href={buttonLink}>
              <span className="inline-block px-6 py-3 text-base font-semibold rounded-full bg-accentLight dark:bg-accentDark text-white dark:text-bgDark shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
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
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 text-white"
        >
          <ChevronDown size={32} className="drop-shadow-xl" />
        </motion.button>
      )}
    </section>
  );
};

export default HeroDefault;
