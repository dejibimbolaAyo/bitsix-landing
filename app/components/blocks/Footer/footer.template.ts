import { Template } from "tinacms";

export const footerTemplate: Template = {
    name: "footer",
    label: "Footer",
    fields: [
        {
            type: "object",
            name: "logo",
            label: "Logo",
            required: true,
            fields: [
                {
                    type: "image",
                    name: "default",
                    label: "Logo Image",
                    required: true,
                },
                {
                    type: "string",
                    name: "alt",
                    label: "Alt Text",
                    required: true,
                }
            ]
        },
        {
            type: "string",
            name: "logoText",
            label: "Logo Text",
        },
        {
            type: "string",
            name: "newsletterTitle",
            label: "Newsletter Title",
            required: true,
        },
        {
            type: "string",
            name: "newsletterDescription",
            label: "Newsletter Description",
            required: true,
        },
        {
            type: "string",
            name: "newsletterDisclaimer",
            label: "Newsletter Disclaimer",
            required: true,
        },
        {
            type: "object",
            name: "quickLinks",
            label: "Quick Links",
            list: true,
            ui: {
                itemProps: (item) => ({
                    label: item?.name || "New Quick Link",
                }),
                defaultItem: {
                    name: "New Quick Link",
                    href: "/",
                },
            },
            fields: [
                {
                    type: "string",
                    name: "name",
                    label: "Link Name",
                    required: true,
                },
                {
                    type: "string",
                    name: "href",
                    label: "Link URL",
                    required: true,
                },
            ],
        },
        {
            type: "object",
            name: "resources",
            label: "Resources",
            list: true,
            ui: {
                itemProps: (item) => ({
                    label: item?.name || "New Resource",
                }),
                defaultItem: {
                    name: "New Resource",
                    href: "/",
                },
            },
            fields: [
                {
                    type: "string",
                    name: "name",
                    label: "Resource Name",
                    required: true,
                },
                {
                    type: "string",
                    name: "href",
                    label: "Resource URL",
                    required: true,
                },
            ],
        },
        {
            type: "object",
            name: "socialLinks",
            label: "Social Links",
            list: true,
            ui: {
                itemProps: (item) => ({
                    label: item?.name || "New Social Link",
                }),
                defaultItem: {
                    name: "New Social",
                    href: "https://",
                    icon: "facebook",
                },
            },
            fields: [
                {
                    type: "string",
                    name: "name",
                    label: "Platform Name",
                    required: true,
                },
                {
                    type: "string",
                    name: "href",
                    label: "Profile URL",
                    required: true,
                },
                {
                    type: "string",
                    name: "icon",
                    label: "Icon Name",
                    options: ["facebook", "instagram", "x", "linkedin", "youtube"],
                    required: true,
                },
            ],
        },
        {
            type: "string",
            name: "copyright",
            label: "Copyright Text",
            required: true,
        },
    ],
}; 