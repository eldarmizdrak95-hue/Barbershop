type Props = {
  className?: string;
};

/** Straight razor icon — brand mark */
export function RazorIcon({ className = "h-5 w-5" }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.2 18.8c1.8-1.1 3.2-1.4 5.1-.6l9.8-9.8c1.1-1.1 1.2-2.9.2-4-.9-1-2.7-1.1-3.9.1L5.1 14.1c.5 1.9.1 3.4-1.1 5.1-.3.4 0 1 .5.9.4-.1.7-.5.7-1.3z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2 5.8l4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M4.6 16.6l2.8 2.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="17.8" cy="6.2" r="1.15" fill="currentColor" />
    </svg>
  );
}
