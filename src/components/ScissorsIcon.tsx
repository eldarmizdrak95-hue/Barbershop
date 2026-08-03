type Props = {
  className?: string;
};

/** Barber scissors icon */
export function ScissorsIcon({ className = "h-5 w-5" }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="5.2" cy="5.2" r="2.35" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="5.2" cy="18.8" r="2.35" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7.1 6.7 20.2 16.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.1 17.3 20.2 7.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="11.2" cy="12" r="1.15" fill="currentColor" />
    </svg>
  );
}
