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
    heading: "Services",
    links: [
      { label: "Manufacturing Staffing", href: "/services/haken" },
      { label: "Factory Outsourcing", href: "/services/ukeoi" },
      { label: "Specified Skills / Technical Intern", href: "/services/ginoujisshu" },
      { label: "Equipment Maintenance Staff", href: "/services/maintenance" },
      { label: "Logistics & Warehouse", href: "/services/butsuryu" },
    ],
  },
  {
    heading: "Job Seekers",
    links: [
      { label: "Browse Jobs", href: "/jobs" },
      { label: "How to Register", href: "/jobs/how-to-register" },
      { label: "Dormitory & Housing", href: "/jobs/dormitory" },
      { label: "Entry-Level Positions", href: "/jobs/beginner" },
      { label: "FAQ", href: "/faq/jobseekers" },
    ],
  },
  {
    heading: "For Companies",
    links: [
      { label: "Staffing Consultation", href: "/contact" },
      { label: "Foreign Worker Placement", href: "/for-companies/foreign-workers" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Seminars & Events", href: "/seminars" },
      { label: "Free Downloads", href: "/downloads" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/company" },
      { label: "Message from CEO", href: "/company/message" },
      { label: "Licenses & Compliance", href: "/company/compliance" },
      { label: "Careers at MakeCareer", href: "/company/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Use", href: "/legal/terms" },
  { label: "Specified Commercial Transactions", href: "/legal/commerce" },
  { label: "Sitemap", href: "/sitemap" },
];

export function SiteFooter() {
  return (
    <footer aria-label="Site footer" className="bg-navy-950 text-white">
      {/* Main footer body */}
      <div className="content-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href={{ pathname: "/" }}
              className="inline-flex items-center gap-2 mb-4"
              aria-label="MakeCareer Home"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-white font-extrabold text-base">
                M
              </span>
              <span className="font-extrabold text-lg tracking-tight text-white">
                MakeCareer
              </span>
            </Link>

            <p className="text-xs text-white/50 leading-relaxed mb-6">
              Japan's manufacturing staffing specialist.
              <br />
              Dispatch, outsourcing &amp; skilled worker support.
              <br />
              Nationwide coverage · 15+ years of expertise.
            </p>

            <ul className="space-y-3">
              <li>
                <a
                  href="tel:0120000000"
                  className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors"
                >
                  <Phone size={13} strokeWidth={1.5} aria-hidden="true" />
                  0120-000-000 (Free)
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
                    3-11-22 Meieki, Nakamura-ku,
                    <br />
                    Nagoya, Aichi 450-0002
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
            &copy; {new Date().getFullYear()} MakeCareer Co., Ltd. All rights reserved.
          </p>
          <nav aria-label="Legal links">
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
