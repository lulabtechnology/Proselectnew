import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingCTA from "@/components/floating-cta";
import MobileCTABar from "@/components/mobile-cta-bar";

<<<<<<< HEAD
import { site } from "@/content/site";
import { organizationGraphJsonLd } from "@/lib/seo";
=======
import { brand, contact, site } from "@/content/site";
>>>>>>> dbee89047fb4775714b364566d6b6c2fda644cc1

const CANONICAL_ORIGIN = (site.url || "https://proselecpanama.com").replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_ORIGIN),
  title: {
<<<<<<< HEAD
    default: "PROSELEC Panamá | Obras civiles e instalaciones electromecánicas",
    template: "%s | PROSELEC Panamá",
  },
  description: site.description,
  keywords: [
    "PROSELEC Panamá",
    "PROSELEC S.A.",
    "Proselect",
    "obras civiles Panamá",
    "arquitectura Panamá",
    "instalaciones electromecánicas Panamá",
    "sistemas eléctricos Panamá",
    "fontanería Panamá",
    "gas licuado Panamá",
    "sistema húmedo contra incendio Panamá",
    "Santiago Veraguas",
    "Chitré",
    "Herrera",
    "Coclé",
=======
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
>>>>>>> dbee89047fb4775714b364566d6b6c2fda644cc1
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PA",
    url: "/",
    siteName: site.shortName,
<<<<<<< HEAD
    title: "PROSELEC Panamá | Obras civiles e instalaciones electromecánicas",
    description: site.description,
=======
    title: "PROSELEC | Obras civiles, arquitectura e instalaciones electromecánicas",
    description: site.description,
    // ✅ Imagen existente (evita 404). Si luego creas /public/images/og.jpg, cámbiala aquí.
>>>>>>> dbee89047fb4775714b364566d6b6c2fda644cc1
    images: [{ url: "/images/hero/slide-1.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
<<<<<<< HEAD
    title: "PROSELEC Panamá | Obras civiles e instalaciones electromecánicas",
=======
    title: "PROSELEC | Obras civiles, arquitectura e instalaciones electromecánicas",
>>>>>>> dbee89047fb4775714b364566d6b6c2fda644cc1
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
<<<<<<< HEAD
  const jsonLd = organizationGraphJsonLd();
=======
  const jsonLd = getJsonLd();
>>>>>>> dbee89047fb4775714b364566d6b6c2fda644cc1

  return (
    <html lang="es-PA">
      <body>
<<<<<<< HEAD
=======
        {/* ✅ Schema.org JSON-LD (ayuda SEO / Knowledge Graph) */}
>>>>>>> dbee89047fb4775714b364566d6b6c2fda644cc1
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
