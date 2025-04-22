import React from "react";


import Expertise from "@app/components/blocks/Expertise/expertise";
import Hero from "@app/components/blocks/Hero/hero";
import Innovation from "@app/components/blocks/Innovation/innovation";
import type { HomeQuery } from "@tina/__generated__/types";

interface PageProps {
  data: HomeQuery;
}

export const HomePage: React.FC<PageProps> = ({ data }) => {
  const home = data.home;

  const hero = home.blocks?.find(
    (block) => block?.__typename === "HomeBlocksHero"
  );
  const expertise = home.blocks?.find(
    (block) => block?.__typename === "HomeBlocksExpertise"
  );
  const innovation = home.blocks?.find(
    (block) => block?.__typename === "HomeBlocksInnovation"
  );

  return (
    <div>
      {hero && <Hero data={hero} />}
      {expertise && <Expertise data={expertise} />}
      {innovation && <Innovation data={innovation} />}
    </div>
  );
};

export default HomePage;
