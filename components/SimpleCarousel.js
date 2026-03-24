'use client';

import { useState } from 'react';

const images = [
  'https://via.placeholder.com/800x400?text=Tempel',
  'https://via.placeholder.com/800x400?text=Tokyo+Street',
  'https://via.placeholder.com/800x400?text=Kirschblüten',
];

const SimpleCarousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-xl">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-auto object-cover transition-all duration-500"
        loading="lazy"
      />

      {/* Navigation */}
      <button
        onClick={prevSlide}
        aria-label="Zurück"
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-accentLight dark:bg-accentDark text-white dark:text-bgDark rounded-full p-2 shadow hover:scale-105 transition"
      >
        ⟨
      </button>
      <button
        onClick={nextSlide}
        aria-label="Weiter"
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-accentLight dark:bg-accentDark text-white dark:text-bgDark rounded-full p-2 shadow hover:scale-105 transition"
      >
        ⟩
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition ${
              i === current
                ? 'bg-accentLight dark:bg-accentDark'
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SimpleCarousel;
