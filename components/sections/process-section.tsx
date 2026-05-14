"use client";

import type React from "react";
import { motion } from "framer-motion";
import { UserPlus, MessageSquare, Briefcase } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { safeVariant, staggerContainer, fadeInUp } from "@/lib/motion/variants";

interface Step {
  number: string;
  icon: React.ElementType;
  titleJa: string;
  titleEn: string;
  descriptionJa: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    icon: UserPlus,
    titleJa: "無料登録・ご相談",
    titleEn: "Free Registration",
    descriptionJa:
      "お電話・Web・来社いずれかの方法で、まずはお気軽にご相談ください。登録は無料、3分で完了します。",
  },
  {
    number: "02",
    icon: MessageSquare,
    titleJa: "担当者との面談",
    titleEn: "Consultation & Matching",
    descriptionJa:
      "専任の担当者がご希望の職種・勤務地・待遇などを詳しくお聞きし、最適な求人をご提案します。",
  },
  {
    number: "03",
    icon: Briefcase,
    titleJa: "お仕事スタート",
    titleEn: "Start Working",
    descriptionJa:
      "就業開始後も担当者が定期的にフォロー。安心して長く働ける環境づくりをサポートします。",
  },
];

export function ProcessSection() {
  const { ref, inView } = useInView({ once: true });
  const prefersReducedMotion = useReducedMotion();

  const container = safeVariant(staggerContainer, prefersReducedMotion);
  const item = safeVariant(fadeInUp, prefersReducedMotion);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="process-heading"
      className="bg-neutral-50 section-padding"
    >
      <div className="content-max px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.p
            variants={item}
            className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-3"
          >
            How It Works
          </motion.p>
          <motion.h2
            id="process-heading"
            variants={item}
            className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight"
          >
            3ステップで仕事が決まる
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-4 text-neutral-600 leading-relaxed"
          >
            MakeCareerなら、登録からお仕事開始まで最短3日。
            <br className="hidden sm:block" />
            担当者がしっかりサポートするので、初めての方も安心です。
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0"
        >
          {/* Connecting line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute top-10 left-[16.67%] right-[16.67%] hidden md:block h-px bg-linear-to-r from-transparent via-navy-200 to-transparent"
          />

          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={item}
                className="relative flex flex-col items-center text-center px-6"
              >
                {/* Step icon circle + number badge */}
                <div className="relative mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-navy-950 shadow-lg shadow-navy-950/20">
                    <Icon
                      size={28}
                      strokeWidth={1.5}
                      className="text-amber-400"
                      aria-hidden="true"
                    />
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-white"
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-navy-950 mb-1">
                  {step.titleJa}
                </h3>
                <p className="text-xs font-medium text-neutral-400 mb-3">
                  {step.titleEn}
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed max-w-xs">
                  {step.descriptionJa}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
