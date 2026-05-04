import { useEffect, useRef, useState } from "react";

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
      <div className="flex items-center gap-3 text-3xl md:text-5xl font-black tracking-tighter flex-shrink-0" style={{ color: "#1B5E20" }}>
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl flex-shrink-0" style={{ backgroundColor: "#1B5E20", transform: "rotate(3deg)" }} />
        MRV
      </div>
      <div className="flex items-center gap-3 text-3xl md:text-5xl font-black tracking-tighter flex-shrink-0" style={{ color: "#E31E24" }}>
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full flex-shrink-0" style={{ backgroundColor: "#E31E24" }} />
        Tenda
      </div>
      <div className="flex items-center gap-3 text-3xl md:text-5xl font-black tracking-tighter flex-shrink-0" style={{ color: "#0052A5" }}>
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl flex-shrink-0" style={{ backgroundColor: "#0052A5", transform: "rotate(45deg)" }} />
        Direcional
      </div>
      <div className="flex items-center gap-2 text-lg md:text-2xl font-bold text-gray-300 flex-shrink-0">
        <BuildingIcon />
        E outras...
      </div>
    </>
  );
}

export default function Construtoras() {
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
              style={{ color: "#1B5E20", transform: "rotate(2deg)" }}
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
          {/* Scrolling track */}
          <div className="animate-marquee flex items-center gap-8 md:gap-16 px-6 md:px-8 whitespace-nowrap">
            <MarqueeItems />
            {/* Duplicate for seamless loop */}
            <MarqueeItems />
          </div>

          {/* Fade edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
