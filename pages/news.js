'use client';

import LayoutWrapper from '@/components/LayoutWrapper';
import HeroDefault from '@/components/HeroDefault';
import Image from 'next/image';

export default function News() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  const mainImage = `${basePath}/assets/img/img_tokyo/tokyo_shinjuku2.webp`;
  const newsItems = [
    {
      title: 'Kyoto setzt auf Touristen-Limit',
      text: 'Ab 2025 begrenzt Kyoto die Tagesanzahl für Besucher an Hotspots wie dem Fushimi Inari. Ziel: Nachhaltiger Tourismus & Schutz des Kulturerbes.',
      image: `${basePath}/assets/img/img_kyoto/kyoto_tempel2.webp`,
    },
    {
      title: 'Neue Nachtzüge in Japan geplant',
      text: 'Die JR Group kündigt neue Nachtzugverbindungen zwischen Osaka und Sapporo an. Start ist voraussichtlich im Herbst 2025.',
      image: `${basePath}/assets/img/img_osaka/osaka_nightcity.webp`,
    },
    {
      title: 'Technologie-Messe in Tokyo ein voller Erfolg',
      text: 'Japans größte Tech-Messe zog dieses Jahr über 300.000 Besucher an. KI, Robotik und nachhaltige Innovationen standen im Fokus.',
      image: `${basePath}/assets/img/img_tokyo/tokyo_cosplay.webp`,
    },
  ];

  return (
    <LayoutWrapper>
      <HeroDefault
        title="News"
        textLines={[
          'Bleib informiert über aktuelle Entwicklungen in Japan.',
          'Reisen, Sicherheit, Events – hier findest du alles Relevante auf einen Blick.',
        ]}
      />

      <div id="after-hero" />

      <section className="max-w-7xl mx-auto px-4 sm:px-10 py-24">
        <h2 className="text-4xl sm:text-5xl font-extrabold leading-relaxed tracking-wide text-accentLight dark:text-accentDark pb-2 text-left">
  Aktuelle Nachrichten
</h2>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Hauptnachricht */}
          <div className="col-span-1 bg-white/90 dark:bg-bgDark border-2 border-accentLight dark:border-accentDark rounded-3xl overflow-hidden transition-all duration-300 flex flex-col min-h-[600px]">
            <div className="relative w-full h-72 sm:h-80">
              <Image
                src={mainImage}
                alt="Top News"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
              <h3 className="text-2xl sm:text-3xl font-bold text-accentLight dark:text-accentDark mb-4">
                Japan erleichtert Einreise für Touristen
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-textLight dark:text-textDark">
                Ab Sommer 2025 soll die Einreise für EU-Bürger visumsfrei bis 90 Tage möglich sein – auch digitale Gesundheitsnachweise entfallen.
              </p>
            </div>
          </div>

          {/* Weitere Meldungen */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-8">
            {newsItems.map((news, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row bg-white/90 dark:bg-bgDark border-2 border-accentLight dark:border-accentDark rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Textbereich */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                  <h4 className="text-2xl sm:text-3xl font-bold text-accentLight dark:text-accentDark mb-2">
                    {news.title}
                  </h4>
                  <p className="text-base sm:text-lg text-textLight dark:text-textDark">
                    {news.text}
                  </p>
                </div>

                {/* Bildbereich */}
                <div className="relative w-full sm:w-1/3 h-56 sm:h-auto min-h-[200px]">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
