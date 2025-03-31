import React from "react";
import { tinaField } from "tinacms/dist/react";
import { motion } from "framer-motion";
import { Palette, Clapperboard, DollarSign } from "lucide-react";
import type { AboutBlocksAboutContent } from "@tina/__generated__/types";

interface WhatWeDoProps {
  data: AboutBlocksAboutContent;
}

const ServiceIcon = ({ service }: { service: string }) => {
  const iconClass = "w-8 h-8";
  switch (service.toLowerCase()) {
    case "website & mobile app design":
      return <Palette className={iconClass} />;
    case "motion graphics & animation":
      return <Clapperboard className={iconClass} />;
    case "paid online advertising":
      return <DollarSign className={iconClass} />;
    default:
      return <Palette className={iconClass} />;
  }
};

const WhatWeDo: React.FC<WhatWeDoProps> = ({ data }) => {
  const { whatWeDoTitle, whatWeDoDescription, services, whatWeDoConclusion } =
    data;

  return (
    <section className="relative overflow-hidden py-24">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Main Content */}
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              data-tina-field={tinaField(data, "whatWeDoTitle")}
            >
              {whatWeDoTitle}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground/80 mb-8"
              data-tina-field={tinaField(data, "whatWeDoDescription")}
            >
              {whatWeDoDescription}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors duration-300"
            >
              Consult with us today
            </motion.button>
          </div>

          {/* Right Column - Services */}
          <div className="space-y-8">
            {services?.map(
              (service, index) =>
                service && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    key={index}
                    className="group flex items-start gap-6"
                    data-tina-field={tinaField(service)}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/5 flex items-center justify-center group-hover:from-primary/15 group-hover:to-secondary/10 transition-all duration-300">
                      <ServiceIcon service={service.title || ""} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground/80 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                )
            )}
          </div>
        </div>

        {whatWeDoConclusion && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-muted-foreground/80 max-w-2xl mt-16"
            data-tina-field={tinaField(data, "whatWeDoConclusion")}
          >
            {whatWeDoConclusion}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default WhatWeDo;
