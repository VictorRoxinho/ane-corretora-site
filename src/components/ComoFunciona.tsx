import { WA_LINK } from "@/lib/constants";

const steps = [
  {
    step: "01",
    title: "Me manda uma mensagem",
    description:
      "Você fala comigo pelo WhatsApp, me conta sua situação e eu te explico tudo sem compromisso.",
  },
  {
    step: "02",
    title: "Análise de perfil grátis",
    description:
      "Verifico se você se encaixa no programa, qual faixa de renda, e quais apartamentos estão disponíveis pra você.",
  },
  {
    step: "03",
    title: "Visita ao imóvel",
    description:
      "Te levo pessoalmente para conhecer os empreendimentos que combinam com o seu perfil em Salvador.",
  },
  {
    step: "04",
    title: "Documentação e financiamento",
    description:
      "Cuido de toda a burocracia com a Caixa Econômica e a construtora. Você só assina.",
  },
];

const eligibility = [
  { icon: "💰", text: "Renda familiar bruta de até R$ 8.000/mês" },
  { icon: "🏠", text: "Não ter imóvel registrado no seu nome" },
  { icon: "📋", text: "Não ter financiamento ativo pelo SFH" },
  { icon: "📍", text: "Morar ou trabalhar em Salvador/BA" },
  { icon: "🪪", text: "CPF regular na Receita Federal" },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-brand-green font-semibold text-sm uppercase tracking-wide">
            Minha Casa Minha Vida
          </span>
          <h2 className="section-title mt-2">
            Do zero até as chaves na mão
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            O processo é mais simples do que parece. Eu fico do seu lado em cada etapa.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((item) => (
            <div key={item.step} className="card hover:shadow-md transition-shadow">
              <span className="text-4xl font-extrabold text-brand-green/20">
                {item.step}
              </span>
              <h3 className="font-bold text-gray-900 mt-2 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Eligibility */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Quem pode participar?
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Se você se encaixa nesses requisitos, grandes chances de você já ter direito ao programa.
            </p>
            <ul className="space-y-3">
              {eligibility.map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-gray-700">
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-green rounded-2xl p-8 text-white text-center">
            <p className="text-white/80 text-sm mb-2">Tem dúvida se você se encaixa?</p>
            <p className="text-2xl font-bold mb-4">
              Me manda uma mensagem que eu te falo na hora
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3 rounded-full transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Verificar meu perfil grátis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
