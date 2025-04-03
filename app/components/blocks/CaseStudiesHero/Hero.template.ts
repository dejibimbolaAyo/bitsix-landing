import type { Template } from "tinacms";

export const caseStudiesHeroTemplate: Template = {
  name: "caseStudiesHero",
  label: "CaseStudies Hero",
  fields: [
    {
      type: "string",
      name: "caseStudiesHeroTitle",
      label: "Title",
    },
    {
      type: "string",
      name: "caseStudiesHeroSubtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "caseStudiesHeroContent",
      label: "Content",
    },
    {
      type: "image",
      name: "caseStudiesHeroImage",
      label: "Image",
    },
    {
      type: "string",
      name: "caseStudiesHeroCtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "caseStudiesHeroCtaLink",
      label: "Call to Action Link",
    },
  ],
};
