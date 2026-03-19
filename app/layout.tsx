import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingCTA from "@/components/floating-cta";
import MobileCTABar from "@/components/mobile-cta-bar";

import { site } from "@/content/site";
import { organizationGraphJsonLd } from "@/lib/seo";

const CANONICAL_ORIGIN = (site.url || "https://proselecpanama.com").replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_ORIGIN),
  title: {
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
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PA",
    url: "/",
    siteName: site.shortName,
    title: "PROSELEC Panamá | Obras civiles e instalaciones electromecánicas",
    description: site.description,
    images: [{ url: "/images/hero/slide-1.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PROSELEC Panamá | Obras civiles e instalaciones electromecánicas",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = organizationGraphJsonLd();

  return (
    <html lang="es-PA">
      <body>
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
