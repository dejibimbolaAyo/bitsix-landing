import type { Template } from "tinacms";

export const aboutHeroTemplate: Template = {
    name: "aboutHero",
    label: "Hero",
    fields: [
        {
            type: "string",
            name: "heroTitle",
            label: "Title",
            required: true,
        },
        {
            type: "string",
            name: "heroTagline",
            label: "Tagline",
            required: true,
        },
        {
            type: "string",
            name: "heroDescription",
            label: "Description",
            ui: {
                component: "textarea",
            },
            required: true,
        },
    ],
};
