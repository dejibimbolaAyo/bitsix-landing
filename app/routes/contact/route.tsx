import { ActionFunctionArgs, json } from "@remix-run/cloudflare";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { useTina } from "tinacms/dist/react";
import { z } from "zod";

import { ContactPage } from "./page";
import { createZohoLead, zohoConfigSchema } from "./zoho.server";
import { client } from "@tina/__generated__/client";
import type { ContactQuery } from "@tina/__generated__/types";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact - BitSix Studio" },
    { name: "description", content: "Contact page" },
  ];
};

// Define the form schema using Zod
const formSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(80),
  email: z.string().trim().email("Please enter a valid email address").max(100),
  phone: z
    .string()
    .trim()
    .max(30)
    .regex(/^\+?[\d\s-()]+$/, "Please enter a valid phone number")
    .optional(),
  company: z.string().trim().max(200).optional(),
  projectType: z.string().trim().min(1, "Project type is required").max(100),
  help: z.string().trim().min(1, "Project description is required").max(1600),
  budget: z.string().trim().max(100).optional(),
  contactMethod: z.string().trim().min(1, "Contact method is required").max(100),
});

export const action = async ({ request, context }: ActionFunctionArgs) => {
  const formData = await request.formData().catch(() => null);
  if (!formData) {
    return json({ success: false, error: "Invalid form submission." }, { status: 400 });
  }
  const rawData = {
    fullName: formData.get("fullName") || undefined,
    email: formData.get("email") || undefined,
    phone: formData.get("phone") || undefined,
    company: formData.get("company") || undefined,
    projectType: formData.get("projectType") || undefined,
    help: formData.get("help") || undefined,
    budget: formData.get("budget") || undefined,
    contactMethod: formData.get("contactMethod") || undefined,
  };

  // Validate form data using Zod
  const validationResult = formSchema.safeParse(rawData);

  if (!validationResult.success) {
    return json(
      {
        success: false,
        error: "Please correct the following errors:",
        validationErrors: validationResult.error.format(),
      },
      { status: 400 }
    );
  }

  const config = zohoConfigSchema.safeParse(context.cloudflare.env);
  if (!config.success) {
    console.error("Zoho CRM bindings are missing or invalid");
    return json(
      { success: false, error: "Form submission is currently unavailable. Please try again later." },
      { status: 503 }
    );
  }

  const data = validationResult.data;

  try {
    await createZohoLead(config.data, {
      Last_Name: data.fullName,
      Email: data.email,
      Phone: data.phone,
      Company: data.company,
      Description: [
        "Source: BitSix website",
        `Project type: ${data.projectType}`,
        `Budget: ${data.budget || "Not provided"}`,
        `Preferred contact method: ${data.contactMethod}`,
        "",
        data.help,
      ].join("\n"),
    });

    return json({ success: true });
  } catch (error) {
    console.error("Error submitting form:", error);
    return json(
      {
        success: false,
        error: "Failed to submit form. Please try again later.",
      },
      { status: 500 }
    );
  }
};

export const loader = async () => {
  try {
    const pageQuery = await client.queries.contact({
      relativePath: "contact.mdx",
    });

    if (!pageQuery.data.contact) {
      throw new Error("No page data found");
    }

    return json({ query: pageQuery });
  } catch (error) {
    console.error("Error loading data:", error);
    throw error;
  }
};

export default function Contact() {
  const { query } = useLoaderData<typeof loader>();
  const pageData = useTina<ContactQuery>(query);

  if (!pageData.data.contact?.blocks) {
    return <div>No blocks found</div>;
  }

  return (
    <div>
      <ContactPage data={pageData.data} />
    </div>
  );
}
