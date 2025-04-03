import type { Template } from "tinacms";

export const engineersForHireTestimonialsAndCaseStudiesTemplate: Template = {
  name: "engineersForHireTestimonialsAndCaseStudies",
  label: "EngineersForHire TestimonialsAndCaseStudies",
  fields: [
    {
      type: "string",
      name: "engineersForHireTestimonialsAndCaseStudiesTitle",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "engineersForHireTestimonialsAndCaseStudiesSubtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "engineersForHireTestimonialsAndCaseStudiesContent",
      label: "Content",
    },
    {
      type: "image",
      name: "engineersForHireTestimonialsAndCaseStudiesImage",
      label: "Image",
    },
    {
      type: "string",
      name: "engineersForHireTestimonialsAndCaseStudiesCtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "engineersForHireTestimonialsAndCaseStudiesCtaLink",
      label: "Call to Action Link",
    },
  ],
};
