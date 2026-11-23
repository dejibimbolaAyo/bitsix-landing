import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface EngineersForHireServicesOfferedProps {
  data: any;
}

const EngineersForHireServicesOffered: React.FC<EngineersForHireServicesOfferedProps> = ({ data }) => {
  return (
    <section className="site-section bg-paper">
      <div className="site-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.engineersForHireServicesOfferedTitle}</h2>
        {data.engineersForHireServicesOfferedSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">{data.engineersForHireServicesOfferedSubtitle}</h3>
        )}
        {data.engineersForHireServicesOfferedContent && (
          <div className="prose max-w-none">
            <TinaMarkdown content={data.engineersForHireServicesOfferedContent} />
          </div>
        )}
        {data.engineersForHireServicesOfferedImage && (
          <img 
            src={data.engineersForHireServicesOfferedImage} 
            alt={data.engineersForHireServicesOfferedTitle}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.engineersForHireServicesOfferedCtaText && data.engineersForHireServicesOfferedCtaLink && (
          <div className="mt-8">
            <a 
              href={data.engineersForHireServicesOfferedCtaLink}
              className="site-action"
            >
              {data.engineersForHireServicesOfferedCtaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default EngineersForHireServicesOffered;
