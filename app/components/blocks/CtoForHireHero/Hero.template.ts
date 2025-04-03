import type { Template } from "tinacms";

export const ctoForHireHeroTemplate: Template = {
  name: "ctoForHireHero",
  label: "CtoForHire Hero",
  fields: [
    {
      type: "string",
      name: "ctoForHireHeroTitle",
      label: "Title",
    },
    {
      type: "string",
      name: "ctoForHireHeroSubtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "ctoForHireHeroContent",
      label: "Content",
    },
    {
      type: "image",
      name: "ctoForHireHeroImage",
      label: "Image",
    },
    {
      type: "string",
      name: "ctoForHireHeroCtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "ctoForHireHeroCtaLink",
      label: "Call to Action Link",
    },
  ],
};
