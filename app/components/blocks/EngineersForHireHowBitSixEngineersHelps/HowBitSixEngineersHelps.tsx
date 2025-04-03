import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface EngineersForHireHowBitSixCtoHelpsProps {
  data: any;
}

const EngineersForHireHowBitSixCtoHelps: React.FC<EngineersForHireHowBitSixCtoHelpsProps> = ({ data }) => {
  return (
    <section className="px-8 py-12 lg:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.engineersForHireHowBitSixCtoHelpsTitle}</h2>
        {data.engineersForHireHowBitSixCtoHelpsSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">{data.engineersForHireHowBitSixCtoHelpsSubtitle}</h3>
        )}
        {data.engineersForHireHowBitSixCtoHelpsContent && (
          <div className="prose max-w-none">
            <TinaMarkdown content={data.engineersForHireHowBitSixCtoHelpsContent} />
          </div>
        )}
        {data.engineersForHireHowBitSixCtoHelpsImage && (
          <img 
            src={data.engineersForHireHowBitSixCtoHelpsImage} 
            alt={data.engineersForHireHowBitSixCtoHelpsTitle}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.engineersForHireHowBitSixCtoHelpsCtaText && data.engineersForHireHowBitSixCtoHelpsCtaLink && (
          <div className="mt-8">
            <a 
              href={data.engineersForHireHowBitSixCtoHelpsCtaLink}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              {data.engineersForHireHowBitSixCtoHelpsCtaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default EngineersForHireHowBitSixCtoHelps;
