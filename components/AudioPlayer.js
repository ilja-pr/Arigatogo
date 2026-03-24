'use client';

import { useEffect, useRef, useState } from 'react';

export default function AudioPlayer({
  src,
  title,
  volume = 0.02,
  loop = true,
  showStatus = true,
  showMute = true, // Optional: extra Button
}) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [muted, setMuted] = useState(false);
  const fadeInterval = useRef(null);

  // Sanftes Fade-In
  const fadeInVolume = (targetVolume) => {
    let vol = 0.0;
    const audio = audioRef.current;

    clearInterval(fadeInterval.current);
    fadeInterval.current = setInterval(() => {
      if (!audio || muted) return;
      if (vol < targetVolume) {
        vol += 0.01;
        audio.volume = Math.min(vol, targetVolume);
      } else {
        clearInterval(fadeInterval.current);
      }
    }, 100);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.0;
    audio.loop = loop;
    audio.muted = muted;

    const startAudio = () => {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setBlocked(false);
          if (!muted) fadeInVolume(volume);
        })
        .catch(() => {
          setBlocked(true);
        });
    };

    startAudio();

    const tryPlay = () => startAudio();
    window.addEventListener('click', tryPlay, { once: true });

    return () => {
      window.removeEventListener('click', tryPlay);
      clearInterval(fadeInterval.current);
    };
  }, [src, volume, loop, muted]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      const newMuted = !muted;
      audio.muted = newMuted;
      setMuted(newMuted);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} preload="auto" />

      {/* Statusanzeige */}
      {showStatus && (
        <div className="fixed bottom-4 left-4 bg-accentLight dark:bg-accentDark text-white px-4 py-2 rounded shadow-lg z-50 text-sm flex items-center gap-2">
          {blocked ? (
            <span>🔇 Bitte klicken oder tippen, um Musik zu starten</span>
          ) : isPlaying ? (
            <span>
              {muted ? '🔇 Stummgeschaltet' : `🎵 Spielt: ${title || src?.split('/').pop()}`}
            </span>
          ) : (
            <span>⏸ Pausiert</span>
          )}
        </div>
      )}

      {/* Mute-/Unmute-Button */}
      {showMute && (
        <button
          onClick={toggleMute}
          className="fixed top-4 right-4 z-50 text-white bg-accentLight dark:bg-accentDark p-2 rounded-full shadow-lg hover:scale-105 transition"
          aria-label={muted ? 'Ton einschalten' : 'Ton ausschalten'}
        >
          {muted ? '🔇' : '🔊'}
        </button>
      )}
    </>
  );
}
