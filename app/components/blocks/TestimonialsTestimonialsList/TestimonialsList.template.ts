import type { Template } from "tinacms";

export const testimonialsTestimonialsListTemplate: Template = {
  name: "testimonialsTestimonialsList",
  label: "Testimonials TestimonialsList",
  fields: [
    {
      type: "string",
      name: "testimonialsTestimonialsListTitle",
      label: "Title",
    },
    {
      type: "string",
      name: "testimonialsTestimonialsListSubtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "testimonialsTestimonialsListContent",
      label: "Content",
    },
    {
      type: "image",
      name: "testimonialsTestimonialsListImage",
      label: "Image",
    },
    {
      type: "string",
      name: "testimonialsTestimonialsListCtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "testimonialsTestimonialsListCtaLink",
      label: "Call to Action Link",
    },
  ],
};
