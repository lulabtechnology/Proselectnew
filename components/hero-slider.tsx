"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { contact, site } from "@/content/site";
import { waLink } from "@/lib/links";

type Slide = {
  src: string;
  kicker: string;
  title: string;
  desc: string;
};

export default function HeroSlider() {
  const slides: Slide[] = useMemo(
    () => [
      {
        src: "/images/hero/slide-1.jpg",
        kicker: site.shortName,
        title: "Obras civiles y soluciones electromecánicas",
        desc: "Diseño, planificación, construcción, equipamiento y mantenimiento con enfoque en calidad, seguridad y cumplimiento.",
      },
      {
        src: "/images/hero/slide-2.jpg",
        kicker: site.shortName,
        title: "Ingeniería aplicada a cada etapa del proyecto",
        desc: "Soluciones técnicas para obras civiles, arquitectura e instalaciones: eléctrica, fontanería, gas licuado y contra incendio.",
      },
      {
        src: "/images/hero/slide-3.jpg",
        kicker: site.shortName,
        title: "Ejecución responsable y resultados comprobables",
        desc: "Acompañamiento técnico, control de calidad y entrega enfocada en necesidades reales de obra.",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((v) => (v + 1) % total);
    }, 6500);
    return () => clearInterval(t);
  }, [total]);

  const prev = () => setIndex((v) => (v - 1 + total) % total);
  const next = () => setIndex((v) => (v + 1) % total);

  const waHref = waLink(contact.whatsappDigits, "Hola, quiero cotizar con PROSELEC.");

  return (
    <section className="relative w-full overflow-hidden">
      {/* full width + altura pro */}
      <div className="relative h-[78vh] min-h-[520px] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].src}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Imagen (no import estático -> no rompe build) */}
            <Image
              src={slides[index].src}
              alt={slides[index].title}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />

            {/* Overlay pro */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/25" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.18),transparent_55%)]" />
          </motion.div>
        </AnimatePresence>

        {/* contenido */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4 pt-20 sm:px-6">
          <div className="max-w-2xl">
            <motion.div
              key={`k-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/90"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              {slides[index].kicker}
            </motion.div>

            <motion.h1
              key={`t-${index}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            >
              {slides[index].title}
            </motion.h1>

            <motion.p
              key={`d-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
              className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg"
            >
              {slides[index].desc}
            </motion.p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Ver servicios <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                Ver proyectos
              </Link>

              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>

            {/* Controles */}
            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={prev}
                className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white/90 transition hover:bg-white/10"
              >
                Anterior
              </button>
              <button
                onClick={next}
                className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white/90 transition hover:bg-white/10"
              >
                Siguiente
              </button>

              <div className="ml-2 flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Ir al slide ${i + 1}`}
                    className={[
                      "h-2 w-2 rounded-full transition",
                      i === index ? "bg-white" : "bg-white/30 hover:bg-white/50",
                    ].join(" ")}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* corte inferior suave */}
      <div className="h-10 bg-gradient-to-b from-slate-950/20 to-transparent" />
    </section>
  );
}
