"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const labels: Record<string, string> = {
  it: "IT",
  en: "EN",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className="inline-flex items-center border border-[var(--line)]"
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => router.replace(pathname, { locale: code })}
            className={`min-w-10 px-2.5 py-1.5 text-xs font-semibold tracking-[0.14em] transition-colors ${
              active
                ? "bg-[var(--light)] text-[#1f1c18]"
                : "bg-transparent text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
            aria-pressed={active}
          >
            {labels[code]}
          </button>
        );
      })}
    </div>
  );
}
