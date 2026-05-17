"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { User, ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { safeVariant, staggerContainer, fadeInUp } from "@/lib/motion/variants";

interface CaseStudy {
  slug: string;
  name: string;
  profession: string;
  companyName: string;
  challenge: string;
  solution: string;
  stat: string;
  statLabel: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "language-mastery-success",
    name: "Sarah Tabassum",
    profession: "HR Director",
    companyName: "TechGlobal Inc.",
    challenge: "As an international student, mastering Japanese was a major challenge until I found Sadiatec.",
    solution: "Their tailored language programs not only helped me become fluent but also boosted my confidence in everyday interactions. The supportive instructors and engaging classes made learning enjoyable and effective. Today, I feel fully equipped to navigate both academic and social settings in Japan, all thanks to Sadiatec's dedicated language training.",
    stat: "100%",
    statLabel: "Fluency & confidence achieved",
  },
  {
    slug: "japanese-market-transition",
    name: "Ahmed Shubo",
    profession: "CTO",
    companyName: "InnovateX",
    challenge: "Transitioning to the Japanese job market seemed daunting at first, but Sadiatec turned my uncertainties into clear, actionable steps.",
    solution: "Their career counseling and placement assistance connected me with opportunities that matched my skills and aspirations. With their guidance, I secured a position in my field faster than I ever imagined. The transparent, legal process ensured a smooth transition, and I couldn't be more grateful for their support.",
    stat: "1st",
    statLabel: "Fast-tracked placement match",
  },
  {
    slug: "study-abroad-complexities",
    name: "Mahmud Karim",
    profession: "People Operations Lead",
    companyName: "Startup Ventures",
    challenge: "I approached Sadiatec when I was overwhelmed by the complexities of studying abroad in Japan.",
    solution: "Their comprehensive student planning service addressed every detail—from visa applications to accommodation and cultural integration. The team was professional, empathetic, and incredibly knowledgeable, which made my move seamless and stress-free. Now, I'm thriving academically and socially, and I highly recommend Sadiatec to anyone looking for a reliable all-in-one solution.",
    stat: "100%",
    statLabel: "Seamless onboarding rate",
  },
  {
    slug: "engineering-talent-pipeline",
    name: "Kenji Sato",
    profession: "Operations Manager",
    companyName: "Aichi Auto Systems",
    challenge: "Fluctuating production line scales left critical technical assembly positions completely vacant during high-output seasonal shifts.",
    solution: "Sadiatec rapidly deployed vetted, bilingual engineering professionals within short support windows. This minimized training lead times dramatically and secured our quarterly milestone handoffs with zero baseline downtime.",
    stat: "14 Days",
    statLabel: "Average deployment timeline",
  },
  {
    slug: "global-workforce-onboarding",
    name: "Yuka Tanaka",
    profession: "Global Talent Lead",
    companyName: "Nexus Manufacturing",
    challenge: "Navigating complex legal visa routes and dormitory compliance settings for international hires was causing major operational bottleneck friction.",
    solution: "They took over end-to-end visa filing documentation and provided structured support packages. Our incoming workforce was fully operational, housed, and supported under strict legal compliance frameworks efficiently.",
    stat: "98%",
    statLabel: "Staff retention secured",
  },
];

export function CaseStudiesSection() {
  const { ref, inView } = useInView({ once: true });
  const prefersReducedMotion = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState(2); // Initially centered on Mahmud Karim

  const container = safeVariant(staggerContainer, prefersReducedMotion);
  const item = safeVariant(fadeInUp, prefersReducedMotion);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="cases-heading"
      className="relative overflow-hidden section-padding min-h-212.5 flex flex-col justify-center"
    >
      {/* ── Fixed Parallax Background Container ── */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 [clip-path:inset(0_0_0_0)]">
          <div className="fixed inset-0 w-full h-full">
            <Image
              src="/images/case-study.png"
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              quality={85}
              priority
            />
          </div>
        </div>
        
        {/* Layered high-contrast depth filters */}
        <div className="absolute inset-0 bg-navy-950/65 z-1" />
        <div className="absolute inset-0 bg-linear-to-b from-navy-950/85 via-navy-950/35 to-navy-950/80 z-1" />
        <div className="absolute inset-0 bg-linear-to-r from-navy-950/50 via-transparent to-navy-950/50 z-1" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/40 to-transparent z-1" />
      </div>

      {/* ── Content Wrapper ── */}
      <div className="relative z-10 content-max px-4 sm:px-6 lg:px-8 w-full">
        {/* Centered Headers */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl mb-14 mx-auto text-center"
        >
          <motion.p variants={item} className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
            Case Studies
          </motion.p>
          <motion.h2 id="cases-heading" variants={item} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Client Success Stories
          </motion.h2>
        </motion.div>

        {/* ── Oversized 3D Card Stack Track ── */}
        <div className="relative w-full h-140 flex items-center justify-center my-4">
          {CASE_STUDIES.map((cs, index) => {
            let offset = index - activeIdx;
            
            if (offset < -2) offset += CASE_STUDIES.length;
            if (offset > 2) offset -= CASE_STUDIES.length;

            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            // Adjusted card layout mechanics for the larger card widths
            const xTranslation = offset * 330; 
            const cardScale = isActive ? 1.0 : 0.82;
            const cardZIndex = 10 - Math.abs(offset);
            const cardOpacity = offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.60 : 0.15;

            return (
              <motion.div
                key={cs.slug}
                initial={false}
                animate={{
                  x: xTranslation,
                  scale: cardScale,
                  zIndex: cardZIndex,
                  opacity: cardOpacity,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute w-95 sm:w-105 shrink-0" // Increased card width
              >
                <div
                  className={`group flex flex-col rounded-2xl border p-8 min-h-135 justify-start transition-all duration-300 backdrop-blur-xl ${
                    isActive
                      ? "border-amber-500/60 bg-slate-900/95 shadow-2xl shadow-amber-500/10" // Higher opacity
                      : "border-white/10 bg-slate-950/80 shadow-xl shadow-black/40"
                  }`}
                >
                  {/* User Profile Info Area */}
                  <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                      <User size={22} />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-base font-bold text-white tracking-tight truncate">{cs.name}</h4>
                      <p className="text-sm text-amber-300 font-medium truncate">
                        {cs.profession} <span className="text-white/40 mx-1">•</span> {cs.companyName}
                      </p>
                    </div>
                  </div>

                  {/* Highlighting Metrics Row */}
                  <div className="flex items-center gap-2 mb-6 p-3 rounded-xl bg-navy-950/60 border border-white/5 backdrop-blur-xs">
                    <span className="text-2xl font-black text-amber-400 tabular-nums leading-none ml-1">
                      {cs.stat}
                    </span>
                    <span className="text-xs font-semibold text-white/50 leading-none">
                      {cs.statLabel}
                    </span>
                  </div>

                  {/* Challenge Narrative */}
                  <div className="mb-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400/90 mb-1.5">
                      Challenge
                    </p>
                    <p className="text-sm text-white/80 leading-relaxed font-normal">
                      {cs.challenge}
                    </p>
                  </div>

                  {/* Full Solution Narrative (No line clamps, full text flows naturally) */}
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1.5">
                      Solution
                    </p>
                    <p className="text-sm text-white/80 leading-relaxed font-normal">
                      {cs.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Nav Sliders ── */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all focus:outline-none"
            aria-label="Previous card"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2.5">
            {CASE_STUDIES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIdx ? "w-8 bg-amber-400" : "w-2 bg-white/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all focus:outline-none"
            aria-label="Next card"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}