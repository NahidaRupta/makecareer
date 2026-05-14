import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { SEMINARS } from "@/lib/data/seminars";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";

export const metadata: Metadata = generatePageMetadata({
  title: "セミナー・説明会 | MakeCareer",
  description:
    "MakeCareerが定期開催する製造業向け無料セミナー・説明会の一覧。人材派遣の基礎から外国人材受け入れまで、採用課題を解決するセミナーです。",
  path: "/seminars",
});

const FORMAT_COLORS = {
  オンライン: "bg-emerald-50 text-emerald-700 border-emerald-200",
  会場: "bg-navy-50 text-navy-700 border-navy-200",
  ハイブリッド: "bg-amber-50 text-amber-700 border-amber-200",
} as const;

function SpotsIndicator({ total, left }: { total: number; left: number }) {
  const pct = Math.round((left / total) * 100);
  const isCritical = pct <= 30;
  return (
    <div className="flex items-center gap-3">
      <div className="h-1.5 flex-1 rounded-full bg-neutral-200 overflow-hidden">
        <div
          className={`h-full rounded-full ${isCritical ? "bg-red-400" : "bg-amber-400"}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className={`text-xs font-semibold ${isCritical ? "text-red-500" : "text-neutral-600"}`}>
        残{left}名
      </span>
    </div>
  );
}

export default function SeminarsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events & Seminars"
        titleJa="セミナー・説明会"
        titleEn="Free Seminars for Manufacturers"
        descriptionJa="製造業の採用・人材活用に役立つ無料セミナーを定期開催しています。オンライン・会場どちらでもご参加いただけます。"
        crumbs={[{ label: "セミナー・説明会" }]}
      />

      {/* Upcoming seminars */}
      <section aria-labelledby="seminars-heading" className="bg-white section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8">
          <h2 id="seminars-heading" className="text-2xl font-extrabold text-navy-950 mb-10">
            開催予定のセミナー
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SEMINARS.map((seminar, index) => (
              <article
                key={seminar.slug}
                className={`flex flex-col rounded-2xl border overflow-hidden transition-shadow hover:shadow-lg ${
                  index === 0 ? "border-amber-200" : "border-neutral-200"
                }`}
              >
                {/* Header band */}
                <div
                  className={`px-5 py-3 flex items-center justify-between ${
                    index === 0 ? "bg-amber-500" : "bg-navy-950"
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <Calendar size={12} aria-hidden="true" />
                    <time dateTime={seminar.dateIso}>{seminar.date}</time>
                  </div>
                  <span
                    className={`text-[10px] font-bold border rounded-full px-2.5 py-1 ${FORMAT_COLORS[seminar.format]}`}
                  >
                    {seminar.format}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-6 bg-white">
                  <h3 className="text-sm font-bold text-navy-950 leading-snug mb-4">
                    {seminar.titleJa}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-5 flex-1">
                    {seminar.descriptionJa}
                  </p>

                  <div className="space-y-2 mb-5 text-xs text-neutral-500">
                    <div className="flex items-center gap-2">
                      <Clock size={12} aria-hidden="true" />
                      <span>{seminar.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={12} aria-hidden="true" />
                      <span>{seminar.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={12} aria-hidden="true" />
                      <span>{seminar.targetJa}</span>
                    </div>
                  </div>

                  <SpotsIndicator total={seminar.spotsTotal} left={seminar.spotsLeft} />

                  {/* Agenda preview */}
                  <div className="mt-5 rounded-xl bg-neutral-50 border border-neutral-100 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-3">
                      プログラム
                    </p>
                    <ol className="space-y-1.5">
                      {seminar.agenda.map((a) => (
                        <li key={a.time} className="flex gap-3 text-xs">
                          <span className="shrink-0 text-neutral-400 tabular-nums w-12">{a.time}</span>
                          <span className="text-neutral-700">{a.titleJa}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="mt-5">
                    <Link
                      href={{ pathname: `/seminars/${seminar.slug}` }}
                      className="flex items-center justify-center gap-2 w-full rounded-lg bg-navy-950 px-4 py-3 text-sm font-bold text-white hover:bg-navy-800 transition-colors"
                    >
                      参加申し込み
                      <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How to join */}
      <section aria-labelledby="join-heading" className="bg-neutral-50 section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
          <h2 id="join-heading" className="text-2xl font-extrabold text-navy-950 mb-4">
            参加方法
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-10">
            参加は無料です。フォームよりお申し込みいただき、開催当日にご参加ください。
            <br className="hidden sm:block" />
            オンライン開催の場合はZoomのURLを事前にお送りします。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: "01", label: "申し込みフォームに入力" },
              { step: "02", label: "確認メールを受け取る" },
              { step: "03", label: "当日ご参加" },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-950 text-amber-400 font-extrabold">
                  {s.step}
                </div>
                <p className="text-sm font-semibold text-navy-950">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        titleJa="セミナー以外のご相談もお気軽に"
        descriptionJa="個別のご相談・現場視察・お見積もりはいつでも承っています。"
        primaryLabel="無料で相談する"
        primaryHref="/contact"
        secondaryLabel="資料をダウンロード"
        secondaryHref="/downloads"
        variant="navy"
      />
    </>
  );
}
