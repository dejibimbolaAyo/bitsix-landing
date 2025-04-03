import React from "react";
import type { CtoForHireQuery } from "@tina/__generated__/types";

import CtoForHireHero from "@app/components/blocks/CtoForHireHero/Hero";
import CtoForHireWhyHireCto from "@app/components/blocks/CtoForHireWhyHireCto/WhyHireCto";
import CtoForHireHowBitSixCtoHelps from "@app/components/blocks/CtoForHireHowBitSixCtoHelps/HowBitSixCtoHelps";
import CtoForHireServicesOffered from "@app/components/blocks/CtoForHireServicesOffered/ServicesOffered";
import CtoForHireIdealClients from "@app/components/blocks/CtoForHireIdealClients/IdealClients";
import CtoForHireEngagementProcess from "@app/components/blocks/CtoForHireEngagementProcess/EngagementProcess";
import CtoForHireTestimonialsAndCaseStudies from "@app/components/blocks/CtoForHireTestimonialsAndCaseStudies/TestimonialsAndCaseStudies";

interface PageProps {
  data: CtoForHireQuery;
}

export const CtoForHirePage: React.FC<PageProps> = ({ data }) => {
  const page = data.ctoForHire;

  const Hero = page.blocks?.find(
    (block) => block?.__typename === "CtoForHireBlocksCtoForHireHero"
  );
  const WhyHireCto = page.blocks?.find(
    (block) => block?.__typename === "CtoForHireBlocksCtoForHireWhyHireCto"
  );
  const HowBitSixCtoHelps = page.blocks?.find(
    (block) => block?.__typename === "CtoForHireBlocksCtoForHireHowBitSixCtoHelps"
  );
  const ServicesOffered = page.blocks?.find(
    (block) => block?.__typename === "CtoForHireBlocksCtoForHireServicesOffered"
  );
  const IdealClients = page.blocks?.find(
    (block) => block?.__typename === "CtoForHireBlocksCtoForHireIdealClients"
  );
  const EngagementProcess = page.blocks?.find(
    (block) => block?.__typename === "CtoForHireBlocksCtoForHireEngagementProcess"
  );
  const TestimonialsAndCaseStudies = page.blocks?.find(
    (block) => block?.__typename === "CtoForHireBlocksCtoForHireTestimonialsAndCaseStudies"
  );

  return (
    <div>
      {Hero && <CtoForHireHero data={Hero} />}
      {WhyHireCto && <CtoForHireWhyHireCto data={WhyHireCto} />}
      {HowBitSixCtoHelps && <CtoForHireHowBitSixCtoHelps data={HowBitSixCtoHelps} />}
      {ServicesOffered && <CtoForHireServicesOffered data={ServicesOffered} />}
      {IdealClients && <CtoForHireIdealClients data={IdealClients} />}
      {EngagementProcess && <CtoForHireEngagementProcess data={EngagementProcess} />}
      {TestimonialsAndCaseStudies && <CtoForHireTestimonialsAndCaseStudies data={TestimonialsAndCaseStudies} />}
    </div>
  );
};

export default CtoForHirePage;