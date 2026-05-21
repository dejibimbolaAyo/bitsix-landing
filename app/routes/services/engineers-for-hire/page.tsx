import React from "react";

import EngineersForHireEngagementProcess from "@app/components/blocks/EngineersForHireEngagementProcess/EngagementProcess";
import EngineersForHireHero from "@app/components/blocks/EngineersForHireHero/hero";
import EngineersForHireTestimonialsAndCaseStudies from "@app/components/blocks/EngineersForHireTestimonialsAndCaseStudies/TestimonialsAndCaseStudies";
import EngineersForHireWhyHireEngineers from "@app/components/blocks/EngineersForHireWhyHireEngineers/WhyHireEngineers";
import type {
  EngineersForHireQuery,
  EngineersForHireBlocksEngineersForHireHero,
  EngineersForHireBlocksEngineersForHireWhyHireEngineers,
  EngineersForHireBlocksEngineersForHireTestimonialsAndCaseStudies,
  EngineersForHireBlocksEngineersForHireEngagementProcess,
} from "@tina/__generated__/types";

interface PageProps {
  data: EngineersForHireQuery;
}

export const EngineersForHirePage: React.FC<PageProps> = ({ data }) => {
  const page = data.engineersForHire;

  const Hero = page.blocks?.find(
    (block) => block?.__typename === "EngineersForHireBlocksEngineersForHireHero"
  ) as EngineersForHireBlocksEngineersForHireHero | undefined;
  const WhyHireEngineers = page.blocks?.find(
    (block) =>
      block?.__typename ===
      "EngineersForHireBlocksEngineersForHireWhyHireEngineers"
  ) as EngineersForHireBlocksEngineersForHireWhyHireEngineers | undefined;
  const TestimonialsAndCaseStudies = page.blocks?.find(
    (block) =>
      block?.__typename ===
      "EngineersForHireBlocksEngineersForHireTestimonialsAndCaseStudies"
  ) as EngineersForHireBlocksEngineersForHireTestimonialsAndCaseStudies | undefined;
  const EngagementProcess = page.blocks?.find(
    (block) =>
      block?.__typename ===
      "EngineersForHireBlocksEngineersForHireEngagementProcess"
  ) as EngineersForHireBlocksEngineersForHireEngagementProcess | undefined;

  return (
    <div>
      {Hero && <EngineersForHireHero data={Hero} />}
      {WhyHireEngineers && (
        <EngineersForHireWhyHireEngineers data={WhyHireEngineers} />
      )}
      {TestimonialsAndCaseStudies && (
        <EngineersForHireTestimonialsAndCaseStudies
          data={TestimonialsAndCaseStudies}
        />
      )}
      {EngagementProcess && (
        <EngineersForHireEngagementProcess data={EngagementProcess} />
      )}
    </div>
  );
};

export default EngineersForHirePage;
