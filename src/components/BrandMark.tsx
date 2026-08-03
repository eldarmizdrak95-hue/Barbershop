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
  iconClassName = "h-5 w-5 shrink-0 text-[var(--accent)]",
  monogramClassName = "",
  textClassName = "",
  as: Tag = "span",
}: Props) {
  return (
    <Tag
      className={`inline-flex items-center gap-2.5 whitespace-nowrap ${className}`}
      aria-label={siteConfig.name}
    >
      <ScissorsIcon className={iconClassName} />
      <KKMonogram className={monogramClassName} />
      <span className={textClassName}>{siteConfig.wordmark}</span>
    </Tag>
  );
}
