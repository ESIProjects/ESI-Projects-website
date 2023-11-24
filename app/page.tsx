import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Insight from "@/components/Insight";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return <main className="flex flex-col justify-between items-center">
    <Hero />
    <Overview />
    <Insight />
    <Faq />
    <Footer />
  </main>;
}
