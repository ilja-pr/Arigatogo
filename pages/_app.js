// pages/_app.js
import '@/styles/globals.css';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Shippori_Mincho, Zen_Kaku_Gothic_New } from 'next/font/google';
import LayoutWrapper from '@/components/LayoutWrapper';

// Fonts werden beim Build heruntergeladen und von der eigenen Domain
// ausgeliefert – keine Requests an Google-Server (DSGVO) und schneller.
const shippori = Shippori_Mincho({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className={`${shippori.variable} ${zenKaku.variable} app-root`}>
      {/* LayoutWrapper lebt hier: Navbar, Footer und Audio bleiben beim
          Seitenwechsel stehen – nur der Inhalt blendet weich ein. */}
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
    </div>
  );
}
