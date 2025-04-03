import type { Template } from "tinacms";

export const caseStudiesCaseStudiesTemplate: Template = {
  name: "caseStudiesCaseStudies",
  label: "CaseStudies CaseStudies",
  fields: [
    {
      type: "string",
      name: "caseStudiesCaseStudiesTitle",
      label: "Title",
    },
    {
      type: "string",
      name: "caseStudiesCaseStudiesSubtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "caseStudiesCaseStudiesContent",
      label: "Content",
    },
    {
      type: "image",
      name: "caseStudiesCaseStudiesImage",
      label: "Image",
    },
    {
      type: "string",
      name: "caseStudiesCaseStudiesCtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "caseStudiesCaseStudiesCtaLink",
      label: "Call to Action Link",
    },
  ],
};
