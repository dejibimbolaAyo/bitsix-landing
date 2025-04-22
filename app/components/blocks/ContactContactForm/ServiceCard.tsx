import React from "react";

interface ServiceCardProps {
  href: string;
  iconColor: string;
  bgColor: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  href,
  iconColor,
  bgColor,
  title,
  description,
  icon,
}) => (
  <a
    href={href}
    className="group p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors duration-300"
  >
    <div className="flex items-center space-x-3">
      <div
        className={`flex-shrink-0 w-10 h-10 rounded-full ${bgColor} flex items-center justify-center`}
      >
        <div className={`w-5 h-5 ${iconColor}`}>{icon}</div>
      </div>
      <div>
        <h4
          className={`text-lg font-medium text-gray-900 group-hover:${iconColor} transition-colors duration-300`}
        >
          {title}
        </h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  </a>
);

export default ServiceCard;
