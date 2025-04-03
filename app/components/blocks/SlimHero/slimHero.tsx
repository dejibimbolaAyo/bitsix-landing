import React from "react";
import { tinaField } from "tinacms/dist/react";

interface SlimHeroProps {
  data: {
    headline: string;
    subheadline: string;
    backgroundImage?: string;
  };
}

const SlimHero: React.FC<SlimHeroProps> = ({ data }) => {
  return (
    <div className="relative overflow-hidden py-12 bg-white border-b border-gray-100">
      {/* Decorative Elements - Plus and Circle Shapes */}
      <div className="absolute top-12 left-12 w-6 h-6 text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5V19M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="absolute bottom-24 left-1/4 w-12 h-12 border-2 border-secondary/20 rounded-full"></div>
      <div className="absolute top-1/3 right-16 w-8 h-8 text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5V19M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="absolute bottom-12 right-1/3 w-10 h-10 border-2 border-secondary/20 rounded-full"></div>
      <div className="absolute top-10 right-1/2 w-4 h-4 bg-secondary/10 rounded-full"></div>
      <div className="absolute bottom-20 left-16 w-5 h-5 bg-secondary/10 rounded-full"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Text Content - Left Column */}
          <div className="md:w-1/2 md:pr-8">
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-medium">
                Latest Insights
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-400 text-amber-900 text-xs font-medium">
                Featured
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-3xl md:text-4xl font-bold mb-3 leading-tight text-gray-900"
              data-tina-field={tinaField(data, "headline")}
            >
              {data.headline}
            </h1>

            {/* Tagline/Subheadline */}
            <p
              className="text-base text-gray-600 mb-3"
              data-tina-field={tinaField(data, "subheadline")}
            >
              {data.subheadline}
            </p>

            {/* Updated timestamp */}
            <div className="flex items-center text-sm text-gray-500">
              <svg
                className="w-4 h-4 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              Updated 3h ago
            </div>
          </div>

          {/* Image - Right Column */}
          <div className="md:w-1/2 relative">
            <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-md">
              <img
                src={
                  data.backgroundImage ||
                  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                }
                alt="Development workspace with code on screen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlimHero;
