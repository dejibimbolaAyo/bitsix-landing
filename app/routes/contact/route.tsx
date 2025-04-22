import { json } from "@remix-run/node";
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

export const loader = async () => {
  try {
    const pageQuery = await client.queries.contact({
      relativePath: "contact.mdx",
    });

    if (!pageQuery.data.contact) {
      throw new Error("No page data found");
    }

    return json({
      query: pageQuery,
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
