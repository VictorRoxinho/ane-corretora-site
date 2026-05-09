import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Lancamentos from "@/components/Lancamentos";
import JornadaCards from "@/components/JornadaCards";
import ComoFunciona from "@/components/ComoFunciona";
import Construtoras from "@/components/Construtoras";
import Indicacoes from "@/components/Indicacoes";
import Depoimentos from "@/components/Depoimentos";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import ExitIntentModal from "@/components/ExitIntentModal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Lancamentos />
        <JornadaCards />
        <ComoFunciona />
        <Construtoras />
        <Indicacoes />
        <Depoimentos />
        <CtaFinal />
      </main>
      <Footer />
      <ExitIntentModal />
    </>
  );
}
