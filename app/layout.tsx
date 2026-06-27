import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

import AgeVerification from "@/components/AgeVerification";
import CookieBanner from "@/components/CookieBanner";
import Schema from "./schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.camova.live"),

  title: {
    default: "CAMOVA | Premium Live Streaming Platform",
    template: "%s | CAMOVA",
  },

  description:
    "Discover premium live streaming, verified creators, private shows and a modern live entertainment experience on CAMOVA.",

  keywords: [
    "live cam",
    "live streaming",
    "adult live",
    "private shows",
    "cam models",
    "verified creators",
    "premium live platform",
    "camova",
  ],

  authors: [{ name: "CAMOVA" }],
  creator: "CAMOVA",
  publisher: "CAMOVA",

  alternates: {
    canonical: "https://www.camova.live",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "CAMOVA | Premium Live Streaming Platform",
    description:
      "Discover premium live streaming with verified creators on CAMOVA.",
    url: "https://www.camova.live",
    siteName: "CAMOVA",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "CAMOVA",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CAMOVA",
    description:
      "Discover premium live streaming with verified creators.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Schema />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-black text-white`}
      >
        <AgeVerification />
        <CookieBanner />

        {children}

        <Analytics />
      </body>
    </html>
  );
}