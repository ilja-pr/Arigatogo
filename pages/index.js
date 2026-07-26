'use client';

import HeroHome from '@/components/HeroHome';
import CityCarousel from '@/components/CityCarousel';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function Home() {
  const cityImages = [
    `${basePath}/assets/img/img_tokyo/tokyo_cityview.webp`,
    `${basePath}/assets/img/img_kyoto/kyoto_tempel2.webp`,
    `${basePath}/assets/img/img_osaka/osaka_castle.webp`,
  ];

  const exploreLinks = [
    {
      href: '/japan',
      kanji: '文化',
      label: 'Japan entdecken',
      desc: 'Essen, Geschichte, Natur und Tradition im Überblick.',
    },
    {
      href: '/travel',
      kanji: '旅',
      label: 'Reisetipps',
      desc: 'Von JR Pass bis Etikette – gut vorbereitet ankommen.',
    },
    {
      href: '/plan-your-trip',
      kanji: '計画',
      label: 'Reiseplan erstellen',
      desc: 'Ein paar Fragen beantworten, fertigen Plan erhalten.',
    },
  ];

  return (
    <>
      <div className="flex flex-col">

        {/* Hero */}
        <HeroHome />

        {/* Städte-Highlights */}
        <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-accentLight dark:text-accentDark mb-3">
            Drei Städte · 三都市
          </p>
          <h2 className="heading-rule text-3xl sm:text-4xl leading-snug">
            Highlights entdecken
          </h2>
          <CityCarousel images={cityImages} />
        </section>

        {/* Thematische Abschnitte */}
        <ContentSection
          image={`${basePath}/assets/img/img_japan/japan_kultur.webp`}
          eyebrow="Kultur · 文化"
          title="Kultur erleben"
          text="Teezeremonie, Tempelfeste, Handwerk mit jahrhundertealter Geschichte: Japans Kultur lebt vom Detail. Entdecke Traditionen, die bis heute den Alltag prägen – und eine Moderne, die daraus wächst."
          buttonLink="/japan"
        />
        <ContentSection
          image={`${basePath}/assets/img/img_japan/japan_natur2.webp`}
          eyebrow="Natur · 自然"
          title="Natur entdecken"
          text="Bambuswälder in Arashiyama, heiße Quellen in den Bergen, Kirschblüten im Frühling und leuchtender Ahorn im Herbst: Japans Landschaft wechselt mit jeder Region ihr Gesicht."
          reverse
          buttonLink="/travel"
        />
        <ContentSection
          image={`${basePath}/assets/img/img_osaka/osaka_nintendo.webp`}
          eyebrow="Planung · 計画"
          title="Planung mit AI"
          text="Beantworte ein paar Fragen zu Reisezeit, Interessen und Tempo – und erhalte einen persönlichen Reiseplan mit Route, Highlights und Tipps, zugeschnitten auf deinen Stil."
          buttonLink="/plan-your-trip"
          buttonText="Jetzt planen"
        />

        {/* Mehr entdecken */}
        <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-6 mb-24">
          <h2 className="heading-rule rule-center text-3xl sm:text-4xl text-center mx-auto w-fit">
            Mehr entdecken
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {exploreLinks.map(({ href, kanji, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="group relative overflow-hidden bg-paper dark:bg-paperDark rounded-2xl p-8 ring-1 ring-black/5 dark:ring-white/10 hover:ring-accentLight/40 dark:hover:ring-accentDark/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30 transition-all duration-300"
              >
                {/* Kanji als Wasserzeichen */}
                <span
                  aria-hidden="true"
                  className="absolute -right-3 -bottom-6 text-8xl font-bold text-textLight/[0.05] dark:text-textDark/[0.05] select-none pointer-events-none"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {kanji}
                </span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accentLight dark:group-hover:text-accentDark transition-colors">
                  {label}
                </h3>
                <p className="text-inkSoft dark:text-textDark/60 leading-relaxed">
                  {desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accentLight dark:text-accentDark">
                  Los geht's
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
