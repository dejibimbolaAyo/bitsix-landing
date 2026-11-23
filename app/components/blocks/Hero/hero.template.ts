import type { Template } from "tinacms";

export const heroTemplate: Template = {
    name: "hero",
    label: "Hero ",
    fields: [
        {
            type: "string",
            name: "title",
            label: "Page Title",
            required: true,
        },
        {
            type: "string",
            name: "heroSubtitle",
            label: "Subtitle",
            description: "Optional subtitle",
        },
        {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
            description: "Main banner image",
        },
        {
            type: "string",
            name: "heroCtaText",
            label: "Call to Action Text",
        },
        {
            type: "string",
            name: "heroCtaLink",
            label: "Call to Action Link",
        },
        {
            type: "string",
            name: "rightCardText",
            label: "Right Card Text",
        },
        {
            type: "string",
            name: "stat1Value",
            label: "Stat 1 Value",
        },
        {
            type: "string",
            name: "stat1Label",
            label: "Stat 1 Label",
        },
        {
            type: "string",
            name: "stat2Value",
            label: "Stat 2 Value",
        },
        {
            type: "string",
            name: "stat2Label",
            label: "Stat 2 Label",
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
