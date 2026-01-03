"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import Brand from "@/components/brand";
import { nav } from "@/content/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
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

          <div className="hidden md:block">
            <Link href="/contacto">
              <Button>
                Contactar <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
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
          open ? "max-h-[420px]" : "max-h-0"
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
            <Link href="/contacto" className="mt-2">
              <Button className="w-full">Contactar</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
