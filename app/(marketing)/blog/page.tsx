import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { BLOG_POSTS } from "@/lib/data/blog-posts";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";

export const metadata: Metadata = generatePageMetadata({
  title: "Insights & Resources | MakeCareer",
  description:
    "Expert advice on manufacturing staffing, workforce management, and skilled worker support in Japan. Practical guides for HR managers and factory operators.",
  path: "/blog",
});

const CATEGORIES = ["All", "Staffing Basics", "Foreign Workers", "Retention"];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Column & Journal"
        titleJa="Insights & Resources"
        titleEn="Expert Knowledge for Manufacturers"
        descriptionJa="Expert advice on staffing, workforce management, and foreign worker support — written by MakeCareer consultants who work on the factory floor every day."
        crumbs={[{ label: "Insights" }]}
        variant="light"
      />

      <section aria-labelledby="blog-list-heading" className="bg-white section-padding">
        <div className="content-max px-4 sm:px-6 lg:px-8">
          {/* Category filter (static for SSR — client filter would be a future enhancement) */}
          <div className="flex flex-wrap gap-2 mb-10" role="list" aria-label="Filter by category">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                role="listitem"
                className={`rounded-full border px-4 py-1.5 text-sm font-medium cursor-default ${
                  cat === "All"
                    ? "bg-navy-950 border-navy-950 text-white"
                    : "border-neutral-200 bg-white text-neutral-600"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          <h2 id="blog-list-heading" className="sr-only">
            Article list
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <article key={post.slug}>
                <Link
                  href={{ pathname: `/blog/${post.slug}` }}
                  className="group flex flex-col h-full rounded-2xl border border-neutral-200 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  {/* Image */}
                  <div className="relative h-52 bg-navy-50 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${post.imageSrc})` }}
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy-950/50 to-transparent" />
                    {index === 0 && (
                      <span className="absolute top-3 left-3 rounded-full bg-amber-500 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wide">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-semibold text-navy-600 bg-navy-50 border border-navy-100 rounded-full px-2.5 py-1">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-[10px] text-neutral-400">
                        <Clock size={10} aria-hidden="true" />
                        <span>{post.readMinutes} min read</span>
                      </div>
                    </div>

                    <h2 className="text-sm font-bold text-navy-950 leading-snug mb-3 flex-1 group-hover:text-navy-600 transition-colors">
                      {post.titleJa}
                    </h2>

                    <p className="text-xs text-neutral-500 leading-relaxed mb-4 line-clamp-2">
                      {post.excerptJa}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-100">
                      <time dateTime={post.dateIso} className="text-[10px] text-neutral-400">
                        {post.date}
                      </time>
                      <span className="flex items-center gap-1 text-xs font-semibold text-navy-500 group-hover:text-navy-700 transition-colors">
                        Read more
                        <ArrowRight
                          size={12}
                          strokeWidth={2}
                          aria-hidden="true"
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        titleJa="Have a staffing question for an expert?"
        descriptionJa="Our consultants are available for free one-to-one consultations on any workforce challenge."
        primaryLabel="Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Browse Seminars"
        secondaryHref="/seminars"
        variant="navy"
      />
    </>
  );
}
