import Brand from "@/components/brand";
import { contact, site } from "@/content/site";
import { mailLink, telLink, waLink } from "@/lib/links";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  const email0 = contact.emails?.[0] ?? "";
  const waMsg = "Hola, me gustaría solicitar una cotización con PROSELEC.";

  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(12,74,173,0.55),rgba(12,165,178,0.55),transparent)]" />

      <div className="container-pad py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <Brand />
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
              {site.description}
            </p>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-[radial-gradient(circle_at_20%_10%,rgba(12,74,173,0.08),transparent_60%),radial-gradient(circle_at_80%_20%,rgba(12,165,178,0.08),transparent_60%),linear-gradient(to_bottom,#fff,rgb(var(--brand-50)))] p-4">
              <div className="text-xs font-extrabold text-brand-900">
                {site.tagline}
              </div>
              {site.founded ? (
                <div className="mt-1 text-xs text-slate-600">
                  Fundada en {site.founded}
                </div>
              ) : null}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
                <div className="text-sm font-extrabold text-ink">Contacto</div>

                <div className="mt-3 space-y-3 text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="grid h-9 w-9 place-items-center rounded-2xl bg-brand-50 text-brand-900 ring-1 ring-brand-200">
                      <Phone className="h-4 w-4" />
                    </span>
                    <a className="font-semibold hover:underline" href={telLink(contact.phoneE164)}>
                      {contact.phoneDisplay}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="grid h-9 w-9 place-items-center rounded-2xl bg-[rgba(12,165,178,0.10)] text-[rgb(var(--accent-700))] ring-1 ring-[rgba(12,165,178,0.25)]">
                      <MessageCircle className="h-4 w-4" />
                    </span>
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
                    <span className="grid h-9 w-9 place-items-center rounded-2xl bg-[rgba(12,165,178,0.10)] text-[rgb(var(--accent-700))] ring-1 ring-[rgba(12,165,178,0.25)]">
                      <Mail className="h-4 w-4" />
                    </span>
                    <a className="font-semibold hover:underline" href={mailLink(email0)}>
                      {email0}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
                <div className="text-sm font-extrabold text-ink">Empresa</div>
                <div className="mt-3 space-y-2 text-sm text-slate-700">
                  <div>
                    <span className="text-slate-500">Razón social:</span>{" "}
                    <span className="font-semibold">{site.shortName}</span>
                  </div>
                  {site.url ? (
                    <div>
                      <span className="text-slate-500">Web:</span>{" "}
                      <span className="font-semibold">{site.url}</span>
                    </div>
                  ) : null}
                  {site.founded ? (
                    <div>
                      <span className="text-slate-500">Fundada:</span>{" "}
                      <span className="font-semibold">{site.founded}</span>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            {contact.address ? (
              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
                <div className="text-sm font-extrabold text-ink">Dirección</div>
                <p className="mt-2 text-sm text-slate-700">{contact.address}</p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-slate-200" />
        <div className="mt-6 flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {site.shortName}. Todos los derechos reservados.</div>
          <div className="text-slate-400">Next.js + Tailwind</div>
        </div>
      </div>
    </footer>
  );
}
