import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface CtoForHireIdealClientsProps {
  data: any;
}

const CtoForHireIdealClients: React.FC<CtoForHireIdealClientsProps> = ({ data }) => {
  return (
    <section className="site-section bg-paper">
      <div className="site-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.ctoForHireIdealClientsTitle}</h2>
        {data.ctoForHireIdealClientsSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">{data.ctoForHireIdealClientsSubtitle}</h3>
        )}
        {data.ctoForHireIdealClientsContent && (
          <div className="prose max-w-none">
            <TinaMarkdown content={data.ctoForHireIdealClientsContent} />
          </div>
        )}
        {data.ctoForHireIdealClientsImage && (
          <img 
            src={data.ctoForHireIdealClientsImage} 
            alt={data.ctoForHireIdealClientsTitle}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.ctoForHireIdealClientsCtaText && data.ctoForHireIdealClientsCtaLink && (
          <div className="mt-8">
            <a 
              href={data.ctoForHireIdealClientsCtaLink}
              className="site-action"
            >
              {data.ctoForHireIdealClientsCtaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default CtoForHireIdealClients;
