import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface CaseStudiesCaseStudiesProps {
  data: any;
}

const CaseStudiesCaseStudies: React.FC<CaseStudiesCaseStudiesProps> = ({ data }) => {
  return (
    <section className="px-8 py-12 lg:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.caseStudiesCaseStudiesTitle}</h2>
        {data.caseStudiesCaseStudiesSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">{data.caseStudiesCaseStudiesSubtitle}</h3>
        )}
        {data.caseStudiesCaseStudiesContent && (
          <div className="prose max-w-none">
            <TinaMarkdown content={data.caseStudiesCaseStudiesContent} />
          </div>
        )}
        {data.caseStudiesCaseStudiesImage && (
          <img 
            src={data.caseStudiesCaseStudiesImage} 
            alt={data.caseStudiesCaseStudiesTitle}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.caseStudiesCaseStudiesCtaText && data.caseStudiesCaseStudiesCtaLink && (
          <div className="mt-8">
            <a 
              href={data.caseStudiesCaseStudiesCtaLink}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              {data.caseStudiesCaseStudiesCtaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesCaseStudies;
