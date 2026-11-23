import { Link } from "@remix-run/react";
import React, { useState } from "react";
import { tinaField } from "tinacms/dist/react";

import { getLastUpdateTime } from "../../../util/date";
import BlogHero from "@app/components/blocks/BlogHero/blogHero";
import Newsletter from "@app/components/blocks/Newsletter/newsletter";
import type {
  BlogPageQuery,
  BlogPostConnectionQuery,
  BlogPageBlocksBlogList,
  BlogPageBlocksNewsletter,
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
  ) as BlogPageBlocksBlogList | undefined;

  const newsletterBlock = data.page.blogPage.blocks?.find(
    (block) => block?.__typename === "BlogPageBlocksNewsletter"
  ) as BlogPageBlocksNewsletter | undefined;

  const [activeCategory, setActiveCategory] = useState<string>();
  const posts = data.posts.blogPostConnection.edges ?? [];
  const visiblePosts = activeCategory
    ? posts.filter((edge) => edge?.node?.category === activeCategory)
    : posts;

  return (
    <div className="min-h-screen bg-paper">
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
      <section className="site-section bg-paper">
        <div className="site-container">
          <div>
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-primary">
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
                    className="group block h-full min-w-0 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors group-hover:border-slate-400">
                      {node.thumbnail && (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={node.thumbnail}
                            alt={node.title || ""}
                            className="w-full h-full object-cover motion-safe:group-hover:scale-105 motion-safe:transition-transform duration-300"
                            data-tina-field={tinaField(node, "thumbnail")}
                          />
                        </div>
                      )}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="mb-4 flex flex-wrap items-center gap-2">
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
      <section className="site-section border-t border-slate-200 bg-sand">
        <div className="site-container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:justify-between">
              <h2 className="text-3xl font-bold">All Articles</h2>
              <div className="flex flex-wrap gap-2">
                {blogListBlock?.categories?.map((category) => (
                  <button
                    type="button"
                    aria-pressed={activeCategory === category?.name}
                    onClick={() => setActiveCategory((current) => current === category?.name ? undefined : category?.name ?? undefined)}
                    key={category?.name || ""}
                    className="btn btn-outline min-h-11 aria-pressed:bg-primary aria-pressed:text-primary-content"
                    data-tina-field={tinaField(blogListBlock, "categories")}
                  >
                    {category?.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {visiblePosts.length === 0 && <p>No articles in this category yet.</p>}
              {visiblePosts.map((edge) => {
                const node = edge?.node;
                if (!node) return null;
                return (
                  <Link
                    key={node._sys.filename}
                    to={`/blog/${node._sys.filename}`}
                    className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <article className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-paper p-4 transition-colors group-hover:border-slate-400 sm:flex-row sm:items-start sm:p-5">
                      {node.thumbnail && (
                        <div className="aspect-video w-full shrink-0 overflow-hidden rounded-lg sm:w-44">
                          <img
                            src={node.thumbnail}
                            alt={node.title || ""}
                            className="w-full h-full object-cover motion-safe:group-hover:scale-105 motion-safe:transition-transform duration-300"
                            data-tina-field={tinaField(node, "thumbnail")}
                          />
                        </div>
                      )}
                      <div className="min-w-0 grow">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
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
