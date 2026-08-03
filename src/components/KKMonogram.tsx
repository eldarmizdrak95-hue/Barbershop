type Props = {
  className?: string;
};

/** Mirrored KK with crown — brand monogram */
export function KKMonogram({ className = "" }: Props) {
  return (
    <span
      className={`kk-monogram relative inline-flex items-center leading-none ${className}`}
      aria-hidden="true"
    >
      <svg
        className="pointer-events-none absolute bottom-full left-1/2 mb-[0.06em] h-[0.38em] w-[0.9em] -translate-x-1/2 text-[var(--accent)]"
        viewBox="0 0 40 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 13.5 8.2 5.2 14 10.8 20 2.5 26 10.8 31.8 5.2 38 13.5H2Z" />
        <rect x="2" y="13.2" width="36" height="2.2" rx="0.4" />
        <circle cx="8.2" cy="4.4" r="1.35" />
        <circle cx="20" cy="2" r="1.5" />
        <circle cx="31.8" cy="4.4" r="1.35" />
      </svg>
      <span className="inline-flex items-baseline font-[family-name:var(--font-display)] font-semibold tracking-[-0.04em]">
        <span className="inline-block origin-center scale-x-[-1]">K</span>
        <span>K</span>
      </span>
    </span>
  );
}
