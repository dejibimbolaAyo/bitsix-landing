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
    margin,
    spacing,
    smallerMobileBodyText,
  } = {
    ...data,
    blogImage: data.blogImage || undefined,
  };

  return (
    <section className={`relative overflow-hidden ${margin || "my-8"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content Section */}
          <div className={`${spacing || "space-y-4"} relative z-10`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="inline-block px-3 py-1 bg-primary/10 rounded-full">
                <span className="text-primary text-sm font-medium">
                  Latest Insights
                </span>
              </div>
              <div className="inline-block px-3 py-1 bg-secondary/10 rounded-full">
                <span className="text-secondary text-sm font-medium">
                  Featured
                </span>
              </div>
            </div>
            <h1
              className="text-3xl md:text-4xl font-bold leading-tight text-base-content"
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
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-base-200">
                <img
                  src={blogImage}
                  alt={title || "Blog post thumbnail"}
                  className="w-full h-full object-cover aspect-[16/9]"
                  data-tina-field={tinaField(data, "blogImage")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-100/30 via-base-100/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-secondary/10 rounded-full blur-2xl animate-pulse delay-1000" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse delay-2000" />
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary/5 rounded-full blur-xl" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
