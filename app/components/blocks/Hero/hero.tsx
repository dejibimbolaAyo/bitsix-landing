import { Link } from "@remix-run/react";
import React from "react";
import { tinaField } from "tinacms/dist/react";

import { MediaAsset } from "@components/ui/MediaAsset/MediaAsset";
import { HomeBlocksHero } from "@tina/__generated__/types";

interface HeroProps {
  data: HomeBlocksHero;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const {
    heroImage,
    title,
    heroSubtitle,
    heroCtaText,
    heroCtaLink,
    rightCardText,
    stat1Value,
    stat1Label,
    stat2Value,
    stat2Label,
    smallerMobileBodyText,
  } = data;

  const subtitleSizeClass = smallerMobileBodyText
    ? "text-sm md:text-base"
    : "text-base md:text-lg";

  return (
    <section className="site-hero">
      <div className="site-container">
        <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div>
            <h1
              data-tina-field={tinaField(data, "title")}
              className="max-w-[12ch] text-balance text-[clamp(2.35rem,5.6vw,5rem)] font-bold leading-[1.02] tracking-[-0.055em] text-primary"
            >
              {title}
            </h1>

            <div className="mt-5 max-w-[32rem]">
              <p
                data-tina-field={tinaField(data, "rightCardText")}
                className="text-lg sm:text-xl font-semibold text-primary leading-snug tracking-tight"
              >
                {rightCardText ?? "We are building the future together by using cutting-edge technology"}
              </p>
              <p
                data-tina-field={tinaField(data, "heroSubtitle")}
                className={`mt-3 ${subtitleSizeClass} text-slate-600 leading-relaxed font-normal max-w-[34rem]`}
              >
                {heroSubtitle}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-5">
              {heroCtaText && (
                <Link
                  to={heroCtaLink ?? "/"}
                  data-tina-field={tinaField(data, "heroCtaText")}
                  className="site-action"
                >
                  <span>{heroCtaText}</span>
                  <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </Link>
              )}
            </div>

          </div>

          <MediaAsset
            src={heroImage ?? ""}
            alt=""
            className="aspect-[5/4] w-full rounded-2xl object-cover"
          />
        </div>

        <dl className="mt-9 grid grid-cols-2 gap-5 border-t border-slate-300 pt-5 sm:gap-10 lg:mt-12">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
            <dt data-tina-field={tinaField(data, "stat1Label")} className="text-sm leading-snug text-slate-700">
              {stat1Label ?? "Engineering Hours Delivered"}
            </dt>
            <dd data-tina-field={tinaField(data, "stat1Value")} className="order-first text-2xl font-bold tabular-nums text-primary">
              {stat1Value ?? "18k+"}
            </dd>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
            <dt data-tina-field={tinaField(data, "stat2Label")} className="text-sm leading-snug text-slate-700">
              {stat2Label ?? "Years Building Software"}
            </dt>
            <dd data-tina-field={tinaField(data, "stat2Value")} className="order-first text-2xl font-bold tabular-nums text-primary">
              {stat2Value ?? "20+"}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Hero;
