import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import BottomCTA from "@/components/BottomCTA";
import StickyWhatsApp from "@/components/StickyWhatsApp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <BottomCTA />
      <StickyWhatsApp />
    </main>
  );
}
