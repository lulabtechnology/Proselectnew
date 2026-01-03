export type ServiceIconKey =
  | "Wrench"
  | "Zap"
  | "Droplets"
  | "Flame"
  | "HardHat"
  | "Building2"
  | "Shield"
  | "Award"
  | "Clock"
  | "CheckCircle2";

export type ServiceItem = {
  title: string;
  bullets: string[];
  icon: ServiceIconKey;
};

export type ServiceCategory = {
  category: string;
  description: string;
  items: ServiceItem[];
};

export const servicesContent: {
  title: string;
  intro: string;
  categories: ServiceCategory[];
} = {
  title: "(Pendiente: título Servicios del DOCX)",
  intro: "(Pendiente: intro Servicios del DOCX)",
  categories: [
    {
      category: "(Pendiente: categoría 1 - según DOCX)",
      description: "(Pendiente: descripción categoría 1)",
      items: [
        {
          title: "(Pendiente: servicio 1)",
          icon: "Wrench",
          bullets: ["(Pendiente)", "(Pendiente)", "(Pendiente)"]
        },
        {
          title: "(Pendiente: servicio 2)",
          icon: "Zap",
          bullets: ["(Pendiente)", "(Pendiente)", "(Pendiente)"]
        }
      ]
    },
    {
      category: "(Pendiente: categoría 2 - según DOCX)",
      description: "(Pendiente: descripción categoría 2)",
      items: [
        {
          title: "(Pendiente: servicio 3)",
          icon: "HardHat",
          bullets: ["(Pendiente)", "(Pendiente)", "(Pendiente)"]
        },
        {
          title: "(Pendiente: servicio 4)",
          icon: "Shield",
          bullets: ["(Pendiente)", "(Pendiente)", "(Pendiente)"]
        }
      ]
    }
  ]
};
