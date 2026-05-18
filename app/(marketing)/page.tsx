import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustLogosStrip } from "@/components/sections/trust-logos-strip";
import { StatsBand } from "@/components/sections/stats-band";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { ServicesSection } from "@/components/sections/services-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { NationwideSupportSection } from "@/components/sections/nationwide-support-section";
import { CompanySection } from "@/components/sections/company-section";
import { ComplianceSection } from "@/components/sections/compliance-section";
import { SeminarSection } from "@/components/sections/seminar-section";
import { DownloadsSection } from "@/components/sections/downloads-section";
import { BlogSection } from "@/components/sections/blog-section";
import { NewsSection } from "@/components/sections/news-section";
import { RecruitCtaSection } from "@/components/sections/recruit-cta-section";
import { ContactSection } from "@/components/sections/contact-section";


export const metadata: Metadata = generatePageMetadata({
  title: "SadiaTec",
  description:
    "SadiaTec is Japan's manufacturing staffing specialist.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — full-viewport navy hero with entrance animation */}
      <HeroSection />

      {/* 2. Trust logos — companies we work with */}
      <TrustLogosStrip />

      {/* 3. Stats band — count-up numbers on scroll */}
      <StatsBand />

      {/* 4. Why us — 5 differentiators grid */}
      <WhyUsSection />

      {/* 5. Services — 5 service cards grid */}
      <ServicesSection />

      {/* 6. Case studies — 3 success stories on navy bg */}
      <CaseStudiesSection />

      

      {/* 8. Company — profile table + office image */}
      <CompanySection />

      {/* 9. Compliance — licenses and certifications */}
      <ComplianceSection />

      {/* 10. Seminars — upcoming events cards */}
      {/* <SeminarSection /> */}

      {/* 11. Downloads — free PDF resource cards */}
      <DownloadsSection />
      {/* 7. Nationwide support — region coverage map + strengths */}
      <NationwideSupportSection />

      {/* 12. Blog — latest 3 articles */}
      <BlogSection />

      {/* 13. News — announcements list */}
      <NewsSection />

      {/* 14. Recruit CTA — job seeker amber band + company CTA strip */}
      <RecruitCtaSection />

      {/* 15. Contact — form + contact info */}
      <ContactSection />
    </>
  );
}
