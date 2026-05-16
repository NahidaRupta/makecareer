import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { Clock, Calendar, Tag, ArrowLeft, ArrowRight, User } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { blogPostJsonLd } from "@/lib/seo/json-ld";
import { getBaseUrl } from "@/lib/utils";
import { getBlogPostBySlug, getBlogPostSlugs, BLOG_POSTS } from "@/lib/data/blog-posts";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaBanner } from "@/components/ui/cta-banner";

export async function generateStaticParams() {
  return getBlogPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return generatePageMetadata({
    title: `${post.titleJa} | MakeCareer Insights`,
    description: post.excerptJa,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => post.relatedSlugs.includes(p.slug));
  const jsonLd = blogPostJsonLd({
    title: post.titleJa,
    description: post.excerptJa,
    url: `${getBaseUrl()}/blog/${slug}`,
    datePublished: post.dateIso,
    authorName: post.author.name,
    imageUrl: post.imageSrc,
  });

  return (
    <>
      <Script
        id="json-ld-blog-post"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Top nav bar */}
      <div className="bg-white border-b border-neutral-200">
        <div className="content-max px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            crumbs={[
              { label: "Insights", href: "/blog" },
              { label: post.titleJa },
            ]}
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="content-max px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="rounded-full bg-navy-50 border border-navy-100 px-3 py-1 text-xs font-semibold text-navy-700">
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                  <Clock size={12} aria-hidden="true" />
                  {post.readMinutes} min read
                </div>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-950 leading-snug mb-5">
                {post.titleJa}
              </h1>

              {/* Author + date */}
              <div className="flex items-center gap-4 pb-6 border-b border-neutral-100 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-100">
                  <User size={18} strokeWidth={1.5} className="text-navy-500" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-950">{post.author.name}</p>
                  <p className="text-xs text-neutral-400">{post.author.role}</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5 text-xs text-neutral-400">
                  <Calendar size={12} aria-hidden="true" />
                  <time dateTime={post.dateIso}>{post.date}</time>
                </div>
              </div>

              {/* Hero image */}
              <div className="h-56 sm:h-72 rounded-2xl bg-navy-50 mb-8 overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.imageSrc})` }}
                  role="img"
                  aria-label={post.titleJa}
                />
              </div>

              {/* Content sections */}
              <div className="prose-custom space-y-8">
                {post.content.map((section, i) => (
                  <div key={i}>
                    {section.heading && (
                      <h2 className="text-lg font-extrabold text-navy-950 mb-3 flex items-start gap-2">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-amber-500 text-[10px] font-bold text-white">
                          {i + 1}
                        </span>
                        {section.heading}
                      </h2>
                    )}
                    <p className="text-neutral-700 leading-[1.9] text-[15px]">{section.body}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-neutral-100">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag size={13} className="text-neutral-400" aria-hidden="true" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Prev / Next */}
              <div className="mt-10 flex items-center justify-between gap-4">
                <Link
                  href={{ pathname: "/blog" }}
                  className="flex items-center gap-2 text-sm font-semibold text-navy-600 hover:text-navy-800 transition-colors"
                >
                  <ArrowLeft size={14} aria-hidden="true" />
                  Back to Insights
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Author card */}
                <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-100">
                      <User size={22} strokeWidth={1.5} className="text-navy-500" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-navy-950">{post.author.name}</p>
                      <p className="text-xs text-neutral-400">{post.author.role}</p>
                    </div>
                  </div>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Manufacturing recruitment specialist with over 10 years of experience. Supports companies with hiring challenges and foreign worker integration.
                  </p>
                </div>

                {/* Related posts */}
                {related.length > 0 && (
                  <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                    <h3 className="text-sm font-bold text-navy-950 mb-4">Related Articles</h3>
                    <ul className="space-y-4">
                      {related.map((rel) => (
                        <li key={rel.slug}>
                          <Link
                            href={{ pathname: `/blog/${rel.slug}` }}
                            className="group flex gap-3"
                          >
                            <div className="h-14 w-14 shrink-0 rounded-lg bg-navy-50 overflow-hidden">
                              <div
                                className="h-full w-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${rel.imageSrc})` }}
                              />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-navy-950 leading-snug group-hover:text-navy-600 transition-colors line-clamp-2">
                                {rel.titleJa}
                              </p>
                              <p className="mt-1 text-[10px] text-neutral-400">{rel.date}</p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA card */}
                <div className="rounded-2xl bg-navy-950 p-6">
                  <h3 className="text-sm font-bold text-white mb-2">Need help with your hiring?</h3>
                  <p className="text-xs text-white/60 leading-relaxed mb-4">
                    Our specialist consultants offer a free consultation and recommend the best staffing plan for you.
                  </p>
                  <Link
                    href={{ pathname: "/contact" }}
                    className="flex items-center justify-center gap-2 w-full rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-bold text-white hover:bg-amber-600 transition-colors"
                  >
                    Get a Free Consultation
                    <ArrowRight size={13} strokeWidth={2} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <CtaBanner
        titleJa="Let's solve your manufacturing staffing challenge together"
        descriptionJa="Staffing, outsourcing, foreign workers — we'll recommend the right plan for your business at no cost."
        primaryLabel="Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Browse Insights"
        secondaryHref="/blog"
        variant="navy"
      />
    </>
  );
}
