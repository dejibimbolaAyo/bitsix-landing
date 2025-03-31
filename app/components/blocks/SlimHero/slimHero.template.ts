import { Template } from "tinacms";

export const slimHeroTemplate: Template = {
    name: "slimHero",
    label: "Slim Hero",
    fields: [
        {
            type: "string",
            name: "headline",
            label: "Headline",
            required: true,
        },
        {
            type: "string",
            name: "subheadline",
            label: "Subheadline",
            required: true,
        },
        {
            type: "image",
            name: "backgroundImage",
            label: "Background Image",
            required: true,
        },
    ],
}; 