import React from "react";
import { tinaField } from "tinacms/dist/react";
import type { BlogPageBlocksNewsletter } from "tina/__generated__/types";

interface NewsletterProps {
  data: BlogPageBlocksNewsletter;
}

const Newsletter: React.FC<NewsletterProps> = ({ data }) => {
  const {
    newsletterTitle,
    newsletterDescription,
    newsletterButtonText,
    newsletterInputPlaceholder,
    theme,
  } = data;
  const bgColor = theme?.background || "primary";
  const textColor = theme?.textColor || "primary-content";

  return (
    <section className={`py-16 bg-${bgColor} text-${textColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-4"
            data-tina-field={tinaField(data, "newsletterTitle")}
          >
            {newsletterTitle}
          </h2>
          <p
            className="mb-8"
            data-tina-field={tinaField(data, "newsletterDescription")}
          >
            {newsletterDescription}
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={newsletterInputPlaceholder}
              className="input input-bordered flex-grow"
              data-tina-field={tinaField(data, "newsletterInputPlaceholder")}
            />
            <button
              type="submit"
              className="btn btn-secondary"
              data-tina-field={tinaField(data, "newsletterButtonText")}
            >
              {newsletterButtonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
