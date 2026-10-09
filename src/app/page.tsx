import ScrollAnimation from "@/components/ui/ScrollAnimation";
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import ClientsMap from "@/components/home/ClientsMap";
import About from "@/components/home/About";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ScrollAnimation delay={0.1}>
          <Hero />
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2} direction="up">
          <Services />
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2} direction="up">
          <ClientsMap />
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2} direction="up">
          <About />
        </ScrollAnimation>
      </main>
      <Footer />
    </>
  );
}
