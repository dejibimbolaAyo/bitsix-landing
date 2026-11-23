import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface EngineersForHireHowBitSixCtoHelpsProps {
  data: any;
}

const EngineersForHireHowBitSixCtoHelps: React.FC<EngineersForHireHowBitSixCtoHelpsProps> = ({ data }) => {
  return (
    <section className="site-section bg-paper">
      <div className="site-container">
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
              className="site-action"
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
