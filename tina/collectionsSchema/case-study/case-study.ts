import type { Collection } from "tinacms";

export const caseStudiesCollection: Collection = {
    label: "Case Studies",
    name: "caseStudies",
    path: "content/global",
    match: {
        include: "case-studies",
    },
    format: "mdx",
    ui: {
        router: ({ document }) => {
            if (document._sys.filename === 'case-studies",') {
                return `/case-studies",`
            }

            return `/case-studies/${document._sys.filename}`;
        },
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
            type: "object",
            name: "featuredCaseStudies",
            label: "Featured Case Studies",
            list: true,
            ui: {
                itemProps: (item) => ({
                    label: item?.title || "Featured Case Study",
                }),
            },
            fields: [
                {
                    type: "reference",
                    name: "caseStudy",
                    label: "Case Study",
                    collections: ["caseStudies"],
                    required: true,
                },
                {
                    type: "string",
                    name: "title",
                    label: "Display Title",
                    required: true,
                },
                {
                    type: "string",
                    name: "description",
                    label: "Display Description",
                    ui: {
                        component: "textarea",
                    },
                },
            ],
        },
        {
            type: "object",
            name: "categories",
            label: "Categories",
            list: true,
            ui: {
                itemProps: (item) => ({
                    label: item?.name || "Category",
                }),
            },
            fields: [
                {
                    type: "string",
                    name: "name",
                    label: "Name",
                    required: true,
                },
                {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: {
                        component: "textarea",
                    },
                },
                {
                    type: "image",
                    name: "thumbnail",
                    label: "Thumbnail",
                },
            ],
        },
        {
            type: "object",
            name: "seo",
            label: "SEO",
            fields: [
                {
                    type: "string",
                    name: "title",
                    label: "Title",
                },
                {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: {
                        component: "textarea",
                    },
                },
                {
                    type: "image",
                    name: "image",
                    label: "Image",
                },
            ],
        },
    ],
}; 