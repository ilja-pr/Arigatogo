'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LayoutWrapper from '@/components/LayoutWrapper';
import HeroDefault from '@/components/HeroDefault';

export default function Japan() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  const cards = [
    {
      title: 'Essen in Japan',
      text: 'Sushi, Ramen, Tempura oder Takoyaki – entdecke die kulinarische Vielfalt von Japan.',
      link: '/japan/essen',
      image: `${basePath}/assets/img/img_japan/japan_essen_ramen.webp`,
    },
    {
      title: 'Tradition & Kultur',
      text: 'Ob Teezeremonie, Kimono oder Shinto-Rituale – tauche ein in jahrhundertealte Bräuche.',
      link: '/japan/tradition',
      image: `${basePath}/assets/img/img_osaka/osaka_tempel.webp`,
    },
    {
      title: 'Natur & Landschaften',
      text: 'Von Kirschblüten bis Vulkanen – Japans Natur begeistert mit ihrer Vielfalt.',
      link: '/japan/natur',
      image: `${basePath}/assets/img/img_japan/japan_natur2.webp`,
    },
    {
      title: 'Geschichte Japans',
      text: 'Edo-Zeit, Meiji-Restauration oder Moderne – erfahre mehr über Japans Wandel.',
      link: '/japan/geschichte',
      image: `${basePath}/assets/img/img_japan/japan_geschichte1.webp`,
    },
  ];

  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <LayoutWrapper>
      <HeroDefault
        title="Japan"
        textLines={[
          'Willst du mehr über Japan erfahren?',
          'Diese Webseite liefert dir alle Infos, die du für deine Japan-Reise brauchst.',
        ]}
      />
      <div id="after-hero" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-accentLight dark:text-accentDark pb-2">
            Japan entdecken
          </h2>
          <div className="h-px bg-accentLight dark:bg-accentDark opacity-40 w-full" />
        </div>

        <div className="grid gap-12 sm:grid-cols-2">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={el => (cardRefs.current[index] = el)}
              data-index={index}
              className={`border-2 border-accentLight dark:border-accentDark bg-white/90 dark:bg-bgDark rounded-3xl overflow-hidden transition-transform duration-500 transform ${
                visibleCards.includes(index) ? 'animate-fade-in-up' : 'opacity-0'
              } hover:scale-[1.01]`}
            >
              <div className="relative w-full h-72">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-3 text-accentLight dark:text-accentDark">
                  {card.title}
                </h3>
                <p className="text-base text-textLight dark:text-textDark mb-5">
                  {card.text}
                </p>
                <Link
                  href={card.link}
                  className="inline-block bg-accentLight dark:bg-accentDark text-white dark:text-bgDark px-6 py-2 rounded-full hover:opacity-90 transition"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </LayoutWrapper>
  );
}
