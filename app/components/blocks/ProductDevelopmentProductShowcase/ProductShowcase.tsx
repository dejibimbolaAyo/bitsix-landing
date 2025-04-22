import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import { ProductDevelopmentBlocksProductDevelopmentProductShowcase } from "@tina/__generated__/types";
interface ProductDevelopmentProductShowcaseProps {
  data: ProductDevelopmentBlocksProductDevelopmentProductShowcase;
}

const ProductDevelopmentProductShowcase: React.FC<
  ProductDevelopmentProductShowcaseProps
> = ({ data }) => {
  return (
    <section className="px-8 py-12 lg:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {data.productDevelopmentProductShowcaseTitle}
        </h2>
        {data.productDevelopmentProductShowcaseSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">
            {data.productDevelopmentProductShowcaseSubtitle}
          </h3>
        )}
        {data.productDevelopmentProductShowcaseContent && (
          <div className="prose max-w-none">
            <TinaMarkdown
              content={data.productDevelopmentProductShowcaseContent}
            />
          </div>
        )}
        {data.productDevelopmentProductShowcaseImage && (
          <img
            src={data.productDevelopmentProductShowcaseImage}
            alt={data.productDevelopmentProductShowcaseTitle}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.productDevelopmentProductShowcaseCtaText &&
          data.productDevelopmentProductShowcaseCtaLink && (
            <div className="mt-8">
              <a
                href={data.productDevelopmentProductShowcaseCtaLink}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                {data.productDevelopmentProductShowcaseCtaText}
              </a>
            </div>
          )}
      </div>
    </section>
  );
};

export default ProductDevelopmentProductShowcase;
