import Reveal from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, HardHat, Zap, Droplets, Flame, Shield, CheckCircle2 } from "lucide-react";

const groups = [
  {
    icon: Building2,
    title: "Diseño arquitectónico, obras civiles y construcción",
    items: [
      {
        h: "Diseño arquitectónico integral",
        d: "Desarrollo de proyectos arquitectónicos funcionales y estéticos, incluyendo planos, renders y documentación técnica."
      },
      {
        h: "Diseño estructural y de obras civiles",
        d: "Cálculo y diseño de estructuras seguras y eficientes, cumpliendo normas técnicas y de seguridad."
      },
      {
        h: "Construcción y ejecución de proyectos",
        d: "Construcción de obras civiles y arquitectónicas, desde la planificación hasta la entrega final."
      },
      {
        h: "Supervisión y gerencia de obras",
        d: "Control técnico, administrativo y de calidad para asegurar el cumplimiento de plazos, costos y especificaciones."
      },
      {
        h: "Remodelaciones y ampliaciones",
        d: "Intervención y mejora de edificaciones existentes, adaptándolas a nuevas necesidades."
      },
      {
        h: "Asesoría técnica y presupuestos",
        d: "Elaboración de presupuestos, cronogramas y asesoría profesional para una correcta toma de decisiones."
      }
    ]
  },
  {
    icon: Zap,
    title: "Sistemas eléctricos",
    items: [
      {
        h: "Diseño de sistemas eléctricos",
        d: "Elaboración de planos y cálculos eléctricos para edificaciones residenciales, comerciales e industriales."
      },
      {
        h: "Instalación de sistemas eléctricos",
        d: "Ejecución de instalaciones eléctricas seguras y eficientes, cumpliendo normas técnicas vigentes."
      },
      {
        h: "Mantenimiento y corrección de fallas",
        d: "Inspección, mantenimiento preventivo y correctivo de sistemas eléctricos."
      },
      {
        h: "Asesoría y certificación eléctrica",
        d: "Evaluación técnica, presupuestos y verificación de cumplimiento normativo."
      }
    ]
  },
  {
    icon: Droplets,
    title: "Sistemas de fontanería",
    items: [
      {
        h: "Diseño de sistemas de plomería",
        d: "Elaboración de planos para redes de agua potable, aguas residuales y pluviales."
      },
      {
        h: "Instalación de sistemas de plomería",
        d: "Ejecución de instalaciones sanitarias, potables y pluviales en edificaciones residenciales, comerciales e industriales."
      },
      {
        h: "Mantenimiento preventivo y correctivo",
        d: "Reparación de fugas, obstrucciones y reemplazo de tuberías y accesorios."
      },
      {
        h: "Instalación de equipos y accesorios sanitarios",
        d: "Instalación de bombas, artefactos sanitarios, griferías y sistemas de presión."
      },
      {
        h: "Asesoría técnica y cumplimiento normativo",
        d: "Evaluación de sistemas, presupuestos y adecuación a normas técnicas vigentes."
      }
    ]
  },
  {
    icon: Flame,
    title: "Sistema de gas licuado",
    items: [
      {
        h: "Sistema de gas residencial y comercial",
        d: "Diseño, instalación y adecuación de sistemas de gas para viviendas, edificios y locales comerciales, conforme a normas técnicas y de seguridad."
      },
      {
        h: "Estacas principales y ramales de distribución",
        d: "Instalación de estacas principales, tuberías matrices y ramales, asegurando presión, sellado y trazado para un abastecimiento continuo."
      },
      {
        h: "Diagnóstico de fugas",
        d: "Inspección técnica especializada para la detección de fugas, identificación de puntos críticos y soluciones correctivas."
      },
      {
        h: "Certificaciones",
        d: "Revisión técnica y emisión de certificaciones, verificando el cumplimiento de normas de seguridad requeridas."
      }
    ]
  },
  {
    icon: Shield,
    title: "Sistema húmedo contra incendio",
    items: [
      {
        h: "Diseño conforme a NFPA",
        d: "Diseño hidráulico y planos de rociadores y gabinetes; NFPA 13 (Rociadores) y NFPA 14 (Columna y mangueras)."
      },
      {
        h: "Instalación de redes contra incendio",
        d: "Instalación de tuberías, rociadores, válvulas, gabinetes y accesorios según criterios NFPA."
      },
      {
        h: "Bombas y sistemas de abastecimiento",
        d: "Montaje de bombas contra incendio, jockey pumps, tableros y almacenamiento de agua según NFPA 20."
      },
      {
        h: "Pruebas, puesta en marcha y mantenimiento",
        d: "Pruebas hidrostáticas y de flujo; mantenimiento preventivo y correctivo conforme a NFPA 25."
      },
      {
        h: "Inspección, certificación y cumplimiento normativo",
        d: "Verificación final, informes y certificaciones para la habilitación del sistema."
      }
    ]
  }
];

export default function ServiciosPage() {
  return (
    <div className="container-pad pt-10 pb-14">
      <Reveal>
        <div className="max-w-2xl">
          <div className="text-xs font-extrabold text-brand-900">Servicios</div>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Servicios
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Diseño, construcción e instalaciones para proyectos residenciales, comerciales e industriales.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {groups.map((g, idx) => {
          const Icon = g.icon;
          return (
            <Reveal key={g.title} delay={0.06 * idx}>
              <Card className="overflow-hidden">
                <div className="h-1.5 w-full bg-[linear-gradient(90deg,rgb(var(--brand)),rgb(var(--accent)))]" />
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-50 text-brand-900 ring-1 ring-brand-200">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-base font-extrabold text-ink">{g.title}</div>
                      <div className="mt-1 text-sm text-slate-600">
                        Soluciones con enfoque técnico y buenas prácticas.
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {g.items.map((it) => (
                      <div key={it.h} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-[rgb(var(--accent-700))]" />
                          <div>
                            <div className="font-extrabold text-ink">{it.h}</div>
                            <p className="mt-1 text-sm leading-6 text-slate-600">{it.d}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
