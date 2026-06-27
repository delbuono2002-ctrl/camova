import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Models from "@/components/Models";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#090909] text-white min-h-screen">
      <Navbar />
      <Hero />
      <Models />
      <Stats />
      <FAQ />
      <Footer />
    </main>
  );
}