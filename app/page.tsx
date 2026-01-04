import Link from "next/link";
import { ArrowRight, Shield, HardHat, Award } from "lucide-react";
import HeroSlider from "@/components/hero-slider";
import ScrollReveal from "@/components/scroll-reveal";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* ✅ HERO FULL WIDTH */}
      <HeroSlider />

      {/* secciones */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <ScrollReveal>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-sky-50 p-3 ring-1 ring-sky-100">
                  <Shield className="h-5 w-5 text-sky-700" />
                </div>
                <div className="font-bold text-slate-900">Calidad & seguridad</div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Ejecución responsable con enfoque en seguridad y estándares técnicos.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-sky-50 p-3 ring-1 ring-sky-100">
                  <HardHat className="h-5 w-5 text-sky-700" />
                </div>
                <div className="font-bold text-slate-900">Diseño & planos</div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Soluciones técnicas y documentación para proyectos civiles y electromecánicos.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-sky-50 p-3 ring-1 ring-sky-100">
                  <Award className="h-5 w-5 text-sky-700" />
                </div>
                <div className="font-bold text-slate-900">Instalaciones</div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Instalaciones eléctricas, fontanería, gas licuado y sistemas contra incendio.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-10 rounded-3xl border border-slate-200 bg-gradient-to-r from-sky-600 to-blue-700 p-8 text-white shadow-lg shadow-sky-500/20">
            <div className="text-sm font-semibold text-white/80">Listos para tu proyecto</div>
            <div className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Cotiza con un equipo técnico y ejecución confiable.
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-bold text-slate-900"
              >
                Ver servicios <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-bold text-white backdrop-blur"
              >
                Ver proyectos
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
