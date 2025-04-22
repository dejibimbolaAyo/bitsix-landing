import { ActionFunctionArgs, json } from "@remix-run/node";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { useTina } from "tinacms/dist/react";
import { z } from "zod";

import { ContactPage } from "./page";
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
  timestamp: z.string(),
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^\+?[\d\s-()]+$/, "Please enter a valid phone number")
    .optional(),
  company: z.string().optional(),
  projectType: z.string().min(1, "Project type is required"),
  help: z.string().min(1, "Project description is required"),
  budget: z.string().optional(),
  contactMethod: z.string().min(1, "Contact method is required"),
});

export const action = async ({ request }: ActionFunctionArgs) => {
  const env = process.env;
  const googleSheetsUrl = env.GOOGLE_SHEETS_WEBAPP_URL;

  if (!googleSheetsUrl) {
    console.error("Google Sheets URL is not configured");
    return json(
      {
        success: false,
        error:
          "Form submission is currently unavailable. Please try again later.",
      },
      { status: 500 }
    );
  }

  const formData = await request.formData();
  const rawData = {
    timestamp: new Date().toISOString(),
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    projectType: formData.get("projectType"),
    help: formData.get("help"),
    budget: formData.get("budget"),
    contactMethod: formData.get("contactMethod"),
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

  const data = validationResult.data;

  try {
    const response = await fetch(googleSheetsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

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
  const env = process.env;
  const googleSheetsUrl = env.GOOGLE_SHEETS_WEBAPP_URL;

  if (!googleSheetsUrl) {
    console.error("Google Sheets URL is not configured");
  }

  try {
    const pageQuery = await client.queries.contact({
      relativePath: "contact.mdx",
    });

    if (!pageQuery.data.contact) {
      throw new Error("No page data found");
    }

    return json({
      query: pageQuery,
      sheetsUrl: googleSheetsUrl,
    });
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
