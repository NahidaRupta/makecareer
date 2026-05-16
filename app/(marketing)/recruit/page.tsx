import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Briefcase, Heart, BookOpen, Users } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";

export const metadata: Metadata = generatePageMetadata({
  title: "Careers at MakeCareer",
  description:
    "Join MakeCareer's team of consultants, coordinators, and support staff. Help solve Japan's manufacturing workforce challenge from the inside.",
  path: "/recruit",
});

const JOBS = [
  {
    id: "consultant",
    title: "HR Consultant",
    titleEn: "HR Consultant",
    type: "Full-time",
    location: "Nagoya · Tokyo · Osaka · Fukuoka",
    hours: "9:00–18:00 (flex available)",
    summary:
      "You will listen to the staffing challenges of manufacturing clients and design and deliver the right solutions. Your work spans new business development through to ongoing account management.",
    requirements: [
      "2+ years of B2B or recruitment sales experience",
      "Genuine interest in manufacturing and factory operations",
      "Business-level Japanese communication skills",
    ],
    preferred: ["Experience in staffing or outsourcing industry", "Work experience in a manufacturing environment", "English or Vietnamese language skills"],
  },
  {
    id: "coordinator",
    title: "Staffing Coordinator",
    titleEn: "Staffing Coordinator",
    type: "Full-time / Contract",
    location: "Nagoya · Tokyo · Osaka",
    hours: "9:00–18:00",
    summary:
      "You will manage worker registration, matching, and ongoing welfare support. Your role is to stay close to both workers and clients, helping people settle and stay in their roles long term.",
    requirements: [
      "Customer service, hospitality, or coordination background",
      "Strong communication skills and a caring approach",
      "Ability to work with people from diverse backgrounds",
    ],
    preferred: ["Prior experience in staffing or dispatch coordination", "Multilingual skills — particularly Vietnamese or English"],
  },
  {
    id: "support-staff",
    title: "Multicultural Support Staff",
    titleEn: "Multicultural Support Staff",
    type: "Full-time / Contract",
    location: "Nagoya · Tokyo",
    hours: "9:00–18:00 (shift patterns available)",
    summary:
      "You will support international workers from Vietnam, the Philippines, and other countries — from arrival logistics through to day-to-day living assistance. Your goal is to help foreign workers feel genuinely supported in Japan.",
    requirements: [
      "Working proficiency in Vietnamese or English (TOEIC 650+ or equivalent)",
      "Interest in and experience with cross-cultural communication",
    ],
    preferred: ["Knowledge of Specified Skills or Technical Intern programmes", "Experience in foreign worker support or interpreting"],
  },
];

const BENEFITS = [
  { icon: Heart, label: "Full Social Insurance", body: "Employment, industrial accident, health, and pension insurance all included. Regular health check-ups provided." },
  { icon: BookOpen, label: "Training & Development", body: "Comprehensive onboarding programme. Support for external seminars and professional qualification costs." },
  { icon: Clock, label: "Flex-Time", body: "Core hours 11:00–15:00 with flexible start and finish times (varies by role)." },
  { icon: Users, label: "Diverse Team", body: "Team members in their 20s to 50s, Japanese and international. A workplace that respects every background." },
  { icon: Briefcase, label: "Clear Career Path", body: "Defined progression from Consultant through to Senior Consultant and Manager." },
  { icon: MapPin, label: "Location Flexibility", body: "Region-specific employment options available. Choose where you work to suit your lifestyle." },
];

export default function RecruitPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        titleJa="Join MakeCareer"
        titleEn="Help shape the future of manufacturing in Japan"
        descriptionJa="We're hiring consultants, coordinators, and multicultural support staff who want to make a real difference on the factory floor."
        crumbs={[{ label: "Careers" }]}
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
                This is a job where people truly change the manufacturing industry.
              </h2>
              <p className="text-white/70 leading-relaxed text-sm mb-4">
                We work at the intersection of factories struggling to find workers and job seekers looking for something better. When we get that match right, it moves the whole industry forward.
              </p>
              <p className="text-white/70 leading-relaxed text-sm">
                At MakeCareer, experience in the sector is valuable — but what matters most is a genuine desire to connect with people. Bring that energy and you will make an impact from day one.
              </p>
              <p className="mt-6 text-sm font-bold text-white">
                CEO, Koji Yamada
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="h-64 w-64 rounded-2xl bg-navy-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="h-20 w-20 rounded-full bg-navy-700 mx-auto mb-3 flex items-center justify-center">
                    <Users size={32} strokeWidth={1} className="text-navy-400" aria-hidden="true" />
                  </div>
                  <p className="text-xs text-navy-400">CEO photo coming soon</p>
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
            Benefits &amp; Work Environment
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
            Open Positions
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
                      Role Overview
                    </p>
                    <p className="text-sm text-neutral-700 leading-relaxed">{job.summary}</p>
                  </div>
                  <div className="lg:col-span-1">
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
                      Requirements
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
                      Nice to Have
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
                    Apply for This Role
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
            Application Process
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-4 gap-0 relative">
            {[
              { step: "01", label: "Apply" },
              { step: "02", label: "CV Review" },
              { step: "03", label: "Interview (1–2 rounds)" },
              { step: "04", label: "Offer & Start" },
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
            We will contact you with a CV review decision within one week. Interviews can be held in person or online.
          </p>
        </div>
      </section>

      <CtaBanner
        titleJa="Ready to help shape the future of manufacturing?"
        descriptionJa="We welcome applications at any time — including casual chats before you decide. Get in touch."
        primaryLabel="Apply Now"
        primaryHref="/contact"
        secondaryLabel="About MakeCareer"
        secondaryHref="/company"
        variant="amber"
      />
    </>
  );
}
