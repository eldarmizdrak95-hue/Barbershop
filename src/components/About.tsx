import { getTranslations } from "next-intl/server";

export async function About() {
  const t = await getTranslations("About");

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
  ];

  return (
    <section id="about" className="section">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="section-title">{t("title")}</h2>
          <p className="section-subtitle">{t("body")}</p>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[var(--line)] pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-[family-name:var(--font-display)] text-3xl text-[var(--accent)] sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs tracking-[0.08em] text-[var(--text-muted)] uppercase sm:text-sm sm:normal-case sm:tracking-normal">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

            <div className="relative min-h-[22rem] overflow-hidden border border-[var(--line)] bg-[var(--light-soft)]">
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(43,40,35,0.55)_100%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[var(--light-strong)]" />
        </div>
      </div>
    </section>
  );
}
