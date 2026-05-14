import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Briefcase, Heart, BookOpen, Users } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";

export const metadata: Metadata = generatePageMetadata({
  title: "採用情報 | MakeCareer",
  description:
    "MakeCareerの採用情報。コンサルタント・コーディネーター・営業など、製造業人材サービスを支えるメンバーを募集しています。",
  path: "/recruit",
});

const JOBS = [
  {
    id: "consultant",
    title: "人材コンサルタント",
    titleEn: "HR Consultant",
    type: "正社員",
    location: "名古屋・東京・大阪・福岡",
    hours: "9:00〜18:00（フレックスあり）",
    summary:
      "製造業クライアントの採用課題をヒアリングし、最適な人材ソリューションを提案・実行します。新規開拓から既存顧客フォローまで、幅広い営業活動を担当します。",
    requirements: [
      "法人営業・人材営業経験2年以上",
      "製造業・工場領域への関心",
      "ビジネスレベルの日本語コミュニケーション能力",
    ],
    preferred: ["人材派遣・請負業界の経験", "製造業での就業経験", "英語またはベトナム語スキル"],
  },
  {
    id: "coordinator",
    title: "派遣コーディネーター",
    titleEn: "Staffing Coordinator",
    type: "正社員 / 契約社員",
    location: "名古屋・東京・大阪",
    hours: "9:00〜18:00",
    summary:
      "求職者の登録対応・マッチング・就業フォローを担当します。スタッフとクライアント双方に寄り添い、長期就業・定着を支援するポジションです。",
    requirements: [
      "接客・サービス・コーディネーター経験",
      "丁寧なコミュニケーションが得意な方",
      "多様なバックグラウンドの方への柔軟な対応力",
    ],
    preferred: ["人材業界・派遣コーディネーター経験", "多言語スキル（特にベトナム語・英語）"],
  },
  {
    id: "support-staff",
    title: "外国人材サポートスタッフ",
    titleEn: "Multicultural Support Staff",
    type: "正社員 / 契約社員",
    location: "名古屋・東京",
    hours: "9:00〜18:00（シフト制あり）",
    summary:
      "ベトナム・フィリピン等の外国人材の入国サポートから就業後フォローまでを担当。生活面の相談にも対応し、外国人スタッフが安心して働ける環境づくりを支援します。",
    requirements: [
      "ベトナム語または英語の実務スキル（TOEIC650点以上、もしくは同等）",
      "異文化コミュニケーションへの関心・経験",
    ],
    preferred: ["特定技能・技能実習制度に関する知識", "外国人材支援・通訳経験"],
  },
];

const BENEFITS = [
  { icon: Heart, label: "健康・社会保険完備", body: "雇用・労災・健康・厚生年金の各種保険完備。定期健康診断実施。" },
  { icon: BookOpen, label: "研修・成長支援", body: "入社後の充実した研修プログラム。外部セミナー・資格取得支援制度あり。" },
  { icon: Clock, label: "フレックス制度", body: "コアタイム11:00〜15:00のフレックスタイム制を導入（職種により異なる）。" },
  { icon: Users, label: "多様なチーム", body: "20代〜50代、日本人・外国籍のメンバーが活躍。多様な背景を尊重する職場環境。" },
  { icon: Briefcase, label: "キャリアパス", body: "コンサルタント→シニアコンサルタント→マネージャーまでの明確なキャリアパス。" },
  { icon: MapPin, label: "転勤なし選択可", body: "エリア限定勤務制度あり。ライフスタイルに合わせた働き方を選択できます。" },
];

