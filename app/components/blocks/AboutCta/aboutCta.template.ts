import type { Template } from "tinacms";

export const aboutCtaTemplate: Template = {
    name: "aboutCta",
    label: "Call to Action",
    fields: [
        {
            type: "string",
            name: "title",
            label: "Title",
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
            type: "string",
            name: "buttonText",
            label: "Button Text",
            required: true,
        },
        {
            type: "string",
            name: "buttonLink",
            label: "Button Link",
            required: true,
        },
    ],
};