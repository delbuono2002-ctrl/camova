import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://www.camova.live/"),

  title: "CAMOVA",
  description: "Premium Live Streaming Platform",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "CAMOVA",
    description: "Premium Live Streaming Platform",
    url: "https://www.camova.live/",
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
    description: "Premium Live Streaming Platform",
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
      <head>
        <Schema />
      </head>

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