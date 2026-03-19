import { NextRequest, NextResponse } from "next/server";

// ✅ Dominio canónico
const CANONICAL_HOST = "proselecpanama.com";

// ✅ Hosts alternos que quieres consolidar hacia el dominio canónico
const LEGACY_HOSTS = new Set([
  `www.${CANONICAL_HOST}`,
  "proselectnew.vercel.app",
  "www.proselectpty.com",
  "proselectpty.com",
]);

export function middleware(req: NextRequest) {
  const env = (process.env.VERCEL_ENV || process.env.NODE_ENV || "").toLowerCase();
  const isProd = env === "production";

  // En preview/dev NO forzamos redirecciones para no romper pruebas.
  if (!isProd) return NextResponse.next();

  const hostHeader = req.headers.get("host") || "";
  const host = hostHeader.split(":")[0].toLowerCase();

  // 1) www -> non-www
  if (host === `www.${CANONICAL_HOST}`) {
    const url = req.nextUrl.clone();
    url.hostname = CANONICAL_HOST;
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }

  // 2) Otros dominios antiguos -> canónico (solo si apuntan al mismo deploy)
  if (LEGACY_HOSTS.has(host) && host !== CANONICAL_HOST) {
    const url = req.nextUrl.clone();
    url.hostname = CANONICAL_HOST;
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Ignora assets estáticos
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico)).*)",
  ],
};
