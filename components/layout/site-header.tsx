"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { drawerSlideIn } from "@/lib/motion/variants";
import { useScrollDirection } from "@/lib/hooks/use-scroll-direction";
import type { NavItem } from "@/types";

const NAV_ITEMS: NavItem[] = [
  { label: "Services", labelJa: "サービス", href: "/services" },
  { label: "Jobs", labelJa: "採用情報", href: "/jobs" },
  { label: "For Companies", labelJa: "企業の方へ", href: "/for-companies" },
  { label: "News", labelJa: "ニュース", href: "/news" },
  { label: "About", labelJa: "会社概要", href: "/about" },
];

const PHONE = "0120-000-000";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isHidden = scrollDirection === "down" && scrolled;

  return (
    <>
      <header
        style={{ zIndex: 200 }}
        className={[
          "fixed inset-x-0 top-0 transition-all duration-300",
          scrolled
            ? "bg-white shadow-[0_1px_8px_rgba(10,22,40,0.12)] border-b border-neutral-200"
            : "bg-transparent",
          isHidden ? "-translate-y-full" : "translate-y-0",
        ].join(" ")}
      >
        <div className="content-max flex h-16 items-center px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 mr-6 xl:mr-10"
            aria-label="MakeCareer ホームへ"
          >
            <span
              className={`text-xl font-extrabold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-navy-950" : "text-white"
              }`}
            >
              Make<span className="text-amber-500">Career</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-0.5 flex-1"
            aria-label="メインナビゲーション"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={{ pathname: item.href }}
                className={`px-3 py-2 rounded-md text-sm transition-colors duration-150 ${
                  scrolled
                    ? "text-neutral-700 hover:text-navy-500 hover:bg-navy-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="block font-medium leading-tight">
                  {item.labelJa}
                </span>
                <span className="block text-[10px] opacity-50 leading-tight">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop right: phone + CTA */}
          <div className="hidden lg:flex items-center gap-5 ml-auto">
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-150 ${
                scrolled
                  ? "text-neutral-600 hover:text-navy-500"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <Phone size={14} strokeWidth={1.5} aria-hidden="true" />
              <span className="tabular-nums">{PHONE}</span>
            </a>
            <Link
              href={{ pathname: "/contact" }}
              className="inline-flex items-center rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-amber-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
            >
              お問い合わせ
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className={`lg:hidden ml-auto p-2 rounded-md transition-colors ${
              scrolled
                ? "text-neutral-700 hover:bg-neutral-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X size={22} strokeWidth={1.5} />
            ) : (
              <Menu size={22} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              aria-hidden="true"
              className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm lg:hidden"
              style={{ zIndex: 201 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              id="mobile-nav"
              key="mobile-drawer"
              variants={drawerSlideIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
              aria-label="ナビゲーションメニュー"
              className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col lg:hidden"
              style={{ zIndex: 202 }}
            >
              {/* Drawer header */}
              <div className="flex h-16 shrink-0 items-center justify-between border-b border-neutral-200 px-6">
                <span className="text-xl font-extrabold text-navy-950">
                  Make<span className="text-amber-500">Career</span>
                </span>
                <button
                  type="button"
                  aria-label="メニューを閉じる"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md p-1.5 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Nav links */}
              <nav
                className="flex-1 overflow-y-auto py-2 px-3"
                aria-label="モバイルナビゲーション"
              >
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={{ pathname: item.href }}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center rounded-xl px-4 py-3.5 text-neutral-700 hover:bg-navy-50 hover:text-navy-500 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-sm leading-tight">
                        {item.labelJa}
                      </div>
                      <div className="text-xs text-neutral-400 mt-0.5">
                        {item.label}
                      </div>
                    </div>
                  </Link>
                ))}
              </nav>

              {/* Drawer footer */}
              <div className="shrink-0 border-t border-neutral-200 p-4 space-y-2.5">
                <a
                  href={`tel:${PHONE.replace(/-/g, "")}`}
                  className="flex items-center justify-center gap-2 w-full rounded-xl border border-neutral-200 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
                >
                  <Phone size={16} strokeWidth={1.5} aria-hidden="true" />
                  <span className="tabular-nums">{PHONE}</span>
                </a>
                <Link
                  href={{ pathname: "/contact" }}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full rounded-xl bg-amber-500 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition-colors"
                >
                  お問い合わせ
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
