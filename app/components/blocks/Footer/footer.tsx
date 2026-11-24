import { Link } from "@remix-run/react";
import React from "react";
import { tinaField } from "tinacms/dist/react";

import { publicContactEmail } from "@app/site-contact";
import { FooterQuery } from "@tina/__generated__/types";

interface FooterProps {
  data: FooterQuery;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  const footer = data.footer;

  const {
    logo,
    logoText,
    newsletterDescription,
    newsletterDisclaimer,
    quickLinks,
    resources,
    copyright,
  } = footer;

  return (
    <footer className="bg-base-300 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-50 [mask-image:linear-gradient(to_right,transparent,white,transparent)]" />
        <img
          src={logo.default ?? ""}
          alt=""
          className="absolute -right-24 top-1/2 -translate-y-1/2 w-[300px] h-auto opacity-10 rotate-12 select-none pointer-events-none"
        />
      </div>
      <div className="site-container py-8 relative">
        <div className="grid md:grid-cols-6 gap-12">
          {/* Newsletter Section */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="btn btn-ghost gap-2 normal-case text-sm px-0"
              data-tina-field={tinaField(footer, "logo")}
            >
              <img
                src={logo?.default ?? ""}
                alt={logo?.alt ?? ""}
                className="w-4 h-auto"
              />
              <span data-tina-field={tinaField(footer, "logoText")}>
                {logoText}
              </span>
            </Link>
            <p
              className="text-sm text-neutral mb-3"
              data-tina-field={tinaField(footer, "newsletterDescription")}
            >
              {newsletterDescription}
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email here"
                className="w-full px-3 py-1.5 rounded border border-base-content/10 bg-transparent text-sm"
              />
              <button
                type="submit"
                className="w-full px-3 py-1.5 bg-primary text-primary-content rounded hover:bg-primary/90 transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
            <p
              className="text-xs text-neutral mt-2"
              data-tina-field={tinaField(footer, "newsletterDisclaimer")}
            >
              {newsletterDisclaimer}
            </p>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-4 md:pl-48">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Quick Links */}
              <div>
                <h3 className="font-semibold mb-3 text-sm">Quick Links</h3>
                <nav className="space-y-1.5">
                  {quickLinks?.map((item, index: number) => (
                    <div key={index}>
                      <Link
                        to={item?.href ?? ""}
                        reloadDocument={item?.href === "/resources/case-studies"}
                        className="text-sm text-neutral hover:text-primary hover:underline transition-colors"
                        data-tina-field={tinaField(item, "name")}
                      >
                        {item?.name ?? ""}
                      </Link>
                    </div>
                  ))}
                </nav>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-semibold mb-3 text-sm">Resources</h3>
                <nav className="space-y-1.5">
                  {resources?.map((item, index: number) => (
                    <div key={index}>
                      <Link
                        to={item?.href ?? ""}
                        reloadDocument={item?.href === "/resources/case-studies"}
                        className="text-sm text-neutral hover:text-primary hover:underline transition-colors"
                        data-tina-field={tinaField(item, "name")}
                      >
                        {item?.name ?? ""}
                      </Link>
                    </div>
                  ))}
                </nav>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-sm">Connect With Us</h3>
                <div className="space-y-1.5">
                  <a
                    href={`mailto:${publicContactEmail}`}
                    className="block text-sm text-neutral underline underline-offset-4 hover:text-primary"
                  >
                    Mail us
                  </a>
                  <Link
                    to="/contact#contact-form"
                    className="block text-sm text-neutral hover:text-primary hover:underline transition-colors"
                  >
                    Send us a message
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-base-content/10">
          <div className="flex justify-center md:justify-start">
            <p
              className="text-sm text-neutral"
              data-tina-field={tinaField(footer, "copyright")}
            >
              {copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
