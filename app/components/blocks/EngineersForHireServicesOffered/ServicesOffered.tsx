import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface EngineersForHireServicesOfferedProps {
  data: any;
}

const EngineersForHireServicesOffered: React.FC<EngineersForHireServicesOfferedProps> = ({ data }) => {
  return (
    <section className="px-8 py-12 lg:py-16">
      <div className="container mx-auto">
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
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
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
