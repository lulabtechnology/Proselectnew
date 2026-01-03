"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import Brand from "@/components/brand";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { contact } from "@/content/site";
import { telLink, waLink } from "@/lib/links";

const nav = [
  { label: "Inicio", href: "/" },
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => setOpen(false), [pathname]);

  const waMsg = "Hola, me gustaría solicitar una cotización con PROSELEC.";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(12,74,173,0.55),rgba(12,165,178,0.55),transparent)]" />
      <div className="container-pad">
        <div className="flex h-16 items-center justify-between gap-3">
          <Brand />

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-2xl px-4 py-2 text-sm font-semibold transition focus-ring",
                    active
                      ? "bg-brand-50 text-brand-900 border border-brand-200"
                      : "text-slate-700 hover:bg-brand-50"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a href={telLink(contact.phoneE164)}>
              <Button variant="outline" size="md">
                <Phone className="h-4 w-4" />
                Llamar
              </Button>
            </a>
            <a href={waLink(contact.whatsappDigits, waMsg)} target="_blank" rel="noreferrer">
              <Button size="md">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </a>
          </div>

          <button
            type="button"
            className="md:hidden rounded-2xl border border-slate-200 bg-white px-3 py-2 text-ink shadow-soft focus-ring"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-slate-200 bg-white transition-[max-height] duration-300",
          open ? "max-h-[520px]" : "max-h-0"
        )}
      >
        <div className="container-pad py-3">
          <div className="flex flex-col gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-semibold focus-ring",
                    active
                      ? "bg-brand-50 text-brand-900 border border-brand-200"
                      : "text-slate-700 hover:bg-brand-50"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-2 grid gap-2">
              <a href={telLink(contact.phoneE164)}>
                <Button className="w-full" variant="outline">
                  <Phone className="h-4 w-4" /> Llamar
                </Button>
              </a>
              <a href={waLink(contact.whatsappDigits, waMsg)} target="_blank" rel="noreferrer">
                <Button className="w-full">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
