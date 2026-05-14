"use client";

import type React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { safeVariant, staggerContainer, fadeInUp } from "@/lib/motion/variants";

interface Seminar {
  slug: string;
  date: string;
  dateIso: string;
  time: string;
  titleJa: string;
  format: "オンライン" | "会場" | "ハイブリッド";
  location: string;
  targetJa: string;
  spotsTotal: number;
  spotsLeft: number;
}

const SEMINARS: Seminar[] = [
  {
    slug: "2025-06-haken-basics",
    date: "2025年6月5日（木）",
    dateIso: "2025-06-05",
    time: "14:00〜15:30",
    titleJa: "【無料セミナー】製造業の人材派遣 基礎と活用法",
    format: "オンライン",
    location: "Zoom開催",
    targetJa: "製造業の採用・人事担当者様",
    spotsTotal: 30,
    spotsLeft: 12,
  },
  {
    slug: "2025-06-ginoujisshu-guide",
    date: "2025年6月18日（水）",
    dateIso: "2025-06-18",
    time: "13:00〜14:30",
    titleJa: "特定技能・技能実習 受け入れ完全ガイド",
    format: "ハイブリッド",
    location: "名古屋本社 + Zoom",
    targetJa: "外国人材受け入れを検討中の企業様",
    spotsTotal: 20,
    spotsLeft: 5,
  },
  {
    slug: "2025-07-ukeoi-cost",
    date: "2025年7月10日（木）",
    dateIso: "2025-07-10",
    time: "15:00〜16:30",
    titleJa: "工場請負でコスト最適化 ― 成功事例から学ぶ",
    format: "会場",
    location: "大阪ビジネスパーク セミナールーム",
    targetJa: "製造ライン効率化を検討中の生産管理・工場長様",
    spotsTotal: 25,
    spotsLeft: 18,
  },
];

const FORMAT_COLORS: Record<Seminar["format"], string> = {
  オンライン: "bg-emerald-50 text-emerald-700 border-emerald-200",
  会場: "bg-navy-50 text-navy-700 border-navy-200",
  ハイブリッド: "bg-amber-50 text-amber-700 border-amber-200",
};

function SpotsBar({ total, left }: { total: number; left: number }) {
  const pct = Math.round((left / total) * 100);
  const isCritical = pct <= 25;

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] text-neutral-500">残席</span>
        <span className={`text-[10px] font-semibold ${isCritical ? "text-red-500" : "text-neutral-600"}`}>
          {left}名
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-neutral-200 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all ${isCritical ? "bg-red-400" : "bg-amber-400"}`}
          style={{ width: `${pct}%` }}
          aria-label={`残席 ${left}名 / ${total}名`}
        />
      </div>
    </div>
  );
}

export function SeminarSection() {
  const { ref, inView } = useInView({ once: true });
  const prefersReducedMotion = useReducedMotion();

  const container = safeVariant(staggerContainer, prefersReducedMotion);
  const item = safeVariant(fadeInUp, prefersReducedMotion);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="seminar-heading"
      className="bg-white section-padding"
    >
      <div className="content-max px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12"
        >
          <div>
            <motion.p
              variants={item}
              className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-3"
            >
              Events &amp; Seminars
            </motion.p>
            <motion.h2
              id="seminar-heading"
              variants={item}
              className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight"
            >
              セミナー・説明会
            </motion.h2>
            <motion.p variants={item} className="mt-3 text-neutral-600 text-sm leading-relaxed">
              採用・人材活用に役立つ無料セミナーを定期開催しています。
            </motion.p>
          </div>
          <motion.div variants={item} className="mt-6 sm:mt-0 shrink-0">
            <Link
              href={{ pathname: "/seminars" }}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600 hover:text-navy-800 transition-colors"
            >
              すべて見る
              <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Seminar cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {SEMINARS.map((seminar) => (
            <motion.div
              key={seminar.slug}
              variants={item}
              className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              {/* Format badge */}
              <span
                className={`self-start text-[10px] font-semibold border rounded-full px-2.5 py-1 mb-4 ${FORMAT_COLORS[seminar.format]}`}
              >
                {seminar.format}
              </span>

              {/* Date + time */}
              <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                <Calendar size={12} aria-hidden="true" />
                <time dateTime={seminar.dateIso}>{seminar.date}</time>
                <span>|</span>
                <span>{seminar.time}</span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-navy-950 leading-snug mb-3 flex-1">
                {seminar.titleJa}
              </h3>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-2">
                <MapPin size={11} aria-hidden="true" />
                <span>{seminar.location}</span>
              </div>

              {/* Target */}
              <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-4">
                <Users size={11} aria-hidden="true" />
                <span>{seminar.targetJa}</span>
              </div>

              {/* Spots bar */}
              <div className="mb-5">
                <SpotsBar total={seminar.spotsTotal} left={seminar.spotsLeft} />
              </div>

              {/* CTA */}
              <Link
                href={{ pathname: `/seminars/${seminar.slug}` }}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
              >
                参加申し込み
                <ArrowRight size={13} strokeWidth={2} aria-hidden="true" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
