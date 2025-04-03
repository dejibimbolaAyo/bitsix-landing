import type { Template } from "tinacms";

export const navbarTemplate: Template = {
    name: "navbar",
    label: "Navbar",
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
            type: "object",
            name: "menu",
            label: "Menu Items",
            required: true,
            ui: {
                itemProps: (item) => ({
                    label: item?.title || "New Menu Item",
                }),
                defaultItem: {
                    title: "New Menu Item",
                    link: "/",
                },
            },
            list: true,
            fields: [
                {
                    type: "string",
                    name: "title",
                    label: "Title",
                    required: true,
                },
                {
                    type: "string",
                    name: "link",
                    label: "Link",
                    required: true,
                },
                {
                    type: "object",
                    name: "submenu",
                    label: "Submenu Items",
                    list: true,
                    ui: {
                        itemProps: (item) => ({
                            label: item?.title || "New Submenu Item",
                        }),
                        defaultItem: {
                            title: "New Submenu Item",
                            link: "/",
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
                            name: "link",
                            label: "Link",
                            required: true,
                        }
                    ]
                }
            ]
        },
        {
            type: "object",
            name: "cta",
            label: "Call to Action",
            required: true,
            fields: [
                {
                    type: "string",
                    name: "title",
                    label: "Title",
                    required: true,
                },
                {
                    type: "string",
                    name: "link",
                    label: "Link",
                    required: true,
                }
            ]
        },
    ],
}; 