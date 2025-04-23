import type { Template } from "tinacms";

export const contactContactFormTemplate: Template = {
  name: "contactContactForm",
  label: "Contact Form",
  fields: [
    {
      type: "string",
      name: "contactContactFormTitle",
      label: "Form Title",
      required: true,
    },
    {
      type: "string",
      name: "contactContactFormSubtitle",
      label: "Form Subtitle",
    },
    {
      type: "string",
      name: "contactContactInformationTitle",
      label: "Contact Information Title",
    },
    {
      type: "string",
      name: "contactContactInformationSubtitle",
      label: "Contact Information Subtitle",
    },
    {
      type: "rich-text",
      name: "contactContactInformationContent",
      label: "Contact Information Content",
    },
    {
      type: "object",
      name: "formFields",
      label: "Form Fields",
      fields: [
        {
          type: "string",
          name: "fullNameLabel",
          label: "Full Name Label",
          required: true,
        },
        {
          type: "string",
          name: "emailLabel",
          label: "Email Label",
          required: true,
        },
        {
          type: "string",
          name: "phoneLabel",
          label: "Phone Label",
        },
        {
          type: "string",
          name: "companyLabel",
          label: "Company Label",
        },
        {
          type: "string",
          name: "projectTypeLabel",
          label: "Project Type Label",
          required: true,
        },
        {
          type: "string",
          name: "projectTypeOptions",
          label: "Project Type Options",
          list: true,
          required: true,
        },
        {
          type: "string",
          name: "helpLabel",
          label: "How Can We Help Label",
          required: true,
        },
        {
          type: "string",
          name: "budgetLabel",
          label: "Budget Label",
        },
        {
          type: "string",
          name: "budgetOptions",
          label: "Budget Options",
          list: true,
        },
        {
          type: "string",
          name: "contactMethodLabel",
          label: "Contact Method Label",
          required: true,
        },
        {
          type: "string",
          name: "contactMethodOptions",
          label: "Contact Method Options",
          list: true,
          required: true,
        },
        {
          type: "string",
          name: "submitButtonText",
          label: "Submit Button Text",
          required: true,
        },
      ],
    },
  ],
};
