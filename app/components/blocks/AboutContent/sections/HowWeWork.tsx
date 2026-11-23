import { useLocation } from "@remix-run/react";
import { Workflow, Target, Rocket } from "lucide-react";
import React, { useEffect } from "react";
import { tinaField } from "tinacms/dist/react";

import type { AboutBlocksAboutContent } from "@tina/__generated__/types";

interface HowWeWorkProps {
  data: AboutBlocksAboutContent;
}

const ProcessIcon = ({ step }: { step: number }) => {
  const iconClass =
    "w-8 h-8 text-primary group-hover:text-primary transition-colors duration-300";
  switch (step) {
    case 0:
      return <Workflow className={iconClass} />;
    case 1:
      return <Target className={iconClass} />;
    case 2:
      return <Rocket className={iconClass} />;
    default:
      return <Workflow className={iconClass} />;
  }
};

const HowWeWork: React.FC<HowWeWorkProps> = ({ data }) => {
  const { howWeWorkTitle, workPrinciples, howWeWorkConclusion } = data;
  const location = useLocation();

  // Cleanup effect for route changes
  useEffect(() => {
    return () => {
      // Cleanup any animations or transitions
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [location.pathname]);

  return (
    <section className="relative overflow-hidden py-24">
      {/* Decorative Elements */}

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-sm font-medium text-primary/90 mb-4 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Our Process
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary"
            data-tina-field={tinaField(data, "howWeWorkTitle")}
          >
            {howWeWorkTitle}
          </h2>
        </div>

        {/* Process Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {workPrinciples?.map(
            (principle, index) =>
              principle && (
                <div
                  key={index}
                  className="group relative transform transition-all duration-300 hover:-translate-y-1"
                  data-tina-field={tinaField(principle)}
                >
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/[0.05] via-primary/5 to-transparent border border-primary/5 group-hover:border-primary/10 transition-colors duration-500">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="relative">
                        <div className="relative w-16 h-16 bg-card/80 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                          <ProcessIcon step={index} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3
                      className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300"
                      data-tina-field={tinaField(principle, "title")}
                    >
                      {principle.title}
                    </h3>
                    <p
                      className="text-muted-foreground/80 leading-relaxed"
                      data-tina-field={tinaField(principle, "description")}
                    >
                      {principle.description}
                    </p>
                  </div>
                </div>
              )
          )}
        </div>

        {/* Conclusion */}
        {howWeWorkConclusion && (
          <div className="text-center">
            <p
              className="text-lg text-muted-foreground/80 max-w-3xl mx-auto"
              data-tina-field={tinaField(data, "howWeWorkConclusion")}
            >
              {howWeWorkConclusion}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowWeWork;
