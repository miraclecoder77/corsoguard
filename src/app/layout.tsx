import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ClientHeader from "@/components/ClientHeader";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://corsoguard.com"),
  title: {
    default: "CorsoGuard | Tactical Cane Corso Toolkit",
    template: "%s | CorsoGuard"
  },
  description: "The ultimate tactical toolkit for Cane Corso owners. Predict growth, manage socialization protocols, and secure high-performance tactical gear.",
  keywords: ["Cane Corso", "dog growth predictor", "socialization checklist", "tactical dog gear", "large breed nutrition", "Cane Corso training"],
  authors: [{ name: "CorsoGuard Team" }],
  creator: "CorsoGuard",
  alternates: {
    canonical: "https://corsoguard.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://corsoguard.com",
    siteName: "CorsoGuard",
    title: "CorsoGuard | Tactical Cane Corso Toolkit",
    description: "Predict growth, manage socialization protocol, and secure high-performance gear for your Cane Corso.",
    images: [
      {
        url: "/baby-corso.png",
        width: 1200,
        height: 630,
        alt: "CorsoGuard - Tactical Cane Corso Toolkit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CorsoGuard | Tactical Cane Corso Toolkit",
    description: "The ultimate tactical toolkit for Cane Corso owners.",
    images: ["/baby-corso.png"],
    creator: "@corsoguard",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* AdSense Script placeholder */}
        <Script
          id="adsense"
          async
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456`}
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "CorsoGuard",
                "url": "https://corsoguard.com",
                "logo": "https://corsoguard.com/logo.png",
                "sameAs": [
                  "https://twitter.com/corsoguard",
                  "https://instagram.com/corsoguard"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "CorsoGuard",
                "url": "https://corsoguard.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://corsoguard.com/blog?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            ])
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <ClientHeader />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
