import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { CASE_STUDIES } from "@/lib/data/case-studies";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";

export const metadata: Metadata = generatePageMetadata({
  title: "Client Success Stories | MakeCareer",
  description:
    "Real-world case studies from manufacturers and logistics companies that partnered with MakeCareer. Challenges, solutions, and measurable outcomes.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        titleJa="Client Success Stories"
        titleEn="Real results from real clients"
        descriptionJa="Explore how manufacturers and logistics companies solved their most pressing workforce challenges with MakeCareer."
        crumbs={[{ label: "Case Studies" }]}
      />

      {/* Case study list */}
      <section
        aria-labelledby="cases-list-heading"
        className="bg-white section-padding"
      >
        <div className="content-max px-4 sm:px-6 lg:px-8">
          <h2 id="cases-list-heading" className="sr-only">
            Case study list
          </h2>

          <div className="grid grid-cols-1 gap-8">
            {CASE_STUDIES.map((cs, index) => (
              <article
                key={cs.slug}
                className={`group grid grid-cols-1 lg:grid-cols-4 rounded-2xl border overflow-hidden transition-shadow hover:shadow-lg ${
                  index === 0
                    ? "border-amber-200 bg-amber-50/30"
                    : "border-neutral-200 bg-white"
                }`}
              >
                {/* Stat panel */}
                <div
                  className={`flex flex-col items-center justify-center p-8 lg:col-span-1 ${
                    index === 0 ? "bg-navy-950" : "bg-neutral-50"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp
                      size={20}
                      className={index === 0 ? "text-amber-400" : "text-navy-500"}
                      aria-hidden="true"
                    />
                  </div>
                  <p
                    className={`text-4xl font-extrabold leading-none ${
                      index === 0 ? "text-amber-400" : "text-navy-950"
                    }`}
                  >
                    {cs.stat}
                  </p>
                  <p
                    className={`text-xs font-medium text-center mt-1 leading-tight ${
                      index === 0 ? "text-white/60" : "text-neutral-500"
                    }`}
                  >
                    {cs.statLabel}
                  </p>
                  <span
                    className={`mt-4 inline-block rounded-full px-3 py-1 text-[10px] font-bold ${
                      index === 0
                        ? "bg-navy-700/50 text-amber-300"
                        : "bg-navy-50 text-navy-600"
                    }`}
                  >
                    {cs.industry}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col p-7 lg:col-span-3 bg-white">
                  <p className="text-[11px] text-neutral-400 mb-4">{cs.companyProfile}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                        Challenge
                      </p>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                        Solution
                      </p>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-5">
                    <p className="text-xs text-neutral-400">Full outcomes &amp; client comments inside</p>
                    <Link
                      href={{ pathname: `/case-studies/${cs.slug}` }}
                      className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600 hover:text-navy-800 transition-colors"
                    >
                      Read more
                      <ArrowRight
                        size={14}
                        strokeWidth={2}
                        className="transition-transform group-hover/link:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        titleJa="Facing similar workforce challenges?"
        descriptionJa="MakeCareer offers a free first consultation. Our dedicated team will listen to your situation and recommend the best solution."
        primaryLabel="Free Consultation"
        primaryHref="/contact"
        secondaryLabel="View All Services"
        secondaryHref="/services"
        variant="navy"
      />
    </>
  );
}
