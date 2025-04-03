import { TinaTemplate } from "tinacms";

export const testimonialsTemplate: TinaTemplate = {
    name: "testimonials",
    label: "Testimonials",
    fields: [
        {
            type: "string",
            name: "headline",
            label: "Headline",
            required: true,
        },
        {
            type: "rich-text",
            name: "testimonialDescription",
            label: "Description",
            required: false,
        },
        {
            type: "object",
            name: "testimonials",
            label: "Testimonials",
            list: true,
            fields: [
                {
                    type: "string",
                    name: "quote",
                    label: "Quote",
                    required: true,
                },
                {
                    type: "string",
                    name: "authorName",
                    label: "Author Name",
                    required: false,
                },
                {
                    type: "string",
                    name: "authorTitle",
                    label: "Author Title",
                    required: false,
                },
            ],
        },
    ],
}; 