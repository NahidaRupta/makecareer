"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  User,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";
import { eventRegisterSchema, type EventRegisterInput } from "@/lib/validations/event-register";
import { getSeminarBySlug } from "@/lib/data/seminars";

const FORMAT_COLORS = {
  オンライン: "bg-emerald-50 text-emerald-700 border-emerald-200",
  会場: "bg-navy-50 text-navy-700 border-navy-200",
  ハイブリッド: "bg-amber-50 text-amber-700 border-amber-200",
} as const;

function SpotsBar({ total, left }: { total: number; left: number }) {
  const pct = Math.round((left / total) * 100);
  const isCritical = pct <= 30;
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 flex-1 rounded-full bg-neutral-200 overflow-hidden">
        <div
          className={`h-full rounded-full ${isCritical ? "bg-red-400" : "bg-amber-400"}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className={`text-xs font-semibold whitespace-nowrap ${isCritical ? "text-red-500" : "text-neutral-600"}`}>
        残{left}名 / 定員{total}名
      </span>
    </div>
  );
}

export default function SeminarRegistrationPage() {
  const { slug } = useParams<{ slug: string }>();
  const seminar = getSeminarBySlug(slug);
  if (!seminar) notFound();

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "full">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EventRegisterInput>({
    resolver: zodResolver(eventRegisterSchema),
    defaultValues: {
      eventSlug: seminar.slug,
      eventName: seminar.titleJa,
    },
  });

  async function onSubmit(data: EventRegisterInput) {
    setStatus("loading");
    try {
      const res = await fetch("/api/events/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { success: boolean; error?: string };
      if (!res.ok) {
        if (res.status === 409) {
          setStatus("full");
          setErrorMessage(json.error ?? "");
          return;
        }
        throw new Error(json.error ?? "");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "送信に失敗しました。");
    }
  }

  const inputBase =
    "w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-navy-950 placeholder-neutral-400 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20 transition-colors";

  const formatColor =
    FORMAT_COLORS[seminar.format] ?? "bg-neutral-100 text-neutral-600 border-neutral-200";

  return (
    <div className="min-h-[calc(100vh-80px)] bg-neutral-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-neutral-200">
        <div className="content-max px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-neutral-500">
          <Link
            href={{ pathname: "/seminars" }}
            className="hover:text-navy-700 transition-colors flex items-center gap-1"
          >
            <ArrowLeft size={12} aria-hidden="true" />
            セミナー一覧
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-neutral-700 line-clamp-1">{seminar.titleJa}</span>
        </div>
      </div>

      <div className="content-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left: seminar details */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden">
              {/* Header band */}
              <div className="bg-navy-950 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <Calendar size={14} aria-hidden="true" />
                  <time dateTime={seminar.dateIso}>{seminar.date}</time>
                </div>
                <span className={`text-xs font-bold border rounded-full px-2.5 py-1 ${formatColor}`}>
                  {seminar.format}
                </span>
              </div>

              <div className="p-7">
                <h1 className="text-xl font-extrabold text-navy-950 leading-snug mb-5">
                  {seminar.titleJa}
                </h1>

                <div className="space-y-2.5 mb-6 text-sm text-neutral-600">
                  <div className="flex items-start gap-2.5">
                    <Clock size={14} className="shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{seminar.time}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin size={14} className="shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{seminar.location}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Users size={14} className="shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{seminar.targetJa}</span>
                  </div>
                </div>

                <SpotsBar total={seminar.spotsTotal} left={seminar.spotsLeft} />

                <p className="mt-5 text-sm text-neutral-700 leading-relaxed">
                  {seminar.descriptionJa}
                </p>

                {/* Agenda */}
                <div className="mt-6 rounded-xl bg-neutral-50 border border-neutral-100 p-5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-4">
                    プログラム
                  </p>
                  <ol className="space-y-3">
                    {seminar.agenda.map((a, i) => (
                      <li key={i} className="flex gap-4 text-sm">
                        <span className="shrink-0 text-neutral-400 tabular-nums w-12 font-medium">
                          {a.time}
                        </span>
                        <span className="text-neutral-700">{a.titleJa}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Speaker */}
                <div className="mt-5 flex items-center gap-3 rounded-xl border border-neutral-100 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-100">
                    <User size={18} strokeWidth={1.5} className="text-navy-500" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy-950">{seminar.speaker.name}</p>
                    <p className="text-xs text-neutral-500">{seminar.speaker.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: registration form */}
          <div className="lg:col-span-2">
            {status === "success" ? (
              <div className="rounded-2xl bg-white border border-emerald-200 p-10 text-center">
                <CheckCircle2
                  size={56}
                  strokeWidth={1.5}
                  className="text-emerald-500 mx-auto mb-4"
                  aria-hidden="true"
                />
                <h2 className="text-lg font-bold text-navy-950 mb-3">
                  お申し込みを受け付けました
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  ご登録のメールアドレスに確認メールをお送りしました。
                  開催前日にもご連絡いたします。
                </p>
                <Link
                  href={{ pathname: "/seminars" }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy-600 hover:text-navy-800 transition-colors"
                >
                  <ArrowLeft size={14} aria-hidden="true" />
                  他のセミナーを見る
                </Link>
              </div>
            ) : (
              <div className="rounded-2xl bg-white border border-neutral-200 p-7">
                <h2 className="text-lg font-extrabold text-navy-950 mb-1">
                  参加申し込み（無料）
                </h2>
                <p className="text-xs text-neutral-500 mb-6">
                  お名前とメールアドレスをご入力ください。確認メールをお送りします。
                </p>

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                  <input type="hidden" {...register("eventSlug")} />
                  <input type="hidden" {...register("eventName")} />
                  {/* Honeypot */}
                  <input type="text" tabIndex={-1} className="sr-only" {...register("_hp")} />

                  <div>
                    <label htmlFor="reg-name" className="block text-xs font-semibold text-navy-950 mb-1.5">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="reg-name"
                      type="text"
                      autoComplete="name"
                      placeholder="山田 太郎"
                      className={`${inputBase} ${errors.name ? "border-red-400" : ""}`}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={11} aria-hidden="true" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="reg-email" className="block text-xs font-semibold text-navy-950 mb-1.5">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="reg-email"
                      type="email"
                      autoComplete="email"
                      placeholder="taro@company.co.jp"
                      className={`${inputBase} ${errors.email ? "border-red-400" : ""}`}
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
                    <label htmlFor="reg-company" className="block text-xs font-semibold text-navy-950 mb-1.5">
                      会社名
                    </label>
                    <input
                      id="reg-company"
                      type="text"
                      autoComplete="organization"
                      placeholder="株式会社〇〇製作所"
                      className={inputBase}
                      {...register("company")}
                    />
                  </div>

                  <div>
                    <label htmlFor="reg-phone" className="block text-xs font-semibold text-navy-950 mb-1.5">
                      電話番号
                    </label>
                    <input
                      id="reg-phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="052-000-0000"
                      className={inputBase}
                      {...register("phone")}
                    />
                  </div>

                  {(status === "error" || status === "full") && (
                    <div className="flex items-start gap-2 rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">
                      <AlertCircle size={16} className="shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{errorMessage || "送信に失敗しました。しばらくしてから再度お試しください。"}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || seminar.spotsLeft <= 0}
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-4 text-sm font-bold text-white hover:bg-amber-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSubmitting
                      ? "送信中..."
                      : seminar.spotsLeft <= 0
                        ? "満席のためお申し込みできません"
                        : "申し込む（無料）"}
                  </button>

                  <p className="text-center text-[11px] text-neutral-400 leading-relaxed">
                    ご入力いただいた情報は、セミナー運営およびMakeCareerからのご案内にのみ使用します。
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
