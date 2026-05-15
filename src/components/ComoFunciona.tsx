import { WA_LINK } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons";

const eligibility = [
  {
    text: "Renda familiar bruta de até R$ 8.000/mês",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    text: "Não ter imóvel registrado no seu nome",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    text: "Não ter financiamento ativo pelo SFH",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    text: "Morar ou trabalhar em Salvador/BA",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
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
                <span className="text-brand-green flex-shrink-0">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}

          </ul>

        </div>

        {/* Right: CTA card */}
        <div className="relative bg-brand-green rounded-3xl p-10 text-white text-center flex flex-col items-center justify-center gap-6 aspect-[4/3] overflow-hidden">

          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5" />
          <div className="absolute -bottom-14 -left-10 w-60 h-60 rounded-full bg-white/5" />

          {/* Large WA icon watermark */}
          <div className="absolute bottom-6 right-8 opacity-[0.07]">
            <WhatsAppIcon className="w-28 h-28" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
              <WhatsAppIcon className="w-6 h-6 text-white" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-2">
                Atendimento gratuito
              </p>
              <p className="text-2xl md:text-3xl font-black leading-snug">
                Me manda uma mensagem<br />que eu te falo na hora
              </p>
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand-green font-bold px-7 py-3.5 rounded-full transition-all hover:bg-gray-100 shadow-lg text-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Verificar meu perfil grátis
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
