import { json } from "@remix-run/node";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { useTina } from "tinacms/dist/react";

import { CaseStudiesPage } from "./page";
import { client } from "@tina/__generated__/client";
import type { CaseStudiesQuery } from "@tina/__generated__/types";



export const meta: MetaFunction = () => {
  return [
    { title: "CaseStudies - BitSix Studio" },
    { name: "description", content: "CaseStudies page" },
  ];
};

export const loader = async () => {
  try {
    const pageQuery = await client.queries.caseStudies({
      relativePath: "case-studies.mdx",
    });

    if (!pageQuery.data.caseStudies) {
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

export default function CaseStudies() {
  const { query } = useLoaderData<typeof loader>();
  const pageData = useTina<CaseStudiesQuery>(query);
  
  if (!pageData.data.caseStudies?.blocks) {
    return <div>No blocks found</div>;
  }

  return (
    <div>
      <CaseStudiesPage data={pageData.data} />
    </div>
  );
}