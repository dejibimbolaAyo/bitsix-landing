import React from "react";
import type { AboutQuery } from "tina/__generated__/types";

import AboutHero from "@app/components/blocks/AboutHero/aboutHero";
import AboutContent from "@app/components/blocks/AboutContent/aboutContent";
import AboutCta from "@app/components/blocks/AboutCta/aboutCta";
import Team from "@app/components/blocks/Team/Team";

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
  const cta = about.blocks?.find(
    (block) => block?.__typename === "AboutBlocksAboutCta"
  );

  return (
    <div className="min-h-screen">
      {hero && <AboutHero data={hero} />}
      {content && <AboutContent data={content} />}
      {team && <Team data={team} />}
      {cta && <AboutCta data={cta} />}
    </div>
  );
};
