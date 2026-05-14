import type { Metadata } from "next";
import Link from "next/link";
import { FileDown, ArrowRight } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { DOWNLOADS } from "@/lib/data/downloads";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";

export const metadata: Metadata = generatePageMetadata({
  title: "無料資料ダウンロード | MakeCareer",
  description:
    "製造業の採用・人材活用に役立つ無料資料を公開中。サービスパンフレット・採用ガイド・特定技能受け入れ手引きなど、ダウンロード後すぐにご活用いただけます。",
  path: "/downloads",
});

const CATEGORY_COLORS: Record<string, string> = {
  サービス概要: "bg-navy-50 text-navy-700 border-navy-200",
  採用ガイド: "bg-amber-50 text-amber-700 border-amber-200",
  外国人材: "bg-emerald-50 text-emerald-700 border-emerald-200",
  ツール: "bg-neutral-100 text-neutral-600 border-neutral-200",
};

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Downloads"
        titleJa="無料資料ダウンロード"
        titleEn="Download Free Resources"
        descriptionJa="採用・人材活用に役立つ資料を無料でご提供しています。メールアドレスのご登録のみでダウンロードいただけます。"
        crumbs={[{ label: "無料資料ダウンロード" }]}
      />

      {/* Download grid */}
      <section aria-labelledby="downloads-list-heading" className="bg-white section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8">
          <h2 id="downloads-list-heading" className="sr-only">
            資料一覧
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
                    無料でダウンロード
                    <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        titleJa="資料だけでなく、専門家に直接ご相談も"
        descriptionJa="コンサルタントによる個別ヒアリング・お見積もりは無料です。お気軽にご連絡ください。"
        primaryLabel="無料で相談する"
        primaryHref="/contact"
        variant="navy"
      />
    </>
  );
}
