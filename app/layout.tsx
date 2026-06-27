import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import AgeVerification from "@/components/AgeVerification";
import CookieBanner from "@/components/CookieBanner";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://camova.live"),

  title: {
    default: "CAMOVA | Premium Live Streaming Platform",
    template: "%s | CAMOVA",
  },

  description:
    "Discover CAMOVA, a premium live streaming platform with verified creators, private live shows and a modern streaming experience.",

  keywords: [
    "CAMOVA",
    "live streaming",
    "premium streaming",
    "verified creators",
    "private live shows",
    "online streaming",
  ],

  authors: [
    {
      name: "CAMOVA",
    },
  ],

  creator: "CAMOVA",
  publisher: "CAMOVA",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://camova.live",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "CAMOVA | Premium Live Streaming Platform",
    description:
      "Discover CAMOVA, a premium live streaming platform featuring verified creators and private live shows.",
    url: "https://camova.live",
    siteName: "CAMOVA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "CAMOVA",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CAMOVA | Premium Live Streaming Platform",
    description:
      "Discover CAMOVA, a premium live streaming platform featuring verified creators.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-black text-white`}
      >
        <StructuredData />

        <AgeVerification />

        <CookieBanner />

        {children}
      </body>
    </html>
  );
}