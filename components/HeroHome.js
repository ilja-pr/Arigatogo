'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const cities = [
  { city: 'Tokyo', top: '72%', left: '20%' },
  { city: 'Kyoto', top: '71%', left: '45%' },
  { city: 'Osaka', top: '65%', left: '60%' },
];

const HeroHome = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return (
    <section className="relative bg-bgLight dark:bg-bgDark text-textLight dark:text-textDark min-h-screen overflow-hidden transition-colors duration-300">
      <div className="relative max-w-7xl mx-auto flex flex-col justify-center items-center min-h-screen px-4 sm:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 lg:gap-16">

          {/* Textbereich */}
          <motion.div
            className="relative text-center lg:text-left max-w-xl flex-shrink-0"
            initial={{ x: -24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
          >
            {/* Tategaki-Label – vertikal wie auf einem Noren-Vorhang */}
            <span
              aria-hidden="true"
              className="tategaki hidden lg:block absolute -left-14 top-1 text-sm text-inkSoft dark:text-textDark/50 select-none"
            >
              ようこそ
            </span>

            <p className="text-sm sm:text-base font-medium tracking-[0.3em] uppercase text-accentLight dark:text-accentDark mb-4">
              Willkommen · いらっしゃいませ
            </p>

            <h1 className="text-5xl sm:text-7xl xl:text-8xl leading-[1.05] font-bold">
              Japan
              <br />
              <span className="text-accentLight dark:text-accentDark">entdecken</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-inkSoft dark:text-textDark/70">
              Von Tokyos Neonlicht bis zu Kyotos stillen Tempeln –
              erlebe ein Land, in dem Tradition und Zukunft nebeneinander wohnen.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/plan-your-trip"
                className="inline-flex items-center gap-2 bg-accentLight dark:bg-accentDark text-white dark:text-bgDark px-7 py-3 rounded-full font-semibold shadow-lg shadow-accentLight/25 dark:shadow-accentDark/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Reise planen
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/japan"
                className="inline-flex items-center px-7 py-3 rounded-full font-semibold border border-textLight/20 dark:border-textDark/20 hover:border-accentLight dark:hover:border-accentDark hover:text-accentLight dark:hover:text-accentDark transition-colors duration-300"
              >
                Mehr über Japan
              </Link>
            </div>
          </motion.div>

          {/* Karte mit Hinomaru-Sonne */}
          <motion.div
            className="relative flex justify-center items-center w-full max-w-[640px]"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Hinomaru – die rote Sonne */}
            <motion.div
              className="absolute inset-0 flex justify-center items-center pointer-events-none z-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
            >
              <div className="w-[min(85vw,440px)] aspect-square rounded-full bg-accentLight dark:bg-accentDark shadow-[0_0_120px_-20px] shadow-accentLight/50 dark:shadow-accentDark/40" />
            </motion.div>

            {/* Japan-Karte (Dark Mode) */}
            <div className="relative z-10 w-full h-auto hidden dark:block drop-shadow-2xl">
              <Image
                src={`${basePath}/assets/svg/japan_country_white.svg`}
                alt="Karte von Japan"
                width={700}
                height={700}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Japan-Karte (Light Mode) */}
            <div className="relative z-10 w-full h-auto dark:hidden drop-shadow-2xl">
              <Image
                src={`${basePath}/assets/svg/japan_country_black.svg`}
                alt="Karte von Japan"
                width={700}
                height={700}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Städtepunkte */}
            {cities.map(({ city, top, left }, index) => (
              <motion.div
                key={city}
                initial={{ y: -14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45 + index * 0.15, duration: 0.4, ease: 'easeOut' }}
                className="absolute z-20"
                style={{ top, left }}
              >
                <Link
                  href={`/citys/${city.toLowerCase()}`}
                  title={city}
                  className="group/city relative block"
                >
                  {/* Pulsierender Ring */}
                  <span className="absolute inset-0 rounded-full bg-white/60 animate-ping" />
                  {/* Punkt */}
                  <span className="relative block w-5 h-5 bg-white rounded-full border-[3px] border-textLight dark:border-bgDark transition-transform duration-200 group-hover/city:scale-125" />
                  {/* Tooltip */}
                  <span
                    className="absolute left-1/2 top-full mt-2 -translate-x-1/2 px-3 py-1 rounded-md whitespace-nowrap
                      text-sm font-medium bg-textLight text-bgLight dark:bg-textDark dark:text-bgDark
                      opacity-0 group-hover/city:opacity-100 group-hover/city:translate-y-1 transition-all duration-200 pointer-events-none"
                  >
                    {city}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll-Hinweis */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-inkSoft dark:text-textDark/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroHome;
