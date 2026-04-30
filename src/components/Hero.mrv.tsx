import { useState, useEffect, useCallback } from "react";
import { WA_LINK } from "@/lib/constants";

const slides = [
  {
    id: 1,
    badge: "Corretora oficial MCMV · Salvador/BA",
    bgGradient: "from-[#1B5E20] via-[#2E7D32] to-[#1B5E20]",
    bgImage: "/images/banner-1.jpg",
    darkOverlay: false,
    content: {
      type: "main" as const,
      title: ["Sua casa própria", "começa aqui"],
      titleHighlight: 1,
      subtitle:
        "Sou a Ane França e já ajudei dezenas de famílias em Salvador a conquistar o apartamento próprio pelo Minha Casa Minha Vida — sem burocracia e sem enrolação.",
      cta: { label: "Quero minha casa agora", href: WA_LINK, external: true },
      ctaSecondary: { label: "Como funciona?", href: "#como-funciona" },
      stats: [
        { value: "100+", label: "famílias atendidas" },
        { value: "4", label: "construtoras parceiras" },
        { value: "0%", label: "entrada em alguns planos" },
      ],
    },
  },
  {
    id: 2,
    badge: "Novo Lançamento · MRV",
    bgGradient: "from-[#0D2137] to-[#1A3A5C]",
    bgImage: "/images/Banner MRV Bela Vista.jpeg",
    darkOverlay: true,
    content: {
      type: "launch" as const,
      label: "Lançamento MRV",
      title: ["MRV", "Bela Vista"],
      titleHighlight: 1,
      subtitle:
        "Apartamentos com área de lazer completa em Pernambués, Salvador. Parcelas que cabem no seu bolso pelo Minha Casa Minha Vida.",
      location: "Pernambués, Salvador/BA",
      highlight: "A partir de R$ 800/mês",
      cta: { label: "Quero saber mais", href: WA_LINK, external: true },
    },
  },
  {
    id: 3,
    badge: "Novo Lançamento · Direcional",
    bgGradient: "from-[#1A3A1A] to-[#2D5A2D]",
    bgImage: "/images/banner-conquista-vila-verde.png",
    darkOverlay: true,
    content: {
      type: "launch" as const,
      label: "Lançamento Direcional",
      title: ["Conquista", "Vila Verde"],
      titleHighlight: 1,
      subtitle:
        "Apartamentos de 1 e 2 quartos com piscina, churrasqueira e lazer completo. A partir de R$ 211.000 pelo Minha Casa Minha Vida.",
      location: "Abrantes, Camaçari/BA",
      highlight: "A partir de R$ 211.000",
      cta: { label: "Quero conhecer", href: WA_LINK, external: true },
    },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section
      className="relative pt-20 overflow-hidden"
      style={{ height: "calc(100svh - 0px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`} />
          <BgImage src={slide.bgImage} overlay={slide.darkOverlay} />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full py-12">
              {slide.content.type === "main" ? (
                <MainSlide slide={slide} />
              ) : (
                <LaunchSlide slide={slide} />
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
        aria-label="Anterior"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
        aria-label="Próximo"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-8 h-3 bg-white"
                : "w-3 h-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function BgImage({ src, overlay }: { src: string; overlay: boolean }) {
  const [error, setError] = useState(false);
  if (error) return null;
  return (
    <>
      <img
        src={src}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        onError={() => setError(true)}
      />
      {overlay && <div className="absolute inset-0 bg-black/55" />}
    </>
  );
}

function MainSlide({ slide }: { slide: typeof slides[0] }) {
  const c = slide.content as Extract<typeof slide.content, { type: "main" }>;
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="text-white">
        <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
          {slide.badge}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          {c.title.map((line, i) => (
            <span key={i} className={`block ${i === c.titleHighlight ? "text-brand-gold" : ""}`}>
              {line}
            </span>
          ))}
        </h1>
        <p className="text-white/85 text-lg leading-relaxed mb-8">{c.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={c.cta.href}
            target={c.cta.external ? "_blank" : undefined}
            rel={c.cta.external ? "noopener noreferrer" : undefined}
            className="btn-whatsapp text-base px-8 py-4 justify-center"
          >
            <WhatsAppIcon />
            {c.cta.label}
          </a>
          <a
            href={c.ctaSecondary.href}
            className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            {c.ctaSecondary.label}
          </a>
        </div>
        <div className="mt-10 flex gap-6 text-white/70 text-sm">
          {c.stats.map((stat, i) => (
            <div key={i} className="flex items-start gap-3">
              {i > 0 && <div className="w-px bg-white/20 self-stretch" />}
              <div>
                <span className="block text-2xl font-bold text-white">{stat.value}</span>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Card */}
      <div className="hidden md:flex justify-center">
        <div className="relative">
          <div className="w-80 h-96 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-brand-gold mb-4">
              <AneCardPhoto />
            </div>
            <p className="text-white font-bold text-xl">Ane França</p>
            <p className="text-white/70 text-sm mt-1">CRECI/BA · Corretora MCMV</p>
            <div className="mt-6 bg-white/20 rounded-2xl p-4 w-full">
              <p className="text-white/90 text-sm italic">
                "Meu objetivo é fazer você entrar pela porta da sua própria casa."
              </p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-brand-gold text-brand-green font-bold text-sm px-4 py-2 rounded-full shadow-lg">
            Atendimento via WhatsApp
          </div>
        </div>
      </div>
    </div>
  );
}

function LaunchSlide({ slide }: { slide: typeof slides[1] }) {
  const c = slide.content as Extract<typeof slide.content, { type: "launch" }>;
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <span className="inline-block bg-brand-gold text-brand-green text-sm font-bold px-4 py-1.5 rounded-full">
          {slide.badge}
        </span>
        <span className="text-white/60 text-sm flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {c.location}
        </span>
      </div>

      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-white">
        {c.title.map((line, i) => (
          <span key={i} className={`block ${i === c.titleHighlight ? "text-brand-gold" : ""}`}>
            {line}
          </span>
        ))}
      </h1>

      <div className="inline-block bg-white/20 backdrop-blur-sm text-white font-bold text-xl px-6 py-2 rounded-2xl mb-6 border border-white/30">
        {c.highlight}
      </div>

      <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">{c.subtitle}</p>

      <a
        href={c.cta.href}
        target={c.cta.external ? "_blank" : undefined}
        rel={c.cta.external ? "noopener noreferrer" : undefined}
        className="btn-whatsapp text-base px-8 py-4 inline-flex"
      >
        <WhatsAppIcon />
        {c.cta.label}
      </a>
    </div>
  );
}

function AneCardPhoto() {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className="w-full h-full bg-white/20 flex items-center justify-center">
        <span className="text-4xl font-bold text-white">AF</span>
      </div>
    );
  }
  return (
    <img
      src="/images/Perfil.png"
      alt="Ane França"
      className="w-full h-full object-cover"
      onError={() => setError(true)}
    />
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
