import { Template } from "tinacms";

export const serviceContentTemplate: Template = {
    name: "serviceContent",
    label: "Service Content",
    fields: [
        {
            type: "string",
            name: "headline",
            label: "Headline",
            required: true,
        },
        {
            type: "rich-text",
            name: "serviceDescription",
            label: "Service Description",
            required: false,
        },
        {
            type: "object",
            name: "offerings",
            label: "Service Offerings",
            list: true,
            fields: [
                {
                    type: "string",
                    name: "offeringTitle",
                    label: "Title",
                    required: false,
                },
                {
                    type: "string",
                    name: "description",
                    label: "Description",
                    required: true,
                },
            ],
        },
        {
            type: "string",
            name: "partnerText",
            label: "Partner Text",
            required: true,
        },
        {
            type: "object",
            name: "callToAction",
            label: "Call to Action",
            fields: [
                {
                    type: "string",
                    name: "text",
                    label: "Text",
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
        },
    ],
}; 