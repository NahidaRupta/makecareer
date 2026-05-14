"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useInView } from "@/lib/hooks/use-in-view";
import { useCountUp } from "@/lib/hooks/use-count-up";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { safeVariant, staggerContainer, fadeInUp } from "@/lib/motion/variants";
import type { StatItem } from "@/types";

const STATS: StatItem[] = [
  {
    value: 5000,
    unit: "名",
    suffix: "+",
    label: "Registered Staff",
    labelJa: "登録スタッフ数",
  },
  {
    value: 200,
    unit: "社",
    suffix: "+",
    label: "Partner Companies",
    labelJa: "取引企業数",
  },
  {
    value: 92,
    unit: "%",
    suffix: "",
    label: "Retention Rate",
    labelJa: "就業継続率",
  },
  {
    value: 15,
    unit: "年",
    suffix: "+",
    label: "Industry Experience",
    labelJa: "業界経験",
  },
];

interface StatCounterProps {
  stat: StatItem;
  active: boolean;
}

function StatCounter({ stat, active }: StatCounterProps) {
  const count = useCountUp(stat.value, 1800, active);

  return (
    <div className="text-center px-4">
      <div className="flex items-baseline justify-center gap-0.5">
        <span className="text-4xl sm:text-5xl font-extrabold tabular-nums text-navy-950">
          {count.toLocaleString("ja-JP")}
        </span>
        <span className="text-2xl sm:text-3xl font-bold text-amber-500">
          {stat.unit}
          {stat.suffix}
        </span>
      </div>
      <p className="mt-1.5 text-sm font-medium text-neutral-500">
        {stat.labelJa}
      </p>
    </div>
  );
}

export function StatsBand() {
  const { ref, inView } = useInView({ once: true, threshold: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  const container = safeVariant(staggerContainer, prefersReducedMotion);
  const item = safeVariant(fadeInUp, prefersReducedMotion);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      aria-label="実績数値"
      className="bg-white border-y border-neutral-200 py-14 sm:py-16"
    >
      <div className="content-max px-4 sm:px-6 lg:px-8">
        <motion.p
          variants={item}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-10"
        >
          実績で選ばれる MakeCareer
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 lg:divide-x divide-neutral-200"
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} variants={item}>
              <StatCounter stat={stat} active={inView} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
