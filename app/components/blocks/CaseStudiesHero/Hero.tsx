import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface CaseStudiesHeroProps {
  data: any;
}

const CaseStudiesHero: React.FC<CaseStudiesHeroProps> = ({ data }) => {
  return (
    <section className="px-8 py-12 lg:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.caseStudiesHeroTitle}</h2>
        {data.caseStudiesHeroSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">{data.caseStudiesHeroSubtitle}</h3>
        )}
        {data.caseStudiesHeroContent && (
          <div className="prose max-w-none">
            <TinaMarkdown content={data.caseStudiesHeroContent} />
          </div>
        )}
        {data.caseStudiesHeroImage && (
          <img 
            src={data.caseStudiesHeroImage} 
            alt={data.caseStudiesHeroTitle}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.caseStudiesHeroCtaText && data.caseStudiesHeroCtaLink && (
          <div className="mt-8">
            <a 
              href={data.caseStudiesHeroCtaLink}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              {data.caseStudiesHeroCtaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesHero;
