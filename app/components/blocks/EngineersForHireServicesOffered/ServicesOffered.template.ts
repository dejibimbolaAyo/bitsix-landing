import type { Template } from "tinacms";

export const engineersForHireServicesOfferedTemplate: Template = {
  name: "engineersForHireServicesOffered",
  label: "EngineersForHire ServicesOffered",
  fields: [
    {
      type: "string",
      name: "engineersForHireServicesOfferedTitle",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "engineersForHireServicesOfferedSubtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "engineersForHireServicesOfferedContent",
      label: "Content",
    },
    {
      type: "image",
      name: "engineersForHireServicesOfferedImage",
      label: "Image",
    },
    {
      type: "string",
      name: "engineersForHireServicesOfferedCtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "engineersForHireServicesOfferedCtaLink",
      label: "Call to Action Link",
    },
  ],
};
