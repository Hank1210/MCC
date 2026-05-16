import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Challenge from "@/components/Challenge";
import Services from "@/components/Services";
import UseCases from "@/components/UseCases";
import Approach from "@/components/Approach";
import MultichannelFoundation from "@/components/MultichannelFoundation";
import About from "@/components/About";
import WhyMCC from "@/components/WhyMCC";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Challenge />
        <Services />
        <UseCases />
        <Approach />
        <MultichannelFoundation />
        <About />
        <WhyMCC />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
