import { getTranslations } from "next-intl/server";

const images = [
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&q=80",
    className: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=80",
    className: "sm:col-span-2",
  },
];

export async function Gallery() {
  const t = await getTranslations("Gallery");

  return (
    <section id="gallery" className="section border-y border-[var(--line)] bg-[var(--bg-raised)]">
      <div className="container">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="section-title">{t("title")}</h2>
          <p className="section-subtitle">{t("subtitle")}</p>
        </div>

        <div className="mt-12 grid auto-rows-[14rem] gap-3 sm:grid-cols-2 lg:auto-rows-[16rem] lg:grid-cols-4">
          {images.map((image) => (
            <div
              key={image.src}
              className={`relative overflow-hidden border border-[var(--line)] ${image.className}`}
            >
              <img
                src={image.src}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
