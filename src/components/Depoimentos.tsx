import { useState, useEffect } from "react";
import { WA_LINK } from "@/lib/constants";
import { useReveal } from "@/hooks/useReveal";

// Adicione mais objetos aqui conforme receber novos depoimentos
const depoimentos = [
  {
    id: 1,
    nome: "Juliana Souza",
    bairro: "Pernambués, Salvador",
    empreendimento: "MRV Bela Vista",
    foto: "/images/Exemplo Foto Perfil.jpg",
    screenshot: "/images/depoimento-1.jpg",
  },
  {
    id: 2,
    nome: "Carlos e Fernanda Lima",
    bairro: "Abrantes, Camaçari",
    empreendimento: "Conquista Vila Verde",
    foto: "/images/Exemplo Foto Perfil.jpg",
    screenshot: "/images/depoimento-2.jpg",
  },
  {
    id: 3,
    nome: "Marcos Oliveira",
    bairro: "Cajazeiras, Salvador",
    empreendimento: "MRV Bela Vista",
    foto: "/images/Exemplo Foto Perfil.jpg",
    screenshot: "/images/depoimento-3.jpg",
  },
  {
    id: 4,
    nome: "Patrícia Mendes",
    bairro: "Fazenda Grande, Salvador",
    empreendimento: "Tenda Viver Bem",
    foto: "/images/Exemplo Foto Perfil.jpg",
    screenshot: "/images/depoimento-4.jpg",
  },
  {
    id: 5,
    nome: "Ricardo e Ana Lima",
    bairro: "Mussurunga, Salvador",
    empreendimento: "MRV Bela Vista",
    foto: "/images/Exemplo Foto Perfil.jpg",
    screenshot: "/images/depoimento-5.jpg",
  },
  {
    id: 6,
    nome: "Fernanda Costa",
    bairro: "Lauro de Freitas",
    empreendimento: "Conquista Vila Verde",
    foto: "/images/Exemplo Foto Perfil.jpg",
    screenshot: "/images/depoimento-6.jpg",
  },
];

function DepoimentoCard({ dep }: { dep: typeof depoimentos[0] }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full">
      {/* WhatsApp header */}
      <div className="flex items-center gap-3 px-4 py-4 bg-[#075E54]">
        <div className="w-15 h-15 rounded-full bg-white/20 overflow-hidden flex items-center justify-center flex-shrink-0">
          {dep.foto
            ? <img src={dep.foto} alt={dep.nome} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.replaceWith(Object.assign(document.createElement("span"), { className: "text-white font-bold text-sm", textContent: dep.nome.charAt(0) })); }} />
            : <span className="text-white font-bold text-sm">{dep.nome.charAt(0)}</span>
          }
        </div>
        <div>
          <p className="text-white font-semibold text-sm leading-none">{dep.nome}</p>
          <p className="text-white/60 text-xs mt-0.5">{dep.bairro}</p>
        </div>
        <svg className="w-5 h-5 text-white/60 ml-auto" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </div>

      {/* Screenshot */}
      <div className="bg-[#ECE5DD] flex-1 min-h-56">
        <img
          src={dep.screenshot}
          alt={`Depoimento de ${dep.nome}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            const parent = e.currentTarget.parentElement;
            if (parent) {
              parent.style.display = "flex";
              parent.style.alignItems = "center";
              parent.style.justifyContent = "center";
              parent.innerHTML = `<p style="color:#aaa;font-size:0.8rem;padding:2rem;text-align:center">Print do depoimento<br/>em breve</p>`;
            }
          }}
        />
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-gray-100">
        <p className="text-base font-semibold text-brand-green">{dep.empreendimento}</p>
      </div>
    </div>
  );
}

export default function Depoimentos() {
  const { ref: titleRef, visible: titleVisible } = useReveal(0.2);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const update = () => setCardsPerView(window.innerWidth >= 768 ? 3 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, depoimentos.length - cardsPerView);

  // Clamp index when viewport changes
  useEffect(() => {
    setCurrent((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  // Auto-advance
  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const id = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [paused, maxIndex]);

  const cardWidth = 100 / cardsPerView;

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Quem já realizou o{" "}
            <span className="relative inline-block pb-3">
              sonho da casa própria
              <svg className="absolute left-0 w-full" style={{ bottom: 0 }} viewBox="0 0 300 10" fill="none" preserveAspectRatio="none">
                <path d="M1 7C30 3.5 60 8 90 5.5C120 3 155 8.5 185 6C215 3.5 248 7.5 275 5C285 4 294 6.5 299 7.5" stroke="#1B5E20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            Famílias reais de Salvador que saíram do aluguel com a minha ajuda.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * cardWidth}%)` }}
          >
            {depoimentos.map((dep) => (
              <div
                key={dep.id}
                className="flex-shrink-0 px-3"
                style={{ width: `${cardWidth}%` }}
              >
                <DepoimentoCard dep={dep} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        {maxIndex > 0 && (
          <div className="flex justify-center gap-2 mt-8 mb-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Depoimento ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-2.5 bg-brand-green"
                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-mid text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            Quero ser o próximo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
