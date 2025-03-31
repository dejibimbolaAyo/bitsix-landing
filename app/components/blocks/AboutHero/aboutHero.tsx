import React from "react";
import { tinaField } from "tinacms/dist/react";
import type { AboutBlocksAboutHero } from "@tina/__generated__/types";

interface AboutHeroProps {
  data: AboutBlocksAboutHero;
}

const AboutHero: React.FC<AboutHeroProps> = ({ data }) => {
  const { heroTitle, heroTagline, heroDescription } = data;

  return (
    <section className="bg-gradient-to-b from-primary/5 to-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            data-tina-field={tinaField(data, "heroTitle")}
          >
            {heroTitle}
          </h1>
          <p
            className="text-xl text-muted-foreground mb-8"
            data-tina-field={tinaField(data, "heroTagline")}
          >
            {heroTagline}
          </p>
          <p
            className="text-lg text-muted-foreground"
            data-tina-field={tinaField(data, "heroDescription")}
          >
            {heroDescription}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
