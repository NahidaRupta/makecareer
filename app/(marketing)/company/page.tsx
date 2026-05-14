import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Users, Globe, TrendingUp } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";

export const metadata: Metadata = generatePageMetadata({
  title: "会社概要 | MakeCareer",
  description:
    "MakeCareerの会社概要・経営理念・代表挨拶・沿革をご紹介します。製造業専門の人材会社として全国47都道府県で採用支援を行っています。",
  path: "/company",
});

const PROFILE_ROWS = [
  { label: "会社名", value: "株式会社MakeCareer（メイクキャリア）" },
  { label: "設立", value: "2008年4月1日" },
  { label: "代表取締役", value: "山田 浩二" },
  { label: "資本金", value: "5,000万円" },
  { label: "従業員数", value: "450名（2024年10月現在）" },
  { label: "本社所在地", value: "愛知県名古屋市中村区名駅四丁目1-1 メイクキャリアビル6F" },
  { label: "拠点", value: "東京・大阪・福岡・名古屋（本社）ほか全国主要都市" },
  { label: "事業内容", value: "労働者派遣事業、有料職業紹介事業、業務請負事業、特定技能外国人支援事業" },
  { label: "許可番号", value: "労働者派遣事業許可番号：派 23-XXXXXX　有料職業紹介事業許可番号：23-ユ-XXXXXX" },
  { label: "加盟団体", value: "一般社団法人日本人材派遣協会（JASSA）" },
];

const VALUES = [
  {
    icon: Users,
    title: "人を中心に",
    body: "スタッフ・クライアント双方の成長を支える人材エコシステムを構築します。",
  },
  {
    icon: ShieldCheck,
    title: "コンプライアンス最優先",
    body: "法令遵守と倫理的な事業運営を基本として、信頼される企業を目指します。",
  },
  {
    icon: Globe,
    title: "多様性の尊重",
    body: "国籍・年齢・経験を問わず、すべての人が活躍できる職場づくりを支援します。",
  },
  {
    icon: TrendingUp,
    title: "継続的な改善",
    body: "データと現場知見を掛け合わせ、サービス品質を絶え間なく高め続けます。",
  },
];

const HISTORY = [
  { year: "2008", event: "愛知県名古屋市にて株式会社MakeCareer設立。製造業向け人材派遣事業を開始。" },
  { year: "2011", event: "有料職業紹介事業の許可取得。直接雇用支援サービス開始。" },
  { year: "2014", event: "東京・大阪に拠点開設。関東・関西エリアへサービス拡大。" },
  { year: "2017", event: "業務請負部門設立。製造ラインの一括受託サービスを本格化。" },
  { year: "2019", event: "特定技能外国人支援事業開始。ベトナム・フィリピンとの連携を強化。" },
  { year: "2022", event: "福岡拠点開設。九州エリアへのサービス展開を加速。" },
  { year: "2024", event: "グループ全体の年間稼働スタッフ数が3,000名を突破。" },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        titleJa="会社概要"
        titleEn="About MakeCareer"
        descriptionJa="製造業に特化した人材会社として、企業と人材の最適なマッチングを通じて日本のものづくりを支えています。"
        crumbs={[{ label: "会社概要" }]}
        variant="light"
      />

      {/* Mission & Vision */}
      <section aria-labelledby="mission-heading" className="bg-navy-950 section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
            Mission &amp; Vision
          </p>
          <h2 id="mission-heading" className="text-2xl sm:text-3xl font-extrabold text-white leading-snug mb-6">
            製造業の「人手不足」を解決し、<br className="hidden sm:block" />
            日本のものづくりの未来をつくる
          </h2>
          <p className="text-white/70 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
            少子化・高齢化が進む日本において、製造業が直面する人材課題は深刻です。MakeCareerは単なる派遣会社にとどまらず、採用・定着・育成の全プロセスで企業を支援するパートナーとして、製造現場の持続的な成長に貢献します。
          </p>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-heading" className="bg-neutral-50 section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8">
          <h2 id="values-heading" className="text-2xl font-extrabold text-navy-950 text-center mb-10">
            私たちの価値観
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white border border-neutral-200 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-50 mx-auto mb-4">
                  <v.icon size={22} strokeWidth={1.5} className="text-navy-600" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-bold text-navy-950 mb-2">{v.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company profile */}
      <section aria-labelledby="profile-heading" className="bg-white section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Profile table */}
            <div>
              <h2 id="profile-heading" className="text-2xl font-extrabold text-navy-950 mb-8">
                会社概要
              </h2>
              <dl className="divide-y divide-neutral-100">
                {PROFILE_ROWS.map((row) => (
                  <div key={row.label} className="grid grid-cols-3 gap-4 py-4">
                    <dt className="col-span-1 text-xs font-semibold text-neutral-500 pt-0.5">
                      {row.label}
                    </dt>
                    <dd className="col-span-2 text-sm text-navy-950 leading-relaxed">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8">
                <Link
                  href={{ pathname: "/contact" }}
                  className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-sm font-bold text-white hover:bg-amber-600 transition-colors"
                >
                  お問い合わせ
                  <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Image / map placeholder */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden bg-navy-50 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="h-20 w-20 rounded-full bg-navy-100 mx-auto mb-4 flex items-center justify-center">
                    <Users size={32} strokeWidth={1} className="text-navy-300" aria-hidden="true" />
                  </div>
                  <p className="text-xs text-navy-300">本社外観写真</p>
                </div>
              </div>
              <div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-6">
                <p className="text-xs font-semibold text-neutral-500 mb-1">本社</p>
                <p className="text-sm font-bold text-navy-950 mb-1">
                  愛知県名古屋市中村区名駅四丁目1-1
                </p>
                <p className="text-xs text-neutral-500">名古屋駅より徒歩5分</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section aria-labelledby="history-heading" className="bg-neutral-50 section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <h2 id="history-heading" className="text-2xl font-extrabold text-navy-950 mb-10 text-center">
            沿革
          </h2>
          <ol className="relative border-l border-neutral-200 space-y-8 ml-4">
            {HISTORY.map((h) => (
              <li key={h.year} className="ml-6">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-navy-950 ring-4 ring-neutral-50">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                </span>
                <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                  <span className="shrink-0 text-xs font-extrabold text-amber-600 bg-amber-50 border border-amber-100 rounded-full px-2.5 py-1 w-fit">
                    {h.year}
                  </span>
                  <p className="text-sm text-neutral-700 leading-relaxed">{h.event}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBanner
        titleJa="製造業の採用パートナーをお探しですか？"
        descriptionJa="まずは無料相談から。専任コンサルタントが貴社の課題をお伺いします。"
        primaryLabel="無料で相談する"
        primaryHref="/contact"
        secondaryLabel="サービス一覧を見る"
        secondaryHref="/services"
        variant="navy"
      />
    </>
  );
}
