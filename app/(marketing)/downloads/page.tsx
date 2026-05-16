import type { Metadata } from "next";
import Link from "next/link";
import { FileDown, ArrowRight } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { DOWNLOADS } from "@/lib/data/downloads";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";

export const metadata: Metadata = generatePageMetadata({
  title: "Free Resource Downloads | MakeCareer",
  description:
    "Download free guides and brochures on manufacturing staffing, workforce planning, and foreign worker onboarding. Ready to use immediately after download.",
  path: "/downloads",
});

const CATEGORY_COLORS: Record<string, string> = {
  "Service Guide": "bg-navy-50 text-navy-700 border-navy-200",
  "Hiring Guide": "bg-amber-50 text-amber-700 border-amber-200",
  "Foreign Workers": "bg-emerald-50 text-emerald-700 border-emerald-200",
  Tools: "bg-neutral-100 text-neutral-600 border-neutral-200",
};

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Downloads"
        titleJa="Free Resource Downloads"
        titleEn="Practical guides for HR and operations teams"
        descriptionJa="Free guides on staffing, workforce planning, and foreign worker onboarding — available instantly with just your email address."
        crumbs={[{ label: "Downloads" }]}
      />

      {/* Download grid */}
      <section aria-labelledby="downloads-list-heading" className="bg-white section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8">
          <h2 id="downloads-list-heading" className="sr-only">
            Resource list
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {DOWNLOADS.map((dl) => (
              <article
                key={dl.slug}
                className="group flex flex-col rounded-2xl border border-neutral-200 bg-white overflow-hidden hover:shadow-lg transition-all"
              >
                {/* Preview image area */}
                <div className="relative h-48 bg-gradient-to-br from-navy-50 to-navy-100 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: `url(${dl.imageSrc})` }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <FileDown
                      size={40}
                      strokeWidth={1.5}
                      className="text-navy-400"
                      aria-hidden="true"
                    />
                    <p className="text-xs text-navy-500 font-medium">{dl.pages}</p>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-[10px] font-bold border rounded-full px-2.5 py-1 ${
                        CATEGORY_COLORS[dl.category] ?? "bg-neutral-100 text-neutral-600 border-neutral-200"
                      }`}
                    >
                      {dl.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h2 className="text-base font-bold text-navy-950 leading-snug mb-3">
                    {dl.titleJa}
                  </h2>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-5 flex-1">
                    {dl.descriptionJa}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-6">
                    {dl.contentHighlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-neutral-600">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={{ pathname: `/downloads/${dl.slug}` }}
                    className="flex items-center justify-center gap-2 w-full rounded-lg bg-navy-950 px-5 py-3 text-sm font-bold text-white hover:bg-navy-800 transition-colors"
                  >
                    <FileDown size={15} strokeWidth={2} aria-hidden="true" />
                    Free Download
                    <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        titleJa="Want to speak with an expert directly?"
        descriptionJa="Individual consultations and cost estimates are free. Get in touch at any time."
        primaryLabel="Free Consultation"
        primaryHref="/contact"
        variant="navy"
      />
    </>
  );
}
