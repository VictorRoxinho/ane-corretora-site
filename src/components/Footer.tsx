import { WA_LINK } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-white font-bold text-lg">Ane França</p>
            <p className="text-sm mt-0.5">Corretora de Imóveis MCMV · Salvador/BA</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
            <a href="#construtoras" className="hover:text-white transition-colors">Construtoras</a>
            <a href="#indicacoes" className="hover:text-white transition-colors">Indicações R$500</a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp
            </a>
          </nav>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-600">
          © {year} Ane França Corretora de Imóveis · Salvador, Bahia
        </div>
      </div>
    </footer>
  );
}
