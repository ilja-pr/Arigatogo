import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#C4372F" />
        <meta
          name="description"
          content="Japan entdecken – Kultur, Natur, Geschichte und Reiseplanung auf Arigatogo.de."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500;600;700;800&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-bgLight text-textLight dark:bg-bgDark dark:text-textDark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
