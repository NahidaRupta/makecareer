import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

interface CtaBannerProps {
  titleJa: string;
  descriptionJa?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "navy" | "amber";
}

export function CtaBanner({
  titleJa,
  descriptionJa,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = "navy",
}: CtaBannerProps) {
  const isNavy = variant === "navy";

  return (
    <section
      aria-label="Contact enquiry"
      className={`${isNavy ? "bg-navy-950" : "bg-amber-500"} section-padding`}
    >
      <div className="content-max px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <h2
              className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                isNavy ? "text-white" : "text-white"
              }`}
            >
              {titleJa}
            </h2>
            {descriptionJa && (
              <p
                className={`mt-3 text-base leading-relaxed ${
                  isNavy ? "text-white/70" : "text-white/85"
                }`}
              >
                {descriptionJa}
              </p>
            )}

            {/* Phone */}
            <a
              href="tel:0120000000"
              className={`mt-4 inline-flex items-center gap-2 text-sm transition-colors ${
                isNavy
                  ? "text-white/50 hover:text-white/80"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <Phone size={14} strokeWidth={1.5} aria-hidden="true" />
              <span>Call us: 0120-000-000 (Mon–Fri, 9:00–18:00)</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href={{ pathname: primaryHref }}
              className={`inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-bold transition-all hover:-translate-y-0.5 ${
                isNavy
                  ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30 hover:bg-amber-600"
                  : "bg-white text-amber-600 hover:bg-amber-50"
              }`}
            >
              {primaryLabel}
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </Link>

            {secondaryLabel && secondaryHref && (
              <Link
                href={{ pathname: secondaryHref }}
                className={`inline-flex items-center justify-center gap-2 rounded-lg border px-7 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                  isNavy
                    ? "border-white/20 text-white hover:bg-white/5"
                    : "border-white/50 text-white hover:bg-white/10"
                }`}
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
