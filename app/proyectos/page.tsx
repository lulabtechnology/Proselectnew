import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  image: string; // ✅ NO tocar rutas
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Sistema Húmedo contra Incendio en la Unidad de Hemodiálisis Chitré–Soná",
    subtitle: "Instalación y adecuación del sistema húmedo contra incendio",
    image: "/images/projects/project-01.jpg",
  },
  {
    id: 2,
    title: "Sistema Eléctrico y Sistemas Especiales — Unidad Hemodiálisis",
    subtitle: "Ejecución eléctrica y sistemas especiales",
    image: "/images/projects/project-02.jpg",
  },
  {
    id: 3,
    title: "Construcción de Edificio Eléctrico (Santiago, Veraguas)",
    subtitle: "Obra civil e infraestructura",
    image: "/images/projects/project-03.jpg",
  },
  {
    id: 4,
    title: "Residencial Villa Venecia (Chitré, Herrera)",
    subtitle: "Construcción y acabados",
    image: "/images/projects/project-04.jpg",
  },
  {
    id: 5,
    title: "Sistema de Drenaje Estadio Ramón Cantera (Aguadulce)",
    subtitle: "Sistema pluvial / drenaje",
    image: "/images/projects/project-05.jpg",
  },
  {
    id: 6,
    title: "Remodelación de Parque Pocrí (Coclé)",
    subtitle: "Mejoras y adecuaciones",
    image: "/images/projects/project-06.jpg",
  },
  {
    id: 7,
    title: "Paradores fotográficos, pavimentación, acabados, impermeabilización de losas, cobertizos",
    subtitle: "Obra civil",
    image: "/images/projects/project-07.jpg",
  },
  {
    id: 8,
    title: "Estructura para tanque de agua",
    subtitle: "Estructura y soporte",
    image: "/images/projects/project-08.jpg",
  },
  {
    id: 9,
    title: "Proyecto Terminal de Transporte Penonomé: sistema sanitario / acueducto potable / sistema contra incendio",
    subtitle: "Sanitario, acueducto y contra incendio",
    image: "/images/projects/project-09.jpg",
  },
  {
    id: 10,
    title: "Proyecto Estadio Toco Castillo: sistema húmedo contra incendio",
    subtitle: "Sistema húmedo contra incendio",
    image: "/images/projects/project-10.jpg",
  },
  {
    id: 11,
    title: "Proyecto Museo Julio Gomez Ruiz: mejoras al museo",
    subtitle: "Remodelación / mejoras",
    image: "/images/projects/project-11.jpg",
  },
  {
    id: 12,
    title: "Servicios de instalación de sistema de gas licuado (PH Punta Prieta / PH City Tower)",
    subtitle: "Instalación de gas licuado",
    image: "/images/projects/project-12.jpg",
  },

  // ✅ 2 nuevos (NO borrar)
  {
    id: 13,
    title: "Diseños y render arquitectónico",
    subtitle: "Diseño y visualización",
    image: "/images/projects/project-13.jpg",
  },
  {
    id: 14,
    title: "Suministro, instalación y certificación de bombas contra incendio",
    subtitle: "Contra incendio",
    image: "/images/projects/project-14.jpg",
  },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-slate-100 to-slate-50">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>

      <div className="p-5">
        <div className="text-base font-extrabold leading-snug text-slate-900">
          {p.title}
        </div>
        <div className="mt-2 text-sm text-slate-600">{p.subtitle}</div>
      </div>
    </div>
  );
}

export default function ProyectosPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white pt-24">
        <div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Proyectos
          </h1>
          <p className="mt-2 max-w-2xl text-slate-600">
            Una muestra de trabajos realizados en distintas áreas y ubicaciones.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
