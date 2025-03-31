import { Template } from "tinacms";

export const caseStudiesTemplate: Template = {
    name: "caseStudies",
    label: "Case Studies",
    fields: [
        {
            type: "string",
            name: "headline",
            label: "Headline",
            required: true,
        },
        {
            type: "rich-text",
            name: "description",
            label: "Description",
            required: true,
        },
        {
            type: "object",
            name: "studies",
            label: "Case Studies",
            list: true,
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
                    required: true,
                },
                {
                    type: "image",
                    name: "image",
                    label: "Image",
                    required: true,
                },
                {
                    type: "string",
                    name: "clientName",
                    label: "Client Name",
                    required: true,
                },
                {
                    type: "string",
                    name: "results",
                    label: "Results",
                    required: true,
                },
            ],
        },
    ],
}; 