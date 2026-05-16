import type { Metadata } from "next";
import Script from "next/script";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { faqJsonLd } from "@/lib/seo/json-ld";
import { FAQ_CATEGORIES } from "@/lib/data/faq";
import { PageHero } from "@/components/ui/page-hero";
import { Accordion } from "@/components/ui/accordion";
import { CtaBanner } from "@/components/ui/cta-banner";

export const metadata: Metadata = generatePageMetadata({
  title: "FAQ | MakeCareer",
  description:
    "Frequently asked questions about MakeCareer's staffing services, pricing, foreign worker support, and job seeker resources — answered by category.",
  path: "/faq",
});

const allFaqItems = FAQ_CATEGORIES.flatMap((c) => c.items);

export default function FaqPage() {
  return (
    <>
      <Script
        id="json-ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(allFaqItems)) }}
      />
      <PageHero
        eyebrow="FAQ"
        titleJa="Frequently Asked Questions"
        titleEn="Everything you need to know"
        descriptionJa="Common questions about our services, organised by topic. If you can't find what you're looking for, our team is happy to help."
        crumbs={[{ label: "FAQ" }]}
        variant="light"
      />

      <section aria-labelledby="faq-heading" className="bg-white section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <h2 id="faq-heading" className="sr-only">
            Frequently asked questions
          </h2>

          <div className="space-y-14">
            {FAQ_CATEGORIES.map((cat) => (
              <div key={cat.id}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-950 text-amber-400 text-xs font-extrabold shrink-0">
                    Q
                  </span>
                  <h3 className="text-lg font-extrabold text-navy-950">{cat.label}</h3>
                </div>
                <Accordion items={cat.items} allowMultiple />
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-16 rounded-2xl bg-neutral-50 border border-neutral-200 p-8 text-center">
            <p className="text-sm font-semibold text-navy-950 mb-2">Still have a question?</p>
            <p className="text-xs text-neutral-500 leading-relaxed mb-5">
              Our dedicated consultants are ready to help. Get in touch anytime.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:0120000000"
                className="inline-flex items-center gap-2 rounded-lg bg-navy-950 px-6 py-3 text-sm font-bold text-white hover:bg-navy-800 transition-colors"
              >
                0120-000-000 (Free)
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-navy-300 px-6 py-3 text-sm font-bold text-navy-700 hover:bg-navy-50 transition-colors"
              >
                Send us an email
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        titleJa="Ready to solve your manufacturing staffing challenge?"
        descriptionJa="Consultations and cost estimates are free. Our team is here to help."
        primaryLabel="Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Download Free Guides"
        secondaryHref="/downloads"
        variant="navy"
      />
    </>
  );
}
