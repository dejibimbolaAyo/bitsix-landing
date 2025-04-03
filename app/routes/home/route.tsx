import { MetaFunction, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { client } from "@tina/__generated__/client";
import type { HomeQuery } from "@tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { HomePage } from "./page";

export const meta: MetaFunction = () => {
  return [
    { title: "BitSix Studio" },
    { name: "description", content: "Welcome to the studio!" },
  ];
};

export const loader = async () => {
  try {
    const homepageQuery = await client.queries.home({
      relativePath: "home.mdx",
    });

    if (!homepageQuery.data.home) {
      throw new Error("No page data found");
    }

    return json({
      query: homepageQuery,
    });
  } catch (error) {
    console.error("Error loading data:", error);
    throw error;
  }
};

export default function Home() {
  const { query } = useLoaderData<typeof loader>();
  const homeQuery = useTina<HomeQuery>(query);
  if (!homeQuery.data.home?.blocks) {
    return <div>No blocks found</div>;
  }

  return (
    <div>
      <HomePage data={homeQuery.data} />
    </div>
  );
}
