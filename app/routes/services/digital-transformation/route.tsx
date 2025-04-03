import { MetaFunction, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { client } from "@tina/__generated__/client";
import type { DigitalTransformationQuery } from "@tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { DigitalTransformationPage } from "./page";

export const meta: MetaFunction = () => {
  return [
    { title: "BitSix Studio" },
    { name: "description", content: "Welcome to the studio!" },
  ];
};

export const loader = async () => {
  try {
    const digitalTransformationQuery =
      await client.queries.digitalTransformation({
        relativePath: "digital-transformation.mdx",
      });

    if (!digitalTransformationQuery.data.digitalTransformation) {
      throw new Error("No page data found");
    }

    return json({
      query: digitalTransformationQuery,
    });
  } catch (error) {
    console.error("Error loading data:", error);
    throw error;
  }
};

export default function Services() {
  const { query } = useLoaderData<typeof loader>();
  const digitalTransformationQuery = useTina<DigitalTransformationQuery>(query);
  if (!digitalTransformationQuery.data.digitalTransformation?.blocks) {
    return <div>No blocks found</div>;
  }

  return (
    <div>
      <DigitalTransformationPage data={digitalTransformationQuery.data} />
    </div>
  );
}
