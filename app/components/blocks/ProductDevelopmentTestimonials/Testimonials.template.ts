import type { Template } from "tinacms";

export const productDevelopmentTestimonialsTemplate: Template = {
  name: "productDevelopmentTestimonials",
  label: "ProductDevelopment Testimonials",
  fields: [
    {
      type: "string",
      name: "productDevelopmentTestimonialsTitle",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "productDevelopmentTestimonialsSubtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "productDevelopmentTestimonialsContent",
      label: "Content",
    },
    {
      type: "image",
      name: "productDevelopmentTestimonialsImage",
      label: "Image",
    },
    {
      type: "string",
      name: "productDevelopmentTestimonialsCtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "productDevelopmentTestimonialsCtaLink",
      label: "Call to Action Link",
    },
  ],
};
