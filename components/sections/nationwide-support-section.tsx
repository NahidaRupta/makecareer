"use client";

import type React from "react";
import { motion } from "framer-motion";
import { MapPin, CheckCircle2 } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import {
  safeVariant,
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "@/lib/motion/variants";

interface Region {
  name: string;
  hub: string;
  prefectures: string[];
  highlight?: boolean;
}

const REGIONS: Region[] = [
  {
    name: "Chubu / Tokai",
    hub: "Nagoya",
    prefectures: ["Aichi", "Mie", "Gifu", "Shizuoka"],
    highlight: true,
  },
  {
    name: "Kanto",
    hub: "Tokyo / Kanagawa",
    prefectures: ["Tokyo", "Kanagawa", "Saitama", "Gunma"],
    highlight: true,
  },
  {
    name: "Kansai",
    hub: "Osaka / Hyogo",
    prefectures: ["Osaka", "Hyogo", "Kyoto", "Shiga"],
    highlight: true,
  },
  {
    name: "Kyushu",
    hub: "Fukuoka",
    prefectures: ["Fukuoka", "Kumamoto", "Oita", "Nagasaki"],
  },
  {
    name: "Hokuriku / Shinetsu",
    hub: "Toyama / Niigata",
    prefectures: ["Toyama", "Ishikawa", "Niigata", "Nagano"],
  },
  {
    name: "Tohoku",
    hub: "Miyagi / Iwate",
    prefectures: ["Miyagi", "Iwate", "Yamagata", "Fukushima"],
  },
];

const STRENGTHS = [
  "Dedicated coordinators placed in every major manufacturing hub",
  "Deep knowledge of regional labour markets and local hiring norms",
  "Consistent service quality across all locations, backed by HQ",
  "Dormitory arrangements, housing support, and commute assistance available",
];

export function NationwideSupportSection() {
  const { ref, inView } = useInView({ once: true });
  const prefersReducedMotion = useReducedMotion();

  const container = safeVariant(staggerContainer, prefersReducedMotion);
  const item = safeVariant(fadeInUp, prefersReducedMotion);
  const leftItem = safeVariant(fadeInLeft, prefersReducedMotion);
  const rightItem = safeVariant(fadeInRight, prefersReducedMotion);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="nationwide-heading"
      className="bg-neutral-50 section-padding"
    >
      <div className="content-max px-4 sm:px-6 lg:px-8">
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
            Nationwide Coverage
          </motion.p>
          <motion.h2
            id="nationwide-heading"
            variants={item}
            className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight"
          >
            Coverage Across Japan&apos;s Manufacturing Hubs
          </motion.h2>
          <motion.p variants={item} className="mt-4 text-neutral-600 leading-relaxed">
            With offices in every major industrial region, we deliver locally rooted
            staffing support at a national scale.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Region grid */}
          <motion.div
            variants={leftItem}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {REGIONS.map((region) => (
              <div
                key={region.name}
                className={`rounded-xl border p-5 transition-shadow hover:shadow-md ${
                  region.highlight
                    ? "border-navy-200 bg-white"
                    : "border-neutral-200 bg-neutral-50/80"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin
                    size={14}
                    strokeWidth={2}
                    className={region.highlight ? "text-amber-500" : "text-neutral-400"}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-bold text-navy-950">{region.name}</span>
                  {region.highlight && (
                    <span className="ml-auto text-[9px] font-semibold uppercase tracking-wide text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
                      Key Hub
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-neutral-400 mb-2">Hub: {region.hub}</p>
                <div className="flex flex-wrap gap-1">
                  {region.prefectures.map((pref) => (
                    <span
                      key={pref}
                      className="text-[10px] text-neutral-600 bg-neutral-100 rounded px-1.5 py-0.5"
                    >
                      {pref}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Strengths panel */}
          <motion.div
            variants={rightItem}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="rounded-2xl bg-navy-950 p-8 lg:p-10">
              <h3 className="text-xl font-bold text-white mb-2">
                Local Expertise × National Network
              </h3>
              <p className="text-sm text-white/60 mb-8 leading-relaxed">
                Regional specialists who know the local market deliver
                bespoke workforce solutions tailored to your exact needs.
              </p>

              <ul className="space-y-4">
                {STRENGTHS.map((strength) => (
                  <li key={strength} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-amber-400 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-white/80 leading-relaxed">{strength}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-[11px] text-white/30 mb-1">Coverage</p>
                <p className="text-3xl font-extrabold text-white">
                  47
                  <span className="text-lg font-semibold text-white/60 ml-1">prefectures</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
