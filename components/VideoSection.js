'use client';

import { useRef, useEffect, useState } from 'react';

const VideoSection = ({
  videoSrc = '/assets/video/japan_hero.mp4',
  videoSrcMobile = null, // <- mobile Video optional
  title = 'Japan bewegt',
  description = 'Erlebe die Magie Japans in 60 Sekunden.',
}) => {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = desktopRef.current || mobileRef.current;
    if (video) {
      video.playbackRate = 1;
      const handleLoaded = () => setIsLoaded(true);
      video.addEventListener('loadeddata', handleLoaded);
      return () => video.removeEventListener('loadeddata', handleLoaded);
    }
  }, []);

  return (
    <section className="bg-bgLight dark:bg-bgDark py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-accentLight dark:text-accentDark">
          {title}
        </h2>
        <p className="mt-4 text-lg text-textLight dark:text-textDark opacity-80">
          {description}
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg border border-border dark:border-white/10 bg-black">
        {!isLoaded && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50">
            <div className="h-10 w-10 border-4 border-accentLight dark:border-accentDark border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Desktop Video */}
        <video
          ref={desktopRef}
          className="w-full h-auto hidden sm:block"
          autoPlay
          muted
          loop
          playsInline
          controls
        >
          <source src={videoSrc} type="video/mp4" />
          Dein Browser unterstützt dieses Videoformat nicht.
        </video>

        {/* Mobile Video */}
        {videoSrcMobile && (
          <video
            ref={mobileRef}
            className="w-full h-auto block sm:hidden"
            autoPlay
            muted
            loop
            playsInline
            controls
          >
            <source src={videoSrcMobile} type="video/mp4" />
            Dein Browser unterstützt dieses Videoformat nicht.
          </video>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
