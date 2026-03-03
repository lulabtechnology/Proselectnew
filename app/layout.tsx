import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingCTA from "@/components/floating-cta";
import MobileCTABar from "@/components/mobile-cta-bar";

import { brand, contact, site } from "@/content/site";

const CANONICAL_ORIGIN = (site.url || "https://proselecpanama.com").replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_ORIGIN),
  title: {
    default: "PROSELEC | Obras civiles, arquitectura e instalaciones electromecánicas",
    template: "%s | PROSELEC",
  },
  description: site.description,
  keywords: [
    "PROSELEC",
    "PROSELEC S.A.",
    "Proselect",
    "obras civiles",
    "arquitectura",
    "instalaciones electromecánicas",
    "sistemas eléctricos",
    "fontanería",
    "gas licuado",
    "sistema húmedo contra incendio",
    "Panamá",
    "Santiago Veraguas",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PA",
    url: "/",
    siteName: site.shortName,
    title: "PROSELEC | Obras civiles, arquitectura e instalaciones electromecánicas",
    description: site.description,
    // ✅ Imagen existente (evita 404). Si luego creas /public/images/og.jpg, cámbiala aquí.
    images: [{ url: "/images/hero/slide-1.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PROSELEC | Obras civiles, arquitectura e instalaciones electromecánicas",
    description: site.description,
    images: ["/images/hero/slide-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

function getJsonLd() {
  const email0 = contact.emails?.[0] ? String(contact.emails[0]) : "";

  const organization: any = {
    "@type": "Organization",
    "@id": `${CANONICAL_ORIGIN}/#organization`,
    name: site.name,
    alternateName: ["PROSELEC", "Proselect"],
    url: CANONICAL_ORIGIN,
    logo: `${CANONICAL_ORIGIN}${brand.logoSrc}`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: contact.phoneE164,
        contactType: "customer service",
        availableLanguage: ["es"],
      },
    ],
  };

  if (email0) organization.email = `mailto:${email0}`;
  if (contact.address) {
    organization.address = {
      "@type": "PostalAddress",
      addressCountry: "PA",
      streetAddress: contact.address,
    };
  }

  const website = {
    "@type": "WebSite",
    "@id": `${CANONICAL_ORIGIN}/#website`,
    url: CANONICAL_ORIGIN,
    name: site.name,
    inLanguage: "es-PA",
    publisher: { "@id": `${CANONICAL_ORIGIN}/#organization` },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website],
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = getJsonLd();

  return (
    <html lang="es-PA">
      <body>
        {/* ✅ Schema.org JSON-LD (ayuda SEO / Knowledge Graph) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Navbar />
        <main className="pb-20 sm:pb-0">{children}</main>

        <Footer />

        <FloatingCTA />
        <MobileCTABar />
      </body>
    </html>
  );
}
