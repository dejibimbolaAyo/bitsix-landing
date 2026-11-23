import { Link } from "@remix-run/react";
import React from "react";
import { tinaField } from "tinacms/dist/react";

import { MediaAsset } from "@components/ui/MediaAsset/MediaAsset";
import {
  HomeBlocksExpertise,
  HomeBlocksExpertiseSubcopy,
} from "@tina/__generated__/types";

interface ExpertiseProps {
  data: HomeBlocksExpertise;
}

const Expertise: React.FC<ExpertiseProps> = ({ data }) => {
  const { title, header, description, subcopy, ctaText, ctaLink, carousel } =
    data;
  const illustration = carousel?.[0];

  return (
    <section className="bg-paper py-14 lg:py-24">
      <div className="text-base-content">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-12 xl:gap-16 items-center">
            <div className="max-w-2xl lg:order-2">
              <p
                className="text-primary font-bold text-sm mb-3"
                data-tina-field={tinaField(data, "title")}
              >
                {title}
              </p>
              <h2
                className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-balance mb-4"
                data-tina-field={tinaField(data, "header")}
              >
                {header}
              </h2>
              <p
                className="text-base-content/80 text-lg mb-6 leading-relaxed"
                data-tina-field={tinaField(data, "description")}
              >
                {description}
              </p>
              {subcopy && (
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {subcopy.map((subText: HomeBlocksExpertiseSubcopy) => {
                    if (!subText) return null;
                    return (
                      <div
                        key={subText.title}
                        className="border-t border-slate-200 pt-4"
                      >
                        <h3
                          className="text-lg font-semibold mb-2"
                          data-tina-field={tinaField(subText, "title")}
                        >
                          {subText.title}
                        </h3>
                        <p
                          className="text-base-content/70 text-base"
                          data-tina-field={tinaField(subText, "description")}
                        >
                          {subText.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
              <Link
                to={ctaLink}
                className="group inline-flex min-h-11 items-center gap-1 font-bold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                data-tina-field={tinaField(data, "ctaText")}
              >
                {ctaText}
                <svg
                  className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.172 12L8.22198 7.05L9.63598 5.636L16 12L9.63598 18.364L8.22198 16.95L13.172 12Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
            <MediaAsset
              src={illustration?.image ?? ""}
              alt={illustration?.title ?? ""}
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
