"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("camova-cookies");
    if (!accepted) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("camova-cookies", "accepted");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[95%] max-w-xl bg-zinc-900 border border-yellow-500 rounded-2xl p-6 shadow-2xl z-[9999]">
      <h2 className="text-xl font-bold text-white mb-2">
        🍪 Cookie Notice
      </h2>

      <p className="text-zinc-300 text-sm leading-6">
        We use cookies to improve your experience, keep the website secure,
        remember your preferences and analyze traffic. By clicking
        <strong> Accept</strong>, you agree to our use of cookies.
      </p>

      <div className="flex gap-3 mt-6">
        <button
          onClick={accept}
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-5 py-2 rounded-xl transition"
        >
          Accept
        </button>

        <button
          onClick={() => setShow(false)}
          className="border border-zinc-700 text-white px-5 py-2 rounded-xl hover:bg-zinc-800 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}