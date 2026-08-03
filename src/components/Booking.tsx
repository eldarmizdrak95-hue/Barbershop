"use client";

import { FormEvent, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { siteConfig, whatsappUrl } from "@/config/site";
import { BookingCalendar } from "./BookingCalendar";

const serviceKeys = ["cut", "beard", "cutBeard", "shave", "kids", "color"] as const;

type FormState = {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  notes: "",
};

export function Booking() {
  const t = useTranslations("Booking");
  const tServices = useTranslations("Services");
  const locale = useLocale();
  const [form, setForm] = useState<FormState>(initial);
  const [touched, setTouched] = useState(false);

  const times = useMemo(
    () => [
      "09:00",
      "09:30",
      "10:00",
      "10:30",
      "11:00",
      "11:30",
      "12:00",
      "14:00",
      "14:30",
      "15:00",
      "15:30",
      "16:00",
      "16:30",
      "17:00",
      "17:30",
      "18:00",
      "18:30",
      "19:00",
    ],
    [],
  );

  const missing =
    !form.name.trim() ||
    !form.phone.trim() ||
    !form.service ||
    !form.date ||
    !form.time;

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function buildMessage() {
    const serviceLabel = form.service
      ? tServices(`items.${form.service}.name`)
      : form.service;

    if (locale === "en") {
      return [
        `Hello ${siteConfig.name}, I'd like to book an appointment.`,
        ``,
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Service: ${serviceLabel}`,
        `Date: ${form.date}`,
        `Time: ${form.time}`,
        form.notes.trim() ? `Notes: ${form.notes.trim()}` : null,
      ]
        .filter(Boolean)
        .join("\n");
    }

    return [
      `Ciao ${siteConfig.name}, vorrei prenotare un appuntamento.`,
      ``,
      `Nome: ${form.name}`,
      `Telefono: ${form.phone}`,
      `Servizio: ${serviceLabel}`,
      `Data: ${form.date}`,
      `Orario: ${form.time}`,
      form.notes.trim() ? `Note: ${form.notes.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched(true);
    if (missing) return;
    window.open(whatsappUrl(buildMessage()), "_blank", "noopener,noreferrer");
  }

  const fieldClass =
    "w-full border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] outline-none transition-colors placeholder:text-[var(--text-muted)]/60 focus:border-[var(--accent)]";

  return (
    <section id="booking" className="section">
      <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="section-title">{t("title")}</h2>
          <p className="section-subtitle">{t("subtitle")}</p>
          <p className="mt-6 max-w-md border-l-2 border-[var(--light)] pl-4 text-sm text-[var(--text-muted)]">
            {t("demoNote")}
          </p>
          <p className="mt-4 text-sm text-[var(--text-muted)]">{t("successHint")}</p>
        </div>

        <form
          onSubmit={onSubmit}
          className="border border-[var(--line)] bg-[var(--bg-raised)] p-6 sm:p-8"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-xs tracking-[0.14em] text-[var(--text-muted)] uppercase">
                {t("name")}
              </span>
              <input
                className={fieldClass}
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder={t("namePlaceholder")}
                autoComplete="name"
                required
              />
            </label>

            <label className="block sm:col-span-1">
              <span className="mb-2 block text-xs tracking-[0.14em] text-[var(--text-muted)] uppercase">
                {t("phone")}
              </span>
              <input
                className={fieldClass}
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder={t("phonePlaceholder")}
                autoComplete="tel"
                type="tel"
                required
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="mb-2 block text-xs tracking-[0.14em] text-[var(--text-muted)] uppercase">
                {t("service")}
              </span>
              <select
                className={fieldClass}
                value={form.service}
                onChange={(e) => update("service", e.target.value)}
                required
              >
                <option value="">{t("servicePlaceholder")}</option>
                {serviceKeys.map((key) => (
                  <option key={key} value={key}>
                    {tServices(`items.${key}.name`)} — {tServices(`items.${key}.price`)}
                  </option>
                ))}
              </select>
            </label>

            <div className="sm:col-span-2">
              <span className="mb-2 block text-xs tracking-[0.14em] text-[var(--text-muted)] uppercase">
                {t("date")}
              </span>
              <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
                <BookingCalendar
                  value={form.date}
                  onChange={(date) => update("date", date)}
                />

                <div>
                  <span className="mb-2 block text-xs tracking-[0.14em] text-[var(--text-muted)] uppercase">
                    {t("time")}
                  </span>
                  {!form.date ? (
                    <p className="border border-dashed border-[var(--line)] px-4 py-8 text-sm text-[var(--text-muted)]">
                      {t("pickDateFirst")}
                    </p>
                  ) : (
                    <div className="time-grid">
                      {times.map((time) => (
                        <button
                          key={time}
                          type="button"
                          className={`time-slot${form.time === time ? " is-selected" : ""}`}
                          onClick={() => update("time", time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <label className="block sm:col-span-2">
              <span className="mb-2 block text-xs tracking-[0.14em] text-[var(--text-muted)] uppercase">
                {t("notes")}
              </span>
              <textarea
                className={`${fieldClass} min-h-28 resize-y`}
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                placeholder={t("notesPlaceholder")}
              />
            </label>
          </div>

          {touched && missing && (
            <p className="mt-4 text-sm text-[var(--danger)]">{t("required")}</p>
          )}

          <div className="mt-7 flex flex-wrap gap-3">
            <button type="submit" className="btn btn-whatsapp">
              {t("submitWhatsapp")}
            </button>
            <a href={siteConfig.phoneHref} className="btn btn-ghost">
              {t("submitCall")}
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
