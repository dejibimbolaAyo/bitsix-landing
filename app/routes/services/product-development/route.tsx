import { MetaFunction, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { client } from "@tina/__generated__/client";
import type { ProductDevelopmentQuery } from "@tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { ProductDevelopmentPage } from "./page";

export const meta: MetaFunction = () => {
  return [
    { title: "ProductDevelopment - BitSix Studio" },
    { name: "description", content: "ProductDevelopment page" },
  ];
};

export const loader = async () => {
  try {
    const pageQuery = await client.queries.productDevelopment({
      relativePath: "product-development.mdx",
    });

    if (!pageQuery.data.productDevelopment) {
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

export default function ProductDevelopment() {
  const { query } = useLoaderData<typeof loader>();
  const pageData = useTina<ProductDevelopmentQuery>(query);
  
  if (!pageData.data.productDevelopment?.blocks) {
    return <div>No blocks found</div>;
  }

  return (
    <div>
      <ProductDevelopmentPage data={pageData.data} />
    </div>
  );
}