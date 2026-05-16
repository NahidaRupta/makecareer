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
  { name: "Toyota", industry: "Automotive", src: "/images/logos/toyota.svg" },
  { name: "Denso", industry: "Auto Parts", src: "/images/logos/denso.svg" },
  { name: "Panasonic", industry: "Electronics", src: "/images/logos/panasonic.svg" },
  { name: "Aisin", industry: "Auto Parts", src: "/images/logos/aisin.svg" },
  { name: "Honda", industry: "Automotive", src: "/images/logos/honda.svg" },
  { name: "Canon", industry: "Precision Equipment", src: "/images/logos/canon.svg" },
  { name: "Hitachi", industry: "Electronics", src: "/images/logos/hitachi.svg" },
  { name: "Mitsubishi Electric", industry: "Electronics", src: "/images/logos/mitsubishi.svg" },
];

export function TrustLogosStrip() {
  const { ref, inView } = useInView({ once: true });
  const prefersReducedMotion = useReducedMotion();

  const container = safeVariant(staggerContainer, prefersReducedMotion);
  const item = safeVariant(fadeIn, prefersReducedMotion);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      aria-label="Companies we work with"
      className="bg-neutral-50 border-y border-neutral-100 py-10"
    >
      <div className="content-max px-4 sm:px-6 lg:px-8">
        <motion.p
          variants={item}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8"
        >
          Trusted by Japan&apos;s Leading Manufacturers
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
