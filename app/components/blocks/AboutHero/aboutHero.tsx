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
      <section className="relative min-h-[65vh] flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />

          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          {/* Animated Gradient Orbs */}
          <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-primary/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary/20 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>

        {/* Content */}
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Welcome to BitSix Studio
            </div>

            {/* Title */}
            <h1
              className="text-5xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80"
              data-tina-field={tinaField(data, "heroTitle")}
            >
              {heroTitle}
            </h1>

            {/* Tagline */}
            <p
              className="text-xl md:text-2xl text-secondary mb-8 max-w-2xl mx-auto"
              data-tina-field={tinaField(data, "heroTagline")}
            >
              {heroTagline}
            </p>

            {/* Description */}
            <p
              className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
              data-tina-field={tinaField(data, "heroDescription")}
            >
              {heroDescription}
            </p>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="relative py-16 bg-background/50 backdrop-blur-sm">
        {/* Background Texture */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years Experience", value: "10+" },
              { label: "Projects Delivered", value: "100+" },
              { label: "Team Members", value: "25+" },
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
