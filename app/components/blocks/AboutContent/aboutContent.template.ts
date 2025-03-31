import type { Template } from "tinacms";

export const aboutContentTemplate: Template = {
    name: "aboutContent",
    label: "Content",
    fields: [
        {
            type: "string",
            name: "introduction",
            label: "Introduction",
            ui: {
                component: "textarea",
            },
            required: true,
        },
        {
            type: "string",
            name: "whatWeDoTitle",
            label: "What We Do Title",
            required: true,
        },
        {
            type: "string",
            name: "whatWeDoDescription",
            label: "What We Do Description",
            ui: {
                component: "textarea",
            },
            required: true,
        },
        {
            type: "object",
            name: "services",
            label: "Services",
            list: true,
            ui: {
                itemProps: (item) => ({
                    label: item?.title || "Service",
                }),
            },
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
            ],
        },
        {
            type: "string",
            name: "whatWeDoConclusion",
            label: "What We Do Conclusion",
            ui: {
                component: "textarea",
            },
            required: true,
        },
        {
            type: "string",
            name: "howWeWorkTitle",
            label: "How We Work Title",
            required: true,
        },
        {
            type: "object",
            name: "workPrinciples",
            label: "Work Principles",
            list: true,
            ui: {
                itemProps: (item) => ({
                    label: item?.title || "Principle",
                }),
            },
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
            ],
        },
        {
            type: "string",
            name: "howWeWorkConclusion",
            label: "How We Work Conclusion",
            ui: {
                component: "textarea",
            },
            required: true,
        },
        {
            type: "string",
            name: "whyBitSixTitle",
            label: "Why BitSix Title",
            required: true,
        },
        {
            type: "object",
            name: "whyBitSix",
            label: "Why BitSix Items",
            list: true,
            ui: {
                itemProps: (item) => ({
                    label: item?.title || "Item",
                }),
            },
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
                    name: "icon",
                    label: "Icon",
                    options: ["Lightbulb", "Wrench", "Rocket"],
                    required: true,
                },
            ],
        },
        {
            type: "string",
            name: "whyBitSixConclusion",
            label: "Why BitSix Conclusion",
            ui: {
                component: "textarea",
            },
            required: true,
        },
    ],
};