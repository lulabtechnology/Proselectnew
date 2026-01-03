export type Project = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
};

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

const defaultSubtitle =
  "Obra ejecutada / referencia fotográfica (título específico pendiente si aplica).";

export const projects: Project[] = [
  ...Array.from({ length: 12 }).map((_, i) => {
    const idx = i + 1;
    return {
      id: `project-${pad2(idx)}`,
      title: `Proyecto ${pad2(idx)}`,
      subtitle: defaultSubtitle,
      image: `/images/projects/project-${pad2(idx)}.jpg`
    };
  }),
  {
    id: "project-13",
    title: "Diseños y render arquitectónico",
    subtitle: defaultSubtitle,
    image: "/images/projects/project-13.jpg"
  },
  {
    id: "project-14",
    title: "Suministro, instalación y certificación de bombas contra incendio",
    subtitle: defaultSubtitle,
    image: "/images/projects/project-14.jpg"
  }
];
