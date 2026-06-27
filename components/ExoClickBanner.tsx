"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function ExoClickBanner() {
  useEffect(() => {
    (window as any).AdProvider = (window as any).AdProvider || [];
    (window as any).AdProvider.push({
      serve: {},
    });
  }, []);

  return (
    <div className="flex justify-center py-8">
      <Script
        src="https://a.magsrv.com/ad-provider.js"
        strategy="afterInteractive"
      />

      <ins
        className="eas6a97888e2"
        data-zoneid="5960574"
      />

      <Script id="exoclick-init" strategy="afterInteractive">
        {`
          (window.AdProvider = window.AdProvider || []).push({
            serve: {}
          });
        `}
      </Script>
    </div>
  );
}