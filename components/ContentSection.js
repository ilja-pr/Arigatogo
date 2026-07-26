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
  eyebrow,           // optional: kleines Label über der Überschrift, z. B. "文化"
}) => {
  const isReversed = reverse ? 'lg:flex-row-reverse' : 'lg:flex-row';
  const bgColor = reverse ? 'bg-paper dark:bg-paperDark' : 'bg-bgLight dark:bg-bgDark';

  return (
    <section id={id} className={`${bgColor} w-full transition-colors duration-300`}>
      <motion.div
        className={`max-w-7xl mx-auto flex flex-col ${isReversed} items-center gap-12 lg:gap-20 px-6 sm:px-10 md:px-16 py-20 md:py-28`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.15, margin: '0px 0px -60px 0px' }}
      >
        {/* Bild */}
        <motion.div
          className="w-full lg:w-1/2 relative h-80 md:h-[420px] xl:h-[500px]"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="overflow-hidden rounded-2xl w-full h-full shadow-xl shadow-black/10 dark:shadow-black/40 ring-1 ring-black/5 dark:ring-white/10">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={80}
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left space-y-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          viewport={{ once: true, amount: 0.15, margin: '0px 0px -60px 0px' }}
        >
          {eyebrow && (
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-accentLight dark:text-accentDark">
              {eyebrow}
            </p>
          )}

          <h2 className="heading-rule rule-responsive text-3xl sm:text-4xl xl:text-5xl leading-tight mx-auto lg:mx-0">
            {title}
          </h2>

          {(Array.isArray(text) ? text : [text]).map((paragraph, i) => (
            <p key={i} className="text-lg sm:text-xl leading-relaxed text-inkSoft dark:text-textDark/70">
              {paragraph}
            </p>
          ))}

          {buttonLink && (
            <div className="pt-2">
              <Link
                href={buttonLink}
                className="group inline-flex items-center gap-2 text-accentLight dark:text-accentDark font-semibold hover:gap-3 transition-all"
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
              </Link>
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContentSection;
