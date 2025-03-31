import React from "react";
import { tinaField } from "tinacms/dist/react";

interface SlimHeroProps {
  data: {
    headline: string;
    subheadline: string;
    backgroundImage: string;
  };
}

const SlimHero: React.FC<SlimHeroProps> = ({ data }) => {
  return (
    <section className="relative py-24 bg-base-200">
      <div className="absolute inset-0">
        <img
          src={data.backgroundImage}
          alt={data.headline}
          className="w-full h-full object-cover"
          data-tina-field={tinaField(data, "backgroundImage")}
        />
        <div className="absolute inset-0 bg-base-100/90" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            data-tina-field={tinaField(data, "headline")}
          >
            {data.headline}
          </h1>
          <p
            className="text-xl md:text-2xl text-base-content/80"
            data-tina-field={tinaField(data, "subheadline")}
          >
            {data.subheadline}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SlimHero;
