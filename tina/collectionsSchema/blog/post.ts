import type { Collection } from "tinacms";

export const postCollection: Collection = {
    label: "Blog Posts",
    name: "blogPost",
    path: "content/posts",
    format: "mdx",
    ui: {
        router: ({ document }) => {
            return `/blog/${document._sys.filename}`;
        },
    },
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
            type: "string",
            name: "author",
            label: "Author",
        },
        {
            type: "datetime",
            name: "date",
            label: "Date",
        },
        {
            type: "image",
            name: "thumbnail",
            label: "Thumbnail",
        },
        {
            type: "rich-text",
            name: "content",
            label: "Content",
            isBody: true,
            templates: [
                {
                    name: "InfoBox",
                    label: "Info Box",
                    fields: [{ type: "string", name: "title", label: "Title" }],
                },
                {
                    name: "Quote",
                    label: "Quote",
                    fields: [{ type: "string", name: "author", label: "Author" }, { type: "string", name: "quote", label: "Quote" }],
                },
                {
                    name: "Image",
                    label: "Image",
                    fields: [{ type: "image", name: "image", label: "Image" }],
                },
                {
                    name: "ImageGallery",
                    label: "Image Gallery",
                    fields: [{ type: "image", name: "images", label: "Images" }],
                },
                {
                    name: "Video",
                    label: "Video",
                    fields: [{ type: "string", name: "url", label: "URL" }],
                },
                {
                    name: "CodeBlock",
                    label: "Code Block",
                    fields: [{ type: "string", name: "language", label: "Language" }],
                },
                {
                    name: "CallToAction",
                    label: "Call to Action",
                    fields: [{ type: "string", name: "title", label: "Title" }, { type: "string", name: "url", label: "URL" }],
                }
            ],
        },
        {
            type: "string",
            name: "category",
            label: "Category",
            options: ["Development", "Design", "Business"],
        },
        {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            ui: {
                component: "tags",
            },
        },
    ],
}; 