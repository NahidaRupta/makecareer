/**
 * CMS abstraction layer.
 * Currently returns static data from lib/data/*.
 * Swap implementations here to integrate with a headless CMS
 * (Contentful, Sanity, Notion API, etc.) without touching page files.
 */

export { BLOG_POSTS, getBlogPostBySlug, getBlogPostSlugs } from "@/lib/data/blog-posts";
export { CASE_STUDIES, getCaseStudyBySlug, getCaseStudySlugs } from "@/lib/data/case-studies";
export { DOWNLOADS, getDownloadBySlug, getDownloadSlugs } from "@/lib/data/downloads";
export { FAQ_CATEGORIES } from "@/lib/data/faq";
export { SEMINARS, getSeminarBySlug, getSeminarSlugs } from "@/lib/data/seminars";
export { SERVICES, getServiceBySlug, getServiceSlugs } from "@/lib/data/services";
