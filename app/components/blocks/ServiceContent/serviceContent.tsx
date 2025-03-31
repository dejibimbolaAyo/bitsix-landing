import React from "react";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { DigitalTransformationBlocksServiceContent } from "tina/__generated__/types";

interface ServiceContentProps {
  data: DigitalTransformationBlocksServiceContent;
}

const ServiceContent: React.FC<ServiceContentProps> = ({ data }) => {
  return (
    <section className="py-24 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            data-tina-field={tinaField(data, "headline")}
          >
            {data.headline}
          </h2>
          {data.description && (
            <div
              className="prose prose-lg mx-auto"
              data-tina-field={tinaField(data, "description")}
            >
              <TinaMarkdown content={data.description} />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.offerings?.map((offering, index) => (
            <div
              key={index}
              className="bg-base-200 rounded-lg p-6"
              data-tina-field={tinaField(data.offerings?.[index])}
            >
              <h3 className="text-xl font-bold mb-4">
                {offering?.offeringTitle}
              </h3>
              <p className="text-base-content/70">{offering?.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg mb-8">{data.partnerText}</p>
          {data.callToAction && (
            <div className="flex flex-col items-center gap-4">
              <p className="text-lg">{data.callToAction.text}</p>
              <a
                href={data.callToAction.buttonLink}
                className="btn btn-primary"
                data-tina-field={tinaField(data.callToAction, "buttonLink")}
              >
                {data.callToAction.buttonText}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceContent;
