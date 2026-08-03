import { getLocale, getTranslations } from "next-intl/server";
import { siteConfig, whatsappUrl } from "@/config/site";

export async function Contact() {
  const t = await getTranslations("Contact");
  const locale = await getLocale();
  const address =
    locale === "en" ? siteConfig.address.en : siteConfig.address.it;

  return (
    <section id="contact" className="section border-t border-[var(--line)] bg-[var(--bg-raised)]">
      <div className="container">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="section-title">{t("title")}</h2>
          <p className="section-subtitle">{t("subtitle")}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs tracking-[0.16em] text-[var(--accent)] uppercase">
                {t("address")}
              </p>
              <p className="mt-3 text-lg">{address}</p>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-[var(--text-muted)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
              >
                {t("openMap")}
              </a>
            </div>

            <div>
              <p className="text-xs tracking-[0.16em] text-[var(--accent)] uppercase">
                {t("hours")}
              </p>
              <ul className="mt-3 space-y-2 text-[var(--text-muted)]">
                {siteConfig.hours.map((row) => (
                  <li key={row.dayKey} className="flex justify-between gap-4 border-b border-[var(--line)] pb-2">
                    <span>{t(row.dayKey)}</span>
                    <span>
                      {row.open && row.close
                        ? `${row.open} – ${row.close}`
                        : t("closed")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs tracking-[0.16em] text-[var(--accent)] uppercase">
                {t("phone")}
              </p>
              <a
                href={siteConfig.phoneHref}
                className="mt-3 block text-lg transition-colors hover:text-[var(--accent)]"
              >
                {siteConfig.phone}
              </a>
            </div>

            <div>
              <p className="text-xs tracking-[0.16em] text-[var(--accent)] uppercase">
                {t("email")}
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 block text-lg transition-colors hover:text-[var(--accent)]"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="relative min-h-[18rem] overflow-hidden border border-[var(--line)]">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381d?auto=format&fit=crop&w=1400&q=80"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(43,40,35,0.78)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                {t("writeWhatsapp")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
