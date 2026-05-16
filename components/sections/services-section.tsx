"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Factory, Globe, ClipboardList, ArrowRight } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { safeVariant, staggerContainer, fadeInUp } from "@/lib/motion/variants";
import type { ServiceItem } from "@/types";

type ServiceCard = Omit<ServiceItem, "iconName"> & {
  icon: React.ElementType;
  href: string;
};

const SERVICES: ServiceCard[] = [
  {
    slug: "haken",
    icon: Factory,
    titleJa: "製造業 人材派遣",
    titleEn: "Manufacturing Dispatch",
    descriptionJa:
      "ライン作業・組立・検査など、製造現場に即戦力のスタッフを派遣。短期〜長期まで柔軟に対応します。",
    descriptionEn:
      "Line work, assembly, and inspection — dispatching ready-to-work staff for short to long-term assignments.",
    href: "/services/haken",
  },
  {
    slug: "ukeoi",
    icon: ClipboardList,
    titleJa: "工場請負",
    titleEn: "Factory Outsourcing",
    descriptionJa:
      "製造ラインの一部または全体を請負契約で運営。品質管理・生産管理も含めた一括サポートが可能です。",
    descriptionEn:
      "We operate parts or entire production lines under contract — including quality control and production management.",
    href: "/services/ukeoi",
  },
  {
    slug: "ginoujisshu",
    icon: Globe,
    titleJa: "特定技能・技能実習",
    titleEn: "Specified Skills / Technical Intern",
    descriptionJa:
      "外国人材の受け入れをトータルサポート。ビザ申請から入社後のフォローまで、安心して任せられます。",
    descriptionEn:
      "End-to-end support for accepting foreign workers — from visa applications to post-arrival follow-up.",
    href: "/services/ginoujisshu",
  },
];

const CAROUSEL_IMAGES = [
  "/images/services/service1.png",
  "/images/services/service2.png",
  "/images/services/service3.png",
];

const ROTATE_INTERVAL = 4000;

function ServiceCarousel({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, ROTATE_INTERVAL);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  return (
    <div className="relative w-full h-72 sm:h-96 lg:h-full lg:min-h-120 rounded-3xl overflow-hidden shadow-2xl shadow-navy-950/30">
      {/* Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={CAROUSEL_IMAGES[activeIndex]}
            alt={`Service image ${activeIndex + 1}`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={activeIndex === 0}
            quality={90}
          />
          {/* Bottom gradient for dot readability */}
          <div className="absolute inset-0 bg-linear-to-t from-navy-950/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-10">
        {CAROUSEL_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Show image ${i + 1}`}
            className="relative h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            style={{ width: i === activeIndex ? "2rem" : "0.375rem" }}
          >
            <span
              className={`block h-full w-full rounded-full transition-colors duration-300 ${
                i === activeIndex ? "bg-amber-400" : "bg-white/40"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export function ServicesSection() {
  const { ref, inView } = useInView({ once: true });
  const prefersReducedMotion = useReducedMotion();

  const container = safeVariant(staggerContainer, prefersReducedMotion);
  const item = safeVariant(fadeInUp, prefersReducedMotion);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="services-heading"
      className="bg-white section-padding"
    >
      <div className="content-max px-4 sm:px-6 lg:px-8">
        {/* Section header — full width */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl mb-12"
        >
          <motion.p
            variants={item}
            className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-3"
          >
            Our Services
          </motion.p>
          <motion.h2
            id="services-heading"
            variants={item}
            className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight"
          >
            Our Service Lineup
          </motion.h2>
          <motion.p variants={item} className="mt-4 text-neutral-600 leading-relaxed">
            A full range of workforce solutions tailored to every manufacturing need.
          </motion.p>
        </motion.div>

        {/* Two-column body */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
        >
          {/* Left — image carousel */}
          <motion.div variants={item}>
            <ServiceCarousel prefersReducedMotion={prefersReducedMotion} />
          </motion.div>

          {/* Right — service cards */}
          <div className="flex flex-col gap-4">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              const isFeatured = index === 0;

              return (
                <motion.div key={service.slug} variants={item}>
                  <Link
                    href={{ pathname: service.href }}
                    className={`group flex flex-col h-full rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(10,22,40,0.1)] ${
                      isFeatured
                        ? "bg-navy-950 border-navy-800"
                        : "bg-white border-neutral-200"
                    }`}
                  >
                    <div className="flex items-start gap-5 p-6">
                      {/* Icon */}
                      <div
                        className={`shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                          isFeatured
                            ? "bg-amber-500/20 text-amber-400 group-hover:bg-amber-500/30"
                            : "bg-navy-50 text-navy-500 group-hover:bg-navy-500 group-hover:text-white"
                        }`}
                      >
                        <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`text-base font-bold leading-snug mb-2.5 ${
                            isFeatured ? "text-white" : "text-navy-950"
                          }`}
                        >
                          {service.titleEn}
                        </h3>
                        <p
                          className={`text-sm leading-relaxed ${
                            isFeatured ? "text-white/70" : "text-neutral-600"
                          }`}
                        >
                          {service.descriptionEn}
                        </p>

                        <div
                          className={`mt-4 flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                            isFeatured
                              ? "text-amber-400 group-hover:text-amber-300"
                              : "text-navy-500 group-hover:text-navy-700"
                          }`}
                        >
                          Learn more
                          <ArrowRight
                            size={13}
                            strokeWidth={2}
                            className="transition-transform group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          variants={item}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 flex justify-center"
        >
          <Link
            href={{ pathname: "/services" }}
            className="inline-flex items-center gap-2 rounded-lg border border-navy-200 bg-navy-50 px-6 py-3 text-sm font-semibold text-navy-600 transition-all hover:bg-navy-100 hover:text-navy-700"
          >
            View all services
            <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
