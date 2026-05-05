import { WA_LINK } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons";

const eligibility = [
  { icon: "💰", text: "Renda familiar bruta de até R$ 8.000/mês" },
  { icon: "🏠", text: "Não ter imóvel registrado no seu nome" },
  { icon: "📋", text: "Não ter financiamento ativo pelo SFH" },
  { icon: "📍", text: "Morar ou trabalhar em Salvador/BA" },
  { icon: "🪪", text: "CPF regular na Receita Federal" },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left: text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Quem pode<br />
            <span className="relative inline-block pb-3">
              participar?
              <svg className="absolute left-0 w-full" style={{ bottom: 0 }} viewBox="0 0 300 10" fill="none" preserveAspectRatio="none">
                <path d="M2 7C28 3 58 9 88 6C118 3 148 8.5 178 5.5C205 3 238 7.5 270 5C282 4 293 6.5 298 7.5" stroke="#1B5E20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-base mb-8">
            Se você se encaixa nesses requisitos, grandes chances de você já ter direito ao programa. Tem dúvida? Me manda uma mensagem que eu te falo na hora.
          </p>
          <ul className="space-y-4 mb-10">
            {eligibility.map((item) => (
              <li key={item.text} className="flex items-center gap-3 text-gray-700">
                <span className="text-xl">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

        </div>

        {/* Right: CTA card */}
        <div className="bg-brand-green rounded-3xl p-10 text-white text-center flex flex-col items-center justify-center gap-4 aspect-[4/3]">
          <p className="text-white/80 text-sm">Tem dúvida se você se encaixa?</p>
          <p className="text-2xl font-bold leading-snug">
            Me manda uma mensagem<br />que eu te falo na hora
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3 rounded-full transition-all"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Verificar meu perfil grátis
          </a>
        </div>

      </div>
    </section>
  );
}
