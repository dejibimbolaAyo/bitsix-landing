import type { Template } from "tinacms";

export const caseStudiesCaseStudiesTemplate: Template = {
  name: "caseStudiesCaseStudies",
  label: "CaseStudies CaseStudies List",
  fields: [
    {
      type: "string",
      name: "caseStudiesCaseStudiesTitle",
      label: "Section Title",
    },
    {
      type: "string",
      name: "caseStudiesCaseStudiesSubtitle",
      label: "Section Subtitle",
    },
    {
      type: "object",
      name: "items",
      label: "Case Studies Items",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.title || "Case Study Item",
        }),
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Short Card Title",
          required: true,
        },
        {
          type: "string",
          name: "fullTitle",
          label: "Full Title",
          required: true,
        },
        {
          type: "string",
          name: "headline",
          label: "Headline",
          required: true,
        },
        {
          type: "string",
          name: "category",
          label: "Category",
          required: true,
        },
        {
          type: "string",
          name: "clientProfile",
          label: "Client Profile (Anonymized)",
          required: true,
        },
        {
          type: "string",
          name: "shortDescription",
          label: "Short Description",
          ui: {
            component: "textarea",
          },
          required: true,
        },
        {
          type: "string",
          name: "businessProblem",
          label: "Business Problem",
          ui: {
            component: "textarea",
          },
          required: true,
        },
        {
          type: "string",
          name: "ourRole",
          label: "Our Role",
          ui: {
            component: "textarea",
          },
          required: true,
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
          label: "Image",
        },
      ],
    },
  ],
};
