import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/utils";
import { getBlogPostSlugs } from "@/lib/data/blog-posts";
import { getCaseStudySlugs } from "@/lib/data/case-studies";
import { getServiceSlugs } from "@/lib/data/services";
import { getSeminarSlugs } from "@/lib/data/seminars";
import { getDownloadSlugs } from "@/lib/data/downloads";

const base = getBaseUrl();

const STATIC: MetadataRoute.Sitemap = [
  { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
  { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  { url: `${base}/case-studies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
  { url: `${base}/seminars`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  { url: `${base}/downloads`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  { url: `${base}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  { url: `${base}/company`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  { url: `${base}/recruit`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const services = getServiceSlugs().map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const caseStudies = getCaseStudySlugs().map((slug) => ({
    url: `${base}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const blogs = getBlogPostSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const seminars = getSeminarSlugs().map((slug) => ({
    url: `${base}/seminars/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const downloads = getDownloadSlugs().map((slug) => ({
    url: `${base}/downloads/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...STATIC, ...services, ...caseStudies, ...blogs, ...seminars, ...downloads];
}
