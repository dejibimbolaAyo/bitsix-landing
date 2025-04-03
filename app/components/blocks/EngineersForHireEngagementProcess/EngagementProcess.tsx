import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface EngineersForHireEngagementProcessProps {
  data: any;
}

const EngineersForHireEngagementProcess: React.FC<EngineersForHireEngagementProcessProps> = ({ data }) => {
  return (
    <section className="px-8 py-12 lg:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.engineersForHireEngagementProcessTitle}</h2>
        {data.engineersForHireEngagementProcessSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">{data.engineersForHireEngagementProcessSubtitle}</h3>
        )}
        {data.engineersForHireEngagementProcessContent && (
          <div className="prose max-w-none">
            <TinaMarkdown content={data.engineersForHireEngagementProcessContent} />
          </div>
        )}
        {data.engineersForHireEngagementProcessImage && (
          <img 
            src={data.engineersForHireEngagementProcessImage} 
            alt={data.engineersForHireEngagementProcessTitle}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.engineersForHireEngagementProcessCtaText && data.engineersForHireEngagementProcessCtaLink && (
          <div className="mt-8">
            <a 
              href={data.engineersForHireEngagementProcessCtaLink}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              {data.engineersForHireEngagementProcessCtaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default EngineersForHireEngagementProcess;
