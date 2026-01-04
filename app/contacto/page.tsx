import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import { contact } from "@/content/site";
import { mailLink, telLink, waLink } from "@/lib/links";

export default function ContactoPage() {
  const waHref = waLink(contact.whatsappDigits, "Hola, quiero cotizar con PROSELEC.");

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    contact.mapQuery
  )}&output=embed`;

  return (
    <div className="bg-white">
      <div className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white pt-24">
        <div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Contacto
          </h1>
          <p className="mt-2 max-w-2xl text-slate-600">
            Escríbenos o llámanos para cotizar.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <ScrollReveal>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-lg font-extrabold text-slate-900">
                Información de contacto
              </div>

              <div className="mt-5 grid gap-4 text-sm text-slate-700">
                <a
                  href={telLink(contact.phoneE164)}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:bg-white"
                >
                  <Phone className="h-5 w-5 text-sky-700" />
                  <div>
                    <div className="font-bold text-slate-900">Teléfono</div>
                    <div className="text-slate-600">{contact.phoneDisplay}</div>
                  </div>
                </a>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:bg-white"
                >
                  <MessageCircle className="h-5 w-5 text-sky-700" />
                  <div>
                    <div className="font-bold text-slate-900">WhatsApp</div>
                    <div className="text-slate-600">Cotizar por WhatsApp</div>
                  </div>
                </a>

                <a
                  href={mailLink(contact.emails[0] ?? "REEMPLAZAR@TU-DOMINIO.com")}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:bg-white"
                >
                  <Mail className="h-5 w-5 text-sky-700" />
                  <div className="min-w-0">
                    <div className="font-bold text-slate-900">Correo</div>
                    <div className="truncate text-slate-600">
                      {contact.emails[0] ?? "REEMPLAZAR@TU-DOMINIO.com"}
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-sky-700" />
                  <div>
                    <div className="font-bold text-slate-900">Dirección</div>
                    <div className="text-slate-600">{contact.address}</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              {/* ✅ SIN el texto “Mapa embebido…” */}
              <iframe
                title="Mapa"
                src={mapSrc}
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
