import { contact, site } from "@/content/site";
import { Section, SectionHeader, Reveal } from "@/components/section";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { mailLink, telLink, waLink } from "@/lib/links";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function ContactPage() {
  const email0 = contact.emails[0] ?? "";
  const hasPhone = Boolean(contact.phoneE164 && contact.phoneDisplay);
  const hasWA = Boolean(contact.whatsappDigits);
  const hasEmail = Boolean(email0);
  const hasMap = Boolean(contact.mapQuery);

  const waHref = hasWA
    ? waLink(contact.whatsappDigits, "Hola, me gustaría recibir más información.")
    : "/contacto";

  return (
    <div className="container-pad pt-10">
      <Section className="pt-0">
        <SectionHeader
          kicker={site.shortName}
          title="Contacto"
          subtitle="(Pendiente: texto del DOCX/PDF si existe. Si no, deja neutro.)"
        />

        <div className="grid gap-4 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <Card className="h-full">
              <CardContent className="pt-6">
                <CardTitle className="text-base">Datos de contacto</CardTitle>

                <div className="mt-4 space-y-3 text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-slate-500" />
                    {hasPhone ? (
                      <a className="hover:underline" href={telLink(contact.phoneE164)}>
                        {contact.phoneDisplay}
                      </a>
                    ) : (
                      <span>(Pendiente: teléfono del DOCX/PDF)</span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-slate-500" />
                    {hasWA ? (
                      <a className="hover:underline" href={waHref}>
                        WhatsApp
                      </a>
                    ) : (
                      <span>(Pendiente: WhatsApp del DOCX/PDF)</span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-slate-500" />
                    {hasEmail ? (
                      <a className="hover:underline" href={mailLink(email0)}>
                        {email0}
                      </a>
                    ) : (
                      <span>(Pendiente: correo del DOCX/PDF)</span>
                    )}
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 text-slate-500" />
                    {contact.address ? (
                      <span>{contact.address}</span>
                    ) : (
                      <span>(Pendiente: dirección del DOCX/PDF)</span>
                    )}
                  </div>
                </div>

                <div className="mt-6 grid gap-2">
                  <a href={hasPhone ? telLink(contact.phoneE164) : "/contacto"}>
                    <Button className="w-full" variant="primary">
                      Llamar
                    </Button>
                  </a>
                  <a href={waHref}>
                    <Button className="w-full" variant="outline">
                      WhatsApp
                    </Button>
                  </a>
                  <a href={hasEmail ? mailLink(email0) : "/contacto"}>
                    <Button className="w-full" variant="secondary">
                      Email
                    </Button>
                  </a>
                </div>

                <p className="mt-6 text-xs leading-5 text-slate-500">
                  Nota: este formulario es visual (placeholder). Si quieres envío real,
                  se integra con un endpoint o proveedor (sin inventar datos).
                </p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={0.08}>
            <Card>
              <CardContent className="pt-6">
                <CardTitle className="text-base">Escríbenos</CardTitle>
                <CardDescription className="mt-2">
                  (Pendiente: instrucciones del DOCX si existen)
                </CardDescription>

                <form className="mt-6 grid gap-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Input placeholder="Nombre (pendiente)" />
                    <Input placeholder="Teléfono o email (pendiente)" />
                  </div>
                  <Input placeholder="Asunto (pendiente)" />
                  <Textarea placeholder="Mensaje (pendiente)" />
                  <Button type="button" className="w-full sm:w-auto">
                    Enviar (placeholder)
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-4 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft">
              {hasMap ? (
                <iframe
                  title="Mapa"
                  className="h-[320px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`}
                />
              ) : (
                <div className="grid h-[320px] place-items-center bg-gradient-to-br from-slate-50 to-white text-sm text-slate-600">
                  (Pendiente: mapQuery del DOCX/PDF para mostrar el mapa)
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
