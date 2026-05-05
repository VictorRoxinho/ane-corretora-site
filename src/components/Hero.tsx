import { useState, useEffect, useCallback, useRef } from "react";
import { WA_LINK } from "@/lib/constants";

const slides = [
  {
    id: 1,
    bgGradient: "from-[#1B5E20] to-[#2E7D32]",
    bgImage: "/images/corretora_banner_principal-removebg.png",
    overlay: "bg-black/40",
    content: {
      type: "main" as const,
      badge: "Corretora oficial MCMV · Salvador/BA",
      title: "Sua casa própria\ncomeça aqui",
      subtitle:
        "Já ajudei dezenas de famílias em Salvador a conquistar o apartamento próprio pelo Minha Casa Minha Vida — sem burocracia e sem enrolação.",
      cta: "Quero minha casa agora",
    },
  },
  {
    id: 2,
    bgGradient: "from-[#0D2137] to-[#1A3A5C]",
    bgImage: "/images/Banner MRV Bela Vista.jpeg",
    overlay: "bg-black/50",
    content: {
      type: "launch" as const,
      badge: "Novo Lançamento · MRV",
      title: "MRV\nBela Vista",
      subtitle:
        "Apartamentos com área de lazer completa em Pernambués, Salvador. Parcelas que cabem no seu bolso pelo Minha Casa Minha Vida.",
      location: "Pernambués, Salvador/BA",
      highlight: "A partir de R$ 800/mês",
      cta: "Quero saber mais",
    },
  },
  {
    id: 3,
    bgGradient: "from-[#1A3A1A] to-[#2D5A2D]",
    bgImage: "/images/Banner - Conquista Vila Verde.png",
    overlay: "bg-black/50",
    content: {
      type: "launch" as const,
      badge: "Novo Lançamento · Direcional",
      title: "Conquista\nVila Verde",
      subtitle:
        "Apartamentos de 1 e 2 quartos com piscina, churrasqueira e lazer completo em Abrantes, Camaçari.",
      location: "Abrantes, Camaçari/BA",
      highlight: "A partir de R$ 211.000",
      cta: "Quero conhecer",
    },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number>(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
    setPaused(false);
  };

  const slide = slides[current];

  return (
    <section
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Backgrounds */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {s.content.type === "main" ? (
            <>
              {/* Slide principal: gradiente full + imagem à direita */}
              <div className={`absolute inset-0 bg-gradient-to-br ${s.bgGradient}`} />
              <div className="absolute right-[6%] top-0 h-full w-2/5 md:w-[38%]" style={{ paddingTop: "80px" }}>
                <img
                  src={s.bgImage}
                  alt=""
                  className="w-full h-full object-contain object-bottom"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
            </>
          ) : (
            <>
              <div className={`absolute inset-0 bg-gradient-to-br ${s.bgGradient}`} />
              <BgImage src={s.bgImage} />
              <div className={`absolute inset-0 ${s.overlay}`} />
            </>
          )}
        </div>
      ))}

      {/* Content — bottom left */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-12 pb-36 md:pb-32">
        <div className="flex items-end justify-between gap-8">

          {/* Left: text */}
          <div className="max-w-2xl">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-white/20">
              {slide.content.badge}
            </span>

            {"location" in slide.content && (
              <div className="flex items-center gap-1.5 text-white/60 text-sm mb-3">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {slide.content.location}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-4 whitespace-pre-line">
              {slide.content.title}
            </h1>

            {"highlight" in slide.content && (
              <div className="inline-block bg-brand-gold text-brand-green font-bold text-sm px-4 py-1.5 rounded-full mb-4">
                {slide.content.highlight}
              </div>
            )}

            <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
              {slide.content.subtitle}
            </p>
          </div>

          {/* Right: CTA button */}
          <div className="hidden md:flex flex-col items-end gap-4 flex-shrink-0">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 py-4 rounded-2xl transition-all duration-200 shadow-xl hover:-translate-y-0.5 group"
            >
              <span>{slide.content.cta}</span>
              <span className="w-8 h-8 bg-brand-green group-hover:bg-brand-green-mid rounded-xl flex items-center justify-center text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden mt-5 flex items-center gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3.5 rounded-full shadow-lg text-sm"
          >
            {slide.content.cta}
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-lg flex-shrink-0"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Slide indicators — bottom center */}
      <div className="absolute bottom-28 md:bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current ? "w-8 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Wave divider animada → JornadaCards branco */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none overflow-hidden" style={{ marginBottom: "-2px", height: "90px" }}>
        {/* Camada 2 — mais suave, mais rápida, levemente desfasada */}
        <div style={{ width: "200%", animation: "wave-flow 7s linear infinite", position: "absolute", bottom: 0, left: 0 }}>
          <svg viewBox="0 0 2880 90" preserveAspectRatio="none" style={{ width: "100%", height: "90px", display: "block" }}>
            <path d="M0,65 C480,20 960,85 1440,65 C1920,20 2400,85 2880,65 L2880,90 L0,90 Z" fill="rgba(255,255,255,0.4)"/>
          </svg>
        </div>
        {/* Camada 1 — principal, mais lenta */}
        <div style={{ width: "200%", animation: "wave-flow 12s linear infinite", position: "absolute", bottom: 0, left: 0 }}>
          <svg viewBox="0 0 2880 90" preserveAspectRatio="none" style={{ width: "100%", height: "90px", display: "block" }}>
            <path d="M0,55 C480,0 960,80 1440,55 C1920,0 2400,80 2880,55 L2880,90 L0,90 Z" fill="white"/>
          </svg>
        </div>
      </div>

    </section>
  );
}

function BgImage({ src }: { src: string }) {
  const [error, setError] = useState(false);
  if (error) return null;
  return (
    <img
      src={src}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      onError={() => setError(true)}
    />
  );
}
