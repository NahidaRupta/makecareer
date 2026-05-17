"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer, safeVariant } from "@/lib/motion/variants";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const container = safeVariant(staggerContainer, prefersReducedMotion);
  const item = safeVariant(fadeInUp, prefersReducedMotion);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh items-start overflow-hidden bg-navy-950"
    >
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-br from-navy-950 via-navy-800 to-navy-700"
      />
      {/* Factory image overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/images/hero/hero.png')] bg-cover bg-center opacity-20 mix-blend-luminosity"
      />
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-225 h-225 rounded-full bg-navy-500/20 blur-[120px] pointer-events-none"
      />

      {/* Content */}
      <div className="content-max relative w-full px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Headline */}
          <motion.h1
            id="hero-heading"
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-amber-400 leading-[1.1]"
          >
            Study and Work -
            <br />
            <span className="text-white">Navigating to connect Human Resources</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg text-white/70 leading-relaxed"
          >
            SadiaTec is one of the Japan's largest comprehensive human resources companies,
            leveraging its extensive track record. We offer a variety of solutions to our customers.
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href={{ pathname: "/contact" }}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-amber-500/30 transition-all hover:bg-amber-600 hover:shadow-amber-500/40 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
            >
              Get Started
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </Link>
            <Link
              href={{ pathname: "/jobs" }}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Stats Section: Placed horizontally under CTA row */}
          <motion.div
            variants={item}
            className="mt-14 flex flex-wrap gap-x-12 gap-y-4 text-left"
          >
            {[
              { label: "Clients Served", value: "5,00+" },
              { label: "Permit Granted", value: "100%" },
              { label: "Support", value: "24/7" },
            ].map(({ label, value }) => (
              <div key={label} className="space-y-0.5">
                <p className="text-3xl font-bold text-white tracking-tight">
                  {value}
                </p>
                <p className="text-sm font-medium text-white/50">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Desktop floating keyword tags: Custom staggered rows (2 -> 3 -> 4) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          aria-hidden="true"
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-end gap-3 max-w-xl"
        >
          {/* Row 1: 2 Tags */}
          <div className="flex gap-3 justify-end">
            {["Human Resource", "Study Permit"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/40 bg-white/5 backdrop-blur-sm px-5 py-2 text-sm text-white/90 shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white/10 hover:border-white/60 whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Row 2: 3 Tags */}
          <div className="flex gap-3 justify-end">
            {["Student Program", "Scholarship", "Language Training"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/40 bg-white/5 backdrop-blur-sm px-5 py-2 text-sm text-white/90 shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white/10 hover:border-white/60 whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Row 3: 4 Tags */}
          <div className="flex gap-3 justify-end">
            {["SDC", "Work in Japan", "Future", "Global"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/40 bg-white/5 backdrop-blur-sm px-5 py-2 text-sm text-white/90 shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white/10 hover:border-white/60 whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-xs text-white/30 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="h-5 w-px bg-linear-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}