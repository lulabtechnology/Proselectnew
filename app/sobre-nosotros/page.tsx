import { aboutContent } from "@/content/about";
import { site } from "@/content/site";
import { Section, SectionHeader, Reveal } from "@/components/section";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="container-pad pt-10">
      <Section className="pt-0">
        <SectionHeader
          kicker={site.shortName}
          title={aboutContent.title || "Sobre nosotros"}
          subtitle={aboutContent.intro || "(Pendiente: intro del DOCX)"}
        />

        <div className="grid gap-4 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <CardTitle className="text-base">Quiénes somos</CardTitle>
                <CardDescription className="mt-2">
                  {site.about || "(Pendiente: texto oficial DOCX)"}
                </CardDescription>

                {(site.mission || site.vision) ? (
                  <>
                    <Separator className="my-6" />
                    {site.mission ? (
                      <div className="mb-4">
                        <div className="text-sm font-semibold text-slate-900">Misión</div>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{site.mission}</p>
                      </div>
                    ) : null}

                    {site.vision ? (
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Visión</div>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{site.vision}</p>
                      </div>
                    ) : null}
                  </>
                ) : (
                  <div className="mt-6 text-sm text-slate-500">
                    (Misión/Visión: solo mostrar si están en DOCX/PDF)
                  </div>
                )}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="h-full">
              <CardContent className="pt-6">
                <CardTitle className="text-base">
                  {aboutContent.valuesTitle || "Valores"}
                </CardTitle>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {aboutContent.values.map((v, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title={aboutContent.whyTitle || "Por qué elegirnos"}
          subtitle="(Pendiente: pega el texto y puntos del DOCX aquí)"
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
      </Section>
    </div>
  );
}
