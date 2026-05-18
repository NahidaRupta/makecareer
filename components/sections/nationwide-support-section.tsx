"use client";

import type React from "react";
import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Layers, BadgeCheck } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { safeVariant, staggerContainer, fadeInUp } from "@/lib/motion/variants";

export function NationwideSupportSection() {
  const { ref, inView } = useInView({ once: true, rootMargin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = safeVariant(staggerContainer, prefersReducedMotion);
  const itemVariants = safeVariant(fadeInUp, prefersReducedMotion);

  // Custom Framer Motion settings for the legal document vector animation
  const documentStackVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.12 } 
    }
  } as const;;

  const leafPageVariants = {
    hidden: { opacity: 0, y: 15, rotate: 0 },
    visible: { opacity: 1, y: 0, rotate: -6, transition: { duration: 0.4 } }
  };

  const centerPageVariants = {
    hidden: { opacity: 0, y: 15, rotate: 0 },
    visible: { opacity: 1, y: 0, rotate: 6, transition: { duration: 0.4 } }
  };

  const mainPageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const pencilVariants = {
    hidden: { opacity: 0, x: 30, y: 30, scale: 0.6 },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      scale: 1,
      transition: { delay: 0.6, duration: 0.5, type: "spring", stiffness: 120 } 
    }
  } as const;;

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-slate-50/50 py-20 text-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          
          {/* 1. LEFT CONTAINER: Experience and Success Rate */}
          <motion.div
            variants={itemVariants}
            whileHover={prefersReducedMotion ? {} : { y: -4 }}
            className="lg:col-span-4 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/60 shadow-xs flex flex-col items-center text-center justify-center min-h-[400px]"
          >
            <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 mb-8 shrink-0">
              <BadgeCheck className="w-10 h-10" strokeWidth={1.5} />
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4 leading-tight">
              Experience and Success Rate
            </h3>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xs font-normal">
              Our extensive experience and impressive success rate speak for themselves. We have a proven track record of delivering outstanding results that pave the way for a bright future in Japan.
            </p>
          </motion.div>

          {/* 2. RIGHT CONTAINER: Environmental Image Feature */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-8 relative rounded-3xl overflow-hidden min-h-[400px] group border border-slate-200/40 shadow-sm"
          >
            <img
              src="/images/nation.png"
              alt="Successful placement regional landscapes in Japan"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
            
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12 flex flex-col justify-end text-left max-w-3xl">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tight leading-tight">
                Successful Experiences
              </h3>
              <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed font-normal">
                Many students and professionals, especially from Bangladesh, have successfully transformed their lives through our services. Their stories of achievement and growth are a testament to our commitment and expertise.
              </p>
            </div>
          </motion.div>

          {/* 3. LOWER LEFT CONTAINER: Legal and Reliable Processes Banner (WITH INTERACTIVE VECTOR POP-UP) */}
          <motion.div
            variants={itemVariants}
            whileHover={prefersReducedMotion ? {} : { y: -4 }}
            className="lg:col-span-7 bg-emerald-900 text-white rounded-3xl p-8 sm:p-12 shadow-md shadow-emerald-950/5 border border-emerald-800 flex flex-col items-center text-center justify-center min-h-[400px]"
          >
            
            {/* ── CUSTOM PURE VECTOR DOCUMENT STACK ANIMATION ── */}
            <motion.div 
              className="relative w-32 h-32 flex items-center justify-center mb-6 shrink-0"
              variants={documentStackVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {/* Outer Circular Light Teal Container Base */}
              <div className="absolute inset-0 rounded-full bg-emerald-500/20 border border-emerald-400/20 backdrop-blur-xs scale-95" />
              <div className="absolute w-20 h-20 rounded-full bg-teal-200/90 flex items-center justify-center shadow-inner" />

              {/* Document Sheet 1 (Left Angled Layer) */}
              <motion.div 
                variants={leafPageVariants}
                className="absolute w-11 h-14 bg-white/95 rounded-sm shadow-sm p-1.5 flex flex-col justify-between origin-bottom-left"
              >
                <div className="w-5 h-1.5 bg-slate-200 rounded-xs" />
                <div className="space-y-1 my-auto">
                  <div className="w-full h-0.5 bg-slate-100 rounded-xs" />
                  <div className="w-full h-0.5 bg-slate-100 rounded-xs" />
                  <div className="w-4/5 h-0.5 bg-slate-100 rounded-xs" />
                </div>
                <div className="w-2 h-2 rounded-full bg-slate-200 ml-auto" />
              </motion.div>

              {/* Document Sheet 2 (Right Angled Layer) */}
              <motion.div 
                variants={centerPageVariants}
                className="absolute w-11 h-14 bg-white/95 rounded-sm shadow-sm p-1.5 flex flex-col justify-between origin-bottom-right"
              >
                <div className="w-4 h-1.5 bg-slate-200 rounded-xs" />
                <div className="space-y-1 my-auto">
                  <div className="w-full h-0.5 bg-slate-100 rounded-xs" />
                  <div className="w-full h-0.5 bg-slate-100 rounded-xs" />
                  <div className="w-full h-0.5 bg-slate-100 rounded-xs" />
                </div>
                <div className="w-2 h-2 rounded-full bg-slate-200" />
              </motion.div>

              {/* Main Front Document Sheet (With Smile Vector Badge) */}
              <motion.div 
                variants={mainPageVariants}
                className="absolute w-12 h-15 bg-white rounded-xs shadow-md p-2 flex flex-col justify-between z-10 border border-white"
              >
                {/* Yellow Smile Emblem */}
                <div className="w-4 h-4 rounded-full bg-amber-400 flex items-center justify-center mx-auto mb-1 shadow-2xs">
                  <span className="text-[9px] text-slate-800 font-bold leading-none select-none">☺</span>
                </div>
                {/* Dynamic Alignment Rows */}
                <div className="space-y-1 flex-1 flex flex-col justify-center">
                  <div className="w-full h-0.5 bg-slate-300 rounded-xs" />
                  <div className="w-full h-0.5 bg-slate-300 rounded-xs" />
                  <div className="w-full h-0.5 bg-slate-300 rounded-xs" />
                  <div className="w-3/4 h-0.5 bg-slate-300 rounded-xs" />
                </div>
                <div className="flex justify-between items-center mt-1">
                  <div className="w-3 h-1 bg-slate-200 rounded-xs" />
                  <div className="w-3 h-1 bg-slate-200 rounded-xs" />
                </div>
              </motion.div>

              {/* Dynamic Overlay Pencil Vector (Pops into placement) */}
              <motion.div 
                variants={pencilVariants}
                className="absolute w-12 h-2.5 z-20 origin-center rotate-[-35deg] translate-x-2 translate-y-3 filter drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)]"
              >
                <div className="relative w-full h-full bg-slate-800 rounded-xs flex items-center overflow-hidden">
                  {/* Lead tip point */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-amber-200 [clip-path:polygon(100%_0,0_50%,100%_100%)] flex items-center">
                    <div className="w-0.5 h-0.5 bg-slate-900 rounded-full" />
                  </div>
                  {/* Metallic back ring */}
                  <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-amber-500" />
                </div>
              </motion.div>
            </motion.div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4 leading-tight">
              Legal and Reliable Processes
            </h3>
            <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed max-w-xl font-normal">
              We adhere strictly to legal standards and follow reliable, transparent processes at every step. This ensures that your transition is smooth, secure, and compliant with all regulations.
            </p>
          </motion.div>

          {/* 4. LOWER RIGHT CONTAINER: All in One Solution */}
          <motion.div
            variants={itemVariants}
            whileHover={prefersReducedMotion ? {} : { y: -4 }}
            className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/60 shadow-xs flex flex-col items-center text-center justify-center min-h-[400px]"
          >
            <div className="w-20 h-20 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 mb-8 shrink-0 shadow-xs">
              <Layers className="w-10 h-10" strokeWidth={1.5} />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4 leading-tight">
              All in One Solution
            </h3>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-sm font-normal">
              Our all-in-one solution is a comprehensive, streamlined service designed to cover every aspect of your journey to success in Japan. We integrate expert guidance, legal compliance, and personalized support.
            </p>
          </motion.div>

        </motion.div>

        

      </div>
    </section>
  );
}