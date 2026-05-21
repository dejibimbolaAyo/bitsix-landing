import React from "react";
import { Link } from "@remix-run/react";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface TestimonialsHeroProps {
  data: any;
}

const TestimonialsHero: React.FC<TestimonialsHeroProps> = ({ data }) => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-base-100">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-secondary animate-ping" />
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Client Reviews</span>
        </div>

        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary mb-6 tracking-tight font-sans leading-tight"
          data-tina-field={tinaField(data, "testimonialsHeroTitle")}
        >
          {data.testimonialsHeroTitle}
        </h1>

        {data.testimonialsHeroSubtitle && (
          <p 
            className="text-lg sm:text-xl md:text-2xl text-neutral/80 mb-8 font-light max-w-2xl mx-auto"
            data-tina-field={tinaField(data, "testimonialsHeroSubtitle")}
          >
            {data.testimonialsHeroSubtitle}
          </p>
        )}

        {data.testimonialsHeroContent && (
          <div 
            className="prose prose-lg max-w-none text-muted-foreground/80 mb-10 leading-relaxed"
            data-tina-field={tinaField(data, "testimonialsHeroContent")}
          >
            <TinaMarkdown content={data.testimonialsHeroContent} />
          </div>
        )}

        {data.testimonialsHeroCtaText && data.testimonialsHeroCtaLink && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to={data.testimonialsHeroCtaLink}
              className="btn btn-primary btn-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
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
