import Brand from "@/components/brand";
import { contact, site } from "@/content/site";
import { Phone, Mail } from "lucide-react";
import { mailLink, telLink } from "@/lib/links";

export default function Footer() {
  const email0 = contact.emails[0] ?? "";

  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="container-pad py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <Brand />
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
              {site.description}
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <div className="text-sm font-extrabold text-ink">Contacto</div>
                <div className="mt-3 space-y-2 text-sm text-slate-700">
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
              </div>

              <div>
                <div className="text-sm font-extrabold text-ink">Empresa</div>
                <div className="mt-3 space-y-2 text-sm text-slate-700">
                  <div><span className="text-slate-500">Razón social:</span> {site.shortName}</div>
                  <div><span className="text-slate-500">Fundada:</span> {site.founded}</div>
                  <div><span className="text-slate-500">Web:</span> {site.url}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-slate-200" />

        <div className="mt-6 flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {site.shortName}. Todos los derechos reservados.</div>
          <div className="text-slate-400">Next.js</div>
        </div>
      </div>
    </footer>
  );
}
