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
              personal information. This Privacy Policy explains what data we
              collect, how we use it, and how we protect it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Information We Collect
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Name (if provided)</li>
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
              <li>Provide our services</li>
              <li>Improve user experience</li>
              <li>Prevent fraud and abuse</li>
              <li>Respond to customer inquiries</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Cookies
            </h2>

            <p>
              CAMOVA may use cookies and similar technologies to improve website
              functionality and analyze visitor activity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Third-Party Services
            </h2>

            <p>
              We may use trusted third-party providers for hosting, analytics,
              payment processing, customer support, and affiliate services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Contact
            </h2>

            <p>
              camovalive@gmail.com
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}