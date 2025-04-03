import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface CtoForHireEngagementProcessProps {
  data: any;
}

const CtoForHireEngagementProcess: React.FC<CtoForHireEngagementProcessProps> = ({ data }) => {
  return (
    <section className="px-8 py-12 lg:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.ctoForHireEngagementProcessTitle}</h2>
        {data.ctoForHireEngagementProcessSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">{data.ctoForHireEngagementProcessSubtitle}</h3>
        )}
        {data.ctoForHireEngagementProcessContent && (
          <div className="prose max-w-none">
            <TinaMarkdown content={data.ctoForHireEngagementProcessContent} />
          </div>
        )}
        {data.ctoForHireEngagementProcessImage && (
          <img 
            src={data.ctoForHireEngagementProcessImage} 
            alt={data.ctoForHireEngagementProcessTitle}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.ctoForHireEngagementProcessCtaText && data.ctoForHireEngagementProcessCtaLink && (
          <div className="mt-8">
            <a 
              href={data.ctoForHireEngagementProcessCtaLink}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              {data.ctoForHireEngagementProcessCtaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default CtoForHireEngagementProcess;
