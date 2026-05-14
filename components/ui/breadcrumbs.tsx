import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
  light?: boolean;
}

export function Breadcrumbs({ crumbs, light = false }: BreadcrumbsProps) {
  const textBase = light ? "text-white/50 hover:text-white/80" : "text-neutral-400 hover:text-neutral-700";
  const textCurrent = light ? "text-white/80" : "text-neutral-700";
  const chevronColor = light ? "text-white/30" : "text-neutral-300";

  return (
    <nav aria-label="パンくずリスト">
      <ol className="flex flex-wrap items-center gap-1 text-xs">
        <li>
          <Link
            href={{ pathname: "/" }}
            className={`flex items-center gap-0.5 transition-colors ${textBase}`}
          >
            <Home size={11} aria-hidden="true" />
            <span className="sr-only">ホーム</span>
          </Link>
        </li>

        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={crumb.label} className="flex items-center gap-1">
              <ChevronRight
                size={12}
                className={chevronColor}
                aria-hidden="true"
              />
              {isLast || !crumb.href ? (
                <span
                  className={textCurrent}
                  aria-current={isLast ? "page" : undefined}
                >
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={{ pathname: crumb.href }}
                  className={`transition-colors ${textBase}`}
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
