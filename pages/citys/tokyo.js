'use client';

import LayoutWrapper from '@/components/LayoutWrapper';
import HeroDefault from '@/components/HeroDefault';
import ContentSection from '@/components/ContentSection';
import VideoSection from '@/components/VideoSection';

export default function Tokyo() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const videoPath = `${basePath}/assets/video/tokyo_video.mp4`;
  const videoPathMobile = `${basePath}/assets/video/tokyo_video_square.mp4`;

  return (
    <LayoutWrapper>
      <HeroDefault
        title="Tokyo"
        textLines={[
          'Tauche ein in die Vielfalt der Hauptstadt Japans.',
          'Von Shibuya bis Asakusa – entdecke Tokyo auf eigene Weise.',
        ]}
        backgroundImage={null}
      />
         <div id="after-hero" />

      <VideoSection
        videoSrc={videoPath}
        videoSrcMobile={videoPathMobile}
        title="Einblick in Tokyo"
        description="Erlebe Tokyos Energie – zwischen Hochhäusern, Tradition und dem Puls der Straße."
      />

      <div className="space-y-24 py-16">
        <ContentSection
          image={`${basePath}/assets/img/img_tokyo/tokyo_turm.webp`}
          title="Tokyo Tower"
          text="Genießen Sie den atemberaubenden Ausblick auf die Stadt von der Aussichtsplattform des berühmten Tokyo Tower."
        />

        <ContentSection
          image={`${basePath}/assets/img/img_tokyo/tokyo_cosplay.webp`}
          title="Akihabara"
          text="Tauchen Sie ein in die Welt der Elektronik und des Anime – Akihabara ist das Mekka für Technik- und Popkultur-Fans."
          reverse
        />

        <ContentSection
          image={`${basePath}/assets/img/img_tokyo/tokyo_asakusa_schrein.webp`}
          title="Meiji-Schrein"
          text="Erleben Sie die Ruhe und Spiritualität des historischen Meiji-Schreins – ein Ort der Entschleunigung inmitten der Metropole."
        />
      </div>
    </LayoutWrapper>
  );
}
