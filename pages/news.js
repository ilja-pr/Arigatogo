'use client';

import HeroDefault from '@/components/HeroDefault';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function News() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  const mainNews = {
    tag: 'Einreise',
    title: 'Japan erleichtert Einreise für Touristen',
    text: 'Ab Sommer 2025 soll die Einreise für EU-Bürger visumsfrei bis 90 Tage möglich sein – auch digitale Gesundheitsnachweise entfallen. Für Reisende bedeutet das: weniger Papierkram, schnellere Abfertigung am Flughafen.',
    image: `${basePath}/assets/img/img_tokyo/tokyo_shinjuku2.webp`,
  };

  const newsItems = [
    {
      tag: 'Nachhaltigkeit',
      title: 'Kyoto setzt auf Touristen-Limit',
      text: 'Ab 2025 begrenzt Kyoto die Tagesanzahl für Besucher an Hotspots wie dem Fushimi Inari. Ziel: nachhaltiger Tourismus und Schutz des Kulturerbes.',
      image: `${basePath}/assets/img/img_kyoto/kyoto_tempel2.webp`,
    },
    {
      tag: 'Verkehr',
      title: 'Neue Nachtzüge in Japan geplant',
      text: 'Die JR Group kündigt neue Nachtzugverbindungen zwischen Osaka und Sapporo an. Start ist voraussichtlich im Herbst 2025.',
      image: `${basePath}/assets/img/img_osaka/osaka_nightcity.webp`,
    },
    {
      tag: 'Technologie',
      title: 'Technologie-Messe in Tokyo ein voller Erfolg',
      text: 'Japans größte Tech-Messe zog dieses Jahr über 300.000 Besucher an. KI, Robotik und nachhaltige Innovationen standen im Fokus.',
      image: `${basePath}/assets/img/img_tokyo/tokyo_cosplay.webp`,
    },
  ];

  const Tag = ({ children }) => (
    <span className="inline-block px-3 py-1 rounded-full bg-accentLight/10 dark:bg-accentDark/15 text-accentLight dark:text-accentDark text-xs font-semibold tracking-wide uppercase">
      {children}
    </span>
  );

  return (
    <>
      <HeroDefault
        title="News"
        eyebrow="ニュース · Aktuelles"
        textLines={[
          'Bleib informiert über aktuelle Entwicklungen in Japan.',
          'Reisen, Verkehr, Events – das Wichtigste auf einen Blick.',
        ]}
      />
      <div id="after-hero" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="heading-rule text-3xl sm:text-4xl">Aktuelle Nachrichten</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">

          {/* Hauptnachricht */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1, margin: '0px 0px -40px 0px' }}
            className="lg:col-span-1 group overflow-hidden rounded-2xl bg-paper dark:bg-paperDark ring-1 ring-black/5 dark:ring-white/10 flex flex-col"
          >
            <div className="relative w-full h-64 sm:h-72 overflow-hidden">
              <Image
                src={mainNews.image}
                alt={mainNews.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
                loading="lazy"
              />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <Tag>{mainNews.tag}</Tag>
              <h3 className="text-2xl leading-snug">{mainNews.title}</h3>
              <p className="text-inkSoft dark:text-textDark/70 leading-relaxed">
                {mainNews.text}
              </p>
            </div>
          </motion.article>

          {/* Weitere Meldungen */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {newsItems.map((news, i) => (
              <motion.article
                key={news.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.06, 0.18), ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.1, margin: '0px 0px -40px 0px' }}
                className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl bg-paper dark:bg-paperDark ring-1 ring-black/5 dark:ring-white/10 hover:ring-accentLight/30 dark:hover:ring-accentDark/30 transition-all duration-300"
              >
                <div className="relative w-full sm:w-64 h-52 sm:h-auto shrink-0 overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 256px"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-7 flex flex-col gap-2.5 justify-center">
                  <Tag>{news.tag}</Tag>
                  <h4 className="text-xl leading-snug">{news.title}</h4>
                  <p className="text-inkSoft dark:text-textDark/70 leading-relaxed text-[15px]">
                    {news.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
