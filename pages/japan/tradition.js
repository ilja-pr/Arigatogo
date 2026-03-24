'use client';

import LayoutWrapper from '@/components/LayoutWrapper';
import HeroDefault from '@/components/HeroDefault';
import ContentSection from '@/components/ContentSection';

export default function Tradition() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return (
    <LayoutWrapper>
      <HeroDefault
        title="Traditionen Japans"
        textLines={[
          'Erkunde die lebendigen Traditionen Japans, die bis heute das kulturelle Leben prägen.',
          'Vom Teezeremoniell bis zu den Festen – die Vielfalt ist faszinierend.',
        ]}
        backgroundImage={null}
      />
         <div id="after-hero" />

      <div className="space-y-24 py-16">
        <ContentSection
          image={`${basePath}/assets/img/img_kyoto/kyoto_tempel.webp`}
          title="Tempel & Schreine"
          text={[
            'Japans religiöse Bauwerke sind nicht nur Orte der Andacht, sondern auch kulturelle Wahrzeichen.',
            'Shinto-Schreine und buddhistische Tempel wie in Kyoto oder Nara erzählen von tiefer Spiritualität.',
          ]}
        />

        <ContentSection
          image={`${basePath}/assets/img/img_japan/japan_kultur2.webp`}
          title="Teezeremonie & Kimono"
          text={[
            'Die Teezeremonie steht für Achtsamkeit und Einfachheit – tief in der Zen-Philosophie verwurzelt.',
            'Der Kimono ist mehr als Kleidung – er erzählt Geschichte, Status und Anlass.',
          ]}
          reverse
        />

        <ContentSection
          image={`${basePath}/assets/img/img_tokyo/tokyo_cosplay.webp`}
          title="Tradition trifft Moderne"
          text={[
            'In Japan leben alte Rituale neben popkulturellen Phänomenen wie Cosplay.',
            'Feste wie das Gion Matsuri in Kyoto zeigen: Kultur bleibt lebendig – gestern wie heute.',
          ]}
        />
      </div>
    </LayoutWrapper>
  );
}
