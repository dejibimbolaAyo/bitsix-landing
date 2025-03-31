import type { Collection } from "tinacms";

import { blogHeroTemplate } from "@app/components/blocks/BlogHero/blogHero.template";
import { blogListTemplate } from "@app/components/blocks/BlogList/blogList.template";
import { newsletterTemplate } from "@app/components/blocks/Newsletter/newsletter.template";

export const blogPageBlocksCollection: Collection = {
    label: "Blog Page",
    name: "blogPage",
    path: "content/blockPages",
    match: {
        include: "blog",
    },
    format: "mdx",
    ui: {
        router: ({ document }) => {
            if (document._sys.filename === 'blog') {
                return `/blog`
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
                blogHeroTemplate,
                blogListTemplate,
                newsletterTemplate,
            ],
        },
    ],
}