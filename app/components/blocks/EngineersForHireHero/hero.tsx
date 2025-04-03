import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface EngineersForHireHeroProps {
  data: any;
}

const EngineersForHireHero: React.FC<EngineersForHireHeroProps> = ({ data }) => {
  return (
    <section className="px-8 py-12 lg:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.engineersForHireHeroTitle}</h2>
        {data.engineersForHireHeroSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">{data.engineersForHireHeroSubtitle}</h3>
        )}
        {data.engineersForHireHeroContent && (
          <div className="prose max-w-none">
            <TinaMarkdown content={data.engineersForHireHeroContent} />
          </div>
        )}
        {data.engineersForHireHeroImage && (
          <img 
            src={data.engineersForHireHeroImage} 
            alt={data.engineersForHireHeroTitle}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.engineersForHireHeroCtaText && data.engineersForHireHeroCtaLink && (
          <div className="mt-8">
            <a 
              href={data.engineersForHireHeroCtaLink}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              {data.engineersForHireHeroCtaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default EngineersForHireHero;
