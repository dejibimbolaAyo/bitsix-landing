import type { Template } from "tinacms";

export const blogHeroTemplate: Template = {
    name: "blogHero",
    label: "Blog Hero",
    fields: [
        {
            type: "string",
            name: "title",
            label: "Page Title",
        },
        {
            type: "string",
            name: "blogSubtitle",
            label: "Subtitle",
            description: "Optional subtitle",
        },
        {
            type: "image",
            name: "blogImage",
            label: "Blog Image",
            description: "Main banner image",
        },
        {
            type: "string",
            name: "blogCtaText",
            label: "Call to Action Text",
        },
        {
            type: "string",
            name: "blogCtaLink",
            label: "Call to Action Link",
        },
        {
            type: "string",
            name: "blogLastUpdated",
            label: "Last Updated",
            description: "Last updated date",
        },
        {
            name: 'margin',
            description: 'Default is px-8 py-12 lg:py-16',
            label: 'Custom Margin',
            type: 'string',
        },
        {
            name: 'spacing',
            description: 'Default is gap-6',
            label: 'Custom Spacing',
            type: 'string',
        },
        {
            name: 'smallerMobileBodyText',
            description: 'Default text size on mobile is xl',
            label: 'Mobile Text Size (off = xl, on = lg)',
            type: 'boolean',
        },
    ],
};
