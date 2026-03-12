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
  description: "The ultimate tactical toolkit for Cane Corso owners. Predict growth, manage socialization protocol, and secure high-performance gear.",
  keywords: ["Cane Corso", "dog growth predictor", "socialization checklist", "tactical dog gear", "large breed nutrition"],
  authors: [{ name: "CorsoGuard Team" }],
  creator: "CorsoGuard",
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
