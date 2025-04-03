import type { Collection } from "tinacms";

import { engineersForHireHeroTemplate } from "@app/components/blocks/EngineersForHireHero/hero.template";
import { engineersForHireWhyHireEngineersTemplate } from "@app/components/blocks/EngineersForHireWhyHireEngineers/WhyHireEngineers.template";
import { engineersForHireHowBitSixEngineersHelpsTemplate } from "@app/components/blocks/EngineersForHireHowBitSixEngineersHelps/HowBitSixEngineersHelps.template";
import { engineersForHireServicesOfferedTemplate } from "@app/components/blocks/EngineersForHireServicesOffered/ServicesOffered.template";
import { engineersForHireIdealClientsTemplate } from "@app/components/blocks/EngineersForHireIdealClients/IdealClients.template";
import { engineersForHireEngagementProcessTemplate } from "@app/components/blocks/EngineersForHireEngagementProcess/EngagementProcess.template";
import { engineersForHireTestimonialsAndCaseStudiesTemplate } from "@app/components/blocks/EngineersForHireTestimonialsAndCaseStudies/TestimonialsAndCaseStudies.template";

export const engineersForHirePageBlocksCollection: Collection = {
    label: "EngineersForHire",
    name: "engineersForHire",
    path: "content/blockPages/services",
    match: {
        include: "engineers-for-hire",
    },
    format: "mdx",
    ui: {
        router: ({ document }) => {
            if (document._sys.filename === 'engineers-for-hire') {
                return `/services/engineers-for-hire`
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
                engineersForHireHeroTemplate,
                engineersForHireWhyHireEngineersTemplate,
                engineersForHireHowBitSixEngineersHelpsTemplate,
                engineersForHireServicesOfferedTemplate,
                engineersForHireIdealClientsTemplate,
                engineersForHireEngagementProcessTemplate,
                engineersForHireTestimonialsAndCaseStudiesTemplate
            ],
        },
    ],
}
