import type { Template } from "tinacms";

export const testimonialsFeaturedTestimonialsTemplate: Template = {
  name: "testimonialsFeaturedTestimonials",
  label: "Testimonials FeaturedTestimonials",
  fields: [
    {
      type: "string",
      name: "testimonialsFeaturedTestimonialsTitle",
      label: "Title",
    },
    {
      type: "string",
      name: "testimonialsFeaturedTestimonialsSubtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "testimonialsFeaturedTestimonialsContent",
      label: "Content",
    },
    {
      type: "image",
      name: "testimonialsFeaturedTestimonialsImage",
      label: "Image",
    },
    {
      type: "string",
      name: "testimonialsFeaturedTestimonialsCtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "testimonialsFeaturedTestimonialsCtaLink",
      label: "Call to Action Link",
    },
  ],
};
