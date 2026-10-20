export type Locale = "es" | "en";

export type NavItem = { label: string; href: string };

export const nav: Record<Locale, NavItem[]> = {
  es: [
    { label: "Proyectos", href: "#proyectos" },
    { label: "Skills", href: "#skills" },
    { label: "Educación", href: "#educacion" },
    { label: "Contacto", href: "#contacto" },
  ],
  en: [
    { label: "Projects", href: "#proyectos" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#educacion" },
    { label: "Contact", href: "#contacto" },
  ],
};

export const hero = {
  es: {
    location: "Santa Cruz, Bolivia",
    role: "Ingeniero en Telecomunicaciones · Desarrollador Full-Stack Freelance",
    pitch:
      "Desarrollador full-stack freelance con experiencia en proyectos de producción para clientes institucionales en Bolivia (web, mobile nativo y multiplataforma). Eje fuerte en React, con base sólida en análisis y visualización de datos. Lidero proyectos de punta a punta: relevamiento de requerimientos, diseño, desarrollo, despliegue y coordinación directa con clientes.",
    viewProjects: "Ver proyectos",
    contact: "Contactar",
  },
  en: {
    location: "Santa Cruz, Bolivia",
    role: "Telecommunications Engineer · Freelance Full-Stack Developer",
    pitch:
      "Freelance full-stack developer with experience shipping production projects for institutional clients in Bolivia (web, native mobile, and cross-platform apps). Strong focus on React, with a solid background in data analysis and visualization. I lead projects end-to-end: requirements gathering, design, development, deployment, and direct client coordination.",
    viewProjects: "View projects",
    contact: "Contact me",
  },
};

export type ProjectContent = {
  name: string;
  client: string;
  period: string;
  role: string;
  stack: string[];
  description: string;
  link?: { label: string; href: string };
  note?: string;
};

export const projectsSection = {
  es: { heading: "Proyectos" },
  en: { heading: "Projects" },
};

export const projects: Record<Locale, ProjectContent[]> = {
  es: [
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
      role: "Supervisor Técnico",
      stack: ["React"],
      description:
        "Supervisión técnica de una plataforma de trazabilidad para la cadena de soya boliviana, con participación en decisiones de arquitectura frontend y en la mesa técnica junto a actores de la cadena productiva como CANIOB, Fundación Solidaridad y ANAPO.",
    },
    {
      name: "RIQS — Reporte Integral Quincenal de Soya",
      client: "CANIOB",
      period: "Ene – May 2024",
      role: "Desarrollador Front-End",
      stack: ["React", "JavaScript"],
      description:
        "Plataforma para que empresas oleaginosas carguen reportes de producción en Excel, con validación de datos, generación de resúmenes y dashboards históricos, cumpliendo los requisitos del Viceministerio de Desarrollo Productivo y Economía Plural (MDPyEP).",
    },
    {
      name: "FIDEPUNTOS MR. CLORO",
      client: "Sierra Trading Company SRL",
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
      client: "Asociación de profesionales (Santa Cruz, Bolivia)",
      period: "Feb 2024 – May 2025",
      role: "Desarrollador Front-End y Mobile",
      stack: ["React", "React Native"],
      description:
        "Diseño y desarrollo de una plataforma web y una aplicación multiplataforma de gestión de cobros y notificaciones para una asociación de profesionales.",
      note: "Proyecto bajo acuerdo de confidencialidad — detalle técnico disponible solo con autorización del cliente.",
    },
  ],
  en: [
    {
      name: "CANIOB institutional website",
      client: "CANIOB — Bolivian National Chamber of Vegetable Oil Industries",
      period: "Sep – Oct 2026",
      role: "Full-stack developer (solo project)",
      stack: ["Next.js", "PostgreSQL"],
      description:
        "Complete end-to-end full-stack development of the institutional website. First solo project with AI agents actively built into the workflow.",
      link: { label: "View live site", href: "https://caniob.org.bo/" },
    },
    {
      name: "Soy traceability platform",
      client: "CANIOB — Sustainable Soy Roundtable",
      period: "Oct 2025 – present",
      role: "Technical Supervisor",
      stack: ["React"],
      description:
        "Technical supervision of a traceability platform for the Bolivian soy supply chain, contributing to frontend architecture decisions and actively participating in the technical roundtable alongside supply-chain stakeholders such as CANIOB, Fundación Solidaridad, and ANAPO.",
    },
    {
      name: "RIQS — Biweekly Integral Soy Report",
      client: "CANIOB",
      period: "Jan – May 2024",
      role: "Front-End Developer",
      stack: ["React", "JavaScript"],
      description:
        "Platform for vegetable-oil companies to upload production reports in Excel, with data validation, summary generation, and historical dashboards, meeting the requirements of Bolivia's Vice-Ministry of Productive Development and Plural Economy (MDPyEP).",
    },
    {
      name: "FIDEPUNTOS MR. CLORO",
      client: "Sierra Trading Company SRL",
      period: "Oct 2025 – present",
      role: "Front-End Developer & product decision-making",
      stack: ["React", "PWA"],
      description:
        "The client originally wanted a native app; after assessing budget and expectations, I recommended a PWA instead, with rapid prototyping and a migration to React. Includes user registration, automatic point calculation based on sales rotation, a ranking system, and an admin panel with Excel/CSV export.",
    },
    {
      name: "MAV — Green Area Maintenance",
      client: "Asociación Accidental Florida y Guapay, Santa Cruz",
      period: "May 2023 – Sep 2024",
      role: "Mobile Developer",
      stack: ["Kotlin", "Native Android", "QGIS"],
      description:
        "Native Android app for reporting pruning and mowing activities: photos, geolocation, and PDF report generation. Responsible for mapping green areas and publishing the app to the Play Store.",
    },
    {
      name: "Dues collection and notifications platform",
      client: "Professional association (Santa Cruz, Bolivia)",
      period: "Feb 2024 – May 2025",
      role: "Front-End and Mobile Developer",
      stack: ["React", "React Native"],
      description:
        "Design and development of a web platform and a cross-platform app for dues collection and member notifications for a professional association.",
      note: "Under an NDA — further technical detail available only with the client's authorization.",
    },
  ],
};

