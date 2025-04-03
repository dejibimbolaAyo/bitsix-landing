import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface CtoForHireServicesOfferedProps {
  data: any;
}

const CtoForHireServicesOffered: React.FC<CtoForHireServicesOfferedProps> = ({ data }) => {
  return (
    <section className="px-8 py-12 lg:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.ctoForHireServicesOfferedTitle}</h2>
        {data.ctoForHireServicesOfferedSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">{data.ctoForHireServicesOfferedSubtitle}</h3>
        )}
        {data.ctoForHireServicesOfferedContent && (
          <div className="prose max-w-none">
            <TinaMarkdown content={data.ctoForHireServicesOfferedContent} />
          </div>
        )}
        {data.ctoForHireServicesOfferedImage && (
          <img 
            src={data.ctoForHireServicesOfferedImage} 
            alt={data.ctoForHireServicesOfferedTitle}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.ctoForHireServicesOfferedCtaText && data.ctoForHireServicesOfferedCtaLink && (
          <div className="mt-8">
            <a 
              href={data.ctoForHireServicesOfferedCtaLink}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              {data.ctoForHireServicesOfferedCtaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default CtoForHireServicesOffered;
