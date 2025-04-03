import type { Template } from "tinacms";

export const ctoForHireServicesOfferedTemplate: Template = {
  name: "ctoForHireServicesOffered",
  label: "CtoForHire ServicesOffered",
  fields: [
    {
      type: "string",
      name: "ctoForHireServicesOfferedTitle",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "ctoForHireServicesOfferedSubtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "ctoForHireServicesOfferedContent",
      label: "Content",
    },
    {
      type: "image",
      name: "ctoForHireServicesOfferedImage",
      label: "Image",
    },
    {
      type: "string",
      name: "ctoForHireServicesOfferedCtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "ctoForHireServicesOfferedCtaLink",
      label: "Call to Action Link",
    },
  ],
};
