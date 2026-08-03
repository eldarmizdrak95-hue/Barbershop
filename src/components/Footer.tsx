import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { BrandMark } from "./BrandMark";

export async function Footer() {
  const t = await getTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-1 border-t border-[var(--line)]">
      <div className="container flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <BrandMark
            as="p"
            className="pt-[0.35em] font-[family-name:var(--font-display)] text-xl tracking-[0.1em] uppercase"
            iconClassName="h-[0.9em] w-[0.9em] shrink-0 text-[var(--accent)]"
            monogramClassName="text-[1em] text-[var(--text)]"
          />
          <p className="mt-2 max-w-sm text-sm text-[var(--text-muted)]">
            {t("demo")}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm text-[var(--text-muted)]">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)]"
          >
            Instagram
          </a>
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)]"
          >
            Facebook
          </a>
          <span>
            © {year} {siteConfig.name}. {t("rights")}
          </span>
        </div>
      </div>
    </footer>
  );
}
