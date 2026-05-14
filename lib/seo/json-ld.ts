import { getBaseUrl } from "@/lib/utils";

const siteUrl = getBaseUrl();

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MakeCareer",
    url: siteUrl,
    logo: `${siteUrl}/icons/logo.svg`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["Japanese", "English"],
    },
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MakeCareer",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/jobs?q={query}` },
      "query-input": "required name=query",
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function blogPostJsonLd(post: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  imageUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: post.url,
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    author: { "@type": "Person", name: post.authorName },
    publisher: {
      "@type": "Organization",
      name: "MakeCareer",
      logo: { "@type": "ImageObject", url: `${siteUrl}/icons/logo.svg` },
    },
    image: post.imageUrl,
  };
}

export function jobPostingJsonLd(job: {
  title: string;
  description: string;
  url: string;
  datePosted: string;
  validThrough?: string;
  locationCity?: string;
  salaryMin?: number;
  salaryMax?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    url: job.url,
    datePosted: job.datePosted,
    validThrough: job.validThrough,
    hiringOrganization: {
      "@type": "Organization",
      name: "MakeCareer",
      sameAs: siteUrl,
    },
    jobLocation: job.locationCity
      ? {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: job.locationCity,
            addressCountry: "JP",
          },
        }
      : undefined,
    baseSalary:
      job.salaryMin
        ? {
            "@type": "MonetaryAmount",
            currency: "JPY",
            value: {
              "@type": "QuantitativeValue",
              minValue: job.salaryMin,
              maxValue: job.salaryMax,
              unitText: "YEAR",
            },
          }
        : undefined,
  };
}
