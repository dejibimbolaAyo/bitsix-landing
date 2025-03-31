import type { Template } from "tinacms";

export const blogListTemplate: Template = {
    name: "blogList",
    label: "Blog List",
    fields: [
        {
            type: "string",
            name: "listTitle",
            label: "List Title",
        },
        {
            type: "object",
            name: "categories",
            label: "Categories",
            list: true,
            fields: [
                {
                    type: "string",
                    name: "name",
                    label: "Name",
                },
            ],
        },
        {
            type: "object",
            name: "theme",
            label: "Theme",
            fields: [
                {
                    type: "string",
                    name: "style",
                    label: "Style",
                },
            ],
        },
    ],
};
