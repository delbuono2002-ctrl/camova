import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint | CAMOVA",
  description:
    "Legal notice and contact information for CAMOVA in accordance with applicable legal requirements.",
};

export default function ImprintPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white py-28 px-8">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-black text-[#D4AF37] mb-10">
          Imprint
        </h1>

        <div className="space-y-8 text-zinc-300 leading-8">

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Information according to § 5 DDG
            </h2>

            <p>
              Daniele Del Buono
              <br />
              Amselstraße 38
              <br />
              42555 Velbert
              <br />
              Germany
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Contact
            </h2>

            <p>
              <strong>Email:</strong> camovalive@gmail.com
              <br />
              <strong>Phone:</strong> +49 171 6560204
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Responsible for Content
            </h2>

            <p>
              Daniele Del Buono
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Disclaimer
            </h2>

            <p>
              The information on this website has been prepared with the greatest
              possible care. However, no guarantee is given for the accuracy,
              completeness or timeliness of the content. External links are
              provided for convenience only and their respective operators are
              responsible for their content.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}