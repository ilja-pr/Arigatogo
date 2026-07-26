'use client';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const alreadyVisited = localStorage.getItem('visited');
    if (alreadyVisited) {
      setVisible(false);
      return;
    }

    const fadeTimer = setTimeout(() => setFading(true), 1500);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      localStorage.setItem('visited', 'true');
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 bg-bgLight dark:bg-bgDark z-[60] flex flex-col items-center justify-center gap-4 transition-opacity duration-500 ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Hinomaru */}
      <div className="w-16 h-16 rounded-full bg-accentLight dark:bg-accentDark animate-pulse" />
      <h1
        className="text-3xl font-bold text-textLight dark:text-textDark tracking-wide"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Arigatogo
      </h1>
      <p className="text-sm text-inkSoft dark:text-textDark/50 tracking-[0.3em]">
        ようこそ日本へ
      </p>
    </div>
  );
}
