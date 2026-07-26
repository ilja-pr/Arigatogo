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
      </Head>
      <body className="bg-bgLight text-textLight dark:bg-bgDark dark:text-textDark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
