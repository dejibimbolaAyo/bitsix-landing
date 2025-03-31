import React from "react";
import { Link } from "@remix-run/react";
import { tinaField } from "tinacms/dist/react";
import { HomeBlocksInnovation } from "@tina/__generated__/types";
interface InnovationProps {
  data: HomeBlocksInnovation;
}

const IconComponent = ({ iconName }: { iconName: string }) => {
  switch (iconName) {
    case "cube":
      return (
        <div className="w-12 h-12 text-primary">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M12 2L3 7V17L12 22L21 17V7L12 2ZM19 7.9L12 11.7L5 7.9V8.1L12 12L19 8.1V7.9ZM12 4.1L18.5 7L12 10L5.5 7L12 4.1ZM5 15.9L12 19.1L19 15.9V15.7L12 19L5 15.7V15.9Z"
              fill="currentColor"
            />
          </svg>
        </div>
      );
    case "chart":
      return (
        <div className="w-12 h-12 text-primary">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M3 3V21H21V3H3ZM19 19H5V5H19V19ZM11 7H9V17H11V7ZM15 10H13V17H15V10Z"
              fill="currentColor"
            />
          </svg>
        </div>
      );
    case "gear":
      return (
        <div className="w-12 h-12 text-primary">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
              fill="currentColor"
            />
            <path
              d="M19.4 13C19.2669 13.3016 19.2272 13.6362 19.286 13.9606C19.3448 14.285 19.4995 14.5843 19.73 14.82L19.79 14.88C19.976 15.0657 20.1235 15.2863 20.2241 15.5291C20.3248 15.7719 20.3766 16.0322 20.3766 16.295C20.3766 16.5578 20.3248 16.8181 20.2241 17.0609C20.1235 17.3037 19.976 17.5243 19.79 17.71C19.6043 17.896 19.3837 18.0435 19.1409 18.1441C18.8981 18.2448 18.6378 18.2966 18.375 18.2966C18.1122 18.2966 17.8519 18.2448 17.6091 18.1441C17.3663 18.0435 17.1457 17.896 16.96 17.71L16.9 17.65C16.6643 17.4195 16.365 17.2648 16.0406 17.206C15.7162 17.1472 15.3816 17.1869 15.08 17.32C14.7842 17.4468 14.532 17.6572 14.3543 17.9255C14.1766 18.1938 14.0813 18.5082 14.08 18.83V19C14.08 19.5304 13.8693 20.0391 13.4942 20.4142C13.1191 20.7893 12.6104 21 12.08 21C11.5496 21 11.0409 20.7893 10.6658 20.4142C10.2907 20.0391 10.08 19.5304 10.08 19V18.91C10.0723 18.579 9.96512 18.258 9.77251 17.9887C9.5799 17.7194 9.31074 17.5143 9 17.4C8.69838 17.2669 8.36381 17.2272 8.03941 17.286C7.71502 17.3448 7.41568 17.4995 7.18 17.73L7.12 17.79C6.93425 17.976 6.71368 18.1235 6.47088 18.2241C6.22808 18.3248 5.96783 18.3766 5.705 18.3766C5.44217 18.3766 5.18192 18.3248 4.93912 18.2241C4.69632 18.1235 4.47575 17.976 4.29 17.79C4.10405 17.6043 3.95653 17.3837 3.85588 17.1409C3.75523 16.8981 3.70343 16.6378 3.70343 16.375C3.70343 16.1122 3.75523 15.8519 3.85588 15.6091C3.95653 15.3663 4.10405 15.1457 4.29 14.96L4.35 14.9C4.58054 14.6643 4.73519 14.365 4.794 14.0406C4.85282 13.7162 4.81312 13.3816 4.68 13.08C4.55324 12.7842 4.34276 12.532 4.07447 12.3543C3.80618 12.1766 3.49179 12.0813 3.17 12.08H3C2.46957 12.08 1.96086 11.8693 1.58579 11.4942C1.21071 11.1191 1 10.6104 1 10.08C1 9.54957 1.21071 9.04086 1.58579 8.66579C1.96086 8.29071 2.46957 8.08 3 8.08H3.09C3.42099 8.07229 3.742 7.96512 4.01129 7.77251C4.28059 7.5799 4.48572 7.31074 4.6 7C4.73312 6.69838 4.77282 6.36381 4.714 6.03941C4.65519 5.71502 4.50054 5.41568 4.27 5.18L4.21 5.12C4.02405 4.93425 3.87653 4.71368 3.77588 4.47088C3.67523 4.22808 3.62343 3.96783 3.62343 3.705C3.62343 3.44217 3.67523 3.18192 3.77588 2.93912C3.87653 2.69632 4.02405 2.47575 4.21 2.29C4.39575 2.10405 4.61632 1.95653 4.85912 1.85588C5.10192 1.75523 5.36217 1.70343 5.625 1.70343C5.88783 1.70343 6.14808 1.75523 6.39088 1.85588C6.63368 1.95653 6.85425 2.10405 7.04 2.29L7.1 2.35C7.33568 2.58054 7.63502 2.73519 7.95941 2.794C8.28381 2.85282 8.61838 2.81312 8.92 2.68H9C9.29577 2.55324 9.54802 2.34276 9.72569 2.07447C9.90337 1.80618 9.99872 1.49179 10 1.17V1C10 0.469574 10.2107 -0.0391685 10.5858 -0.414214C10.9609 -0.789259 11.4696 -1 12 -1C12.5304 -1 13.0391 -0.789259 13.4142 -0.414214C13.7893 -0.0391685 14 0.469574 14 1V1.09C14.0013 1.41179 14.0966 1.72618 14.2743 1.99447C14.452 2.26276 14.7042 2.47324 15 2.6C15.3016 2.73312 15.6362 2.77282 15.9606 2.714C16.285 2.65519 16.5843 2.50054 16.82 2.27L16.88 2.21C17.0657 2.02405 17.2863 1.87653 17.5291 1.77588C17.7719 1.67523 18.0322 1.62343 18.295 1.62343C18.5578 1.62343 18.8181 1.67523 19.0609 1.77588C19.3037 1.87653 19.5243 2.02405 19.71 2.21C19.896 2.39575 20.0435 2.61632 20.1441 2.85912C20.2448 3.10192 20.2966 3.36217 20.2966 3.625C20.2966 3.88783 20.2448 4.14808 20.1441 4.39088C20.0435 4.63368 19.896 4.85425 19.71 5.04L19.65 5.1C19.4195 5.33568 19.2648 5.63502 19.206 5.95941C19.1472 6.28381 19.1869 6.61838 19.32 6.92V7C19.4468 7.29577 19.6572 7.54802 19.9255 7.72569C20.1938 7.90337 20.5082 7.99872 20.83 8H21C21.5304 8 22.0391 8.21071 22.4142 8.58579C22.7893 8.96086 23 9.46957 23 10C23 10.5304 22.7893 11.0391 22.4142 11.4142C22.0391 11.7893 21.5304 12 21 12H20.91C20.5882 12.0013 20.2738 12.0966 20.0055 12.2743C19.7372 12.452 19.5268 12.7042 19.4 13Z"
              fill="currentColor"
            />
          </svg>
        </div>
      );
    default:
      return (
        <div className="w-12 h-12 text-primary">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M12 2L3 7V17L12 22L21 17V7L12 2ZM19 7.9L12 11.7L5 7.9V8.1L12 12L19 8.1V7.9ZM12 4.1L18.5 7L12 10L5.5 7L12 4.1ZM5 15.9L12 19.1L19 15.9V15.7L12 19L5 15.7V15.9Z"
              fill="currentColor"
            />
          </svg>
        </div>
      );
  }
};

