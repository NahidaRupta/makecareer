"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useInView } from "@/lib/hooks/use-in-view";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { safeVariant, staggerContainer, fadeIn } from "@/lib/motion/variants";

interface LogoItem {
  name: string;
  industry: string;
  src: string;
}

const LOGOS: LogoItem[] = [
  { name: "トヨタ自動車", industry: "自動車", src: "/images/logos/toyota.svg" },
  { name: "デンソー", industry: "電装部品", src: "/images/logos/denso.svg" },
  { name: "パナソニック", industry: "電機", src: "/images/logos/panasonic.svg" },
  { name: "アイシン", industry: "自動車部品", src: "/images/logos/aisin.svg" },
  { name: "ホンダ", industry: "自動車", src: "/images/logos/honda.svg" },
  { name: "キヤノン", industry: "精密機器", src: "/images/logos/canon.svg" },
  { name: "日立製作所", industry: "電機", src: "/images/logos/hitachi.svg" },
  { name: "三菱電機", industry: "電機", src: "/images/logos/mitsubishi.svg" },
];

export function TrustLogosStrip() {
  const { ref, inView } = useInView({ once: true });
  const prefersReducedMotion = useReducedMotion();

  const container = safeVariant(staggerContainer, prefersReducedMotion);
  const item = safeVariant(fadeIn, prefersReducedMotion);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      aria-label="取引実績企業"
      className="bg-neutral-50 border-y border-neutral-100 py-10"
    >
      <div className="content-max px-4 sm:px-6 lg:px-8">
        <motion.p
          variants={item}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8"
        >
          全国の製造業大手・中堅企業をサポート
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6"
        >
          {LOGOS.map((logo) => (
            <motion.div
              key={logo.name}
              variants={item}
              className="group flex flex-col items-center gap-1.5"
            >
              <div
                className="h-10 w-28 rounded-md bg-neutral-200/60 flex items-center justify-center overflow-hidden transition-opacity group-hover:opacity-80"
              >
                {/* Replace with real logo once assets are ready */}
                <span className="text-xs font-semibold text-neutral-500 px-2 text-center leading-tight">
                  {logo.name}
                </span>
              </div>
              <span className="text-[10px] text-neutral-400">{logo.industry}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
