import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Models | CAMOVA",
  description:
    "Browse verified creators and discover premium live streaming experiences on CAMOVA.",
};

export default function ModelsPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white flex items-center justify-center">
      <div className="text-center max-w-3xl px-6">
        <h1 className="text-6xl font-black text-[#D4AF37]">
          Models
        </h1>

        <p className="mt-6 text-xl text-zinc-400 leading-8">
          Browse verified creators and discover premium live streaming experiences.
          Live models will appear here after the Stripchat White Label integration
          has been completed.
        </p>
      </div>
    </main>
  );
}