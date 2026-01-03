import { servicesContent } from "@/content/services";
import { Section, SectionHeader, Reveal } from "@/components/section";
import ServiceCard from "@/components/service-card";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function ServicesPage() {
  return (
    <div className="container-pad pt-10">
      <Section className="pt-0">
        <SectionHeader
          kicker="Servicios"
          title={servicesContent.title}
          subtitle={servicesContent.intro}
        />

        <div className="space-y-10">
          {servicesContent.categories.map((cat, idx) => (
            <div key={idx}>
              <Reveal>
                <Card className="overflow-hidden">
                  <div className="h-1.5 w-full bg-[linear-gradient(90deg,rgb(var(--brand)),rgb(var(--accent)))]" />
                  <CardContent className="pt-6">
                    <CardTitle className="text-base">{cat.category}</CardTitle>
                    <CardDescription className="mt-2">{cat.description}</CardDescription>
                  </CardContent>
                </Card>
              </Reveal>

              <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {cat.items.map((item, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <ServiceCard title={item.title} bullets={item.bullets} icon={item.icon} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
