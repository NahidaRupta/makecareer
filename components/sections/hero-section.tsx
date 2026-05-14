"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { fadeInUp, staggerContainer, safeVariant } from "@/lib/motion/variants";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const container = safeVariant(staggerContainer, prefersReducedMotion);
  const item = safeVariant(fadeInUp, prefersReducedMotion);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh items-center overflow-hidden bg-navy-950"
    >
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-br from-navy-950 via-navy-800 to-navy-700"
      />
      {/* Factory image overlay — swap src once assets are ready */}
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
          {/* Eyebrow badge */}
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-400 mb-6"
          >
            <span
              aria-hidden="true"
              className="block h-1.5 w-1.5 rounded-full bg-amber-400"
            />
            製造業・工場への人材派遣
          </motion.p>

          {/* Headline */}
          <motion.h1
            id="hero-heading"
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            日本のモノづくりを、
            <br />
            <span className="text-amber-400">人材の力</span>で支える。
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg text-white/70 leading-relaxed"
          >
            MakeCareerは製造業・工場に特化した人材派遣会社です。
            <br className="hidden sm:block" />
            即戦力の確保から長期雇用まで、企業様のニーズに応えます。
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
              無料でご相談する
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </Link>
            <Link
              href={{ pathname: "/jobs" }}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              求人を探す
            </Link>
          </motion.div>

          {/* Phone trust signal */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="tel:0120000000"
              className="flex items-center gap-2 text-white/60 hover:text-white/90 transition-colors text-sm"
            >
              <Phone size={14} strokeWidth={1.5} aria-hidden="true" />
              <span>お電話でのご相談：0120-000-000</span>
            </a>
            <span aria-hidden="true" className="h-3.5 w-px bg-white/20" />
            <span className="text-xs text-white/40">平日 9:00〜18:00</span>
          </motion.div>
        </motion.div>

        {/* Desktop stats card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          aria-hidden="true"
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block"
        >
          <div className="relative w-64">
            <div className="absolute inset-0 rounded-2xl bg-white/5 blur-xl" />
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                  <span className="text-amber-400 text-lg font-bold">M</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">MakeCareer</p>
                  <p className="text-white/50 text-xs">製造業特化 人材派遣</p>
                </div>
              </div>
              <div className="space-y-2.5">
                {[
                  { label: "登録スタッフ数", value: "5,000名+" },
                  { label: "取引企業数", value: "200社+" },
                  { label: "就業継続率", value: "92%" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-white/60">{label}</span>
                    <span className="font-semibold text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
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
