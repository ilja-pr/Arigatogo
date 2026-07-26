'use client';

import HeroDefault from '@/components/HeroDefault';
import ContentSection from '@/components/ContentSection';
import VideoSection from '@/components/VideoSection';
import FactsStrip from '@/components/FactsStrip';

export default function Tokyo() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const videoPath = `${basePath}/assets/video/tokyo_video.mp4`;
  const videoPathMobile = `${basePath}/assets/video/tokyo_video_square.mp4`;

  return (
    <>
      <HeroDefault
        title="Tokyo"
        eyebrow="東京 · Hauptstadt"
        textLines={[
          'Tauche ein in die Vielfalt der Hauptstadt Japans.',
          'Von Shibuya bis Asakusa – entdecke Tokyo auf eigene Weise.',
        ]}
        backgroundImage={null}
      />
         <div id="after-hero" />

      <FactsStrip facts={[
    { label: 'Einwohner', value: '≈ 14 Mio.' },
    { label: 'Stadtbezirke', value: '23' },
    { label: 'Beste Reisezeit', value: 'Mär–Mai · Okt–Nov' },
    { label: 'Ab Flughafen', value: '≈ 40 Min.' },
  ]} />

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
          text={[
            'Genieße den Ausblick über das Häusermeer von der Aussichtsplattform des Tokyo Tower – abends besonders eindrucksvoll.',
            'Tipp: Wer höher hinaus will, fährt zum Tokyo Skytree (634 m), dem höchsten Turm Japans.',
          ]}
        />

        <ContentSection
          image={`${basePath}/assets/img/img_tokyo/tokyo_cosplay.webp`}
          title="Akihabara"
          text={[
            'Tauche ein in die Welt von Elektronik, Anime und Gaming – Akihabara ist das Mekka für Technik- und Popkultur-Fans.',
            'Zwischen Retro-Game-Läden und mehrstöckigen Arcades vergeht hier ein Nachmittag wie im Flug.',
          ]}
          reverse
        />

        <ContentSection
          image={`${basePath}/assets/img/img_tokyo/tokyo_asakusa_schrein.webp`}
          title="Senso-ji in Asakusa"
          text={[
            'Erlebe Tokyos ältesten Tempel: Durch das Kaminarimon-Tor und die Ladenstraße Nakamise geht es zum Senso-ji.',
            'Früh morgens ist es hier am ruhigsten – dann gehört der Tempel fast dir allein.',
          ]}
        />
      </div>
    </>
  );
}
