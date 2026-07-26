// pages/_app.js
import '@/styles/globals.css';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import LayoutWrapper from '@/components/LayoutWrapper';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    // LayoutWrapper lebt jetzt hier: Navbar, Footer und Audio bleiben beim
    // Seitenwechsel stehen – nur der Inhalt wird neu gerendert und blendet weich ein.
    <LayoutWrapper>
      <motion.div
        key={router.pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <Component {...pageProps} />
      </motion.div>
    </LayoutWrapper>
  );
}
