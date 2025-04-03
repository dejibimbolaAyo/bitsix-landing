import type { Template } from "tinacms";

export const engineersForHireIdealClientsTemplate: Template = {
  name: "engineersForHireIdealClients",
  label: "EngineersForHire IdealClients",
  fields: [
    {
      type: "string",
      name: "engineersForHireIdealClientsTitle",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "engineersForHireIdealClientsSubtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "engineersForHireIdealClientsContent",
      label: "Content",
    },
    {
      type: "image",
      name: "engineersForHireIdealClientsImage",
      label: "Image",
    },
    {
      type: "string",
      name: "engineersForHireIdealClientsCtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "engineersForHireIdealClientsCtaLink",
      label: "Call to Action Link",
    },
  ],
};
