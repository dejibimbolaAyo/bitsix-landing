import React from "react";
import { tinaField } from "tinacms/dist/react";
import type { AboutBlocksAboutContent } from "@tina/__generated__/types";

interface HowWeWorkProps {
  data: AboutBlocksAboutContent;
}

const HowWeWork: React.FC<HowWeWorkProps> = ({ data }) => {
  const { howWeWorkTitle, workPrinciples, howWeWorkConclusion } = data;

  return (
    <section className="relative">
      {/* Decorative Elements */}
      <div className="absolute -top-4 left-0 w-12 h-12 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute -top-4 right-0 w-12 h-12 bg-primary/5 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute -bottom-4 left-1/2 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-pulse delay-500" />

      {/* Main Content */}
      <div className="relative group p-12 rounded-2xl bg-card/50 hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 space-y-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Our Process
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80"
              data-tina-field={tinaField(data, "howWeWorkTitle")}
            >
              {howWeWorkTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workPrinciples?.map(
              (principle, index) =>
                principle && (
                  <div
                    key={index}
                    className="group relative p-8 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="absolute top-0 left-0 w-12 h-12 bg-primary/10 rounded-full blur-xl opacity-50" />
                    <div className="relative z-10">
                      <h3
                        className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-500"
                        data-tina-field={tinaField(principle, "title")}
                      >
                        {principle.title}
                      </h3>
                      <p
                        className="text-muted-foreground leading-relaxed"
                        data-tina-field={tinaField(principle, "description")}
                      >
                        {principle.description}
                      </p>
                    </div>
                  </div>
                )
            )}
          </div>

          <p
            className="text-lg text-muted-foreground max-w-2xl"
            data-tina-field={tinaField(data, "howWeWorkConclusion")}
          >
            {howWeWorkConclusion}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
