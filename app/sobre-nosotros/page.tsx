import { aboutContent } from "@/content/about";
import { site } from "@/content/site";
import { Section, SectionHeader, Reveal } from "@/components/section";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container-pad pt-10">
      <Section className="pt-0">
        <SectionHeader
          kicker={site.shortName}
          title={aboutContent.title}
          subtitle={aboutContent.intro}
        />

        <div className="grid gap-4 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="h-1.5 w-full bg-[linear-gradient(90deg,rgb(var(--brand)),rgb(var(--accent)))]" />
              <CardContent className="pt-6">
                <CardTitle className="text-base">Quiénes somos</CardTitle>
                <CardDescription className="mt-2">{site.about}</CardDescription>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-extrabold text-ink">Misión</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{site.mission}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-extrabold text-ink">Visión</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{site.vision}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="h-full">
              <CardContent className="pt-6">
                <CardTitle className="text-base">{aboutContent.valuesTitle}</CardTitle>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {aboutContent.values.map((v, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--brand))]" />
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section tone="soft" className="rounded-[28px] border border-slate-200 bg-white/70 shadow-soft">
        <div className="container-pad py-12">
          <SectionHeader
            title={aboutContent.whyTitle}
            subtitle="Enfoque técnico, gestión y soporte integral durante todo el proyecto."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {aboutContent.why.map((w, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <CardTitle className="text-base">{w.title}</CardTitle>
                    <CardDescription className="mt-2">{w.body}</CardDescription>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
