import { json, type LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import { components } from "@app/components/ui/BlogPost/custom-components";
import { client } from "@tina/__generated__/client";
import type { BlogPostQuery } from "@tina/__generated__/types";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  try {
    const postQueryResponse = await client.queries.blogPost({
      relativePath: `${params.slug}.mdx`,
    });

    if (!postQueryResponse.data.blogPost) {
      throw new Error("No post data found");
    }

    return json({
      postQuery: postQueryResponse,
    });
  } catch (error) {
    console.error("Error loading post:", error);
    throw error;
  }
};

export default function BlogPost() {
  const { postQuery } = useLoaderData<typeof loader>();
  const postData = useTina<BlogPostQuery>(postQuery);

  if (!postData.data.blogPost) {
    return <div>Post not found</div>;
  }

  const { title, content, author, date, category, tags, thumbnail } =
    postData.data.blogPost;

  return (
    <article className="min-h-screen bg-paper">
      <header className="site-hero">
        <div className="site-container">
          <div className="mx-auto max-w-4xl">
            <h1
              className="site-title mb-5"
              data-tina-field={tinaField(postData.data.blogPost, "title")}
            >
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral md:text-base">
              {author && (
                <span
                  className="flex items-center gap-2"
                  data-tina-field={tinaField(
                    postData.data.blogPost,
                    "author"
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {author}
                </span>
              )}
              {date && (
                <span
                  className="flex items-center gap-2"
                  data-tina-field={tinaField(postData.data.blogPost, "date")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {new Date(date).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="site-container py-10 md:py-14">
        <div className="mx-auto max-w-4xl">
          {thumbnail && (
            <img
              src={thumbnail}
              alt=""
              className="mb-8 aspect-video w-full rounded-2xl object-cover"
              data-tina-field={tinaField(postData.data.blogPost, "thumbnail")}
            />
          )}
          {/* Meta Information */}
          <div className="flex flex-wrap gap-4 mb-12">
            {category && (
              <span
                className="badge badge-primary badge-lg"
                data-tina-field={tinaField(postData.data.blogPost, "category")}
              >
                {category}
              </span>
            )}
            {tags?.map((tag) => (
              <span
                key={tag}
                className="badge badge-outline badge-lg"
                data-tina-field={tinaField(postData.data.blogPost, "tags")}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Main Content */}
          <div
            className="prose prose-lg min-w-0 max-w-[70ch] wrap-anywhere prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-p:text-lg prose-a:text-primary hover:prose-a:text-primary-focus prose-strong:text-primary prose-code:bg-slate-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:overflow-x-auto prose-pre:bg-slate-900 prose-pre:p-4 prose-pre:rounded-lg"
            data-tina-field={tinaField(postData.data.blogPost, "content")}
          >
            <TinaMarkdown content={content} components={components} />
          </div>
        </div>
      </div>
    </article>
  );
}
