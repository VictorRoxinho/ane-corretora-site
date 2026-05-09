import type { Metadata } from "next";
import Link from "next/link";
import { empreendimentos } from "@/data/empreendimentos";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Imóveis MCMV em Salvador e região | Ane França Corretora",
  description:
    "Apartamentos pelo Minha Casa Minha Vida em Salvador, Camaçari e Lauro de Freitas. Parcelas a partir de R$ 700/mês, subsídio de até R$ 55.000. Consulte a corretora Ane França.",
  alternates: { canonical: "/imoveis" },
};

const statusLabel: Record<string, string> = {
  lancamento: "Lançamento",
  "em-obras": "Em obras",
  pronto: "Pronto para morar",
};

export default function ImoveisPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-6">

          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Empreendimentos disponíveis
            </h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Apartamentos com subsídio MCMV em Salvador e região metropolitana.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {empreendimentos.map((emp) => (
              <Link
                key={emp.slug}
                href={`/imoveis/${emp.cidade}/${emp.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={emp.fotos[0]}
                    alt={emp.nome}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-brand-gold text-brand-green text-xs font-bold px-2.5 py-1 rounded-full">
                      {emp.faixaMCMV}
                    </span>
                    <span className="bg-white/90 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {statusLabel[emp.status]}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs text-gray-400 font-medium mb-1">{emp.construtora}</p>
                  <h2 className="text-xl font-black text-gray-900 mb-1">{emp.nome}</h2>
                  <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {emp.bairro}, {emp.cidadeLabel}/{emp.estado}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400">A partir de</p>
                      <p className="text-lg font-black text-brand-green">
                        R$ {emp.valorMin.toLocaleString("pt-BR")}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-brand-green group-hover:underline">
                      Ver detalhes →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
