import { WA_LINK } from "@/lib/constants";

const construtoras = [
  {
    name: "MRV",
    color: "#E31E24",
    description:
      "Maior construtora do MCMV no Brasil. Dezenas de opções em Salvador com 0% de entrada e parcelas que cabem no bolso.",
    destaque: "0% de entrada",
  },
  {
    name: "Tenda",
    color: "#0052A5",
    description:
      "Apartamentos modernos com infraestrutura completa. Processo 100% digital e aprovação rápida.",
    destaque: "Aprovação rápida",
  },
  {
    name: "Direcional",
    color: "#F26522",
    description:
      "Empreendimentos com lazer completo e localização privilegiada em Salvador.",
    destaque: "Lazer completo",
  },
  {
    name: "Outras",
    color: "#1B5E20",
    description:
      "Trabalho com as melhores construtoras do mercado. Me fala o que você precisa e eu encontro a opção ideal.",
    destaque: "Melhor opção pra você",
  },
];

export default function Construtoras() {
  return (
    <section id="construtoras" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-brand-green font-semibold text-sm uppercase tracking-wide">
            Construtoras parceiras
          </span>
          <h2 className="section-title mt-2">
            As melhores opções em Salvador
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Trabalho com as maiores construtoras do programa Minha Casa Minha Vida. Você escolhe, eu cuido do resto.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {construtoras.map((c) => (
            <div
              key={c.name}
              className="card hover:shadow-md transition-shadow flex flex-col"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-white font-extrabold text-xl"
                style={{ backgroundColor: c.color }}
              >
                {c.name.charAt(0)}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">{c.name}</h3>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start"
                style={{ backgroundColor: `${c.color}18`, color: c.color }}
              >
                {c.destaque}
              </span>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{c.description}</p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-brand-green font-semibold text-sm hover:underline"
              >
                Ver opções →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
