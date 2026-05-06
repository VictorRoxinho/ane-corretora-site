"use client";

import { useEffect, useState } from "react";
import { WA_LINK } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons";

const benefits = [
  "Análise de perfil 100% gratuita",
  "Sem burocracia — eu cuido de tudo",
  "Parcelas que cabem no seu bolso",
];

export default function ExitIntentModal() {
  const [visible, setVisible] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("exit-modal-shown")) return;

    const show = () => {
      if (sessionStorage.getItem("exit-modal-shown")) return;
      sessionStorage.setItem("exit-modal-shown", "1");
      setVisible(true);
    };

    // Desktop: mouse leaves viewport through the top
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) show();
    };

    // Mobile fallback: show after 30s
    const timer = setTimeout(show, 30000);

    document.addEventListener("mouseleave", onMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      clearTimeout(timer);
    };
  }, []);

  // Trigger enter animation after mount
  useEffect(() => {
    if (visible) requestAnimationFrame(() => setEntered(true));
  }, [visible]);

  const dismiss = () => {
    setEntered(false);
    setTimeout(() => setVisible(false), 250);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${
        entered ? "bg-black/60 backdrop-blur-sm" : "bg-black/0"
      }`}
      onClick={dismiss}
    >
      <div
        className={`bg-white rounded-3xl shadow-2xl max-w-sm w-full p-8 flex flex-col items-center text-center relative transition-all duration-300 ${
          entered ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-300 hover:text-gray-500 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-5">
          <svg className="w-7 h-7 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9.75L12 3l9 6.75V21a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22V12h6v10" />
          </svg>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
          Ainda pensando em ter<br />sua casa própria?
        </h3>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
          Me manda uma mensagem — é grátis, sem compromisso, e eu respondo na hora.
        </p>

        {/* Benefits */}
        <ul className="text-left space-y-2.5 mb-7 w-full">
          {benefits.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
              <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={dismiss}
          className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3.5 rounded-full transition-all duration-200 mb-3"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Falar no WhatsApp agora
        </a>

        <button onClick={dismiss} className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
          Não obrigado
        </button>
      </div>
    </div>
  );
}
