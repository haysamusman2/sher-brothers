import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import BottomCTA from "@/components/BottomCTA";
import StickyWhatsApp from "@/components/StickyWhatsApp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <WhyChooseUs />
      <BottomCTA />
      <StickyWhatsApp />
    </main>
  );
}
