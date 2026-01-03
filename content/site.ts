export type SiteMeta = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url?: string;       // si no tienes URL oficial, déjalo vacío
  founded?: string;   // opcional, solo si está en DOCX/PDF
  about: string;      // texto corto (DOCX)
  mission?: string;   // opcional
  vision?: string;    // opcional
};

export type ContactMeta = {
  phoneDisplay: string;   // ej: "XXXX-XXXX" (solo si está en DOCX/PDF)
  phoneE164: string;      // ej: "+507XXXXXXXX" (solo si está en DOCX/PDF)
  whatsappDigits: string; // ej: "507XXXXXXXX" (solo si está en DOCX/PDF)
  whatsappE164: string;   // ej: "+507XXXXXXXX" (solo si está en DOCX/PDF)
  emails: string[];       // uno o varios correos (solo si está en DOCX/PDF)
  address: string;        // dirección (solo si está en DOCX/PDF)
  mapQuery: string;       // texto para Google Maps embed (solo si está en DOCX/PDF)
};

export const branding = {
  // Cambia SOLO aquí si tu repo usa otra ruta (ej: "/images/logo/logo.png")
  logoPath: "/images/logo.png",
  ogImagePath: "/images/og.jpg" // placeholder; NO importar estático
};

export const site: SiteMeta = {
  name: "PROSELEC, S.A.",
  shortName: "PROSELEC",
  tagline: "(Pendiente: pegar tagline del DOCX “mejora de pagina”)",
  description: "(Pendiente: pegar descripción oficial del DOCX/PDF, sin inventar datos)",
  url: "",
  founded: "",
  about: "(Pendiente: pegar texto corto 'Quiénes somos' del DOCX)"
  // mission/vision: solo si existen en DOCX/PDF
};

export const contact: ContactMeta = {
  phoneDisplay: "",
  phoneE164: "",
  whatsappDigits: "",
  whatsappE164: "",
  emails: [],
  address: "",
  mapQuery: ""
};
