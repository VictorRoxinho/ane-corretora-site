import { useState } from "react";
import { WA_LINK_INDICACAO } from "@/lib/constants";

const steps = [
  {
    icon: "👥",
    title: "Indica um amigo ou familiar",
    description: "Qualquer pessoa que esteja buscando a casa própria pelo MCMV.",
  },
  {
    icon: "💬",
    title: "Eu entro em contato",
    description: "Faço a análise de perfil e acompanho do início ao fim.",
  },
  {
    icon: "🔑",
    title: "Indicado fecha o contrato",
    description: "Quando a venda é concluída, você recebe seu pagamento.",
  },
  {
    icon: "💸",
    title: "R$ 500 no seu Pix",
    description: "Pagamento rápido, direto na sua chave Pix. Sem enrolação.",
  },
];

export default function Indicacoes() {
  const [form, setForm] = useState({
    seu_nome: "",
    seu_whatsapp: "",
    indicado_nome: "",
    indicado_whatsapp: "",
    observacao: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    // TODO: integrar com n8n webhook
    console.log("Indicação recebida:", form);
    setSubmitted(true);
  }

  return (
    <section id="indicacoes" className="py-20 bg-gradient-to-br from-brand-gold/10 to-brand-gold/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-gold text-brand-green font-bold text-sm px-4 py-1.5 rounded-full mb-4">
            Programa de Indicações
          </span>
          <h2 className="section-title">
            Indica um amigo, ganha{" "}
            <span className="text-brand-green">R$ 500 no Pix</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Conhece alguém que quer a casa própria? Me indica e você recebe R$500 quando a venda fechar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div>
            <div className="space-y-6 mb-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-2xl flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{step.title}</h4>
                    <p className="text-gray-500 text-sm mt-0.5">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-brand-green rounded-2xl p-6 text-white">
              <p className="font-bold text-lg mb-1">Sem limite de indicações!</p>
              <p className="text-white/80 text-sm">
                Você pode indicar quantas pessoas quiser. Cada uma que fechar contrato vale R$500 no seu Pix.
              </p>
              <a
                href={WA_LINK_INDICACAO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-5 py-2.5 rounded-full transition-all text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Indicar pelo WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="card shadow-md">
            {submitted ? (
              <div className="text-center py-8">
                <span className="text-5xl">🎉</span>
                <h3 className="font-bold text-gray-900 text-xl mt-4 mb-2">
                  Indicação enviada!
                </h3>
                <p className="text-gray-500">
                  Vou entrar em contato com a pessoa indicada. Assim que fechar, o Pix cai na sua conta!
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-bold text-gray-900 text-lg mb-6">
                  Preencha a indicação
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Seu nome
                      </label>
                      <input
                        type="text"
                        name="seu_nome"
                        value={form.seu_nome}
                        onChange={handleChange}
                        required
                        placeholder="João Silva"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Seu WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="seu_whatsapp"
                        value={form.seu_whatsapp}
                        onChange={handleChange}
                        required
                        placeholder="(71) 9 9999-9999"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nome do indicado
                      </label>
                      <input
                        type="text"
                        name="indicado_nome"
                        value={form.indicado_nome}
                        onChange={handleChange}
                        required
                        placeholder="Maria Santos"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        WhatsApp do indicado
                      </label>
                      <input
                        type="tel"
                        name="indicado_whatsapp"
                        value={form.indicado_whatsapp}
                        onChange={handleChange}
                        required
                        placeholder="(71) 9 9999-9999"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Observação (opcional)
                    </label>
                    <textarea
                      name="observacao"
                      value={form.observacao}
                      onChange={handleChange}
                      placeholder="Ex: Ela mora em Cajazeiras e já tem renda comprovada."
                      rows={3}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary justify-center py-3.5"
                  >
                    Enviar indicação e ganhar R$500
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Pagamento via Pix após o fechamento do contrato.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
