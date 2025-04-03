import type { Collection } from "tinacms";

export const blogCollection: Collection = {
    label: "Blog",
    name: "blog",
    path: "content/global",
    match: {
        include: "blog",
    },
    format: "mdx",
    ui: {
        router: ({ document }) => {
            if (document._sys.filename === 'blog') {
                return `/blog`
            }

            return `/blog/${document._sys.filename}`;
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
            name: "featuredPosts",
            label: "Featured Posts",
            list: true,
            ui: {
                itemProps: (item) => ({
                    label: item?.title || "Featured Post",
                }),
            },
            fields: [
                {
                    type: "reference",
                    name: "post",
                    label: "Post",
                    collections: ["blog"],
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