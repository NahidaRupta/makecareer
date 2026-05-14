import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { organizationJsonLd, webSiteJsonLd } from "@/lib/seo/json-ld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://makecareer.jp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MakeCareer | 製造業専門 人材派遣・採用支援",
    template: "%s | MakeCareer",
  },
  description:
    "MakeCareerは製造業に特化した人材派遣・請負・外国人材支援の専門会社です。全国47都道府県対応、年間稼働スタッフ3,000名以上。採用課題を一緒に解決します。",
  keywords: [
    "製造業 人材派遣",
    "工場 人材",
    "特定技能",
    "外国人材",
    "工場請負",
    "MakeCareer",
    "メイクキャリア",
    "愛知 製造業 求人",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    alternateLocale: "en_US",
    siteName: "MakeCareer",
    url: siteUrl,
    images: [{ url: `${siteUrl}/images/og/og-default.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@makecareer_jp",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="ja" className={`${inter.variable} h-full`} data-scroll-behavior="smooth">
      <head>
        <Script
          id="json-ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <Script
          id="json-ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd()) }}
        />
        {gtmId && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        )}
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-lg focus:bg-navy-950 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        >
          メインコンテンツへスキップ
        </a>
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="GTM"
            />
          </noscript>
        )}
        <div id="main-content" tabIndex={-1} className="flex flex-col flex-1 outline-none">
          {children}
        </div>
      </body>
    </html>
  );
}
