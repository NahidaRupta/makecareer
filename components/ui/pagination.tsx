import Link from "next/link";
import type { UrlObject } from "url";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

function pageUrl(basePath: string, page: number): UrlObject {
  return page === 1
    ? { pathname: basePath }
    : { pathname: basePath, query: { page } };
}

export function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages: (number | "ellipsis")[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push("ellipsis");
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("ellipsis");
    pages.push(totalPages);
  }

  const btnBase =
    "flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-colors";
  const btnActive = "bg-navy-950 text-white";
  const btnInactive = "border border-neutral-200 bg-white text-navy-700 hover:bg-neutral-50";
  const btnDisabled = "border border-neutral-100 bg-white text-neutral-300 cursor-not-allowed";

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-1">
      {/* Prev */}
      {currentPage > 1 ? (
        <Link
          href={pageUrl(basePath, currentPage - 1)}
          className={`${btnBase} ${btnInactive}`}
          aria-label="Previous page"
        >
          <ChevronLeft size={16} aria-hidden="true" />
        </Link>
      ) : (
        <span className={`${btnBase} ${btnDisabled}`} aria-disabled="true">
          <ChevronLeft size={16} aria-hidden="true" />
        </span>
      )}

      {/* Page numbers */}
      {pages.map((page, i) =>
        page === "ellipsis" ? (
          <span key={`ellipsis-${i}`} className={`${btnBase} text-neutral-400`}>
            …
          </span>
        ) : (
          <Link
            key={page}
            href={pageUrl(basePath, page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={`${btnBase} ${page === currentPage ? btnActive : btnInactive}`}
          >
            {page}
          </Link>
        )
      )}

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={pageUrl(basePath, currentPage + 1)}
          className={`${btnBase} ${btnInactive}`}
          aria-label="Next page"
        >
          <ChevronRight size={16} aria-hidden="true" />
        </Link>
      ) : (
        <span className={`${btnBase} ${btnDisabled}`} aria-disabled="true">
          <ChevronRight size={16} aria-hidden="true" />
        </span>
      )}
    </nav>
  );
}
