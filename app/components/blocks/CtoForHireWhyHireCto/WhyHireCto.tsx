import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface CtoForHireWhyHireCtoProps {
  data: any;
}

const CtoForHireWhyHireCto: React.FC<CtoForHireWhyHireCtoProps> = ({ data }) => {
  return (
    <section className="px-8 py-12 lg:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.ctoForHireWhyHireCtoTitle}</h2>
        {data.ctoForHireWhyHireCtoSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">{data.ctoForHireWhyHireCtoSubtitle}</h3>
        )}
        {data.ctoForHireWhyHireCtoContent && (
          <div className="prose max-w-none">
            <TinaMarkdown content={data.ctoForHireWhyHireCtoContent} />
          </div>
        )}
        {data.ctoForHireWhyHireCtoImage && (
          <img 
            src={data.ctoForHireWhyHireCtoImage} 
            alt={data.ctoForHireWhyHireCtoTitle}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.ctoForHireWhyHireCtoCtaText && data.ctoForHireWhyHireCtoCtaLink && (
          <div className="mt-8">
            <a 
              href={data.ctoForHireWhyHireCtoCtaLink}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              {data.ctoForHireWhyHireCtoCtaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default CtoForHireWhyHireCto;
