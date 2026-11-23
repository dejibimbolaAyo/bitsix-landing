import React from "react";
import { Link } from "@remix-run/react";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface TestimonialsHeroProps {
  data: any;
}

const TestimonialsHero: React.FC<TestimonialsHeroProps> = ({ data }) => {
  return (
    <section className="site-hero">
      <div className="site-container text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-6">
          <div className="w-2 h-2 rounded-full bg-primary/5" />
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Client Reviews</span>
        </div>

        <h1
          className="site-title mx-auto mb-5 max-w-[24ch]"
          data-tina-field={tinaField(data, "testimonialsHeroTitle")}
        >
          {data.testimonialsHeroTitle}
        </h1>

        {data.testimonialsHeroSubtitle && (
          <p 
            className="text-lg md:text-xl text-neutral mb-5 max-w-2xl mx-auto"
            data-tina-field={tinaField(data, "testimonialsHeroSubtitle")}
          >
            {data.testimonialsHeroSubtitle}
          </p>
        )}

        {data.testimonialsHeroContent && (
          <div 
            className="prose prose-lg max-w-none text-neutral mb-8 leading-relaxed"
            data-tina-field={tinaField(data, "testimonialsHeroContent")}
          >
            <TinaMarkdown content={data.testimonialsHeroContent} />
          </div>
        )}

        {data.testimonialsHeroCtaText && data.testimonialsHeroCtaLink && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to={data.testimonialsHeroCtaLink}
              reloadDocument={data.testimonialsHeroCtaLink === "/resources/case-studies"}
              className="site-action"
              data-tina-field={tinaField(data, "testimonialsHeroCtaText")}
            >
              {data.testimonialsHeroCtaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsHero;
