import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface TestimonialsHeroProps {
  data: any;
}

const TestimonialsHero: React.FC<TestimonialsHeroProps> = ({ data }) => {
  return (
    <section className="px-8 py-12 lg:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.testimonialsHeroTitle}</h2>
        {data.testimonialsHeroSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">{data.testimonialsHeroSubtitle}</h3>
        )}
        {data.testimonialsHeroContent && (
          <div className="prose max-w-none">
            <TinaMarkdown content={data.testimonialsHeroContent} />
          </div>
        )}
        {data.testimonialsHeroImage && (
          <img 
            src={data.testimonialsHeroImage} 
            alt={data.testimonialsHeroTitle}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.testimonialsHeroCtaText && data.testimonialsHeroCtaLink && (
          <div className="mt-8">
            <a 
              href={data.testimonialsHeroCtaLink}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              {data.testimonialsHeroCtaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsHero;
