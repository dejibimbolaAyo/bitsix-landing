import type { Collection } from "tinacms";

import { aboutContentTemplate } from "@app/components/blocks/AboutContent/aboutContent.template";
import { aboutCtaTemplate } from "@app/components/blocks/AboutCta/aboutCta.template";
import { aboutHeroTemplate } from "@app/components/blocks/AboutHero/aboutHero.template";
import { teamTemplate } from "@app/components/blocks/Team/team.template";

export const aboutPageBlocksCollection: Collection = {
    label: "About",
    name: "about",
    path: "content/blockPages",
    match: {
        include: "about",
    },
    format: "mdx",
    ui: {
        router: ({ document }) => {
            if (document._sys.filename === 'about') {
                return `/about`
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
                aboutHeroTemplate,
                aboutContentTemplate,
                aboutCtaTemplate,
                teamTemplate,
            ],
        },
    ],
}