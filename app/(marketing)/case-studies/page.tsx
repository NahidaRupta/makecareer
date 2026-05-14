import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { CASE_STUDIES } from "@/lib/data/case-studies";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";

export const metadata: Metadata = generatePageMetadata({
  title: "導入事例 | MakeCareer",
  description:
    "MakeCareerを活用いただいた製造業・物流業の導入事例をご紹介。課題・解決策・成果を具体的な数字で公開しています。",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        titleJa="導入事例"
        titleEn="Customer Success Stories"
        descriptionJa="実際にMakeCareerをご活用いただいた企業様の課題・解決策・成果をご紹介します。"
        crumbs={[{ label: "導入事例" }]}
      />

      {/* Case study list */}
      <section
        aria-labelledby="cases-list-heading"
        className="bg-white section-padding"
      >
        <div className="content-max px-4 sm:px-6 lg:px-8">
          <h2 id="cases-list-heading" className="sr-only">
            事例一覧
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
                        課題
                      </p>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                        解決策
                      </p>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-5">
                    <p className="text-xs text-neutral-400">詳細な成果・担当者コメントを掲載</p>
                    <Link
                      href={{ pathname: `/case-studies/${cs.slug}` }}
                      className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600 hover:text-navy-800 transition-colors"
                    >
                      詳細を見る
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
        titleJa="貴社でも同様の課題はありませんか？"
        descriptionJa="MakeCareerでは無料の初回ご相談を承っています。専任担当者が現状をヒアリングし、最適な解決策をご提案します。"
        primaryLabel="無料で相談する"
        primaryHref="/contact"
        secondaryLabel="サービス一覧を見る"
        secondaryHref="/services"
        variant="navy"
      />
    </>
  );
}
