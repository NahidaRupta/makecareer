"use client";

import type React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import {
  safeVariant,
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "@/lib/motion/variants";

interface ProfileRow {
  label: string;
  value: string;
}

const PROFILE_ROWS: ProfileRow[] = [
  { label: "Company Name", value: "MakeCareer Co., Ltd." },
  { label: "Founded", value: "April 2009" },
  { label: "CEO", value: "Taro Daihyo, Representative Director" },
  { label: "Address", value: "3-11-22 Meieki, Nakamura-ku, Nagoya, Aichi 450-0002" },
  { label: "Capital", value: "¥30,000,000" },
  { label: "License No.", value: "General Worker Dispatch — Aichi Labour Bureau No. ○○-○○○" },
  { label: "Headcount", value: "150 employees / 5,000+ registered staff" },
  { label: "Business", value: "Manufacturing staffing, factory outsourcing, paid employment placement" },
];

export function CompanySection() {
  const { ref, inView } = useInView({ once: true });
  const prefersReducedMotion = useReducedMotion();

  const container = safeVariant(staggerContainer, prefersReducedMotion);
  const item = safeVariant(fadeInUp, prefersReducedMotion);
  const leftItem = safeVariant(fadeInLeft, prefersReducedMotion);
  const rightItem = safeVariant(fadeInRight, prefersReducedMotion);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="company-heading"
      className="bg-white section-padding"
    >
      <div className="content-max px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-14"
        >
          <motion.p
            variants={item}
            className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-3"
          >
            About Us
          </motion.p>
          <motion.h2
            id="company-heading"
            variants={item}
            className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight"
          >
            Company Profile
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile table */}
          <motion.div
            variants={leftItem}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <dl className="divide-y divide-neutral-100">
              {PROFILE_ROWS.map((row) => (
                <div key={row.label} className="grid grid-cols-3 gap-4 py-4 text-sm">
                  <dt className="col-span-1 font-semibold text-navy-950 shrink-0">
                    {row.label}
                  </dt>
                  <dd className="col-span-2 text-neutral-600 leading-relaxed">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <Link
                href={{ pathname: "/company" }}
                className="inline-flex items-center gap-2 rounded-lg bg-navy-950 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
              >
                View full company page
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            variants={rightItem}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-neutral-100">
              <div className="absolute inset-0 bg-[url('/images/company.jpeg')] bg-cover bg-center" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <Building2 size={48} strokeWidth={1} className="text-neutral-300" aria-hidden="true" />
                <p className="text-xs text-neutral-400">Office photo coming soon</p>
              </div>
            </div>

            {/* Floating stat badge */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-amber-500 px-5 py-4 shadow-lg shadow-amber-500/30">
              <p className="text-xs font-semibold text-white/80 mb-0.5">In business for</p>
              <p className="text-2xl font-extrabold text-white leading-none">
                15<span className="text-base font-semibold ml-0.5">+ years</span>
              </p>
              <p className="text-[10px] text-white/70 mt-0.5">Manufacturing staffing expertise</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
