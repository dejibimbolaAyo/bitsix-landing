import type { Template } from "tinacms";

export const testimonialsFeaturedTestimonialsTemplate: Template = {
  name: "testimonialsFeaturedTestimonials",
  label: "Testimonials FeaturedTestimonials",
  fields: [
    {
      type: "string",
      name: "testimonialsFeaturedTestimonialsTitle",
      label: "Section Title",
    },
    {
      type: "string",
      name: "testimonialsFeaturedTestimonialsSubtitle",
      label: "Section Subtitle",
    },
    {
      type: "string",
      name: "quote",
      label: "Quote Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "authorName",
      label: "Author Name (Redacted/Initials or Role)",
    },
    {
      type: "string",
      name: "authorRole",
      label: "Author Role (e.g. CTO & Co-founder)",
    },
    {
      type: "string",
      name: "companyType",
      label: "Company Profile/Type (Redacted, e.g. SaaS Logistics Platform)",
    },
    {
      type: "number",
      name: "rating",
      label: "Rating (1 to 5)",
    },
    {
      type: "image",
      name: "avatar",
      label: "Author Avatar Placeholder",
    },
  ],
};
