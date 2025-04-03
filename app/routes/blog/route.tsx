import { MetaFunction, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { client } from "@tina/__generated__/client";
import { useTina } from "tinacms/dist/react";
import { BlogListPage } from "./page";
import {
  BlogPageQuery,
  BlogPostConnectionQuery,
} from "@tina/__generated__/types";

export const meta: MetaFunction = () => {
  return [
    { title: "BitSix Studio" },
    { name: "description", content: "Welcome to the studio!" },
  ];
};

export const loader = async () => {
  try {
    const blogpageQuery = await client.queries.blogPage({
      relativePath: "blog.mdx",
    });

    // get all posts
    const postsQuery = await client.queries.blogPostConnection();

    if (!blogpageQuery.data.blogPage) {
      throw new Error("No page data found");
    }

    return json({
      page: blogpageQuery,
      posts: postsQuery,
    });
  } catch (error) {
    console.error("Error loading data:", error);
    throw error;
  }
};

export default function Blog() {
  const { page, posts } = useLoaderData<typeof loader>();
  const blogPageQuery = useTina<BlogPageQuery>(page);
  const postsQuery = useTina<BlogPostConnectionQuery>(posts);

  if (!blogPageQuery.data.blogPage) {
    return <div>No blog page data found</div>;
  }

  const data = {
    page: blogPageQuery.data,
    posts: postsQuery.data,
    meta: {
      lastUpdated: postsQuery.data.blogPostConnection.edges?.[0]?.node?.date,
    },
  };

  return (
    <div>
      <BlogListPage data={data} />
    </div>
  );
}
