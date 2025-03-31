import type { Collection } from "tinacms";
import { navbarTemplate } from "@app/components/blocks/Navbar/navbar.template";

export const navbarCollection: Collection = {
    label: "Navbar",
    name: "navbar",
    path: "content/global",
    format: "mdx",
    match: {
        include: "navbar",
    },
    ui: {
        router: () => "/home",
        global: true,
        filename: {
            readonly: true,
            slugify: () => "navbar",
        },
    },
    fields: navbarTemplate.fields,
};