import React from "react";
import { tinaField } from "tinacms/dist/react";
import { CheckCircle2, Lightbulb, Wrench, Rocket } from "lucide-react";
import type { AboutBlocksAboutContent } from "@tina/__generated__/types";

interface AboutContentProps {
  data: AboutBlocksAboutContent;
}

const AboutContent: React.FC<AboutContentProps> = ({ data }) => {
  const {
    introduction,
    whatWeDoTitle,
    whatWeDoDescription,
    services,
    whatWeDoConclusion,
    howWeWorkTitle,
    workPrinciples,
    howWeWorkConclusion,
    whyBitSixTitle,
    whyBitSix,
    whyBitSixConclusion,
  } = data;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Introduction */}
        <section>
          <p
            className="text-lg text-muted-foreground"
            data-tina-field={tinaField(data, "introduction")}
          >
            {introduction}
          </p>
        </section>

        {/* What We Do */}
        <section>
          <h2
            className="text-3xl font-bold mb-8"
            data-tina-field={tinaField(data, "whatWeDoTitle")}
          >
            {whatWeDoTitle}
          </h2>
          <p
            className="text-lg text-muted-foreground mb-8"
            data-tina-field={tinaField(data, "whatWeDoDescription")}
          >
            {whatWeDoDescription}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {services?.map(
              (service, index) =>
                service && (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <p
                      className="text-muted-foreground"
                      data-tina-field={tinaField(service, "description")}
                    >
                      {service.title} – {service.description}
                    </p>
                  </div>
                )
            )}
          </div>
          <p
            className="text-lg text-muted-foreground mt-8"
            data-tina-field={tinaField(data, "whatWeDoConclusion")}
          >
            {whatWeDoConclusion}
          </p>
        </section>

        {/* How We Work */}
        <section>
          <h2
            className="text-3xl font-bold mb-8"
            data-tina-field={tinaField(data, "howWeWorkTitle")}
          >
            {howWeWorkTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {workPrinciples?.map(
              (principle, index) =>
                principle && (
                  <div key={index} className="bg-card p-6 rounded-lg border">
                    <h3
                      className="text-xl font-semibold mb-3"
                      data-tina-field={tinaField(principle, "title")}
                    >
                      {principle.title}
                    </h3>
                    <p
                      className="text-muted-foreground"
                      data-tina-field={tinaField(principle, "description")}
                    >
                      {principle.description}
                    </p>
                  </div>
                )
            )}
          </div>
          <p
            className="text-lg text-muted-foreground mt-8"
            data-tina-field={tinaField(data, "howWeWorkConclusion")}
          >
            {howWeWorkConclusion}
          </p>
        </section>

        {/* Why BitSix */}
        <section>
          <h2
            className="text-3xl font-bold mb-8"
            data-tina-field={tinaField(data, "whyBitSixTitle")}
          >
            {whyBitSixTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyBitSix?.map(
              (item, index) =>
                item && (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    {item.icon === "Lightbulb" && (
                      <Lightbulb className="w-12 h-12 text-primary mb-4" />
                    )}
                    {item.icon === "Wrench" && (
                      <Wrench className="w-12 h-12 text-primary mb-4" />
                    )}
                    {item.icon === "Rocket" && (
                      <Rocket className="w-12 h-12 text-primary mb-4" />
                    )}
                    <h3
                      className="text-xl font-semibold mb-2"
                      data-tina-field={tinaField(item, "title")}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-muted-foreground"
                      data-tina-field={tinaField(item, "description")}
                    >
                      {item.description}
                    </p>
                  </div>
                )
            )}
          </div>
          <p
            className="text-lg text-muted-foreground mt-8 text-center"
            data-tina-field={tinaField(data, "whyBitSixConclusion")}
          >
            {whyBitSixConclusion}
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutContent;
