import React from "react";
import { tinaField } from "tinacms/dist/react";

import { MediaAsset } from "@components/ui/MediaAsset/MediaAsset";

interface SlimHeroProps {
  data: {
    headline: string;
    subheadline: string;
    backgroundImage?: string;
  };
}

const SlimHero: React.FC<SlimHeroProps> = ({ data }) => {
  return (
    <section className="site-hero">

      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">
          <div className="lg:col-span-5 max-w-2xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              Service Focus
            </div>

            <h1
              className="site-title mb-5"
              data-tina-field={tinaField(data, "headline")}
            >
              {data.headline}
            </h1>

            <p
              className="mt-5 text-lg md:text-xl text-slate-700 leading-relaxed max-w-[30rem]"
              data-tina-field={tinaField(data, "subheadline")}
            >
              {data.subheadline}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[32rem]">
              <div className="rounded-2xl border border-slate-100 bg-white/90 p-5 shadow-sm">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-500 mb-3">
                  Typical Problems
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  Manual work, disconnected tools, and reporting gaps that slow execution.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-500 mb-3">
                  What Changes
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  Connected workflows, cleaner data, and software systems that scale with the business.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <MediaAsset
                  src={data.backgroundImage}
                  alt="Digital transformation systems illustration"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlimHero;
