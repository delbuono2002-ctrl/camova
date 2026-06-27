export default function Stats() {
  const stats = [
    {
      number: "24/7",
      text: "Live Platform",
    },
    {
      number: "HD",
      text: "Streaming",
    },
    {
      number: "100%",
      text: "Secure Payments",
    },
    {
      number: "Private",
      text: "Shows",
    },
  ];

  return (
    <section className="bg-[#090909] py-24 px-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((stat) => (

            <div
              key={stat.number}
              className="rounded-3xl border border-zinc-800 bg-[#111111] py-12 text-center hover:border-[#D4AF37] transition"
            >

              <h3 className="text-6xl font-black text-[#D4AF37] mb-4">
                {stat.number}
              </h3>

              <p className="text-zinc-400 text-xl">
                {stat.text}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}