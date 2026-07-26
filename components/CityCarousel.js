'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Versucht, aus dem Bildpfad den Städtenamen abzuleiten (img_tokyo/... → Tokyo)
const cityFromPath = (path) => {
  const match = path?.match(/img_(tokyo|kyoto|osaka)/i);
  return match ? match[1].charAt(0).toUpperCase() + match[1].slice(1) : null;
};

const CityCarousel = ({ images = [], labels = [] }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={24}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="!pb-12"
    >
      {images.map((img, index) => {
        const label = labels[index] ?? cityFromPath(img);
        return (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.18), ease: 'easeOut' }}
              viewport={{ once: true }}
              className="group relative w-full h-[320px] sm:h-[380px] md:h-[420px] overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10 shadow-lg shadow-black/10 dark:shadow-black/40"
            >
              <Image
                src={img}
                alt={label ?? `Impression ${index + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              {/* Verlauf + Label */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
              {label && (
                <span
                  className="absolute bottom-5 left-6 text-white text-2xl font-bold drop-shadow-lg"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {label}
                </span>
              )}
            </motion.div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CityCarousel;
