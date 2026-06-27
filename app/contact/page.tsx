import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | CAMOVA",
  description:
    "Get in touch with the CAMOVA team for support, legal inquiries, business partnerships and affiliate opportunities.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white py-28 px-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-black text-[#D4AF37] mb-10">
          Contact
        </h1>

        <div className="space-y-10 text-zinc-300 leading-8">

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Get in Touch
            </h2>

            <p>
              If you have any questions about CAMOVA, our platform, legal
              matters, partnerships or general support, please contact us using
              the information below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Support
            </h2>

            <p>
              <strong>Email:</strong> camovalive@gmail.com
            </p>

            <p className="mt-2">
              <strong>Response Time:</strong> Within 24–48 hours.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Business & Affiliate Inquiries
            </h2>

            <p>
              We welcome partnership opportunities, affiliate collaborations and
              business inquiries. Feel free to contact us to discuss potential
              cooperation.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}