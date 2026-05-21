import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import { Link } from "@remix-run/react";
import { CtoForHireBlocksCtoForHireTestimonialsAndCaseStudies } from "@tina/__generated__/types";

interface CtoForHireTestimonialsAndCaseStudiesProps {
  data: CtoForHireBlocksCtoForHireTestimonialsAndCaseStudies;
}

const CtoForHireTestimonialsAndCaseStudies: React.FC<
  CtoForHireTestimonialsAndCaseStudiesProps
> = ({ data }) => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-slate-950 text-white border-b border-slate-900">
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            data-tina-field={tinaField(
              data,
              "ctoForHireTestimonialsAndCaseStudiesTitle"
            )}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            {data.ctoForHireTestimonialsAndCaseStudiesTitle}
          </h2>
          {data.ctoForHireTestimonialsAndCaseStudiesSubtitle && (
            <p
              data-tina-field={tinaField(
                data,
                "ctoForHireTestimonialsAndCaseStudiesSubtitle"
              )}
              className="text-lg text-blue-400 font-medium"
            >
              {data.ctoForHireTestimonialsAndCaseStudiesSubtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col items-start relative pl-8 lg:pl-12">
            <span className="absolute top-[-20px] left-0 text-7xl lg:text-8xl font-serif text-blue-500/20 select-none pointer-events-none">
              &ldquo;
            </span>

            {data.ctoForHireTestimonialsAndCaseStudiesContent && (
              <div
                data-tina-field={tinaField(
                  data,
                  "ctoForHireTestimonialsAndCaseStudiesContent"
                )}
                className="text-xl sm:text-2xl font-medium text-slate-200 leading-relaxed mb-6 italic"
              >
                <TinaMarkdown
                  content={data.ctoForHireTestimonialsAndCaseStudiesContent}
                />
              </div>
            )}

            {data.ctoForHireTestimonialsAndCaseStudiesCtaText &&
              data.ctoForHireTestimonialsAndCaseStudiesCtaLink && (
                <div className="mt-4">
                  <Link
                    to={data.ctoForHireTestimonialsAndCaseStudiesCtaLink}
                    className="btn btn-secondary shadow-md hover:-translate-y-0.5 transform transition-all duration-200"
                  >
                    {data.ctoForHireTestimonialsAndCaseStudiesCtaText}
                  </Link>
                </div>
              )}
          </div>

          {data.ctoForHireTestimonialsAndCaseStudiesImage && (
            <div className="lg:col-span-5 relative w-full flex justify-center">
              <div className="relative w-full max-w-sm lg:max-w-none aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                <img
                  data-tina-field={tinaField(
                    data,
                    "ctoForHireTestimonialsAndCaseStudiesImage"
                  )}
                  src={data.ctoForHireTestimonialsAndCaseStudiesImage}
                  alt={data.ctoForHireTestimonialsAndCaseStudiesTitle}
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CtoForHireTestimonialsAndCaseStudies;
