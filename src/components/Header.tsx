"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig, whatsappUrl } from "@/config/site";
import { LanguageSwitcher } from "./LanguageSwitcher";

const links = [
  { href: "#about", key: "about" },
  { href: "#services", key: "services" },
  { href: "#gallery", key: "gallery" },
  { href: "#booking", key: "booking" },
  { href: "#contact", key: "contact" },
] as const;

export function Header() {
  const t = useTranslations("Nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-[4.25rem] items-center justify-between gap-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-lg tracking-[0.18em] uppercase"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-[0.78rem] font-medium tracking-[0.12em] uppercase text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <a href={siteConfig.phoneHref} className="btn btn-ghost !min-h-10 !px-3 !text-[0.72rem]">
            {t("call")}
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary !min-h-10 !px-3 !text-[0.72rem]"
          >
            {t("whatsapp")}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-[var(--line)] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 h-px w-full bg-[var(--text)] transition-all ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-full bg-[var(--text)] transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-full bg-[var(--text)] transition-all ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--line)] bg-[var(--bg)] lg:hidden">
          <nav className="container flex flex-col gap-1 py-5">
            {links.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="py-3 text-sm tracking-[0.14em] uppercase text-[var(--text-muted)]"
                onClick={() => setOpen(false)}
              >
                {t(link.key)}
              </a>
            ))}
            <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-[var(--line)] pt-5">
              <LanguageSwitcher />
              <a href={siteConfig.phoneHref} className="btn btn-ghost">
                {t("call")}
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {t("whatsapp")}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
