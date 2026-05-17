"use client";

import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "@/lib/hooks/use-in-view";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { safeVariant, fadeIn } from "@/lib/motion/variants";

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
  const item = safeVariant(fadeIn, prefersReducedMotion);

  // We duplicate the list once to ensure a perfect, seamless loop visual track
  const duplicatedLogos = [...LOGOS, ...LOGOS];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      aria-label="Companies we work with"
      className="bg-neutral-50 border-y border-neutral-100 py-10 overflow-hidden"
    >
      <div className="w-full">
        <motion.p
          variants={item}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8"
        >
          Partners & Certifications
        </motion.p>

        {/* Outer view mask panel */}
        <div className="relative max-w-[70%] mx-auto overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-linear-to-r before:from-neutral-50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-neutral-50 after:to-transparent">
          
          {/* Animated Marquee Core Track */}
          <div className="flex w-max gap-12 animate-marquee hover:[animation-play-state:paused]">
            {duplicatedLogos.map((logo, idx) => (
              <div
                key={`${logo.name}-${idx}`}
                className="group flex flex-col items-center gap-1.5 shrink-0"
              >
                <div className="h-12 w-32 rounded-md bg-white border border-neutral-200/80 flex items-center justify-center overflow-hidden transition-all shadow-xs group-hover:border-neutral-300 relative px-3 py-2">

                  {/* CHANGED: Replaced the <span> with an <Image /> component */}
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    fill
                    className="object-contain p-2 transition-transform duration-200 group-hover:scale-105"
                    sizes="128px"
                  />

                </div>
                <span className="text-[10px] text-neutral-400 tracking-wide font-medium">
                  {logo.industry}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}