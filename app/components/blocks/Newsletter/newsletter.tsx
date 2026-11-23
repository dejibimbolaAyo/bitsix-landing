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
  const isLight = theme?.background?.startsWith("base-");

  return (
    <section className={`site-section bg-${isLight ? "bg-sand text-primary" : "bg-primary text-primary-content"}`}>
      <div className="site-container">
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
          <form className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              aria-label="Email address"
              placeholder={newsletterInputPlaceholder}
              className="input input-bordered min-h-12 w-full min-w-0 bg-paper text-neutral"
              data-tina-field={tinaField(data, "newsletterInputPlaceholder")}
            />
            <button
              type="submit"
              className={isLight ? "site-action" : "site-action-inverse"}
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
