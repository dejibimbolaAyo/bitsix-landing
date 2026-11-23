import React from "react";
import { tinaField } from "tinacms/dist/react";

import type { AboutBlocksAboutHero } from "@tina/__generated__/types";

interface AboutHeroProps {
  data: AboutBlocksAboutHero;
}

const AboutHero: React.FC<AboutHeroProps> = ({ data }) => {
  const { heroTitle, heroTagline, heroDescription } = data;

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="site-hero">

        <div className="site-container">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Welcome to BitSix Studio
            </div>

            {/* Title */}
            <h1
              className="site-title mx-auto mb-5 max-w-[24ch]"
              data-tina-field={tinaField(data, "heroTitle")}
            >
              {heroTitle}
            </h1>

            {/* Tagline */}
            <p
              className="text-lg font-bold text-primary mb-4 max-w-2xl mx-auto"
              data-tina-field={tinaField(data, "heroTagline")}
            >
              {heroTagline}
            </p>

            {/* Description */}
            <p
              className="text-lg leading-relaxed text-neutral max-w-2xl mx-auto"
              data-tina-field={tinaField(data, "heroDescription")}
            >
              {heroDescription}
            </p>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="border-b border-slate-200 bg-paper py-8">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { label: "Years Of Experience", value: "10+" },
              { label: "Projects Delivered", value: "10+" },
              { label: "Client Satisfaction", value: "98%" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-primary/70 group-hover:text-primary/60 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