export const skills: Record<Locale, Record<string, string[]>> = {
  es: {
    Frontend: ["React", "TypeScript", "JavaScript", "React Native", "Tailwind CSS", "HTML", "CSS"],
    "Full-stack": ["Next.js", "PostgreSQL"],
    Mobile: ["Kotlin (Android nativo)", "React Native"],
    Datos: ["Tableau", "SQL", "SQLite", "Excel", "Python", "Web scraping", "Análisis y visualización de datos", "QGIS"],
    Otras: ["Git", "Linux (Mint)", "Prototipado rápido (Magic Patterns)", "Flujos de desarrollo con agentes de IA"],
  },
  en: {
    Frontend: ["React", "TypeScript", "JavaScript", "React Native", "Tailwind CSS", "HTML", "CSS"],
    "Full-stack": ["Next.js", "PostgreSQL"],
    Mobile: ["Kotlin (Native Android)", "React Native"],
    Data: ["Tableau", "SQL", "SQLite", "Excel", "Python", "Web scraping", "Data analysis and visualization", "QGIS"],
    Other: ["Git", "Linux (Mint)", "Rapid prototyping (Magic Patterns)", "AI-agent-assisted development workflows"],
  },
};

export const skillsSection = {
  es: { heading: "Skills" },
  en: { heading: "Skills" },
};

export type EducationItem = {
  title: string;
  institution: string;
  period: string;
  link?: { label: string; href: string };
};

export const education: Record<Locale, EducationItem[]> = {
  es: [
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
    {
      title: "Certificado de inglés EF SET — B2 Upper Intermediate (58/100)",
      institution: "EF Education First",
      period: "Oct 2026 — Reading C1, Listening C1, Speaking B2, Writing B1",
      link: { label: "Ver certificado", href: "https://cert.efset.org/en/CGhmo4" },
    },
  ],
  en: [
    {
      title: "Master's Degree in Big Data and Business Analytics",
      institution: "Structuralia / Universidad Isabel I de Castilla",
      period: "2021 – 2022",
    },
    {
      title: "Telecommunications Engineering Degree",
      institution: "Universidad San Francisco Xavier de Chuquisaca",
      period: "2013 – 2019",
    },
    {
      title: "Graduate Diploma in UX/UI Design",
      institution: "Universidad San Francisco Xavier de Chuquisaca",
      period: "Completed in 2025",
    },
    {
      title: "EF SET English Certificate — B2 Upper Intermediate (58/100)",
      institution: "EF Education First",
      period: "Oct 2026 — Reading C1, Listening C1, Speaking B2, Writing B1",
      link: { label: "View certificate", href: "https://cert.efset.org/en/CGhmo4" },
    },
  ],
};

export const educationSection = {
  es: { heading: "Educación" },
  en: { heading: "Education" },
};

export const contactSection = {
  es: {
    heading: "Contacto",
    body: "¿Tenés un proyecto o una oportunidad remota, de consultoría o freelance? Escribime.",
  },
  en: {
    heading: "Contact",
    body: "Have a project or a remote, consulting, or freelance opportunity? Get in touch.",
  },
};

export const languageToggle = {
  es: { label: "EN", title: "Switch to English" },
  en: { label: "ES", title: "Cambiar a español" },
};
