import type { Template } from "tinacms";

export const caseStudiesFeaturedCaseStudiesTemplate: Template = {
  name: "caseStudiesFeaturedCaseStudies",
  label: "CaseStudies FeaturedCaseStudies",
  fields: [
    {
      type: "string",
      name: "caseStudiesFeaturedCaseStudiesTitle",
      label: "Section Title",
    },
    {
      type: "string",
      name: "caseStudiesFeaturedCaseStudiesSubtitle",
      label: "Section Subtitle",
    },
    {
      type: "string",
      name: "title",
      label: "Case Study Title",
    },
    {
      type: "string",
      name: "headline",
      label: "Headline",
    },
    {
      type: "string",
      name: "category",
      label: "Category",
    },
    {
      type: "string",
      name: "clientProfile",
      label: "Client Profile (Anonymized)",
    },
    {
      type: "string",
      name: "businessProblem",
      label: "Business Problem",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "ourRole",
      label: "Our Role",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "businessValueDelivered",
      label: "Business Value Delivered",
      list: true,
    },
    {
      type: "string",
      name: "techStack",
      label: "Tech Stack Tags",
      list: true,
    },
    {
      type: "image",
      name: "image",
      label: "Featured Image",
    },
  ],
};
