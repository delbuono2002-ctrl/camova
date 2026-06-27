export default function FAQ() {
  const faqs = [
    {
      question: "What is CAMOVA?",
      answer:
        "CAMOVA is a premium live streaming platform featuring verified creators and private live experiences.",
    },
    {
      question: "Do I need an account?",
      answer:
        "Yes. Creating an account allows you to access live streams, favorites and private features.",
    },
    {
      question: "Are payments secure?",
      answer:
        "Absolutely. All payments are encrypted and processed through secure payment providers.",
    },
    {
      question: "Can I watch on mobile?",
      answer:
        "Yes. CAMOVA works perfectly on desktop, tablet and mobile devices.",
    },
  ];

  return (
    <section className="bg-[#090909] py-24 px-8">
      <div className="max-w-5xl mx-auto">

        <p className="uppercase tracking-[0.45em] text-[#D4AF37] text-center mb-4">
          FAQ
        </p>

        <h2 className="text-5xl font-black text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          {faqs.map((faq) => (

            <div
              key={faq.question}
              className="border border-zinc-800 rounded-3xl bg-[#111111] p-8"
            >

              <h3 className="text-2xl font-bold mb-4">
                {faq.question}
              </h3>

              <p className="text-zinc-400 leading-8">
                {faq.answer}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}