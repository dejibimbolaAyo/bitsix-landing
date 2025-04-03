import { MetaFunction, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { client } from "@tina/__generated__/client";
import type { TestimonialsQuery } from "@tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { TestimonialsPage } from "./page";

export const meta: MetaFunction = () => {
  return [
    { title: "Testimonials - BitSix Studio" },
    { name: "description", content: "Testimonials page" },
  ];
};

export const loader = async () => {
  try {
    const pageQuery = await client.queries.testimonials({
      relativePath: "testimonials.mdx",
    });

    if (!pageQuery.data.testimonials) {
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

export default function Testimonials() {
  const { query } = useLoaderData<typeof loader>();
  const pageData = useTina<TestimonialsQuery>(query);
  
  if (!pageData.data.testimonials?.blocks) {
    return <div>No blocks found</div>;
  }

  return (
    <div>
      <TestimonialsPage data={pageData.data} />
    </div>
  );
}