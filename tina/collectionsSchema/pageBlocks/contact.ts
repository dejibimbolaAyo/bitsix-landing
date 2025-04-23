import type { Collection } from "tinacms";

import { contactContactFormTemplate } from "@app/components/blocks/ContactContactForm/ContactForm.template";
import { contactHeroTemplate } from "@app/components/blocks/ContactHero/Hero.template";

export const contactPageBlocksCollection: Collection = {
    label: "Contact",
    name: "contact",
    path: "content/blockPages",
    match: {
        include: "contact",
    },
    format: "mdx",
    ui: {
        router: ({ document }) => {
            if (document._sys.filename === 'contact') {
                return `/contact`
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
                contactHeroTemplate,
                contactContactFormTemplate,
            ],
        },
    ],
}
