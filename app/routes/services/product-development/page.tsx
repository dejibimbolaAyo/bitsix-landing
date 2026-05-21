import React from "react";

import ProductDevelopmentBuildingWithUs from "@app/components/blocks/ProductDevelopmentBuildingWithUs/BuildingWithUs";
import ProductDevelopmentHero from "@app/components/blocks/ProductDevelopmentHero/Hero";
import ProductDevelopmentProductShowcase from "@app/components/blocks/ProductDevelopmentProductShowcase/ProductShowcase";
import ProductDevelopmentTestimonials from "@app/components/blocks/ProductDevelopmentTestimonials/Testimonials";
import type {
  ProductDevelopmentQuery,
  ProductDevelopmentBlocksProductDevelopmentHero,
  ProductDevelopmentBlocksProductDevelopmentProductShowcase,
  ProductDevelopmentBlocksProductDevelopmentTestimonials,
  ProductDevelopmentBlocksProductDevelopmentBuildingWithUs,
} from "@tina/__generated__/types";

interface PageProps {
  data: ProductDevelopmentQuery;
}

export const ProductDevelopmentPage: React.FC<PageProps> = ({ data }) => {
  const page = data.productDevelopment;

  const Hero = page.blocks?.find(
    (block) => block?.__typename === "ProductDevelopmentBlocksProductDevelopmentHero"
  ) as ProductDevelopmentBlocksProductDevelopmentHero | undefined;
  const ProductShowcase = page.blocks?.find(
    (block) => block?.__typename === "ProductDevelopmentBlocksProductDevelopmentProductShowcase"
  ) as ProductDevelopmentBlocksProductDevelopmentProductShowcase | undefined;
  const Testimonials = page.blocks?.find(
    (block) => block?.__typename === "ProductDevelopmentBlocksProductDevelopmentTestimonials"
  ) as ProductDevelopmentBlocksProductDevelopmentTestimonials | undefined;
  const BuildingWithUs = page.blocks?.find(
    (block) => block?.__typename === "ProductDevelopmentBlocksProductDevelopmentBuildingWithUs"
  ) as ProductDevelopmentBlocksProductDevelopmentBuildingWithUs | undefined;

  return (
    <div>
      {Hero && <ProductDevelopmentHero data={Hero} />}
      {ProductShowcase && <ProductDevelopmentProductShowcase data={ProductShowcase} />}
      {Testimonials && <ProductDevelopmentTestimonials data={Testimonials} />}
      {BuildingWithUs && <ProductDevelopmentBuildingWithUs data={BuildingWithUs} />}
    </div>
  );
};

export default ProductDevelopmentPage;