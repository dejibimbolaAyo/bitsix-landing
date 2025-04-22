import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import type { ContactBlocksContactHero } from "@tina/__generated__/types";

interface ContactHeroProps {
  data: ContactBlocksContactHero;
}

const ContactHero: React.FC<ContactHeroProps> = ({ data }) => {
  return (
    <section className="relative px-8 py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {data.contactHeroTitle || "Let's Build Something Great Together"}
            </h2>

            {data.contactHeroSubtitle && (
              <h3 className="text-xl md:text-2xl text-gray-600 font-medium">
                {data.contactHeroSubtitle}
              </h3>
            )}

            {data.contactHeroContent && (
              <div className="prose max-w-none text-lg text-gray-600">
                <TinaMarkdown content={data.contactHeroContent} />
              </div>
            )}

            {data.contactHeroCtaText && data.contactHeroCtaLink && (
              <div className="pt-4">
                <a
                  href={data.contactHeroCtaLink}
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full opacity-30" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
