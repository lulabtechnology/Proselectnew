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
  title: "Servicios",
  intro:
    "Diseño, construcción e instalaciones para proyectos residenciales, comerciales e industriales.",
  categories: [
    {
      category: "Diseño arquitectónico, obras civiles y construcción",
      description:
        "Desarrollo integral de proyectos arquitectónicos y civiles, desde el diseño hasta la ejecución.",
      items: [
        {
          title: "Diseño arquitectónico integral",
          icon: "Building2",
          bullets: [
            "Proyectos funcionales y estéticos",
            "Planos, renders y documentación técnica"
          ]
        },
        {
          title: "Diseño estructural y obras civiles",
          icon: "HardHat",
          bullets: [
            "Cálculo y diseño de estructuras",
            "Cumplimiento de normas técnicas y seguridad"
          ]
        },
        {
          title: "Construcción y ejecución de proyectos",
          icon: "Wrench",
          bullets: [
            "Planificación y ejecución",
            "Entrega final del proyecto"
          ]
        },
        {
          title: "Supervisión y gerencia de obras",
          icon: "Clock",
          bullets: [
            "Control técnico y administrativo",
            "Cumplimiento de plazos, costos y especificaciones"
          ]
        },
        {
          title: "Remodelaciones y ampliaciones",
          icon: "CheckCircle2",
          bullets: [
            "Mejora de edificaciones existentes",
            "Adaptación a nuevas necesidades"
          ]
        },
        {
          title: "Asesoría técnica y presupuestos",
          icon: "Award",
          bullets: [
            "Presupuestos y cronogramas",
            "Asesoría para toma de decisiones"
          ]
        }
      ]
    },
    {
      category: "Sistemas eléctricos",
      description:
        "Diseño, instalación, mantenimiento y certificación de sistemas eléctricos.",
      items: [
        {
          title: "Diseño de sistemas eléctricos",
          icon: "Zap",
          bullets: [
            "Planos y cálculos eléctricos",
            "Residencial, comercial e industrial"
          ]
        },
        {
          title: "Instalación de sistemas eléctricos",
          icon: "Wrench",
          bullets: [
            "Instalaciones seguras y eficientes",
            "Normas técnicas vigentes"
          ]
        },
        {
          title: "Mantenimiento y corrección de fallas",
          icon: "Clock",
          bullets: [
            "Mantenimiento preventivo y correctivo",
            "Inspección y soluciones"
          ]
        },
        {
          title: "Asesoría y certificación eléctrica",
          icon: "Shield",
          bullets: [
            "Evaluación técnica",
            "Verificación de cumplimiento normativo"
          ]
        }
      ]
    },
    {
      category: "Sistemas de fontanería",
      description:
        "Redes potables, residuales y pluviales, con instalación y mantenimiento.",
      items: [
        {
          title: "Diseño de sistemas de plomería",
          icon: "Droplets",
          bullets: [
            "Planos para redes de agua potable",
            "Aguas residuales y pluviales"
          ]
        },
        {
          title: "Instalación de sistemas de plomería",
          icon: "Wrench",
          bullets: [
            "Instalaciones sanitarias, potables y pluviales",
            "Residencial, comercial e industrial"
          ]
        },
        {
          title: "Mantenimiento preventivo y correctivo",
          icon: "Clock",
          bullets: [
            "Reparación de fugas y obstrucciones",
            "Reemplazo de tuberías y accesorios"
          ]
        },
        {
          title: "Instalación de equipos y accesorios",
          icon: "CheckCircle2",
          bullets: [
            "Instalación de bombas y artefactos sanitarios",
            "Griferías y sistemas de presión"
          ]
        },
        {
          title: "Cumplimiento normativo",
          icon: "Shield",
          bullets: [
            "Evaluación de sistemas",
            "Adecuación a normas técnicas vigentes"
          ]
        }
      ]
    },
    {
      category: "Sistema de gas licuado",
      description:
        "Diseño, instalación, diagnóstico de fugas y certificaciones de sistemas de gas.",
      items: [
        {
          title: "Sistema residencial y comercial",
          icon: "Flame",
          bullets: [
            "Diseño e instalación segura",
            "Conforme a normas técnicas vigentes"
          ]
        },
        {
          title: "Estacas y ramales de distribución",
          icon: "Wrench",
          bullets: [
            "Tuberías matrices y ramales",
            "Correcta presión, sellado y trazado"
          ]
        },
        {
          title: "Diagnóstico de fugas",
          icon: "Shield",
          bullets: [
            "Inspección técnica especializada",
            "Soluciones correctivas para prevención de riesgos"
          ]
        },
        {
          title: "Certificaciones",
          icon: "Award",
          bullets: [
            "Revisión técnica del sistema",
            "Cumplimiento de normas de seguridad"
          ]
        }
      ]
    },
    {
      category: "Sistema húmedo contra incendio",
      description:
        "Diseño, instalación, bombas, pruebas, mantenimiento e inspección/certificación.",
      items: [
        {
          title: "Diseño conforme a normas NFPA",
          icon: "Shield",
          bullets: [
            "Diseño hidráulico y planos",
            "NFPA 13 (rociadores) y NFPA 14 (columnas/mangueras)"
          ]
        },
        {
          title: "Instalación de redes contra incendio",
          icon: "Wrench",
          bullets: [
            "Tuberías, rociadores, válvulas, gabinetes",
            "Materiales/diámetros/soportes según criterios normativos"
          ]
        },
        {
          title: "Bombas y abastecimiento",
          icon: "Zap",
          bullets: [
            "Bombas contra incendio y jockey pumps",
            "NFPA 20 (control y suministro confiable)"
          ]
        },
        {
          title: "Pruebas y mantenimiento",
          icon: "Clock",
          bullets: [
            "Pruebas hidrostáticas y de flujo",
            "Mantenimiento conforme a NFPA 25"
          ]
        },
        {
          title: "Inspección y certificación",
          icon: "Award",
          bullets: [
            "Verificación final de cumplimiento",
            "Informes y certificaciones requeridas"
          ]
        }
      ]
    }
  ]
};
