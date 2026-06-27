import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CAMOVA",
  description:
    "Read the CAMOVA Privacy Policy to learn how we collect, use and protect personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white py-28 px-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-black text-[#D4AF37] mb-10">
          Privacy Policy
        </h1>

        <div className="space-y-10 text-zinc-300 leading-8">

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Introduction
            </h2>

            <p>
              CAMOVA respects your privacy and is committed to protecting your
              personal information. This Privacy Policy explains what information
              we collect, how it is used and how we safeguard it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Information We Collect
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Name (if voluntarily provided)</li>
              <li>Email address</li>
              <li>IP address</li>
              <li>Browser information</li>
              <li>Device information</li>
              <li>Cookies and analytics data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              How We Use Your Information
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve our services</li>
              <li>Enhance user experience</li>
              <li>Prevent fraud and abuse</li>
              <li>Respond to customer support requests</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Cookies
            </h2>

            <p>
              CAMOVA uses cookies and similar technologies to improve website
              functionality, remember preferences and analyze website traffic.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Third-Party Services
            </h2>

            <p>
              We may use trusted third-party providers for website hosting,
              analytics, payment processing, customer support and affiliate
              services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Contact
            </h2>

            <p>
              If you have any questions regarding this Privacy Policy, please
              contact us at:
            </p>

            <p className="mt-4 font-semibold text-[#D4AF37]">
              camovalive@gmail.com
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}