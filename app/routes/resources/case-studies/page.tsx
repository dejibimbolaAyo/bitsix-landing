import React from "react";

import CaseStudiesCaseStudies from "@app/components/blocks/CaseStudiesCaseStudies/CaseStudies";
import CaseStudiesFeaturedCaseStudies from "@app/components/blocks/CaseStudiesFeaturedCaseStudies/FeaturedCaseStudies";
import CaseStudiesHero from "@app/components/blocks/CaseStudiesHero/Hero";
import type { CaseStudiesQuery } from "@tina/__generated__/types";


interface PageProps {
  data: CaseStudiesQuery;
}

export const CaseStudiesPage: React.FC<PageProps> = ({ data }) => {
  const page = data.caseStudies;

  const Hero = page.blocks?.find(
    (block) => block?.__typename === "CaseStudiesBlocksCaseStudiesHero"
  );
  const FeaturedCaseStudies = page.blocks?.find(
    (block) => block?.__typename === "CaseStudiesBlocksCaseStudiesFeaturedCaseStudies"
  );
  const CaseStudies = page.blocks?.find(
    (block) => block?.__typename === "CaseStudiesBlocksCaseStudiesCaseStudies"
  );

  return (
    <div>
      {Hero && <CaseStudiesHero data={Hero} />}
      {FeaturedCaseStudies && <CaseStudiesFeaturedCaseStudies data={FeaturedCaseStudies} />}
      {CaseStudies && <CaseStudiesCaseStudies data={CaseStudies} />}
    </div>
  );
};

export default CaseStudiesPage;