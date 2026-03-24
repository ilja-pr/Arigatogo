'use client';

import { useEffect, useState } from 'react';

export default function DarkModeButton() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Auf Server kein window → bei Client prüfen
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const enabled = savedTheme === 'dark' || (!savedTheme && prefersDark);
    document.documentElement.classList.toggle('dark', enabled);
    setIsDark(enabled);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);

    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle Dark Mode"
      className="flex items-center justify-center rounded-full bg-bgLight dark:bg-bgDark p-2 text-sm font-medium text-textLight dark:text-textDark hover:bg-accentLight dark:hover:bg-accentDark hover:text-white transition"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
}
