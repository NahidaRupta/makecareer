import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { SEMINARS } from "@/lib/data/seminars";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";

export const metadata: Metadata = generatePageMetadata({
  title: "Seminars & Events | MakeCareer",
  description:
    "Free seminars and information sessions for manufacturers. Topics range from staffing fundamentals to foreign worker onboarding — register online today.",
  path: "/seminars",
});

const FORMAT_COLORS = {
  Online: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "In-Person": "bg-navy-50 text-navy-700 border-navy-200",
  Hybrid: "bg-amber-50 text-amber-700 border-amber-200",
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
          aria-label={`${left} of ${total} spots remaining`}
        />
      </div>
      <span className={`text-xs font-semibold ${isCritical ? "text-red-500" : "text-neutral-600"}`}>
        {left} spots left
      </span>
    </div>
  );
}

export default function SeminarsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events & Seminars"
        titleJa="Free Seminars for Manufacturers"
        titleEn="Learn from specialists, ask your questions"
        descriptionJa="Regular free seminars on manufacturing staffing and workforce management. Join us online or in person."
        crumbs={[{ label: "Seminars" }]}
      />

      {/* Upcoming seminars */}
      <section aria-labelledby="seminars-heading" className="bg-white section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8">
          <h2 id="seminars-heading" className="text-2xl font-extrabold text-navy-950 mb-10">
            Upcoming Seminars
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
                      Agenda
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
                      Register Now
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
            How to Register
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-10">
            Attendance is free. Complete the registration form and join on the day.
            <br className="hidden sm:block" />
            For online sessions, we will send you the Zoom link in advance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: "01", label: "Fill in the registration form" },
              { step: "02", label: "Receive your confirmation email" },
              { step: "03", label: "Join on the day" },
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
        titleJa="Prefer a one-to-one conversation?"
        descriptionJa="Individual consultations, site visits, and estimates are available at any time — just get in touch."
        primaryLabel="Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Download Free Guides"
        secondaryHref="/downloads"
        variant="navy"
      />
    </>
  );
}
