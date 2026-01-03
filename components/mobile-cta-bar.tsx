"use client";

import { contact } from "@/content/site";
import { mailLink, telLink, waLink } from "@/lib/links";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function MobileCTABar() {
  const email0 = contact.emails[0] ?? "";
  const waMsg = "Hola, me gustaría solicitar una cotización con PROSELEC.";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/92 backdrop-blur sm:hidden">
      <div className="container-pad">
        <div className="grid grid-cols-3 gap-2 py-2">
          <a
            href={waLink(contact.whatsappDigits, waMsg)}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgb(var(--brand)),rgb(var(--accent)))] py-2 text-xs font-extrabold text-white shadow-glow focus-ring"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>

          <a
            href={telLink(contact.phoneE164)}
            className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white py-2 text-xs font-extrabold text-ink shadow-soft focus-ring"
          >
            <Phone className="h-4 w-4 text-brand-700" />
            Llamar
          </a>

          <a
            href={mailLink(email0)}
            className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white py-2 text-xs font-extrabold text-ink shadow-soft focus-ring"
          >
            <Mail className="h-4 w-4 text-accent-700" />
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
