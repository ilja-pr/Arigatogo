'use client';

import LayoutWrapper from '@/components/LayoutWrapper';
import HeroDefault from '@/components/HeroDefault';
import CityCarousel from '@/components/CityCarousel';
import { motion } from 'framer-motion';
import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const tokyoImages = [
  `${basePath}/assets/img/img_tokyo/tokyo_turm.webp`,
  `${basePath}/assets/img/img_tokyo/tokyo_tempel.webp`,
  `${basePath}/assets/img/img_tokyo/tokyo_street.webp`,
  `${basePath}/assets/img/img_tokyo/tokyo_skytree-2.webp`,
  `${basePath}/assets/img/img_tokyo/tokyo_shinjuku2.webp`,
  `${basePath}/assets/img/img_tokyo/tokyo_pokemon.webp`,
  `${basePath}/assets/img/img_tokyo/tokyo_essen.webp`,
  `${basePath}/assets/img/img_tokyo/tokyo_ginza_mall.webp`,
  `${basePath}/assets/img/img_tokyo/tokyo_cosplay.webp`,
];

const kyotoImages = [
  `${basePath}/assets/img/img_kyoto/kyoto_tempel2.webp`,
  `${basePath}/assets/img/img_kyoto/kyoto_sushi_1.webp`,
  `${basePath}/assets/img/img_kyoto/kyoto_tempel.webp`,
  `${basePath}/assets/img/img_kyoto/kyoto_omlett_1.webp`,
];

const osakaImages = [
  `${basePath}/assets/img/img_osaka/osaka_castle.webp`,
  `${basePath}/assets/img/img_osaka/osaka_nightcity.webp`,
  `${basePath}/assets/img/img_osaka/osaka_city.webp`,
  `${basePath}/assets/img/img_osaka/osaka_nintendo.webp`,
  `${basePath}/assets/img/img_osaka/osaka_tempel.webp`,
];

const cities = [
  { id: 'tokyo', name: 'Tokyo', images: tokyoImages },
  { id: 'kyoto', name: 'Kyoto', images: kyotoImages },
  { id: 'osaka', name: 'Osaka', images: osakaImages },
];

export default function Gallery() {
  return (
    <LayoutWrapper>
      <HeroDefault
        title="City Gallery"
        textLines={[
          'Willst du mehr über Japan erfahren?',
          'Diese Galerie zeigt dir faszinierende Eindrücke aus Japans schönsten Städten.',
        ]}
      />
       <div id="after-hero" />

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-30 bg-bgLight/80 dark:bg-bgDark/80 backdrop-blur-md border-b border-textLight/10 dark:border-textDark/10">
        <div className="max-w-7xl mx-auto flex gap-2 sm:gap-4 overflow-x-auto px-4 py-4">
          {cities.map((city) => (
            <Link
              key={city.id}
              href={`#${city.id}`}
              aria-label={`Zur Galerie von ${city.name}`}
              className="px-5 py-2 text-sm sm:text-base bg-accentLight dark:bg-accentDark text-white dark:text-bgDark rounded-full whitespace-nowrap hover:opacity-90 hover:scale-105 transition"
            >
              {city.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Galerie-Sektionen */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {cities.map((city, index) => (
          <motion.section
            id={city.id}
            key={city.id}
            className="py-32 scroll-mt-28"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-accentLight dark:text-accentDark">
              {city.name}
            </h2>
            <CityCarousel images={city.images} />
          </motion.section>
        ))}
      </div>
    </LayoutWrapper>
  );
}
