import { caseStudiesTemplate } from "@app/components/blocks/CaseStudies/caseStudies.template";
import { serviceContentTemplate } from "@app/components/blocks/ServiceContent/serviceContent.template";
import { slimHeroTemplate } from "@app/components/blocks/SlimHero/slimHero.template";
import { testimonialsTemplate } from "@app/components/blocks/Testimonials/testimonials.template";
import type { Collection } from "tinacms";

export const digitalTransformationPageBlocksCollection: Collection = {
    label: "Digital Transformation",
    name: "digitalTransformation",
    path: "content/blockPages/services",
    match: {
        include: "digital-transformation",
    },
    format: "mdx",
    ui: {
        router: ({ document }) => {
            if (document._sys.filename === 'digitalTransformation') {
                return `/services/digital-transformation`
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
                slimHeroTemplate,
                serviceContentTemplate,
                caseStudiesTemplate,
                testimonialsTemplate,
            ],
        },
    ],
}