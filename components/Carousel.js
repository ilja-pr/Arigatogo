'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const testImage = '/assets/test.jpg'; // liegt in public/assets/

const slides = [
  { id: 1, title: 'Mount Fuji', subtitle: 'A symbol of peace and beauty' },
  { id: 2, title: 'Kyoto Temples', subtitle: 'Ancient tranquility in every step' },
  { id: 3, title: 'Tokyo Skyline', subtitle: 'Where tradition meets technology' },
  { id: 4, title: 'Peace Park', subtitle: 'A tribute to history and hope' },
  { id: 5, title: 'Osaka Castle', subtitle: 'A fortress of legacy' },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [hovering, setHovering] = useState(false);
  const slideInterval = useRef(null);

  useEffect(() => {
    const updateVisibleSlides = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleSlides(1);
      else if (width < 1024) setVisibleSlides(2);
      else setVisibleSlides(3);
    };
    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, []);

  useEffect(() => {
    if (!hovering) {
      slideInterval.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(slideInterval.current);
  }, [currentIndex, hovering, visibleSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + visibleSlides >= slides.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(slides.length - visibleSlides, 0) : prev - 1
    );
  };

  const getVisible = () =>
    slides.slice(currentIndex, currentIndex + visibleSlides);

  return (
    <div
      className="relative w-full max-w-7xl mx-auto px-4 py-16 group bg-bgLight dark:bg-bgDark transition-colors duration-300 rounded-2xl shadow-lg"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="flex gap-6 items-center transition-transform duration-1000 ease-in-out">
        {getVisible().map((slide, index) => {
          const middle = Math.floor(visibleSlides / 2);
          const isCenter = index === middle && visibleSlides > 1;

          return (
            <div
              key={slide.id}
              className={`flex-1 bg-bgLight dark:bg-bgDark text-textLight dark:text-textDark rounded-2xl overflow-hidden transform transition-transform duration-700 ease-in-out shadow-md ${
                isCenter
                  ? 'scale-105 z-10 shadow-2xl'
                  : visibleSlides > 1
                  ? 'scale-95 opacity-80'
                  : 'scale-100 opacity-100'
              }`}
            >
              <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80">
                <Image
                  src={testImage}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority={index === 0}
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-bold">{slide.title}</h2>
                <p className="text-sm mt-1 text-textLight dark:text-accentDark">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-accentLight dark:bg-accentDark text-white dark:text-bgDark p-3 rounded-full hover:scale-105 transition-all opacity-0 group-hover:opacity-100 z-20"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-accentLight dark:bg-accentDark text-white dark:text-bgDark p-3 rounded-full hover:scale-105 transition-all opacity-0 group-hover:opacity-100 z-20"
      >
        &#8594;
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: slides.length - visibleSlides + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full border border-accentLight dark:border-accentDark transition-all duration-300 ${
              i === currentIndex
                ? 'bg-accentLight dark:bg-accentDark scale-110'
                : 'bg-bgDark opacity-50'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
