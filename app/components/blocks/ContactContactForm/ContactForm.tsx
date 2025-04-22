import { Form, useActionData, useNavigation } from "@remix-run/react";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

import type { ContactBlocksContactContactForm } from "@tina/__generated__/types";

type ActionData = {
  success: boolean;
  error?: string;
};

const ContactContactForm: React.FC<{
  data: ContactBlocksContactContactForm;
}> = ({ data }) => {
  const actionData = useActionData<ActionData>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    if (actionData?.success) {
      toast.success("Thank you! We'll get back to you soon.", {
        duration: 4000,
        position: "top-right",
        style: {
          background: "#10B981",
          color: "#fff",
          padding: "1rem",
          borderRadius: "0.5rem",
          fontSize: "1rem",
          fontWeight: "500",
        },
        icon: "🎉",
      });
    } else if (actionData?.error) {
      toast.error(actionData.error, {
        duration: 4000,
        position: "top-right",
        style: {
          background: "#EF4444",
          color: "#fff",
          padding: "1rem",
          borderRadius: "0.5rem",
          fontSize: "1rem",
          fontWeight: "500",
        },
        icon: "❌",
      });
    }
  }, [actionData]);

  // Default form fields if not provided
  const defaultFormFields = {
    fullNameLabel: "Your Name",
    emailLabel: "Email Address",
    phoneLabel: "Phone Number",
    companyLabel: "Company / Organization",
    projectTypeLabel: "What type of project are you working on?",
    projectTypeOptions: [
      "Web Application",
      "Mobile Application",
      "Branding & Design",
      "Technical Consulting",
      "Other",
    ],
    helpLabel: "Tell us about your project",
    budgetLabel: "Project Budget Range",
    budgetOptions: [
      "Less than $5,000",
      "$5,000 - $10,000",
      "$10,000 - $20,000",
      "$20,000 - $50,000",
      "$50,000+",
    ],
    contactMethodLabel: "How would you like us to reach you?",
    contactMethodOptions: ["Email", "Phone", "WhatsApp"],
    submitButtonText: "Send Message",
  };

  const formFields = data.formFields ?? defaultFormFields;

  return (
    <section className="px-8 py-12 lg:py-16" id="contact-form">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {data.contactContactFormTitle ||
              "Let's Build Something Amazing Together"}
          </h2>
          {data.contactContactFormSubtitle && (
            <h3 className="text-xl md:text-2xl text-gray-600">
              {data.contactContactFormSubtitle}
            </h3>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="">
            <div className="sticky top-24 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Get in Touch
                </h3>
                <p className="text-gray-600">
                  Have a project in mind? Fill out the form below and let&apos;s
                  discuss how we can help bring your ideas to life.
                </p>
              </div>

              {/* Service Cards */}
              <div className="grid grid-cols-1 gap-4">
                <a
                  href="/services/digital-transformation"
                  className="group p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        Digital Transformation
                      </h4>
                      <p className="text-sm text-gray-500">
                        End-to-end digital media & commerce solutions
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="/services/product-development"
                  className="group p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        Product Development
                      </h4>
                      <p className="text-sm text-gray-500">
                        Custom software and application development
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="/services/cto-for-hire"
                  className="group p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                        CTO for Hire
                      </h4>
                      <p className="text-sm text-gray-500">
                        Strategic technology leadership on demand
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="/services/engineers-for-hire"
                  className="group p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-yellow-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                        Engineers for Hire
                      </h4>
                      <p className="text-sm text-gray-500">
                        Expert engineering talent for your projects
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="lg:pl-12 lg:border-l lg:border-gray-200">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Reach out to us about your project
                </h3>
                <p className="text-gray-600">
                  We&apos;ll review your submission and get back to you within
                  24 hours.
                </p>
              </div>

              <Form method="post" className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {formFields.fullNameLabel}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="John Doe"
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {formFields.emailLabel}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {formFields.phoneLabel}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {formFields.companyLabel}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Acme Inc."
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {formFields.projectTypeLabel}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 appearance-none"
                    >
                      <option value="">Select a project type</option>
                      {formFields.projectTypeOptions?.map((option: string) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* How can we help */}
                <div className="space-y-2">
                  <label
                    htmlFor="help"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {formFields.helpLabel}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                    </div>
                    <textarea
                      id="help"
                      name="help"
                      required
                      rows={4}
                      placeholder="Describe your project goals, timeline, and any specific requirements..."
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {formFields.budgetLabel}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 appearance-none"
                    >
                      <option value="">Select a budget range</option>
                      {formFields.budgetOptions?.map(
                        (option: string | null) => (
                          <option key={option} value={option || ""}>
                            {option || ""}
                          </option>
                        )
                      )}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div className="space-y-2">
                  <label
                    htmlFor="contactMethod"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {formFields.contactMethodLabel}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <select
                      id="contactMethod"
                      name="contactMethod"
                      required
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 appearance-none"
                    >
                      <option value="">Select preferred contact method</option>
                      {formFields.contactMethodOptions?.map(
                        (option: string) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        )
                      )}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn btn-primary py-4 text-lg font-medium ${
                      isSubmitting ? "cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      formFields.submitButtonText
                    )}
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContactForm;
