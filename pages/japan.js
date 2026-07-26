'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HeroDefault from '@/components/HeroDefault';

export default function Japan() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  const cards = [
    {
      title: 'Essen in Japan',
      kanji: '食',
      text: 'Sushi, Ramen, Tempura oder Takoyaki – entdecke die kulinarische Vielfalt Japans, vom Sternerestaurant bis zum Straßenstand.',
      link: '/japan/essen',
      image: `${basePath}/assets/img/img_japan/japan_essen_ramen.webp`,
    },
    {
      title: 'Tradition & Kultur',
      kanji: '道',
      text: 'Ob Teezeremonie, Kimono oder Shinto-Rituale – tauche ein in Bräuche, die seit Jahrhunderten gepflegt werden.',
      link: '/japan/tradition',
      image: `${basePath}/assets/img/img_osaka/osaka_tempel.webp`,
    },
    {
      title: 'Natur & Landschaften',
      kanji: '山',
      text: 'Von Kirschblüten über Bambuswälder bis zu Vulkanen – Japans Natur wechselt mit jeder Region ihr Gesicht.',
      link: '/japan/natur',
      image: `${basePath}/assets/img/img_japan/japan_natur2.webp`,
    },
    {
      title: 'Geschichte Japans',
      kanji: '歴',
      text: 'Samurai, Edo-Zeit, Meiji-Restauration und Moderne – erfahre, wie sich Japan über Jahrhunderte gewandelt hat.',
      link: '/japan/geschichte',
      image: `${basePath}/assets/img/img_japan/japan_geschichte1.webp`,
    },
  ];

  const seasons = [
    {
      kanji: '春',
      name: 'Frühling',
      months: 'März – Mai',
      desc: 'Kirschblüte (Sakura), Hanami-Picknicks in Parks, mildes Wetter – die beliebteste Reisezeit.',
    },
    {
      kanji: '夏',
      name: 'Sommer',
      months: 'Juni – August',
      desc: 'Matsuri-Festivals, Feuerwerke und Wandern in den Alpen – warm, aber lebendig.',
    },
    {
      kanji: '秋',
      name: 'Herbst',
      months: 'September – November',
      desc: 'Leuchtend roter Ahorn (Momiji), klare Luft und angenehme Temperaturen.',
    },
    {
      kanji: '冬',
      name: 'Winter',
      months: 'Dezember – Februar',
      desc: 'Pulverschnee in Hokkaido, dampfende Onsen und Schneeaffen in Nagano.',
    },
  ];

  return (
    <>
      <HeroDefault
        title="Japan"
        eyebrow="日本 · Nihon"
        textLines={[
          'Ein Land, vier Jahreszeiten, tausend Gesichter.',
          'Hier findest du alles, was du für deine Japan-Reise wissen willst.',
        ]}
      />
      <div id="after-hero" />

      {/* Themen-Karten */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <p className="text-sm font-medium tracking-[0.3em] uppercase text-accentLight dark:text-accentDark mb-3">
          Vier Themen · 四つのテーマ
        </p>
        <h2 className="heading-rule text-3xl sm:text-4xl">Japan entdecken</h2>

        <div className="grid gap-8 sm:grid-cols-2 mt-10">
          {cards.map((card, index) => (
            <motion.div
              key={card.link}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: (index % 2) * 0.06, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.1, margin: '0px 0px -40px 0px' }}
            >
              <Link
                href={card.link}
                className="group block overflow-hidden rounded-2xl bg-paper dark:bg-paperDark ring-1 ring-black/5 dark:ring-white/10 hover:ring-accentLight/40 dark:hover:ring-accentDark/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40 transition-all duration-300"
              >
                <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                  {/* Kanji-Stempel */}
                  <span
                    aria-hidden="true"
                    className="absolute top-4 right-4 flex items-center justify-center w-11 h-11 rounded-full bg-accentLight/90 dark:bg-accentDark/90 text-white dark:text-bgDark text-xl font-bold shadow-lg"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {card.kanji}
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl mb-2 group-hover:text-accentLight dark:group-hover:text-accentDark transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-inkSoft dark:text-textDark/70 leading-relaxed mb-4">
                    {card.text}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accentLight dark:text-accentDark">
                    Mehr erfahren
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Jahreszeiten */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.3em] uppercase text-accentLight dark:text-accentDark mb-3">
          Beste Reisezeit · 四季
        </p>
        <h2 className="heading-rule text-3xl sm:text-4xl">Japans vier Jahreszeiten</h2>
        <p className="mt-4 max-w-2xl text-lg text-inkSoft dark:text-textDark/70">
          Kaum ein Land inszeniert seine Jahreszeiten so bewusst wie Japan –
          jede bringt eigene Feste, Farben und Gerichte mit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {seasons.map((season, i) => (
            <motion.div
              key={season.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.15), ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.1, margin: '0px 0px -40px 0px' }}
              className="relative overflow-hidden rounded-2xl bg-paper dark:bg-paperDark ring-1 ring-black/5 dark:ring-white/10 p-6"
            >
              <span
                aria-hidden="true"
                className="absolute -right-2 -bottom-5 text-7xl font-bold text-textLight/[0.06] dark:text-textDark/[0.06] select-none pointer-events-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {season.kanji}
              </span>
              <h3 className="text-xl font-bold mb-0.5">{season.name}</h3>
              <p className="text-sm font-medium text-accentLight dark:text-accentDark mb-3">
                {season.months}
              </p>
              <p className="text-sm leading-relaxed text-inkSoft dark:text-textDark/65">
                {season.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
