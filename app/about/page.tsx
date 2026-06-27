import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CAMOVA",
  description:
    "Learn more about CAMOVA, our mission and our commitment to providing a premium live streaming experience.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">

        <h1 className="text-6xl font-black text-[#D4AF37] mb-8">
          About CAMOVA
        </h1>

        <p className="text-zinc-400 text-xl leading-9">
          CAMOVA is a premium live streaming platform designed to provide a
          modern, elegant and secure experience for adults. Our goal is to
          connect users with verified creators through a professional,
          user-friendly platform built with quality, privacy and performance in
          mind.
        </p>

        <p className="mt-8 text-lg leading-8 text-zinc-500">
          We focus on delivering a seamless browsing experience while maintaining
          high standards for security, transparency and responsible platform
          management.
        </p>

      </div>
    </main>
  );
}