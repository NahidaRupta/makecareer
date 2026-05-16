import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/ui/page-hero";
import { ContactSection } from "@/components/sections/contact-section";
import { MapPin } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us | MakeCareer",
  description:
    "Get in touch with MakeCareer. Free consultations for staffing, outsourcing, and foreign worker enquiries. A dedicated consultant will respond within one business day.",
  path: "/contact",
});

const OFFICES = [
  {
    name: "Head Office (Nagoya)",
    address: "MakeCareer Bldg 6F, 4-1-1 Meieki, Nakamura-ku, Nagoya, Aichi 450-0002",
    access: "5 min walk from JR Nagoya Station (Sakura-dori exit)",
    tel: "052-000-0000",
    hours: "Mon–Fri, 9:00–18:00",
  },
  {
    name: "Tokyo Office",
    address: "Grand Central Tower 8F, 1-9-1 Marunouchi, Chiyoda-ku, Tokyo",
    access: "3 min walk from JR Tokyo Station (Marunouchi North exit)",
    tel: "03-0000-0000",
    hours: "Mon–Fri, 9:00–18:00",
  },
  {
    name: "Osaka Office",
    address: "Hankyu Umeda Bldg Office Tower 10F, 3-1-1 Umeda, Kita-ku, Osaka",
    access: "3 min walk from Hankyu Umeda Station",
    tel: "06-0000-0000",
    hours: "Mon–Fri, 9:00–18:00",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        titleJa="Get in Touch"
        titleEn="We respond within one business day"
        descriptionJa="Staffing consultations and estimates are free. A dedicated consultant will get back to you within one business day."
        crumbs={[{ label: "Contact" }]}
        variant="light"
      />

      {/* Contact form section */}
      <ContactSection />

      {/* Office locations */}
      <section aria-labelledby="offices-heading" className="bg-neutral-50 section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8">
          <h2 id="offices-heading" className="text-2xl font-extrabold text-navy-950 mb-10 text-center">
            Our Offices
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
                    <dt className="sr-only">Address</dt>
                    <dd className="leading-relaxed">{office.address}</dd>
                  </div>
                  <div>
                    <dt className="sr-only">Directions</dt>
                    <dd className="text-neutral-400">{office.access}</dd>
                  </div>
                  <div className="pt-2 border-t border-neutral-100">
                    <dt className="sr-only">Phone</dt>
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
                    <dt className="sr-only">Hours</dt>
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
              <p className="text-xs text-navy-400">Map (Google Maps embed)</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
