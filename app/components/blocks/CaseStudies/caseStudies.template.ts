import { Template } from "tinacms";

export const caseStudiesTemplate: Template = {
    name: "caseStudies",
    label: "Case Studies",
    fields: [
        {
            type: "string",
            name: "caseStudiesHeadline",
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
                    name: "studyTitle",
                    label: "Study Title",
                    required: true,
                },
                {
                    type: "string",
                    name: "studyDescription",
                    label: "Study Description",
                    required: true,
                },
                {
                    type: "image",
                    name: "studyImage",
                    label: "Study Image",
                    required: true,
                },
                {
                    type: "string",
                    name: "studyAuthor",
                    label: "Study Author",
                    required: true,
                },
                {
                    type: "string",
                    name: "studyPublishedDate",
                    label: "Study Published Date",
                    required: true,
                },
                {
                    type: "string",
                    name: "studyClientName",
                    label: "Study Client Name",
                    required: true,
                },
                {
                    type: "string",
                    name: "studyIndustry",
                    label: "Study Industry",
                    required: false,
                },
                {
                    type: "string",
                    name: "studyResults",
                    label: "Study Results",
                    required: false,
                },
            ],
        },
    ],
}; 