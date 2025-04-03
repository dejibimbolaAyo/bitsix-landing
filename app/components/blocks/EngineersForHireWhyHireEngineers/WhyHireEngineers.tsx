import { EngineersForHireBlocksEngineersForHireWhyHireEngineers } from "@tina/__generated__/types";
import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface EngineersForHireWhyHireEngineersProps {
  data: EngineersForHireBlocksEngineersForHireWhyHireEngineers;
}

const EngineersForHireWhyHireEngineers: React.FC<
  EngineersForHireWhyHireEngineersProps
> = ({ data }) => {
  return (
    <section className="px-8 py-12 lg:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {data.engineersForHireWhyHireEngineersTitle}
        </h2>
        {data.engineersForHireWhyHireEngineersSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">
            {data.engineersForHireWhyHireEngineersSubtitle}
          </h3>
        )}
        {data.engineersForHireWhyHireEngineersContent && (
          <div className="prose max-w-none">
            <TinaMarkdown
              content={data.engineersForHireWhyHireEngineersContent}
            />
          </div>
        )}
        {data.engineersForHireWhyHireEngineersImage && (
          <img
            src={data.engineersForHireWhyHireEngineersImage}
            alt={data.engineersForHireWhyHireEngineersTitle}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.engineersForHireWhyHireEngineersCtaText &&
          data.engineersForHireWhyHireEngineersCtaLink && (
            <div className="mt-8">
              <a
                href={data.engineersForHireWhyHireEngineersCtaLink}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                {data.engineersForHireWhyHireEngineersCtaText}
              </a>
            </div>
          )}
      </div>
    </section>
  );
};

export default EngineersForHireWhyHireEngineers;
