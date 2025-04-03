import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface CtoForHireIdealClientsProps {
  data: any;
}

const CtoForHireIdealClients: React.FC<CtoForHireIdealClientsProps> = ({ data }) => {
  return (
    <section className="px-8 py-12 lg:py-16">
      <div className="container mx-auto">
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
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
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
