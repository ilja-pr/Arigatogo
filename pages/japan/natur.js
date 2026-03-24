'use client';

import LayoutWrapper from '@/components/LayoutWrapper';
import HeroDefault from '@/components/HeroDefault';
import ContentSection from '@/components/ContentSection';

export default function Natur() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return (
    <LayoutWrapper>
      <HeroDefault
        title="Natur in Japan"
        textLines={[
          'Tauche ein in die beeindruckenden Landschaften Japans.',
          'Von majestätischen Bergen bis zu malerischen Küsten – Natur pur erwartet dich!',
        ]}
        backgroundImage={null}
      />
         <div id="after-hero" />

      <div className="space-y-24 py-16">
        <ContentSection
          image={`${basePath}/assets/img/img_japan/japan_natur1.webp`}
          title="Berge & Vulkane"
          text={[
            'Japan ist zu 70 % bergig – der berühmteste Gipfel ist der Fuji-san.',
            'Vulkanische Landschaften und heiße Quellen prägen viele Regionen.',
            'Besonders beliebt: Wandertouren durch Nationalparks wie Nikko oder Hakone.',
          ]}
        />

        <ContentSection
          image={`${basePath}/assets/img/img_japan/japan_natur2.webp`}
          title="Städte inmitten der Natur"
          text={[
            'Auch große Städte wie Osaka oder Tokyo bieten grüne Rückzugsorte.',
            'Parks, Flussufer und Gärten bilden Kontraste zur Urbanität.',
            'Die Kombination aus Technik und Natur ist typisch japanisch.',
          ]}
          reverse
        />

        <ContentSection
          image={`${basePath}/assets/img/img_japan/japan_natur3.webp`}
          title="Jahreszeiten erleben"
          text={[
            'Kirschblüte im Frühling, bunte Wälder im Herbst – jede Saison hat ihren Reiz.',
            'Japans Natur ist eng mit Kultur und Feierlichkeiten verbunden.',
            'Feste wie Hanami oder Momijigari feiern diese Veränderungen bewusst.',
          ]}
        />
      </div>
    </LayoutWrapper>
  );
}
