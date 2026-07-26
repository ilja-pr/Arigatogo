'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Volume2, VolumeX, Menu, X, ChevronDown } from 'lucide-react';
import DarkModeButton from './DarkModeButton';

const japanLinks = ['essen', 'geschichte', 'natur', 'tradition'];
const cityLinks = ['tokyo', 'kyoto', 'osaka'];
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const Navbar = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mobile-Menü bei Seitenwechsel schließen
  useEffect(() => setIsOpen(false), [pathname]);

  const linkClasses = (href) =>
    `text-[15px] transition-colors duration-200 ${
      pathname === href
        ? 'text-accentLight dark:text-accentDark font-semibold'
        : 'text-textLight/80 dark:text-textDark/80 hover:text-accentLight dark:hover:text-accentDark'
    }`;

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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? 'bg-bgLight/90 dark:bg-bgDark/90 shadow-[0_1px_0_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.06)]'
          : 'bg-bgLight/65 dark:bg-bgDark/65'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="block dark:hidden w-8 h-8">
              <img
                src={`${basePath}/assets/svg/Arigatogo_Logo_black.svg`}
                alt=""
                className="w-full h-full object-contain"
              />
            </span>
            <span className="hidden dark:block w-8 h-8">
              <img
                src={`${basePath}/assets/svg/Arigatogo_Logo_white.svg`}
                alt=""
                className="w-full h-full object-contain"
              />
            </span>
            <span
              className="text-2xl font-bold tracking-tight group-hover:text-accentLight dark:group-hover:text-accentDark transition-colors"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Arigatogo
            </span>
          </Link>

          {/* Desktop-Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/news" className={linkClasses('/news')}>News</Link>

            {/* Dropdown – Japan */}
            <div className="group relative">
              <Link href="/japan" className={`${linkClasses('/japan')} inline-flex items-center gap-1`}>
                Japan <ChevronDown size={14} className="mt-0.5 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-44 bg-bgLight dark:bg-paperDark rounded-xl shadow-xl ring-1 ring-black/5 dark:ring-white/10 p-3 flex flex-col gap-1">
                  {japanLinks.map((slug) => (
                    <Link
                      key={slug}
                      href={`/japan/${slug}`}
                      className={`${linkClasses(`/japan/${slug}`)} px-3 py-1.5 rounded-lg hover:bg-paper dark:hover:bg-white/5`}
                    >
                      {cap(slug)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/travel" className={linkClasses('/travel')}>Reisetipps</Link>

            {/* Dropdown – Städte */}
            <div className="group relative">
              <Link href="/gallery" className={`${linkClasses('/gallery')} inline-flex items-center gap-1`}>
                Städte <ChevronDown size={14} className="mt-0.5 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-44 bg-bgLight dark:bg-paperDark rounded-xl shadow-xl ring-1 ring-black/5 dark:ring-white/10 p-3 flex flex-col gap-1">
                  {cityLinks.map((city) => (
                    <Link
                      key={city}
                      href={`/citys/${city}`}
                      className={`${linkClasses(`/citys/${city}`)} px-3 py-1.5 rounded-lg hover:bg-paper dark:hover:bg-white/5`}
                    >
                      {cap(city)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/store" className={linkClasses('/store')}>Store</Link>
            <Link href="/about" className={linkClasses('/about')}>About</Link>

            <Link
              href="/plan-your-trip"
              className="bg-accentLight dark:bg-accentDark text-white dark:text-bgDark px-5 py-2 text-[15px] font-semibold rounded-full shadow-md shadow-accentLight/20 dark:shadow-accentDark/20 hover:shadow-lg hover:-translate-y-px transition-all duration-200"
            >
              Reise planen
            </Link>

            {/* Musik */}
            <button
              onClick={toggleAudio}
              className="text-textLight/70 dark:text-textDark/70 hover:text-accentLight dark:hover:text-accentDark transition-colors"
              aria-label={audioPlaying ? 'Musik ausschalten' : 'Musik einschalten'}
              title={audioPlaying ? 'Musik ausschalten' : 'Musik einschalten'}
            >
              {audioPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>

            <DarkModeButton />
          </div>

          {/* Mobile-Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <DarkModeButton />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-textLight dark:text-textDark hover:text-accentLight dark:hover:text-accentDark"
              aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile-Navigation */}
      {isOpen && (
        <div className="md:hidden bg-bgLight/95 dark:bg-bgDark/95 backdrop-blur-md border-t border-black/5 dark:border-white/5">
          <div className="px-6 pt-5 pb-8 flex flex-col gap-5 text-lg">
            <Link href="/news" className={linkClasses('/news')}>News</Link>

            <div>
              <Link href="/japan" className="text-sm font-semibold uppercase tracking-widest text-accentLight dark:text-accentDark">
                Japan
              </Link>
              <div className="flex flex-col mt-2 ml-3 gap-2.5">
                {japanLinks.map((slug) => (
                  <Link key={slug} href={`/japan/${slug}`} className={linkClasses(`/japan/${slug}`)}>
                    {cap(slug)}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/travel" className={linkClasses('/travel')}>Reisetipps</Link>

            <div>
              <Link href="/gallery" className="text-sm font-semibold uppercase tracking-widest text-accentLight dark:text-accentDark">
                Städte
              </Link>
              <div className="flex flex-col mt-2 ml-3 gap-2.5">
                {cityLinks.map((city) => (
                  <Link key={city} href={`/citys/${city}`} className={linkClasses(`/citys/${city}`)}>
                    {cap(city)}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/store" className={linkClasses('/store')}>Store</Link>
            <Link href="/about" className={linkClasses('/about')}>About</Link>

            <Link
              href="/plan-your-trip"
              className="text-center bg-accentLight dark:bg-accentDark text-white dark:text-bgDark px-6 py-3 rounded-full font-semibold shadow-md"
            >
              Reise planen
            </Link>

            <button
              onClick={toggleAudio}
              className="inline-flex items-center gap-2 text-textLight/70 dark:text-textDark/70 hover:text-accentLight dark:hover:text-accentDark transition-colors"
            >
              {audioPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
              {audioPlaying ? 'Musik an' : 'Musik aus'}
            </button>
          </div>
        </div>
      )}

      {/* Audio-Player */}
      <audio
        ref={audioRef}
        src={`${basePath}/assets/audio/audio_background.mp3`}
        preload="none"
        loop
      />
    </nav>
  );
};

export default Navbar;
