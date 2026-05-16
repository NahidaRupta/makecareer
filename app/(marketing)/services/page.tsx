import type { Metadata } from "next";
import Link from "next/link";
import {
  Factory,
  ClipboardList,
  Globe,
  Wrench,
  Truck,
  ArrowRight,
} from "lucide-react";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { SERVICES } from "@/lib/data/services";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Services | MakeCareer",
  description:
    "MakeCareer's full service range for manufacturing and factory operations: staffing dispatch, outsourcing, Specified Skills, maintenance, and logistics staffing.",
  path: "/services",
});

const ICON_MAP = {
  Factory,
  ClipboardList,
  Globe,
  Wrench,
  Truck,
} as const;

const SERVICE_POINTS: Record<string, string[]> = {
  haken: ["Next-day placement available", "5,000+ registered workers", "Flexible short or long-term"],
  ukeoi: ["No direct supervision needed", "Quality management included", "Convert fixed costs to variable"],
  ginoujisshu: ["Visa support included", "Daily-life assistance", "Proven track record"],
  maintenance: ["Certified technicians", "Emergency response team", "Monthly reporting included"],
  butsuryu: ["Forklift operators available", "Same-day peak-season cover", "WMS experience available"],
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        titleJa="Our Services"
        titleEn="Manufacturing staffing solutions, end to end"
        descriptionJa="We cover every manufacturing workforce need — from rapid placements to full line outsourcing and international talent support."
        crumbs={[{ label: "Services" }]}
      />

      {/* Services grid */}
      <section
        aria-labelledby="services-list-heading"
        className="bg-white section-padding"
      >
        <div className="content-max px-4 sm:px-6 lg:px-8">
          <h2 id="services-list-heading" className="sr-only">
            Service details
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {SERVICES.map((service, index) => {
              const Icon = ICON_MAP[service.iconKey];
              const points = SERVICE_POINTS[service.slug] ?? [];
              const isAlt = index % 2 !== 0;

              return (
                <div
                  key={service.slug}
                  className={`group grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl border overflow-hidden transition-shadow hover:shadow-lg ${
                    isAlt ? "border-navy-200" : "border-neutral-200"
                  }`}
                >
                  {/* Icon panel */}
                  <div
                    className={`flex flex-col items-center justify-center p-8 lg:col-span-1 ${
                      isAlt ? "bg-navy-950" : "bg-neutral-50"
                    }`}
                  >
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                        isAlt ? "bg-amber-500/20" : "bg-navy-50"
                      }`}
                    >
                      <Icon
                        size={30}
                        strokeWidth={1.5}
                        className={isAlt ? "text-amber-400" : "text-navy-500"}
                        aria-hidden="true"
                      />
                    </div>
                    <p
                      className={`mt-3 text-[11px] font-semibold uppercase tracking-widest text-center ${
                        isAlt ? "text-amber-400/70" : "text-neutral-400"
                      }`}
                    >
                      {service.titleEn}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between p-7 lg:col-span-3 bg-white">
                    <div>
                      <h2 className="text-xl font-extrabold text-navy-950 mb-1">
                        {service.titleJa}
                      </h2>
                      <p className="text-sm text-amber-600 font-medium mb-4">
                        {service.taglineJa}
                      </p>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {service.descriptionJa}
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {points.map((pt) => (
                        <span
                          key={pt}
                          className="rounded-full bg-navy-50 border border-navy-100 px-3 py-1 text-xs font-semibold text-navy-700"
                        >
                          {pt}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-center p-6 lg:col-span-1 bg-neutral-50 border-t lg:border-t-0 lg:border-l border-neutral-100">
                    <Link
                      href={{ pathname: `/services/${service.slug}` }}
                      className="group/btn inline-flex flex-col items-center gap-2 text-center"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-950 text-white transition-transform group-hover/btn:-translate-y-0.5">
                        <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
                      </span>
                      <span className="text-xs font-semibold text-navy-700">
                        Learn more
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        titleJa="Not sure which service fits your needs?"
        descriptionJa="A dedicated consultant will review your situation and recommend the right solution. Free, no obligation."
        primaryLabel="Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Download a Guide"
        secondaryHref="/downloads"
        variant="navy"
      />
    </>
  );
}
