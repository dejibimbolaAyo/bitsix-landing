import type { Template } from "tinacms";

export const expertiseTemplate: Template = {
    label: "Expertise",
    name: "expertise",
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
            label: "Section Heading",
            required: true,
        },
        {
            type: "string",
            name: "description",
            label: "Meta Description",
            description: "Brief description for SEO",
            ui: {
                component: "textarea",
            },
            required: true,
        },
        {
            type: "object",
            name: "carousel",
            label: "Carousel",
            list: true,
            ui: {
                itemProps: (item) => ({
                    label: item.title,
                }),
            },
            fields: [
                {
                    type: "image",
                    name: "image",
                    label: "Carousel Image",
                },
                {
                    type: "string",
                    name: "title",
                    label: "Carousel Title",
                },
                {
                    type: "string",
                    name: "description",
                    label: "Carousel Description",
                },
            ],
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
            type: "object",
            name: "subcopy",
            label: "Sub copy",
            required: true,
            list: true,
            ui: {
                itemProps: (item) => ({
                    label: item.title,
                }),
            },
            fields: [
                {
                    type: "string",
                    name: "title",
                    label: "Copy Title",
                },
                {
                    type: "string",
                    name: "description",
                    label: "Copy Description",
                    ui: {
                        component: "textarea",
                    },
                },
            ],
        },
    ],
};