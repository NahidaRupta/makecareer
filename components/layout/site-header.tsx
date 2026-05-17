"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { drawerSlideIn } from "@/lib/motion/variants";
import { useScrollDirection } from "@/lib/hooks/use-scroll-direction";
import type { NavItem } from "@/types";


const NAV_ITEMS = [
  {
    label: "About",
    href: "",
    subItems: [
      { label: "About", href: "/about" },
      { label: "Message From The CEO", href: "/about/ceo-message" },
      { label: "Organization Overview", href: "/about/overview" },
      { label: "Business Contents", href: "/about/business" },
      { label: "Gallery", href: "/about/gallery" },
      { label: "History", href: "/about/history" },
    ]
  },
  {
    label: "Services",
    href: "/services",
    isMegaMenu: true // Flag to tell the code to render the big card layout
  },
  { label: "Job Seekers", href: "/jobs" },
  { label: "Employers", href: "/for-companies" },
  { label: "News & Updates", href: "/news" },
];


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
          "fixed inset-x-0 top-0 transition-all duration-300 translate-y-0", // <-- Force it to stay visible
          scrolled
            ? "bg-white shadow-[0_1px_8px_rgba(10,22,40,0.12)] border-b border-neutral-200"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="content-max flex h-16 items-center px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 mr-6 xl:mr-10"
            aria-label="MakeCareer Home"
          >
            <span
              className={`text-2xl tracking-wide transition-colors duration-300 ${scrolled ? "text-navy-950" : "text-white"
                }`}
            >
              <span className="font-light">Sadia</span>
              <span className="font-extrabold text-amber-500 tracking-normal italic ml-0.5">
                Tec
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-2 flex-1 ml-40 h-full"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => (
              <div key={item.href} className="relative group flex items-center h-full py-4">
                {/* Main Nav Link */}
                <Link
                  href={{ pathname: item.href }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 inline-flex items-center gap-1 ${scrolled
                      ? "text-neutral-700 hover:text-navy-500 hover:bg-navy-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                >
                  <span>{item.label}</span>
                  {(item.subItems || item.isMegaMenu) && (
                    <svg
                      className="w-4 h-4 opacity-70 transition-transform duration-200 group-hover:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* 1. Standard Dropdown Card Menu (For About section) */}
                {item.subItems && !item.isMegaMenu && (
                  <div className="absolute left-0 top-full pt-2 w-64 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto">
                    <div className="bg-white rounded-xl shadow-xl border border-neutral-100 py-3 overflow-hidden">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.href}
                          href={{ pathname: sub.href }}
                          className="block px-6 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-navy-600 transition-colors duration-150 text-left"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. SERVICES MEGA MENU CARD LAYOUT */}
                {item.isMegaMenu && (
                  <div className="absolute -left-32 top-full pt-2 w-225 xl:w-250 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto">
                    <div className="bg-white rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden grid grid-cols-12 text-left">

                      {/* LEFT COLUMN: Image Placeholder Box */}
                      <div className="col-span-3 p-6 pr-2">
                        <div className="relative w-full h-full min-h-95 bg-neutral-100 rounded-xl overflow-hidden flex items-center justify-center border border-dashed border-neutral-300">
                          <Image
                            src="/images/services/megamenu.png"
                            alt="Megamenu image"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </div>

                      {/* MIDDLE COLUMN: Primary Services Grid */}
                      <div className="col-span-6 p-6 grid grid-cols-2 gap-x-6 gap-y-5">
                        {[
                          {
                            title: "Sadia Nihongo Training Center",
                            desc: "We will assist you in finding a wonderful career in Japan after you have completed your studies.",
                            href: "/services/nihongo-center",
                          },
                          {
                            title: "Specified Skilled Worker (SSW)",
                            desc: "Residence status work in specific industries, requiring a certain level of knowledge or proficiency.",
                            href: "/services/ssw",
                          },
                          {
                            title: "Study in Japan Program",
                            desc: "A well-structured process that guides all applicants in an orderly manner, to eventually live and work in Japan.",
                            href: "/services/study-program",
                          },
                          {
                            title: "Export-Import Operations",
                            desc: "We will assist you in finding a wonderful career in Japan after you have completed your studies.",
                            href: "/services/export-import",
                          },
                          {
                            title: "Find your dream job in Japan",
                            desc: "Search and land your dream job in this competitive market with our expertise peacefully.",
                            href: "/services/dream-job",
                          },
                          {
                            title: "SDC Collection",
                            desc: "We will assist you in finding a wonderful career in Japan after you have completed your studies.",
                            href: "/services/sdc",
                          },
                          {
                            title: "Technical Intern Training Program (TITP)",
                            desc: "A framework designed to bring foreigners to acquire skills and knowledge in Japanese industries.",
                            href: "/services/titp",
                          },
                          {
                            title: "International Calling Cards",
                            desc: "We will assist you in finding a wonderful career in Japan after you have completed your studies.",
                            href: "/services/calling-cards",
                          },
                        ].map((srv) => (
                          <Link
                            key={srv.title}
                            href={{ pathname: srv.href }}
                            className="group/item block space-y-1 p-2 rounded-lg -m-2 hover:bg-neutral-50 transition-colors duration-150"
                          >
                            <h4 className="font-bold text-sm text-neutral-900 group-hover/item:text-amber-500 transition-colors">
                              {srv.title}
                            </h4>
                            <p className="text-xs text-neutral-500 leading-normal line-clamp-3">
                              {srv.desc}
                            </p>
                          </Link>
                        ))}
                      </div>

                      {/* RIGHT COLUMN: More Services Side Links */}
                      <div className="col-span-3 bg-neutral-50/80 p-6 border-l border-neutral-100 flex flex-col">
                        <span className="text-[11px] font-bold tracking-wider text-amber-500 uppercase mb-4 block">
                          more services
                        </span>
                        <div className="space-y-1 flex-1">
                          {[
                            { name: "Pocket WiFi/Data SIM", href: "/services/wifi-sim" },
                            { name: "Mobile SIM", href: "/services/mobile-sim" },
                            { name: "VOIP Services", href: "/services/voip" },
                            { name: "NPO Doshdik", href: "/services/npo" },
                            { name: "Doshdik Media", href: "/services/media" },
                            { name: "Doshdik TV", href: "/services/tv" },
                          ].map((sideItem) => (
                            <Link
                              key={sideItem.name}
                              href={{ pathname: sideItem.href }}
                              className="flex items-center gap-3 w-full text-left py-2.5 px-2 rounded-lg text-xs font-bold text-neutral-800 hover:bg-white hover:text-amber-500 shadow-xs hover:shadow-sm border border-transparent hover:border-neutral-100 transition-all duration-150"
                            >
                              {/* Arrow icon matching your mockup styling */}
                              <svg
                                className="w-3.5 h-3.5 text-neutral-400 stroke-2 transform -rotate-45"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                              <span>{sideItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                )}

              </div>
            ))}
          </nav>

          {/* Desktop right: language flags + CTA */}
          <div className="hidden lg:flex items-center gap-5 ml-auto">
            {/* Language Selector Flags */}
            <div className="flex items-center gap-3 mr-2">
              {/* English (US) Flag Button */}
              <button
                type="button"
                onClick={() => console.log("Switch to English")}
                className="w-6 h-4 relative rounded-xs overflow-hidden shadow-xs hover:scale-110 transition-transform duration-150"
                aria-label="Switch language to English"
              >
                <img
                  src="https://flagcdn.com/us.svg"
                  alt="English"
                  className="w-full h-full object-cover"
                />
              </button>

              {/* Japanese Flag Button */}
              <button
                type="button"
                onClick={() => console.log("Switch to Japanese")}
                className="w-6 h-4 relative rounded-xs overflow-hidden shadow-xs border border-neutral-200 hover:scale-110 transition-transform duration-150"
                aria-label="日本語に切り替え"
              >
                <img
                  src="https://flagcdn.com/jp.svg"
                  alt="日本語"
                  className="w-full h-full object-cover"
                />
              </button>

              {/* Bangladesh Flag Button */}
              <button
                type="button"
                onClick={() => console.log("Switch to Bengali")}
                className="w-6 h-4 relative rounded-xs overflow-hidden shadow-xs hover:scale-110 transition-transform duration-150"
                aria-label="Switch language to Bengali"
              >
                <img
                  src="https://flagcdn.com/bd.svg"
                  alt="বাংলা"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>

            {/* Contact Button */}
            <Link
              href={{ pathname: "/contact" }}
              className="inline-flex items-center rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-amber-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Right Side: Flags + Hamburger */}
          <div className="flex lg:hidden ml-auto items-center gap-4">
            {/* Mobile Language Selector Flags */}
            <div className="flex items-center gap-2">
              {/* English (US) Flag */}
              <button
                type="button"
                onClick={() => console.log("Switch to English")}
                className="w-5 h-3.5 relative rounded-xs overflow-hidden shadow-xs hover:scale-110 transition-transform duration-150"
                aria-label="Switch language to English"
              >
                <img
                  src="https://flagcdn.com/us.svg"
                  alt="English"
                  className="w-full h-full object-cover"
                />
              </button>

              {/* Japanese Flag */}
              <button
                type="button"
                onClick={() => console.log("Switch to Japanese")}
                className="w-5 h-3.5 relative rounded-xs overflow-hidden shadow-xs border border-neutral-200 hover:scale-110 transition-transform duration-150"
                aria-label="日本語に切り替え"
              >
                <img
                  src="https://flagcdn.com/jp.svg"
                  alt="日本語"
                  className="w-full h-full object-cover"
                />
              </button>

              {/* Bangladesh Flag */}
              <button
                type="button"
                onClick={() => console.log("Switch to Bengali")}
                className="w-5 h-3.5 relative rounded-xs overflow-hidden shadow-xs hover:scale-110 transition-transform duration-150"
                aria-label="Switch language to Bengali"
              >
                <img
                  src="https://flagcdn.com/bd.svg"
                  alt="বাংলা"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>

            {/* Mobile hamburger button */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              className={`p-2 rounded-md transition-colors ${scrolled
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
              aria-label="Navigation menu"
              className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col lg:hidden"
              style={{ zIndex: 202 }}
            >
              {/* Drawer header */}
              <div className="flex h-16 shrink-0 items-center justify-between border-b border-neutral-200 px-6">
                <span className="text-xl font-extrabold text-navy-950">
                  Sadia<span className="text-amber-500">Tec</span>
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md p-1.5 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Nav links with expandable sub-menus */}
              <nav
                className="flex-1 overflow-y-auto py-4 px-4 space-y-1"
                aria-label="Mobile navigation"
              >
                {NAV_ITEMS.map((item) => {
                  // Define the sub-items for Services dynamically so they match your mega menu list
                  const mobileSubItems = item.subItems 
                    ? item.subItems 
                    : item.isMegaMenu 
                    ? [
                        { label: "Sadia Nihongo Training Center", href: "/services/nihongo-center" },
                        { label: "Specified Skilled Worker (SSW)", href: "/services/ssw" },
                        { label: "Study in Japan Program", href: "/services/study-program" },
                        { label: "Export-Import Operations", href: "/services/export-import" },
                        { label: "Find your dream job in Japan", href: "/services/dream-job" },
                        { label: "SDC Collection", href: "/services/sdc" },
                        { label: "Technical Intern Training Program (TITP)", href: "/services/titp" },
                        { label: "International Calling Cards", href: "/services/calling-cards" },
                        { label: "Pocket WiFi/Data SIM", href: "/services/wifi-sim" },
                        { label: "Mobile SIM", href: "/services/mobile-sim" },
                        { label: "VOIP Services", href: "/services/voip" },
                      ]
                    : null;

                  const hasSubs = !!mobileSubItems;

                  // Creating a small isolated toggle component layout per item
                  return <MobileMenuAccordion key={item.href} item={item} subItems={mobileSubItems} onClose={() => setMobileOpen(false)} />;
                })}
              </nav>

              {/* Drawer footer */}
              <div className="shrink-0 border-t border-neutral-200 p-4 space-y-2.5">
                <Link
                  href={{ pathname: "/contact" }}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full rounded-xl bg-amber-500 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
// Simple helper component to manage individual mobile menu expansions
function MobileMenuAccordion({ item, subItems, onClose }: { item: any; subItems: any[] | null; onClose: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!subItems) {
    return (
      <Link
        href={{ pathname: item.href }}
        onClick={onClose}
        className="flex items-center rounded-lg px-4 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-navy-600 transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="space-y-0.5">
      {/* Clickable Header Link Row */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full rounded-lg px-4 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors ${
          isOpen ? "bg-neutral-50/80 text-navy-600" : ""
        }`}
      >
        <span>{item.label}</span>
        <svg
          className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-navy-500" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Render Sub Link List */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "`max-h-112.5 opacity-100 py-1" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="pl-4 border-l border-neutral-100 ml-4 space-y-1">
          {subItems.map((sub) => (
            <Link
              key={sub.href}
              href={{ pathname: sub.href }}
              onClick={onClose}
              className="block rounded-md px-4 py-2.5 text-xs font-medium text-neutral-500 hover:bg-neutral-50 hover:text-navy-600 transition-colors text-left"
            >
              {sub.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
