import type { Template } from "tinacms";

export const teamTemplate: Template = {
    name: "team",
    label: "Team",
    fields: [
        {
            type: "string",
            name: "eyebrow",
            label: "Eyebrow",
            required: true,
        },
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
            name: "members",
            label: "Team Members",
            list: true,
            ui: {
                itemProps: (item) => ({
                    label: item?.name || "Team Member",
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
                    name: "role",
                    label: "Role",
                    required: true,
                },
                {
                    type: "string",
                    name: "bio",
                    label: "Bio",
                    ui: {
                        component: "textarea",
                    },
                    required: true,
                },
                {
                    type: "image",
                    name: "image",
                    label: "Profile Image",
                },
                {
                    type: "object",
                    name: "socialLinks",
                    label: "Social Links",
                    list: true,
                    ui: {
                        itemProps: (item) => ({
                            label: item?.platform || "Social Link",
                        }),
                    },
                    fields: [
                        {
                            type: "string",
                            name: "platform",
                            label: "Platform",
                            options: ["linkedin", "x", "dribbble"],
                            required: true,
                        },
                        {
                            type: "string",
                            name: "url",
                            label: "URL",
                            required: true,
                        },
                    ],
                },
            ],
        },
    ],
}; 