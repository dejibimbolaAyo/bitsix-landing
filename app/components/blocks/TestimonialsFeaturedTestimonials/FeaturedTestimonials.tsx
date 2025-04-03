import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface TestimonialsFeaturedTestimonialsProps {
  data: any;
}

const TestimonialsFeaturedTestimonials: React.FC<TestimonialsFeaturedTestimonialsProps> = ({ data }) => {
  return (
    <section className="px-8 py-12 lg:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.testimonialsFeaturedTestimonialsTitle}</h2>
        {data.testimonialsFeaturedTestimonialsSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">{data.testimonialsFeaturedTestimonialsSubtitle}</h3>
        )}
        {data.testimonialsFeaturedTestimonialsContent && (
          <div className="prose max-w-none">
            <TinaMarkdown content={data.testimonialsFeaturedTestimonialsContent} />
          </div>
        )}
        {data.testimonialsFeaturedTestimonialsImage && (
          <img 
            src={data.testimonialsFeaturedTestimonialsImage} 
            alt={data.testimonialsFeaturedTestimonialsTitle}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.testimonialsFeaturedTestimonialsCtaText && data.testimonialsFeaturedTestimonialsCtaLink && (
          <div className="mt-8">
            <a 
              href={data.testimonialsFeaturedTestimonialsCtaLink}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              {data.testimonialsFeaturedTestimonialsCtaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsFeaturedTestimonials;
