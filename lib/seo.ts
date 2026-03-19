import type { Metadata } from "next";
import { brand, contact, site } from "@/content/site";

const CANONICAL_ORIGIN = (site.url || "https://proselecpanama.com").replace(/\/$/, "");
const DEFAULT_OG_IMAGE = "/images/hero/slide-1.jpg";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
};

type BreadcrumbItem = {
  name: string;
  item: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export function absoluteUrl(path = "/") {
  return `${CANONICAL_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = DEFAULT_OG_IMAGE,
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "es_PA",
      url,
      siteName: site.shortName,
      title,
      description,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function organizationGraphJsonLd() {
  const email0 = contact.emails?.[0] ? String(contact.emails[0]) : "";
  const logoUrl = absoluteUrl(brand.logoSrc);

  const organization: Record<string, unknown> = {
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: site.name,
    alternateName: ["PROSELEC", "Proselect"],
    url: CANONICAL_ORIGIN,
    description: site.description,
    logo: logoUrl,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: contact.phoneE164,
        contactType: "sales",
        availableLanguage: ["es"],
      },
    ],
  };

  if (email0) organization.email = email0;
  if (contact.address) {
    organization.address = {
      "@type": "PostalAddress",
      streetAddress: contact.address,
      addressCountry: "PA",
    };
  }

  const localBusiness: Record<string, unknown> = {
    "@type": "GeneralContractor",
    "@id": absoluteUrl("/#localbusiness"),
    name: site.name,
    url: CANONICAL_ORIGIN,
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    description: site.description,
    telephone: contact.phoneE164,
    areaServed: [
      { "@type": "State", name: "Panamá" },
      { "@type": "City", name: "Santiago de Veraguas" },
      { "@type": "City", name: "Chitré" },
      { "@type": "State", name: "Herrera" },
      { "@type": "State", name: "Coclé" },
    ],
    makesOffer: {
      "@type": "OfferCatalog",
      name: "Servicios de PROSELEC",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Obras civiles y construcción" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diseño arquitectónico y estructural" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Instalaciones eléctricas" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fontanería y sistemas sanitarios" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gas licuado" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sistemas húmedos contra incendio" } },
      ],
    },
  };

  if (email0) localBusiness.email = email0;
  if (contact.address) {
    localBusiness.address = {
      "@type": "PostalAddress",
      streetAddress: contact.address,
      addressCountry: "PA",
    };
  }

  const website = {
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: CANONICAL_ORIGIN,
    name: site.name,
    inLanguage: "es-PA",
    publisher: { "@id": absoluteUrl("/#organization") },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, localBusiness, website],
  };
}
