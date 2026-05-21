import React from "react";


import Expertise from "@app/components/blocks/Expertise/expertise";
import Hero from "@app/components/blocks/Hero/hero";
import Innovation from "@app/components/blocks/Innovation/innovation";
import type {
  HomeQuery,
  HomeBlocksHero,
  HomeBlocksExpertise,
  HomeBlocksInnovation,
} from "@tina/__generated__/types";

interface PageProps {
  data: HomeQuery;
}

export const HomePage: React.FC<PageProps> = ({ data }) => {
  const home = data.home;

  const hero = home.blocks?.find(
    (block) => block?.__typename === "HomeBlocksHero"
  ) as HomeBlocksHero | undefined;
  const expertise = home.blocks?.find(
    (block) => block?.__typename === "HomeBlocksExpertise"
  ) as HomeBlocksExpertise | undefined;
  const innovation = home.blocks?.find(
    (block) => block?.__typename === "HomeBlocksInnovation"
  ) as HomeBlocksInnovation | undefined;

  return (
    <div>
      {hero && <Hero data={hero} />}
      {expertise && <Expertise data={expertise} />}
      {innovation && <Innovation data={innovation} />}
    </div>
  );
};

export default HomePage;
