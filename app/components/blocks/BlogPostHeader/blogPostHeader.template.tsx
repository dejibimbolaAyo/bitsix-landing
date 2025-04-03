import type { Template } from "tinacms";

export const blogPostHeaderTemplate: Template = {
  name: "blog_post_header",
  label: "Blog Post Header",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Page Title",
      required: true,
    },
    {
      name: "margin",
      description: "Default is px-8 py-12 lg:py-16",
      label: "Custom Margin",
      type: "string",
    },
    {
      name: "spacing",
      description: "Default is gap-6",
      label: "Custom Spacing",
      type: "string",
    },
    {
      name: "smallerMobileBodyText",
      description: "Default text size on mobile is xl",
      label: "Mobile Text Size (off = xl, on = lg)",
      type: "boolean",
    },
  ],
};
