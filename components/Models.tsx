export default function Models() {
  const models = [
    { name: "Model 1", status: "Live Now" },
    { name: "Model 2", status: "Live Now" },
    { name: "Model 3", status: "Online" },
    { name: "Model 4", status: "Online" },
  ];

  return (
    <section className="bg-[#090909] py-24 px-8">
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[0.45em] text-[#D4AF37] text-center mb-4">
          Featured Models
        </p>

        <h2 className="text-5xl font-black text-center mb-16">
          Meet Our Top Creators
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {models.map((model) => (

            <div
              key={model.name}
              className="rounded-3xl overflow-hidden border border-zinc-800 bg-[#111111] hover:border-[#D4AF37] transition duration-300"
            >

              <div className="h-80 bg-gradient-to-b from-zinc-700 to-zinc-900 flex items-center justify-center">

                <span className="text-zinc-500 text-lg">
                  Image
                </span>

              </div>

              <div className="p-6">

                <div className="flex justify-between items-center mb-3">

                  <h3 className="text-3xl font-bold">
                    {model.name}
                  </h3>

                  <span className="text-green-400 text-sm">
                    ● {model.status}
                  </span>

                </div>

                <p className="text-zinc-400 mb-6">
                  HD Streaming • Private Shows
                </p>

                <button className="w-full rounded-full bg-[#D4AF37] text-black py-3 font-bold hover:opacity-90">
                  View Profile
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}