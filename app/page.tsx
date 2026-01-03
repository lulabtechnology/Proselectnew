import Link from "next/link";
import HeroSlider from "@/components/hero-slider";
import Reveal from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div>
      <HeroSlider
        slides={[
          {
            image: "/images/hero/slide-1.jpg",
            title: "Obras civiles, arquitectura y obras electromecánicas",
            subtitle:
              "Diseño, planificación, construcción y mantenimiento con enfoque en calidad, seguridad y confiabilidad.",
            ctaPrimary: { label: "Ver servicios", href: "/servicios" },
            ctaSecondary: { label: "Contactar", href: "/contacto" }
          },
          {
            image: "/images/hero/slide-2.jpg",
            title: "Soluciones integrales para tu proyecto",
            subtitle:
              "Soporte técnico desde el estudio y planos hasta la ejecución y mantenimiento.",
            ctaPrimary: { label: "Ver proyectos", href: "/proyectos" },
            ctaSecondary: { label: "Contactar", href: "/contacto" }
          },
          {
            image: "/images/hero/slide-3.jpg",
            title: "Calidad, seguridad y cumplimiento",
            subtitle:
              "Ejecución responsable con estándares técnicos y buenas prácticas.",
            ctaPrimary: { label: "Sobre nosotros", href: "/sobre-nosotros" },
            ctaSecondary: { label: "Contactar", href: "/contacto" }
          }
        ]}
        chips={["Fundada en 2011", "Obras civiles", "Arquitectura", "Eléctrico", "Fontanería", "Gas licuado"]}
      />

      <section className="container-pad py-14">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs font-extrabold text-brand-900">PROSELEC</div>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Compromiso, calidad y soluciones de ingeniería
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Soluciones de ingeniería con enfoque en calidad, seguridad y confiabilidad.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Calidad y seguridad",
              desc: "Enfoque en soluciones confiables y seguras en todas las fases del proyecto."
            },
            {
              title: "Diseño y ejecución",
              desc: "Soporte integral: estudio técnico, planificación, construcción y mantenimiento."
            },
            {
              title: "Innovación y vanguardia",
              desc: "Mejora continua e implementación de tecnologías para un mejor servicio."
            }
          ].map((f, i) => (
            <Reveal key={f.title} delay={0.08 * i}>
              <Card className="group h-full overflow-hidden">
                <div className="h-1.5 w-full bg-[linear-gradient(90deg,rgb(var(--brand)),rgb(var(--accent)))]" />
                <CardContent className="pt-6">
                  <div className="text-base font-extrabold text-ink">{f.title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{f.desc}</p>
                  <div className="mt-4 h-px w-full bg-slate-100" />
                  <div className="mt-4 text-xs font-bold text-slate-500">
                    Hover suave + lift
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 rounded-3xl border border-slate-200 bg-[radial-gradient(circle_at_20%_10%,rgba(12,74,173,0.08),transparent_60%),radial-gradient(circle_at_80%_20%,rgba(12,165,178,0.08),transparent_60%),linear-gradient(to_bottom,#fff,rgb(var(--brand-50)))] p-6 sm:p-8">
            <div className="text-xl font-extrabold text-ink">¿Listo para iniciar tu proyecto?</div>
            <p className="mt-2 text-sm text-slate-600">
              Cuéntanos lo que necesitas y coordinamos el siguiente paso para tu obra o instalación.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link href="/contacto">
                <Button size="lg" className="w-full sm:w-auto">
                  Ir a contacto
                </Button>
              </Link>
              <Link href="/servicios">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Ver servicios
                </Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
