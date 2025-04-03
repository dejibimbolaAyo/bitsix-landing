import type { Template } from "tinacms";

export const engineersForHireWhyHireEngineersTemplate: Template = {
  name: "engineersForHireWhyHireEngineers",
  label: "EngineersForHire WhyHireEngineers",
  fields: [
    {
      type: "string",
      name: "engineersForHireWhyHireEngineersTitle",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "engineersForHireWhyHireEngineersSubtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "engineersForHireWhyHireEngineersContent",
      label: "Content",
    },
    {
      type: "image",
      name: "engineersForHireWhyHireEngineersImage",
      label: "Image",
    },
    {
      type: "string",
      name: "engineersForHireWhyHireEngineersCtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "engineersForHireWhyHireEngineersCtaLink",
      label: "Call to Action Link",
    },
  ],
};
