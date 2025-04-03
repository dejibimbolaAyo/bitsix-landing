import type { Template } from "tinacms";

export const productDevelopmentBuildingWithUsTemplate: Template = {
  name: "productDevelopmentBuildingWithUs",
  label: "Product Development Building With Us",
  fields: [
    {
      type: "string",
      name: "productDevelopmentBuildingWithUsTitle",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "productDevelopmentBuildingWithUsSubtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "productDevelopmentBuildingWithUsContent",
      label: "Content",
    },
    {
      type: "image",
      name: "productDevelopmentBuildingWithUsImage",
      label: "Image",
    },
    {
      type: "string",
      name: "productDevelopmentBuildingWithUsCtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "productDevelopmentBuildingWithUsCtaLink",
      label: "Call to Action Link",
    },
  ],
};
