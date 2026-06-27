import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import AgeVerification from "@/components/AgeVerification";
import CookieBanner from "@/components/CookieBanner";

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
    "CAMOVA is a premium live streaming platform featuring verified creators, private shows and a modern, secure user experience for adults.",

  applicationName: "CAMOVA",

  alternates: {
    canonical: "https://camova.live",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "CAMOVA | Premium Live Streaming Platform",
    description:
      "Discover verified creators, private shows and a premium live streaming experience.",
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
      "Discover verified creators and premium live entertainment.",
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
        <AgeVerification />
        <CookieBanner />
        {children}
      </body>
    </html>
  );
}