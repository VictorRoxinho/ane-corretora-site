import { useEffect, useRef, useState } from "react";
import { WA_LINK_INDICACAO } from "@/lib/constants";

const steps = [
  {
    icon: (
      <svg className="w-7 h-7 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6-4.13a4 4 0 10-8 0 4 4 0 008 0zm6 0a3 3 0 10-6 0 3 3 0 006 0zM3 10a3 3 0 106 0 3 3 0 00-6 0z" />
      </svg>
    ),
    title: "1. Você indica",
    desc: "Me passa o contato do seu amigo ou parente.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 16l-4-4m0 0l4-4m-4 4h18M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    ),
    title: "2. Eu atendo",
    desc: "Faço todo o processo de aprovação e venda.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 9V7a4 4 0 00-8 0v2M5 9h14l1 12H4L5 9zm5 5v3m4-3v3" />
      </svg>
    ),
    title: "3. Você ganha",
    desc: "Contrato assinado? O Pix de R$ 500 tá na conta!",
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

export default function Indicacoes() {
  const left = useReveal();
  const right = useReveal();

  return (
    <section id="indicacoes" className="py-24 relative overflow-hidden" style={{ backgroundColor: "#0A1628" }}>

      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "#F9A825", filter: "blur(140px)", opacity: 0.15 }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "#1B5E20", filter: "blur(140px)", opacity: 0.2 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div
            ref={left.ref}
            className="transition-all duration-700"
            style={{ opacity: left.visible ? 1 : 0, transform: left.visible ? "translateX(0)" : "translateX(-40px)" }}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-gray-900 text-sm font-black mb-8 shadow-lg"
              style={{ backgroundColor: "#F9A825", transform: "rotate(-2deg)" }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a4 4 0 00-4-4H5.45a2 2 0 00-1.8 2.89L5 8m7 0H5m7 0h7m-7 0V6a4 4 0 014-4h2.55a2 2 0 011.8 2.89L17 8m0 0h-5" />
              </svg>
              <span className="uppercase tracking-wider">Programa de Indicação</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-white tracking-tight">
              Indique um amigo<br />e ganhe{" "}
              <span className="relative inline-block pb-3" style={{ color: "#F9A825" }}>
                R$ 500 no Pix!
                <svg className="absolute left-0 w-full" style={{ bottom: 0 }} viewBox="0 0 300 10" fill="none" preserveAspectRatio="none">
                  <path d="M1 7C35 3 70 9 105 6C140 3 175 8 210 5C240 3.5 268 7.5 298 6" stroke="#F9A825" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-white/60 mb-10 leading-relaxed max-w-lg">
              Conhece alguém que quer sair do aluguel? Indique para mim. Se a pessoa comprar o imóvel, você ganha R$ 500 direto na sua conta, sem burocracia.
            </p>

            {/* Steps */}
            <div className="space-y-4">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-200"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(249,168,37,0.15)", transform: "rotate(3deg)" }}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-white mb-0.5">{step.title}</h4>
                    <p className="text-white/50 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA Card */}
          <div
            ref={right.ref}
            className="relative transition-all duration-700 delay-200"
            style={{
              opacity: right.visible ? 1 : 0,
              transform: right.visible ? "rotate(2deg) scale(1)" : "rotate(5deg) scale(0.9)",
            }}
          >
            {/* Decorative circles */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full z-20" style={{ backgroundColor: "#F9A825" }} />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full z-20" style={{ backgroundColor: "#1B5E20" }} />

            {/* Card */}
            <div
              className="relative z-10 p-10 shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #1e2d45 0%, #0f1d2e 100%)",
                borderRadius: "3rem 3rem 3rem 0.5rem",
                border: "2px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-black mb-3 text-white tracking-tight">
                  Quero indicar agora!
                </h3>
                <p className="text-white/40 text-base">
                  Me chame no WhatsApp e passe o contato.
                </p>
              </div>

              <a
                href={WA_LINK_INDICACAO}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-8 py-5 text-lg font-black text-gray-900 rounded-2xl transition-all duration-200 mb-5 shadow-xl"
                style={{ backgroundColor: "#F9A825" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#f5b800")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#F9A825")}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Indicar pelo WhatsApp
              </a>

              <div
                className="p-4 rounded-2xl border border-white/10"
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                <p className="text-center text-sm text-white/40">
                  <span className="font-bold" style={{ color: "#F9A825" }}>Dica:</span>{" "}
                  Não há limite de indicações. Quanto mais indicar, mais pode ganhar!
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
