import { siteConfig } from "@/config/site";
import { KKMonogram } from "./KKMonogram";
import { ScissorsIcon } from "./ScissorsIcon";

type Props = {
  className?: string;
  iconClassName?: string;
  monogramClassName?: string;
  textClassName?: string;
  as?: "span" | "p" | "h1";
};

export function BrandMark({
  className = "",
  iconClassName = "h-[0.85em] w-[0.85em] shrink-0 text-[var(--accent)]",
  monogramClassName = "",
  textClassName = "",
  as: Tag = "span",
}: Props) {
  return (
    <Tag
      className={`inline-flex items-baseline gap-[0.35em] whitespace-nowrap ${className}`}
      aria-label={siteConfig.name}
    >
      <ScissorsIcon className={`relative top-[0.08em] ${iconClassName}`} />
      <KKMonogram className={monogramClassName} />
      <span className={textClassName}>{siteConfig.wordmark}</span>
    </Tag>
  );
}
