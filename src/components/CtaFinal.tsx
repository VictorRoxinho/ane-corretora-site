import { useEffect, useRef, useState } from "react";
import { IG_LINK } from "@/lib/constants";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

export default function CtaFinal() {
  const left = useReveal();
  const right = useReveal();

  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    const text = `Olá Ane! Meu nome é ${form.name}. ${form.message || "Gostaria de saber mais sobre o Minha Casa Minha Vida."}`;
    window.open(`https://wa.me/5571998193275?text=${encodeURIComponent(text)}`, "_blank");
  }

  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-white">

      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "#1B5E20", filter: "blur(160px)", opacity: 0.07 }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "#F9A825", filter: "blur(140px)", opacity: 0.07 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div
            ref={left.ref}
            className="transition-all duration-700"
            style={{ opacity: left.visible ? 1 : 0, transform: left.visible ? "translateY(0)" : "translateY(30px)" }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
              Vamos dar o<br />
              <span className="relative inline-block pb-3 text-brand-green">
                primeiro passo?
                <svg className="absolute left-0 w-full" style={{ bottom: 0 }} viewBox="0 0 300 10" fill="none" preserveAspectRatio="none">
                  <path d="M2 8C40 4 80 9 120 6C160 3 200 8.5 238 5.5C262 4 283 7 298 6.5" stroke="#1B5E20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-md">
              Ficou com alguma dúvida ou quer fazer uma simulação sem compromisso? Me mande uma mensagem. Estou aqui para ajudar você a conquistar seu imóvel.
            </p>

            {/* Info cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-5 bg-white p-4 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md hover:translate-x-1 transition-all duration-200">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#1B5E2012", transform: "rotate(-3deg)" }}>
                  <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">WhatsApp</p>
                  <p className="text-xl font-black text-gray-900">(71) 9 9819-3275</p>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-white p-4 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md hover:translate-x-1 transition-all duration-200">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#1B5E2012", transform: "rotate(3deg)" }}>
                  <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Atendimento</p>
                  <p className="text-xl font-black text-gray-900">Salvador e Região</p>
                </div>
              </div>

              <a
                href={IG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-white p-4 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md hover:translate-x-1 transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)", transform: "rotate(-3deg)" }}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Instagram</p>
                  <p className="text-xl font-black text-gray-900">@anefranca.corretora</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: form card */}
          <div
            ref={right.ref}
            className="relative transition-all duration-700 delay-150"
            style={{ opacity: right.visible ? 1 : 0, transform: right.visible ? "scale(1) rotate(0deg)" : "scale(0.93) rotate(-2deg)" }}
          >
            {/* Decorative circle */}
            <div className="absolute -top-5 -left-5 w-11 h-11 rounded-full z-20 bg-brand-green opacity-80" />

            <div
              className="bg-white p-10 shadow-2xl border-4 border-white relative z-10"
              style={{ borderRadius: "3rem 3rem 3rem 0.75rem" }}
            >
              {/* Header */}
              <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3 tracking-tight">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#1B5E2015" }}>
                  <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                Me envie uma mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Seu nome</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Como posso te chamar?"
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:bg-white focus:border-brand-green outline-none transition-all font-medium text-gray-900 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Seu WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="(71) 90000-0000"
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:bg-white focus:border-brand-green outline-none transition-all font-medium text-gray-900 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Mensagem (opcional)</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Gostaria de fazer uma simulação..."
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:bg-white focus:border-brand-green outline-none transition-all resize-none font-medium text-gray-900 placeholder-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 text-white bg-brand-green hover:bg-brand-green-mid rounded-2xl transition-all duration-200 font-black text-lg shadow-lg mt-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Enviar para o WhatsApp
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
