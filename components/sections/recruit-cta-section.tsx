"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, CheckCircle, Search, UserCheck } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { safeVariant, staggerContainer, fadeInUp } from "@/lib/motion/variants";

// Clean data structural mapping parsed from your latest job openings image
const OPENINGS_DATA = [
  {
    title: "Senior Software Engineer",
    isUrgent: true,
    meta: [
      { label: "Company", value: "Tech Corp" },
      { label: "Location", value: "Remote" },
      { label: "Salary", value: "$120k - $150k" },
    ],
    posted: "2024-02-15",
  },
  {
    title: "Product Manager",
    isUrgent: true,
    meta: [
      { label: "Company", value: "Innovation Labs" },
      { label: "Location", value: "Tokyo, Japan" },
      { label: "Salary", value: "$100k - $130k" },
    ],
    posted: "2024-02-14",
  },
  {
    title: "UX Designer",
    isUrgent: false,
    meta: [
      { label: "Company", value: "Creative Minds" },
      { label: "Location", value: "Osaka, Japan" },
      { label: "Salary", value: "$90k - $115k" },
    ],
    posted: "2024-02-10",
  },
];

// Structural mapping parsed from the multi-step pipeline image row
const PROCESS_STEPS = [
  {
    num: "1",
    icon: Search,
    title: "Application Process",
    desc: "We start by guiding you through our straightforward application process, designed to capture your unique needs and qualifications. Our team is available to assist you from the very first step.",
  },
  {
    num: "2",
    icon: FileText,
    title: "Required Documents",
    desc: "A clear list of all necessary documents will be provided to ensure that your application is complete and accurate. We help you gather and verify every document, so you never miss a detail.",
  },
  {
    num: "3",
    icon: UserCheck,
    title: "Interview and Screening Process",
    desc: "Once your application is submitted, we conduct through interviews and screening sessions. This process is designed to understand your profile better and match the best opportunities available in Japan.",
  },
];

// Split the zigzag images into left and right side configurations
const LEFT_ZIGZAG = [
  {
    src: "/images/services/job.jpg",
    alt: "Manufacturing dispatch workplace",
    fromLeft: true,
    yShift: "top-[15%]",
    rotate: "-4deg",
    floatDelay: 0.8,
  },
  {
    src: "/images/services/service3.png",
    alt: "Factory outsourcing workplace",
    fromLeft: true,
    yShift: "top-[50%]",
    rotate: "3deg",
    floatDelay: 1.2,
  },
];

const RIGHT_ZIGZAG = [
  {
    src: "/images/services/job2.jpeg",
    alt: "Specified Skills foreign worker support",
    fromLeft: false,
    yShift: "top-[20%]",
    rotate: "4deg",
    floatDelay: 1.0,
  },
  {
    src: "/images/services/service1.png", // Reusing a placeholder to make it 2 images on the right
    alt: "Global career integration workspace",
    fromLeft: false,
    yShift: "top-[55%]",
    rotate: "-3deg",
    floatDelay: 1.4,
  },
];

