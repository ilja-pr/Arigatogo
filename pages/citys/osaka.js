'use client';

import HeroDefault from '@/components/HeroDefault';
import ContentSection from '@/components/ContentSection';
import VideoSection from '@/components/VideoSection';
import FactsStrip from '@/components/FactsStrip';

export default function Osaka() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  const videoPath = `${basePath}/assets/video/osaka_video.mp4`;
  const videoPathMobile = `${basePath}/assets/video/osaka_video_square.mp4`;

  return (
    <>
      <HeroDefault
        title="Osaka"
        eyebrow="大阪 · Küche Japans"
        textLines={[
          'Willkommen in Japans Streetfood-Metropole.',
          'Erkunde lebendige Viertel, Parks und Kultur auf eigene Faust.',
        ]}
      />
         <div id="after-hero" />

      <FactsStrip facts={[
    { label: 'Einwohner', value: '≈ 2,7 Mio.' },
    { label: 'Spitzname', value: 'Küche Japans' },
    { label: 'Beste Reisezeit', value: 'Mär–Mai · Okt–Nov' },
    { label: 'Ab Kyoto (Zug)', value: '≈ 30 Min.' },
  ]} />

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
          text={[
            'Tauche ein in die Geschichte der Samurai-Zeit und genieße die Aussicht von den oberen Etagen der Burg Osaka.',
            'Im Frühling verwandelt die Kirschblüte den Burgpark in eines der schönsten Hanami-Ziele des Landes.',
          ]}
        />

        <ContentSection
          image={`${basePath}/assets/img/img_osaka/osaka_city.webp`}
          title="Dotonbori"
          text={[
            'Erlebe das bunte Treiben und die Neonlichter von Dotonbori – abends zeigt Osaka hier sein lautestes Gesicht.',
            'Pflichtprogramm: ein Foto vor dem Glico-Läufer und frische Takoyaki direkt vom Stand.',
          ]}
          reverse
        />

        <ContentSection
          image={`${basePath}/assets/img/img_osaka/osaka_nightcity.webp`}
          title="Kuromon Ichiba Markt"
          text={[
            'Probiere dich über den lebhaften Kuromon-Markt: gegrillte Jakobsmuscheln, Wagyu-Spieße und frisches Sashimi.',
            'Nicht umsonst heißt Osaka „die Küche Japans" – hier isst man sich durch den Tag.',
          ]}
        />
      </div>
    </>
  );
}
