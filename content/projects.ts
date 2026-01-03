export type Project = {
  id: string;
  title: string;
  subtitle: string;
  image: string; // ruta local en /public (en Next se usa con prefijo "/")
};

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

export const projects: Project[] = [
  ...Array.from({ length: 12 }).map((_, i) => {
    const idx = i + 1;
    return {
      id: `project-${pad2(idx)}`,
      title: `Proyecto ${pad2(idx)} (Pendiente: título oficial DOCX/PDF)`,
      subtitle: "(Pendiente: subtítulo oficial DOCX/PDF)",
      image: `/images/projects/project-${pad2(idx)}.jpg`
    };
  }),

  // 13 y 14: pedidos explícitamente (NO eliminar los existentes)
  {
    id: "project-13",
    title: "Diseños y render arquitectónico",
    subtitle: "(Pendiente: subtítulo del DOCX/PDF si existe; si no, deja neutro)",
    image: "/images/projects/project-13.jpg"
  },
  {
    id: "project-14",
    title: "Suministro, instalación y certificación de bombas contra incendio",
    subtitle: "(Pendiente: subtítulo del DOCX/PDF si existe; si no, deja neutro)",
    image: "/images/projects/project-14.jpg"
  }
];
