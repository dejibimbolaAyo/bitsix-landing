import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";

export const components = {
  // Call to Action component
  CallToAction: ({
    children,
    buttonText,
    buttonLink,
  }: {
    children: TinaMarkdownContent;
    buttonText: string;
    buttonLink: string;
  }) => (
    <div className="my-8 p-6 bg-primary/10 rounded-lg">
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <TinaMarkdown content={children} />
      </div>
      <a href={buttonLink} className="mt-4 btn btn-primary">
        {buttonText}
      </a>
    </div>
  ),

  // Info Box component
  InfoBox: ({
    children,
    title,
  }: {
    children: TinaMarkdownContent;
    title: string;
  }) => (
    <div className="my-8 p-6 bg-base-200 rounded-lg">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <TinaMarkdown content={children} />
      </div>
    </div>
  ),

  // Code Block component
  CodeBlock: ({
    children,
    language,
  }: {
    children: string;
    language?: string;
  }) => (
    <div className="my-8">
      <pre className="p-4 rounded-lg overflow-x-auto">
        <code className={`language-${language || "plaintext"}`}>
          {children}
        </code>
      </pre>
    </div>
  ),

  // Image Gallery component
  ImageGallery: ({ images }: { images?: unknown }) => {
    // Ensure images is an array
    const imageArray = Array.isArray(images) ? images : [];

    return (
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {imageArray.map((image, index) => (
          <div key={index} className="aspect-square overflow-hidden rounded-lg">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    );
  },

  // Quote component
  Quote: ({
    children,
    author,
  }: {
    children: TinaMarkdownContent;
    author?: string;
  }) => (
    <blockquote className="my-8 pl-6 border-l-4 border-primary">
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <TinaMarkdown content={children} />
      </div>
      {author && <footer className="mt-4 text-right italic">— {author}</footer>}
    </blockquote>
  ),
};
