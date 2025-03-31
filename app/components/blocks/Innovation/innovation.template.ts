import type { Template } from "tinacms";

export const innovationTemplate: Template = {
    name: "innovation",
    label: "Innovation",
    fields: [
        {
            type: "string",
            name: "title",
            label: "Section Title",
            required: true,
        },
        {
            type: "string",
            name: "header",
            label: "Main Heading",
            required: true,
        },
        {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
                component: "textarea",
            },
            required: true,
        },
        {
            type: "object",
            name: "features",
            label: "Innovation Features",
            list: true,
            ui: {
                itemProps: (item) => ({
                    label: item?.title || "New Feature",
                }),
                defaultItem: {
                    title: "New Feature",
                    description: "Feature description",
                    icon: "cube",
                },
            },
            fields: [
                {
                    type: "string",
                    name: "title",
                    label: "Feature Title",
                    required: true,
                },
                {
                    type: "string",
                    name: "description",
                    label: "Feature Description",
                    required: true,
                },
                {
                    type: "string",
                    name: "icon",
                    label: "Icon Name",
                    description: "Name of the icon to display (e.g., cube, chart, gear)",
                    required: true,
                }
            ]
        },
        {
            type: "string",
            name: "ctaText",
            label: "Call to Action Text",
            required: true,
        },
        {
            type: "string",
            name: "ctaLink",
            label: "Call to Action Link",
            required: true,
        },
        {
            type: "string",
            name: "secondaryCtaText",
            label: "Secondary CTA Text",
        },
        {
            type: "string",
            name: "secondaryCtaLink",
            label: "Secondary CTA Link",
        }
    ],
}; 