const Innovation: React.FC<InnovationProps> = ({ data }) => {
  const { title, header, description, features, ctaText, ctaLink } = data;

  return (
    <section className="py-24 relative bg-gradient-to-b from-base-100 to-base-300 overflow-hidden">
      <div className="absolute inset-0 bg-grid-neutral/5 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-warning/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-warning/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="mb-16">
          <h3
            className="text-lg font-medium mb-4 text-secondary"
            data-tina-field={tinaField(data, "title")}
          >
            {title}
          </h3>
          <h2
            className="text-4xl font-bold mb-6 max-w-3xl text-primary"
            data-tina-field={tinaField(data, "header")}
          >
            {header}
          </h2>
          <p
            className="text-neutral max-w-3xl"
            data-tina-field={tinaField(data, "description")}
          >
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {features?.map((feature, index) => (
            <div key={index} className="flex flex-col items-start group">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <IconComponent iconName={feature?.icon || "default"} />
              </div>
              <h3
                className="text-xl font-bold mt-6 mb-4 text-primary"
                data-tina-field={tinaField(feature, "title")}
              >
                {feature?.title}
              </h3>
              <p
                className="text-neutral"
                data-tina-field={tinaField(feature, "description")}
              >
                {feature?.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <Link
            to={ctaLink || "#"}
            className="inline-flex items-center px-6 py-3 group text-secondary hover:text-warning transition-colors"
            data-tina-field={tinaField(data, "ctaText")}
          >
            {ctaText}
            <svg
              className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.172 12L8.22198 7.05L9.63598 5.636L16 12L9.63598 18.364L8.22198 16.95L13.172 12Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
