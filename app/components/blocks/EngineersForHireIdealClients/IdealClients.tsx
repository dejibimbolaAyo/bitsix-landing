import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface EngineersForHireIdealClientsProps {
  data: any;
}

const EngineersForHireIdealClients: React.FC<EngineersForHireIdealClientsProps> = ({ data }) => {
  return (
    <section className="site-section bg-paper">
      <div className="site-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.engineersForHireIdealClientsTitle}</h2>
        {data.engineersForHireIdealClientsSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">{data.engineersForHireIdealClientsSubtitle}</h3>
        )}
        {data.engineersForHireIdealClientsContent && (
          <div className="prose max-w-none">
            <TinaMarkdown content={data.engineersForHireIdealClientsContent} />
          </div>
        )}
        {data.engineersForHireIdealClientsImage && (
          <img 
            src={data.engineersForHireIdealClientsImage} 
            alt={data.engineersForHireIdealClientsTitle}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.engineersForHireIdealClientsCtaText && data.engineersForHireIdealClientsCtaLink && (
          <div className="mt-8">
            <a 
              href={data.engineersForHireIdealClientsCtaLink}
              className="site-action"
            >
              {data.engineersForHireIdealClientsCtaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default EngineersForHireIdealClients;
