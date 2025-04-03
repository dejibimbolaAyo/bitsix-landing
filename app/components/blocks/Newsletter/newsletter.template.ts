import type { Template } from "tinacms";

export const newsletterTemplate: Template = {
    name: "newsletter",
    label: "Newsletter",
    fields: [
        {
            type: "string",
            name: "newsletterTitle",
            label: "Title",
            required: true,
        },
        {
            type: "string",
            name: "newsletterDescription",
            label: "Description",
            required: true,
        },
        {
            type: "string",
            name: "newsletterButtonText",
            label: "Button Text",
            required: true,
        },
        {
            type: "string",
            name: "newsletterInputPlaceholder",
            label: "Input Placeholder",
            required: true,
        },
        {
            type: "object",
            name: "theme",
            label: "Theme",
            fields: [
                {
                    type: "string",
                    name: "background",
                    label: "Background Color",
                    options: ["primary", "secondary", "accent", "base-100", "base-200", "base-300"],
                },
                {
                    type: "string",
                    name: "textColor",
                    label: "Text Color",
                    options: ["primary-content", "secondary-content", "accent-content", "base-content"],
                },
            ],
        },
    ],
}; 