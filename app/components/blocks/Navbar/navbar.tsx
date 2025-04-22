import { Link } from "@remix-run/react";
import React, { useState, useRef, useEffect } from "react";
import { tinaField } from "tinacms/dist/react";

import { NavbarQuery, NavbarMenu } from "@tina/__generated__/types";
interface NavbarProps {
  data: NavbarQuery;
}

const MenuItem: React.FC<{ item: NavbarMenu; className?: string }> = ({
  item,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!item.title || !item.link) {
    return null;
  }

  if (item.submenu?.length) {
    return (
      <li ref={menuRef} className={`relative ${className}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 px-4 py-2 hover:bg-base-200 rounded-lg transition-colors duration-200 w-full"
          data-tina-field={tinaField(item, "title")}
        >
          <span>{item.title}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ml-2 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <ul
          className={`
            absolute left-0 top-full
            w-56 bg-base-100 rounded-lg shadow-lg py-2
            ${isOpen ? "block" : "hidden"}
            z-50
            mt-2
          `}
        >
          {item.submenu.map((subItem) => {
            if (!subItem) return null;
            return (
              <li key={subItem.link} className="w-full">
                <Link
                  to={subItem.link || "#"}
                  className="block px-4 py-2 hover:bg-base-200 transition-colors duration-200"
                  data-tina-field={tinaField(subItem, "title")}
                  onClick={() => setIsOpen(false)}
                >
                  {subItem.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  }

  return (
    <li className={className}>
      <Link
        to={item.link}
        className="px-4 py-2 hover:bg-base-200 rounded-lg transition-colors duration-200 block"
        data-tina-field={tinaField(item, "title")}
      >
        {item.title}
      </Link>
    </li>
  );
};

const Navbar: React.FC<NavbarProps> = ({ data }) => {
  const navbar = data.navbar;
  const { logo, logoText, menu, cta } = navbar;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="navbar min-h-16">
          {/* Logo Section */}
          <div className="navbar-start">
            <Link
              to="/"
              className="btn btn-ghost gap-2 normal-case text-xl"
              data-tina-field={tinaField(navbar, "logo")}
            >
              <img
                src={logo?.default ?? ""}
                alt={logo?.alt ?? ""}
                className="w-8 h-8 object-contain"
              />
              <span data-tina-field={tinaField(navbar, "logoText")}>
                {logoText}
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2">
              {menu.map((item) => (
                <MenuItem key={item.link} item={item} />
              ))}
            </ul>
          </div>

          {/* CTA and Mobile Menu Button */}
          <div className="navbar-end gap-4">
            <Link
              to={cta.link}
              className="btn btn-primary hidden lg:flex"
              data-tina-field={tinaField(cta, "title")}
            >
              {cta.title}
            </Link>

            <button
              className="btn btn-ghost lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
          }`}
        >
          <ul className="menu gap-2">
            {menu.map((item) => (
              <MenuItem key={item.link} item={item} className="w-full" />
            ))}
            <li>
              <Link
                to={cta.link}
                className="btn btn-primary w-full"
                data-tina-field={tinaField(cta, "title")}
              >
                {cta.title}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
