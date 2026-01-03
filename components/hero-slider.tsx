"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type Slide = {
  image: string;
  title: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
};

export default function HeroSlider({
  slides,
  chips
}: {
  slides: Slide[];
  chips: string[];
}) {
  const [index, setIndex] = React.useState(0);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [slides.length]);

  const active = slides[index];

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 shadow-glow">
      <div className="relative min-h-[72vh] sm:min-h-[70vh] lg:min-h-[74vh]">
        {/* fondo gradient (fallback) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(12,74,173,0.55),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(12,165,178,0.45),transparent_55%),linear-gradient(135deg,rgb(var(--brand-900)),rgb(var(--brand-700)))]" />

        {/* slide image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.image}
            className="absolute inset-0"
            initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0, scale: 1.01 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <Image
              src={active.image}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-slate-950/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-transparent to-slate-950/10" />
          </motion.div>
        </AnimatePresence>

        {/* decor motion overlay */}
        {!reduce && (
          <motion.div
            className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl"
            animate={{ y: [0, 12, 0], x: [0, -10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        {/* content */}
        <div className="relative z-10">
          <div className="container-pad">
            <div className="flex min-h-[72vh] sm:min-h-[70vh] lg:min-h-[74vh] items-end pb-10 sm:pb-12">
              <div className="w-full max-w-2xl">
                <motion.div
                  key={index}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="rounded-3xl bg-white/10 p-5 backdrop-blur-md ring-1 ring-white/15 sm:p-6"
                >
                  {/* chips */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {chips.slice(0, 6).map((c) => (
                      <span
                        key={c}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-white/15"
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  <h1 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                    {active.title}
                  </h1>
                  <p className="mt-3 text-pretty text-sm leading-6 text-white/85 sm:text-base">
                    {active.subtitle}
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link href={active.ctaPrimary.href}>
                      <Button className="w-full sm:w-auto" size="lg">
                        {active.ctaPrimary.label}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href={active.ctaSecondary.href}>
                      <Button className="w-full sm:w-auto" size="lg" variant="outline">
                        {active.ctaSecondary.label}
                      </Button>
                    </Link>
                  </div>
                </motion.div>

                {/* dots + progress */}
                <div className="mt-5">
                  <div className="flex items-center gap-2">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Ir al slide ${i + 1}`}
                        onClick={() => setIndex(i)}
                        className={cn(
                          "h-2.5 w-2.5 rounded-full ring-1 ring-white/25 transition",
                          i === index ? "bg-white" : "bg-white/30 hover:bg-white/55"
                        )}
                      />
                    ))}
                  </div>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,rgba(12,74,173,1),rgba(12,165,178,1))]"
                      style={{ width: `${((index + 1) / slides.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* light border */}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
      </div>
    </div>
  );
}
