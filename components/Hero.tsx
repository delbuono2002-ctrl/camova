import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] flex items-center">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#D4AF3720,transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />

      {/* Glow */}
      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 px-8 py-32 lg:grid-cols-2">

        {/* LEFT */}
        <div>

          <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
            Premium Live Platform
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight text-white md:text-8xl">
            Live Your
            <br />
            <span className="text-[#D4AF37]">
              Fantasy
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-zinc-400">
            Discover premium live models, private shows, exclusive content and
            an elegant streaming experience built for adults.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/models"
              className="rounded-full bg-[#D4AF37] px-10 py-5 font-bold text-black transition hover:scale-105"
            >
              Explore Models
            </Link>

            <Link
              href="/about"
              className="rounded-full border border-zinc-700 px-10 py-5 text-white transition hover:border-[#D4AF37]"
            >
              Learn More
            </Link>

          </div>

          {/* Trust Badges */}

          <div className="mt-14 flex flex-wrap gap-4">

            <div className="rounded-full border border-zinc-800 bg-zinc-900/70 px-5 py-3 text-sm text-zinc-300">
              🔞 18+ Only
            </div>

            <div className="rounded-full border border-zinc-800 bg-zinc-900/70 px-5 py-3 text-sm text-zinc-300">
              🔒 Secure Payments
            </div>

            <div className="rounded-full border border-zinc-800 bg-zinc-900/70 px-5 py-3 text-sm text-zinc-300">
              ✔ Verified Models
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="rounded-[35px] border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-10 shadow-2xl">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs">
                  CAMOVA
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white">
                  Premium Experience
                </h2>
              </div>

              <div className="h-4 w-4 rounded-full bg-green-500 animate-pulse" />

            </div>

            <div className="mt-12 space-y-8">

              <div className="flex justify-between border-b border-zinc-800 pb-4">
                <span className="text-zinc-500">
                  Online Models
                </span>
                <span className="font-bold text-[#D4AF37]">
                  250+
                </span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-4">
                <span className="text-zinc-500">
                  Private Shows
                </span>
                <span className="font-bold text-[#D4AF37]">
                  Unlimited
                </span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-4">
                <span className="text-zinc-500">
                  HD Streaming
                </span>
                <span className="font-bold text-[#D4AF37]">
                  4K Ready
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-500">
                  Members
                </span>
                <span className="font-bold text-[#D4AF37]">
                  500K+
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}