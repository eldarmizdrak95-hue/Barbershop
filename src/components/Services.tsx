import { getTranslations } from "next-intl/server";

const serviceKeys = ["cut", "beard", "cutBeard", "shave", "kids", "color"] as const;

export async function Services() {
  const t = await getTranslations("Services");

  return (
    <section id="services" className="section border-y border-[var(--line)] bg-[var(--bg-raised)]">
      <div className="container">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="section-title">{t("title")}</h2>
          <p className="section-subtitle">{t("subtitle")}</p>
        </div>

        <ul className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {serviceKeys.map((key) => (
            <li
              key={key}
              className="grid gap-3 py-6 transition-colors hover:bg-[var(--accent-dim)] sm:grid-cols-[1fr_auto] sm:items-end sm:gap-8 sm:px-2"
            >
              <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wide">
                    {t(`items.${key}.name`)}
                  </h3>
                  <span className="text-xs tracking-[0.14em] text-[var(--text-muted)] uppercase">
                    {t(`items.${key}.duration`)}
                  </span>
                </div>
                <p className="mt-2 max-w-xl text-[var(--text-muted)]">
                  {t(`items.${key}.desc`)}
                </p>
              </div>
              <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--accent)]">
                {t(`items.${key}.price`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
