import type { Template } from "tinacms";

export const caseStudiesFeaturedCaseStudiesTemplate: Template = {
  name: "caseStudiesFeaturedCaseStudies",
  label: "CaseStudies FeaturedCaseStudies",
  fields: [
    {
      type: "string",
      name: "caseStudiesFeaturedCaseStudiesTitle",
      label: "Title",
    },
    {
      type: "string",
      name: "caseStudiesFeaturedCaseStudiesSubtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "caseStudiesFeaturedCaseStudiesContent",
      label: "Content",
    },
    {
      type: "image",
      name: "caseStudiesFeaturedCaseStudiesImage",
      label: "Image",
    },
    {
      type: "string",
      name: "caseStudiesFeaturedCaseStudiesCtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "caseStudiesFeaturedCaseStudiesCtaLink",
      label: "Call to Action Link",
    },
  ],
};
