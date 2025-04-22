import { ActionFunctionArgs, json } from "@remix-run/node";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { useTina } from "tinacms/dist/react";

import { ContactPage } from "./page";
import { client } from "@tina/__generated__/client";
import type { ContactQuery } from "@tina/__generated__/types";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact - BitSix Studio" },
    { name: "description", content: "Contact page" },
  ];
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const env = process.env;
  const googleSheetsUrl = env.GOOGLE_SHEETS_WEBAPP_URL;

  const formData = await request.formData();
  const data = {
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

  try {
    const response = await fetch(googleSheetsUrl ?? "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to submit form" };
  }
};

export const loader = async () => {
  // Get the env variables
  const env = process.env;

  try {
    const pageQuery = await client.queries.contact({
      relativePath: "contact.mdx",
    });

    if (!pageQuery.data.contact) {
      throw new Error("No page data found");
    }

    return json({
      query: pageQuery,
      sheetsUrl: env.GOOGLE_SHEETS_WEBAPP_URL,
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
