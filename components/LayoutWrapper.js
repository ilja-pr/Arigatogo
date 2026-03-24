'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import ScrollToTop from '@/components/ScrollToTop'; // <-- wichtig!

export default function LayoutWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const alreadyVisited = localStorage.getItem('visited');
    if (alreadyVisited) {
      setIsLoading(false);
    } else {
      const timer = setTimeout(() => setIsLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgLight dark:bg-bgDark text-textLight dark:text-textDark transition-colors duration-300">
      {isLoading && <Preloader />}
      {!isLoading && <ScrollToTop />} {/* <-- hier nur anzeigen wenn fertig */}
      <Navbar />
      <main className="flex-grow w-full">{children}</main>
      <Footer />
    </div>
  );
}
