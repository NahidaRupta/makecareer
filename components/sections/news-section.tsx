"use client";

import type React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Tag } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { safeVariant, staggerContainer, fadeInUp } from "@/lib/motion/variants";

type NewsCategory = "お知らせ" | "採用情報" | "イベント" | "プレスリリース";

interface NewsItem {
  slug: string;
  date: string;
  dateIso: string;
  category: NewsCategory;
  titleJa: string;
}

const CATEGORY_COLORS: Record<NewsCategory, string> = {
  お知らせ: "bg-navy-100 text-navy-700",
  採用情報: "bg-amber-100 text-amber-700",
  イベント: "bg-emerald-100 text-emerald-700",
  プレスリリース: "bg-neutral-100 text-neutral-600",
};

const NEWS_ITEMS: NewsItem[] = [
  {
    slug: "2025-spring-fair",
    date: "2025年5月10日",
    dateIso: "2025-05-10",
    category: "イベント",
    titleJa: "【5月開催】愛知県 製造業合同就職フェアに出展します",
  },
  {
    slug: "new-office-nagoya",
    date: "2025年4月28日",
    dateIso: "2025-04-28",
    category: "お知らせ",
    titleJa: "名古屋オフィスを移転しました。新住所はこちらをご確認ください。",
  },
  {
    slug: "staff-5000",
    date: "2025年4月15日",
    dateIso: "2025-04-15",
    category: "プレスリリース",
    titleJa: "登録スタッフ数が5,000名を突破しました",
  },
  {
    slug: "toyota-area-jobs",
    date: "2025年4月1日",
    dateIso: "2025-04-01",
    category: "採用情報",
    titleJa: "トヨタ関連工場・豊田市エリアの新着求人を多数掲載中",
  },
  {
    slug: "gw-hours",
    date: "2025年3月25日",
    dateIso: "2025-03-25",
    category: "お知らせ",
    titleJa: "ゴールデンウィーク期間中の営業時間についてのご案内",
  },
];

export function NewsSection() {
  const { ref, inView } = useInView({ once: true });
  const prefersReducedMotion = useReducedMotion();

  const container = safeVariant(staggerContainer, prefersReducedMotion);
  const item = safeVariant(fadeInUp, prefersReducedMotion);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="news-heading"
      className="bg-neutral-50 section-padding"
    >
      <div className="content-max px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row lg:items-start lg:gap-16"
        >
          {/* Left: heading */}
          <motion.div variants={item} className="mb-10 lg:mb-0 lg:w-64 shrink-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-3">
              News &amp; Updates
            </p>
            <h2
              id="news-heading"
              className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight"
            >
              お知らせ
            </h2>
            <p className="mt-4 text-sm text-neutral-500 leading-relaxed">
              MakeCareerの最新情報・
              <br />
              イベント情報をお届けします。
            </p>
            <Link
              href={{ pathname: "/news" }}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600 hover:text-navy-800 transition-colors"
            >
              すべて見る
              <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
            </Link>
          </motion.div>

          {/* Right: news list */}
          <motion.ul
            variants={container}
            className="flex-1 divide-y divide-neutral-200"
            aria-label="ニュース一覧"
          >
            {NEWS_ITEMS.map((news) => {
              const colorClass = CATEGORY_COLORS[news.category];
              return (
                <motion.li key={news.slug} variants={item}>
                  <Link
                    href={{ pathname: `/news/${news.slug}` }}
                    className="group flex flex-col sm:flex-row sm:items-center gap-3 py-4 transition-colors hover:text-navy-700"
                  >
                    <div className="flex items-center gap-3 shrink-0 sm:w-56">
                      <time dateTime={news.dateIso} className="text-xs text-neutral-400 tabular-nums">
                        {news.date}
                      </time>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${colorClass}`}
                      >
                        <Tag size={9} aria-hidden="true" />
                        {news.category}
                      </span>
                    </div>
                    <span className="flex-1 text-sm font-medium text-navy-800 group-hover:text-navy-600 transition-colors leading-relaxed">
                      {news.titleJa}
                    </span>
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
