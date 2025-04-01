import { Template } from "tinacms";

export const caseStudiesTemplate: Template = {
    name: "caseStudies",
    label: "Case Studies",
    fields: [
        {
            type: "string",
            name: "headline",
            label: "Section Headline",
            description: "Appears above the case studies grid",
            required: false,
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
                    label: "Article Title",
                    required: true,
                },
                {
                    type: "string",
                    name: "description",
                    label: "Article Description",
                    required: true,
                },
                {
                    type: "image",
                    name: "image",
                    label: "Featured Image",
                    required: true,
                },
                {
                    type: "string",
                    name: "author",
                    label: "Author Name",
                    required: true,
                },
                {
                    type: "string",
                    name: "date",
                    label: "Publication Date",
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
                    name: "industry",
                    label: "Industry",
                    required: false,
                },
                {
                    type: "string",
                    name: "results",
                    label: "Results",
                    required: false,
                },
            ],
        },
    ],
}; 