import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import { EngineersForHireBlocksEngineersForHireTestimonialsAndCaseStudies } from "@tina/__generated__/types";

interface EngineersForHireTestimonialsAndCaseStudiesProps {
  data: EngineersForHireBlocksEngineersForHireTestimonialsAndCaseStudies;
}

const EngineersForHireTestimonialsAndCaseStudies: React.FC<
  EngineersForHireTestimonialsAndCaseStudiesProps
> = ({ data }) => {
  return (
    <section className="px-8 py-12 lg:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {data.engineersForHireTestimonialsAndCaseStudiesTitle}
        </h2>
        {data.engineersForHireTestimonialsAndCaseStudiesSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">
            {data.engineersForHireTestimonialsAndCaseStudiesSubtitle}
          </h3>
        )}
        {data.engineersForHireTestimonialsAndCaseStudiesContent && (
          <div className="prose max-w-none">
            <TinaMarkdown
              content={data.engineersForHireTestimonialsAndCaseStudiesContent}
            />
          </div>
        )}
        {data.engineersForHireTestimonialsAndCaseStudiesImage && (
          <img
            src={data.engineersForHireTestimonialsAndCaseStudiesImage}
            alt={data.engineersForHireTestimonialsAndCaseStudiesTitle}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.engineersForHireTestimonialsAndCaseStudiesCtaText &&
          data.engineersForHireTestimonialsAndCaseStudiesCtaLink && (
            <div className="mt-8">
              <a
                href={data.engineersForHireTestimonialsAndCaseStudiesCtaLink}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                {data.engineersForHireTestimonialsAndCaseStudiesCtaText}
              </a>
            </div>
          )}
      </div>
    </section>
  );
};

export default EngineersForHireTestimonialsAndCaseStudies;
