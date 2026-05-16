"use client";

import type React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileDown, BookOpen, Globe, ClipboardList, ArrowRight } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { safeVariant, staggerContainer, fadeInUp } from "@/lib/motion/variants";

interface Download {
  slug: string;
  icon: React.ElementType;
  titleJa: string;
  descriptionJa: string;
  pages: string;
  category: string;
}

const DOWNLOADS: Download[] = [
  {
    slug: "service-brochure",
    icon: BookOpen,
    titleJa: "MakeCareer Complete Service Brochure",
    descriptionJa:
      "An overview of all services — staffing, outsourcing, Specified Skills — including pricing guidance and coverage areas.",
    pages: "12 pages",
    category: "Services",
  },
  {
    slug: "hiring-guide",
    icon: ClipboardList,
    titleJa: "The Complete Manufacturing Hiring Guide",
    descriptionJa:
      "Key strategies for securing job-ready talent and improving retention rates — essential reading for manufacturing HR teams.",
    pages: "20 pages",
    category: "Hiring Guide",
  },
  {
    slug: "specified-skills-guide",
    icon: Globe,
    titleJa: "Specified Skills & Technical Intern Acceptance Handbook",
    descriptionJa:
      "A step-by-step breakdown of the procedures, costs, and requirements for accepting foreign workers in Japan.",
    pages: "16 pages",
    category: "Foreign Workers",
  },
  {
    slug: "dispatch-cost-calculator",
    icon: FileDown,
    titleJa: "Staffing Cost Calculator (Excel)",
    descriptionJa:
      "Easily estimate the total cost of dispatch staffing and compare it against direct employment with this Excel tool.",
    pages: "Excel file",
    category: "Tools",
  },
];

export function DownloadsSection() {
  const { ref, inView } = useInView({ once: true });
  const prefersReducedMotion = useReducedMotion();

  const container = safeVariant(staggerContainer, prefersReducedMotion);
  const item = safeVariant(fadeInUp, prefersReducedMotion);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="downloads-heading"
      className="bg-neutral-50 section-padding"
    >
      <div className="content-max px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.p
            variants={item}
            className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-3"
          >
            Free Downloads
          </motion.p>
          <motion.h2
            id="downloads-heading"
            variants={item}
            className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight"
          >
            Free Resource Downloads
          </motion.h2>
          <motion.p variants={item} className="mt-4 text-neutral-600 leading-relaxed">
            Practical guides and tools to help you hire smarter and manage your workforce better.
            <br className="hidden sm:block" />
            Enter your email and download instantly.
          </motion.p>
        </motion.div>

        {/* Download cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {DOWNLOADS.map((dl) => {
            const Icon = dl.icon;
            return (
              <motion.div
                key={dl.slug}
                variants={item}
                className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                {/* Category + icon */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-100 rounded-full px-2.5 py-1">
                    {dl.category}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-500 group-hover:bg-navy-500 group-hover:text-white transition-colors">
                    <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-navy-950 leading-snug mb-3 flex-1">
                  {dl.titleJa}
                </h3>

                <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                  {dl.descriptionJa}
                </p>

                {/* Pages */}
                <p className="text-[10px] text-neutral-400 mb-5 font-medium">{dl.pages}</p>

                {/* Download link — goes to gated form */}
                <Link
                  href={{ pathname: `/downloads/${dl.slug}` }}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-navy-200 px-4 py-2.5 text-xs font-semibold text-navy-600 hover:bg-navy-50 hover:border-navy-300 transition-colors"
                >
                  <FileDown size={13} strokeWidth={2} aria-hidden="true" />
                  Free Download
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-10 flex justify-center"
        >
          <Link
            href={{ pathname: "/downloads" }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-600 hover:text-navy-800 transition-colors"
          >
            View all resources
            <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
