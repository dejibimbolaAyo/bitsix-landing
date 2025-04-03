import type { Template } from "tinacms";

export const productDevelopmentProductShowcaseTemplate: Template = {
  name: "productDevelopmentProductShowcase",
  label: "ProductDevelopment ProductShowcase",
  fields: [
    {
      type: "string",
      name: "productDevelopmentProductShowcaseTitle",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "productDevelopmentProductShowcaseSubtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "productDevelopmentProductShowcaseContent",
      label: "Content",
    },
    {
      type: "image",
      name: "productDevelopmentProductShowcaseImage",
      label: "Image",
    },
    {
      type: "string",
      name: "productDevelopmentProductShowcaseCtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "productDevelopmentProductShowcaseCtaLink",
      label: "Call to Action Link",
    },
  ],
};
