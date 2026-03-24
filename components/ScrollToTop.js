// ✅ components/ScrollToTop.js
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // kurze Verzögerung für sicheres Scrolling
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, 50); // optional: delay gegen race conditions

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
