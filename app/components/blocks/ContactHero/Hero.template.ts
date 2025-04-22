import type { Template } from "tinacms";

export const contactHeroTemplate: Template = {
  name: "contactHero",
  label: "Contact Hero",
  fields: [
    {
      type: "string",
      name: "contactHeroTitle",
      label: "Title",
    },
    {
      type: "string",
      name: "contactHeroSubtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "contactHeroContent",
      label: "Content",
    },
    {
      type: "image",
      name: "contactHeroImage",
      label: "Image",
    },
    {
      type: "string",
      name: "contactHeroCtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "contactHeroCtaLink",
      label: "Call to Action Link",
    },
  ],
};
