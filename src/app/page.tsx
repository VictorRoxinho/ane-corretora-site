import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JornadaCards from "@/components/JornadaCards";
import ComoFunciona from "@/components/ComoFunciona";
import Construtoras from "@/components/Construtoras";
import Indicacoes from "@/components/Indicacoes";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <JornadaCards />
        <ComoFunciona />
        <Construtoras />
        <Indicacoes />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
