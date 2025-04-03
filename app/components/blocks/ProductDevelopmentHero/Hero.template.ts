import type { Template } from "tinacms";

export const productDevelopmentHeroTemplate: Template = {
  name: "productDevelopmentHero",
  label: "ProductDevelopment Hero",
  fields: [
    {
      type: "string",
      name: "productDevelopmentHeroTitle",
      label: "Title",
    },
    {
      type: "string",
      name: "productDevelopmentHeroSubtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "productDevelopmentHeroContent",
      label: "Content",
    },
    {
      type: "image",
      name: "productDevelopmentHeroImage",
      label: "Image",
    },
    {
      type: "string",
      name: "productDevelopmentHeroCtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "productDevelopmentHeroCtaLink",
      label: "Call to Action Link",
    },
  ],
};
