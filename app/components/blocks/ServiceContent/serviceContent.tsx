import React from "react";
import { tinaField } from "tinacms/dist/react";

import { MediaAsset } from "@components/ui/MediaAsset/MediaAsset";
import type { DigitalTransformationBlocksServiceContent } from "tina/__generated__/types";

interface ServiceContentProps {
  data: DigitalTransformationBlocksServiceContent;
}

const icons: Record<string, React.ReactNode> = {
  creative: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
    </svg>
  ),
  performance: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
    </svg>
  ),
  planning: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M11 8h2v5h5v2h-7V8zM21 3v18H3V3h18zm-2 2H5v14h14V5z" />
    </svg>
  ),
  analytics: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z" />
    </svg>
  ),
};

const ServiceContent: React.FC<ServiceContentProps> = ({ data }) => {
  const mediaSrc = data.serviceImage || "/videos/digital-transformation-services.webm";
  const iconTypes = ["creative", "performance", "planning", "analytics"];
  return (
    <section className="site-section bg-paper">
      <div className="site-container">
        <div className="mb-16 text-center">
          <h2
            className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 max-w-3xl mx-auto"
            data-tina-field={tinaField(data, "headline")}
          >
            {data.headline}
          </h2>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="w-full lg:w-[62%] grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.offerings?.map((offering, index) => {
              if (index < 4) {
                return (
                  <div
                    key={index}
                    className="flex h-full flex-col rounded-2xl border border-slate-200 bg-paper p-6"
                    data-tina-field={tinaField(data.offerings?.[index])}
                  >
                    <div className="mb-4">
                      <div
                        className="flex size-10 items-center justify-center rounded-full bg-sand text-primary"
                      >
                        {icons[iconTypes[index % 4]]}
                      </div>
                    </div>

                    <h3
                      className="text-xl font-semibold mb-4"
                      data-tina-field={tinaField(data.offerings?.[index], "offeringTitle")}
                    >
                      {offering?.offeringTitle || "Service offering"}
                    </h3>

                    <p
                      className="text-base leading-7 text-slate-600 max-w-[28ch]"
                      data-tina-field={tinaField(data.offerings?.[index], "description")}
                    >
                      {offering?.description}
                    </p>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className="w-full lg:w-[38%] lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-[2rem] bg-white/90 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <div className="absolute inset-x-10 top-0 h-24 rounded-full bg-sand blur-3xl" />
              <div className="absolute -right-6 top-10 h-28 w-28 rounded-full bg-primary/5 blur-3xl" />
              <div className="relative rounded-[1.5rem] bg-gradient-to-br from-slate-50 to-white p-3">
                <MediaAsset
                  src={mediaSrc}
                  alt="Animated illustration of disconnected business systems becoming a unified digital workflow"
                  className="w-full h-auto rounded-[1.125rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContent;
