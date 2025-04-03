import { Carousel } from "@app/components/ui/Carousel/Carousel";
import { Link } from "@remix-run/react";
import {
  HomeBlocksExpertise,
  HomeBlocksExpertiseSubcopy,
} from "@tina/__generated__/types";
import React from "react";
import { tinaField } from "tinacms/dist/react";

interface ExpertiseProps {
  data: HomeBlocksExpertise;
}

const Expertise: React.FC<ExpertiseProps> = ({ data }) => {
  const { title, header, description, subcopy, ctaText, ctaLink, carousel } =
    data;
  const carouselSlides =
    carousel?.map((slide) => ({
      image: slide?.image || undefined,
      alt: slide?.title || undefined,
      title: slide?.title || undefined,
      description: slide?.description || undefined,
    })) || [];

  return (
    <section className="py-16 bg-base-100">
      <div className="text-base-content">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:gap-12">
            <div className="flex-1 max-w-2xl">
              <p
                className="text-primary font-semibold text-lg mb-3"
                data-tina-field={tinaField(data, "title")}
              >
                {title}
              </p>
              <h2
                className="text-3xl lg:text-4xl font-bold leading-tight mb-4"
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
                        className="bg-base-200 rounded-lg p-5"
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
                className="inline-flex items-center px-6 py-3 group"
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
            <div className="flex-1 mt-8 lg:mt-0">
              <div className="rounded-lg overflow-hidden">
                <Carousel slides={carouselSlides} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
