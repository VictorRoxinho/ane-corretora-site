"use client";

type TagColor = "green" | "blue" | "gold" | "gray";

type Phase = {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  tagColor: TagColor;
  items: { id: string; title: string; description: string; done: boolean }[];
};

// Para marcar um item como concluído, mude `done: false` para `done: true`
const phases: Phase[] = [
  {
    id: "phase-1",
    number: 1,
    title: "Lançamento",
    subtitle: "Conteúdo e conversão",
    tagColor: "blue",
    items: [
      {
        id: "testimonials",
        title: "Seção de depoimentos de clientes",
        description: "Mínimo 3 depoimentos reais com foto e nome.",
        done: true,
      },
      {
        id: "nomenclatura",
        title: "Nomenclatura no código",
        description: "Ajeitar as nomenclaturas de arquivos e componentes do código",
        done: true,
      },
      {
        id: "cta-final-reformular",
        title: "Reformular o CTA Final",
        description: "Melhorar o design do cta final",
        done: true,
      },
      {
        id: "ssr",
        title: "Migrar para SSR (Next.js)",
        description: "Fazer antes das páginas de empreendimentos. SPA não indexa páginas internas no Google — todo esforço de conteúdo seria desperdiçado.",
        done: false,
      },
      {
        id: "launch-pages",
        title: "Páginas de detalhe dos lançamentos",
        description: "Uma página por empreendimento com fotos, localização, faixa de renda, plantas e CTA.",
        done: false,
      },
      {
        id: "simulator",
        title: "Simulador de renda/parcela",
        description: "Campo de renda familiar → mostra faixa MCMV elegível e parcela estimada.",
        done: false,
      },
    ],
  },
  {
    id: "phase-2",
    number: 2,
    title: "Pré-lançamento obrigatório",
    subtitle: "Antes de ir ao ar",
    tagColor: "green",
    items: [
      {
        id: "analytics",
        title: "Google Analytics 4 + Meta Pixel",
        description: "Sem isso não sabemos de onde vieram os leads. GA4 para tráfego, Meta Pixel para remarketing.",
        done: false,
      },
      {
        id: "domain",
        title: "Domínio + hospedagem",
        description: "Registrar corretoraanefranca.com.br, configurar Vercel, apontar DNS.",
        done: false,
      },
      {
        id: "n8n",
        title: "Integração com n8n",
        description: "CtaFinal deve enviar nome/telefone/interesse via webhook antes de redirecionar para WhatsApp.",
        done: false,
      },
      {
        id: "google-business",
        title: "Google Business Profile",
        description: "Criar perfil no Google Maps com endereço Salvador/BA, horário, fotos e link.",
        done: false,
      },
      {
        id: "real-images",
        title: "Imagens reais dos empreendimentos",
        description: "Slides 2 e 3 do Hero precisam de fotos reais (MRV Bela Vista, Conquista Vila Verde).",
        done: false,
      },
      {
        id: "design-improvements",
        title: "Melhorias de design e nova seção de imóveis",
        description: "Ajustes visuais em seções existentes e criação da seção de listagem de imóveis disponíveis.",
        done: false,
      },
      {
        id: "performance",
        title: "Teste de performance mobile",
        description: "Lighthouse em 4G simulado. Meta: LCP abaixo de 2.5s.",
        done: false,
      },
    ],
  },
  {
    id: "phase-3",
    number: 3,
    title: "Mês 1–2",
    subtitle: "SEO e autoridade",
    tagColor: "gold",
    items: [
      {
        id: "blog",
        title: "Blog: conteúdo MCMV Salvador",
        description: "Artigos sobre como comprar, documentos necessários, bairros com MCMV em Salvador.",
        done: false,
      },
      {
        id: "link-building",
        title: "Link building local",
        description: "Cadastro em VivaReal, ZAP, OLX com link para o site.",
        done: false,
      },
    ],
  },
  {
    id: "phase-4",
    number: 4,
    title: "Mês 3+",
    subtitle: "Automação e escala",
    tagColor: "gray",
    items: [
      {
        id: "referral-panel",
        title: "Painel de gestão do programa de indicações",
        description: "Indicador acompanha status em tempo real.",
        done: false,
      },
      {
        id: "chatbot",
        title: "Chatbot de pré-qualificação",
        description: "Faz 3 perguntas básicas antes de abrir o WhatsApp.",
        done: false,
      },
    ],
  },
];

const tagStyles: Record<TagColor, { bg: string; text: string; checkBg: string }> = {
  green: { bg: "bg-[#1B5E20]", text: "text-white",    checkBg: "#1B5E20" },
  blue:  { bg: "bg-[#1565C0]", text: "text-white",    checkBg: "#1565C0" },
  gold:  { bg: "bg-[#F9A825]", text: "text-gray-900", checkBg: "#F9A825" },
  gray:  { bg: "bg-gray-400",  text: "text-white",    checkBg: "#9CA3AF" },
};

export default function Roadmap() {
  const totalItems = phases.reduce((acc, p) => acc + p.items.length, 0);
  const doneItems  = phases.reduce((acc, p) => acc + p.items.filter(i => i.done).length, 0);
  const progress   = totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Figtree', system-ui, sans-serif" }}>

      {/* Header */}
      <div style={{ backgroundColor: "#1B5E20" }} className="text-white">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm mb-6 transition-colors"
            style={{ color: "rgba(255,255,255,0.6)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "white")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar ao site
          </a>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
            Ane França Corretora
          </p>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">Roadmap do Projeto</h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            Acompanhe o progresso de desenvolvimento do site.
          </p>
        </div>
      </div>

      {/* Progress bar — sticky */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-gray-700">
              {doneItems} de {totalItems} itens concluídos
            </span>
            <span className="text-sm font-black" style={{ color: "#1B5E20" }}>{progress}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
            <div
              className="h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, backgroundColor: "#1B5E20" }}
            />
          </div>
        </div>
      </div>

      {/* Phases */}
      <div className="max-w-3xl mx-auto px-6 py-10 space-y-10 pb-20">
        {phases.map((phase) => {
          const style = tagStyles[phase.tagColor];
          const phaseDone = phase.items.filter(i => i.done).length;

          return (
            <div key={phase.id}>
              {/* Phase header */}
              <div className="flex items-center gap-3 mb-5">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${style.bg} ${style.text}`}>
                  Fase {phase.number}
                </span>
                <div>
                  <h2 className="font-black text-gray-900 text-lg leading-tight">{phase.title}</h2>
                  <p className="text-gray-400 text-xs">{phase.subtitle} · {phaseDone}/{phase.items.length} concluídos</p>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {phase.items.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-start gap-4 bg-white rounded-2xl px-5 py-4 border border-gray-100 transition-opacity duration-200 ${
                      item.done ? "opacity-50" : "shadow-sm"
                    }`}
                  >
                    {/* Checkbox (visual only) */}
                    <div
                      className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 border-2"
                      style={
                        item.done
                          ? { backgroundColor: style.checkBg, borderColor: style.checkBg }
                          : { borderColor: "#D1D5DB", backgroundColor: "white" }
                      }
                    >
                      {item.done && (
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <p className={`font-bold text-sm leading-snug ${item.done ? "line-through text-gray-400" : "text-gray-900"}`}>
                        {item.title}
                      </p>
                      <p className={`text-xs mt-1 leading-relaxed ${item.done ? "text-gray-300" : "text-gray-500"}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}