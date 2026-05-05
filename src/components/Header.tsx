import { useState, useEffect, useRef } from "react";
import { WA_LINK, IG_LINK } from "@/lib/constants";

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
              style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}
              aria-label="Instagram"
            >
              <InstagramIcon />
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
              <WhatsAppIcon />
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
            <WhatsAppIcon />
            Falar no WhatsApp
          </a>
          <a
            href={IG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 text-white font-semibold rounded-xl px-6 py-3 w-full transition-opacity hover:opacity-80"
            style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}
          >
            <InstagramIcon />
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

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
