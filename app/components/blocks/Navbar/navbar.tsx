import { Link, NavLink } from "@remix-run/react";
import React, { useEffect, useId, useRef, useState } from "react";
import { tinaField } from "tinacms/dist/react";

import { NavbarQuery, NavbarMenu } from "@tina/__generated__/types";

interface NavbarProps {
  data: NavbarQuery;
}

const navLinkClass = "flex min-h-11 items-center rounded-lg px-3 text-sm font-semibold transition-colors hover:bg-slate-100 aria-[current=page]:bg-slate-100 aria-[current=page]:underline aria-[current=page]:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
const ctaClass = "inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-primary-content transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const MenuItem = ({ item, onNavigate }: { item: NavbarMenu; onNavigate: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.stopPropagation();
      setIsOpen(false);
      triggerRef.current?.focus();
    };
    const menu = menuRef.current;
    menu?.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      menu?.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [isOpen]);

  if (!item.title || !item.link) return null;

  if (!item.submenu?.length) {
    return (
      <li>
        <NavLink to={item.link} reloadDocument={item.link === "/resources/case-studies"} end={item.link === "/"} className={navLinkClass} data-tina-field={tinaField(item, "title")} onClick={onNavigate}>
          {item.title}
        </NavLink>
      </li>
    );
  }

  return (
    <li
      ref={menuRef}
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        className={`${navLinkClass} w-full justify-between gap-2`}
        data-tina-field={tinaField(item, "title")}
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.title}
        <svg aria-hidden="true" className={`size-4 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <ul id={menuId} hidden={!isOpen} className="ml-3 border-l border-slate-200 pl-2 lg:absolute lg:left-0 lg:top-full lg:ml-0 lg:w-60 lg:rounded-xl lg:border lg:bg-paper lg:p-2 lg:shadow-lg">
        {item.submenu.map((subItem) => subItem?.link && (
          <li key={subItem.link}>
            <NavLink
              to={subItem.link}
              reloadDocument={subItem.link === "/resources/case-studies"}
              className={navLinkClass}
              data-tina-field={tinaField(subItem, "title")}
              onClick={() => {
                setIsOpen(false);
                onNavigate();
              }}
            >
              {subItem.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
};

const Navbar: React.FC<NavbarProps> = ({ data }) => {
  const { navbar } = data;
  const { logo, logoText, menu, cta } = navbar;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const nav = navRef.current;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !toggleRef.current?.offsetWidth) return;
      setIsMobileMenuOpen(false);
      toggleRef.current.focus();
    };
    nav?.addEventListener("keydown", closeOnEscape);
    return () => nav?.removeEventListener("keydown", closeOnEscape);
  }, [isMobileMenuOpen]);

  return (
    <nav ref={navRef} aria-label="Primary" className="sticky top-0 z-50 border-b border-slate-200 bg-paper text-slate-900">
      <div className="site-container flex min-h-16 flex-wrap items-center justify-between gap-x-4 lg:min-h-18 lg:flex-nowrap">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center gap-2.5 rounded-lg text-lg font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          data-tina-field={tinaField(navbar, "logo")}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img src={logo?.default ?? ""} alt={logoText ? "" : logo?.alt ?? ""} className="size-8 shrink-0 object-contain" />
          <span data-tina-field={tinaField(navbar, "logoText")}>{logoText}</span>
        </Link>
        <button
          ref={toggleRef}
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-controls={menuId}
          className={`${navLinkClass} gap-2 lg:hidden`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          Menu
          <svg aria-hidden="true" className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeWidth={2} d={isMobileMenuOpen ? "m6 6 12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} />
          </svg>
        </button>
        <ul
          id={menuId}
          className={`${isMobileMenuOpen ? "block" : "hidden"} max-h-[calc(100dvh-4rem)] w-full overflow-auto border-t border-slate-200 py-3 lg:flex lg:max-h-none lg:w-auto lg:items-center lg:gap-1 lg:overflow-visible lg:border-0 lg:py-0`}
        >
          {menu.map((item) => (
            <MenuItem key={item.link} item={item} onNavigate={() => setIsMobileMenuOpen(false)} />
          ))}
          <li className="mt-3 lg:mt-0 lg:ml-4">
            <Link to={cta.link} className={`${ctaClass} w-full lg:w-auto`} data-tina-field={tinaField(cta, "title")} onClick={() => setIsMobileMenuOpen(false)}>
              {cta.title}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
