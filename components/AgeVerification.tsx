"use client";

import { useEffect, useState } from "react";

export default function AgeVerification() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("camova-age");

    if (!accepted) {
      setOpen(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("camova-age", "true");
    setOpen(false);
  };

  const leave = () => {
    window.location.href = "https://google.com";
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-6">

      <div className="bg-[#111111] border border-[#D4AF37] rounded-3xl p-10 max-w-lg w-full text-center">

        <h1 className="text-4xl font-black text-[#D4AF37] mb-6">
          Adults Only
        </h1>

        <p className="text-zinc-300 leading-8 mb-8">
          This website contains adult-oriented content.
          <br /><br />
          By entering you confirm that you are at least
          <span className="text-[#D4AF37] font-bold"> 18 years old </span>
          and that viewing this content is legal in your country.
        </p>

        <div className="flex gap-4">

          <button
            onClick={accept}
            className="flex-1 bg-[#D4AF37] text-black py-4 rounded-full font-bold hover:scale-105 transition"
          >
            I am 18+
          </button>

          <button
            onClick={leave}
            className="flex-1 border border-zinc-700 py-4 rounded-full hover:border-red-500 transition"
          >
            Leave
          </button>

        </div>

      </div>

    </div>
  );
}