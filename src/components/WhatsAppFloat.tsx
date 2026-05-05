import { WA_LINK, IG_LINK, IG_GRADIENT } from "@/lib/constants";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <a
        href={IG_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram da Ane França"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:-translate-y-1 transition-all duration-200"
        style={{ background: IG_GRADIENT }}
      >
        <InstagramIcon className="w-7 h-7 text-white" />
      </a>

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Ane no WhatsApp"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full flex items-center justify-center shadow-2xl hover:-translate-y-1 transition-all duration-200"
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
