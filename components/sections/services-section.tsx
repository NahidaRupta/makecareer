"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { safeVariant, staggerContainer, fadeInUp } from "@/lib/motion/variants";
import type { ServiceItem } from "@/types";

type ServiceCard = Omit<ServiceItem, "iconName" | "titleJa" | "descriptionJa"> & {
  category: string;
  href: string;
  titleJa?: string;       // The "?" marks these as safe and optional 
  descriptionJa?: string; // so the compiler stops throwing errors
};

// 1. Array expanded to 5 items with content matching image_1a63ca.png
const SERVICES: ServiceCard[] = [
  {
    slug: "student-visa",
    category: "Student Visa Assistance",
    titleEn: "We guide you through the entire process of applying for a student visa.",
    descriptionEn: "This includes securing admission to renowned universities or vocational schools in Japan, arranging suitable accommodation, and ensuring all necessary documentation is completed accurately. Our personalized approach helps you focus on your studies while we take care of the logistics.",
    href: "/services/student-visa",
  },
  {
    slug: "ssw-titp",
    category: "SSW & Technical Internship (TITP) Support",
    titleEn: "Our program is designed to match you with excellent job placement opportunities",
    descriptionEn: "under the SSW and TITP frameworks. We assist in every step of the work permit processing, ensuring that you are well-prepared for a successful internship or technical training experience in Japan. This support includes resume building, interview preparation, and ongoing mentorship throughout your placement.",
    href: "/services/ssw-titp",
  },
  {
    slug: "employment-opportunities",
    category: "Employment Opportunities",
    titleEn: "We provide tailored job matching services",
    descriptionEn: "that connect you with both full-time and part-time employment opportunities across diverse sectors such as restaurants, agriculture, factories, and construction. Our deep network with industry partners ensures you find a role that aligns with your skills, career goals, and lifestyle preferences.",
    href: "/services/employment-opportunities",
  },
  {
    slug: "visa-processing",
    category: "Visa Processing & Consultation",
    titleEn: "Navigating Japan's visa regulations can be complex.",
    descriptionEn: "Our dedicated team offers expert guidance in obtaining your Certificate of Eligibility (COE) and managing visa extensions. We simplify the paperwork and procedures, offering consultations that clarify your options and streamline your application process to ensure compliance with immigration policies.",
    href: "/services/visa-processing",
  },
  {
    slug: "language-training",
    category: "Japanese Language & Cultural Training",
    titleEn: "Comprehensive tailored language courses",
    descriptionEn: "that equip you with essential Japanese communication skills. Our cultural training programs provide valuable insights into Japanese customs, traditions, and everyday living, ensuring you are well-prepared to integrate into society and make the most of your experience in Japan.",
    href: "/services/language-training",
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
    <div className="relative w-full h-full min-h-95 rounded-2xl overflow-hidden shadow-md">
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
            sizes="(max-width: 1024px) 100vw, 33vw"
            priority={activeIndex === 0}
            quality={90}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Circle dot controllers */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-10">
        {CAROUSEL_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Show image ${i + 1}`}
            className="relative transition-all duration-300 focus-visible:outline-none"
            style={{ width: i === activeIndex ? "1.5rem" : "0.5rem", height: "0.5rem" }}
          >
            <span
              className={`block h-full w-full rounded-full transition-colors duration-300 ${
                i === activeIndex ? "bg-red-500" : "bg-white/60"
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

  // Custom animation configurations for the cards popping forward from the background
  const cardAnimationVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,          // Starts slightly lower
      scale: 0.96     // Starts slightly scaled down (giving the background reveal look)
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14,
        mass: 0.8
      }
    }
  }as const;

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="services-heading"
      className="bg-[#fcfdfa] section-padding overflow-hidden relative"
    >
      {/* Soft background glow decoration rings */}
      <div className="absolute left-[-10%] top-[20%] w-100 h-100 bg-[#005a43]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-[-5%] top-[40%] w-125 h-125 bg-[#22c55e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="content-max px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-3">
            HR Services
          </p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-semibold text-neutral-800 tracking-tight"
          >
            Our Comprehensive HR Services
          </h2>
        </motion.div>

        {/* Grid Layout Container - Controls the cascading wave delay for children */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15, // Delay between each card's entrance animation
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {SERVICES.map((service, index) => {
            const isFeatured = index === 0;

            return (
              <motion.div 
                key={service.slug} 
                variants={cardAnimationVariants} 
                className="flex h-full"
              >
                <div
                  className={`group flex flex-col justify-between w-full rounded-2xl border p-6 transition-all duration-300 shadow-xs hover:shadow-md ${
                    isFeatured
                      ? "bg-[#005a43] border-[#005a43] text-white"
                      : "bg-white border-neutral-100 text-neutral-800"
                  }`}
                >
                  <div>
                    {/* Tiny category helper label info */}
                    <span
                      className={`text-xs font-medium tracking-wide block mb-4 ${
                        isFeatured ? "text-emerald-300/90" : "text-emerald-600"
                      }`}
                    >
                      {service.category}
                    </span>

                    {/* Main Core Title Content */}
                    <h3 className="text-lg font-bold leading-snug mb-3 tracking-tight">
                      {service.titleEn}
                    </h3>

                    {/* Paragraph Details block */}
                    <p
                      className={`text-sm leading-relaxed font-normal text-pretty ${
                        isFeatured ? "text-white/80" : "text-neutral-500"
                      }`}
                    >
                      {service.descriptionEn}
                    </p>
                  </div>

                  {/* Interactive Button standard link anchor */}
                  <div className="mt-8">
                    <Link
                      href={{ pathname: service.href }}
                      className={`inline-flex items-center justify-center text-sm font-medium px-5 py-2.5 rounded-full border transition-all ${
                        isFeatured
                          ? "border-emerald-700 bg-emerald-950/30 text-white hover:bg-white hover:text-[#005a43]"
                          : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
                      }`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Slot Position #6: The image carousel container matching the spring reveal */}
          <motion.div 
            variants={cardAnimationVariants} 
            className="flex h-full min-h-95"
          >
            <ServiceCarousel prefersReducedMotion={prefersReducedMotion} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}