import type { Template } from "tinacms";

export const ctoForHireIdealClientsTemplate: Template = {
  name: "ctoForHireIdealClients",
  label: "CtoForHire IdealClients",
  fields: [
    {
      type: "string",
      name: "ctoForHireIdealClientsTitle",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "ctoForHireIdealClientsSubtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "ctoForHireIdealClientsContent",
      label: "Content",
    },
    {
      type: "image",
      name: "ctoForHireIdealClientsImage",
      label: "Image",
    },
    {
      type: "string",
      name: "ctoForHireIdealClientsCtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "ctoForHireIdealClientsCtaLink",
      label: "Call to Action Link",
    },
  ],
};
