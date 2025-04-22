import { Link } from "@remix-run/react";
import React from "react";
import { tinaField } from "tinacms/dist/react";

import { HomeBlocksHero } from "@tina/__generated__/types";
interface HeroProps {
  data: HomeBlocksHero;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const { heroImage, title, heroSubtitle, heroCtaText, heroCtaLink } = data;
  return (
    <section
      data-tina-field={tinaField(data, "heroImage")}
      className="relative min-h-[90vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImage ?? ""})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 backdrop-blur-[2px]"></div>
      <div className="max-w-7xl mx-auto px-4 relative">
        <h1
          data-tina-field={tinaField(data, "title")}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in"
        >
          {title}
        </h1>

        <p
          data-tina-field={tinaField(data, "heroSubtitle")}
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed animate-fade-in-up"
        >
          {heroSubtitle}
        </p>

        <Link
          to={heroCtaLink ?? "/"}
          className="inline-flex items-center btn btn-primary btn-lg gap-2 text-lg px-8 py-4 hover:scale-105 transform transition-transform duration-200 animate-fade-in-up"
        >
          {heroCtaText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
