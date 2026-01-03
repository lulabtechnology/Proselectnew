import Image from "next/image";
import Reveal from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";

const projects = Array.from({ length: 14 }).map((_, i) => {
  const n = i + 1;
  const num = String(n).padStart(2, "0");
  const image = `/images/projects/project-${num}.jpg`;

  if (n === 13) {
    return {
      title: "Diseños y render arquitectónico",
      subtitle: "Obra ejecutada / referencia fotográfica (título específico pendiente si aplica).",
      image
    };
  }

  if (n === 14) {
    return {
      title: "Suministro, instalación y certificación de bombas contra incendio",
      subtitle: "Obra ejecutada / referencia fotográfica (título específico pendiente si aplica).",
      image
    };
  }

  return {
    title: `Proyecto ${num}`,
    subtitle: "Obra ejecutada / referencia fotográfica (título específico pendiente si aplica).",
    image
  };
});

export default function ProyectosPage() {
  return (
    <div className="container-pad pt-10 pb-14">
      <Reveal>
        <div className="max-w-2xl">
          <div className="text-xs font-extrabold text-brand-900">Portafolio</div>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Proyectos
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Galería de obras ejecutadas y referencias fotográficas.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <Reveal key={p.title} delay={0.04 * (idx % 6)}>
            <Card className="group overflow-hidden">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>

              <CardContent className="pt-5">
                <div className="text-base font-extrabold text-ink">{p.title}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.subtitle}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
