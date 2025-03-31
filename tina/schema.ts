import { defineSchema } from "tinacms";
import { blogCollection } from "./collectionsSchema/blog/blog";
import { postCollection } from "./collectionsSchema/blog/post";
import { navbarCollection } from "./collectionsSchema/pageBlocks/navbar";
import { footerCollection } from "./collectionsSchema/pageBlocks/footer";
import { homePageBlocksCollection } from "./collectionsSchema/pageBlocks/home";
import { aboutPageBlocksCollection } from "./collectionsSchema/pageBlocks/about";
import { blogPageBlocksCollection } from "./collectionsSchema/pageBlocks/blog";
import { blogPostPageBlocksCollection } from "./collectionsSchema/pageBlocks/blogPost";
import { digitalTransformationPageBlocksCollection } from "./collectionsSchema/pageBlocks/digitalTransformation";

export const schema = defineSchema({
    collections: [
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