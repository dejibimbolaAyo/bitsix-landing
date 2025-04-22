import { json } from "@remix-run/node";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { useTina } from "tinacms/dist/react";

import { EngineersForHirePage } from "./page";
import { client } from "@tina/__generated__/client";
import type { EngineersForHireQuery } from "@tina/__generated__/types";



export const meta: MetaFunction = () => {
  return [
    { title: "EngineersForHire - BitSix Studio" },
    { name: "description", content: "EngineersForHire page" },
  ];
};

export const loader = async () => {
  try {
    const pageQuery = await client.queries.engineersForHire({
      relativePath: "engineers-for-hire.mdx",
    });

    if (!pageQuery.data.engineersForHire) {
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

export default function EngineersForHire() {
  const { query } = useLoaderData<typeof loader>();
  const pageData = useTina<EngineersForHireQuery>(query);
  
  if (!pageData.data.engineersForHire?.blocks) {
    return <div>No blocks found</div>;
  }

  return (
    <div>
      <EngineersForHirePage data={pageData.data} />
    </div>
  );
}