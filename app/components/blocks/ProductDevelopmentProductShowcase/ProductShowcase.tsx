import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import { Link } from "@remix-run/react";
import { ProductDevelopmentBlocksProductDevelopmentProductShowcase } from "@tina/__generated__/types";

interface ProductDevelopmentProductShowcaseProps {
  data: ProductDevelopmentBlocksProductDevelopmentProductShowcase;
}

const ProductDevelopmentProductShowcase: React.FC<
  ProductDevelopmentProductShowcaseProps
> = ({ data }) => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Column - Left (Alternating from Hero) */}
          {data.productDevelopmentProductShowcaseImage && (
            <div className="lg:col-span-5 order-2 lg:order-1 relative w-full flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <img
                  data-tina-field={tinaField(data, "productDevelopmentProductShowcaseImage")}
                  src={data.productDevelopmentProductShowcaseImage}
                  alt={data.productDevelopmentProductShowcaseTitle}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          )}

          {/* Text Content Column - Right */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <h2
              data-tina-field={tinaField(data, "productDevelopmentProductShowcaseTitle")}
              className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4"
            >
              {data.productDevelopmentProductShowcaseTitle}
            </h2>
            {data.productDevelopmentProductShowcaseSubtitle && (
              <p
                data-tina-field={tinaField(data, "productDevelopmentProductShowcaseSubtitle")}
                className="text-lg text-blue-600 font-semibold mb-6"
              >
                {data.productDevelopmentProductShowcaseSubtitle}
              </p>
            )}
            {data.productDevelopmentProductShowcaseContent && (
              <div
                data-tina-field={tinaField(data, "productDevelopmentProductShowcaseContent")}
                className="prose prose-slate max-w-none text-slate-600 mb-8 leading-relaxed 
                  prose-ul:list-none prose-ul:pl-0 
                  prose-li:relative prose-li:pl-6 prose-li:mb-3
                  prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-[10px] 
                  prose-li:before:h-1.5 prose-li:before:w-1.5 prose-li:before:rounded-full 
                  prose-li:before:bg-blue-500"
              >
                <TinaMarkdown content={data.productDevelopmentProductShowcaseContent} />
              </div>
            )}
            {data.productDevelopmentProductShowcaseCtaText &&
              data.productDevelopmentProductShowcaseCtaLink && (
                <div className="mt-2">
                  <Link
                    to={data.productDevelopmentProductShowcaseCtaLink}
                    className="btn btn-outline btn-primary shadow-sm hover:-translate-y-0.5 transform transition-all duration-200"
                  >
                    {data.productDevelopmentProductShowcaseCtaText}
                  </Link>
                </div>
              )}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProductDevelopmentProductShowcase;
