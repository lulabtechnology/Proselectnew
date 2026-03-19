import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, HardHat, Award, MapPin, Building2, Flame, HelpCircle } from "lucide-react";
import HeroSlider from "@/components/hero-slider";
import ScrollReveal from "@/components/scroll-reveal";
import { site } from "@/content/site";
<<<<<<< HEAD
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Obras civiles e instalaciones electromecánicas en Panamá",
  description:
    "PROSELEC, S.A. desarrolla proyectos de obras civiles, arquitectura, sistemas eléctricos, fontanería, gas licuado y sistemas contra incendio en Panamá.",
  path: "/",
  keywords: [
    "obras civiles Panamá",
    "instalaciones electromecánicas Panamá",
    "sistemas eléctricos Panamá",
    "fontanería Panamá",
    "gas licuado Panamá",
    "contra incendio Panamá",
    "empresa electromecánica Panamá",
    "constructora Santiago Veraguas",
  ],
});

const faqs = [
  {
    question: "¿Qué servicios ofrece PROSELEC en Panamá?",
    answer:
      "PROSELEC ofrece obras civiles, diseño arquitectónico, diseño estructural, instalaciones eléctricas, fontanería, sistemas de gas licuado y sistemas húmedos contra incendio para proyectos residenciales, comerciales e industriales.",
  },
  {
    question: "¿PROSELEC trabaja proyectos fuera de Santiago de Veraguas?",
    answer:
      "Sí. La empresa muestra proyectos y cobertura en distintas zonas de Panamá, incluyendo Santiago de Veraguas, Chitré, Herrera y Coclé, según el alcance técnico del proyecto.",
  },
  {
    question: "¿PROSELEC realiza diseño y ejecución de proyectos?",
    answer:
      "Sí. PROSELEC participa desde el estudio técnico, planos y planificación, hasta la construcción, instalación, supervisión y mantenimiento según las necesidades de cada obra.",
  },
  {
    question: "¿Cómo puedo solicitar una cotización con PROSELEC?",
    answer:
      "Puedes solicitar una cotización desde la web entrando a la sección de contacto, llamando al número publicado o escribiendo por WhatsApp para compartir los detalles del proyecto.",
  },
];
=======

export const metadata: Metadata = {
  title: "Inicio",
  description: site.description,
  alternates: { canonical: "/" },
};
>>>>>>> dbee89047fb4775714b364566d6b6c2fda644cc1

export default function HomePage() {
  const faqSchema = faqJsonLd(faqs);

  return (
    <div className="bg-white">
<<<<<<< HEAD
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

=======
>>>>>>> dbee89047fb4775714b364566d6b6c2fda644cc1
      <HeroSlider />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <ScrollReveal>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-sky-50 p-3 ring-1 ring-sky-100">
                  <Shield className="h-5 w-5 text-sky-700" />
                </div>
<<<<<<< HEAD
                <div className="font-bold text-slate-900">Calidad y seguridad</div>
=======
                <div className="font-bold text-slate-900">Calidad &amp; seguridad</div>
>>>>>>> dbee89047fb4775714b364566d6b6c2fda644cc1
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Ejecución responsable con enfoque en seguridad, cumplimiento y estándares técnicos.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-sky-50 p-3 ring-1 ring-sky-100">
                  <HardHat className="h-5 w-5 text-sky-700" />
                </div>
<<<<<<< HEAD
                <div className="font-bold text-slate-900">Diseño y planificación</div>
=======
                <div className="font-bold text-slate-900">Diseño &amp; planos</div>
>>>>>>> dbee89047fb4775714b364566d6b6c2fda644cc1
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Soluciones técnicas, documentación de obra, planos y acompañamiento para cada etapa del proyecto.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-sky-50 p-3 ring-1 ring-sky-100">
                  <Award className="h-5 w-5 text-sky-700" />
                </div>
                <div className="font-bold text-slate-900">Especialización técnica</div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Obras civiles, arquitectura, instalaciones eléctricas, fontanería, gas licuado y contra incendio.
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
            <p className="mt-3 max-w-3xl text-sm leading-6 text-white/85 sm:text-base">
              {site.description}
            </p>
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

      <section className="mx-auto max-w-6xl px-4 pb-6 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <ScrollReveal>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-sky-700">
                Cobertura y experiencia
              </div>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Proyectos civiles y electromecánicos con enfoque regional en Panamá
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                PROSELEC, S.A. desarrolla soluciones para proyectos residenciales, comerciales e industriales.
                La empresa integra diseño, planificación, construcción, remodelación, instalaciones especiales y mantenimiento,
                con presencia en obras ejecutadas en zonas como Santiago de Veraguas, Chitré, Herrera y Coclé.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Building2,
                    title: "Obras civiles y arquitectura",
                    text: "Diseño arquitectónico, estructuras, remodelaciones, ampliaciones, supervisión y gerencia de obra.",
                  },
                  {
                    icon: Flame,
                    title: "Instalaciones especiales",
                    text: "Sistemas eléctricos, fontanería, gas licuado y redes húmedas contra incendio conforme a buenas prácticas técnicas.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white ring-1 ring-slate-200">
                        <item.icon className="h-5 w-5 text-sky-700" />
                      </div>
                      <div className="font-extrabold text-slate-900">{item.title}</div>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-7 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-sky-700">
                <MapPin className="h-4 w-4" />
                Áreas de referencia
              </div>
              <div className="mt-4 grid gap-3">
                {[
                  "Santiago de Veraguas",
                  "Ciudad de Panamá",
                  "Chitré y Herrera",
                  "Coclé",
                  "Proyectos residenciales",
                  "Proyectos comerciales e industriales",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-600">
                Esta estructura ayuda a que Google entienda mejor las áreas geográficas y el tipo de servicios que ofrece la empresa.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <ScrollReveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-sky-700">
              <HelpCircle className="h-4 w-4" />
              Preguntas frecuentes
            </div>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Información útil para clientes que buscan una empresa electromecánica en Panamá
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <ScrollReveal key={faq.question} delay={index * 0.05}>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-extrabold text-slate-900">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
