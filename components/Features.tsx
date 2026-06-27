export default function Features() {
  const items = [
    {
      title: "HD Streaming",
      text: "Crystal clear live streams with premium quality.",
    },
    {
      title: "Private Shows",
      text: "Exclusive one-to-one experiences anytime.",
    },
    {
      title: "Verified Models",
      text: "Only trusted and verified creators.",
    },
  ];

  return (
    <>
      <section className="bg-[#0d0d0d] py-28 px-8">
        <div className="max-w-6xl mx-auto">

          <p className="uppercase tracking-[0.45em] text-[#D4AF37] text-center">
            Why Camova
          </p>

          <h2 className="text-5xl font-black text-center mt-4 mb-20">
            Premium Experience
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-zinc-800 bg-[#111] p-10 hover:border-[#D4AF37] transition"
              >
                <div className="w-14 h-14 rounded-full bg-[#D4AF37] mb-8"></div>

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-zinc-400 leading-8">
                  {item.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="bg-[#090909] py-28 px-8">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.45em] text-[#D4AF37] text-center">
            Featured Models
          </p>

          <h2 className="text-5xl font-black text-center mt-4 mb-20">
            Meet Our Top Creators
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-[#111] rounded-3xl overflow-hidden border border-zinc-800 hover:border-[#D4AF37] transition"
              >
                <div className="h-72 bg-gradient-to-b from-zinc-700 to-zinc-900"></div>

                <div className="p-6">

                  <h3 className="text-2xl font-bold">
                    Model {i}
                  </h3>

                  <p className="text-zinc-400 mt-2">
                    Live now • HD Streaming
                  </p>

                  <button className="mt-6 w-full rounded-full bg-[#D4AF37] text-black py-3 font-bold hover:opacity-90 transition">
                    View Profile
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}