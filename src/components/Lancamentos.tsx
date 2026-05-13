import Link from "next/link";
import { empreendimentos } from "@/data/empreendimentos";

export default function Lancamentos() {
  return (
    <section id="lancamentos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            Disponíveis agora
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Lançamentos pelo{" "}
            <span className="text-brand-green">Minha Casa Minha Vida</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            Imóveis com subsídio de até R$ 55.000 em Salvador e região metropolitana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {empreendimentos.slice(0, 4).map((emp) => (
            <Link
              key={emp.slug}
              href={`/imoveis/${emp.cidade}/${emp.slug}`}
              className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={emp.fotos[0]}
                  alt={emp.nome}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-brand-gold text-brand-green text-xs font-bold px-2.5 py-1 rounded-full">
                    {emp.faixaMCMV}
                  </span>
                  {emp.status === "lancamento" && (
                    <span className="bg-[#25D366] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      Lançamento
                    </span>
                  )}
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-white font-black text-xl leading-tight">{emp.nome}</p>
                  <p className="text-white/80 text-xs">{emp.bairro}, {emp.cidadeLabel}/{emp.estado}</p>
                </div>
              </div>

              <div className="px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400">A partir de</p>
                  <p className="text-lg font-black text-brand-green">
                    R$ {emp.valorMin.toLocaleString("pt-BR")}
                  </p>
                </div>
                <span className="text-sm font-semibold text-brand-green flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ver detalhes
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/imoveis"
            className="inline-flex items-center gap-2 border-2 border-brand-green text-brand-green font-bold px-8 py-3.5 rounded-full hover:bg-brand-green hover:text-white transition-all duration-200"
          >
            Ver todos os empreendimentos
          </Link>
        </div>

      </div>
    </section>
  );
}
