import React from "react";


import AboutContent from "@app/components/blocks/AboutContent/aboutContent";
import AboutHero from "@app/components/blocks/AboutHero/aboutHero";
import type {
  AboutQuery,
  AboutBlocksAboutHero,
  AboutBlocksAboutContent,
} from "@tina/__generated__/types";

interface PageProps {
  data: AboutQuery;
}

export const AboutCompanyPage: React.FC<PageProps> = ({ data }) => {
  const about = data.about;

  const hero = about.blocks?.find(
    (block) => block?.__typename === "AboutBlocksAboutHero"
  ) as AboutBlocksAboutHero | undefined;
  const content = about.blocks?.find(
    (block) => block?.__typename === "AboutBlocksAboutContent"
  ) as AboutBlocksAboutContent | undefined;

  return (
    <div className="min-h-screen">
      {hero && <AboutHero data={hero} />}
      {content && <AboutContent data={content} />}
    </div>
  );
};
