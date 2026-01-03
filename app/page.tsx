import HeroSlider from "@/components/hero-slider";
import { Section, SectionHeader, Reveal } from "@/components/section";
import { hero, homeSections } from "@/content/home";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="container-pad pt-8">
      <HeroSlider slides={hero.slides} />

      <Section className="pb-0">
        <SectionHeader
          kicker="PROSELEC"
          title={homeSections.highlightsTitle || "(Pendiente: Highlights del DOCX)"}
          subtitle="(Pendiente: si el DOCX trae un subtítulo para esta sección, pégalo aquí)"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {homeSections.highlights.map((h, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <CardTitle className="text-base">{h.title}</CardTitle>
                  <CardDescription className="mt-2">{h.body}</CardDescription>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-soft sm:p-10">
          <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                {homeSections.ctaBandTitle || "(Pendiente: CTA title DOCX)"}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                {homeSections.ctaBandBody || "(Pendiente: CTA body DOCX)"}
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <Link href={homeSections.ctaBandButton.href}>
                <Button size="lg">
                  {homeSections.ctaBandButton.label} <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
