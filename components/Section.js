'use client';

import { motion } from 'framer-motion';

const Section = ({ title, text, backgroundImage, reverse = false }) => {
  return (
    <section
      className={`snap-start flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center min-h-screen relative`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />

      {/* Content */}
      <motion.div
        className="relative z-10 bg-black/60 p-8 m-4 rounded-xl max-w-2xl text-white backdrop-blur-sm shadow-2xl"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h2>

        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {text}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Section;
