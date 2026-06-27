import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Models from "@/components/Models";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SEOContent from "@/components/SEOContent";
import ExoClickBanner from "@/components/ExoClickBanner";

export default function Home() {
  return (
    <main className="bg-[#090909] text-white min-h-screen">
      <Navbar />

      <Hero />

      <ExoClickBanner />

      <Features />

      <Models />

      <ExoClickBanner />

      <Stats />

      <FAQ />

      <SEOContent />

      <ExoClickBanner />

      <Footer />
    </main>
  );
}