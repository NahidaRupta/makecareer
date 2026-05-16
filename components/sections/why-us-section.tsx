"use client";

import type React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Clock,
  MapPin,
  HeartHandshake,
} from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { safeVariant, staggerContainer, fadeInUp } from "@/lib/motion/variants";
import type { DifferentiatorItem } from "@/types";

const REASONS: (DifferentiatorItem & { icon: React.ElementType })[] = [
  {
    icon: ShieldCheck,
    headingJa: "製造業に特化した専門性",
    headingEn: "Manufacturing Expertise",
    bodyJa:
      "15年以上の製造業特化の実績。工場・ライン作業から技術職まで、現場を知るコーディネーターが的確なマッチングを実現します。",
    bodyEn:
      "Over 15 years focused exclusively on manufacturing. Our coordinators understand the shop floor and make accurate placements.",
    iconName: "ShieldCheck",
  },
  {
    icon: Users,
    headingJa: "5,000名を超える登録スタッフ",
    headingEn: "5,000+ Registered Staff",
    bodyJa:
      "幅広い職種・スキルを持つスタッフが即日〜短期間での配置に対応。急な欠員や繁忙期の増員にも迅速に対応します。",
    bodyEn:
      "A large pool of skilled workers ready for same-day to short-notice assignments — ideal for sudden vacancies or peak seasons.",
    iconName: "Users",
  },
  {
    icon: Clock,
    headingJa: "最短即日のスピード対応",
    headingEn: "Same-Day Response",
    bodyJa:
      "お問い合わせから最短即日でスタッフをご紹介。生産ラインを止めない迅速なサポートを提供します。",
    bodyEn:
      "From inquiry to placement in as little as one day — keeping your production line running without interruption.",
    iconName: "Clock",
  },
  {
    icon: MapPin,
    headingJa: "全国の製造拠点をカバー",
    headingEn: "Nationwide Coverage",
    bodyJa:
      "愛知・大阪・神奈川をはじめ、全国の主要な製造業集積エリアに対応。地域密着型のサポートネットワークを持ちます。",
    bodyEn:
      "From Aichi and Osaka to Kanagawa and beyond — nationwide coverage of Japan's major industrial hubs.",
    iconName: "MapPin",
  },
  {
    icon: HeartHandshake,
    headingJa: "スタッフ・企業双方に寄り添う支援",
    headingEn: "Dual-Side Support",
    bodyJa:
      "企業様の生産性向上とスタッフのキャリア発展、両方を大切にした長期的なパートナーシップを目指します。",
    bodyEn:
      "We care equally about your productivity and your workers' growth, building partnerships that last.",
    iconName: "HeartHandshake",
  },
];

export function WhyUsSection() {
  const { ref, inView } = useInView({ once: true });
  const prefersReducedMotion = useReducedMotion();

  const container = safeVariant(staggerContainer, prefersReducedMotion);
  const item = safeVariant(fadeInUp, prefersReducedMotion);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="why-us-heading"
      className="bg-neutral-50 section-padding"
    >
      <div className="content-max px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <motion.p
            variants={item}
            className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-3"
          >
            Why MakeCareer
          </motion.p>
          <motion.h2
            id="why-us-heading"
            variants={item}
            className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight"
          >
            5 Reasons Clients Choose Us
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-4 text-neutral-600 leading-relaxed"
          >
            Our deep expertise on the manufacturing floor gives us a genuine
            edge in finding and placing the right talent.
          </motion.p>
        </motion.div>

        {/* Reasons grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {REASONS.map((reason, index) => {
            const Icon = reason.icon;
            const isLastOdd =
              REASONS.length % 2 !== 0 && index === REASONS.length - 1;

            return (
              <motion.div
                key={reason.headingEn}
                variants={item}
                className={`group relative rounded-2xl bg-white border border-neutral-200 p-7 transition-shadow hover:shadow-[0_8px_30px_rgba(10,22,40,0.08)] ${
                  isLastOdd ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Number badge */}
                <span
                  aria-hidden="true"
                  className="absolute top-5 right-5 text-xs font-bold text-neutral-200 tabular-nums select-none"
                >
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-500 transition-colors group-hover:bg-navy-500 group-hover:text-white">
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                </div>

                {/* Heading */}
                <h3 className="text-base font-bold text-navy-950 leading-snug mb-3">
                  {reason.headingEn}
                </h3>

                {/* Body */}
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {reason.bodyEn}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
