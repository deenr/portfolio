import { ReactNode } from "react";

interface BrandLinkProps {
  href?: string;
  icon: ReactNode;
  label: string;
  className?: string;
  iconColor?: string;
}

export function BrandLink({ href, icon, label, className = "", iconColor = "text-foreground" }: BrandLinkProps) {
  const content = (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <span className={`relative size-4 sm:size-5 p-0.5 overflow-hidden rounded-sm flex items-center justify-start ${iconColor} flex-shrink-0`}>
        {icon}
      </span>
      <span className="text-base">{label}</span>
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-foreground hover:underline underline-offset-[3px] transition-colors"
      >
        {content}
      </a>
    );
  }

  return content;
}
