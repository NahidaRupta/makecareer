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
    titleJa: "Free Registration",
    titleEn: "Free Registration",
    descriptionJa:
      "Register by phone, online, or in person — it takes just 3 minutes and is completely free.",
  },
  {
    number: "02",
    icon: MessageSquare,
    titleJa: "Consultation & Matching",
    titleEn: "Consultation & Matching",
    descriptionJa:
      "A dedicated coordinator takes the time to understand your preferred role, location, and conditions, then suggests the best-fit jobs.",
  },
  {
    number: "03",
    icon: Briefcase,
    titleJa: "Start Working",
    titleEn: "Start Working",
    descriptionJa:
      "After you start, your coordinator checks in regularly to make sure you are settled and thriving in your new role.",
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
            Get Started in 3 Simple Steps
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-4 text-neutral-600 leading-relaxed"
          >
            With MakeCareer, you can go from registration to your first day in as little as 3 days.
            <br className="hidden sm:block" />
            Your dedicated coordinator is with you every step of the way.
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
                <h3 className="text-lg font-bold text-navy-950 mb-3">
                  {step.titleEn}
                </h3>
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
