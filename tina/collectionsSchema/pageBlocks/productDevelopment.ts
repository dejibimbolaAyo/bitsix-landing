import type { Collection } from "tinacms";

import { productDevelopmentHeroTemplate } from "@app/components/blocks/ProductDevelopmentHero/Hero.template";
import { productDevelopmentProductShowcaseTemplate } from "@app/components/blocks/ProductDevelopmentProductShowcase/ProductShowcase.template";
import { productDevelopmentTestimonialsTemplate } from "@app/components/blocks/ProductDevelopmentTestimonials/Testimonials.template";
import { productDevelopmentBuildingWithUsTemplate } from "@app/components/blocks/ProductDevelopmentBuildingWithUs/BuildingWithUs.template";

export const productDevelopmentPageBlocksCollection: Collection = {
    label: "ProductDevelopment",
    name: "productDevelopment",
    path: "content/blockPages/services/",
    match: {
        include: "product-development",
    },
    format: "mdx",
    ui: {
        router: ({ document }) => {
            if (document._sys.filename === 'product-development') {
                return `/services/product-development`
            }
            return `/services/product-development/${document._sys.filename}`
        },
    },
    fields: [
        {
            label: 'Page Sections',
            name: 'blocks',
            type: 'object',
            list: true,
            ui: {
                visualSelector: true,
            },
            templates: [
                productDevelopmentHeroTemplate,
                productDevelopmentProductShowcaseTemplate,
                productDevelopmentTestimonialsTemplate,
                productDevelopmentBuildingWithUsTemplate
            ],
        },
    ],
}
