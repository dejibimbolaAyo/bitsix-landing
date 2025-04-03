import React from "react";
import type { TestimonialsQuery } from "@tina/__generated__/types";

import TestimonialsHero from "@app/components/blocks/TestimonialsHero/Hero";
import TestimonialsFeaturedTestimonials from "@app/components/blocks/TestimonialsFeaturedTestimonials/FeaturedTestimonials";
import TestimonialsTestimonialsList from "@app/components/blocks/TestimonialsTestimonialsList/TestimonialsList";

interface PageProps {
  data: TestimonialsQuery;
}

export const TestimonialsPage: React.FC<PageProps> = ({ data }) => {
  const page = data.testimonials;

  const Hero = page.blocks?.find(
    (block) => block?.__typename === "TestimonialsBlocksTestimonialsHero"
  );
  const FeaturedTestimonials = page.blocks?.find(
    (block) => block?.__typename === "TestimonialsBlocksTestimonialsFeaturedTestimonials"
  );
  const TestimonialsList = page.blocks?.find(
    (block) => block?.__typename === "TestimonialsBlocksTestimonialsTestimonialsList"
  );

  return (
    <div>
      {Hero && <TestimonialsHero data={Hero} />}
      {FeaturedTestimonials && <TestimonialsFeaturedTestimonials data={FeaturedTestimonials} />}
      {TestimonialsList && <TestimonialsTestimonialsList data={TestimonialsList} />}
    </div>
  );
};

export default TestimonialsPage;