import { defineSchema } from "tinacms";

import { blogCollection } from "./collectionsSchema/blog/blog";
import { postCollection } from "./collectionsSchema/blog/post";
import { aboutPageBlocksCollection } from "./collectionsSchema/pageBlocks/about";
import { blogPageBlocksCollection } from "./collectionsSchema/pageBlocks/blog";
import { blogPostPageBlocksCollection } from "./collectionsSchema/pageBlocks/blogPost";
import { caseStudiesPageBlocksCollection } from "./collectionsSchema/pageBlocks/case-studies";
import { ctoForHirePageBlocksCollection } from "./collectionsSchema/pageBlocks/ctoForHire";
import { digitalTransformationPageBlocksCollection } from "./collectionsSchema/pageBlocks/digitalTransformation";
import { engineersForHirePageBlocksCollection } from "./collectionsSchema/pageBlocks/engineersForHire";
import { footerCollection } from "./collectionsSchema/pageBlocks/footer";
import { homePageBlocksCollection } from "./collectionsSchema/pageBlocks/home";
import { navbarCollection } from "./collectionsSchema/pageBlocks/navbar";
import { productDevelopmentPageBlocksCollection } from "./collectionsSchema/pageBlocks/productDevelopment";
import { testimonialsPageBlocksCollection } from "./collectionsSchema/pageBlocks/testimonials";

export const schema = defineSchema({
    collections: [
        caseStudiesPageBlocksCollection,
        testimonialsPageBlocksCollection,
        ctoForHirePageBlocksCollection,
        engineersForHirePageBlocksCollection,
        productDevelopmentPageBlocksCollection,
        navbarCollection,
        footerCollection,
        blogCollection,
        postCollection,
        homePageBlocksCollection,
        aboutPageBlocksCollection,
        digitalTransformationPageBlocksCollection,
        blogPageBlocksCollection,
        blogPostPageBlocksCollection,
    ],
});