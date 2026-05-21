import type { Template } from "tinacms";

export const testimonialsTestimonialsListTemplate: Template = {
  name: "testimonialsTestimonialsList",
  label: "Testimonials TestimonialsList",
  fields: [
    {
      type: "string",
      name: "testimonialsTestimonialsListTitle",
      label: "Section Title",
    },
    {
      type: "string",
      name: "testimonialsTestimonialsListSubtitle",
      label: "Section Subtitle",
    },
    {
      type: "object",
      name: "items",
      label: "Testimonial Items",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.authorName || "Testimonial"} - ${item?.companyType || ""}`,
        }),
      },
      fields: [
        {
          type: "string",
          name: "quote",
          label: "Quote Text",
          ui: {
            component: "textarea",
          },
          required: true,
        },
        {
          type: "string",
          name: "authorName",
          label: "Author Name",
          required: true,
        },
        {
          type: "string",
          name: "authorRole",
          label: "Author Role",
          required: true,
        },
        {
          type: "string",
          name: "companyType",
          label: "Company Type/Profile",
          required: true,
        },
        {
          type: "number",
          name: "rating",
          label: "Rating (1 to 5)",
        },
        {
          type: "image",
          name: "avatar",
          label: "Avatar Image",
        },
      ],
    },
  ],
};
