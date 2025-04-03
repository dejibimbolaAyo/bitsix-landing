import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { ProductDevelopmentBlocksProductDevelopmentHero } from "@tina/__generated__/types";
interface ProductDevelopmentHeroProps {
  data: ProductDevelopmentBlocksProductDevelopmentHero;
}

const ProductDevelopmentHero: React.FC<ProductDevelopmentHeroProps> = ({
  data,
}) => {
  return (
    <section className="px-8 py-12 lg:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {data.productDevelopmentHeroTitle}
        </h2>
        {data.productDevelopmentHeroSubtitle && (
          <h3 className="text-xl md:text-2xl mb-6">
            {data.productDevelopmentHeroSubtitle}
          </h3>
        )}
        {data.productDevelopmentHeroContent && (
          <div className="prose max-w-none">
            <TinaMarkdown content={data.productDevelopmentHeroContent} />
          </div>
        )}
        {data.productDevelopmentHeroImage && (
          <img
            src={data.productDevelopmentHeroImage}
            alt={data.productDevelopmentHeroTitle || "Product Development Hero"}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.productDevelopmentHeroCtaText &&
          data.productDevelopmentHeroCtaLink && (
            <div className="mt-8">
              <a
                href={data.productDevelopmentHeroCtaLink}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                {data.productDevelopmentHeroCtaText}
              </a>
            </div>
          )}
      </div>
    </section>
  );
};

export default ProductDevelopmentHero;
