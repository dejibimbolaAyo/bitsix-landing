import React from "react";
import { tinaField } from "tinacms/dist/react";

import type { DigitalTransformationBlocksTestimonials } from "@tina/__generated__/types";

interface TestimonialsProps {
  data: DigitalTransformationBlocksTestimonials;
}

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2
            className="text-3xl md:text-3xl lg:text-4xl font-bold"
            data-tina-field={tinaField(data, "headline")}
          >
            {data.headline || "Feedback from Our Clients"}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left side testimonials */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.testimonials?.slice(0, 2).map((testimonial, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 h-full ${
                  index === 0 ? "bg-green-50" : "bg-amber-50"
                }`}
                data-tina-field={tinaField(data.testimonials?.[index])}
              >
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our mission is to provide nullam fermentum sapien magna
                  blandit vel, eros. Morbi eget felis. Donec justo. Ut lobortis
                  non, facilisis neque, vitae est. Our approach has empowered
                  local, national, and global brands to
                </p>

                <div className="flex items-center">
                  <div className="mr-4">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                      alt={testimonial?.authorName || "Client"}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial?.authorName || "Mahfuz Riad"}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial?.authorTitle || "UI Designer & Lead Staff"}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="md:col-span-2 flex justify-start">
              <a
                href="/testimonials"
                className="inline-flex items-center text-sm font-medium text-pink-600 hover:text-pink-700 focus:outline-none"
              >
                <span className="mr-2">→</span>
                Check more testimonial
              </a>
            </div>
          </div>

          {/* Right side image */}
          <div className="w-full lg:w-1/3 hidden lg:block">
            <div className="h-full">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Person working at desk"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
