import React from "react";

import HowWeWork from "./sections/HowWeWork";
import Introduction from "./sections/Introduction";
import WhatWeDo from "./sections/WhatWeDo";
import WhyBitSix from "./sections/WhyBitSix";
import type { AboutBlocksAboutContent } from "@tina/__generated__/types";

interface AboutContentProps {
  data: AboutBlocksAboutContent;
}

const AboutContent: React.FC<AboutContentProps> = ({ data }) => {
  return (
    <div className="relative py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.03),transparent_50%)]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto space-y-32">
          <WhatWeDo data={data} />
          <HowWeWork data={data} />
          <WhyBitSix data={data} />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
