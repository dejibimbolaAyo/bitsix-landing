import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface CaseStudiesFeaturedCaseStudiesProps {
  data: any;
}

const CaseStudiesFeaturedCaseStudies: React.FC<CaseStudiesFeaturedCaseStudiesProps> = ({ data }) => {
  return (
    <section className="px-8 py-12 lg:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.caseStudiesFeaturedCaseStudiesTitle}</h2>
        {data.caseStudiesFeaturedCaseStudiesSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">{data.caseStudiesFeaturedCaseStudiesSubtitle}</h3>
        )}
        {data.caseStudiesFeaturedCaseStudiesContent && (
          <div className="prose max-w-none">
            <TinaMarkdown content={data.caseStudiesFeaturedCaseStudiesContent} />
          </div>
        )}
        {data.caseStudiesFeaturedCaseStudiesImage && (
          <img 
            src={data.caseStudiesFeaturedCaseStudiesImage} 
            alt={data.caseStudiesFeaturedCaseStudiesTitle}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.caseStudiesFeaturedCaseStudiesCtaText && data.caseStudiesFeaturedCaseStudiesCtaLink && (
          <div className="mt-8">
            <a 
              href={data.caseStudiesFeaturedCaseStudiesCtaLink}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              {data.caseStudiesFeaturedCaseStudiesCtaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesFeaturedCaseStudies;
