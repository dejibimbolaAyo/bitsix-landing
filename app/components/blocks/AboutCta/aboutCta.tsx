import React from "react";
import { tinaField } from "tinacms/dist/react";
import { ArrowRight } from "lucide-react";
import type { AboutBlocksAboutCta } from "@tina/__generated__/types";

interface AboutCtaProps {
  data: AboutBlocksAboutCta;
}

const AboutCta: React.FC<AboutCtaProps> = ({ data }) => {
  const { title, description, buttonText, buttonLink } = data;

  return (
    <section className="text-center">
      <h2
        className="text-3xl font-bold mb-6"
        data-tina-field={tinaField(data, "title")}
      >
        {title}
      </h2>
      <p
        className="text-lg text-muted-foreground mb-8"
        data-tina-field={tinaField(data, "description")}
      >
        {description}
      </p>
      <a
        href={buttonLink}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        data-tina-field={tinaField(data, "buttonText")}
      >
        {buttonText} <ArrowRight className="w-4 h-4" />
      </a>
    </section>
  );
};

export default AboutCta;
