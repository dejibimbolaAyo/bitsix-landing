import type { Collection } from "tinacms";

export const ComingSoon: Collection = {
    label: "Comming Soon Content",
    name: "commingSoon",
    path: "content/page",
    format: "mdx",
    fields: [
        {
            type: "string",
            name: "header",
            label: "Header",
        },
        {
            type: "string",
            name: "subtext",
            label: "Subtext",
        },
        {
            type: "object",
            name: "logo",
            label: "Logo",
            fields: [
                { type: "image", name: "default", label: "BitSix Logo" },
                { type: "string", name: "alt", label: "BitSix Logo" },
            ],
        },
    ],
    ui: {
        router: ({ document }) => {
            if (document._sys.filename === "index") {
                return "/";
            }
            return undefined;
        },
    },
};