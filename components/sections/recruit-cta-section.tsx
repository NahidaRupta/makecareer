"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Phone, ArrowRight } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { safeVariant, staggerContainer, fadeInUp } from "@/lib/motion/variants";

const JOB_CATEGORIES = [
  "Assembly & Inspection",
  "Welding & Machining",
  "Forklift Operation",
  "Equipment Maintenance",
  "Logistics & Warehouse",
  "Foreign Workers (Specified Skills)",
];

const ZIGZAG_IMAGES = [
  {
    src: "/images/services/job.jpg",
    alt: "Manufacturing dispatch workplace",
    fromLeft: true,
    yShift: "mt-0",
    rotate: "-2deg",
    floatDelay: 0.8,
  },
  {
    src: "/images/services/service3.png",
    alt: "Factory outsourcing workplace",
    fromLeft: false,
    yShift: "mt-8",
    rotate: "1.5deg",
    floatDelay: 1.1,
  },
  {
    src: "/images/services/job2.jpeg",
    alt: "Specified Skills foreign worker support",
    fromLeft: true,
    yShift: "mt-2",
    rotate: "-1deg",
    floatDelay: 1.4,
  },
];

export function RecruitCtaSection() {
  const { ref, inView } = useInView({ once: true });
  const prefersReducedMotion = useReducedMotion();

  const container = safeVariant(staggerContainer, prefersReducedMotion);
  const item = safeVariant(fadeInUp, prefersReducedMotion);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="recruit-cta-heading"
      className="relative overflow-hidden bg-amber-500 section-padding"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-br from-amber-400 via-amber-500 to-amber-600"
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none"
      />

      <div className="content-max relative px-4 sm:px-6 lg:px-8">
        {/* ── For Job Seekers CTA ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.p
            variants={item}
            className="text-xs font-bold uppercase tracking-widest text-white/70 mb-4"
          >
            For Job Seekers
          </motion.p>
          <motion.h2
            id="recruit-cta-heading"
            variants={item}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]"
          >
            Looking for a Job
            <br />
            in Manufacturing?
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-6 text-white/85 leading-relaxed text-lg max-w-xl mx-auto"
          >
            No experience required · Dormitory available · Daily pay options.
            <br className="hidden sm:block" />
            Let&apos;s find the right job for you together.
          </motion.p>

          {/* Job category pills */}
          <motion.div
            variants={container}
            className="flex flex-wrap justify-center gap-2 mt-8"
          >
            {JOB_CATEGORIES.map((cat) => (
              <motion.span
                key={cat}
                variants={item}
                className="rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
              >
                {cat}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href={{ pathname: "/jobs" }}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-bold text-amber-600 shadow-lg shadow-amber-700/20 hover:bg-amber-50 hover:-translate-y-0.5 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Search size={18} strokeWidth={2} aria-hidden="true" />
              Browse Jobs
            </Link>
            <Link
              href={{ pathname: "/contact" }}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/50 bg-transparent px-8 py-4 text-base font-bold text-white hover:bg-white/10 hover:-translate-y-0.5 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Phone size={18} strokeWidth={2} aria-hidden="true" />
              Free Consultation
            </Link>
          </motion.div>

          {/* Trust note */}
          <motion.p variants={item} className="mt-8 text-sm text-white/60">
            Free registration · Online interviews available · We only suggest roles that fit your needs
          </motion.p>
        </motion.div>

        {/* ── Zigzag service images ── */}
        <div
          className="mt-14 mb-2 flex items-start justify-center gap-4 sm:gap-6 lg:gap-10"
          aria-hidden="true"
        >
          {ZIGZAG_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              className={img.yShift}
              initial={{ opacity: 0, x: img.fromLeft ? -56 : 56 }}
              animate={
                inView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: img.fromLeft ? -56 : 56 }
              }
              transition={{
                duration: 0.75,
                delay: prefersReducedMotion ? 0 : i * 0.22,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* Floating wrapper — perpetual gentle bob */}
              <motion.div
                animate={
                  inView && !prefersReducedMotion
                    ? { y: [0, -9, 0] }
                    : { y: 0 }
                }
                transition={{
                  duration: 3.8 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: img.floatDelay,
                }}
                style={{ rotate: img.rotate }}
                className="overflow-hidden rounded-2xl ring-2 ring-white/25 shadow-xl shadow-amber-900/30"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={176}
                  height={132}
                  className="block w-24 h-18 sm:w-36 sm:h-28 lg:w-44 lg:h-32 object-cover"
                  sizes="(max-width: 640px) 96px, (max-width: 1024px) 144px, 176px"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ── For Companies strip ── */}
        <motion.div
          variants={item}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-1">
              For Companies
            </p>
            <h3 className="text-lg font-bold text-white">
              Staffing &amp; Hiring Consultations for Companies
            </h3>
            <p className="text-sm text-white/70 mt-1">
              Whether you need urgent scale-up or long-term workforce planning, we&apos;re ready to help.
            </p>
          </div>
          <Link
            href={{ pathname: "/contact" }}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-navy-950 px-6 py-3 text-sm font-bold text-white hover:bg-navy-800 transition-colors"
          >
            Get in Touch
            <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
