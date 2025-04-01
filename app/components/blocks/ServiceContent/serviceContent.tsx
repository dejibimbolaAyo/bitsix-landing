import React from "react";
import { tinaField } from "tinacms/dist/react";
import type { DigitalTransformationBlocksServiceContent } from "tina/__generated__/types";

interface ServiceContentProps {
  data: DigitalTransformationBlocksServiceContent;
}

// Icons for each service card
const icons: Record<string, React.ReactNode> = {
  creative: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
    </svg>
  ),
  performance: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
    </svg>
  ),
  planning: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M11 8h2v5h5v2h-7V8zM21 3v18H3V3h18zm-2 2H5v14h14V5z" />
    </svg>
  ),
  analytics: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z" />
    </svg>
  ),
};

const ServiceContent: React.FC<ServiceContentProps> = ({ data }) => {
  const cardColors = [
    "bg-red-50", // Light red/pink for creative
    "bg-purple-50", // Light purple for performance
    "bg-yellow-50", // Light yellow for planning
    "bg-green-50", // Light green for analytics
  ];

  const iconBgColors = [
    "bg-red-200", // Red icon background
    "bg-purple-200", // Purple icon background
    "bg-yellow-200", // Yellow icon background
    "bg-green-200", // Green icon background
  ];

  const iconColors = [
    "text-red-500", // Red icon
    "text-purple-500", // Purple icon
    "text-yellow-500", // Yellow icon
    "text-green-500", // Green icon
  ];

  const iconTypes = ["creative", "performance", "planning", "analytics"];
  const serviceNames = [
    "Creative branding",
    "Performance Content",
    "Planning & Insights",
    "Analytics & Technology",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2
            className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 max-w-3xl mx-auto"
            data-tina-field={tinaField(data, "headline")}
          >
            {data.headline}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.offerings?.map((offering, index) => {
              if (index < 4) {
                return (
                  <div
                    key={index}
                    className={`${
                      cardColors[index % 4]
                    } rounded-2xl p-6 h-full flex flex-col`}
                    data-tina-field={tinaField(data.offerings?.[index])}
                  >
                    <div className="mb-4">
                      <div
                        className={`${iconBgColors[index % 4]} ${
                          iconColors[index % 4]
                        } w-10 h-10 rounded-full flex items-center justify-center`}
                      >
                        {icons[iconTypes[index % 4]]}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-4">
                      {serviceNames[index % 4]}
                    </h3>

                    <ul className="space-y-3">
                      <li className="flex items-baseline">
                        <span className="text-gray-400 mr-2">□</span>
                        <span>End-to-End Digital Media & Commerce</span>
                      </li>
                      <li className="flex items-baseline">
                        <span className="text-gray-400 mr-2">□</span>
                        <span>End Digital Media & Commerce</span>
                      </li>
                    </ul>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className="w-full md:w-1/3 relative mt-10 md:mt-0">
            <div className="relative h-full flex items-center">
              <div className="absolute top-0 right-0 w-[90%] h-[90%] bg-pink-100 rounded-full opacity-20"></div>

              {/* Overlapping images */}
              <div className="relative z-10 ml-4">
                <img
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Team collaboration"
                  className="rounded-lg shadow-lg mb-4 max-w-[80%]"
                />
                <img
                  src="https://images.unsplash.com/photo-1638742385167-96fc60e12f59?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Design elements"
                  className="rounded-lg shadow-lg absolute top-[60%] left-[30%] max-w-[65%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContent;
