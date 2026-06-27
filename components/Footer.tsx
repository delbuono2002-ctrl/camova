import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* Logo */}
        <div>
          <h2 className="text-4xl font-black tracking-[0.3em] text-[#D4AF37]">
            CAMOVA
          </h2>

          <p className="mt-6 text-zinc-500 leading-8">
            Premium live entertainment platform connecting users with verified creators in a modern and secure environment.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-bold mb-5">
            Company
          </h3>

          <div className="space-y-3 text-zinc-400">

            <Link href="/" className="block hover:text-[#D4AF37] transition">
              Home
            </Link>

            <Link href="/about" className="block hover:text-[#D4AF37] transition">
              About
            </Link>

            <Link href="/models" className="block hover:text-[#D4AF37] transition">
              Models
            </Link>

            <Link href="/contact" className="block hover:text-[#D4AF37] transition">
              Contact
            </Link>

          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-bold mb-5">
            Legal
          </h3>

          <div className="space-y-3 text-zinc-400">

            <Link href="/privacy" className="block hover:text-[#D4AF37] transition">
              Privacy Policy
            </Link>

            <Link href="/terms" className="block hover:text-[#D4AF37] transition">
              Terms of Service
            </Link>

            <Link href="/imprint" className="block hover:text-[#D4AF37] transition">
              Imprint
            </Link>

            <Link href="/dmca" className="block hover:text-[#D4AF37] transition">
              DMCA Policy
            </Link>

            <Link href="/18plus" className="block hover:text-[#D4AF37] transition">
              18+ Disclaimer
            </Link>

          </div>
        </div>

      </div>

      <div className="border-t border-zinc-800 py-8 text-center text-zinc-500">
        © 2026 CAMOVA. All rights reserved.
      </div>
    </footer>
  );
}