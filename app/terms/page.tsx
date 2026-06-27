export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white py-28 px-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-black text-[#D4AF37] mb-10">
          Terms of Service
        </h1>

        <div className="space-y-10 text-zinc-300 leading-8">

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Acceptance of Terms
            </h2>

            <p>
              By accessing or using CAMOVA, you agree to comply with these Terms
              of Service and all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Age Requirement
            </h2>

            <p>
              CAMOVA is intended exclusively for adults aged 18 years or older.
              By using this website, you confirm that you meet this requirement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              User Conduct
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>No illegal activities.</li>
              <li>No harassment or abusive behavior.</li>
              <li>No unauthorized access attempts.</li>
              <li>No infringement of intellectual property rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Intellectual Property
            </h2>

            <p>
              All trademarks, branding, graphics and content displayed on
              CAMOVA remain the property of their respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Disclaimer
            </h2>

            <p>
              CAMOVA provides its services "as is" without warranties of any
              kind. We are not liable for interruptions, errors or temporary
              unavailability.
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