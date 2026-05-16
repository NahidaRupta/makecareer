"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import {
  safeVariant,
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "@/lib/motion/variants";
import { contactSchema, type ContactInput } from "@/lib/validations/contact";

const SERVICE_OPTIONS: { value: ContactInput["serviceInterest"]; label: string }[] = [
  { value: "staffing", label: "Manufacturing Staffing" },
  { value: "team-dispatch", label: "Team Dispatch (Factory Outsourcing)" },
  { value: "specified-skills", label: "Specified Skills / Technical Intern" },
  { value: "contract", label: "Contract Outsourcing" },
  { value: "internship", label: "Technical Intern Training" },
  { value: "consulting", label: "Recruitment Consulting" },
  { value: "other", label: "Other / Not Yet Decided" },
];

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Phone",
    value: "0120-000-000",
    note: "(Free call)",
    href: "tel:0120000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@makecareer.jp",
    note: "Available 24 hours",
    href: "mailto:info@makecareer.jp",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "3-11-22 Meieki, Nakamura-ku, Nagoya, Aichi",
    note: "5 min walk from Nagoya Station",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon–Fri, 9:00–18:00",
    note: "Weekends & holidays: reply next business day",
  },
];

interface SubmitState {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
}

export function ContactSection() {
  const { ref, inView } = useInView({ once: true });
  const prefersReducedMotion = useReducedMotion();
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });

  const container = safeVariant(staggerContainer, prefersReducedMotion);
  const item = safeVariant(fadeInUp, prefersReducedMotion);
  const leftItem = safeVariant(fadeInLeft, prefersReducedMotion);
  const rightItem = safeVariant(fadeInRight, prefersReducedMotion);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactInput) {
    setSubmitState({ status: "loading" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitState({ status: "success" });
      reset();
    } catch {
      setSubmitState({
        status: "error",
        message: "Submission failed. Please contact us by phone or email.",
      });
    }
  }

  const inputBase =
    "w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-navy-950 placeholder-neutral-400 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20 transition-colors";
  const errorBorder = "border-red-400 focus:border-red-500 focus:ring-red-500/20";

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="contact-heading"
      className="bg-white section-padding"
    >
      <div className="content-max px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.p
            variants={item}
            className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-3"
          >
            Contact Us
          </motion.p>
          <motion.h2
            id="contact-heading"
            variants={item}
            className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight"
          >
            Contact Us
          </motion.h2>
          <motion.p variants={item} className="mt-4 text-neutral-600 leading-relaxed">
            Whether you have a hiring enquiry or want to register as a job seeker, we&apos;re here to help.
            <br className="hidden sm:block" />
            A member of our team will respond within one business day.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: contact info */}
          <motion.div
            variants={leftItem}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl bg-navy-950 p-8 h-full">
              <h3 className="text-lg font-bold text-white mb-8">Get in Touch</h3>
              <ul className="space-y-7">
                {CONTACT_INFO.map((info) => {
                  const Icon = info.icon;
                  return (
                    <li key={info.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                        <Icon size={18} strokeWidth={1.5} className="text-amber-400" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-[11px] text-white/40 mb-0.5">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm font-semibold text-white hover:text-amber-300 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-white">{info.value}</p>
                        )}
                        <p className="text-[11px] text-white/50 mt-0.5">{info.note}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-xs text-white/40 leading-relaxed">
                  Personal information you provide will be used solely to respond to your enquiry
                  and to share relevant information about our services.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={rightItem}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            {submitState.status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20 gap-4">
                <CheckCircle2 size={56} strokeWidth={1.5} className="text-emerald-500" />
                <h3 className="text-xl font-bold text-navy-950">
                  Message sent successfully
                </h3>
                <p className="text-neutral-600 leading-relaxed max-w-sm">
                  Thank you for getting in touch. A member of our team will respond within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                {/* Honeypot — hidden from users, catches bots */}
                <input type="text" tabIndex={-1} className="sr-only" {...register("_hp")} />

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-navy-950 mb-1.5">
                    Full Name <span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Taro Yamada"
                    className={`${inputBase} ${errors.name ? errorBorder : ""}`}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={11} aria-hidden="true" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-xs font-semibold text-navy-950 mb-1.5">
                    Company / Organisation
                  </label>
                  <input
                    id="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Acme Manufacturing Co., Ltd."
                    className={inputBase}
                    {...register("company")}
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-navy-950 mb-1.5">
                      Email Address <span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="taro@example.com"
                      className={`${inputBase} ${errors.email ? errorBorder : ""}`}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={11} aria-hidden="true" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-navy-950 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="052-000-0000"
                      className={inputBase}
                      {...register("phone")}
                    />
                  </div>
                </div>

                {/* Service interest */}
                <div>
                  <label htmlFor="serviceInterest" className="block text-xs font-semibold text-navy-950 mb-1.5">
                    Service of Interest
                  </label>
                  <select
                    id="serviceInterest"
                    className={`${inputBase} cursor-pointer`}
                    {...register("serviceInterest")}
                  >
                    <option value="">Select one (optional)</option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-navy-950 mb-1.5">
                    Your Message <span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Please describe your question or enquiry in as much detail as possible."
                    className={`${inputBase} resize-none ${errors.message ? errorBorder : ""}`}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={11} aria-hidden="true" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Error state */}
                {submitState.status === "error" && (
                  <div className="flex items-start gap-2 rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">
                    <AlertCircle size={16} className="shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{submitState.message}</span>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-amber-500 px-6 py-4 text-sm font-bold text-white hover:bg-amber-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                >
                  {isSubmitting ? "Sending..." : "Send Message (Free)"}
                </button>

                <p className="text-center text-xs text-neutral-400">
                  You will receive an automated confirmation email after submitting.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
