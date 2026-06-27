import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-16 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        <div>
          <h2 className="text-5xl font-black tracking-[0.3em] text-[#D4AF37] mb-6">
            CAMOVA
          </h2>

          <p className="text-zinc-500 leading-8">
            Premium live streaming platform with verified creators,
            private shows and high-quality entertainment.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white mb-6">
            Company
          </h3>

          <div className="flex flex-col gap-3 text-zinc-400">

            <Link href="/about" className="hover:text-[#D4AF37] transition">
              About
            </Link>

            <Link href="/models" className="hover:text-[#D4AF37] transition">
              Models
            </Link>

            <Link href="/contact" className="hover:text-[#D4AF37] transition">
              Contact
            </Link>

          </div>
        </div>

        <div>
          <h3 className="font-bold text-white mb-6">
            Legal
          </h3>

          <div className="flex flex-col gap-3 text-zinc-400">

            <Link href="/privacy" className="hover:text-[#D4AF37] transition">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-[#D4AF37] transition">
              Terms of Service
            </Link>

            <Link href="/2257" className="hover:text-[#D4AF37] transition">
              18 U.S.C. 2257
            </Link>

          </div>
        </div>

      </div>

      <div className="border-t border-zinc-800 mt-16 pt-10 text-center text-zinc-600">
        © 2026 CAMOVA. All rights reserved.
      </div>
    </footer>
  );
}