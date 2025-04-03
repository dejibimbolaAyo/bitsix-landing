import React from "react";
import { Link } from "@remix-run/react";
import { tinaField } from "tinacms/dist/react";
import { FooterQuery } from "@tina/__generated__/types";

interface FooterProps {
  data: FooterQuery;
}

const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "facebook":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
        </svg>
      );
    case "x":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case "youtube":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return null;
  }
};

const Footer: React.FC<FooterProps> = ({ data }) => {
  const footer = data.footer;

  const {
    logo,
    logoText,
    newsletterDescription,
    newsletterDisclaimer,
    quickLinks,
    resources,
    socialLinks,
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
      <div className="max-w-7xl mx-auto px-4 py-8 relative">
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
                        className="text-sm text-neutral hover:text-warning transition-colors"
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
                        className="text-sm text-neutral hover:text-warning transition-colors"
                        data-tina-field={tinaField(item, "name")}
                      >
                        {item?.name ?? ""}
                      </Link>
                    </div>
                  ))}
                </nav>
              </div>

              {/* Connect With Us */}
              <div>
                <h3 className="font-semibold mb-3 text-sm">Connect With Us</h3>
                <div className="space-y-1.5">
                  {socialLinks?.map((item, index: number) => (
                    <a
                      key={index}
                      href={item?.href ?? ""}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-neutral hover:text-warning transition-colors"
                      data-tina-field={tinaField(item, "name")}
                    >
                      <SocialIcon platform={item?.icon ?? ""} />
                      <span className="ml-2">{item?.name ?? ""}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-base-content/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p
              className="text-sm text-neutral"
              data-tina-field={tinaField(footer, "copyright")}
            >
              {copyright}
            </p>
            <div className="flex gap-4 text-sm text-neutral">
              <Link
                to="/privacy-policy"
                className="hover:text-warning transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="hover:text-warning transition-colors"
              >
                Terms of Service
              </Link>
              <button className="hover:text-warning transition-colors">
                Cookies Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
