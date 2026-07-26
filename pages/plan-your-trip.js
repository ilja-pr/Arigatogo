'use client';

import HeroDefault from '@/components/HeroDefault';
import StepGuide from '@/components/StepGuide';
import TripPlannerForm from '@/components/TripPlannerForm';

export default function Plan() {
  return (
    <>
        {/* HERO SECTION */}
        <HeroDefault
          title="Plane deine Reise"
          eyebrow="計画 · Planung"
          textLines={[
            'Erhalte in wenigen Schritten einen auf dich zugeschnittenen Reiseplan.',
            'Wähle Daten, Interessen und Stil – die AI kümmert sich um den Rest.',
          ]}
        />
        <div id="after-hero" />

        {/* STEP GUIDE */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 mt-24">
          <StepGuide />
        </section>

        {/* FORMULAR */}
        <section className="max-w-4xl mx-auto px-6 sm:px-10 mt-24 mb-32">
          <h2 className="heading-rule rule-center text-3xl sm:text-4xl mb-12 text-center mx-auto w-fit">
            Dein persönlicher Reiseplan
          </h2>
          <TripPlannerForm />
        </section>
      
    </>
  );
}
