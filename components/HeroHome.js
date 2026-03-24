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
    <section className="relative bg-bgLight dark:bg-bgDark text-textLight dark:text-textDark h-screen overflow-hidden transition-colors duration-300">
      {/* Optionaler Hintergrund */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}
      />

      <div className="relative max-w-7xl mx-auto flex flex-col justify-center items-center h-full px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-16">

          {/* Textbereich */}
          <motion.div
            className="text-center lg:text-left max-w-xl flex-shrink-0"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl sm:text-8xl font-extrabold text-accentLight dark:text-accentDark leading-tight">
              Japan entdecken
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-textLight dark:text-textDark">
              Von Tokyo bis Okinawa – erlebe Kultur, Natur & Moderne.
            </p>
          </motion.div>

          {/* Kartenbereich */}
          <motion.div
            className="relative flex justify-center items-center w-full max-w-[700px]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Deko-Kreis */}
            <motion.div
              className="absolute inset-0 flex justify-center items-center pointer-events-none z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.6, ease: 'easeOut', delay: 0.3 }}
            >
              <div className="w-[min(90vw,475px)] aspect-square rounded-full bg-accentLight/70 dark:bg-accentDark/70" />
            </motion.div>

            {/* Karte für Light Mode */}
            <div className="relative z-10 w-full h-auto rounded-xl drop-shadow-2xl hidden dark:block">
              <Image
                src={`${basePath}/assets/svg/japan_country_white.svg`}
                alt="Japan Karte (Dunkel)"
                width={700}
                height={700}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Karte für Dark Mode */}
            <div className="relative z-10 w-full h-auto rounded-xl drop-shadow-2xl dark:hidden">
              <Image
                src={`${basePath}/assets/svg/japan_country_black.svg`}
                alt="Japan Karte (Hell)"
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
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.5 + index * 0.3,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
                className="absolute z-20"
                style={{ top, left }}
              >
                <Link
                  href={`/citys/${city.toLowerCase()}`}
                  title={city}
                  className="group/city relative"
                >
                  {/* Punkt */}
                  <div className="w-6 h-6 bg-accentLight dark:bg-accentDark rounded-full border-[3px] border-white dark:border-bgDark transition-transform duration-200 group-hover/city:scale-125" />

                  {/* Tooltip */}
                  <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 px-2 py-1 rounded-md 
                    text-sm bg-textLight text-bgLight dark:bg-textDark dark:text-bgDark 
                    opacity-0 group-hover/city:opacity-100 group-hover/city:translate-y-1 transition-all duration-200 pointer-events-none"
                  >
                    {city}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroHome;
