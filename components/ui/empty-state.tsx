import type { LucideIcon } from "lucide-react";
import Link from "next/link";

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  actionHref,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      {Icon && (
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100 mb-5">
          <Icon size={28} strokeWidth={1.5} className="text-neutral-400" aria-hidden="true" />
        </div>
      )}
      <h3 className="text-base font-bold text-navy-950 mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-neutral-500 leading-relaxed max-w-sm mb-6">{description}</p>
      )}
      {actionLabel && actionHref && (
        <Link
          href={{ pathname: actionHref }}
          className="inline-flex items-center gap-2 rounded-lg bg-navy-950 px-5 py-2.5 text-sm font-bold text-white hover:bg-navy-800 transition-colors"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
