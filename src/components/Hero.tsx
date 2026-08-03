import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { BrandMark } from "./BrandMark";

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="hero-media absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="h-full w-full object-cover"
          style={{ animation: "kenburns 18s ease-out forwards" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(43,40,35,0.88)_0%,rgba(43,40,35,0.62)_48%,rgba(43,40,35,0.35)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,40,35,0.45)_0%,transparent_30%,rgba(43,40,35,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(243,235,224,0.18),transparent_45%)]" />
      </div>

      <div className="container flex min-h-[100svh] flex-col justify-end pb-16 pt-28 sm:pb-20 md:justify-center md:pb-24">
        <BrandMark
          as="h1"
          className="reveal pt-[0.45em] font-[family-name:var(--font-display)] text-[clamp(2.15rem,7.2vw,5.5rem)] leading-none font-bold tracking-[0.03em]"
          iconClassName="h-[0.78em] w-[0.78em] shrink-0 text-[var(--accent)]"
          monogramClassName="text-[1em] text-[var(--text)]"
          textClassName="uppercase font-bold"
        />
        <p className="reveal reveal-delay-1 mt-5 max-w-xl text-[clamp(1.15rem,2.4vw,1.55rem)] text-[var(--text)]/90">
          {t("headline")}
        </p>
        <p className="reveal reveal-delay-2 mt-3 max-w-md text-[var(--text-muted)]">
          {t("subtitle")}
        </p>
        <div className="reveal reveal-delay-3 mt-9 flex flex-wrap gap-3">
          <a href="#booking" className="btn btn-primary">
            {t("ctaBook")}
          </a>
          <a href={siteConfig.phoneHref} className="btn btn-ghost">
            {t("ctaCall")}
          </a>
        </div>
      </div>
    </section>
  );
}
