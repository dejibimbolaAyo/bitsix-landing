import type { Collection } from "tinacms";

import { ctoForHireEngagementProcessTemplate } from "@app/components/blocks/CtoForHireEngagementProcess/EngagementProcess.template";
import { ctoForHireHeroTemplate } from "@app/components/blocks/CtoForHireHero/Hero.template";
import { ctoForHireHowBitSixCtoHelpsTemplate } from "@app/components/blocks/CtoForHireHowBitSixCtoHelps/HowBitSixCtoHelps.template";
import { ctoForHireIdealClientsTemplate } from "@app/components/blocks/CtoForHireIdealClients/IdealClients.template";
import { ctoForHireServicesOfferedTemplate } from "@app/components/blocks/CtoForHireServicesOffered/ServicesOffered.template";
import { ctoForHireTestimonialsAndCaseStudiesTemplate } from "@app/components/blocks/CtoForHireTestimonialsAndCaseStudies/TestimonialsAndCaseStudies.template";
import { ctoForHireWhyHireCtoTemplate } from "@app/components/blocks/CtoForHireWhyHireCto/WhyHireCto.template";

export const ctoForHirePageBlocksCollection: Collection = {
    label: "CtoForHire",
    name: "ctoForHire",
    path: "content/blockPages/services",
    match: {
        include: "cto-for-hire",
    },
    format: "mdx",
    ui: {
        router: ({ document }) => {
            if (document._sys.filename === 'cto-for-hire') {
                return `/services/cto-for-hire`
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
                ctoForHireHeroTemplate,
                ctoForHireWhyHireCtoTemplate,
                ctoForHireHowBitSixCtoHelpsTemplate,
                ctoForHireServicesOfferedTemplate,
                ctoForHireIdealClientsTemplate,
                ctoForHireEngagementProcessTemplate,
                ctoForHireTestimonialsAndCaseStudiesTemplate
            ],
        },
    ],
}
