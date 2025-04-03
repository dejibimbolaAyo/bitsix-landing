import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface TestimonialsTestimonialsListProps {
  data: any;
}

const TestimonialsTestimonialsList: React.FC<TestimonialsTestimonialsListProps> = ({ data }) => {
  return (
    <section className="px-8 py-12 lg:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.testimonialsTestimonialsListTitle}</h2>
        {data.testimonialsTestimonialsListSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">{data.testimonialsTestimonialsListSubtitle}</h3>
        )}
        {data.testimonialsTestimonialsListContent && (
          <div className="prose max-w-none">
            <TinaMarkdown content={data.testimonialsTestimonialsListContent} />
          </div>
        )}
        {data.testimonialsTestimonialsListImage && (
          <img 
            src={data.testimonialsTestimonialsListImage} 
            alt={data.testimonialsTestimonialsListTitle}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.testimonialsTestimonialsListCtaText && data.testimonialsTestimonialsListCtaLink && (
          <div className="mt-8">
            <a 
              href={data.testimonialsTestimonialsListCtaLink}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              {data.testimonialsTestimonialsListCtaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsTestimonialsList;