export function RecruitCtaSection() {
  const { ref, inView } = useInView({ once: true });
  const prefersReducedMotion = useReducedMotion();

  const container = safeVariant(staggerContainer, prefersReducedMotion);
  const item = safeVariant(fadeInUp, prefersReducedMotion);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="recruit-cta-heading"
      className="relative overflow-hidden bg-amber-500 py-16 lg:py-24"
    >
      {/* ── Background Decoration Layer (Retained & Untouched) ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-br from-amber-400 via-amber-500 to-amber-600"
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none"
      />

      {/* ── Left Side Floating Images (Desktop only) ── */}
      <div className="hidden xl:block absolute left-4 top-0 bottom-0 w-48 pointer-events-none z-10">
        {LEFT_ZIGZAG.map((img, i) => (
          <motion.div
            key={`left-${i}`}
            className={`absolute left-0 ${img.yShift}`}
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, delay: i * 0.25, ease: "easeOut" }}
          >
            <motion.div
              animate={inView && !prefersReducedMotion ? { y: [0, -10, 0] } : { y: 0 }}
              transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: img.floatDelay }}
              style={{ rotate: img.rotate }}
              className="overflow-hidden rounded-2xl ring-2 ring-white/25 shadow-xl shadow-amber-950/40"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={160}
                height={120}
                className="w-40 h-28 object-cover"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ── Right Side Floating Images (Desktop only) ── */}
      <div className="hidden xl:block absolute right-4 top-0 bottom-0 w-48 pointer-events-none z-10">
        {RIGHT_ZIGZAG.map((img, i) => (
          <motion.div
            key={`right-${i}`}
            className={`absolute right-0 ${img.yShift}`}
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: i * 0.25, ease: "easeOut" }}
          >
            <motion.div
              animate={inView && !prefersReducedMotion ? { y: [0, -10, 0] } : { y: 0 }}
              transition={{ duration: 4.2 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: img.floatDelay }}
              style={{ rotate: img.rotate }}
              className="overflow-hidden rounded-2xl ring-2 ring-white/25 shadow-xl shadow-amber-950/40"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={160}
                height={120}
                className="w-40 h-28 object-cover"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ── Main Layout Content Container ── */}
      <div className="content-max relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-20">
        
        {/* ── PART 1: HEADLINE SECTION ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.p
            variants={item}
            className="text-xs font-bold uppercase tracking-widest text-white/80 mb-3"
          >
            Opportunities
          </motion.p>
          <motion.h2
            id="recruit-cta-heading"
            variants={item}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Our Latest Openings
          </motion.h2>
        </motion.div>

        {/* ── PART 2: THE JOB CARD GRID WITH AMBER BRAND HARMONIZATION ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {OPENINGS_DATA.map((job, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl shadow-amber-950/10 flex flex-col justify-between text-left border border-white/20 transition-all hover:-translate-y-1"
            >
              <div>
                <span
                  className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-4 ${
                    job.isUrgent
                      ? "bg-rose-500 text-white"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {job.isUrgent ? "Urgent" : "Standard"}
                </span>
                
                <h3 className="text-xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  {job.title}
                </h3>

                <div className="space-y-2 text-sm text-slate-600 mb-8">
                  {job.meta.map((m, mIdx) => (
                    <p key={mIdx}>
                      <span className="font-semibold text-slate-400 mr-1">{m.label}:</span>
                      {m.value}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-400 font-medium">
                  Posted: {job.posted}
                </span>
                <Link
                  href={{ pathname: "/apply" }}
                  className="inline-flex items-center justify-center bg-amber-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors shadow-sm"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── PART 3: RECRUITMENT FLOW SECTION BRAND INTEGRATION ── */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm backdrop-blur-xs">
            <span className="p-1 bg-white text-amber-600 rounded-md shadow-xs">
              <CheckCircle size={14} strokeWidth={2.5} />
            </span>
            Recruitment Process
          </div>
        </div>

        {/* Horizontal Timeline Array */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left mb-20"
        >
          {PROCESS_STEPS.map((step, sIdx) => {
            const StepIcon = step.icon;
            return (
              <motion.div key={sIdx} variants={item} className="relative group">
                <div className="flex items-center mb-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white text-amber-600 font-extrabold text-base shadow-md group-hover:scale-105 transition-transform shrink-0 z-10">
                    {step.num}
                  </div>
                  {sIdx < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:block w-full h-[2px] bg-white/30 ml-4 rounded-full" />
                  )}
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <StepIcon size={18} className="text-white/80 shrink-0" />
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {step.title}
                  </h4>
                </div>
                
                <p className="text-sm text-white/80 leading-relaxed max-w-sm">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── PART 4: MOBILE ONLY IMAGES LIST (Hidden on Desktop viewports) ── */}
        <div
          className="mt-12 mb-6 flex xl:hidden items-center justify-center gap-4 sm:gap-6"
          aria-hidden="true"
        >
          {[LEFT_ZIGZAG[0], RIGHT_ZIGZAG[0]].map((img, i) => (
            <div key={`mobile-${i}`} style={{ rotate: img.rotate }} className="overflow-hidden rounded-xl ring-2 ring-white/25 shadow-lg w-32 h-24 relative">
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* ── PART 5: CONTACT TRANSITION BANNER STRIP ── */}
        <motion.div
          variants={item}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <div className="text-left">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-1">
              Have questions regarding application pipelines?
            </p>
            <h3 className="text-xl font-extrabold text-white tracking-tight">
              Get detailed advice on your profile match parameters
            </h3>
          </div>
          <Link
            href={{ pathname: "/contact" }}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white hover:bg-slate-800 transition-colors shadow-lg"
          >
            Get in Touch
            <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}