'use client';

export default function Datenschutz() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
      <p className="text-sm font-medium tracking-[0.3em] uppercase text-accentLight dark:text-accentDark mb-3">
        Rechtliches
      </p>
      <h1 className="heading-rule text-4xl mb-10">Datenschutzerklärung</h1>

      <div className="space-y-8 text-[15px] leading-relaxed text-textLight/90 dark:text-textDark/85">
        <div>
          <h2 className="text-lg font-bold mb-2">1. Verantwortlicher</h2>
          {/* TODO: Eigene Daten eintragen (identisch zum Impressum) */}
          <p>
            [Vorname Nachname], [Straße Hausnummer], [PLZ Ort], E-Mail: [deine@email.de]
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">2. Hosting (Vercel)</h2>
          <p>
            Diese Website wird bei Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723, USA)
            gehostet. Beim Aufruf der Seite verarbeitet Vercel technisch notwendige Daten wie
            IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite und Browser-Informationen
            (Server-Logfiles). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
            am sicheren und stabilen Betrieb der Website). Weitere Informationen:{' '}
            <a href="https://vercel.com/legal/privacy-policy" className="text-accentLight dark:text-accentDark underline" target="_blank" rel="noopener noreferrer">
              vercel.com/legal/privacy-policy
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">3. Schriftarten</h2>
          <p>
            Die verwendeten Schriftarten werden lokal von dieser Website ausgeliefert.
            Es findet keine Verbindung zu Servern von Google statt.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">4. AI-Reiseplaner (Google Gemini)</h2>
          <p>
            Wenn du den Reiseplaner nutzt, werden die von dir eingegebenen Angaben
            (Reisezeitraum, Interessen, Reisetyp, Reisestil, Budget) über unseren Server an die
            Google Gemini API (Google Ireland Limited / Google LLC, USA) übermittelt, um den
            Reiseplan zu erstellen. Es werden dabei keine Namens- oder Kontaktdaten übertragen.
            Die Nutzung ist freiwillig; Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
            (Bereitstellung der angefragten Funktion). Weitere Informationen:{' '}
            <a href="https://policies.google.com/privacy" className="text-accentLight dark:text-accentDark underline" target="_blank" rel="noopener noreferrer">
              policies.google.com/privacy
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">5. Lokale Speicherung (localStorage)</h2>
          <p>
            Diese Website speichert ausschließlich auf deinem Gerät (localStorage): die
            Darstellungseinstellung (Hell/Dunkel), ob die Startanimation bereits gezeigt wurde
            und den Inhalt des Demo-Warenkorbs. Diese Daten verlassen dein Gerät nicht und
            können jederzeit über die Browser-Einstellungen gelöscht werden. Es werden keine
            Tracking-Cookies gesetzt und keine Analyse-Tools eingesetzt.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">6. Kontaktformular</h2>
          <p>
            Das Kontaktformular auf der About-Seite ist eine Demo und versendet derzeit
            keine Daten.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">7. Deine Rechte</h2>
          <p>
            Du hast nach der DSGVO das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch.
            Wende dich dazu an die oben genannte Kontaktadresse. Außerdem besteht ein
            Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde.
          </p>
        </div>

        <p className="text-xs text-inkSoft/70 dark:text-textDark/40 pt-4">
          Stand: Juli 2026 · Diese Vorlage wurde nach bestem Wissen für dieses Projekt
          erstellt und ersetzt keine Rechtsberatung.
        </p>
      </div>
    </section>
  );
}
