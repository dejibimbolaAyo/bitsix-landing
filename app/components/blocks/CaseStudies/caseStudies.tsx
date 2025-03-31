import React from "react";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { DigitalTransformationBlocksCaseStudies } from "tina/__generated__/types";

interface CaseStudiesProps {
  data: DigitalTransformationBlocksCaseStudies;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ data }) => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.studies?.map((study, index) => (
            <div
              key={index}
              className="bg-base-200 rounded-lg p-6"
              data-tina-field={tinaField(data.studies?.[index])}
            >
              <h3 className="text-xl font-bold mb-4">{study?.title}</h3>
              <p className="text-base-content/70 mb-4">{study?.description}</p>
              <div className="mt-4">
                <p className="font-semibold">{study?.clientName}</p>
                <p className="text-base-content/70">{study?.results}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
