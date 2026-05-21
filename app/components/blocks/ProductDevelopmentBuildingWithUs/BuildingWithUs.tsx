import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import { Link } from "@remix-run/react";
import { ProductDevelopmentBlocksProductDevelopmentBuildingWithUs } from "@tina/__generated__/types";

interface ProductDevelopmentBuildingWithUsProps {
  data: ProductDevelopmentBlocksProductDevelopmentBuildingWithUs;
}

const ProductDevelopmentBuildingWithUs: React.FC<
  ProductDevelopmentBuildingWithUsProps
> = ({ data }) => {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-12 px-8 md:p-16 lg:p-20">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Text & Action Column - Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <h2
                data-tina-field={tinaField(data, "productDevelopmentBuildingWithUsTitle")}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white leading-tight"
              >
                {data.productDevelopmentBuildingWithUsTitle}
              </h2>
              {data.productDevelopmentBuildingWithUsSubtitle && (
                <p
                  data-tina-field={tinaField(data, "productDevelopmentBuildingWithUsSubtitle")}
                  className="text-lg sm:text-xl font-medium text-blue-100 mb-6"
                >
                  {data.productDevelopmentBuildingWithUsSubtitle}
                </p>
              )}
              {data.productDevelopmentBuildingWithUsContent && (
                <div
                  data-tina-field={tinaField(data, "productDevelopmentBuildingWithUsContent")}
                  className="prose prose-invert max-w-none text-blue-50/90 mb-8 leading-relaxed"
                >
                  <TinaMarkdown content={data.productDevelopmentBuildingWithUsContent} />
                </div>
              )}
              {data.productDevelopmentBuildingWithUsCtaText &&
                data.productDevelopmentBuildingWithUsCtaLink && (
                  <div>
                    <Link
                      to={data.productDevelopmentBuildingWithUsCtaLink}
                      className="btn btn-white bg-white text-blue-700 hover:bg-blue-50 border-0 btn-lg shadow-xl hover:-translate-y-0.5 transform transition-all duration-200"
                    >
                      {data.productDevelopmentBuildingWithUsCtaText}
                    </Link>
                  </div>
                )}
            </div>

            {/* Image Column - Right */}
            {data.productDevelopmentBuildingWithUsImage && (
              <div className="lg:col-span-5 relative w-full flex justify-center">
                <div className="relative w-full max-w-sm lg:max-w-none aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/10">
                  <img
                    data-tina-field={tinaField(data, "productDevelopmentBuildingWithUsImage")}
                    src={data.productDevelopmentBuildingWithUsImage}
                    alt={data.productDevelopmentBuildingWithUsTitle}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDevelopmentBuildingWithUs;
