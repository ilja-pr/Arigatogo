'use client';

import LayoutWrapper from '@/components/LayoutWrapper';
import HeroHome from '@/components/HeroHome';
import CityCarousel from '@/components/CityCarousel';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function Home() {
  const lorem = `Japan fasziniert durch seine Gegensätze – von moderner Technologie bis hin zu jahrhundertealter Tradition. Tauche ein in ein Land voller Vielfalt und Gastfreundschaft.`;

  const cityImages = [
    `${basePath}/assets/img/img_tokyo/tokyo_cityview.webp`,
    `${basePath}/assets/img/img_kyoto/kyoto_tempel2.webp`,
    `${basePath}/assets/img/img_osaka/osaka_castle.webp`,
  ];

  return (
    <LayoutWrapper>
      <main className="flex-grow flex flex-col gap-24">

        {/* Hero Bereich */}
        <HeroHome />

        {/* Städte-Highlights */}
        <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
         <h2 className="text-3xl sm:text-4xl font-bold leading-snug tracking-wide text-accentLight dark:text-accentDark pb-2">
  Highlights entdecken
</h2>

          <CityCarousel images={cityImages} />
        </section>

        {/* Thematische Abschnitte */}
        <ContentSection
          image={`${basePath}/assets/img/img_japan/japan_kultur.webp`}
          title="Kultur erleben"
          text={lorem}
          buttonLink="/japan"
        />
        <ContentSection
          image={`${basePath}/assets/img/img_japan/japan_natur2.webp`}
          title="Natur entdecken"
          text={lorem}
          reverse
          buttonLink="/travel"
        />
        <ContentSection
          image={`${basePath}/assets/img/img_osaka/osaka_nintendo.webp`}
          title="Planung mit AI"
          text={lorem}
          buttonLink="/plan-your-trip"
        />

        {/* Mehr entdecken Bereich */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-24">
          <h2 className="text-3xl font-bold text-accentLight dark:text-accentDark mb-8 text-center pb-2">
            Mehr entdecken
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { href: '/japan', label: '🇯🇵 Japan entdecken' },
              { href: '/travel', label: '✈️ Reisetipps' },
              { href: '/plan-your-trip', label: '🧠 Reiseplan erstellen' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="bg-accentLight dark:bg-accentDark text-white dark:text-bgDark text-center p-6 rounded-xl shadow-lg text-lg font-semibold hover:opacity-90 transition"
              >
                {label}
              </Link>
            ))}
          </div>
        </section>
        
      </main>
    </LayoutWrapper>
  );
}
