import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data untuk SEO */}
      <StructuredData />
      
      <main className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
