import { contact, site } from "@/content/site";
import { Section, SectionHeader, Reveal } from "@/components/section";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mailLink, telLink, waLink } from "@/lib/links";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

export default function ContactPage() {
  const email0 = contact.emails[0] ?? "";
  const waMsg = "Hola, me gustaría solicitar una cotización con PROSELEC.";

  const mapSrc = contact.mapQuery
    ? `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`
    : "";

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
                    <a className="font-semibold hover:underline" href={telLink(contact.phoneE164)}>
                      {contact.phoneDisplay}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-[rgb(var(--accent-700))]" />
                    <a
                      className="font-semibold hover:underline"
                      href={waLink(contact.whatsappDigits, waMsg)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[rgb(var(--accent-700))]" />
                    <a className="font-semibold hover:underline" href={mailLink(email0)}>
                      {email0}
                    </a>
                  </div>

                  {contact.address ? (
                    <div className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 text-brand-700" />
                      <div>
                        <div className="font-semibold">Dirección</div>
                        <div className="text-slate-600">{contact.address}</div>
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="mt-6 grid gap-2">
                  <a href={waLink(contact.whatsappDigits, waMsg)} target="_blank" rel="noreferrer">
                    <Button className="w-full">
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </Button>
                  </a>
                  <a href={telLink(contact.phoneE164)}>
                    <Button className="w-full" variant="outline">
                      <Phone className="h-4 w-4" /> Llamar
                    </Button>
                  </a>
                  <a href={mailLink(email0)}>
                    <Button className="w-full" variant="outline">
                      <Mail className="h-4 w-4" /> Email
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={0.08}>
            <Card className="overflow-hidden">
              <div className="h-1.5 w-full bg-[linear-gradient(90deg,rgb(var(--brand)),rgb(var(--accent)))]" />
              <CardContent className="pt-6">
                <CardTitle className="text-base">Ubicación</CardTitle>
                <CardDescription className="mt-2">
                  {contact.mapQuery ? "Mapa embebido según dirección del documento." : "Mapa disponible pronto."}
                </CardDescription>

                {mapSrc ? (
                  <div className="mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
                    <iframe
                      title="Mapa"
                      src={mapSrc}
                      className="h-[360px] w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                ) : (
                  <div className="mt-5 rounded-3xl border border-slate-200 bg-brand-50 p-6 text-sm text-slate-700">
                    Agrega <code>contact.mapQuery</code> en <code>content/site.ts</code> para mostrar el mapa.
                  </div>
                )}
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
