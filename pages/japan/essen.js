'use client';

import LayoutWrapper from '@/components/LayoutWrapper';
import HeroDefault from '@/components/HeroDefault';
import ContentSection from '@/components/ContentSection';

export default function Essen() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return (
    <LayoutWrapper>
      <HeroDefault
        title="Essen in Japan"
        textLines={[
          'Willst du mehr über Japans Küche erfahren?',
          'Hier findest du alles über Sushi, Ramen und mehr.',
        ]}
        backgroundImage={null}
      />
         <div id="after-hero" />

      <div className="space-y-24">
        <ContentSection
          image={`${basePath}/assets/img/img_kyoto/kyoto_sushi_1.webp`}
          title="Sushi – mehr als roher Fisch"
          text={[
            'Sushi ist weltweit bekannt – doch in Japan gibt es viele Varianten: Nigiri, Maki, Sashimi oder Omakase-Menüs.',
            'Frischer Fisch, perfekter Reis und viel Handwerkskunst machen Sushi zum kulinarischen Highlight.',
          ]}
        />

        <ContentSection
          image={`${basePath}/assets/img/img_japan/japan_essen_ramen.webp`}
          title="Ramen – Japans Nudelsuppe"
          text={[
            'Ob Shoyu, Miso oder Tonkotsu – Ramen ist vielfältig und in jeder Region Japans anders.',
            'Köstliche Brühe, handgemachte Nudeln und Toppings wie Ei, Chashu oder Nori machen jede Schüssel einzigartig.',
          ]}
          reverse
        />

        <ContentSection
          image={`${basePath}/assets/img/img_kyoto/kyoto_omlett_1.webp`}
          title="Streetfood & Spezialitäten"
          text={[
            'Takoyaki, Okonomiyaki oder Taiyaki – auf Märkten und Festivals findest du Japans kreative Streetfood-Szene.',
            'Diese Gerichte sind nicht nur lecker, sondern auch Teil der modernen Esskultur.',
          ]}
        />
      </div>
    </LayoutWrapper>
  );
}
