import type { Collection } from "tinacms";

import { testimonialsHeroTemplate } from "@app/components/blocks/TestimonialsHero/Hero.template";
import { testimonialsFeaturedTestimonialsTemplate } from "@app/components/blocks/TestimonialsFeaturedTestimonials/FeaturedTestimonials.template";
import { testimonialsTestimonialsListTemplate } from "@app/components/blocks/TestimonialsTestimonialsList/TestimonialsList.template";

export const testimonialsPageBlocksCollection: Collection = {
    label: "Testimonials",
    name: "testimonials",
    path: "content/blockPages/resources",
    match: {
        include: "testimonials",
    },
    format: "mdx",
    ui: {
        router: ({ document }) => {
            if (document._sys.filename === 'testimonials') {
                return `/resources/testimonials`
            }
            return `/${document._sys.filename}`
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
                testimonialsHeroTemplate,
                testimonialsFeaturedTestimonialsTemplate,
                testimonialsTestimonialsListTemplate
            ],
        },
    ],
}
