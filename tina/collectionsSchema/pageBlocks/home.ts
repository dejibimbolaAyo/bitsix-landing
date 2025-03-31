import type { Collection } from "tinacms";

import { expertiseTemplate } from "@app/components/blocks/Expertise/expertise.template";
import { heroTemplate } from "@app/components/blocks/Hero/hero.template";
import { innovationTemplate } from "@app/components/blocks/Innovation/innovation.template";

export const homePageBlocksCollection: Collection = {
    label: "Home",
    name: "home",
    path: "content/blockPages",
    match: {
        include: "home",
    },
    format: "mdx",
    ui: {
        router: ({ document }) => {
            if (document._sys.filename === 'home') {
                return `/`
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
                heroTemplate,
                expertiseTemplate,
                innovationTemplate,
            ],
        },
    ],
}