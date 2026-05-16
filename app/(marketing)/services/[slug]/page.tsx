import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Factory,
  ClipboardList,
  Globe,
  Wrench,
  Truck,
  CheckCircle2,
  ArrowRight,
  Building2,
} from "lucide-react";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { getServiceBySlug, getServiceSlugs, SERVICES } from "@/lib/data/services";
import { PageHero } from "@/components/ui/page-hero";
import { Accordion } from "@/components/ui/accordion";
import { CtaBanner } from "@/components/ui/cta-banner";

const ICON_MAP = { Factory, ClipboardList, Globe, Wrench, Truck } as const;

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return generatePageMetadata({
    title: `${service.titleJa} | MakeCareer`,
    description: service.descriptionJa,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = ICON_MAP[service.iconKey];
  const related = SERVICES.filter((s) => service.relatedSlugs.includes(s.slug));

  return (
    <>
      <PageHero
        eyebrow={service.titleEn}
        titleJa={service.titleJa}
        titleEn={service.taglineJa}
        descriptionJa={service.longDescriptionJa}
        crumbs={[
          { label: "Services", href: "/services" },
          { label: service.titleJa },
        ]}
      />

      {/* Features + Target */}
      <section aria-labelledby="features-heading" className="bg-white section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950">
                  <Icon size={22} strokeWidth={1.5} className="text-amber-400" aria-hidden="true" />
                </div>
                <h2 id="features-heading" className="text-xl font-extrabold text-navy-950">
                  Service Features
                </h2>
              </div>
              <ul className="space-y-4">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-neutral-700 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target companies */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                  <Building2 size={22} strokeWidth={1.5} className="text-amber-600" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-extrabold text-navy-950">
                  Best Suited For
                </h2>
              </div>
              <ul className="space-y-3">
                {service.targetCompanies.map((t, i) => (
                  <li
                    key={t}
                    className="flex items-start gap-3 rounded-xl border border-neutral-100 bg-neutral-50 p-4"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy-950 text-[10px] font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-sm text-neutral-700 leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process-heading" className="bg-neutral-50 section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8">
          <h2 id="process-heading" className="text-2xl font-extrabold text-navy-950 mb-10">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div
              aria-hidden="true"
              className="absolute top-8 left-[16.67%] right-[16.67%] hidden md:block h-px bg-navy-200"
            />
            {service.process.map((step, i) => (
              <div key={step.titleJa} className="relative flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-950 text-amber-400 text-xl font-extrabold">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-base font-bold text-navy-950 mb-2">{step.titleJa}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed max-w-xs">
                  {step.descriptionJa}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="bg-white section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 id="faq-heading" className="text-2xl font-extrabold text-navy-950 mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion items={service.faq} />
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="bg-neutral-50 section-padding">
          <div className="content-max px-4 sm:px-6 lg:px-8">
            <h2 id="related-heading" className="text-xl font-extrabold text-navy-950 mb-8">
              Related Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((rel) => {
                const RelIcon = ICON_MAP[rel.iconKey];
                return (
                  <Link
                    key={rel.slug}
                    href={{ pathname: `/services/${rel.slug}` }}
                    className="group flex items-center gap-5 rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-500 group-hover:bg-navy-500 group-hover:text-white transition-colors">
                      <RelIcon size={20} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-navy-950">{rel.titleJa}</p>
                      <p className="text-xs text-neutral-500 mt-0.5 truncate">{rel.taglineJa}</p>
                    </div>
                    <ArrowRight size={16} className="text-neutral-400 group-hover:text-navy-600 transition-colors" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CtaBanner
        titleJa={`Ready to get started with ${service.titleJa}?`}
        descriptionJa="Our dedicated team will listen carefully and recommend the staffing plan that fits your business."
        primaryLabel="Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Back to Services"
        secondaryHref="/services"
        variant="navy"
      />
    </>
  );
}
