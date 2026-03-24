'use client';

import LayoutWrapper from '@/components/LayoutWrapper';
import HeroDefault from '@/components/HeroDefault';
import ContentSection from '@/components/ContentSection';
import VideoSection from '@/components/VideoSection';

export default function Osaka() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  const videoPath = `${basePath}/assets/video/osaka_video.mp4`;
  const videoPathMobile = `${basePath}/assets/video/osaka_video_square.mp4`;

  return (
    <LayoutWrapper>
      <HeroDefault
        title="Osaka"
        textLines={[
          'Willkommen in Japans Streetfood-Metropole.',
          'Erkunde lebendige Viertel, Parks und Kultur auf eigene Faust.',
        ]}
      />
         <div id="after-hero" />

      <VideoSection
        videoSrc={videoPath}
        videoSrcMobile={videoPathMobile}
        title="Einblick in Osaka"
        description="Erlebe die Atmosphäre der Stadt in Bewegtbild – von Straßenküche bis Skyline."
      />

      <div className="space-y-24 py-16">
        <ContentSection
          image={`${basePath}/assets/img/img_osaka/osaka_castle.webp`}
          title="Osaka Schloss"
          text="Tauchen Sie ein in die Geschichte und genießen Sie die herrliche Aussicht von den oberen Etagen des Osaka Castle."
        />

        <ContentSection
          image={`${basePath}/assets/img/img_osaka/osaka_city.webp`}
          title="Dotonbori"
          text="Erleben Sie das bunte Treiben und die berühmten Neonlichter dieses belebten Viertels – ein Highlight jeder Osaka-Reise."
          reverse
        />

        <ContentSection
          image={`${basePath}/assets/img/img_osaka/osaka_nightcity.webp`}
          title="Kuromon Ichiba Markt"
          text="Probieren Sie lokale Delikatessen auf dem lebhaften Kuromon Markt – ideal für kulinarische Entdecker:innen."
        />
      </div>
    </LayoutWrapper>
  );
}
