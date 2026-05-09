import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { empreendimentos, getEmpreendimento } from "@/data/empreendimentos";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WhatsAppIcon } from "@/components/icons";
import { WHATSAPP_NUMBER } from "@/lib/constants";

type Props = { params: Promise<{ cidade: string; slug: string }> };

export async function generateStaticParams() {
  return empreendimentos.map((e) => ({ cidade: e.cidade, slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cidade, slug } = await params;
  const emp = getEmpreendimento(cidade, slug);
  if (!emp) return {};

  const title = `${emp.nome} | Apartamentos MCMV em ${emp.bairro}, ${emp.cidadeLabel} - Ane França Corretora`;
  const description = `Apartamentos de ${emp.quartos.join(" e ")} quartos a partir de R$ ${emp.parcelaMin.toLocaleString("pt-BR")}/mês pelo Minha Casa Minha Vida em ${emp.bairro}, ${emp.cidadeLabel}/${emp.estado}. Subsídio de até R$ 55.000. Simule grátis.`;

  return {
    title,
    description,
    alternates: { canonical: `/imoveis/${emp.cidade}/${emp.slug}` },
    openGraph: {
      title,
      description,
      images: [{ url: emp.ogImage, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description, images: [emp.ogImage] },
  };
}

export default async function EmpreendimentoPage({ params }: Props) {
  const { cidade, slug } = await params;
  const emp = getEmpreendimento(cidade, slug);
  if (!emp) notFound();

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(emp.whatsappMsg)}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: emp.faq.map((f) => ({
      "@type": "Question",
      name: f.pergunta,
      acceptedAnswer: { "@type": "Answer", text: f.resposta },
    })),
  };

  const produtoSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: emp.nome,
    description: emp.descricao.split("\n")[0],
    image: emp.ogImage,
    offers: {
      "@type": "Offer",
      price: emp.valorMin,
      priceCurrency: "BRL",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: emp.cidadeLabel,
      addressRegion: emp.estado,
      addressCountry: "BR",
    },
  };

  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(produtoSchema) }}
      />

      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img
            src={emp.fotos[0]}
            alt={emp.nome}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-10 z-10">
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-brand-gold text-brand-green text-xs font-bold px-3 py-1 rounded-full">
                  {emp.faixaMCMV} MCMV
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                  {emp.construtora}
                </span>
                {emp.status === "lancamento" && (
                  <span className="bg-[#25D366] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Lançamento
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-2">
                {emp.nome}
              </h1>
              <p className="text-white/80 text-lg flex items-center gap-1.5">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {emp.bairro}, {emp.cidadeLabel}/{emp.estado}
              </p>
            </div>
          </div>
        </section>

        {/* Quick info bar */}
        <section className="bg-brand-green text-white">
          <div className="max-w-4xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-white/60 text-xs uppercase tracking-wide mb-0.5">Parcela a partir de</p>
              <p className="font-black text-xl">R$ {emp.parcelaMin.toLocaleString("pt-BR")}/mês</p>
            </div>
            <div>
              <p className="text-white/60 text-xs uppercase tracking-wide mb-0.5">Renda familiar até</p>
              <p className="font-black text-xl">R$ {emp.rendaFamiliarMax.toLocaleString("pt-BR")}</p>
            </div>
            <div>
              <p className="text-white/60 text-xs uppercase tracking-wide mb-0.5">Quartos</p>
              <p className="font-black text-xl">{emp.quartos.join(" ou ")} quartos</p>
            </div>
            <div>
              <p className="text-white/60 text-xs uppercase tracking-wide mb-0.5">Subsídio até</p>
              <p className="font-black text-xl">R$ 55.000</p>
            </div>
          </div>
        </section>

        {/* Descrição + Diferenciais */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-12">

            {/* Descrição */}
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
                Sobre o empreendimento
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {emp.descricao.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Diferenciais + CTA fixo */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4">Diferenciais</h3>
                <ul className="space-y-2.5">
                  {emp.diferenciais.map((d) => (
                    <li key={d} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-6 py-4 rounded-2xl transition-colors shadow-lg w-full text-center"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Quero saber mais
              </a>
              {emp.entrega && (
                <p className="text-center text-xs text-gray-400 mt-2">Entrega prevista: {emp.entrega}</p>
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center">
              Perguntas frequentes
            </h2>
            <div className="space-y-4">
              {emp.faq.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2">{f.pergunta}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.resposta}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 bg-brand-green text-white text-center px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Pronto para sair do aluguel?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Me chama no WhatsApp e faço uma simulação gratuita para você — sem burocracia e sem compromisso.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-brand-green font-bold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors shadow-xl text-lg"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Simular pelo WhatsApp
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
