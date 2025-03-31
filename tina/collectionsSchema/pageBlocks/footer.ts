import type { Collection } from "tinacms";
import { footerTemplate } from "@app/components/blocks/Footer/footer.template";

export const footerCollection: Collection = {
    label: "Footer",
    name: "footer",
    path: "content/global",
    format: "mdx",
    match: {
        include: "footer",
    },
    ui: {
        router: () => "/home",
        global: true,
        filename: {
            readonly: true,
            slugify: () => "footer",
        },
    },
    fields: footerTemplate.fields,
}; 