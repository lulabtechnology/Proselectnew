"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { contact } from "@/content/site";
import { telLink, waLink } from "@/lib/links";

export default function FloatingCTA() {
  const waHref = waLink(contact.whatsappDigits, "Hola, quiero cotizar con PROSELEC.");

  return (
    <div className="fixed bottom-20 right-4 z-50 hidden sm:block">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col gap-2"
      >
        <a
          href={waHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5"
        >
          <MessageCircle className="h-4 w-4" />
          Cotizar
        </a>

        <a
          href={telLink(contact.phoneE164)}
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
        >
          <Phone className="h-4 w-4" />
          Llamar
        </a>
      </motion.div>
    </div>
  );
}
