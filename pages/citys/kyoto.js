'use client';

import HeroDefault from '@/components/HeroDefault';
import ContentSection from '@/components/ContentSection';
import VideoSection from '@/components/VideoSection';
import FactsStrip from '@/components/FactsStrip';

export default function Kyoto() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const videoPath = `${basePath}/assets/video/kyoto_video.mp4`;
  const videoPathMobile = `${basePath}/assets/video/kyoto_video_square.mp4`;

  return (
    <>
      <HeroDefault
        title="Kyoto"
        eyebrow="京都 · Kaiserstadt"
        textLines={[
          'Willkommen in der alten Kaiserstadt.',
          'Hier verschmelzen Zen-Gärten, Geishas und Geschichte zu einem einzigartigen Erlebnis.',
        ]}
        backgroundImage={null}
      />
         <div id="after-hero" />

      <FactsStrip facts={[
    { label: 'Tempel & Schreine', value: '1.600+' },
    { label: 'UNESCO-Stätten', value: '17' },
    { label: 'Beste Reisezeit', value: 'Apr · Nov' },
    { label: 'Ab Tokyo (Zug)', value: '≈ 2¼ Std.' },
  ]} />

      <VideoSection
        videoSrc={videoPath}
        videoSrcMobile={videoPathMobile}
        title="Einblick in Kyoto"
        description="Ein visuelles Erlebnis durch Tempelanlagen, Bambuswälder und das traditionelle Japan."
      />

      <div className="space-y-24 py-16">
        <ContentSection
          image={`${basePath}/assets/img/img_kyoto/kyoto_tempel2.webp`}
          title="Kultur & Geschichte"
          text="Kyoto, einst die Hauptstadt Japans, ist berühmt für seine gut erhaltenen historischen Stätten und seine reiche kulturelle Tradition."
        />
        <ContentSection
          image={`${basePath}/assets/img/img_kyoto/kyoto_omlett_1.webp`}
          title="Kinkaku-ji (Goldener Pavillon)"
          text={[
            'Bewundere die goldene Fassade des Kinkaku-ji, die sich malerisch im stillen Teich spiegelt.',
            'Der Zen-Tempel gehört zum UNESCO-Welterbe und ist eines der meistfotografierten Motive Japans.',
          ]}
          reverse
        />
        <ContentSection
          image={`${basePath}/assets/img/img_kyoto/kyoto_sushi_1.webp`}
          title="Arashiyama Bambuswald"
          text={[
            'Spaziere durch den berühmten Bambuswald von Arashiyama und lausche dem Knarren der Halme im Wind.',
            'Kombiniere den Besuch mit dem Togetsukyo-Brücken-Panorama und einer Bootsfahrt auf dem Hozugawa.',
          ]}
        />
      </div>
    </>
  );
}
