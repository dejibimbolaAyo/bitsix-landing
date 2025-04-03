import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface CtoForHireTestimonialsAndCaseStudiesProps {
  data: any;
}

const CtoForHireTestimonialsAndCaseStudies: React.FC<CtoForHireTestimonialsAndCaseStudiesProps> = ({ data }) => {
  return (
    <section className="px-8 py-12 lg:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.ctoForHireTestimonialsAndCaseStudiesTitle}</h2>
        {data.ctoForHireTestimonialsAndCaseStudiesSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">{data.ctoForHireTestimonialsAndCaseStudiesSubtitle}</h3>
        )}
        {data.ctoForHireTestimonialsAndCaseStudiesContent && (
          <div className="prose max-w-none">
            <TinaMarkdown content={data.ctoForHireTestimonialsAndCaseStudiesContent} />
          </div>
        )}
        {data.ctoForHireTestimonialsAndCaseStudiesImage && (
          <img 
            src={data.ctoForHireTestimonialsAndCaseStudiesImage} 
            alt={data.ctoForHireTestimonialsAndCaseStudiesTitle}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.ctoForHireTestimonialsAndCaseStudiesCtaText && data.ctoForHireTestimonialsAndCaseStudiesCtaLink && (
          <div className="mt-8">
            <a 
              href={data.ctoForHireTestimonialsAndCaseStudiesCtaLink}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              {data.ctoForHireTestimonialsAndCaseStudiesCtaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default CtoForHireTestimonialsAndCaseStudies;
