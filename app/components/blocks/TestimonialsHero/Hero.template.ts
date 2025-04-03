import type { Template } from "tinacms";

export const testimonialsHeroTemplate: Template = {
  name: "testimonialsHero",
  label: "Testimonials Hero",
  fields: [
    {
      type: "string",
      name: "testimonialsHeroTitle",
      label: "Title",
    },
    {
      type: "string",
      name: "testimonialsHeroSubtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "testimonialsHeroContent",
      label: "Content",
    },
    {
      type: "image",
      name: "testimonialsHeroImage",
      label: "Image",
    },
    {
      type: "string",
      name: "testimonialsHeroCtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "testimonialsHeroCtaLink",
      label: "Call to Action Link",
    },
  ],
};
