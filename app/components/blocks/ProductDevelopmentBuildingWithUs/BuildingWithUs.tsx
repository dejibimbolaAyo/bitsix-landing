import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import { ProductDevelopmentBlocksProductDevelopmentBuildingWithUs } from "@tina/__generated__/types";

interface ProductDevelopmentBuildingWithUsProps {
  data: ProductDevelopmentBlocksProductDevelopmentBuildingWithUs;
}

const ProductDevelopmentBuildingWithUs: React.FC<
  ProductDevelopmentBuildingWithUsProps
> = ({ data }) => {
  return (
    <section className="px-8 py-12 lg:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {data.productDevelopmentBuildingWithUsTitle}
        </h2>
        {data.productDevelopmentBuildingWithUsSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">
            {data.productDevelopmentBuildingWithUsSubtitle}
          </h3>
        )}
        {data.productDevelopmentBuildingWithUsContent && (
          <div className="prose max-w-none">
            <TinaMarkdown
              content={data.productDevelopmentBuildingWithUsContent}
            />
          </div>
        )}
        {data.productDevelopmentBuildingWithUsImage && (
          <img
            src={data.productDevelopmentBuildingWithUsImage}
            alt={data.productDevelopmentBuildingWithUsTitle}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.productDevelopmentBuildingWithUsCtaText &&
          data.productDevelopmentBuildingWithUsCtaLink && (
            <div className="mt-8">
              <a
                href={data.productDevelopmentBuildingWithUsCtaLink}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                {data.productDevelopmentBuildingWithUsCtaText}
              </a>
            </div>
          )}
      </div>
    </section>
  );
};

export default ProductDevelopmentBuildingWithUs;
