import { TextInputWithCount } from "../../customFields/textInputWithCount";

export const seoInformation = {
  type: "object",
  label: "SEO Values",
  name: "seo",
  fields: [
    {
      type: "string",
      label: "Title",
      description: "Recommended limit of 70 characters",
      name: "title",
      ui: {
        validate: (value: string) => {
          if (value && value.length > 70) {
            return "Title should be 70 characters or less";
          }
        },
        component: TextInputWithCount(70),
      },
    },
    {
      type: "string",
      label: "Description",
      description: "Recommended limit of 150 characters",
      name: "description",
      component: "textarea",
      ui: {
        component: TextInputWithCount(150, true),
      },
    },
  ],
};
