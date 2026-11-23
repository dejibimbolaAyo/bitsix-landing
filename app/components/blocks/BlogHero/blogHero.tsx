import React from "react";
import { tinaField } from "tinacms/dist/react";

import { BlogPageBlocksBlogHero } from "@tina/__generated__/types";

interface BlogHeroProps {
  data: BlogPageBlocksBlogHero & {
    lastUpdated?: string;
  };
}

const BlogHero: React.FC<BlogHeroProps> = ({ data }) => {
  const {
    title,
    blogSubtitle,
    blogImage,
    spacing,
    smallerMobileBodyText,
  } = {
    ...data,
    blogImage: data.blogImage || undefined,
  };

  return (
    <section className="site-hero">
      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content Section */}
          <div className={`${spacing || "space-y-4"} min-w-0`}>
            <h1
              className="site-title mb-5"
              data-tina-field={tinaField(data, "title")}
            >
              {title}
            </h1>
            <p
              className={`text-base md:text-lg text-base-content/80 leading-relaxed ${
                smallerMobileBodyText ? "text-sm md:text-base" : ""
              }`}
              data-tina-field={tinaField(data, "blogSubtitle")}
            >
              {blogSubtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-base-content/60">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 7V12L15 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Updated {data.lastUpdated}</span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          {blogImage && (
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-paper">
                <img
                  src={blogImage}
                  alt={title || "Blog post thumbnail"}
                  className="w-full h-full object-cover aspect-[16/9]"
                  data-tina-field={tinaField(data, "blogImage")}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
