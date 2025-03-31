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
      <div className="absolute -top-16 -left-16 w-48 h-48 bg-primary/8 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-16 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute -bottom-16 left-1/3 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-pulse delay-500" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-8 w-24 h-96 bg-primary/3 rounded-full blur-3xl rotate-12" />

      {/* Main Content */}
      <div className="relative p-12 rounded-2xl bg-card/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] to-transparent rounded-2xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/[0.02] to-transparent rounded-2xl blur-2xl" />
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
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/[0.08] via-primary/[0.03] to-transparent rounded-3xl blur-2xl" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-primary/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaboration at BitSix"
                  className="w-full h-full object-cover"
                />
                {/* Image Overlays */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30 mix-blend-overlay" />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent" />
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
