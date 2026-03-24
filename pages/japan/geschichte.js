'use client';

import LayoutWrapper from '@/components/LayoutWrapper';
import HeroDefault from '@/components/HeroDefault';
import ContentSection from '@/components/ContentSection';

export default function Geschichte() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return (
    <LayoutWrapper>
      <HeroDefault
        title="Japans Geschichte"
        textLines={['Eine faszinierende Reise durch Jahrhunderte']}
        backgroundImage={null}
      />
         <div id="after-hero" />

      <div className="space-y-24 py-16">
        <ContentSection
          image={`${basePath}/assets/img/img_kyoto/kyoto_tempel2.webp`}
          title="Die Edo-Zeit (1603–1868)"
          text={[
            'Eine lange Periode des Friedens unter dem Tokugawa-Shogunat.',
            'Geprägt von Isolation, wirtschaftlicher Stabilität und kultureller Blüte.',
            'Kabuki, Ukiyo-e und Teezeremonien prägten den Alltag.',
          ]}
        />

        <ContentSection
          image={`${basePath}/assets/img/img_tokyo/tokyo_turm.webp`}
          title="Die Meiji-Restauration (1868–1912)"
          text={[
            'Japan öffnete sich dem Westen und begann mit umfassenden Reformen.',
            'Industrialisierung, Eisenbahnnetz und Verfassungsstaat entstanden.',
            'Die Gesellschaft wandelte sich grundlegend.',
          ]}
          reverse
        />

        <ContentSection
          image={`${basePath}/assets/img/img_tokyo/tokyo_cityview.webp`}
          title="Japan im 20. Jahrhundert"
          text={[
            'Vom Kaiserreich durch Kriegsjahre zur Nachkriegsdemokratie.',
            'Nach dem Zweiten Weltkrieg folgte ein beispielloser wirtschaftlicher Aufstieg.',
            'Heute ist Japan eine globale Hightech-Nation mit reicher Kultur.',
          ]}
        />
      </div>
    </LayoutWrapper>
  );
}
