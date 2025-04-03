import type { Template } from "tinacms";

export const ctoForHireTestimonialsAndCaseStudiesTemplate: Template = {
  name: "ctoForHireTestimonialsAndCaseStudies",
  label: "CtoForHire TestimonialsAndCaseStudies",
  fields: [
    {
      type: "string",
      name: "ctoForHireTestimonialsAndCaseStudiesTitle",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "ctoForHireTestimonialsAndCaseStudiesSubtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "ctoForHireTestimonialsAndCaseStudiesContent",
      label: "Content",
    },
    {
      type: "image",
      name: "ctoForHireTestimonialsAndCaseStudiesImage",
      label: "Image",
    },
    {
      type: "string",
      name: "ctoForHireTestimonialsAndCaseStudiesCtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "ctoForHireTestimonialsAndCaseStudiesCtaLink",
      label: "Call to Action Link",
    },
  ],
};
