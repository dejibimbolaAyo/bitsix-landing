import React from "react";


import AboutContent from "@app/components/blocks/AboutContent/aboutContent";
import AboutHero from "@app/components/blocks/AboutHero/aboutHero";
import Team from "@app/components/blocks/Team/Team";
import type { AboutQuery } from "tina/__generated__/types";

interface PageProps {
  data: AboutQuery;
}

export const AboutCompanyPage: React.FC<PageProps> = ({ data }) => {
  const about = data.about;

  const team = about.blocks?.find(
    (block) => block?.__typename === "AboutBlocksTeam"
  );

  const hero = about.blocks?.find(
    (block) => block?.__typename === "AboutBlocksAboutHero"
  );
  const content = about.blocks?.find(
    (block) => block?.__typename === "AboutBlocksAboutContent"
  );

  return (
    <div className="min-h-screen">
      {hero && <AboutHero data={hero} />}
      {content && <AboutContent data={content} />}
      {team && <Team data={team} />}
    </div>
  );
};
