import ScrollReveal from "@/components/scroll-reveal";
import { site } from "@/content/site";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Shield, Clock, CheckCircle2 } from "lucide-react";

export default function SobreNosotrosPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="border-b border-slate-200 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.14),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(29,78,216,0.12),transparent_55%),linear-gradient(to_bottom,#f8fafc,#ffffff)] pt-24">
        <div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
          <div className="text-xs font-extrabold text-sky-700">PROSELEC</div>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Sobre nosotros
          </h1>
          <p className="mt-2 max-w-2xl text-slate-600">
            Conoce nuestra empresa, misión y visión.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Quiénes somos */}
          <ScrollReveal>
            <Card className="overflow-hidden rounded-3xl border-slate-200">
              <div className="h-1.5 w-full bg-gradient-to-r from-sky-600 to-blue-700" />
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Quiénes somos</CardTitle>
                <CardDescription>Fundada en {site.founded}</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-sm leading-relaxed text-slate-600">{site.about}</p>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Misión */}
          <ScrollReveal delay={0.05}>
            <Card className="overflow-hidden rounded-3xl border-slate-200">
              <div className="h-1.5 w-full bg-gradient-to-r from-sky-600 to-blue-700" />
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Misión</CardTitle>
                <CardDescription>Enfoque técnico y calidad</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-sm leading-relaxed text-slate-600">{site.mission}</p>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Visión */}
          <ScrollReveal delay={0.1}>
            <Card className="overflow-hidden rounded-3xl border-slate-200">
              <div className="h-1.5 w-full bg-gradient-to-r from-sky-600 to-blue-700" />
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Visión</CardTitle>
                <CardDescription>Innovación y vanguardia</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-sm leading-relaxed text-slate-600">{site.vision}</p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        {/* Por qué elegirnos */}
        <ScrollReveal delay={0.15}>
          <div className="mt-10 rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-sky-50 p-3 ring-1 ring-sky-100">
                <Award className="h-5 w-5 text-sky-700" />
              </div>
              <div>
                <div className="text-lg font-extrabold text-slate-900">¿Por qué elegirnos?</div>
                <div className="text-sm text-slate-600">{site.description}</div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Shield, title: "Calidad", desc: "Servicio enfocado en calidad." },
                { icon: Shield, title: "Seguridad", desc: "Ejecución con enfoque en seguridad." },
                { icon: Clock, title: "Confiabilidad", desc: "Soluciones confiables de ingeniería." },
                { icon: Award, title: "Innovación", desc: "Tecnología y vanguardia para mejorar." },
              ].map((b) => (
                <div
                  key={b.title}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-sky-50 ring-1 ring-sky-100">
                      <b.icon className="h-5 w-5 text-sky-700" />
                    </div>
                    <div className="font-extrabold text-slate-900">{b.title}</div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{b.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-2 rounded-2xl border border-slate-200 bg-white p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-700" />
              <p className="text-sm text-slate-600">
                Nota: si quieres agregar “Valores” como sección formal, pásame el texto exacto del documento y lo monto sin inventar.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
