import type { Crumb } from "@/components/ui/breadcrumbs";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

interface PageHeroProps {
  eyebrow?: string;
  titleJa: string;
  titleEn?: string;
  descriptionJa?: string;
  crumbs: Crumb[];
  variant?: "navy" | "light";
}

export function PageHero({
  eyebrow,
  titleJa,
  titleEn,
  descriptionJa,
  crumbs,
  variant = "navy",
}: PageHeroProps) {
  const isNavy = variant === "navy";

  return (
    <section
      className={`relative overflow-hidden ${
        isNavy ? "bg-navy-950" : "bg-neutral-50 border-b border-neutral-200"
      }`}
    >
      {/* Background decoration (navy variant only) */}
      {isNavy && (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-br from-navy-950 via-navy-900 to-navy-800"
          />
          <div
            aria-hidden="true"
            className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none"
          />
        </>
      )}

      <div className="content-max relative px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs crumbs={crumbs} light={isNavy} />
        </div>

        {/* Eyebrow */}
        {eyebrow && (
          <p
            className={`text-xs font-semibold uppercase tracking-widest mb-3 ${
              isNavy ? "text-amber-400" : "text-amber-500"
            }`}
          >
            {eyebrow}
          </p>
        )}

        {/* Title */}
        <h1
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] ${
            isNavy ? "text-white" : "text-navy-950"
          }`}
        >
          {titleJa}
        </h1>

        {/* English subtitle */}
        {titleEn && (
          <p
            className={`mt-2 text-sm font-medium ${
              isNavy ? "text-white/40" : "text-neutral-400"
            }`}
          >
            {titleEn}
          </p>
        )}

        {/* Description */}
        {descriptionJa && (
          <p
            className={`mt-5 max-w-2xl text-base leading-relaxed ${
              isNavy ? "text-white/70" : "text-neutral-600"
            }`}
          >
            {descriptionJa}
          </p>
        )}
      </div>
    </section>
  );
}
