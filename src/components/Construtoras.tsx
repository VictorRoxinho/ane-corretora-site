"use client";

import { useReveal } from "@/hooks/useReveal";

function BuildingIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function MarqueeItems() {
  return (
    <>
      <div className="h-10 md:h-14 w-28 md:w-36 flex-shrink-0">
        <img src="/images/logo-construtora-mrv.png" alt="MRV" loading="eager" className="h-full w-full object-contain" />
      </div>
      <div className="flex items-center gap-3 text-3xl md:text-5xl font-black tracking-tighter flex-shrink-0" style={{ color: "#E31E24" }}>
        <div className="w-8 h-8 md:w-12 md:h-12 flex-shrink-0">
          <img src="/images/logo-construtora-tenda.png" alt="" loading="eager" className="w-full h-full object-contain" />
        </div>
        Tenda
      </div>
      <div className="h-10 md:h-14 w-36 md:w-48 flex-shrink-0">
        <img src="/images/logo-construtora-direcional.png" alt="Direcional" loading="eager" className="h-full w-full object-contain" />
      </div>
      <div className="h-10 md:h-14 w-28 md:w-36 flex-shrink-0">
        <img src="/images/logo-construtora-stanza.png" alt="Stanza" loading="eager" className="h-full w-full object-contain" />
      </div>
      <div className="flex items-center gap-2 text-lg md:text-2xl font-bold text-gray-300 flex-shrink-0">
        <BuildingIcon />
        E outras...
      </div>
    </>
  );
}

export default function Construtoras() {
  const { ref: titleRef, visible: titleVisible } = useReveal(0.2);

  return (
    <section id="construtoras" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Trabalho com as{" "}
            <span
              className="relative inline-block px-2"
              style={{ color: "#1B5E20" }}
            >
              {/* highlighter effect */}
              <span
                className="absolute inset-0 -skew-x-2 rounded-sm"
                style={{ backgroundColor: "#AEEA0060", bottom: "2px", top: "auto", height: "45%" }}
              />
              <span className="relative">melhores construtoras</span>
            </span>
          </h2>
          <p className="mt-4 text-base md:text-xl text-gray-500">
            Opções em diversas regiões de Salvador e Lauro de Freitas.
          </p>
        </div>

        {/* Marquee */}
        <div
          className="relative flex overflow-hidden bg-white py-6 md:py-8 rounded-[2rem] md:rounded-[3rem] shadow-sm border border-gray-100"
          style={{ transform: "rotate(-1deg)" }}
        >
          {/* Scrolling track — two copies with matching trailing gap for seamless -50% loop */}
          <div className="animate-marquee flex items-center" style={{ willChange: "transform" }}>
            <div className="flex items-center gap-8 md:gap-16 pr-8 md:pr-16">
              <MarqueeItems />
            </div>
            <div className="flex items-center gap-8 md:gap-16 pr-8 md:pr-16">
              <MarqueeItems />
            </div>
          </div>

          {/* Fade edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
