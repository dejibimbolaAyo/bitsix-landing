import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface CtoForHireHowBitSixCtoHelpsProps {
  data: any;
}

const CtoForHireHowBitSixCtoHelps: React.FC<CtoForHireHowBitSixCtoHelpsProps> = ({ data }) => {
  return (
    <section className="site-section bg-paper">
      <div className="site-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.ctoForHireHowBitSixCtoHelpsTitle}</h2>
        {data.ctoForHireHowBitSixCtoHelpsSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">{data.ctoForHireHowBitSixCtoHelpsSubtitle}</h3>
        )}
        {data.ctoForHireHowBitSixCtoHelpsContent && (
          <div className="prose max-w-none">
            <TinaMarkdown content={data.ctoForHireHowBitSixCtoHelpsContent} />
          </div>
        )}
        {data.ctoForHireHowBitSixCtoHelpsImage && (
          <img 
            src={data.ctoForHireHowBitSixCtoHelpsImage} 
            alt={data.ctoForHireHowBitSixCtoHelpsTitle}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.ctoForHireHowBitSixCtoHelpsCtaText && data.ctoForHireHowBitSixCtoHelpsCtaLink && (
          <div className="mt-8">
            <a 
              href={data.ctoForHireHowBitSixCtoHelpsCtaLink}
              className="site-action"
            >
              {data.ctoForHireHowBitSixCtoHelpsCtaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default CtoForHireHowBitSixCtoHelps;
