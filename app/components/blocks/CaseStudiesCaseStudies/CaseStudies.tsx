import React, { useState } from "react";
import { tinaField } from "tinacms/dist/react";
import { Layers, ChevronDown, Check, HelpCircle, Briefcase } from "lucide-react";

interface CaseStudiesProps {
  data: any;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ data }) => {
  const {
    caseStudiesCaseStudiesTitle,
    caseStudiesCaseStudiesSubtitle,
    items,
  } = data;

  // Track expanded state for each item index
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  const toggleExpand = (idx: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <section className="relative py-20 bg-base-100">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <Layers className="w-5 h-5 text-secondary" />
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
              Project Portfolio
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
            data-tina-field={tinaField(data, "caseStudiesCaseStudiesTitle")}
          >
            {caseStudiesCaseStudiesTitle || "More Client Successes"}
          </h2>
          {caseStudiesCaseStudiesSubtitle && (
            <p
              className="text-lg text-neutral/70"
              data-tina-field={tinaField(data, "caseStudiesCaseStudiesSubtitle")}
            >
              {caseStudiesCaseStudiesSubtitle}
            </p>
          )}
        </div>

        {/* Case Studies Grid */}
        {items && items.length > 0 ? (
          <div className="grid grid-cols-1 gap-8">
            {items.map((item: any, idx: number) => {
              if (!item) return null;
              const isExpanded = !!expandedItems[idx];
              
              return (
                <div
                  key={idx}
                  className="flex flex-col p-8 rounded-2xl bg-card border border-neutral/10 shadow-lg hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Subtle color highlight corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/5 to-transparent pointer-events-none" />
                  
                  <div>
                    {/* Header Row */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        {item.category && (
                          <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                            {item.category}
                          </span>
                        )}
                        {item.clientProfile && (
                          <span className="px-2.5 py-0.5 rounded-full bg-base-200 text-neutral text-xs font-medium border border-neutral/5">
                            {item.clientProfile}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Short Card Title */}
                    <h3
                      className="text-2xl font-bold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors duration-300"
                      data-tina-field={tinaField(item, "title")}
                    >
                      {item.title}
                    </h3>

                    {/* Short Description */}
                    <p
                      className="text-neutral/80 leading-relaxed max-w-4xl"
                      data-tina-field={tinaField(item, "shortDescription")}
                    >
                      {item.shortDescription}
                    </p>
                  </div>

                  {/* Expand Toggle Button */}
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="mt-6 flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary-focus transition-colors duration-200 self-start group/btn"
                  >
                    <span>{isExpanded ? "Hide Details" : "Read Full Case Study"}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : "group-hover/btn:translate-y-0.5"
                      }`}
                    />
                  </button>

                  {/* Detailed Accordion Section */}
                  {isExpanded && (
                    <div className="mt-8 pt-8 border-t border-neutral/10 grid lg:grid-cols-12 gap-8 animate-fadeIn">
                      
                      {/* Left: Headline, Business Problem, Our Role */}
                      <div className="lg:col-span-7 space-y-6">
                        {item.fullTitle && (
                          <h4 
                            className="text-lg font-bold text-primary"
                            data-tina-field={tinaField(item, "fullTitle")}
                          >
                            {item.fullTitle}
                          </h4>
                        )}
                        
                        {item.headline && (
                          <p 
                            className="text-sm italic text-neutral/70"
                            data-tina-field={tinaField(item, "headline")}
                          >
                            {item.headline}
                          </p>
                        )}

                        <div className="grid md:grid-cols-2 gap-6 pt-2">
                          {item.businessProblem && (
                            <div className="space-y-2">
                              <h5 className="text-xs font-bold text-error uppercase tracking-wider flex items-center gap-1.5">
                                <HelpCircle className="w-3.5 h-3.5" />
                                The Business Problem
                              </h5>
                              <p 
                                className="text-sm text-neutral/80 leading-relaxed"
                                data-tina-field={tinaField(item, "businessProblem")}
                              >
                                {item.businessProblem}
                              </p>
                            </div>
                          )}

                          {item.ourRole && (
                            <div className="space-y-2">
                              <h5 className="text-xs font-bold text-success uppercase tracking-wider flex items-center gap-1.5">
                                <Briefcase className="w-3.5 h-3.5" />
                                Our Role
                              </h5>
                              <p 
                                className="text-sm text-neutral/80 leading-relaxed"
                                data-tina-field={tinaField(item, "ourRole")}
                              >
                                {item.ourRole}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right: Business Value Delivered & Tech Stack */}
                      <div className="lg:col-span-5 space-y-6 bg-neutral/[0.01] p-6 rounded-2xl border border-neutral/5">
                        <div>
                          <h5 className="text-xs font-bold text-primary/70 uppercase tracking-wider mb-4">
                            Business Value Delivered
                          </h5>
                          {item.businessValueDelivered && item.businessValueDelivered.length > 0 ? (
                            <ul className="space-y-3">
                              {item.businessValueDelivered.map((value: string, vIdx: number) => (
                                <li key={vIdx} className="flex items-start gap-2.5 text-sm text-neutral/90">
                                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center border border-success/15">
                                    <Check className="w-3.5 h-3.5" />
                                  </span>
                                  <span>{value}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-neutral/50 italic">No metrics listed</p>
                          )}
                        </div>

                        {item.techStack && item.techStack.length > 0 && (
                          <div className="pt-4 border-t border-neutral/10">
                            <h5 className="text-[10px] font-bold text-primary/50 uppercase tracking-wider mb-2">
                              Tech Stack & Focus Areas
                            </h5>
                            <div className="flex flex-wrap gap-1.5">
                              {item.techStack.map((tech: string, tIdx: number) => (
                                <span
                                  key={tIdx}
                                  className="px-2 py-0.5 rounded bg-base-100 text-neutral/80 text-[10px] font-medium border border-neutral/5"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                    </div>
                  )}

                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 text-neutral/50">
            No portfolio entries found.
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudies;
