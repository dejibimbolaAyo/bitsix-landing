import type { Template } from "tinacms";

export const engineersForHireHeroTemplate: Template = {
  name: "engineersForHireHero",
  label: "EngineersForHire Hero",
  fields: [
    {
      type: "string",
      name: "engineersForHireHeroTitle",
      label: "Title",
    },
    {
      type: "string",
      name: "engineersForHireHeroSubtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "engineersForHireHeroContent",
      label: "Content",
    },
    {
      type: "image",
      name: "engineersForHireHeroImage",
      label: "Image",
    },
    {
      type: "string",
      name: "engineersForHireHeroCtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "engineersForHireHeroCtaLink",
      label: "Call to Action Link",
    },
  ],
};
