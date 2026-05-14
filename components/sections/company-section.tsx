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
  { label: "会社名", value: "株式会社 MakeCareer" },
  { label: "設立", value: "2009年4月" },
  { label: "代表取締役", value: "代表 太郎（代表取締役社長）" },
  { label: "所在地", value: "〒450-0002 愛知県名古屋市中村区名駅3丁目11番22号" },
  { label: "資本金", value: "3,000万円" },
  { label: "許可番号", value: "一般労働者派遣事業 愛知労働局長許可（派）第○○-○○○号" },
  { label: "従業員数", value: "社員150名 / 登録スタッフ5,000名以上" },
  { label: "事業内容", value: "製造業向け人材派遣・工場請負・有料職業紹介" },
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
            会社概要
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
                会社詳細ページへ
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
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100">
              <div className="absolute inset-0 bg-[url('/images/company-office.jpg')] bg-cover bg-center" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <Building2 size={48} strokeWidth={1} className="text-neutral-300" aria-hidden="true" />
                <p className="text-xs text-neutral-400">会社・事務所写真（準備中）</p>
              </div>
            </div>

            {/* Floating stat badge */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-amber-500 px-5 py-4 shadow-lg shadow-amber-500/30">
              <p className="text-xs font-semibold text-white/80 mb-0.5">創業から</p>
              <p className="text-2xl font-extrabold text-white leading-none">
                15<span className="text-base font-semibold ml-0.5">年以上</span>
              </p>
              <p className="text-[10px] text-white/70 mt-0.5">製造業人材派遣の実績</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
