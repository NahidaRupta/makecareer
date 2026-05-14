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
    detail: "愛知労働局長許可",
    number: "（派）第○○-○○○号",
  },
  {
    icon: FileCheck2,
    titleJa: "有料職業紹介事業許可",
    titleEn: "Paid Employment Placement License",
    detail: "愛知労働局長許可",
    number: "（有）第○○-○○○号",
  },
  {
    icon: Award,
    titleJa: "プライバシーマーク認定",
    titleEn: "Privacy Mark Certified",
    detail: "個人情報の適切な取扱いを認定",
    number: "第○○○○○○号",
  },
  {
    icon: BadgeCheck,
    titleJa: "ISO 9001 認証取得",
    titleEn: "ISO 9001 Certified",
    detail: "品質マネジメントシステム国際規格",
  },
];

const COMMITMENTS = [
  "スタッフ・企業様の個人情報を厳重に管理",
  "法令遵守を徹底したコンプライアンス体制",
  "労働基準法・派遣法に基づく適正な雇用管理",
  "定期的な社内研修によるサービス品質の向上",
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
            許認可・コンプライアンス
          </motion.h2>
          <motion.p variants={item} className="mt-4 text-neutral-600 leading-relaxed">
            MakeCareerは適切な許認可のもと、法令を遵守した人材サービスを提供しています。
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
                <h3 className="text-sm font-bold text-navy-950 leading-snug mb-1">
                  {badge.titleJa}
                </h3>
                <p className="text-[10px] text-neutral-400 mb-3">{badge.titleEn}</p>
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
            コンプライアンスへの取り組み
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
