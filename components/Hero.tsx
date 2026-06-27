import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090909]">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#D4AF3725,transparent_60%)]" />

      <div className="relative z-10 max-w-6xl px-8 text-center">

        <span className="inline-block rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 uppercase tracking-[0.35em] text-[#D4AF37] text-sm">
          Premium Live Platform
        </span>

        <h1 className="mt-8 text-7xl md:text-8xl font-black leading-none">
          Welcome to
          <br />
          <span className="text-[#D4AF37]">
            CAMOVA
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
          Discover a premium live streaming experience with a modern interface,
          private shows and verified creators.
        </p>

        <div className="mt-14 flex flex-col md:flex-row justify-center gap-6">

          <Link
            href="/models"
            className="rounded-full bg-[#D4AF37] px-10 py-5 font-bold text-black hover:scale-105 transition"
          >
            Start Watching
          </Link>

          <Link
            href="/about"
            className="rounded-full border border-zinc-700 px-10 py-5 hover:border-[#D4AF37] transition"
          >
            Learn More
          </Link>

        </div>

      </div>

    </section>
  );
}