import { useEffect, useRef, useState } from "react";
import { WA_LINK } from "@/lib/constants";

const cards = [
  {
    label: "Me manda uma mensagem",
    description: "Você fala comigo pelo WhatsApp, me conta sua situação e eu te explico tudo sem compromisso.",
    bg: "from-[#1B5E20] to-[#2E7D32]",
    image: "/images/jornada-1.jpg",
    href: WA_LINK,
    external: true,
  },
  {
    label: "Análise de perfil",
    description: "Verifico se você se encaixa no programa, qual faixa de renda e quais apartamentos estão disponíveis pra você.",
    bg: "from-[#1A3A5C] to-[#0D2137]",
    image: "/images/jornada-2.jpg",
    href: "#como-funciona",
    external: false,
  },
  {
    label: "Visita ao imóvel",
    description: "Te levo pessoalmente para conhecer os empreendimentos que combinam com o seu perfil em Salvador.",
    bg: "from-[#2C1654] to-[#4A1942]",
    image: "/images/jornada-3.jpg",
    href: "#construtoras",
    external: false,
  },
  {
    label: "Chaves na mão",
    description: "Cuido de toda a burocracia com a Caixa e a construtora. Você só assina e recebe as chaves.",
    bg: "from-[#7A4A00] to-[#4A2D00]",
    image: "/images/jornada-4.jpg",
    href: WA_LINK,
    external: true,
  },
];

export default function JornadaCards() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true); },
      { threshold: 0.2 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-screen-2xl mx-auto">

        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            <span className="relative inline-block pb-3">
              Do zero até as chaves na mão
              <svg
                className="absolute left-0 w-full"
                style={{ bottom: "0px" }}
                viewBox="0 0 300 10"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M1 7C30 3.5 60 8 90 5.5C120 3 155 8.5 185 6C215 3.5 248 7.5 275 5C285 4 294 6.5 299 7.5"
                  stroke="#1B5E20"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
            O processo é mais simples do que parece. Eu fico do seu lado em cada etapa.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => (
            <AnimatedCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCard({ card, index }: { card: typeof cards[0]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href={card.href}
      target={card.external ? "_blank" : undefined}
      rel={card.external ? "noopener noreferrer" : undefined}
      className="group relative rounded-2xl overflow-hidden block h-24 md:h-auto md:aspect-square"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 4s ease ${index * 300}ms, transform 4s ease ${index * 300}ms`,
      }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${card.bg}`} />

      {/* Background image */}
      <BgImage src={card.image} />

      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />

      {/* Content */}
      <div className="absolute inset-0 p-4 md:p-5 flex items-center gap-4 md:flex-col md:items-start md:justify-start md:gap-2">
        {/* Step badge — mobile only */}
        <div className="md:hidden w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-sm">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <span className="text-white font-bold text-xl md:text-2xl leading-tight">
          {card.label}
        </span>
        <p className="hidden md:block text-white/90 text-lg leading-relaxed opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {card.description}
        </p>
      </div>

      {/* Arrow on hover — desktop only */}
      <div className="hidden md:flex absolute top-4 right-4 w-8 h-8 bg-white/20 group-hover:bg-white/40 rounded-full items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </a>
  );
}

function BgImage({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      className="absolute inset-0 w-full h-full object-cover opacity-40"
      onError={(e) => (e.currentTarget.style.display = "none")}
    />
  );
}
