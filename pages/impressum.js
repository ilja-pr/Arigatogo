'use client';

export default function Impressum() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
      <p className="text-sm font-medium tracking-[0.3em] uppercase text-accentLight dark:text-accentDark mb-3">
        Rechtliches
      </p>
      <h1 className="heading-rule text-4xl mb-10">Impressum</h1>

      <div className="space-y-8 text-[15px] leading-relaxed text-textLight/90 dark:text-textDark/85">
        <div>
          <h2 className="text-lg font-bold mb-2">Angaben gemäß § 5 DDG</h2>
          {/* TODO: Eigene Daten eintragen */}
          <p>
            [Vorname Nachname]<br />
            [Straße Hausnummer]<br />
            [PLZ Ort]<br />
            Deutschland
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Kontakt</h2>
          <p>
            E-Mail: [deine@email.de]
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Hinweis zum Projekt</h2>
          <p>
            Arigatogo ist ein nicht-kommerzielles Studien- und Portfolio-Projekt.
            Der enthaltene Store ist eine Demo – es werden keine Waren verkauft
            und keine Zahlungen abgewickelt.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Haftung für Links</h2>
          <p>
            Diese Seite kann Links zu externen Websites enthalten, auf deren Inhalte
            wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets
            der jeweilige Anbieter verantwortlich.
          </p>
        </div>
      </div>
    </section>
  );
}
