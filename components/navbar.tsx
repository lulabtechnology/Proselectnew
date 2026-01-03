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

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
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
                    "rounded-2xl px-4 py-2 text-sm font-medium transition focus-ring",
                    active
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-100"
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
            className="md:hidden rounded-2xl border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm focus-ring"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
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
                    "rounded-2xl px-4 py-3 text-sm font-medium focus-ring",
                    active
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-100"
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
