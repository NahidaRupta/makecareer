"use client";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type EventName =
  | "contact_form_submit"
  | "download_request"
  | "seminar_register"
  | "newsletter_subscribe"
  | "cta_click"
  | "page_view";

interface EventParams {
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
}

export function trackEvent(name: EventName, params?: EventParams): void {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: name, ...params });
  }

  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", name, params);
  }
}

export function trackCtaClick(label: string, destination: string): void {
  trackEvent("cta_click", { label, destination });
}
