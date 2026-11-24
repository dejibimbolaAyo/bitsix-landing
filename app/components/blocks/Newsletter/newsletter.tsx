import React from "react";
import { tinaField } from "tinacms/dist/react";

import NewsletterSignup from "@app/components/ui/NewsletterSignup";
import type { BlogPageBlocksNewsletter } from "@tina/__generated__/types";

interface NewsletterProps {
  data: BlogPageBlocksNewsletter;
}

const Newsletter: React.FC<NewsletterProps> = ({ data }) => {
  const {
    newsletterTitle,
    newsletterDescription,
    theme,
  } = data;
  const isLight = theme?.background?.startsWith("base-");

  return (
    <section className={`site-section ${isLight ? "bg-sand text-primary" : "bg-primary text-primary-content"}`}>
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
          <NewsletterSignup />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
