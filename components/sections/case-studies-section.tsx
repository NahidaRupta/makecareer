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
    industry: "自動車部品製造",
    companyProfile: "愛知県・従業員500名規模",
    challenge:
      "新ラインの立ち上げで急遽20名の組立スタッフが必要になったが、通常の採用では間に合わなかった。",
    solution:
      "3日以内に20名を手配。事前研修済みスタッフを配置し、ライン稼働率を落とさずに新体制へ移行。",
    stat: "3",
    statLabel: "日以内に20名配置完了",
  },
  {
    slug: "foreign-worker-integration",
    industry: "電機・電子部品",
    companyProfile: "神奈川県・従業員300名規模",
    challenge:
      "国内人材不足を補うため特定技能外国人材の受け入れを検討したが、ビザ申請や生活支援のノウハウがなかった。",
    solution:
      "ビザ申請〜入寮〜日本語サポートまで一括支援。半年間で15名の特定技能人材が安定稼働。",
    stat: "97",
    statLabel: "%の就業継続率を達成",
  },
  {
    slug: "peak-season-logistics",
    industry: "物流・倉庫",
    companyProfile: "大阪府・繁忙期スポット対応",
    challenge:
      "年末繁忙期の倉庫作業でピッキングスタッフが50名不足。直前1週間での手配が求められた。",
    solution:
      "登録スタッフプールから即戦力50名を手配。繁忙期ピーク中の出荷遅延ゼロを達成。",
    stat: "50",
    statLabel: "名を1週間で緊急手配",
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
            導入事例
          </motion.h2>
          <motion.p variants={item} className="mt-4 text-white/60 leading-relaxed">
            実際にMakeCareerを活用いただいた企業様の成功事例をご紹介します。
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
                  課題
                </p>
                <p className="text-sm text-white/70 leading-relaxed">{cs.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40 mb-1.5">
                  解決策
                </p>
                <p className="text-sm text-white/70 leading-relaxed">{cs.solution}</p>
              </div>

              {/* CTA link */}
              <Link
                href={{ pathname: `/case-studies/${cs.slug}` }}
                className="flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors group-hover:gap-2.5"
              >
                詳しく読む
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
            すべての導入事例を見る
            <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
