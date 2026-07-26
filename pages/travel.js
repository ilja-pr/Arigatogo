'use client';

import HeroDefault from '@/components/HeroDefault';
import ContentSection from '@/components/ContentSection';

export default function Travel() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  const labelToIdMap = {
    'Rail Pass': 'railpass',
    'Redewendungen': 'phrases',
    'Apps': 'apps',
    'Wi-Fi/SIM': 'wifi',
    'Zahlungsmittel': 'payment',
    'Etikette': 'etiquette',
    'Unterkünfte': 'housing',
    'Packliste': 'packing',
    'IC-Karte': 'iccard',
    'Reiseroute': 'route',
  };

  const iconItems = [
    { base: 'Train', label: 'Rail Pass' },
    { base: 'Talk', label: 'Redewendungen' },
    { base: 'App', label: 'Apps' },
    { base: 'Wifi', label: 'Wi-Fi/SIM' },
    { base: 'Pay', label: 'Zahlungsmittel' },
    { base: 'Etikette', label: 'Etikette' },
    { base: 'House', label: 'Unterkünfte' },
    { base: 'Temp', label: 'Packliste' },
    { base: 'TravelC', label: 'IC-Karte' },
    { base: 'Route', label: 'Reiseroute' },
  ];

  return (
    <>
        <HeroDefault
          title="Reiseinfos"
          eyebrow="旅の準備 · Vorbereitung"
          textLines={[
            'Gut vorbereitet ist halb angekommen.',
            'Zehn Punkte, die deine Japan-Reise entspannter machen.',
          ]}
        />

        <div id="after-hero" />

        {/* Icons */}
        <section className="mt-12 px-4 sm:px-8 lg:px-16 max-w-10xl mx-auto">
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-accentLight dark:text-accentDark mb-3 text-center">Checkliste · チェックリスト</p>
          <h1 className="heading-rule rule-center text-3xl sm:text-4xl md:text-5xl mb-14 text-center mx-auto w-fit">
            Checkliste für deine Japan-Reise
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5 text-textLight dark:text-textDark">
            {iconItems.map(({ base, label }, i) => (
              <button
                key={i}
                className="group relative flex flex-col items-center text-center rounded-2xl bg-paper dark:bg-paperDark ring-1 ring-black/5 dark:ring-white/10 hover:ring-accentLight/40 dark:hover:ring-accentDark/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30 px-4 py-6 transition-all duration-300"
                onClick={() => {
                  const section = document.getElementById(labelToIdMap[label]);
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="absolute top-2.5 left-3.5 text-xs font-semibold text-inkSoft/60 dark:text-textDark/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <img
                  src={`${basePath}/assets/travelsvg/${base}B.svg`}
                  alt=""
                  className="w-11 h-11 mb-2.5 block dark:hidden transition-transform group-hover:scale-110"
                />
                <img
                  src={`${basePath}/assets/travelsvg/${base}W.svg`}
                  alt=""
                  className="w-11 h-11 mb-2.5 hidden dark:block transition-transform group-hover:scale-110"
                />
                <span className="text-sm font-medium group-hover:text-accentLight dark:group-hover:text-accentDark transition-colors">{label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Inhaltliche Sektionen */}
        <div className="space-y-24">
          <ContentSection
            id="railpass"
            image={`${basePath}/assets/travel/japan-rail-pass-train.webp`}
            title="1. Japan Rail Pass besorgen"
            text="Ideal für lange Zugreisen: unbegrenzte Fahrten auf den meisten JR-Linien, inklusive Shinkansen. Eine günstige Option bei mehreren Städten. Plane deine Route, um den Pass optimal zu nutzen."
          />
          <ContentSection
            id="phrases"
            image={`${basePath}/assets/travel/learn-japanese-phrases.webp`}
            title="2. Grundlegende Redewendungen lernen"
            text="Ein paar japanische Ausdrücke wie „Arigato“ oder „Sumimasen“ helfen enorm. Sie erleichtern die Kommunikation und zeigen Respekt."
            reverse
            fullBg
          />
          <ContentSection
            id="apps"
            image={`${basePath}/assets/travel/travel-apps.webp`}
            title="3. Wichtige Apps installieren"
            text="Apps wie Google Translate, Hyperdia oder Navitime erleichtern Navigation und Kommunikation. Lade sie vor der Reise herunter."
          />
          <ContentSection
            id="wifi"
            image={`${basePath}/assets/travel/poket-wifi.webp`}
            title="4. Pocket Wi-Fi oder SIM-Karte organisieren"
            text="Für Navigation, Infos und Kontakt: sicheres Internet ist wichtig. Pocket Wi-Fi oder lokale SIM – am besten im Voraus buchen."
            reverse
            fullBg
          />
          <ContentSection
            id="payment"
            image={`${basePath}/assets/travel/cash-payment.webp`}
            title="5. Zahlungsstrategie planen"
            text="Bargeld ist weit verbreitet, besonders außerhalb der Städte. Immer genug Yen dabeihaben – Kreditkarten nicht überall akzeptiert. Geldautomaten findest du z. B. in Convenience Stores."
          />
          <ContentSection
            id="etiquette"
            image={`${basePath}/assets/travel/japan-etiquette.webp`}
            title="6. Japanische Etikette verstehen"
            text="Regeln wie Verbeugen, Schuhe ausziehen oder kein Trinkgeld sind wichtig. Vermeidet Missverständnisse und zeigt Respekt."
            reverse
            fullBg
          />
          <ContentSection
            id="housing"
            image={`${basePath}/assets/travel/japan-booking.webp`}
            title="7. Unterkünfte im Voraus buchen"
            text="Besonders zur Kirschblüten- oder Herbstsaison schnell ausgebucht. Früh buchen sichert gute Preise und Wunschorte."
          />
          <ContentSection
            id="packing"
            image={`${basePath}/assets/travel/packing-guide.webp`}
            title="8. Klima- & kulturgerecht packen"
            text="Wetter variiert stark – packe je nach Jahreszeit. Bequeme Schuhe und angemessene Kleidung für Tempel nicht vergessen."
            reverse
            fullBg
          />
          <ContentSection
            id="iccard"
            image={`${basePath}/assets/travel/ic-card.webp`}
            title="9. IC-Karte nutzen (z.B. Suica, Pasmo)"
            text="Bequemer als Tickets: einfach an Kartenleser halten. Auch nutzbar in Shops und Automaten."
          />
          <ContentSection
            id="route"
            image={`${basePath}/assets/travel/japan-itinerary.webp`}
            title="10. Grobe Reiseroute erstellen"
            text="Plane vorab – so nutzt du deine Zeit optimal. Lass aber auch Platz für spontane Erlebnisse."
            reverse
            fullBg
          />
        </div>
    </>
  );
}
