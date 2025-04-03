import React from "react";
import { tinaField } from "tinacms/dist/react";
import type { DigitalTransformationBlocksCaseStudies } from "tina/__generated__/types";

interface CaseStudiesProps {
  data: DigitalTransformationBlocksCaseStudies;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ data }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p
            className="text-gray-600 mb-4"
            data-tina-field={tinaField(data, "caseStudiesHeadline")}
          >
            {data.caseStudiesHeadline ||
              "There are many variations News and artical Tired of managing too many things with too many trand artical?"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.studies?.slice(0, 2).map((study, index) => {
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm flex flex-col"
                data-tina-field={tinaField(data.studies?.[index])}
              >
                {/* Image */}
                <div
                  className="relative h-64 w-full"
                  data-tina-field={tinaField(study, "studyImage")}
                >
                  <img
                    src={
                      study?.studyImage ||
                      (index === 0
                        ? "/images/case-studies/workspace-laptop.jpg"
                        : "/images/case-studies/flowers-vases.jpg")
                    }
                    alt={study?.studyTitle || "Case study image"}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Author and date */}
                  <div className="mb-3 text-sm text-gray-500">
                    by {study?.studyAuthor || "Mahfuz Riad"}, on{" "}
                    {study?.studyPublishedDate || "August 25, 2020"}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold mb-2 text-gray-900"
                    data-tina-field={tinaField(study, "studyTitle")}
                  >
                    {study?.studyTitle ||
                      (index === 0
                        ? "Businesses Will Buy Down Risk With Defense"
                        : "Brian Mansfield joins StormBrands as Non-exec.")}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-gray-600 mb-4"
                    data-tina-field={tinaField(study, "studyDescription")}
                  >
                    {study?.studyDescription ||
                      (index === 0
                        ? "We proudly announce a new management structure with several new appointments..."
                        : "The appointment will provide valuable knowledge and experience to support the leadership team in growing the agencies...")}
                  </p>

                  {/* Read more link */}
                  <div className="mt-auto">
                    <a
                      href={`/case-studies/${study?.studyTitle
                        ?.toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="inline-flex items-center text-gray-600 hover:text-gray-900"
                    >
                      More <span className="ml-2">→</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
