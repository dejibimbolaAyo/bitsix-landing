import type { Collection } from "tinacms";

import { blogPostHeaderTemplate } from "@app/components/blocks/BlogPostHeader/blogPostHeader.template";

export const blogPostPageBlocksCollection: Collection = {
    label: "Blog Post Page",
    name: "blogPostPage",
    path: "content/blockPages",
    match: {
        include: "blogPost",
    },
    format: "mdx",
    ui: {
        router: ({ document }) => {
            if (document._sys.filename === 'blogPost') {
                return `/blog/${document._sys.filename}`
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
                blogPostHeaderTemplate,
            ],
        },
    ],
}