import { useState, useEffect, useRef } from "react";
import { WA_LINK, IG_LINK, IG_GRADIENT } from "@/lib/constants";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";

const navLinks = [
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#construtoras", label: "Construtoras" },
  { href: "#indicacoes", label: "Indicações R$500" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current <= 10) {
        setVisible(true);
      } else if (current > lastScroll.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScroll.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating header */}
      <header className={`fixed top-4 md:top-6 left-4 md:left-15 right-4 md:right-15 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="bg-white rounded-full shadow-lg px-5 md:px-10 h-16 md:h-22 flex items-center justify-between gap-4">

          {/* Left: Logo */}
          <a href="#" className="flex-shrink-0">
            <Logo />
          </a>

          {/* Center: Nav (desktop) */}
          <nav className="hidden md:flex items-center gap-7 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-900 hover:text-brand-green font-medium transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Instagram + WhatsApp CTA + mobile hamburger */}
          <div className="flex items-center gap-3 flex-shrink-0">

            {/* Instagram icon */}
            <a
              href={IG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-white transition-opacity hover:opacity-80"
              style={{ background: IG_GRADIENT }}
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            {/* Desktop: WhatsApp CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold pl-2 pr-4 py-1.5 rounded-full transition-all duration-200"
            >
              <AnePhoto size={48} />
              <span className="leading-tight">Vamos conversar<br />no WhatsApp?</span>
            </a>

            {/* Mobile: WhatsApp icon only */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden w-8 h-8 bg-[#25D366] rounded-xl flex items-center justify-center text-white"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Abrir menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100">
          <Logo />
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-1 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-lg text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:text-brand-green transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="p-5 border-t border-gray-100 flex flex-col gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold rounded-xl px-6 py-3 w-full transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Falar no WhatsApp
          </a>
          <a
            href={IG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 text-white font-semibold rounded-xl px-6 py-3 w-full transition-opacity hover:opacity-80"
            style={{ background: IG_GRADIENT }}
          >
            <InstagramIcon className="w-4 h-4" />
            Ver no Instagram
          </a>
        </div>
      </div>
    </>
  );
}

function Logo() {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <span className="font-bold text-brand-green text-lg tracking-tight">
        Ane França
      </span>
    );
  }
  return (
    <img
      src="/images/Opçao 1-Photoroom.png"
      alt="Ane França Corretora"
      className="h-10 md:h-14 w-auto"
      onError={() => setError(true)}
    />
  );
}

export function AnePhoto({ size = 40 }: { size?: number }) {
  const [error, setError] = useState(false);
  return (
    <div
      className="rounded-full overflow-hidden border-2 border-white/60 bg-white/20 flex items-center justify-center flex-shrink-0"
      style={{ width: size, height: size }}
    >
      {error ? (
        <span className="text-white font-bold text-xs">AF</span>
      ) : (
        <img
          src="/images/Perfil.png"
          alt="Ane França"
          className="w-full h-full object-cover"
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}

