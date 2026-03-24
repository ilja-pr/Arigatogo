'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DarkModeButton from './DarkModeButton';

const Navbar = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const [isOpen, setIsOpen] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef(null);
  const pathname = usePathname();

  const linkClasses = (href) =>
    pathname === href
      ? 'text-accentLight dark:text-accentDark font-semibold text-lg'
      : 'text-textLight dark:text-textDark hover:text-accentLight dark:hover:text-accentDark text-lg';

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setAudioPlaying(true);
    } else {
      audio.pause();
      setAudioPlaying(false);
    }
  };

  return (
    <nav className="bg-bgLight dark:bg-bgDark shadow-md fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
  {/* Logo: Dark & Light Mode Variante */}

            <span className="block dark:hidden w-8 h-8">
              <img
                src={`${basePath}/assets/svg/Arigatogo_Logo_black.svg`}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </span>
            <span className="hidden dark:block w-8 h-8">
              <img
                src={`${basePath}/assets/svg/Arigatogo_Logo_white.svg`}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </span>

  {/* Textlink */}
  <Link
    href="/"
    className="text-3xl font-bold text-accentLight dark:text-accentDark hover:opacity-80 transition"
  >
    Arigatogo
  </Link>
</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center relative">
            <Link href="/news" className={linkClasses('/news')}>
              News
            </Link>

            {/* Dropdown – Japan */}
            <div className="group relative">
              <Link href="/japan" className={linkClasses('/japan')}>
                Japan ▾
              </Link>
              <div className="absolute left-0 mt-3 w-44 bg-bgLight dark:bg-bgDark rounded-xl shadow-xl p-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out flex flex-col space-y-2 text-base">
                {['essen', 'geschichte', 'natur', 'tradition'].map((slug) => (
                  <Link
                    key={slug}
                    href={`/japan/${slug}`}
                    className={linkClasses(`/japan/${slug}`)}
                  >
                    {slug.charAt(0).toUpperCase() + slug.slice(1)}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/travel" className={linkClasses('/travel')}>
              Travel
            </Link>

            {/* Dropdown – Citys */}
            <div className="group relative">
              <Link href="/gallery" className={linkClasses('/gallery')}>
                Citys ▾
              </Link>
              <div className="absolute left-0 mt-3 w-44 bg-bgLight dark:bg-bgDark rounded-xl shadow-xl p-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out flex flex-col space-y-2 text-base">
                {['osaka', 'kyoto', 'tokyo'].map((city) => (
                  <Link
                    key={city}
                    href={`/citys/${city}`}
                    className={linkClasses(`/citys/${city}`)}
                  >
                    {city.charAt(0).toUpperCase() + city.slice(1)}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/store" className={linkClasses('/store')}>
              Store
            </Link>
            <Link href="/about" className={linkClasses('/about')}>
              About
            </Link>

            <Link
              href="/plan-your-trip"
              className="bg-accentLight dark:bg-accentDark text-white dark:text-bgDark px-6 py-2 text-base rounded-full hover:opacity-90 transition"
            >
              Plan Your Trip
            </Link>

            {/* 🎵 Musik-Button */}
            <button
              onClick={toggleAudio}
              className="text-textLight dark:text-textDark hover:text-accentLight dark:hover:text-accentDark text-2xl transition"
              title="Musik an/aus"
            >
              {audioPlaying ? '🎵' : '🔇'}
            </button>

            <DarkModeButton />
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <DarkModeButton />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-textLight dark:text-textDark hover:text-accentLight dark:hover:text-accentDark focus:outline-none"
            >
              <svg
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

{/* Mobile Navigation */}
{isOpen && (
  <div className="md:hidden bg-bgLight dark:bg-bgDark shadow-md transition-colors text-lg">
    <div className="px-4 pt-4 pb-6 space-y-5 flex flex-col">
      <Link href="/news" className={linkClasses('/news')}>
        News
      </Link>

      {/* Japan submenu */}
      <div className="border-t pt-3">
        <Link
          href="/japan"
          className="text-sm font-semibold text-accentLight dark:text-accentDark mb-2 hover:underline"
        >
          Japan
        </Link>
        <div className="flex flex-col ml-3 space-y-2">
          {['essen', 'geschichte', 'natur', 'tradition'].map((slug) => (
            <Link
              key={slug}
              href={`/japan/${slug}`}
              className={linkClasses(`/japan/${slug}`)}
            >
              {slug.charAt(0).toUpperCase() + slug.slice(1)}
            </Link>
          ))}
        </div>
      </div>

      <Link href="/travel" className={linkClasses('/travel')}>
        Travel
      </Link>

      {/* Citys submenu */}
      <div className="border-t pt-3">
        <Link
          href="/gallery"
          className="text-sm font-semibold text-accentLight dark:text-accentDark mb-2 hover:underline"
        >
          Citys
        </Link>
        <div className="flex flex-col ml-3 space-y-2">
          {['osaka', 'kyoto', 'tokyo'].map((city) => (
            <Link
              key={city}
              href={`/citys/${city}`}
              className={linkClasses(`/citys/${city}`)}
            >
              {city.charAt(0).toUpperCase() + city.slice(1)}
            </Link>
          ))}
        </div>
      </div>

      <Link href="/store" className={linkClasses('/store')}>
        Store
      </Link>
      <Link href="/about" className={linkClasses('/about')}>
        About
      </Link>

      <Link
        href="/plan-your-trip"
        className="block text-center bg-accentLight dark:bg-accentDark text-white dark:text-bgDark px-6 py-2 rounded-full hover:opacity-90 transition"
      >
        Plan Your Trip
      </Link>

      {/* Mobile Musik-Button */}
      <button
        onClick={toggleAudio}
        className="text-textLight dark:text-textDark hover:text-accentLight dark:hover:text-accentDark text-lg"
      >
        {audioPlaying ? '🎵 Musik an' : '🔇 Musik aus'}
      </button>
    </div>
  </div>
)}


      {/* 🎧 Audio Player */}
      <audio
        ref={audioRef}
        src={`${basePath}/assets/audio/audio_background.mp3`}
        preload="auto"
        loop
      />
    </nav>
  );
};

export default Navbar;
