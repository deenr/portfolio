import { ReactNode } from "react";
import { BrandLink } from "./brand-link";

interface BrandDescriptionLinkProps {
  href: string;
  icon?: ReactNode;
  label: string;
  description: string;
  iconColor?: string;
}

export function BrandDescriptionLink({
  href,
  icon,
  label,
  description,
  iconColor,
}: BrandDescriptionLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group text-foreground hover:text-foreground py-1 transition-colors duration-150 text-base flex items-center justify-between gap-2"
    >
      {icon ? (
        <BrandLink
          icon={icon}
          label={label}
          iconColor={iconColor}
          className="group-hover:underline underline-offset-[3px]"
        />
      ) : (
        <span className="text-base group-hover:underline underline-offset-[3px]">
          {label}
        </span>
      )}
      <span className="text-foreground text-base text-right">{description}</span>
    </a>
  );
}
