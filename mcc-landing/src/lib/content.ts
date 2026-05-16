export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@multichannelconsult.de";

export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || "";

export const nav = [
  { label: "AI Transformation", href: "#ai-transformation" },
  { label: "Leistungen", href: "#services" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Vorgehen", href: "#approach" },
  { label: "Über MCC", href: "#about" },
  { label: "Kontakt", href: "#contact" },
];

export const hero = {
  eyebrow: "AI Transformation · Workflow Automation · Multichannel Strategy",
  headline:
    "AI Transformation, die Strategie, Prozesse und messbaren Geschäftsnutzen verbindet.",
  subheadline:
    "MultiChannelConsult unterstützt Unternehmen dabei, relevante KI- und Automatisierungs-Use-Cases zu identifizieren, zu priorisieren und praktisch umzusetzen, insbesondere in Marketing, Vertrieb, CRM, Customer Experience und operativen Workflows.",
  bullets: [
    "Von der Use-Case-Analyse bis zur Umsetzung",
    "Für Marketing, Sales, CRM und Operations",
    "Strategisch stark, operativ hands-on",
  ],
  primaryCTA: "AI Transformation Call buchen",
  secondaryCTA: "Leistungen ansehen",
};

export const challenge = {
  headline: "KI ist keine reine Tool-Frage. KI ist eine Transformationsaufgabe.",
  body: "Viele Unternehmen testen KI, aber der konkrete Nutzen bleibt oft unklar. Der Grund liegt selten nur in der Technologie. Entscheidend sind klare Use Cases, passende Prozesse, vernetzte Daten, Governance, Team-Akzeptanz und eine Umsetzung, die zum Geschäftsmodell passt.",
  cards: [
    {
      title: "Unklare Use Cases",
      icon: "🎯",
      description: "Potenziale sind unklar, Prioritäten fehlen",
    },
    {
      title: "Manuelle Workflows",
      icon: "⚙️",
      description: "Zeitaufwändige Prozesse ohne Automatisierung",
    },
    {
      title: "Getrennte Tools und Daten",
      icon: "🔗",
      description: "Datensilos verhindern durchgängige Prozesse",
    },
    {
      title: "Fehlende Governance",
      icon: "🛡️",
      description: "Kein Rahmen für sicheren KI-Einsatz",
    },
    {
      title: "Geringe Adoption",
      icon: "👥",
      description: "Teams nutzen neue Tools nicht konsequent",
    },
    {
      title: "Kein KPI-Bezug",
      icon: "📊",
      description: "Nutzen bleibt unmessbar und intransparent",
    },
  ],
};

export const services = {
  headline: "Leistungen für praktische AI Transformation",
  intro:
    "MultiChannelConsult verbindet Strategie, Prozessverständnis und Hands-on Umsetzung. Das Ziel: KI- und Automatisierungslösungen, die im operativen Alltag funktionieren und messbaren Nutzen schaffen.",
  items: [
    {
      title: "AI Readiness & Opportunity Assessment",
      description:
        "Analyse von Prozessen, Tools, Datenflüssen und aktuellen Arbeitsweisen. Daraus entsteht eine priorisierte Übersicht relevanter KI- und Automatisierungspotenziale.",
      deliverables: [
        "Current-State Analyse",
        "AI Opportunity Map",
        "Priorisierte Use Cases",
        "Quick-Win Empfehlungen",
      ],
    },
    {
      title: "AI Strategie & Roadmap",
      description:
        "Entwicklung einer realistischen Roadmap, die Business-Ziele, Machbarkeit, Governance, Ressourcen und messbare Ergebnisse verbindet.",
      deliverables: [
        "AI Transformation Roadmap",
        "Governance- und KPI-Framework",
        "Umsetzungsprioritäten",
        "Ressourcenplanung",
      ],
    },
    {
      title: "Workflow Automation & AI Implementation",
      description:
        "Konzeption und Umsetzung konkreter Workflows, Prototypen und MVPs, zum Beispiel mit Automatisierungstools, APIs, CRM-Systemen oder KI-gestützten Assistants.",
      deliverables: [
        "Workflow Design",
        "MVP-Implementierung",
        "Tool-Integration",
        "Testing und Optimierung",
      ],
    },
    {
      title: "Marketing, Sales & CRM Transformation",
      description:
        "Optimierung kommerzieller Prozesse entlang der Customer Journey, von Leadgenerierung über Kampagnensteuerung bis Reporting und Kundenbindung.",
      deliverables: [
        "Customer Journey Mapping",
        "CRM- und Kampagnenprozesse",
        "Lead Nurturing",
        "Reporting und Performance Tracking",
      ],
    },
    {
      title: "Team Enablement & Change Management",
      description:
        "Befähigung von Führungskräften und Teams, KI sinnvoll, sicher und produktiv in die tägliche Arbeit zu integrieren.",
      deliverables: [
        "AI Workshops",
        "Rollenbasiertes Enablement",
        "Prozessdokumentation",
        "Adoption Playbooks",
      ],
    },
  ],
};

export const useCases = {
  headline: "Typische Use Cases",
  intro:
    "Der Fokus liegt auf konkreten Anwendungsfällen, die Effizienz, Qualität, Geschwindigkeit oder kommerzielle Wirkung verbessern.",
  items: [
    "KI-gestützte Content- und Kampagnenprozesse",
    "Automatisierte Lead-Qualifizierung und Routing",
    "CRM-Segmentierung und Personalisierung",
    "Reporting- und KPI-Automatisierung",
    "Interne Knowledge Assistants",
    "Workflow-Automatisierung mit n8n, Make, Zapier oder APIs",
    "Customer-Service-Unterstützung durch KI",
    "Produktdaten- und Content-Anreicherung",
    "Multichannel-Kampagnenplanung und Tracking",
    "AI Enablement für Teams und Führungskräfte",
  ],
};

export const approach = {
  headline: "Von der Idee zur umsetzbaren Lösung",
  intro:
    "AI Transformation funktioniert, wenn Strategie, Prozesse, Technologie und Adoption zusammen gedacht werden.",
  steps: [
    {
      number: "01",
      title: "Discover",
      description: "Ziele, Prozesse, Tools, Daten und Engpässe verstehen.",
    },
    {
      number: "02",
      title: "Prioritize",
      description:
        "Use Cases nach Nutzen, Machbarkeit und Risiko bewerten.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Workflows, Verantwortlichkeiten, Datenflüsse und Zielprozesse definieren.",
    },
    {
      number: "04",
      title: "Implement",
      description:
        "Prototypen, Automationen und MVPs praktisch aufsetzen.",
    },
    {
      number: "05",
      title: "Enable",
      description:
        "Teams befähigen, Prozesse dokumentieren und Adoption sichern.",
    },
    {
      number: "06",
      title: "Optimize",
      description:
        "Ergebnisse messen, Workflows verbessern und erfolgreiche Ansätze skalieren.",
    },
  ],
};

export const multichannel = {
  headline:
    "AI Transformation wirkt am stärksten, wenn Kanäle, Daten und Prozesse verbunden sind.",
  body: "MultiChannelConsult baut auf einer Multichannel-Perspektive auf: klare Governance, integrierte digitale Kanäle und kontinuierliche Transformation. So entstehen konsistente Kundenerlebnisse, effiziente Abläufe und bessere Entscheidungsgrundlagen.",
  cards: [
    {
      title: "Governance & Organisation",
      description:
        "Klare Verantwortlichkeiten, Prozesse und Leitplanken für den KI-Einsatz.",
      icon: "🏛️",
    },
    {
      title: "Digitale Kanäle & Tool-Integration",
      description:
        "Verknüpfte Systeme für konsistente Customer Experience und effiziente Datennutzung.",
      icon: "🔌",
    },
    {
      title: "Transformation & AI Workflows",
      description:
        "Kontinuierliche Optimierung von Prozessen mit KI und Automatisierung.",
      icon: "🔄",
    },
  ],
};

export const about = {
  headline: "Strategische Erfahrung und Hands-on Umsetzung aus einer Hand.",
  body: "MultiChannelConsult verbindet langjährige Marketing-, E-Commerce-, Multichannel- und Transformationserfahrung mit praktischer KI- und Automatisierungsumsetzung. Der Fokus liegt auf Lösungen, die nicht nur strategisch sinnvoll sind, sondern im operativen Alltag funktionieren.",
  body2:
    "Geführt von Frank Euler unterstützt MCC Unternehmen dabei, neue digitale Möglichkeiten pragmatisch einzuordnen, relevante Use Cases zu entwickeln und diese mit klarer Priorisierung, geeigneten Tools und wirksamer Team-Adoption umzusetzen.",
  bullets: [
    "Senior Marketing- und Digital-Erfahrung",
    "Multichannel-, E-Commerce- und CRM-Know-how",
    "AI-, Automation- und Workflow-Implementierung",
    "Internationale und cross-funktionale Projekterfahrung",
    "Hands-on Mentalität mit Fokus auf messbare Ergebnisse",
  ],
};

export const whyMCC = {
  headline: "Warum MultiChannelConsult?",
  cards: [
    {
      title: "Strategie plus Umsetzung",
      description: "Von der AI Roadmap bis zum funktionierenden Workflow.",
      icon: "🗺️",
    },
    {
      title: "Business-first AI",
      description:
        "Fokus auf Effizienz, Wachstum, Customer Experience und messbaren Nutzen.",
      icon: "📈",
    },
    {
      title: "Multichannel-Kompetenz",
      description:
        "Verständnis für Marketing, Sales, CRM, E-Commerce und digitale Touchpoints.",
      icon: "🌐",
    },
    {
      title: "Hands-on Execution",
      description:
        "Praktisches Prototyping, Tool Setup, Prozessautomatisierung und Optimierung.",
      icon: "🛠️",
    },
    {
      title: "Flexibles Expertennetzwerk",
      description:
        "Zugang zu spezialisierten Freelancern für technische, kreative oder plattformspezifische Aufgaben.",
      icon: "🤝",
    },
  ],
};

export const finalCTA = {
  headline: "Starten Sie Ihre AI Transformation mit einem klaren ersten Schritt.",
  body: "In einem kompakten Erstgespräch identifizieren wir mögliche Use Cases, Quick Wins und sinnvolle nächste Schritte für Ihr Unternehmen.",
  primaryCTA: "AI Transformation Call buchen",
  secondaryCTA: "Projektanfrage senden",
};

export const contact = {
  headline: "Lassen Sie uns über Ihre AI Transformation sprechen.",
  body: "Beschreiben Sie kurz Ihre aktuelle Herausforderung. MultiChannelConsult meldet sich mit einer ersten Einschätzung und möglichen nächsten Schritten.",
  topics: [
    "AI Transformation",
    "Workflow Automation",
    "Marketing / CRM / Sales Transformation",
    "Multichannel Strategie",
    "Team Enablement",
    "Sonstiges",
  ],
  consentText:
    "Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet werden.",
};

export const footer = {
  description:
    "AI Transformation, Workflow Automation und Multichannel Strategie für Unternehmen, die digitale Potenziale praktisch umsetzen wollen.",
  copyright: "© 2026 MultiChannelConsult. Alle Rechte vorbehalten.",
};
