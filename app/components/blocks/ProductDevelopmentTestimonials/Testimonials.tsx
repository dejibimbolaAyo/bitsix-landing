import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { ProductDevelopmentBlocksProductDevelopmentTestimonials } from "@tina/__generated__/types";

interface ProductDevelopmentTestimonialsProps {
  data: ProductDevelopmentBlocksProductDevelopmentTestimonials;
}

const ProductDevelopmentTestimonials: React.FC<
  ProductDevelopmentTestimonialsProps
> = ({ data }) => {
  return (
    <section className="px-8 py-12 lg:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {data.productDevelopmentTestimonialsTitle}
        </h2>
        {data.productDevelopmentTestimonialsSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">
            {data.productDevelopmentTestimonialsSubtitle}
          </h3>
        )}
        {data.productDevelopmentTestimonialsContent && (
          <div className="prose max-w-none">
            <TinaMarkdown
              content={data.productDevelopmentTestimonialsContent}
            />
          </div>
        )}
        {data.productDevelopmentTestimonialsImage && (
          <img
            src={data.productDevelopmentTestimonialsImage}
            alt={data.productDevelopmentTestimonialsTitle}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.productDevelopmentTestimonialsCtaText &&
          data.productDevelopmentTestimonialsCtaLink && (
            <div className="mt-8">
              <a
                href={data.productDevelopmentTestimonialsCtaLink}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                {data.productDevelopmentTestimonialsCtaText}
              </a>
            </div>
          )}
      </div>
    </section>
  );
};

export default ProductDevelopmentTestimonials;
