import type { Template } from "tinacms";

export const ctoForHireEngagementProcessTemplate: Template = {
  name: "ctoForHireEngagementProcess",
  label: "CtoForHire EngagementProcess",
  fields: [
    {
      type: "string",
      name: "ctoForHireEngagementProcessTitle",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "ctoForHireEngagementProcessSubtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "ctoForHireEngagementProcessContent",
      label: "Content",
    },
    {
      type: "image",
      name: "ctoForHireEngagementProcessImage",
      label: "Image",
    },
    {
      type: "string",
      name: "ctoForHireEngagementProcessCtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "ctoForHireEngagementProcessCtaLink",
      label: "Call to Action Link",
    },
  ],
};
