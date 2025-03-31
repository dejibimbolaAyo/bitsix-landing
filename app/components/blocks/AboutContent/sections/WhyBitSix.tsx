import React from "react";
import { tinaField } from "tinacms/dist/react";
import { Lightbulb, Wrench, Rocket } from "lucide-react";
import type { AboutBlocksAboutContent } from "@tina/__generated__/types";

interface WhyBitSixProps {
  data: AboutBlocksAboutContent;
}

const WhyBitSix: React.FC<WhyBitSixProps> = ({ data }) => {
  const { whyBitSixTitle, whyBitSix, whyBitSixConclusion } = data;

  return (
    <section className="relative overflow-hidden">
      {/* Enhanced Decorative Elements */}
      <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute -bottom-16 left-1/2 w-48 h-48 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-500" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-16 w-32 h-64 bg-gradient-to-br from-primary/20 to-secondary/15 rounded-full blur-3xl rotate-45" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-16 w-32 h-64 bg-gradient-to-bl from-secondary/20 to-primary/15 rounded-full blur-3xl -rotate-45" />

      {/* Main Content */}
      <div className="relative p-12 rounded-2xl bg-card/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.15] via-secondary/[0.1] to-transparent rounded-2xl" />
        <div className="relative z-10 space-y-16">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium text-primary/90">
                Why Choose Us
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-primary"
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
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-secondary/20 rounded-2xl blur-2xl" />
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 to-transparent rounded-2xl" />
                      <div className="relative w-20 h-20 bg-card/90 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-secondary/20 group-hover:border-secondary/30 transition-colors duration-300">
                        {item.icon === "Lightbulb" && (
                          <Lightbulb className="w-10 h-10 text-secondary group-hover:text-secondary/90 transition-colors duration-300" />
                        )}
                        {item.icon === "Wrench" && (
                          <Wrench className="w-10 h-10 text-secondary group-hover:text-secondary/90 transition-colors duration-300" />
                        )}
                        {item.icon === "Rocket" && (
                          <Rocket className="w-10 h-10 text-secondary group-hover:text-secondary/90 transition-colors duration-300" />
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
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/15 to-transparent blur-2xl" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyBitSix;
