"use client";

import Link from "next/link";
import { contact } from "@/content/site";
import { waLink } from "@/lib/links";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FloatingCTA() {
  const hasWA = Boolean(contact.whatsappDigits);

  const href = hasWA
    ? waLink(contact.whatsappDigits, "Hola, me gustaría recibir más información.")
    : "/contacto";

  return (
    <Link
      href={href}
      className={cn(
        "fixed bottom-5 right-5 z-50 hidden sm:flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-slate-800 focus-ring"
      )}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-4 w-4" />
      {hasWA ? "WhatsApp" : "Contacto"}
    </Link>
  );
}
