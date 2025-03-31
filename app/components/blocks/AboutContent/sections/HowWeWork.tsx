import React from "react";
import { tinaField } from "tinacms/dist/react";
import { motion } from "framer-motion";
import { Workflow, Target, Rocket } from "lucide-react";
import type { AboutBlocksAboutContent } from "@tina/__generated__/types";

interface HowWeWorkProps {
  data: AboutBlocksAboutContent;
}

const ProcessIcon = ({ step }: { step: number }) => {
  const iconClass = "w-8 h-8";
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

  return (
    <section className="relative overflow-hidden">
      {/* Decorative Elements */}

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-primary/90 mb-4 flex items-center justify-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Our Process
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary/90"
            data-tina-field={tinaField(data, "howWeWorkTitle")}
          >
            {howWeWorkTitle}
          </motion.h2>
        </div>

        {/* Process Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {workPrinciples?.map(
            (principle, index) =>
              principle && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className="group relative"
                  data-tina-field={tinaField(principle)}
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/30 rounded-3xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/[0.05] via-secondary/[0.03] to-transparent">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl blur-xl" />
                        <div className="relative w-16 h-16 bg-card/80 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-primary/10 group-hover:border-secondary/20 transition-all duration-300">
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
                </motion.div>
              )
          )}
        </div>

        {/* Conclusion */}
        {howWeWorkConclusion && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <p
              className="text-lg text-muted-foreground/80 max-w-3xl mx-auto"
              data-tina-field={tinaField(data, "howWeWorkConclusion")}
            >
              {howWeWorkConclusion}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HowWeWork;
