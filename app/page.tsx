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
      <HeroSlider slides={hero.slides} chips={hero.chips} />

      <Section tone="soft" className="mt-10 rounded-[28px] border border-slate-200 bg-white/70 shadow-soft">
        <div className="container-pad py-12">
          <SectionHeader
            kicker="PROSELEC"
            title={homeSections.highlightsTitle}
            subtitle="Soluciones de ingeniería con enfoque en calidad, seguridad y confiabilidad."
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
        </div>
      </Section>

      <Section>
        <div className="rounded-[28px] border border-slate-200 bg-[radial-gradient(circle_at_10%_10%,rgba(12,74,173,0.10),transparent_60%),radial-gradient(circle_at_90%_20%,rgba(12,165,178,0.10),transparent_55%),linear-gradient(to_bottom,#fff,rgb(var(--brand-50)))] p-6 shadow-glow sm:p-10">
          <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                {homeSections.ctaBandTitle}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                {homeSections.ctaBandBody}
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
