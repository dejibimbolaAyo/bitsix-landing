import React from "react";
import { tinaField } from "tinacms/dist/react";

import type { AboutBlocksAboutContent } from "@tina/__generated__/types";

interface IntroductionProps {
  introduction: string;
  data: AboutBlocksAboutContent;
}

const Introduction: React.FC<IntroductionProps> = ({ introduction, data }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Enhanced Decorative Elements */}

      {/* Main Content */}
      <div className="relative p-12 rounded-2xl bg-card/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="relative">
              <div className="relative">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium text-primary">
                    About Us
                  </span>
                </div>
                <p
                  className="text-2xl text-muted-foreground leading-relaxed"
                  data-tina-field={tinaField(data, "introduction")}
                >
                  {introduction}
                </p>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-primary/10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaboration at BitSix"
                  className="w-full h-full object-cover"
                />
                {/* Image Overlays */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30 mix-blend-overlay" />
                <div className="absolute -inset-0.5 border-2 border-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
