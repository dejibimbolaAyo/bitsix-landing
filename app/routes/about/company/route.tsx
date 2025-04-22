import { json } from "@remix-run/node";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { useTina } from "tinacms/dist/react";

import { AboutCompanyPage } from "./page";
import { client } from "@tina/__generated__/client";
import type { AboutQuery } from "@tina/__generated__/types";



export const meta: MetaFunction = () => {
  return [
    { title: "About BitSix - Tech that Works. Solutions that Scale." },
    {
      name: "description",
      content:
        "Learn about BitSix - your technical partner for digital transformation, product development, and engineering solutions.",
    },
  ];
};

export const loader = async () => {
  try {
    const pageResponse = await client.queries.about({
      relativePath: "about.mdx",
    });

    if (!pageResponse.data.about) {
      throw new Error("No page data found");
    }

    return json({
      page: pageResponse,
    });
  } catch (error) {
    console.error("Error loading data:", error);
    throw error;
  }
};

export default function AboutCompany() {
  const { page } = useLoaderData<typeof loader>();
  const aboutData = useTina<AboutQuery>(page);

  if (!aboutData.data.about?.blocks) {
    return <div>No blocks found</div>;
  }

  return (
    <div>
      <AboutCompanyPage data={aboutData.data} />
    </div>
  );
}
