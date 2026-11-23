import { Lightbulb, Wrench, Rocket } from "lucide-react";
import React from "react";
import { tinaField } from "tinacms/dist/react";

import type { AboutBlocksAboutContent } from "@tina/__generated__/types";

interface WhyBitSixProps {
  data: AboutBlocksAboutContent;
}

const WhyBitSix: React.FC<WhyBitSixProps> = ({ data }) => {
  const { whyBitSixTitle, whyBitSix, whyBitSixConclusion } = data;

  return (
    <section className="relative overflow-hidden">
      {/* Enhanced Decorative Elements */}

      {/* Main Content */}
      <div className="relative p-12 rounded-2xl bg-card/30 backdrop-blur-sm">
        <div className="relative z-10 space-y-16">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <div className="w-2 h-2 rounded-full bg-primary/5 animate-pulse" />
              <span className="text-sm font-medium text-primary/90">
                Why Choose Us
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 text-primary"
              data-tina-field={tinaField(data, "whyBitSixTitle")}
            >
              {whyBitSixTitle}
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {whyBitSix?.map(
              (item, index) =>
                item && (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div className="relative w-20 h-20 bg-card/90 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-primary/10 group-hover:border-primary/10 transition-colors duration-300">
                        {item.icon === "Lightbulb" && (
                          <Lightbulb className="w-10 h-10 text-primary group-hover:text-primary/80 transition-colors duration-300" />
                        )}
                        {item.icon === "Wrench" && (
                          <Wrench className="w-10 h-10 text-primary group-hover:text-primary/80 transition-colors duration-300" />
                        )}
                        {item.icon === "Rocket" && (
                          <Rocket className="w-10 h-10 text-primary group-hover:text-primary/80 transition-colors duration-300" />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <h3
                      className="text-2xl font-semibold mb-3 text-primary/90"
                      data-tina-field={tinaField(item, "title")}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-muted-foreground/90 leading-relaxed"
                      data-tina-field={tinaField(item, "description")}
                    >
                      {item.description}
                    </p>
                  </div>
                )
            )}
          </div>

          {/* Conclusion */}
          <p
            className="text-lg text-muted-foreground/90 text-center max-w-3xl mx-auto relative"
            data-tina-field={tinaField(data, "whyBitSixConclusion")}
          >
            <span className="relative z-10">{whyBitSixConclusion}</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-2xl" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyBitSix;
