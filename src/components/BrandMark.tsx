import { siteConfig } from "@/config/site";
import { RazorIcon } from "./RazorIcon";

type Props = {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  as?: "span" | "p" | "h1";
};

export function BrandMark({
  className = "",
  iconClassName = "h-5 w-5 shrink-0 text-[var(--accent)]",
  textClassName = "",
  as: Tag = "span",
}: Props) {
  return (
    <Tag className={`inline-flex items-center gap-2.5 ${className}`}>
      <RazorIcon className={iconClassName} />
      <span className={textClassName}>{siteConfig.name}</span>
    </Tag>
  );
}
