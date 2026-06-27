export default function AdultsOnlyPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white py-28 px-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-black text-[#D4AF37] mb-10">
          18+ Adults Only
        </h1>

        <div className="space-y-10 text-zinc-300 leading-8">

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Age Restriction
            </h2>

            <p>
              CAMOVA is intended exclusively for adults who are at least 18
              years of age (or the legal age required in their jurisdiction).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              User Responsibility
            </h2>

            <p>
              By accessing this website, you confirm that you meet the legal age
              requirements and that viewing adult-oriented content is lawful in
              your country or region.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Compliance
            </h2>

            <p>
              Users who do not meet these requirements must leave this website
              immediately.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}