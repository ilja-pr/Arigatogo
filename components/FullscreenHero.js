'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const FullscreenHero = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Hintergrundbild */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Text im Vordergrund */}
      <motion.div
        className="relative z-10 text-center text-white px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
        <p className="mt-4 text-lg md:text-2xl">{subtitle}</p>
      </motion.div>

      {/* Scroll Pfeil */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </div>
  );
};

export default FullscreenHero;
