import React from "react";

interface ServiceCardProps {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  href,
  title,
  description,
  icon,
}) => (
  <a
    href={href}
    className="group p-4 rounded-lg border border-gray-200 hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors duration-300"
  >
    <div className="flex items-center space-x-3">
      <div
        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sand text-primary"
      >
        <div className="size-5">{icon}</div>
      </div>
      <div>
        <h4
          className="text-lg font-medium text-primary group-hover:underline"
        >
          {title}
        </h4>
        <p className="text-sm text-neutral">{description}</p>
      </div>
    </div>
  </a>
);

export default ServiceCard;
