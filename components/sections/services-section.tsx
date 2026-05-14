"use client";

import type React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Factory,
  Wrench,
  ClipboardList,
  Globe,
  Truck,
  ArrowRight,
} from "lucide-react";
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
  {
    slug: "maintenance",
    icon: Wrench,
    titleJa: "設備メンテナンス人材",
    titleEn: "Maintenance Staffing",
    descriptionJa:
      "設備保全・電気・機械メンテナンスに特化したスタッフを提供。生産設備の安定稼働を支えます。",
    descriptionEn:
      "Specialist staff for equipment maintenance, electrical, and mechanical work — keeping your lines stable.",
    href: "/services/maintenance",
  },
  {
    slug: "butsuryu",
    icon: Truck,
    titleJa: "物流・倉庫作業",
    titleEn: "Logistics & Warehousing",
    descriptionJa:
      "ピッキング・梱包・在庫管理など物流・倉庫業務に対応したスタッフを派遣。繁忙期の変動にも対応します。",
    descriptionEn:
      "Picking, packing, and inventory staff for logistics and warehouse operations — scalable for peak periods.",
    href: "/services/butsuryu",
  },
];

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
        {/* Section header */}
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
            サービス一覧
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-4 text-neutral-600 leading-relaxed"
          >
            製造業に関わるあらゆる人材ニーズに対応する、
            MakeCareerのサービスをご紹介します。
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = index === 0;

            return (
              <motion.div key={service.slug} variants={item}>
                <Link
                  href={{ pathname: service.href }}
                  className={`group flex flex-col h-full rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(10,22,40,0.1)] ${
                    isFeatured
                      ? "bg-navy-950 border-navy-800"
                      : "bg-white border-neutral-200"
                  }`}
                >
                  <div className="flex flex-col flex-1 p-7">
                    {/* Icon */}
                    <div
                      className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                        isFeatured
                          ? "bg-amber-500/20 text-amber-400 group-hover:bg-amber-500/30"
                          : "bg-navy-50 text-navy-500 group-hover:bg-navy-500 group-hover:text-white"
                      }`}
                    >
                      <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-base font-bold leading-snug mb-1 ${
                        isFeatured ? "text-white" : "text-navy-950"
                      }`}
                    >
                      {service.titleJa}
                    </h3>
                    <p
                      className={`text-xs font-medium mb-3 ${
                        isFeatured ? "text-amber-400/70" : "text-neutral-400"
                      }`}
                    >
                      {service.titleEn}
                    </p>

                    {/* Description */}
                    <p
                      className={`text-sm leading-relaxed flex-1 ${
                        isFeatured ? "text-white/70" : "text-neutral-600"
                      }`}
                    >
                      {service.descriptionJa}
                    </p>

                    {/* CTA link */}
                    <div
                      className={`mt-6 flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                        isFeatured
                          ? "text-amber-400 group-hover:text-amber-300"
                          : "text-navy-500 group-hover:text-navy-700"
                      }`}
                    >
                      詳しく見る
                      <ArrowRight
                        size={14}
                        strokeWidth={2}
                        className="transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
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
            すべてのサービスを見る
            <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
