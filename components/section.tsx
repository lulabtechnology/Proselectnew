"use client";

import * as React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  tone = "plain"
}: {
  className?: string;
  children: React.ReactNode;
  tone?: "plain" | "soft";
}) {
  return (
    <section
      className={cn(
        "py-12 sm:py-16",
        tone === "soft" &&
          "bg-[radial-gradient(circle_at_10%_10%,rgba(12,74,173,0.08),transparent_60%),radial-gradient(circle_at_90%_20%,rgba(12,165,178,0.08),transparent_55%)]",
        className
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  kicker,
  title,
  subtitle
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8 sm:mb-10">
      {kicker ? (
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-extrabold tracking-wide text-brand-900">
          {kicker}
        </div>
      ) : null}
      <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function Reveal({
  children,
  className,
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-10% 0px -10% 0px", once: true });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
