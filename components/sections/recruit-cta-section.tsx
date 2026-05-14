"use client";

import type React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Phone, ArrowRight } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { safeVariant, staggerContainer, fadeInUp } from "@/lib/motion/variants";

const JOB_CATEGORIES = [
  "組立・検査",
  "溶接・加工",
  "フォークリフト",
  "設備メンテナンス",
  "物流・倉庫",
  "外国人材（特定技能）",
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
            製造業・工場の
            <br />
            お仕事を探している方へ
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-6 text-white/85 leading-relaxed text-lg max-w-xl mx-auto"
          >
            未経験歓迎・寮完備・日払いOKの求人多数。
            <br className="hidden sm:block" />
            あなたの希望条件に合ったお仕事を一緒に探しましょう。
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
              求人を探す
            </Link>
            <Link
              href={{ pathname: "/contact" }}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/50 bg-transparent px-8 py-4 text-base font-bold text-white hover:bg-white/10 hover:-translate-y-0.5 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Phone size={18} strokeWidth={2} aria-hidden="true" />
              無料で相談する
            </Link>
          </motion.div>

          {/* Trust note */}
          <motion.p variants={item} className="mt-8 text-sm text-white/60">
            登録無料・面談オンラインOK・希望条件に合わない場合はご紹介しません
          </motion.p>
        </motion.div>

        {/* For companies — secondary strip */}
        <motion.div
          variants={item}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-1">
              For Companies
            </p>
            <h3 className="text-lg font-bold text-white">
              採用・人材確保のご相談はこちら
            </h3>
            <p className="text-sm text-white/70 mt-1">
              急な増員・長期的な人材戦略まで、まずはお気軽にお問い合わせください。
            </p>
          </div>
          <Link
            href={{ pathname: "/contact" }}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-navy-950 px-6 py-3 text-sm font-bold text-white hover:bg-navy-800 transition-colors"
          >
            採用相談をする
            <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
