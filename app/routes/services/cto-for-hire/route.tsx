import { MetaFunction, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { client } from "@tina/__generated__/client";
import type { CtoForHireQuery } from "@tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { CtoForHirePage } from "./page";

export const meta: MetaFunction = () => {
  return [
    { title: "CtoForHire - BitSix Studio" },
    { name: "description", content: "CtoForHire page" },
  ];
};

export const loader = async () => {
  try {
    const pageQuery = await client.queries.ctoForHire({
      relativePath: "cto-for-hire.mdx",
    });

    if (!pageQuery.data.ctoForHire) {
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

export default function CtoForHire() {
  const { query } = useLoaderData<typeof loader>();
  const pageData = useTina<CtoForHireQuery>(query);
  
  if (!pageData.data.ctoForHire?.blocks) {
    return <div>No blocks found</div>;
  }

  return (
    <div>
      <CtoForHirePage data={pageData.data} />
    </div>
  );
}