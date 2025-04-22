import { Link } from "@remix-run/react";
import React from "react";

import {
  BlogPageBlocksBlogList,
  BlogPostConnectionQuery,
} from "@tina/__generated__/types";

interface BlogListProps {
  data: BlogPostConnectionQuery;
  block: BlogPageBlocksBlogList;
}

const BlogList: React.FC<BlogListProps> = ({ data, block }) => {
  return (
    <div>
      <h1>{block.listTitle}</h1>
      <div className="mb-8">
        <div className="flex gap-4">
          {block.categories?.map((category) => (
            <button
              key={category?.name}
              className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {category?.name}
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        {data.blogPostConnection.edges?.map((edge) => {
          return (
            <div key={edge?.node?._sys.filename}>
              <h1>{edge?.node?.title}</h1>
              <p>{edge?.node?.description}</p>
              <Link to={`/blog/${edge?.node?._sys.filename}`}>Read More</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
