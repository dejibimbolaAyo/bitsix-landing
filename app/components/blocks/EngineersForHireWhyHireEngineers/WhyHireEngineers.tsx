import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import { Link } from "@remix-run/react";
import { EngineersForHireBlocksEngineersForHireWhyHireEngineers } from "@tina/__generated__/types";

interface EngineersForHireWhyHireEngineersProps {
  data: EngineersForHireBlocksEngineersForHireWhyHireEngineers;
}

const EngineersForHireWhyHireEngineers: React.FC<
  EngineersForHireWhyHireEngineersProps
> = ({ data }) => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {data.engineersForHireWhyHireEngineersImage && (
            <div className="lg:col-span-5 order-2 lg:order-1 relative w-full flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <img
                  data-tina-field={tinaField(
                    data,
                    "engineersForHireWhyHireEngineersImage"
                  )}
                  src={data.engineersForHireWhyHireEngineersImage}
                  alt={data.engineersForHireWhyHireEngineersTitle}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          )}

          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <h2
              data-tina-field={tinaField(
                data,
                "engineersForHireWhyHireEngineersTitle"
              )}
              className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4"
            >
              {data.engineersForHireWhyHireEngineersTitle}
            </h2>
            {data.engineersForHireWhyHireEngineersSubtitle && (
              <p
                data-tina-field={tinaField(
                  data,
                  "engineersForHireWhyHireEngineersSubtitle"
                )}
                className="text-lg text-blue-600 font-semibold mb-6"
              >
                {data.engineersForHireWhyHireEngineersSubtitle}
              </p>
            )}
            {data.engineersForHireWhyHireEngineersContent && (
              <div
                data-tina-field={tinaField(
                  data,
                  "engineersForHireWhyHireEngineersContent"
                )}
                className="prose prose-slate max-w-none text-slate-600 mb-8 leading-relaxed 
                  prose-ul:list-none prose-ul:pl-0 
                  prose-li:relative prose-li:pl-6 prose-li:mb-3
                  prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-[10px] 
                  prose-li:before:h-1.5 prose-li:before:w-1.5 prose-li:before:rounded-full 
                  prose-li:before:bg-blue-500"
              >
                <TinaMarkdown
                  content={data.engineersForHireWhyHireEngineersContent}
                />
              </div>
            )}
            {data.engineersForHireWhyHireEngineersCtaText &&
              data.engineersForHireWhyHireEngineersCtaLink && (
                <div className="mt-2">
                  <Link
                    to={data.engineersForHireWhyHireEngineersCtaLink}
                    className="btn btn-outline btn-primary shadow-sm hover:-translate-y-0.5 transform transition-all duration-200"
                  >
                    {data.engineersForHireWhyHireEngineersCtaText}
                  </Link>
                </div>
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineersForHireWhyHireEngineers;
