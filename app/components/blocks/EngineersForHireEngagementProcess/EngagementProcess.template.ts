import type { Template } from "tinacms";

export const engineersForHireEngagementProcessTemplate: Template = {
  name: "engineersForHireEngagementProcess",
  label: "EngineersForHire EngagementProcess",
  fields: [
    {
      type: "string",
      name: "engineersForHireEngagementProcessTitle",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "engineersForHireEngagementProcessSubtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "engineersForHireEngagementProcessContent",
      label: "Content",
    },
    {
      type: "image",
      name: "engineersForHireEngagementProcessImage",
      label: "Image",
    },
    {
      type: "string",
      name: "engineersForHireEngagementProcessCtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "engineersForHireEngagementProcessCtaLink",
      label: "Call to Action Link",
    },
  ],
};
