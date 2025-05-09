import React from "react";


import CaseStudies from "@app/components/blocks/CaseStudies/caseStudies";
import ServiceContent from "@app/components/blocks/ServiceContent/serviceContent";
import SlimHero from "@app/components/blocks/SlimHero/slimHero";
import Testimonials from "@app/components/blocks/Testimonials/testimonials";
import type { DigitalTransformationQuery } from "tina/__generated__/types";

interface PageProps {
  data: DigitalTransformationQuery;
}

export const DigitalTransformationPage: React.FC<PageProps> = ({ data }) => {
  const digitalTransformation = data.digitalTransformation;

  const slimHero = digitalTransformation.blocks?.find(
    (block) => block?.__typename === "DigitalTransformationBlocksSlimHero"
  );
  const serviceContent = digitalTransformation.blocks?.find(
    (block) => block?.__typename === "DigitalTransformationBlocksServiceContent"
  );
  const caseStudies = digitalTransformation.blocks?.find(
    (block) => block?.__typename === "DigitalTransformationBlocksCaseStudies"
  );
  const testimonials = digitalTransformation.blocks?.find(
    (block) => block?.__typename === "DigitalTransformationBlocksTestimonials"
  );

  return (
    <div>
      {slimHero && <SlimHero data={slimHero} />}
      {serviceContent && <ServiceContent data={serviceContent} />}
      {caseStudies && <CaseStudies data={caseStudies} />}
      {testimonials && <Testimonials data={testimonials} />}
    </div>
  );
};

export default DigitalTransformationPage;
