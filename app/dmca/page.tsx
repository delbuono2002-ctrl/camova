import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA Policy | CAMOVA",
  description:
    "Read the CAMOVA DMCA Policy and learn how to submit copyright infringement notices.",
};

export default function DMCAPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white py-28 px-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-black text-[#D4AF37] mb-10">
          DMCA Policy
        </h1>

        <div className="space-y-10 text-zinc-300 leading-8">

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Copyright Notice
            </h2>

            <p>
              CAMOVA respects the intellectual property rights of others. If you
              believe that content available through our website infringes your
              copyright, you may submit a copyright complaint in accordance with
              applicable copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Filing a DMCA Notice
            </h2>

            <p>
              Please include your full contact information, identification of
              the copyrighted work, the URL of the allegedly infringing content,
              a statement made in good faith and a declaration that the
              information provided is accurate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Counter Notification
            </h2>

            <p>
              If you believe that your content has been removed in error, you
              may submit a counter notification containing all legally required
              information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Contact
            </h2>

            <p className="font-semibold text-[#D4AF37]">
              camovalive@gmail.com
            </p>

          </section>

        </div>

      </div>
    </main>
  );
}