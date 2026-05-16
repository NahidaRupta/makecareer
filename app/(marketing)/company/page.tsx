import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Users, Globe, TrendingUp } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";

export const metadata: Metadata = generatePageMetadata({
  title: "Company Profile | MakeCareer",
  description:
    "Learn about MakeCareer — Japan's manufacturing staffing specialist. Company history, mission, values, and office locations across Japan.",
  path: "/company",
});

const PROFILE_ROWS = [
  { label: "Company Name", value: "MakeCareer Co., Ltd." },
  { label: "Founded", value: "1 April 2008" },
  { label: "CEO", value: "Koji Yamada" },
  { label: "Capital", value: "¥50,000,000" },
  { label: "Employees", value: "450 (as of October 2024)" },
  { label: "Head Office", value: "MakeCareer Building 6F, 4-1-1 Meieki, Nakamura-ku, Nagoya, Aichi 450-0002" },
  { label: "Offices", value: "Tokyo · Osaka · Fukuoka · Nagoya (HQ) and other major cities nationwide" },
  { label: "Business Activities", value: "Worker dispatch, fee-based employment placement, contract outsourcing, Specified Skills foreign worker support" },
  { label: "Licence Numbers", value: "Worker Dispatch Licence: Haken 23-XXXXXX · Employment Placement Licence: 23-Yu-XXXXXX" },
  { label: "Memberships", value: "Japan Staffing Services Association (JASSA)" },
];

const VALUES = [
  {
    icon: Users,
    title: "People First",
    body: "We build a talent ecosystem that supports the growth of both workers and clients — because when people thrive, businesses do too.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Above All",
    body: "Legal adherence and ethical business practices are our foundation. We exist to be a partner you can trust completely.",
  },
  {
    icon: Globe,
    title: "Respect for Diversity",
    body: "We help create workplaces where every person — regardless of nationality, age, or background — can do their best work.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    body: "We combine field knowledge with data to raise our service quality continuously — never settling for good enough.",
  },
];

const HISTORY = [
  { year: "2008", event: "MakeCareer Co., Ltd. founded in Nagoya, Aichi. Manufacturing dispatch operations launched." },
  { year: "2011", event: "Fee-based employment placement licence obtained. Direct hire support services launched." },
  { year: "2014", event: "Tokyo and Osaka offices opened. Services expanded to Kanto and Kansai regions." },
  { year: "2017", event: "Contract outsourcing division established. Full production line takeover services launched." },
  { year: "2019", event: "Specified Skills foreign worker support programme launched. Partnerships with Vietnam and the Philippines established." },
  { year: "2022", event: "Fukuoka office opened. Service expansion into the Kyushu region accelerated." },
  { year: "2024", event: "Total active registered workers across the group surpasses 3,000." },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        titleJa="About MakeCareer"
        titleEn="Japan's manufacturing staffing specialist"
        descriptionJa="We connect manufacturers with the right people — and support both sides of that relationship every step of the way."
        crumbs={[{ label: "Company" }]}
        variant="light"
      />

      {/* Mission & Vision */}
      <section aria-labelledby="mission-heading" className="bg-navy-950 section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
            Mission &amp; Vision
          </p>
          <h2 id="mission-heading" className="text-2xl sm:text-3xl font-extrabold text-white leading-snug mb-6">
            Solving Japan&apos;s manufacturing labour shortage
            <br className="hidden sm:block" />
            and building the future of production.
          </h2>
          <p className="text-white/70 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
            As Japan&apos;s demographic challenges intensify, the staffing pressures facing manufacturers have never been greater. MakeCareer goes beyond placement — we partner with clients across the full cycle of hiring, retention, and development to support the long-term sustainability of the factory floor.
          </p>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-heading" className="bg-neutral-50 section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8">
          <h2 id="values-heading" className="text-2xl font-extrabold text-navy-950 text-center mb-10">
            Our Values
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
                Company Profile
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
                  Get in Touch
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
                  <p className="text-xs text-navy-300">Head office photo coming soon</p>
                </div>
              </div>
              <div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-6">
                <p className="text-xs font-semibold text-neutral-500 mb-1">Head Office</p>
                <p className="text-sm font-bold text-navy-950 mb-1">
                  4-1-1 Meieki, Nakamura-ku, Nagoya, Aichi
                </p>
                <p className="text-xs text-neutral-500">5 min walk from Nagoya Station</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section aria-labelledby="history-heading" className="bg-neutral-50 section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <h2 id="history-heading" className="text-2xl font-extrabold text-navy-950 mb-10 text-center">
            Company History
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
        titleJa="Looking for a manufacturing staffing partner?"
        descriptionJa="Start with a free consultation. Our dedicated consultants will listen to your challenges and recommend the right approach."
        primaryLabel="Free Consultation"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
        variant="navy"
      />
    </>
  );
}
