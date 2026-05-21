import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import { Link } from "@remix-run/react";
import { EngineersForHireBlocksEngineersForHireHero } from "@tina/__generated__/types";

interface EngineersForHireHeroProps {
  data: EngineersForHireBlocksEngineersForHireHero;
}

const EngineersForHireHero: React.FC<EngineersForHireHeroProps> = ({
  data,
}) => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100/50 border-b border-gray-100">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-400/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-6 border border-blue-100">
              Services &bull; Engineers for Hire
            </span>
            <h1
              data-tina-field={tinaField(data, "engineersForHireHeroTitle")}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6"
            >
              {data.engineersForHireHeroTitle}
            </h1>
            {data.engineersForHireHeroSubtitle && (
              <p
                data-tina-field={tinaField(data, "engineersForHireHeroSubtitle")}
                className="text-xl text-slate-600 font-medium mb-8 leading-relaxed"
              >
                {data.engineersForHireHeroSubtitle}
              </p>
            )}
            {data.engineersForHireHeroContent && (
              <div
                data-tina-field={tinaField(data, "engineersForHireHeroContent")}
                className="prose prose-slate max-w-none text-slate-600 mb-8 leading-relaxed prose-p:mb-4"
              >
                <TinaMarkdown content={data.engineersForHireHeroContent} />
              </div>
            )}
            {data.engineersForHireHeroCtaText && data.engineersForHireHeroCtaLink && (
              <div className="flex flex-wrap gap-4">
                <Link
                  to={data.engineersForHireHeroCtaLink}
                  className="btn btn-primary btn-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 transform transition-all duration-200"
                >
                  {data.engineersForHireHeroCtaText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>
          
          {/* Image Column */}
          {data.engineersForHireHeroImage && (
            <div className="lg:col-span-5 relative w-full flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50">
                <img
                  data-tina-field={tinaField(data, "engineersForHireHeroImage")}
                  src={data.engineersForHireHeroImage}
                  alt={data.engineersForHireHeroTitle || "Engineers for Hire"}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EngineersForHireHero;
