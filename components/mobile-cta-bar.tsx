"use client";

import { MessageCircle, Phone } from "lucide-react";
import { contact } from "@/content/site";
import { telLink, waLink } from "@/lib/links";

export default function MobileCTABar() {
  const waHref = waLink(contact.whatsappDigits, "Hola, quiero cotizar con PROSELEC.");

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur sm:hidden">
      <div className="mx-auto flex max-w-6xl gap-2 px-4 py-3">
        <a
          href={telLink(contact.phoneE164)}
          className="flex w-1/2 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm font-bold text-slate-900"
        >
          <Phone className="h-4 w-4" />
          Llamar
        </a>
        <a
          href={waHref}
          target="_blank"
          rel="noreferrer"
          className="flex w-1/2 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-700 px-3 py-3 text-sm font-bold text-white"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
