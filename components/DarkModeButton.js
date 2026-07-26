'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeButton() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enabled = savedTheme === 'dark' || (!savedTheme && prefersDark);
    document.documentElement.classList.toggle('dark', enabled);
    setIsDark(enabled);
    setMounted(true);
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
      aria-label={isDark ? 'Zum hellen Modus wechseln' : 'Zum dunklen Modus wechseln'}
      className="flex items-center justify-center rounded-full p-2 text-textLight/70 dark:text-textDark/70 hover:text-accentLight dark:hover:text-accentDark hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
    >
      {/* Erst nach Mount rendern, damit Server & Client übereinstimmen */}
      {mounted && (isDark ? <Moon size={19} /> : <Sun size={19} />)}
    </button>
  );
}
