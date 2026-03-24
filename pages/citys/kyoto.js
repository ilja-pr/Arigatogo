'use client';

import LayoutWrapper from '@/components/LayoutWrapper';
import HeroDefault from '@/components/HeroDefault';
import ContentSection from '@/components/ContentSection';
import VideoSection from '@/components/VideoSection';

export default function Kyoto() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const videoPath = `${basePath}/assets/video/kyoto_video.mp4`;
  const videoPathMobile = `${basePath}/assets/video/kyoto_video_square.mp4`;

  return (
    <LayoutWrapper>
      <HeroDefault
        title="Kyoto"
        textLines={[
          'Willkommen in der alten Kaiserstadt.',
          'Hier verschmelzen Zen-Gärten, Geishas und Geschichte zu einem einzigartigen Erlebnis.',
        ]}
        backgroundImage={null}
      />
         <div id="after-hero" />

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
          text="Bewundern Sie die prächtige goldene Fassade dieses ikonischen Tempels, der sich malerisch in einem ruhigen Teich spiegelt."
          reverse
        />
        <ContentSection
          image={`${basePath}/assets/img/img_kyoto/kyoto_sushi_1.webp`}
          title="Arashiyama Bambuswald"
          text="Spazieren Sie durch den berühmten Bambuswald und erleben Sie die mystische Atmosphäre der Natur auf einzigartige Weise."
        />
      </div>
    </LayoutWrapper>
  );
}
