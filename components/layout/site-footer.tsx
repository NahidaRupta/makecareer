import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

const NAV_COLUMNS: FooterColumn[] = [
  {
    heading: "サービス",
    links: [
      { label: "製造業 人材派遣", href: "/services/haken" },
      { label: "工場請負", href: "/services/ukeoi" },
      { label: "特定技能・技能実習", href: "/services/ginoujisshu" },
      { label: "設備メンテナンス人材", href: "/services/maintenance" },
      { label: "物流・倉庫作業", href: "/services/butsuryu" },
    ],
  },
  {
    heading: "求職者の方",
    links: [
      { label: "求人を探す", href: "/jobs" },
      { label: "登録の流れ", href: "/jobs/how-to-register" },
      { label: "寮・社宅情報", href: "/jobs/dormitory" },
      { label: "未経験歓迎の求人", href: "/jobs/beginner" },
      { label: "よくあるご質問", href: "/faq/jobseekers" },
    ],
  },
  {
    heading: "企業の方",
    links: [
      { label: "採用のご相談", href: "/contact" },
      { label: "外国人材受け入れ", href: "/for-companies/foreign-workers" },
      { label: "導入事例", href: "/case-studies" },
      { label: "セミナー・説明会", href: "/seminars" },
      { label: "資料ダウンロード", href: "/downloads" },
    ],
  },
  {
    heading: "会社情報",
    links: [
      { label: "会社概要", href: "/company" },
      { label: "代表メッセージ", href: "/company/message" },
      { label: "許認可・コンプライアンス", href: "/company/compliance" },
      { label: "採用情報（スタッフ募集）", href: "/company/careers" },
      { label: "お問い合わせ", href: "/contact" },
    ],
  },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: "プライバシーポリシー", href: "/legal/privacy" },
  { label: "利用規約", href: "/legal/terms" },
  { label: "特定商取引法に基づく表記", href: "/legal/commerce" },
  { label: "サイトマップ", href: "/sitemap" },
];

export function SiteFooter() {
  return (
    <footer aria-label="サイトフッター" className="bg-navy-950 text-white">
      {/* Main footer body */}
      <div className="content-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href={{ pathname: "/" }}
              className="inline-flex items-center gap-2 mb-4"
              aria-label="MakeCareer トップへ"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-white font-extrabold text-base">
                M
              </span>
              <span className="font-extrabold text-lg tracking-tight text-white">
                MakeCareer
              </span>
            </Link>

            <p className="text-xs text-white/50 leading-relaxed mb-6">
              製造業・工場に特化した
              <br />
              人材派遣・工場請負サービス。
              <br />
              全国対応・15年以上の実績。
            </p>

            <ul className="space-y-3">
              <li>
                <a
                  href="tel:0120000000"
                  className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors"
                >
                  <Phone size={13} strokeWidth={1.5} aria-hidden="true" />
                  0120-000-000（無料）
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@makecareer.jp"
                  className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors"
                >
                  <Mail size={13} strokeWidth={1.5} aria-hidden="true" />
                  info@makecareer.jp
                </a>
              </li>
              <li>
                <address className="not-italic flex items-start gap-2 text-xs text-white/60">
                  <MapPin size={13} strokeWidth={1.5} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span>
                    〒450-0002
                    <br />
                    愛知県名古屋市中村区名駅3丁目11番22号
                  </span>
                </address>
              </li>
            </ul>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {NAV_COLUMNS.map((col) => (
              <div key={col.heading}>
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">
                  {col.heading}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={{ pathname: link.href }}
                        className="text-xs text-white/60 hover:text-white transition-colors leading-relaxed"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/10">
        <div className="content-max px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[11px] text-white/30">
            &copy; {new Date().getFullYear()} 株式会社 MakeCareer. All rights reserved.
          </p>
          <nav aria-label="法的情報">
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={{ pathname: link.href }}
                    className="text-[11px] text-white/30 hover:text-white/60 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
