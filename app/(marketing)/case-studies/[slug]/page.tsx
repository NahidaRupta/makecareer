import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TrendingUp, ArrowRight, Quote } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { getCaseStudyBySlug, getCaseStudySlugs, CASE_STUDIES } from "@/lib/data/case-studies";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};
  return generatePageMetadata({
    title: `${cs.industry} Case Study | MakeCareer`,
    description: cs.challenge,
    path: `/case-studies/${slug}`,
  });
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  const related = CASE_STUDIES.filter((c) => cs.relatedSlugs.includes(c.slug));

  return (
    <>
      <PageHero
        eyebrow="Case Study"
        titleJa={`${cs.industry} — Case Study`}
        descriptionJa={cs.companyProfile}
        crumbs={[
          { label: "Case Studies", href: "/case-studies" },
          { label: cs.industry },
        ]}
      />

      {/* Result stats bar */}
      <div className="bg-amber-500">
        <div className="content-max px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-8 items-center">
            {cs.results.map((result) => (
              <div key={result.label}>
                <p className="text-xs font-semibold text-white/70 mb-0.5">{result.label}</p>
                <p className="text-2xl font-extrabold text-white">{result.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <article className="bg-white section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main narrative */}
            <div className="lg:col-span-2 space-y-10">
              {/* Challenge */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
                  Challenge
                </h2>
                <h3 className="text-xl font-bold text-navy-950 mb-4">
                  What was the problem?
                </h3>
                <p className="text-neutral-700 leading-relaxed">{cs.fullChallenge}</p>
              </div>

              <div className="h-px bg-neutral-100" />

              {/* Solution */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
                  Solution
                </h2>
                <h3 className="text-xl font-bold text-navy-950 mb-4">
                  How did MakeCareer respond?
                </h3>
                <p className="text-neutral-700 leading-relaxed">{cs.fullSolution}</p>
              </div>

              {/* Quote */}
              {cs.quote && (
                <blockquote className="relative rounded-2xl bg-navy-50 border border-navy-100 p-7 mt-6">
                  <Quote
                    size={28}
                    className="text-amber-400 mb-3"
                    aria-hidden="true"
                  />
                  <p className="text-navy-950 font-medium leading-relaxed mb-4">
                    &ldquo;{cs.quote.text}&rdquo;
                  </p>
                  <footer className="text-sm">
                    <cite className="not-italic">
                      <span className="font-bold text-navy-950">{cs.quote.author}</span>
                      <span className="text-neutral-500 ml-2">— {cs.quote.role}</span>
                    </cite>
                  </footer>
                </blockquote>
              )}
            </div>

            {/* Sidebar: key results */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 rounded-2xl bg-navy-950 p-7">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp size={18} className="text-amber-400" aria-hidden="true" />
                  <h2 className="text-sm font-bold text-white">Key Results</h2>
                </div>
                <ul className="space-y-4">
                  {cs.results.map((result) => (
                    <li key={result.label} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <p className="text-[11px] text-white/40 mb-1">{result.label}</p>
                      <p className="text-xl font-extrabold text-amber-400">{result.value}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href={{ pathname: "/contact" }}
                    className="flex items-center justify-center gap-2 w-full rounded-lg bg-amber-500 px-5 py-3 text-sm font-bold text-white hover:bg-amber-600 transition-colors"
                  >
                    Discuss a Similar Challenge
                    <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related cases */}
      {related.length > 0 && (
        <section aria-labelledby="related-cases-heading" className="bg-neutral-50 section-padding">
          <div className="content-max px-4 sm:px-6 lg:px-8">
            <h2 id="related-cases-heading" className="text-xl font-extrabold text-navy-950 mb-8">
              More Case Studies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={{ pathname: `/case-studies/${rel.slug}` }}
                  className="group flex items-start gap-5 rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div>
                    <span className="inline-block rounded-full bg-navy-50 border border-navy-100 px-2.5 py-1 text-[10px] font-semibold text-navy-600 mb-2">
                      {rel.industry}
                    </span>
                    <p className="text-sm font-bold text-navy-950 leading-snug">{rel.challenge}</p>
                    <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-amber-600">
                      <TrendingUp size={12} aria-hidden="true" />
                      {rel.stat} {rel.statLabel}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner
        titleJa="Could we solve a similar challenge for your business?"
        descriptionJa="Start with a free consultation. Our dedicated team will assess your situation and recommend the best solution."
        primaryLabel="Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Back to Case Studies"
        secondaryHref="/case-studies"
        variant="navy"
      />
    </>
  );
}
