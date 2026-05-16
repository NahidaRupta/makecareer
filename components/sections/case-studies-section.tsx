"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { safeVariant, staggerContainer, fadeInUp } from "@/lib/motion/variants";

interface CaseStudy {
  slug: string;
  industry: string;
  companyProfile: string;
  challenge: string;
  solution: string;
  stat: string;
  statLabel: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "automotive-line-expansion",
    industry: "Automotive Parts",
    companyProfile: "Aichi — 500 employees",
    challenge:
      "A new production line launch required 20 assembly staff urgently, but conventional hiring could not meet the timeline.",
    solution:
      "20 pre-trained staff placed within 3 days. The new line launched on schedule with zero disruption to existing operations.",
    stat: "3",
    statLabel: "days to fill 20 positions",
  },
  {
    slug: "foreign-worker-integration",
    industry: "Electronics & Components",
    companyProfile: "Kanagawa — 300 employees",
    challenge:
      "The company wanted to address domestic labour shortages with Specified Skills workers but lacked visa and support know-how.",
    solution:
      "End-to-end support from visa filing to dormitory setup and Japanese language assistance. 15 workers fully operational within 6 months.",
    stat: "97",
    statLabel: "% retention rate achieved",
  },
  {
    slug: "peak-season-logistics",
    industry: "Logistics & Warehousing",
    companyProfile: "Osaka — seasonal peak staffing",
    challenge:
      "50 picking staff were needed for the year-end warehouse peak with only one week's notice.",
    solution:
      "50 job-ready staff mobilised from our registered pool. Zero shipping delays throughout the busiest period.",
    stat: "50",
    statLabel: "staff deployed in 1 week",
  },
];

export function CaseStudiesSection() {
  const { ref, inView } = useInView({ once: true });
  const prefersReducedMotion = useReducedMotion();

  const container = safeVariant(staggerContainer, prefersReducedMotion);
  const item = safeVariant(fadeInUp, prefersReducedMotion);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="cases-heading"
      className="relative overflow-hidden section-padding"
    >
      {/* ── Background image + layered overlays ── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/case-study.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={85}
        />
        {/* Base dark wash */}
        <div className="absolute inset-0 bg-navy-950/50" />
        {/* Cinematic gradient: dark top → clear mid → dark bottom */}
        <div className="absolute inset-0 bg-linear-to-b from-navy-950/70 via-navy-950/20 to-navy-950/65" />
        {/* Horizontal vignette for depth */}
        <div className="absolute inset-0 bg-linear-to-r from-navy-950/40 via-transparent to-navy-950/40" />
        {/* Subtle amber tint line near the top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/40 to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 content-max px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl mb-14"
        >
          <motion.p
            variants={item}
            className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3"
          >
            Case Studies
          </motion.p>
          <motion.h2
            id="cases-heading"
            variants={item}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Client Success Stories
          </motion.h2>
          <motion.p variants={item} className="mt-4 text-white/60 leading-relaxed">
            Real results from companies that have partnered with MakeCareer.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {CASE_STUDIES.map((cs, index) => (
            <motion.div
              key={cs.slug}
              variants={item}
              className={`group flex flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-md ${
                index === 0
                  ? "border-amber-500/35 bg-amber-500/[0.07] shadow-lg shadow-amber-500/10 hover:border-amber-400/50 hover:shadow-amber-500/20"
                  : "border-white/10 bg-white/6 shadow-lg shadow-black/30 hover:border-white/20 hover:bg-white/9"
              }`}
            >
              {/* Industry badge + company profile */}
              <div className="mb-5">
                <span className="inline-block rounded-full bg-navy-800/70 border border-white/10 px-3 py-1 text-[10px] font-semibold text-amber-300 mb-2 backdrop-blur-sm">
                  {cs.industry}
                </span>
                <p className="text-[11px] text-white/40">{cs.companyProfile}</p>
              </div>

              {/* Stat */}
              <div className="flex items-center gap-2 mb-5 p-3 rounded-xl bg-navy-950/40 border border-white/8 backdrop-blur-sm">
                <TrendingUp size={16} className="text-amber-400 shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-2xl font-extrabold text-amber-400 tabular-nums">{cs.stat}</span>
                  <span className="ml-1 text-xs font-medium text-white/60">{cs.statLabel}</span>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-4 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40 mb-1.5">
                  Challenge
                </p>
                <p className="text-sm text-white/70 leading-relaxed">{cs.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40 mb-1.5">
                  Solution
                </p>
                <p className="text-sm text-white/70 leading-relaxed">{cs.solution}</p>
              </div>

              {/* CTA link */}
              <Link
                href={{ pathname: `/case-studies/${cs.slug}` }}
                className="flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors group-hover:gap-2.5"
              >
                Read more
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View all link */}
        <motion.div
          variants={item}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 flex justify-center"
        >
          <Link
            href={{ pathname: "/case-studies" }}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-white/80 hover:bg-white/10 hover:border-white/25 hover:text-white transition-all duration-200 shadow-lg shadow-black/20"
          >
            View all case studies
            <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
