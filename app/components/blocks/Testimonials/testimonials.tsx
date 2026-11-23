import React from "react";
import { MessageSquare, Star } from "lucide-react";
import { tinaField } from "tinacms/dist/react";

import type { DigitalTransformationBlocksTestimonials } from "@tina/__generated__/types";

interface TestimonialsProps {
  data: DigitalTransformationBlocksTestimonials;
}

const MiniStarRating: React.FC = () => {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className="w-4 h-4 fill-secondary text-secondary"
        />
      ))}
    </div>
  );
};

const initialsFromName = (name?: string | null) => {
  if (!name) return "P";
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  return initials || "P";
};

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  const items = data.testimonials?.filter(Boolean).slice(0, 2) || [];

  return (
    <section className="relative py-20 bg-base-100">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Partner Feedback
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
            data-tina-field={tinaField(data, "headline")}
          >
            {data.headline || "What Our Partners Say"}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {items.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-card border border-neutral/10 shadow-md h-full"
              data-tina-field={tinaField(data.testimonials?.[index])}
            >
              <div>
                <div className="mb-4">
                  <MiniStarRating />
                </div>
                <p
                  className="text-base sm:text-lg text-neutral/80 italic leading-relaxed"
                  data-tina-field={tinaField(data.testimonials?.[index], "quote")}
                >
                  "{testimonial?.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-neutral/10 pt-4 mt-8">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10 text-primary font-bold text-sm">
                  {initialsFromName(testimonial?.authorName)}
                </div>
                <div>
                  <div
                    className="font-semibold text-primary text-sm"
                    data-tina-field={tinaField(data.testimonials?.[index], "authorName")}
                  >
                    {testimonial?.authorName || "Partner"}
                  </div>
                  <div
                    className="text-xs text-neutral/60"
                    data-tina-field={tinaField(data.testimonials?.[index], "authorTitle")}
                  >
                    {testimonial?.authorTitle || "BitSix client"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="/resources/testimonials"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline transition-colors"
          >
            Read more testimonials
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