export default function RecruitPage() {
  return (
    <>
      <PageHero
        eyebrow="Recruit"
        titleJa="採用情報"
        titleEn="Join MakeCareer"
        descriptionJa="製造業の未来を一緒につくるメンバーを募集しています。コンサルタント・コーディネーター・外国人材サポートなど多様なポジションがあります。"
        crumbs={[{ label: "採用情報" }]}
        variant="light"
      />

      {/* Message from leadership */}
      <section aria-labelledby="message-heading" className="bg-navy-950 section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
                Message from CEO
              </p>
              <h2 id="message-heading" className="text-2xl font-extrabold text-white leading-snug mb-5">
                「人の力」で製造業を変えていける仕事です
              </h2>
              <p className="text-white/70 leading-relaxed text-sm mb-4">
                私たちが向き合うのは、人手不足で悩む工場と、より良い仕事を求める求職者です。双方の課題を解決することで、製造業全体が前進します。
              </p>
              <p className="text-white/70 leading-relaxed text-sm">
                MakeCareerでは、経験者はもちろん、業界未経験でも「人と働くことが好き」という気持ちを大切にしています。あなたの熱意を、ぜひ現場で活かしてください。
              </p>
              <p className="mt-6 text-sm font-bold text-white">
                代表取締役 山田 浩二
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="h-64 w-64 rounded-2xl bg-navy-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="h-20 w-20 rounded-full bg-navy-700 mx-auto mb-3 flex items-center justify-center">
                    <Users size={32} strokeWidth={1} className="text-navy-400" aria-hidden="true" />
                  </div>
                  <p className="text-xs text-navy-400">代表写真</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section aria-labelledby="benefits-heading" className="bg-neutral-50 section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8">
          <h2 id="benefits-heading" className="text-2xl font-extrabold text-navy-950 text-center mb-10">
            働く環境・待遇
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b) => (
              <div key={b.label} className="rounded-2xl bg-white border border-neutral-200 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 mb-4">
                  <b.icon size={18} strokeWidth={1.5} className="text-amber-600" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-bold text-navy-950 mb-2">{b.label}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section aria-labelledby="jobs-heading" className="bg-white section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8">
          <h2 id="jobs-heading" className="text-2xl font-extrabold text-navy-950 mb-10">
            募集ポジション
          </h2>

          <div className="space-y-8">
            {JOBS.map((job) => (
              <article
                key={job.id}
                className="rounded-2xl border border-neutral-200 bg-white overflow-hidden"
              >
                {/* Header */}
                <div className="bg-navy-50 border-b border-neutral-200 px-6 py-5">
                  <div className="flex flex-wrap items-start gap-3 justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-navy-400 mb-1">
                        {job.titleEn}
                      </p>
                      <h3 className="text-lg font-extrabold text-navy-950">{job.title}</h3>
                    </div>
                    <span className="rounded-full border border-navy-200 bg-white px-3 py-1 text-xs font-semibold text-navy-700 shrink-0">
                      {job.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-3 text-xs text-neutral-500">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} aria-hidden="true" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} aria-hidden="true" />
                      {job.hours}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                      職務内容
                    </p>
                    <p className="text-sm text-neutral-700 leading-relaxed">{job.summary}</p>
                  </div>
                  <div className="lg:col-span-1">
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
                      必須条件
                    </p>
                    <ul className="space-y-2">
                      {job.requirements.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-xs text-neutral-700">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-navy-500 shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-1">
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
                      歓迎条件
                    </p>
                    <ul className="space-y-2">
                      {job.preferred.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-xs text-neutral-500">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <Link
                    href={{ pathname: "/contact" }}
                    className="inline-flex items-center gap-2 rounded-lg bg-navy-950 px-5 py-2.5 text-sm font-bold text-white hover:bg-navy-800 transition-colors"
                  >
                    このポジションに応募する
                    <ArrowRight size={13} strokeWidth={2} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Application flow */}
      <section aria-labelledby="flow-heading" className="bg-neutral-50 section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
          <h2 id="flow-heading" className="text-2xl font-extrabold text-navy-950 mb-10">
            選考の流れ
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-4 gap-0 relative">
            {[
              { step: "01", label: "エントリー" },
              { step: "02", label: "書類選考" },
              { step: "03", label: "面接（1〜2回）" },
              { step: "04", label: "内定・入社" },
            ].map((s, i) => (
              <li key={s.step} className="flex flex-col items-center gap-2 relative">
                {i < 3 && (
                  <span className="hidden sm:block absolute top-6 left-[calc(50%+24px)] right-[-calc(50%-24px)] h-0.5 bg-neutral-200" />
                )}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-950 text-amber-400 font-extrabold text-sm z-10">
                  {s.step}
                </div>
                <p className="text-xs font-semibold text-navy-950">{s.label}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-xs text-neutral-500 leading-relaxed">
            書類選考の結果は1週間以内にご連絡いたします。面接は対面またはオンラインで実施します。
          </p>
        </div>
      </section>

      <CtaBanner
        titleJa="一緒に製造業の未来を変えませんか？"
        descriptionJa="お気軽にエントリーをどうぞ。まずはカジュアルな面談から歓迎しています。"
        primaryLabel="エントリーする"
        primaryHref="/contact"
        secondaryLabel="会社概要を見る"
        secondaryHref="/company"
        variant="amber"
      />
    </>
  );
}
