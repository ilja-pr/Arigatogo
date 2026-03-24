'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ContentSection = ({
  id,
  image,
  title,
  text,
  reverse = false,
  buttonLink,
  buttonText = 'Mehr erfahren',
}) => {
  const isReversed = reverse ? 'lg:flex-row-reverse' : 'lg:flex-row';
  const bgColor = reverse ? 'bg-gray-200 dark:bg-black/20' : 'bg-bgLight dark:bg-bgDark';

  return (
    <section id={id} className={`${bgColor} w-full`}>
      <motion.div
        className={`max-w-7xl mx-auto flex flex-col ${isReversed} items-center gap-16 px-6 sm:px-10 md:px-20 py-24`}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Bild */}
        <motion.div
          className="w-full lg:w-1/2 relative h-80 md:h-[400px] xl:h-[480px]"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="overflow-hidden rounded-2xl w-full h-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-center rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={80}
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-accentLight dark:text-accentDark">
            {title}
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-textLight dark:text-textDark">
            {text}
          </p>

          {buttonLink && (
            <div className="pt-4">
              <Link href={buttonLink}>
                <motion.button
                  className="group inline-flex items-center gap-2 text-accentLight dark:text-accentDark font-semibold hover:gap-3 "
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {buttonText}
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </Link>
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContentSection;
