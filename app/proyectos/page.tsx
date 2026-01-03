import { projects } from "@/content/projects";
import { Section, SectionHeader, Reveal } from "@/components/section";
import ProjectCard from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <div className="container-pad pt-10">
      <Section className="pt-0">
        <SectionHeader
          kicker="Portafolio"
          title="Proyectos"
          subtitle="Galería de obras ejecutadas y referencias fotográficas."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.03}>
              <ProjectCard title={p.title} subtitle={p.subtitle} image={p.image} />
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
