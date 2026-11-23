import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import type { ContactBlocksContactHero } from "@tina/__generated__/types";

interface ContactHeroProps {
  data: ContactBlocksContactHero;
}

const ContactHero: React.FC<ContactHeroProps> = ({ data }) => {
  return (
    <section className="site-hero">
      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <h1 className="site-title mb-5">
              {data.contactHeroTitle || "Let's Build Something Great Together"}
            </h1>

            {data.contactHeroSubtitle && (
              <p className="text-lg font-bold text-primary">
                {data.contactHeroSubtitle}
              </p>
            )}

            {data.contactHeroContent && (
              <div className="prose max-w-none text-lg text-neutral">
                <TinaMarkdown content={data.contactHeroContent} />
              </div>
            )}

            {data.contactHeroCtaText && data.contactHeroCtaLink && (
              <div className="pt-4">
                <a
                  href={data.contactHeroCtaLink}
                  className="site-action"
                >
                  {data.contactHeroCtaText}
                </a>
              </div>
            )}
          </div>

          {/* Image Section */}
          {data.contactHeroImage && (
            <div className="relative">
              <img
                src={data.contactHeroImage}
                alt={data.contactHeroTitle ?? "Hero Image"}
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
              {/* Decorative elements */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
