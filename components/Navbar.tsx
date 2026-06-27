import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="CAMOVA"
            width={220}
            height={70}
            priority
            className="h-14 w-auto transition hover:opacity-90"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 uppercase text-sm tracking-[0.2em]">

          <Link
            href="/"
            className="text-zinc-300 hover:text-[#D4AF37] transition"
          >
            Home
          </Link>

          <Link
            href="/models"
            className="text-zinc-300 hover:text-[#D4AF37] transition"
          >
            Models
          </Link>

          <Link
            href="/about"
            className="text-zinc-300 hover:text-[#D4AF37] transition"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-zinc-300 hover:text-[#D4AF37] transition"
          >
            Contact
          </Link>

        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">

          <Link
            href="/models"
            className="px-6 py-3 rounded-full border border-zinc-700 hover:border-[#D4AF37] transition"
          >
            Explore
          </Link>

          <Link
            href="/models"
            className="px-6 py-3 rounded-full bg-[#D4AF37] text-black font-bold hover:opacity-90 transition"
          >
            Start
          </Link>

        </div>

      </div>
    </header>
  );
}