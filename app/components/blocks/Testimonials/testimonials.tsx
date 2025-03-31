import React from "react";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { DigitalTransformationBlocksTestimonials } from "@tina/__generated__/types";

interface TestimonialsProps {
  data: DigitalTransformationBlocksTestimonials;
}

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  return (
    <section className="py-24 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            data-tina-field={tinaField(data, "headline")}
          >
            {data.headline}
          </h2>
          {data.testimonialDescription && (
            <div
              className="prose prose-lg mx-auto"
              data-tina-field={tinaField(data, "testimonialDescription")}
            >
              <TinaMarkdown content={data.testimonialDescription} />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.testimonials?.map((testimonial, index) => (
            <div
              key={index}
              className="bg-base-200 rounded-lg p-6 relative"
              data-tina-field={tinaField(data.testimonials?.[index])}
            >
              <svg
                className="absolute -top-4 -left-4 h-8 w-8 text-primary"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-lg mb-6">{testimonial?.quote}</p>
              <div className="flex flex-col">
                <span className="font-semibold">{testimonial?.authorName}</span>
                <span className="text-base-content/70">
                  {testimonial?.authorTitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
