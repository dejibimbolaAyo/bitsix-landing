import { Link } from "@remix-run/react";
import React from "react";
import { tinaField } from "tinacms/dist/react";

import { getLastUpdateTime } from "../../../util/date";
import BlogHero from "@app/components/blocks/BlogHero/blogHero";
import Newsletter from "@app/components/blocks/Newsletter/newsletter";
import type {
  BlogPageQuery,
  BlogPostConnectionQuery,
} from "@tina/__generated__/types";

interface PageProps {
  data: {
    page: BlogPageQuery;
    posts: BlogPostConnectionQuery;
    meta: {
      lastUpdated: string;
    };
  };
}

export const BlogListPage: React.FC<PageProps> = ({ data }) => {
  const { lastUpdated } = data.meta;
  const formattedLastUpdated = getLastUpdateTime(lastUpdated);

  const blogListBlock = data.page.blogPage.blocks?.find(
    (block) => block?.__typename === "BlogPageBlocksBlogList"
  );

  const newsletterBlock = data.page.blogPage.blocks?.find(
    (block) => block?.__typename === "BlogPageBlocksNewsletter"
  );

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      {data.page.blogPage.blocks?.map((block) => {
        switch (block?.__typename) {
          case "BlogPageBlocksBlogHero":
            return (
              <BlogHero
                key={block.__typename}
                data={{ ...block, lastUpdated: formattedLastUpdated }}
              />
            );
          default:
            return null;
        }
      })}

      {/* Featured Posts Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.posts.blogPostConnection.edges?.slice(0, 3).map((edge) => {
                const node = edge?.node;
                if (!node) return null;
                return (
                  <Link
                    key={node._sys.filename}
                    to={`/blog/${node._sys.filename}`}
                    className="group h-full"
                  >
                    <article className="bg-base-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                      {node.thumbnail && (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={node.thumbnail}
                            alt={node.title || ""}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            data-tina-field={tinaField(node, "thumbnail")}
                          />
                        </div>
                      )}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 mb-4">
                          {node.category && (
                            <span
                              className="badge badge-primary"
                              data-tina-field={tinaField(node, "category")}
                            >
                              {node.category}
                            </span>
                          )}
                          {node.date && (
                            <span
                              className="text-sm text-base-content/70"
                              data-tina-field={tinaField(node, "date")}
                            >
                              {new Date(node.date).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                        <h3
                          className="text-xl font-bold mb-2 group-hover:text-primary transition-colors"
                          data-tina-field={tinaField(node, "title")}
                        >
                          {node.title}
                        </h3>
                        <p
                          className="text-base-content/70 line-clamp-2 flex-grow"
                          data-tina-field={tinaField(node, "description")}
                        >
                          {node.description}
                        </p>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">All Articles</h2>
              <div className="flex gap-2">
                {blogListBlock?.categories?.map((category) => (
                  <button
                    key={category?.name || ""}
                    className="btn btn-outline btn-sm"
                    data-tina-field={tinaField(blogListBlock, "categories")}
                  >
                    {category?.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              {data.posts.blogPostConnection.edges?.slice(2).map((edge) => {
                const node = edge?.node;
                if (!node) return null;
                return (
                  <Link
                    key={node._sys.filename}
                    to={`/blog/${node._sys.filename}`}
                    className="group block"
                  >
                    <article className="flex gap-6 items-start p-6 bg-base-200 rounded-lg hover:bg-base-300 transition-colors">
                      {node.thumbnail && (
                        <div className="w-48 aspect-video flex-shrink-0 overflow-hidden rounded-lg">
                          <img
                            src={node.thumbnail}
                            alt={node.title || ""}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            data-tina-field={tinaField(node, "thumbnail")}
                          />
                        </div>
                      )}
                      <div className="flex-grow">
                        <div className="flex items-center gap-4 mb-2">
                          {node.category && (
                            <span
                              className="badge badge-primary"
                              data-tina-field={tinaField(node, "category")}
                            >
                              {node.category}
                            </span>
                          )}
                          {node.date && (
                            <span
                              className="text-sm text-base-content/70"
                              data-tina-field={tinaField(node, "date")}
                            >
                              {new Date(node.date).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                        <h3
                          className="text-xl font-bold mb-2 group-hover:text-primary transition-colors"
                          data-tina-field={tinaField(node, "title")}
                        >
                          {node.title}
                        </h3>
                        <p
                          className="text-base-content/70 line-clamp-2"
                          data-tina-field={tinaField(node, "description")}
                        >
                          {node.description}
                        </p>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {newsletterBlock && <Newsletter data={newsletterBlock} />}
    </div>
  );
};

export default BlogListPage;
