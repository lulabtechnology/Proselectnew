"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

type Ctx = {
  open: string | null;
  setOpen: (v: string | null) => void;
};

const AccordionCtx = React.createContext<Ctx | null>(null);

export function Accordion({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [open, setOpen] = React.useState<string | null>(null);
  return (
    <AccordionCtx.Provider value={{ open, setOpen }}>
      <div className={cn("space-y-3", className)} {...props} />
    </AccordionCtx.Provider>
  );
}

export function AccordionItem({
  value,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white shadow-sm",
        className
      )}
      data-accordion-item={value}
      {...props}
    />
  );
}

export function AccordionTrigger({
  value,
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }) {
  const ctx = React.useContext(AccordionCtx);
  if (!ctx) throw new Error("AccordionTrigger must be used within Accordion");

  const isOpen = ctx.open === value;

  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-slate-900 focus-ring rounded-2xl",
        className
      )}
      onClick={() => ctx.setOpen(isOpen ? null : value)}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 text-slate-600 transition-transform",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
}

export function AccordionContent({
  value,
  className,
  children
}: {
  value: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ctx = React.useContext(AccordionCtx);
  if (!ctx) throw new Error("AccordionContent must be used within Accordion");

  const isOpen = ctx.open === value;

  return (
    <div
      className={cn(
        "grid transition-[grid-template-rows] duration-300 ease-out",
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      )}
    >
      <div className="overflow-hidden">
        <div className={cn("px-5 pb-5 pt-1 text-sm text-slate-600", className)}>
          {children}
        </div>
      </div>
    </div>
  );
}
