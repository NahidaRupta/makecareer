"use client";

import type React from "react";
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
      className="bg-navy-950 section-padding"
    >
      <div className="content-max px-4 sm:px-6 lg:px-8">
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
              className={`group flex flex-col rounded-2xl border p-7 transition-all hover:-translate-y-1 ${
                index === 0
                  ? "border-amber-500/40 bg-amber-500/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <div className="mb-5">
                <span className="inline-block rounded-full bg-navy-700/60 px-3 py-1 text-[10px] font-semibold text-amber-300 mb-2">
                  {cs.industry}
                </span>
                <p className="text-[11px] text-white/40">{cs.companyProfile}</p>
              </div>

              <div className="flex items-center gap-2 mb-5">
                <TrendingUp size={16} className="text-amber-400 shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-2xl font-extrabold text-amber-400">{cs.stat}</span>
                  <span className="ml-1 text-xs font-medium text-white/60">{cs.statLabel}</span>
                </div>
              </div>

              <div className="mb-4 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mb-1.5">
                  課題
                </p>
                <p className="text-sm text-white/70 leading-relaxed">{cs.challenge}</p>
              </div>

              <div className="mb-6">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mb-1.5">
                  解決策
                </p>
                <p className="text-sm text-white/70 leading-relaxed">{cs.solution}</p>
              </div>

              <Link
                href={{ pathname: `/case-studies/${cs.slug}` }}
                className="flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                詳しく読む
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-10 flex justify-center"
        >
          <Link
            href={{ pathname: "/case-studies" }}
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white transition-all"
          >
            すべての導入事例を見る
            <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
