import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";

export const components = {
  h1: (props?: { children: JSX.Element }) => <h2>{props?.children}</h2>,
  // Call to Action component
  CallToAction: ({
    children,
    buttonText,
    buttonLink,
    title,
    url,
  }: {
    children?: TinaMarkdownContent;
    buttonText?: string;
    buttonLink?: string;
    title?: string;
    url?: string;
  }) => (
    <div className="my-8 p-6 bg-primary/10 rounded-lg">
      {title && buttonText && <h3>{title}</h3>}
      {children && <TinaMarkdown content={children} />}
      {(buttonLink || url) && (buttonText || title) && (
        <a href={buttonLink || url} className="not-prose site-action">
          {buttonText || title}
        </a>
      )}
    </div>
  ),

  InfoBox: ({
    children,
    title,
  }: {
    children?: TinaMarkdownContent;
    title?: string;
  }) => {
    if (!children?.children?.length) return null;

    return (
      <aside className="my-8 rounded-lg bg-base-200 p-6 [&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {title && <h3 className="text-xl font-bold">{title}</h3>}
        <TinaMarkdown content={children} />
      </aside>
    );
  },

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
    quote,
  }: {
    children?: TinaMarkdownContent;
    author?: string;
    quote?: string;
  }) => (
    <blockquote className="my-8 pl-6 border-l-4 border-primary">
      <div className="prose prose-lg max-w-none">
        {children ? <TinaMarkdown content={children} /> : quote && <p>{quote}</p>}
      </div>
      {author && <footer className="mt-4 text-right italic">— {author}</footer>}
    </blockquote>
  ),
};
