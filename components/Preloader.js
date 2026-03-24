// components/Preloader.js
'use client';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const alreadyVisited = localStorage.getItem('visited');
    if (alreadyVisited) {
      setVisible(false);
      return;
    }

    const timeout = setTimeout(() => {
      setVisible(false);
      localStorage.setItem('visited', 'true');
    }, 2000); // Dauer in ms

    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-white dark:bg-bgDark z-50 flex items-center justify-center transition-opacity duration-500">
      <h1 className="text-4xl font-bold text-accentLight dark:text-accentDark animate-pulse">Arigato-Go 🇯🇵</h1>
    </div>
  );
}
