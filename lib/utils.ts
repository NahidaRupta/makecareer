import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string, locale = "ja-JP"): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}

export function formatSalary(
  min?: number | null,
  max?: number | null,
  currency = "JPY"
): string {
  if (!min && !max) return "";
  const fmt = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });
  if (min && max) return `${fmt.format(min)} 〜 ${fmt.format(max)}`;
  if (min) return `${fmt.format(min)} 〜`;
  if (max) return `〜 ${fmt.format(max)}`;
  return "";
}

export function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://makecareer.jp";
}
