import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#63A4B5" />
        <meta name="description" content="Japan entdecken – Kultur, Natur, Geschichte und Reiseplanung auf Arigatogo.de." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
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
