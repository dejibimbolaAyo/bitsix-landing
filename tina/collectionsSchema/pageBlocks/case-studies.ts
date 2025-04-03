import type { Collection } from "tinacms";

import { caseStudiesHeroTemplate } from "@app/components/blocks/CaseStudiesHero/Hero.template";
import { caseStudiesFeaturedCaseStudiesTemplate } from "@app/components/blocks/CaseStudiesFeaturedCaseStudies/FeaturedCaseStudies.template";
import { caseStudiesCaseStudiesTemplate } from "@app/components/blocks/CaseStudiesCaseStudies/CaseStudies.template";

export const caseStudiesPageBlocksCollection: Collection = {
    label: "CaseStudies",
    name: "caseStudies",
    path: "content/blockPages",
    match: {
        include: "case-studies",
    },
    format: "mdx",
    ui: {
        router: ({ document }) => {
            if (document._sys.filename === 'case-studies') {
                return `/case-studies`
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
                caseStudiesHeroTemplate,
                caseStudiesFeaturedCaseStudiesTemplate,
                caseStudiesCaseStudiesTemplate
            ],
        },
    ],
}
