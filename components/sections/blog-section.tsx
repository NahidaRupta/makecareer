"use client";

import type React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { safeVariant, staggerContainer, fadeInUp } from "@/lib/motion/variants";

interface BlogPost {
  slug: string;
  date: string;
  dateIso: string;
  category: string;
  titleJa: string;
  excerptJa: string;
  readMinutes: number;
  imageSrc: string;
}

const POSTS: BlogPost[] = [
  {
    slug: "dispatch-vs-contract-2025",
    date: "8 May 2025",
    dateIso: "2025-05-08",
    category: "Staffing Basics",
    titleJa: "Dispatch vs. Outsourcing: What Every Manufacturing HR Manager Needs to Know",
    excerptJa:
      "Dispatch and outsourcing look similar but carry very different legal and cost implications. We break down the key differences in command structure, fees, and liability.",
    readMinutes: 8,
    imageSrc: "/images/blog/dispatch-vs-contract.jpg",
  },
  {
    slug: "specified-skills-2025",
    date: "22 April 2025",
    dateIso: "2025-04-22",
    category: "Foreign Workers",
    titleJa: "What Is Specified Skills Type 2? 2025 Update & How Manufacturing Benefits",
    excerptJa:
      "Specified Skills Type 2 allows indefinite residence in Japan. We explain the requirements, application process, and the advantages for the manufacturing sector.",
    readMinutes: 10,
    imageSrc: "/images/blog/specified-skills-2025.jpg",
  },
  {
    slug: "retention-rate-tips",
    date: "10 April 2025",
    dateIso: "2025-04-10",
    category: "Retention",
    titleJa: "5 Workplace Improvements That Boost Dispatch Staff Retention",
    excerptJa:
      "Post-placement follow-up is the key to retention. From day-one onboarding to the 3-month check-in, here are five practical steps that actually work.",
    readMinutes: 6,
    imageSrc: "/images/blog/retention-tips.jpg",
  },
];

export function BlogSection() {
  const { ref, inView } = useInView({ once: true });
  const prefersReducedMotion = useReducedMotion();

  const container = safeVariant(staggerContainer, prefersReducedMotion);
  const item = safeVariant(fadeInUp, prefersReducedMotion);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="blog-heading"
      className="bg-white section-padding"
    >
      <div className="content-max px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12"
        >
          <div>
            <motion.p
              variants={item}
              className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-3"
            >
              Column &amp; Journal
            </motion.p>
            <motion.h2
              id="blog-heading"
              variants={item}
              className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight"
            >
              Insights &amp; Resources
            </motion.h2>
            <motion.p variants={item} className="mt-3 text-neutral-600 text-sm leading-relaxed">
              Expert guidance on hiring and workforce management in manufacturing.
            </motion.p>
          </div>
          <motion.div variants={item} className="mt-6 sm:mt-0 shrink-0">
            <Link
              href={{ pathname: "/blog" }}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600 hover:text-navy-800 transition-colors"
            >
              View all articles
              <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Post cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {POSTS.map((post, index) => (
            <motion.div key={post.slug} variants={item}>
              <Link
                href={{ pathname: `/blog/${post.slug}` }}
                className="group flex flex-col h-full rounded-2xl border border-neutral-200 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                {/* Image placeholder */}
                <div className="relative h-48 bg-navy-50 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-[url('/images/blog/placeholder.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${post.imageSrc})` }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-950/40 to-transparent" />
                  {index === 0 && (
                    <span className="absolute top-3 left-3 rounded-full bg-amber-500 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wide">
                      New
                    </span>
                  )}
                </div>

                {/* Content */}
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

                  <h3 className="text-sm font-bold text-navy-950 leading-snug mb-3 flex-1 group-hover:text-navy-600 transition-colors">
                    {post.titleJa}
                  </h3>

                  <p className="text-xs text-neutral-500 leading-relaxed mb-4 line-clamp-2">
                    {post.excerptJa}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <time dateTime={post.dateIso} className="text-[10px] text-neutral-400">
                      {post.date}
                    </time>
                    <span className="flex items-center gap-1 text-xs font-semibold text-navy-500 group-hover:text-navy-700 transition-colors">
                      Read more
                      <ArrowRight size={12} strokeWidth={2} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
