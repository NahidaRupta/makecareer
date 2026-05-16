"use client";

import type React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, FileCheck2, BadgeCheck } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { safeVariant, staggerContainer, fadeInUp } from "@/lib/motion/variants";

interface ComplianceBadge {
  icon: React.ElementType;
  titleJa: string;
  titleEn: string;
  detail: string;
  number?: string;
}

const BADGES: ComplianceBadge[] = [
  {
    icon: ShieldCheck,
    titleJa: "一般労働者派遣事業許可",
    titleEn: "General Worker Dispatch License",
    detail: "Aichi Labour Bureau — Certified",
    number: "No. ○○-○○○",
  },
  {
    icon: FileCheck2,
    titleJa: "有料職業紹介事業許可",
    titleEn: "Paid Employment Placement License",
    detail: "Aichi Labour Bureau — Certified",
    number: "No. ○○-○○○",
  },
  {
    icon: Award,
    titleJa: "プライバシーマーク認定",
    titleEn: "Privacy Mark Certified",
    detail: "Certified for proper handling of personal information",
    number: "No. ○○○○○○",
  },
  {
    icon: BadgeCheck,
    titleJa: "ISO 9001 認証取得",
    titleEn: "ISO 9001 Certified",
    detail: "International quality management system standard",
  },
];

const COMMITMENTS = [
  "Strict protection of all staff and client personal data",
  "Full legal compliance and robust internal governance",
  "Employment management aligned with Japan's Labour Standards and Dispatch laws",
  "Regular staff training to continuously raise service quality",
];

export function ComplianceSection() {
  const { ref, inView } = useInView({ once: true });
  const prefersReducedMotion = useReducedMotion();

  const container = safeVariant(staggerContainer, prefersReducedMotion);
  const item = safeVariant(fadeInUp, prefersReducedMotion);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="compliance-heading"
      className="bg-navy-50 section-padding"
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
            Compliance &amp; Certifications
          </motion.p>
          <motion.h2
            id="compliance-heading"
            variants={item}
            className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight"
          >
            Licenses &amp; Compliance
          </motion.h2>
          <motion.p variants={item} className="mt-4 text-neutral-600 leading-relaxed">
            MakeCareer holds all required licences and operates in full compliance
            with Japanese labour law.
          </motion.p>
        </motion.div>

        {/* License badges */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14"
        >
          {BADGES.map((badge) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.titleJa}
                variants={item}
                className="flex flex-col items-center text-center rounded-2xl border border-navy-200 bg-white p-6 hover:shadow-md transition-shadow"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy-950">
                  <Icon size={24} strokeWidth={1.5} className="text-amber-400" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-bold text-navy-950 leading-snug mb-3">
                  {badge.titleEn}
                </h3>
                <p className="text-[11px] text-neutral-500 leading-relaxed">{badge.detail}</p>
                {badge.number && (
                  <p className="mt-1 text-[10px] text-neutral-400 font-mono">{badge.number}</p>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Commitment list */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="rounded-2xl bg-navy-950 p-8 lg:p-10"
        >
          <motion.h3 variants={item} className="text-lg font-bold text-white mb-6">
            Our Compliance Commitments
          </motion.h3>
          <motion.ul
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {COMMITMENTS.map((text) => (
              <motion.li
                key={text}
                variants={item}
                className="flex items-start gap-3"
              >
                <ShieldCheck
                  size={16}
                  className="text-amber-400 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-sm text-white/80 leading-relaxed">{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
