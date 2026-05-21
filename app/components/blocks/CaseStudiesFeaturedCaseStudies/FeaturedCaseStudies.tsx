import React from "react";
import { tinaField } from "tinacms/dist/react";
import { Sparkles, Check, Server, Layers } from "lucide-react";

interface FeaturedCaseStudiesProps {
  data: any;
}

const FeaturedCaseStudies: React.FC<FeaturedCaseStudiesProps> = ({ data }) => {
  const {
    caseStudiesFeaturedCaseStudiesTitle,
    caseStudiesFeaturedCaseStudiesSubtitle,
    title,
    headline,
    category,
    clientProfile,
    businessProblem,
    ourRole,
    businessValueDelivered,
    techStack,
    image,
  } = data;

  return (
    <section className="relative py-20 bg-base-200/50">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-2 mb-3 justify-center">
            <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
              Flagship Project
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
            data-tina-field={tinaField(data, "caseStudiesFeaturedCaseStudiesTitle")}
          >
            {caseStudiesFeaturedCaseStudiesTitle || "Featured Success Story"}
          </h2>
          {caseStudiesFeaturedCaseStudiesSubtitle && (
            <p
              className="text-lg text-neutral/70"
              data-tina-field={tinaField(data, "caseStudiesFeaturedCaseStudiesSubtitle")}
            >
              {caseStudiesFeaturedCaseStudiesSubtitle}
            </p>
          )}
        </div>

        {/* Featured Case Study Card */}
        {title && (
          <div className="relative rounded-3xl bg-card border border-neutral/10 shadow-xl overflow-hidden backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-secondary/[0.02] to-transparent" />
            <div className="relative z-10 grid lg:grid-cols-12 gap-0">
              
              {/* Content Panel (Left/Main) */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral/10">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    {category && (
                      <span className="px-3 py-1 rounded-full bg-primary text-primary-content text-xs font-semibold uppercase tracking-wider">
                        {category}
                      </span>
                    )}
                    {clientProfile && (
                      <span className="px-3 py-1 rounded-full bg-secondary/15 text-primary text-xs font-medium border border-secondary/20">
                        {clientProfile}
                      </span>
                    )}
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl font-bold text-primary mb-2 leading-tight"
                    data-tina-field={tinaField(data, "title")}
                  >
                    {title}
                  </h3>

                  {headline && (
                    <p
                      className="text-md italic text-neutral/70 mb-6 leading-relaxed"
                      data-tina-field={tinaField(data, "headline")}
                    >
                      {headline}
                    </p>
                  )}

                  <div className="space-y-6">
                    {businessProblem && (
                      <div>
                        <h4 className="text-sm font-bold text-primary/80 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-error" />
                          The Business Problem
                        </h4>
                        <p
                          className="text-neutral/80 leading-relaxed pl-3.5 border-l-2 border-error/30"
                          data-tina-field={tinaField(data, "businessProblem")}
                        >
                          {businessProblem}
                        </p>
                      </div>
                    )}

                    {ourRole && (
                      <div>
                        <h4 className="text-sm font-bold text-primary/80 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-success" />
                          Our Role
                        </h4>
                        <p
                          className="text-neutral/80 leading-relaxed pl-3.5 border-l-2 border-success/30"
                          data-tina-field={tinaField(data, "ourRole")}
                        >
                          {ourRole}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {techStack && techStack.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-neutral/10">
                    <h5 className="text-xs font-bold text-primary/50 uppercase tracking-wider mb-3">
                      Technologies & Practices
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded bg-base-200 text-neutral text-xs font-medium border border-neutral/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Impact Panel (Right) */}
              <div className="lg:col-span-5 p-8 sm:p-12 bg-neutral/[0.02] flex flex-col justify-center items-center relative overflow-hidden">
                {/* Background decorative blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

                <div className="relative z-10 w-full space-y-8">
                  <h4 className="text-sm font-bold text-primary/80 uppercase tracking-widest text-center mb-4">
                    Business Value Delivered
                  </h4>
                  
                  {businessValueDelivered && businessValueDelivered.length > 0 ? (
                    <div className="grid grid-cols-1 gap-4">
                      {businessValueDelivered.map((valueItem: string, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-start gap-4 p-4 rounded-xl bg-card border border-neutral/10 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm"
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-success/15 text-success border border-success/20">
                              <Check className="w-3.5 h-3.5" />
                            </span>
                          </div>
                          <div className="text-sm font-medium text-primary/90 leading-relaxed">
                            {valueItem}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6 text-neutral/50">
                      Impact metrics loading...
                    </div>
                  )}

                  {image && (
                    <div className="mt-8 rounded-xl overflow-hidden border border-neutral/10 shadow-lg bg-card max-h-48">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                        data-tina-field={tinaField(data, "image")}
                      />
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;
