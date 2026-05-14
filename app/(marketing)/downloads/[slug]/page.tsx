"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileDown, CheckCircle2, AlertCircle, ArrowLeft } from "lucide-react";
import { downloadSchema, type DownloadInput } from "@/lib/validations/download";
import { getDownloadBySlug } from "@/lib/data/downloads";

export default function DownloadGatePage() {
  const { slug } = useParams<{ slug: string }>();
  const download = getDownloadBySlug(slug);

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DownloadInput>({
    resolver: zodResolver(downloadSchema),
    defaultValues: { resourceSlug: slug },
  });

  async function onSubmit(data: DownloadInput) {
    setStatus("loading");
    try {
      const res = await fetch("/api/downloads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (!download) {
    notFound();
  }

  const inputBase =
    "w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-navy-950 placeholder-neutral-400 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20 transition-colors";

  return (
    <div className="min-h-[calc(100vh-80px)] bg-neutral-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-neutral-200">
        <div className="content-max px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-neutral-500">
          <Link href={{ pathname: "/downloads" }} className="hover:text-navy-700 transition-colors flex items-center gap-1">
            <ArrowLeft size={12} aria-hidden="true" />
            資料ダウンロード一覧
          </Link>
          <span>/</span>
          <span className="text-neutral-700">{download.titleJa}</span>
        </div>
      </div>

      <div className="content-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: resource info */}
          <div>
            <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden">
              {/* Preview */}
              <div className="h-56 bg-linear-to-br from-navy-50 to-navy-100 flex items-center justify-center">
                <FileDown size={56} strokeWidth={1} className="text-navy-300" aria-hidden="true" />
              </div>
              <div className="p-7">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-100 rounded-full px-2.5 py-1">
                  {download.category}
                </span>
                <h1 className="mt-4 text-xl font-extrabold text-navy-950 leading-snug mb-3">
                  {download.titleJa}
                </h1>
                <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                  {download.descriptionJa}
                </p>
                <p className="text-xs font-medium text-neutral-400 mb-5">{download.pages}</p>

                {/* Highlights */}
                <div className="rounded-xl bg-neutral-50 border border-neutral-100 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-3">
                    収録内容
                  </p>
                  <ul className="space-y-2">
                    {download.contentHighlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 size={13} className="text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right: gate form */}
          <div>
            {status === "success" ? (
              <div className="rounded-2xl bg-white border border-emerald-200 p-10 text-center">
                <CheckCircle2 size={56} strokeWidth={1.5} className="text-emerald-500 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-navy-950 mb-3">
                  ダウンロードの準備ができました
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  ご登録のメールアドレスにダウンロードリンクをお送りしました。
                  メールが届かない場合はスパムフォルダをご確認ください。
                </p>
                <Link
                  href={{ pathname: "/downloads" }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy-600 hover:text-navy-800 transition-colors"
                >
                  <ArrowLeft size={14} aria-hidden="true" />
                  他の資料を見る
                </Link>
              </div>
            ) : (
              <div className="rounded-2xl bg-white border border-neutral-200 p-8">
                <h2 className="text-xl font-extrabold text-navy-950 mb-2">
                  無料でダウンロード
                </h2>
                <p className="text-sm text-neutral-500 mb-7">
                  お名前とメールアドレスをご入力ください。ダウンロードリンクをお送りします。
                </p>

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                  <input type="hidden" {...register("resourceSlug")} />
                  {/* Honeypot */}
                  <input type="text" tabIndex={-1} className="sr-only" {...register("_hp")} />

                  <div>
                    <label htmlFor="dl-name" className="block text-xs font-semibold text-navy-950 mb-1.5">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="dl-name"
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
                    <label htmlFor="dl-email" className="block text-xs font-semibold text-navy-950 mb-1.5">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="dl-email"
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

                  {status === "error" && (
                    <div className="flex items-start gap-2 rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">
                      <AlertCircle size={16} className="shrink-0 mt-0.5" aria-hidden="true" />
                      <span>送信に失敗しました。しばらくしてから再度お試しください。</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-4 text-sm font-bold text-white hover:bg-amber-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                  >
                    <FileDown size={16} aria-hidden="true" />
                    {isSubmitting ? "送信中..." : "ダウンロードリンクを受け取る（無料）"}
                  </button>

                  <p className="text-center text-[11px] text-neutral-400 leading-relaxed">
                    ご入力いただいた情報は、資料送付およびMakeCareerからのご案内にのみ使用します。
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
