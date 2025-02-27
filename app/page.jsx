import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
      <Gallery />
      <Reviews />
      <Faq />
      <Vision />
      
    </main>
  );
}
