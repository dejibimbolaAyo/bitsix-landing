import React from "react";


import EngineersForHireEngagementProcess from "@app/components/blocks/EngineersForHireEngagementProcess/EngagementProcess";
import EngineersForHireHero from "@app/components/blocks/EngineersForHireHero/hero";
import EngineersForHireHowBitSixEngineersHelps from "@app/components/blocks/EngineersForHireHowBitSixEngineersHelps/HowBitSixEngineersHelps";
import EngineersForHireIdealClients from "@app/components/blocks/EngineersForHireIdealClients/IdealClients";
import EngineersForHireServicesOffered from "@app/components/blocks/EngineersForHireServicesOffered/ServicesOffered";
import EngineersForHireTestimonialsAndCaseStudies from "@app/components/blocks/EngineersForHireTestimonialsAndCaseStudies/TestimonialsAndCaseStudies";
import EngineersForHireWhyHireEngineers from "@app/components/blocks/EngineersForHireWhyHireEngineers/WhyHireEngineers";
import type { EngineersForHireQuery } from "@tina/__generated__/types";

interface PageProps {
  data: EngineersForHireQuery;
}

export const EngineersForHirePage: React.FC<PageProps> = ({ data }) => {
  const page = data.engineersForHire;

  const hero = page.blocks?.find(
    (block) =>
      block?.__typename === "EngineersForHireBlocksEngineersForHireHero"
  );
  const WhyHireEngineers = page.blocks?.find(
    (block) =>
      block?.__typename ===
      "EngineersForHireBlocksEngineersForHireWhyHireEngineers"
  );
  const HowBitSixEngineersHelps = page.blocks?.find(
    (block) =>
      block?.__typename ===
      "EngineersForHireBlocksEngineersForHireHowBitSixEngineersHelps"
  );
  const ServicesOffered = page.blocks?.find(
    (block) =>
      block?.__typename ===
      "EngineersForHireBlocksEngineersForHireServicesOffered"
  );
  const IdealClients = page.blocks?.find(
    (block) =>
      block?.__typename === "EngineersForHireBlocksEngineersForHireIdealClients"
  );
  const EngagementProcess = page.blocks?.find(
    (block) =>
      block?.__typename ===
      "EngineersForHireBlocksEngineersForHireEngagementProcess"
  );
  const TestimonialsAndCaseStudies = page.blocks?.find(
    (block) =>
      block?.__typename ===
      "EngineersForHireBlocksEngineersForHireTestimonialsAndCaseStudies"
  );

  return (
    <div>
      {hero && <EngineersForHireHero data={hero} />}
      {WhyHireEngineers && (
        <EngineersForHireWhyHireEngineers data={WhyHireEngineers} />
      )}
      {HowBitSixEngineersHelps && (
        <EngineersForHireHowBitSixEngineersHelps
          data={HowBitSixEngineersHelps}
        />
      )}
      {ServicesOffered && (
        <EngineersForHireServicesOffered data={ServicesOffered} />
      )}
      {IdealClients && <EngineersForHireIdealClients data={IdealClients} />}
      {EngagementProcess && (
        <EngineersForHireEngagementProcess data={EngagementProcess} />
      )}
      {TestimonialsAndCaseStudies && (
        <EngineersForHireTestimonialsAndCaseStudies
          data={TestimonialsAndCaseStudies}
        />
      )}
    </div>
  );
};

export default EngineersForHirePage;
