import React from "react";

import CtoForHireEngagementProcess from "@app/components/blocks/CtoForHireEngagementProcess/EngagementProcess";
import CtoForHireHero from "@app/components/blocks/CtoForHireHero/Hero";
import CtoForHireTestimonialsAndCaseStudies from "@app/components/blocks/CtoForHireTestimonialsAndCaseStudies/TestimonialsAndCaseStudies";
import CtoForHireWhyHireCto from "@app/components/blocks/CtoForHireWhyHireCto/WhyHireCto";
import type {
  CtoForHireQuery,
  CtoForHireBlocksCtoForHireHero,
  CtoForHireBlocksCtoForHireWhyHireCto,
  CtoForHireBlocksCtoForHireTestimonialsAndCaseStudies,
  CtoForHireBlocksCtoForHireEngagementProcess,
} from "@tina/__generated__/types";

interface PageProps {
  data: CtoForHireQuery;
}

export const CtoForHirePage: React.FC<PageProps> = ({ data }) => {
  const page = data.ctoForHire;

  const Hero = page.blocks?.find(
    (block) => block?.__typename === "CtoForHireBlocksCtoForHireHero"
  ) as CtoForHireBlocksCtoForHireHero | undefined;
  const WhyHireCto = page.blocks?.find(
    (block) => block?.__typename === "CtoForHireBlocksCtoForHireWhyHireCto"
  ) as CtoForHireBlocksCtoForHireWhyHireCto | undefined;
  const TestimonialsAndCaseStudies = page.blocks?.find(
    (block) =>
      block?.__typename ===
      "CtoForHireBlocksCtoForHireTestimonialsAndCaseStudies"
  ) as CtoForHireBlocksCtoForHireTestimonialsAndCaseStudies | undefined;
  const EngagementProcess = page.blocks?.find(
    (block) =>
      block?.__typename === "CtoForHireBlocksCtoForHireEngagementProcess"
  ) as CtoForHireBlocksCtoForHireEngagementProcess | undefined;

  return (
    <div>
      {Hero && <CtoForHireHero data={Hero} />}
      {WhyHireCto && <CtoForHireWhyHireCto data={WhyHireCto} />}
      {TestimonialsAndCaseStudies && (
        <CtoForHireTestimonialsAndCaseStudies
          data={TestimonialsAndCaseStudies}
        />
      )}
      {EngagementProcess && (
        <CtoForHireEngagementProcess data={EngagementProcess} />
      )}
    </div>
  );
};

export default CtoForHirePage;
