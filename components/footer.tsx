import Link from "next/link";
import Brand from "@/components/brand";
import { contact, site } from "@/content/site";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone } from "lucide-react";
import { mailLink, telLink } from "@/lib/links";

export default function Footer() {
  const email0 = contact.emails[0] ?? "";
  const hasPhone = Boolean(contact.phoneE164 && contact.phoneDisplay);
  const hasEmail = Boolean(email0);
  const hasAddress = Boolean(contact.address);

  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="container-pad py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <Brand />
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
              {site.description || "(Pendiente: descripción del DOCX/PDF)"}
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <div className="text-sm font-semibold text-slate-900">Contacto</div>
                <div className="mt-3 space-y-2 text-sm text-slate-700">
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
                    {hasAddress ? (
                      <span>{contact.address}</span>
                    ) : (
                      <span>(Pendiente: dirección del DOCX/PDF)</span>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-slate-900">Secciones</div>
                <div className="mt-3 space-y-2 text-sm text-slate-700">
                  <Link className="block hover:underline" href="/sobre-nosotros">
                    Sobre nosotros
                  </Link>
                  <Link className="block hover:underline" href="/servicios">
                    Servicios
                  </Link>
                  <Link className="block hover:underline" href="/proyectos">
                    Proyectos
                  </Link>
                  <Link className="block hover:underline" href="/contacto">
                    Contacto
                  </Link>
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-slate-900">Información</div>
                <div className="mt-3 space-y-2 text-sm text-slate-700">
                  <div>
                    <span className="text-slate-500">Razón social:</span>{" "}
                    {site.name}
                  </div>
                  {site.founded ? (
                    <div>
                      <span className="text-slate-500">Fundación:</span>{" "}
                      {site.founded}
                    </div>
                  ) : (
                    <div className="text-slate-500">
                      (Fundación: opcional si existe en DOCX/PDF)
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {site.shortName}. Todos los derechos reservados.</div>
          <div className="text-slate-400">
            Hecho con Next.js
          </div>
        </div>
      </div>
    </footer>
  );
}
