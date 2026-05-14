import type { Metadata } from "next";
import { getBaseUrl } from "@/lib/utils";

interface PageMetaOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex = false,
}: PageMetaOptions): Metadata {
  const url = `${getBaseUrl()}${path}`;
  const image = ogImage ?? `${getBaseUrl()}/images/og/og-default.png`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      title,
      description,
      images: [image],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
