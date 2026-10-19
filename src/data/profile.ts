export const profile = {
  name: "Adrián Darío Diez Canseco Roca",
  role: "Ingeniero en Telecomunicaciones · Desarrollador Full-Stack Freelance",
  location: "Santa Cruz, Bolivia",
  email: "adrian10cr@proton.me",
  pitch:
    "Desarrollador full-stack freelance con experiencia en proyectos de producción para clientes institucionales en Bolivia (web, mobile nativo y multiplataforma). Eje fuerte en React, con base sólida en análisis y visualización de datos. Lidero proyectos de punta a punta: relevamiento de requerimientos, diseño, desarrollo, despliegue y coordinación directa con clientes.",
  links: {
    github: "https://github.com/AdoxNotFound",
    linkedin: "https://www.linkedin.com/in/adri%C3%A1n-d-diez-canseco-r-79b668298/",
    kaggle: "https://www.kaggle.com/adoxnotfound",
    tableau: "https://public.tableau.com/app/profile/adrian.dario.diez.canseco.roca/vizzes",
  },
} as const;

export type Project = {
  name: string;
  client: string;
  period: string;
  role: string;
  stack: string[];
  description: string;
  link?: { label: string; href: string };
  note?: string;
};

export const projects: Project[] = [
  {
    name: "Sitio institucional CANIOB",
    client: "CANIOB — Cámara Nacional de Industrias Oleaginosas de Bolivia",
    period: "Sep – Oct 2026",
    role: "Desarrollador full-stack (proyecto en solitario)",
    stack: ["Next.js", "PostgreSQL"],
    description:
      "Desarrollo full-stack completo del sitio web institucional, de principio a fin. Primer proyecto propio con agentes de IA integrados activamente al flujo de trabajo.",
    link: { label: "Ver sitio en producción", href: "https://caniob.org.bo/" },
  },
  {
    name: "Plataforma de trazabilidad de soya",
    client: "CANIOB — Mesa de Soya Sostenible",
    period: "Oct 2025 – presente",
    role: "Coordinación técnica y desarrollo frontend",
    stack: ["React"],
    description:
      "Coordinación técnica y desarrollo frontend de una plataforma de trazabilidad para la cadena de soya boliviana, con participación activa en la mesa técnica junto a actores como BITS, Solidaridad, Vega, APIA e IOL.",
  },
  {
    name: "RIQS — Reporte Integral Quincenal de Soya",
    client: "CANIOB",
    period: "Ene – May 2024",
    role: "Desarrollador Front-End",
    stack: ["React", "JavaScript"],
    description:
      "Plataforma para que empresas oleaginosas carguen reportes de producción en Excel, con validación de datos, generación de resúmenes y dashboards históricos, cumpliendo los requisitos del Ministerio.",
  },
  {
    name: "FIDEPUNTOS MR. CLORO",
    client: "Sierra Trading Company SRL / HANSA Ltda.",
    period: "Oct 2025 – presente",
    role: "Desarrollador Front-End y decisión de producto",
    stack: ["React", "PWA"],
    description:
      "El cliente pedía una app nativa; tras evaluar presupuesto y expectativas, se recomendó una PWA en su lugar, con prototipado rápido y migración a React. Incluye registro de usuarios, cálculo automático de puntos por rotación de ventas, ranking y panel administrativo con exportación a Excel/CSV.",
  },
  {
    name: "MAV — Mantenimiento de Áreas Verdes",
    client: "Asociación Accidental Florida y Guapay, Santa Cruz",
    period: "May 2023 – Sep 2024",
    role: "Desarrollador Mobile",
    stack: ["Kotlin", "Android nativo", "QGIS"],
    description:
      "App nativa Android para reportar actividades de corte y poda: fotos, georreferenciación y generación de informes PDF. Responsable del mapeo de áreas verdes y del despliegue en Play Store.",
  },
  {
    name: "Plataforma de gestión de cobros y notificaciones",
    client: "Entidad gremial (Santa Cruz, Bolivia)",
    period: "Feb 2024 – May 2025",
    role: "Desarrollador Front-End y Mobile",
    stack: ["React", "React Native"],
    description:
      "Diseño y desarrollo de una plataforma web y una aplicación multiplataforma de gestión de cobros y notificaciones para una entidad gremial.",
    note: "Proyecto bajo acuerdo de confidencialidad — detalle técnico disponible solo con autorización del cliente.",
  },
];

export const skills = {
  Frontend: ["React", "TypeScript", "JavaScript", "React Native", "HTML", "CSS"],
  "Full-stack": ["Next.js", "PostgreSQL"],
  Mobile: ["Kotlin (Android nativo)", "React Native"],
  Datos: ["Tableau", "SQL", "Análisis y visualización de datos", "QGIS"],
  Otras: ["Git", "Prototipado rápido (Magic Patterns)", "Flujos de desarrollo con agentes de IA"],
} as const;

export const education = [
  {
    title: "Máster en Big Data y Business Analytics",
    institution: "Structuralia / Universidad Isabel I de Castilla",
    period: "2021 – 2022",
  },
  {
    title: "Ingeniería en Telecomunicaciones",
    institution: "Universidad San Francisco Xavier de Chuquisaca",
    period: "2013 – 2019",
  },
  {
    title: "Diplomado en Diseño y Experiencia de Interfaz de Usuario (UX/UI)",
    institution: "Universidad San Francisco Xavier de Chuquisaca",
    period: "Completado en 2025",
  },
];
