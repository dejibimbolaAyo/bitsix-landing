import type { Template } from "tinacms";

export const ctoForHireWhyHireCtoTemplate: Template = {
  name: "ctoForHireWhyHireCto",
  label: "CtoForHire WhyHireCto",
  fields: [
    {
      type: "string",
      name: "ctoForHireWhyHireCtoTitle",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "ctoForHireWhyHireCtoSubtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "ctoForHireWhyHireCtoContent",
      label: "Content",
    },
    {
      type: "image",
      name: "ctoForHireWhyHireCtoImage",
      label: "Image",
    },
    {
      type: "string",
      name: "ctoForHireWhyHireCtoCtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "ctoForHireWhyHireCtoCtaLink",
      label: "Call to Action Link",
    },
  ],
};
