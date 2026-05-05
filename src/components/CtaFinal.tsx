import { useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

function Bubble({ side, children }: { side: "me" | "them"; children: React.ReactNode }) {
  const me = side === "me";
  return (
    <div className={`flex ${me ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] px-3.5 py-2 rounded-2xl text-sm shadow-sm leading-snug ${me ? "rounded-br-md" : "rounded-bl-md"} text-gray-900`}
        style={{ background: me ? "#DCF8C6" : "#FFFFFF" }}
      >
        {children}
        <div className="text-[10px] text-gray-500 text-right mt-0.5">{me ? "agora ✓✓" : "agora"}</div>
      </div>
    </div>
  );
}

export default function CtaFinal() {
  const [draft, setDraft] = useState("Quero saber sobre o MRV Bela Vista 🙂");

  const chips = ["Sair do aluguel", "Simular MCMV", "Visitar imóvel", "Outra dúvida"];

  function openWhatsApp() {
    const text = encodeURIComponent(draft || "Olá Ane! Gostaria de saber mais sobre o Minha Casa Minha Vida.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  }

  return (
    <section id="contato" className="relative bg-white py-16 md:py-20 overflow-hidden lg:min-h-[720px]">

      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: "radial-gradient(#1B5E2018 1.5px, transparent 1.5px)", backgroundSize: "32px 32px" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-[#25D366]/10 text-[#1B5E20] text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            Online · Ane está digitando
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.95] tracking-tight mb-6">
            Vamos dar o<br />
            <span className="relative inline-block">
              <span className="absolute inset-x-0 -skew-x-3 rounded" style={{ backgroundColor: "#AEEA0080", bottom: 4, height: "40%" }} />
              <span className="relative text-brand-green">primeiro passo</span>
            </span>
            <span className="text-brand-green">?</span>
          </h2>

          <p className="text-xl text-gray-500 max-w-lg leading-relaxed mb-10">
            Não precisa preencher cadastro. Só me chama no WhatsApp como um amigo — eu respondo na hora.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            {chips.map((s) => (
              <button
                key={s}
                onClick={() => setDraft(`Oi Ane! Quero ${s.toLowerCase()} 🙂`)}
                className="px-4 py-2.5 rounded-full border-2 border-gray-200 hover:border-brand-green hover:text-brand-green text-sm font-semibold text-gray-700 transition-colors"
              >
                {s}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
              {(["#1B5E20", "#F9A825", "#2E7D32", "#0A1628"] as const).map((color) => (
                <div key={color} className="w-10 h-10 rounded-full border-2 border-white" style={{ background: color }} />
              ))}
            </div>
            <div>
              <p className="font-black text-gray-900">+200 famílias atendidas</p>
              <p className="text-sm text-gray-500">Salvador e região metropolitana</p>
            </div>
          </div>
        </div>

        {/* Right: phone mockup */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto" style={{ maxWidth: "min(300px, 85vw)" }}>
            <div
              className="relative rounded-[2rem] shadow-2xl overflow-hidden border-[6px] border-gray-900 md:rounded-[2.5rem] md:border-[8px]"
              style={{ background: "#E5DDD5", aspectRatio: "9/16", transform: "rotate(2deg)" }}
            >
              {/* WA header */}
              <div className="px-4 py-3 flex items-center gap-3" style={{ background: "#075E54" }}>
                <div className="w-10 h-10 rounded-full bg-white/20 overflow-hidden flex-shrink-0">
                  <img src="/images/perfil.png" alt="Ane França" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-sm leading-tight">Ane França · Corretora</p>
                  <p className="text-white/70 text-xs">online</p>
                </div>
                <div className="text-white/80 text-lg">⋮</div>
              </div>

              {/* Chat area */}
              <div
                className="relative px-4 py-5 space-y-3"
                style={{
                  background: "#E5DDD5",
                  backgroundImage: "radial-gradient(#00000008 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                  minHeight: 260,
                }}
              >
                <Bubble side="them">Oi! Bem-vindo 👋 Em que posso te ajudar hoje?</Bubble>
                <Bubble side="them">Você quer comprar seu primeiro apartamento ou já tem um financiamento?</Bubble>
                <Bubble side="me">{draft || "Digitando..."}</Bubble>
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0s" }} />
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0.15s" }} />
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0.3s" }} />
                  </div>
                </div>
              </div>

              {/* Composer */}
              <div className="absolute bottom-0 left-0 right-0 p-2 flex items-center gap-2" style={{ background: "#F0F0F0" }}>
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Mensagem"
                  className="flex-1 px-4 py-2 rounded-full bg-white text-sm outline-none"
                />
                <button
                  onClick={openWhatsApp}
                  className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md flex-shrink-0"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* CTA button */}
            <button
              onClick={openWhatsApp}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm px-4 py-3 rounded-xl shadow-lg transition-colors"
            >
              Abrir essa conversa no WhatsApp →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
