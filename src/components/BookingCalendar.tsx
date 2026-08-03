"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

type Props = {
  value: string;
  onChange: (date: string) => void;
};

function toDateKey(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function BookingCalendar({ value, onChange }: Props) {
  const t = useTranslations("Booking");
  const locale = useLocale();
  const today = startOfDay(new Date());
  const [view, setView] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1),
  );

  const weekdays = useMemo(() => {
    const formatter = new Intl.DateTimeFormat(locale, { weekday: "short" });
    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(2024, 0, i); // Sunday-start reference week
      return formatter.format(day);
    });
  }, [locale]);

  const monthLabel = useMemo(
    () =>
      new Intl.DateTimeFormat(locale, {
        month: "long",
        year: "numeric",
      }).format(view),
    [locale, view],
  );

  const cells = useMemo(() => {
    const year = view.getFullYear();
    const month = view.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const items: Array<{ key: string; date: Date | null }> = [];

    for (let i = 0; i < firstDay; i += 1) {
      items.push({ key: `empty-${i}`, date: null });
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = new Date(year, month, day);
      items.push({ key: toDateKey(date), date });
    }

    return items;
  }, [view]);

  const canGoPrev =
    view.getFullYear() > today.getFullYear() ||
    (view.getFullYear() === today.getFullYear() &&
      view.getMonth() > today.getMonth());

  function isDisabled(date: Date) {
    const day = date.getDay();
    if (day === 0) return true; // Sunday closed
    return date < today;
  }

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button
          type="button"
          className="calendar-nav"
          aria-label={t("prevMonth")}
          disabled={!canGoPrev}
          onClick={() =>
            setView((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
          }
        >
          ‹
        </button>
        <p className="calendar-title">{monthLabel}</p>
        <button
          type="button"
          className="calendar-nav"
          aria-label={t("nextMonth")}
          onClick={() =>
            setView((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
          }
        >
          ›
        </button>
      </div>

      <div className="calendar-weekdays">
        {weekdays.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>

      <div className="calendar-grid" role="grid" aria-label={t("date")}>
        {cells.map((cell) => {
          if (!cell.date) {
            return <span key={cell.key} />;
          }

          const key = toDateKey(cell.date);
          const disabled = isDisabled(cell.date);
          const selected = value === key;
          const isToday = toDateKey(today) === key;

          return (
            <button
              key={cell.key}
              type="button"
              className={`calendar-day${selected ? " is-selected" : ""}${
                isToday ? " is-today" : ""
              }`}
              disabled={disabled}
              aria-pressed={selected}
              onClick={() => onChange(key)}
            >
              {cell.date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
