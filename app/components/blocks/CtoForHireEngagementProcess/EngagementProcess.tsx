import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import { Link } from "@remix-run/react";
import { CtoForHireBlocksCtoForHireEngagementProcess } from "@tina/__generated__/types";

interface CtoForHireEngagementProcessProps {
  data: CtoForHireBlocksCtoForHireEngagementProcess;
}

const CtoForHireEngagementProcess: React.FC<CtoForHireEngagementProcessProps> = ({
  data,
}) => {
  return (
    <section className="site-section bg-sand">
      <div className="site-container">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-primary text-primary-content py-12 px-8 md:p-16 lg:p-20">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary-content/15 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <h2
                data-tina-field={tinaField(data, "ctoForHireEngagementProcessTitle")}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white leading-tight"
              >
                {data.ctoForHireEngagementProcessTitle}
              </h2>
              {data.ctoForHireEngagementProcessSubtitle && (
                <p
                  data-tina-field={tinaField(
                    data,
                    "ctoForHireEngagementProcessSubtitle"
                  )}
                  className="text-lg sm:text-xl font-medium text-primary-content/90 mb-6"
                >
                  {data.ctoForHireEngagementProcessSubtitle}
                </p>
              )}
              {data.ctoForHireEngagementProcessContent && (
                <div
                  data-tina-field={tinaField(
                    data,
                    "ctoForHireEngagementProcessContent"
                  )}
                  className="prose prose-invert max-w-none text-primary-content/90 mb-8 leading-relaxed"
                >
                  <TinaMarkdown content={data.ctoForHireEngagementProcessContent} />
                </div>
              )}
              {data.ctoForHireEngagementProcessCtaText &&
                data.ctoForHireEngagementProcessCtaLink && (
                  <div>
                    <Link
                      to={data.ctoForHireEngagementProcessCtaLink}
                      className="site-action-inverse"
                    >
                      {data.ctoForHireEngagementProcessCtaText}
                    </Link>
                  </div>
                )}
            </div>

            {data.ctoForHireEngagementProcessImage && (
              <div className="lg:col-span-5 relative w-full flex justify-center">
                <div className="relative w-full max-w-sm lg:max-w-none aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/10">
                  <img
                    data-tina-field={tinaField(
                      data,
                      "ctoForHireEngagementProcessImage"
                    )}
                    src={data.ctoForHireEngagementProcessImage}
                    alt={data.ctoForHireEngagementProcessTitle}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtoForHireEngagementProcess;
