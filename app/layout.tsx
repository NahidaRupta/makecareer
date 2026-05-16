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
    default: "MakeCareer | Manufacturing Staffing Specialist",
    template: "%s | MakeCareer",
  },
  description:
    "MakeCareer is Japan's dedicated manufacturing staffing partner. Dispatch, factory outsourcing, and skilled worker support. Nationwide coverage with 5,000+ registered staff.",
  keywords: [
    "manufacturing staffing Japan",
    "factory workers Japan",
    "specified skills visa",
    "foreign workers Japan",
    "factory outsourcing",
    "MakeCareer",
    "manufacturing recruitment Nagoya",
    "Aichi manufacturing jobs",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ja_JP",
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
    <html lang="en" className={`${inter.variable} h-full`} data-scroll-behavior="smooth">
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
          Skip to main content
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
