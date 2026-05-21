import React from "react";
import { Link } from "@remix-run/react";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface CaseStudiesHeroProps {
  data: any;
}

const CaseStudiesHero: React.FC<CaseStudiesHeroProps> = ({ data }) => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-base-100">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-secondary animate-ping" />
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Proven Impact</span>
        </div>

        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary mb-6 tracking-tight font-sans leading-tight"
          data-tina-field={tinaField(data, "caseStudiesHeroTitle")}
        >
          {data.caseStudiesHeroTitle}
        </h1>

        {data.caseStudiesHeroSubtitle && (
          <p 
            className="text-lg sm:text-xl md:text-2xl text-neutral/80 mb-8 font-light max-w-2xl mx-auto"
            data-tina-field={tinaField(data, "caseStudiesHeroSubtitle")}
          >
            {data.caseStudiesHeroSubtitle}
          </p>
        )}

        {data.caseStudiesHeroContent && (
          <div 
            className="prose prose-lg max-w-none text-muted-foreground/80 mb-10 leading-relaxed"
            data-tina-field={tinaField(data, "caseStudiesHeroContent")}
          >
            <TinaMarkdown content={data.caseStudiesHeroContent} />
          </div>
        )}

        {data.caseStudiesHeroCtaText && data.caseStudiesHeroCtaLink && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to={data.caseStudiesHeroCtaLink}
              className="btn btn-primary btn-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              data-tina-field={tinaField(data, "caseStudiesHeroCtaText")}
            >
              {data.caseStudiesHeroCtaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesHero;
