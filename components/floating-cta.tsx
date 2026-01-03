"use client";

import { contact } from "@/content/site";
import { telLink, waLink } from "@/lib/links";
import { MessageCircle, Phone } from "lucide-react";

export default function FloatingCTA() {
  const waMsg = "Hola, me gustaría solicitar una cotización con PROSELEC.";

  return (
    <div className="fixed bottom-5 right-5 z-50 hidden sm:flex flex-col gap-2">
      <a
        href={waLink(contact.whatsappDigits, waMsg)}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-2xl bg-[linear-gradient(135deg,rgb(var(--brand)),rgb(var(--accent)))] px-4 py-3 text-sm font-extrabold text-white shadow-glow transition hover:brightness-[1.02] focus-ring"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-4 w-4" />
        Cotizar
      </a>

      <a
        href={telLink(contact.phoneE164)}
        className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-extrabold text-ink shadow-soft transition hover:bg-brand-50 focus-ring"
        aria-label="Llamar"
      >
        <Phone className="h-4 w-4 text-brand-700" />
        Llamar
      </a>
    </div>
  );
}
