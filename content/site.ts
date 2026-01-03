export type SiteMeta = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url?: string;
  founded?: string;
  about: string;
  mission?: string;
  vision?: string;
};

export type ContactMeta = {
  phoneDisplay: string;
  phoneE164: string;
  whatsappDigits: string;   // lo dejamos vacío porque el cliente pidió SOLO teléfono y correo
  whatsappE164: string;     // vacío
  emails: string[];
  address: string;          // vacío por instrucción del cliente
  mapQuery: string;         // vacío por instrucción del cliente
};

export const branding = {
  logoPath: "/images/logo.png",
  ogImagePath: "/images/og.jpg"
};

export const site: SiteMeta = {
  name: "Proyecto y Servicios Electromecánicos, S.A. (PROSELEC, S.A.)",
  shortName: "PROSELEC",
  tagline: "Obras civiles, arquitectura e instalaciones electromecánicas",
  description:
    "Soluciones de ingeniería para el diseño, planificación, construcción, equipamiento y mantenimiento de proyectos.",
  url: "www.proselecpanama.es",
  founded: "2011",
  about:
    "Empresa panameña que desarrolla su actividad en obras civiles, arquitectura y obras electromecánicas.",
  mission:
    "Brindar un servicio de calidad en el estudio técnico para el diseño, planificación, construcción, equipamiento y mantenimiento de proyectos de obra civil e instalaciones electromecánicas.",
  vision:
    "Ser una empresa reconocida por ofrecer un servicio de calidad, seguridad y confiable, destacando en la innovación y tecnologías de vanguardia."
};

export const contact: ContactMeta = {
  phoneDisplay: "6852-7127",
  phoneE164: "+50768527127",

  whatsappDigits: "",
  whatsappE164: "",

  // 👇 El cliente dijo “correo nuevo (dominio)”: NO lo invento. Lo dejo para que lo reemplaces.
  emails: ["REEMPLAZAR@TU-DOMINIO.COM"],

  address: "",
  mapQuery: ""
};
