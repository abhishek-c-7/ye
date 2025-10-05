import React from "react";
import { EmpowermentReasonsSection } from "./sections/EmpowermentReasonsSection";
import { FoundersJourneyMilestonesSection } from "./sections/FoundersJourneyMilestonesSection";
import { GuestExperiencesSection } from "./sections/GuestExperiencesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { TogetherSection } from "./sections/TogetherSection";
import { TogetherWeBuildBrighterFuturesSection } from "./sections/TogetherWeBuildBrighterFuturesSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="bg-[#12406f] w-full flex flex-col">
      <WhyChooseUsSection />
      <EmpowermentReasonsSection />
      <TestimonialsSection />
      <TogetherSection />
      <GuestExperiencesSection />
      <TogetherWeBuildBrighterFuturesSection />
      <FoundersJourneyMilestonesSection />
    </div>
  );
};
