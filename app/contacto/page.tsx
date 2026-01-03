import { contact, site } from "@/content/site";
import { Section, SectionHeader, Reveal } from "@/components/section";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { mailLink, telLink } from "@/lib/links";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  const email0 = contact.emails[0] ?? "";

  return (
    <div className="container-pad pt-10">
      <Section className="pt-0">
        <SectionHeader
          kicker={site.shortName}
          title="Contacto"
          subtitle="Contáctanos para coordinar tu obra o instalación."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <Card className="h-full overflow-hidden">
              <div className="h-1.5 w-full bg-[linear-gradient(90deg,rgb(var(--brand)),rgb(var(--accent)))]" />
              <CardContent className="pt-6">
                <CardTitle className="text-base">Datos de contacto</CardTitle>

                <div className="mt-4 space-y-3 text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-brand-700" />
                    <a className="hover:underline" href={telLink(contact.phoneE164)}>
                      {contact.phoneDisplay}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-accent-700" />
                    <a className="hover:underline" href={mailLink(email0)}>
                      {email0}
                    </a>
                  </div>
                </div>

                <div className="mt-6 grid gap-2">
                  <a href={telLink(contact.phoneE164)}>
                    <Button className="w-full" variant="primary">
                      Llamar
                    </Button>
                  </a>
                  <a href={mailLink(email0)}>
                    <Button className="w-full" variant="outline">
                      Email
                    </Button>
                  </a>
                </div>

                <p className="mt-6 text-xs leading-5 text-slate-500">
                  * El correo está como placeholder para que lo reemplaces por el correo de dominio real.
                </p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={0.08}>
            <Card className="overflow-hidden">
              <div className="h-1.5 w-full bg-[linear-gradient(90deg,rgb(var(--brand)),rgb(var(--accent)))]" />
              <CardContent className="pt-6">
                <CardTitle className="text-base">Escríbenos</CardTitle>
                <CardDescription className="mt-2">
                  Formulario visual (placeholder). Si luego quieres envío real, se integra.
                </CardDescription>

                <form className="mt-6 grid gap-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Input placeholder="Nombre" />
                    <Input placeholder="Teléfono o correo" />
                  </div>
                  <Input placeholder="Asunto" />
                  <Textarea placeholder="Mensaje" />
                  <Button type="button" className="w-full sm:w-auto">
                    Enviar (placeholder)
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
