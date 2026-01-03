"use client";

import Link from "next/link";
import { contact } from "@/content/site";
import { mailLink, telLink, waLink } from "@/lib/links";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function MobileCTABar() {
  const email0 = contact.emails[0] ?? "";
  const hasPhone = Boolean(contact.phoneE164);
  const hasWA = Boolean(contact.whatsappDigits);
  const hasEmail = Boolean(email0);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/92 backdrop-blur sm:hidden">
      <div className="container-pad">
        <div className="grid grid-cols-3 gap-2 py-2">
          <a
            href={hasPhone ? telLink(contact.phoneE164) : "/contacto"}
            className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white py-2 text-xs font-semibold text-slate-900 shadow-sm focus-ring"
          >
            <Phone className="h-4 w-4" />
            Llamar
          </a>

          <Link
            href={hasWA ? waLink(contact.whatsappDigits, "Hola, me gustaría recibir más información.") : "/contacto"}
            className="flex flex-col items-center justify-center rounded-2xl bg-slate-900 py-2 text-xs font-semibold text-white shadow-soft focus-ring"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Link>

          <a
            href={hasEmail ? mailLink(email0) : "/contacto"}
            className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white py-2 text-xs font-semibold text-slate-900 shadow-sm focus-ring"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
