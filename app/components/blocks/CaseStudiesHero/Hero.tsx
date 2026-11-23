import React from "react";
import { Link } from "@remix-run/react";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface CaseStudiesHeroProps {
  data: any;
}

const CaseStudiesHero: React.FC<CaseStudiesHeroProps> = ({ data }) => {
  return (
    <section className="site-hero">
      {/* Dynamic Background Gradients */}
      <div className="site-container text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-6">
          <div className="w-2 h-2 rounded-full bg-primary/5" />
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Proven Impact</span>
        </div>

        <h1
          className="site-title mx-auto mb-5 max-w-[24ch]"
          data-tina-field={tinaField(data, "caseStudiesHeroTitle")}
        >
          {data.caseStudiesHeroTitle}
        </h1>

        {data.caseStudiesHeroSubtitle && (
          <p 
            className="text-lg md:text-xl text-neutral mb-5 max-w-2xl mx-auto"
            data-tina-field={tinaField(data, "caseStudiesHeroSubtitle")}
          >
            {data.caseStudiesHeroSubtitle}
          </p>
        )}

        {data.caseStudiesHeroContent && (
          <div 
            className="prose prose-lg max-w-none text-neutral mb-8 leading-relaxed"
            data-tina-field={tinaField(data, "caseStudiesHeroContent")}
          >
            <TinaMarkdown content={data.caseStudiesHeroContent} />
          </div>
        )}

        {data.caseStudiesHeroCtaText && data.caseStudiesHeroCtaLink && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to={data.caseStudiesHeroCtaLink}
              className="site-action"
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
