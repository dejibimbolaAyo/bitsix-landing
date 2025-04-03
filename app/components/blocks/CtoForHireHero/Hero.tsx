import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface CtoForHireHeroProps {
  data: any;
}

const CtoForHireHero: React.FC<CtoForHireHeroProps> = ({ data }) => {
  return (
    <section className="px-8 py-12 lg:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.ctoForHireHeroTitle}</h2>
        {data.ctoForHireHeroSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">{data.ctoForHireHeroSubtitle}</h3>
        )}
        {data.ctoForHireHeroContent && (
          <div className="prose max-w-none">
            <TinaMarkdown content={data.ctoForHireHeroContent} />
          </div>
        )}
        {data.ctoForHireHeroImage && (
          <img 
            src={data.ctoForHireHeroImage} 
            alt={data.ctoForHireHeroTitle}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.ctoForHireHeroCtaText && data.ctoForHireHeroCtaLink && (
          <div className="mt-8">
            <a 
              href={data.ctoForHireHeroCtaLink}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              {data.ctoForHireHeroCtaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default CtoForHireHero;
