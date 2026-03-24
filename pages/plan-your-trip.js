'use client';

import HeroDefault from '@/components/HeroDefault';
import LayoutWrapper from '@/components/LayoutWrapper';
import StepGuide from '@/components/StepGuide';
import TripPlannerForm from '@/components/TripPlannerForm';

export default function Plan() {
  return (
    <LayoutWrapper>
        {/* HERO SECTION */}
        <HeroDefault
          title="Plane deine Reise"
          textLines={[
            'Erhalte in wenigen Schritten einen auf dich zugeschnittenen Reiseplan.',
            'Wähle deine Daten, Städte und Interessen – unsere AI kümmert sich um den Rest!',
          ]}
        />
        <div id="after-hero" />

        {/* STEP GUIDE */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 mt-24">
          <StepGuide />
        </section>

        {/* FORMULAR */}
        <section className="max-w-4xl mx-auto px-6 sm:px-10 mt-24 mb-32">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-accentLight dark:text-accentDark text-center pb-4">
            Dein persönlicher Reiseplan
          </h2>
          <TripPlannerForm />
        </section>
      
    </LayoutWrapper>
  );
}
