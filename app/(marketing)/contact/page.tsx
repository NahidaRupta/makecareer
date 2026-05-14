import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/ui/page-hero";
import { ContactSection } from "@/components/sections/contact-section";
import { MapPin } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "お問い合わせ | MakeCareer",
  description:
    "MakeCareerへのお問い合わせページ。人材派遣・請負・外国人材などのご相談・お見積もりは無料です。専任コンサルタントが1営業日以内にご返答します。",
  path: "/contact",
});

const OFFICES = [
  {
    name: "本社（名古屋）",
    address: "愛知県名古屋市中村区名駅四丁目1-1 メイクキャリアビル6F",
    access: "JR名古屋駅 桜通口より徒歩5分",
    tel: "052-000-0000",
    hours: "平日 9:00〜18:00",
  },
  {
    name: "東京支社",
    address: "東京都千代田区丸の内一丁目9-1 グランドセントラルタワー8F",
    access: "JR東京駅 丸の内北口より徒歩3分",
    tel: "03-0000-0000",
    hours: "平日 9:00〜18:00",
  },
  {
    name: "大阪支社",
    address: "大阪府大阪市北区梅田三丁目1-1 梅田阪急ビルオフィスタワー10F",
    access: "阪急梅田駅より徒歩3分",
    tel: "06-0000-0000",
    hours: "平日 9:00〜18:00",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        titleJa="お問い合わせ"
        titleEn="Get in Touch"
        descriptionJa="採用のご相談・お見積もりは無料です。専任コンサルタントが1営業日以内にご返答します。"
        crumbs={[{ label: "お問い合わせ" }]}
        variant="light"
      />

      {/* Contact form section */}
      <ContactSection />

      {/* Office locations */}
      <section aria-labelledby="offices-heading" className="bg-neutral-50 section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8">
          <h2 id="offices-heading" className="text-2xl font-extrabold text-navy-950 mb-10 text-center">
            拠点一覧
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {OFFICES.map((office) => (
              <div key={office.name} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-50 shrink-0">
                    <MapPin size={16} strokeWidth={1.5} className="text-navy-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold text-navy-950 pt-1">{office.name}</h3>
                </div>
                <dl className="space-y-2 text-xs text-neutral-600">
                  <div>
                    <dt className="sr-only">住所</dt>
                    <dd className="leading-relaxed">{office.address}</dd>
                  </div>
                  <div>
                    <dt className="sr-only">アクセス</dt>
                    <dd className="text-neutral-400">{office.access}</dd>
                  </div>
                  <div className="pt-2 border-t border-neutral-100">
                    <dt className="sr-only">電話番号</dt>
                    <dd>
                      <a
                        href={`tel:${office.tel.replace(/-/g, "")}`}
                        className="font-semibold text-navy-700 hover:text-navy-900 transition-colors"
                      >
                        {office.tel}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">受付時間</dt>
                    <dd className="text-neutral-400">{office.hours}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="rounded-2xl bg-navy-50 border border-neutral-200 h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={32} strokeWidth={1} className="text-navy-300 mx-auto mb-2" aria-hidden="true" />
              <p className="text-xs text-navy-400">地図を表示（Google Maps 埋め込み）</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
