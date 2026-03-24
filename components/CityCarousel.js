'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CityCarousel = ({ images = [] }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="rounded-2xl shadow-xl"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-2xl"
          >
            <Image
              src={img}
              alt={`Bild ${index + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              loading="lazy"
            />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CityCarousel;
