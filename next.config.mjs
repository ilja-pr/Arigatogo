/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'images.unsplash.com',   // falls du externe Bilder nutzt
      'cdn.pixabay.com',       // Beispiel – hier kannst du weitere erlaubte Domains eintragen
      'yourdomain.com'         // falls du ein eigenes CDN hast
    ],
  },

  env: {
    NEXT_PUBLIC_GEMINI_API_KEY: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
  },
};

export default nextConfig;
