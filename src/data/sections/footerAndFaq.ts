import {
  Heart,
  DollarSign,
  Shield,
  ClipboardList,
  Scale,
  FileText,
  type LucideIcon,
} from "lucide-react";

export interface SectionLabels {
  teamTitle: string;
  coordinationLabel: string;
  venezuelaLabel: string;
  principlesTitle: string;
  faqTitle: string;
}

export interface FaqItem {
  question: { es: string; en: string; fr: string };
  answer: { es: string; en: string; fr: string };
}

export interface TeamData {
  coordination: { es: string; en: string; fr: string };
  venezuela: { es: string; en: string; fr: string };
}

export interface PrincipleItem {
  icon: LucideIcon;
  text: { es: string; en: string; fr: string };
}

// 1. Labels estáticas de la sección por idioma
export const sectionLabels: Record<"es" | "en" | "fr", SectionLabels> = {
  es: {
    teamTitle: "Nuestro Equipo",
    coordinationLabel: "Coordinación",
    venezuelaLabel: "Venezuela",
    principlesTitle: "Nuestros Principios",
    faqTitle: "Preguntas Frecuentes",
  },
  en: {
    teamTitle: "Our Team",
    coordinationLabel: "Coordination",
    venezuelaLabel: "Venezuela",
    principlesTitle: "Our Principles",
    faqTitle: "Frequently Asked Questions",
  },
  fr: {
    teamTitle: "Notre Équipe",
    coordinationLabel: "Coordination",
    venezuelaLabel: "Venezuela",
    principlesTitle: "Nos Principes",
    faqTitle: "Foire Aux Questions",
  },
};

// 2. Datos del Equipo
export const teamData: TeamData = {
  coordination: {
    es: "Jesús Adrián Martínez Lozada y Mónica del Carmen Rivas Marquez.",
    en: "Jesús Adrián Martínez Lozada and Mónica del Carmen Rivas Marquez.",
    fr: "Jesús Adrián Martínez Lozada et Mónica del Carmen Rivas Marquez.",
  },
  venezuela: {
    es: "Roberto Flórez, Juan Carlos, Sofía, Mariana, Juan Román, amigos y voluntarios comprometidos con las labores de apoyo y verificación.",
    en: "Roberto Flórez, Juan Carlos, Sofía, Mariana, Juan Román, friends and volunteers committed to support and verification efforts.",
    fr: "Roberto Flórez, Juan Carlos, Sofía, Mariana, Juan Román, amis et bénévoles engagés dans les efforts de soutien et de vérification.",
  },
};

// 3. Principios de trabajo
export const principlesData: PrincipleItem[] = [
  {
    icon: Heart,
    text: {
      es: "Ayuda directa a personas afectadas",
      en: "Direct aid to affected people",
      fr: "Aide directe aux personnes touchées",
    },
  },
  {
    icon: DollarSign,
    text: {
      es: "Transparencia total en el manejo de los fondos",
      en: "Total transparency in fund management",
      fr: "Transparence totale dans la gestion des fonds",
    },
  },
  {
    icon: Shield,
    text: {
      es: "Respeto por la dignidad y privacidad",
      en: "Respect for dignity and privacy",
      fr: "Respect de la dignité et de la vie privée",
    },
  },
  {
    icon: ClipboardList,
    text: {
      es: "Priorización según urgencia y verificación",
      en: "Prioritization based on urgency and verification",
      fr: "Priorisation selon l'urgence et la vérification",
    },
  },
  {
    icon: Scale,
    text: {
      es: "Independencia política y religiosa",
      en: "Political and religious independence",
      fr: "Indépendance politique et religieuse",
    },
  },
  {
    icon: FileText,
    text: {
      es: "Rendición pública de cuentas",
      en: "Public accountability",
      fr: "Reddition publique de comptes",
    },
  },
];

// 4. Destinatarios de Formularios
export const formDestinations = {
  solicitarAyuda: "ayuda@laguaira.help",
  ofrecerAyuda: "voluntarios@laguaira.help",
};

// 5. Preguntas Frecuentes (FAQs)
export const faqsData: FaqItem[] = [
  {
    question: {
      es: "¿Quién administra las donaciones?",
      en: "Who manages the donations?",
      fr: "Qui gère les dons ?",
    },
    answer: {
      es: "La coordinación general está a cargo de Jesús Adrián Martínez Lozada y Mónica. Las compras y la distribución se realizan con el apoyo del equipo y voluntarios en Venezuela.",
      en: "General coordination is managed by Jesús Adrián Martínez Lozada and Mónica. Purchases and distribution are carried out with the support of the team and volunteers in Venezuela.",
      fr: "La coordination générale est assurée par Jesús Adrián Martínez Lozada et Mónica. Les achats et la distribution sont effectués avec le soutien de l'équipe et des bénévoles au Venezuela.",
    },
  },
  {
    question: {
      es: "¿Cómo verifícan los casos?",
      en: "How do you verify the cases?",
      fr: "Comment vérifiez-vous les cas ?",
    },
    answer: {
      es: "Siempre que sea posible, verificamos las solicitudes mediante familiares, vecinos, voluntarios o contactos de confianza.",
      en: "Whenever possible, we verify requests through relatives, neighbors, volunteers, or trusted contacts.",
      fr: "Dans la mesure du possible, nous vérifions les demandes par l'intermédiaire de proches, de voisins, de bénévoles ou de contacts de confiance.",
    },
  },
  {
    question: {
      es: "¿Cómo sé que mi dinero será utilizado correctamente?",
      en: "How do I know my money will be used correctly?",
      fr: "Comment puis-je être sûr que mon argent sera bien utilisé ?",
    },
    answer: {
      es: "Todos los ingresos y gastos se publicarán de forma transparente. También compartiremos comprobantes de compra cuando sea posible.",
      en: "All income and expenses will be published transparently. We will also share purchase receipts whenever possible.",
      fr: "Tous les revenus et dépenses seront publiés de manière transparente. Nous partagerons également les justificatifs d'achat dans la mesure du possible.",
    },
  },
  {
    question: {
      es: "¿Puedo ayudar sin donar dinero?",
      en: "Can I help without donating money?",
      fr: "Puis-je aider sans donner d'argent ?",
    },
    answer: {
      es: "Sí. También necesitamos voluntarios, apoyo logístico, difusión, contactos locales y otras formas de colaboración.",
      en: "Yes. We also need volunteers, logistical support, spreading the word, local contacts, and other forms of collaboration.",
      fr: "Oui. Nous avons également besoin de bénévoles, de soutien logistique, de diffusion, de contacts locaux et d'autres formes de collaboration.",
    },
  },
  {
    question: {
      es: "¿Puedo solicitar ayuda para otra persona?",
      en: "Can I request help for someone else?",
      fr: "Puis-je demander de l'aide pour quelqu'un d'autre ?",
    },
    answer: {
      es: "Sí. Puedes enviar una solicitud en nombre de un familiar, amigo o vecino afectado.",
      en: "Yes. You can submit a request on behalf of an affected relative, friend, or neighbor.",
      fr: "Oui. Vous pouvez envoyer une demande au nom d'un proche, d'un ami ou d'un voisin touché.",
    },
  },
  {
    question: {
      es: "¿Qué ocurre si reciben más solicitudes que recursos?",
      en: "What happens if you receive more requests than resources?",
      fr: "Que se passe-t-il si vous recevez plus de demandes que de ressources ?",
    },
    answer: {
      es: "Daremos prioridad a las situaciones de mayor urgencia, considerando la información disponible y los recursos del momento.",
      en: "We will prioritize the most urgent situations, considering the available information and the current resources.",
      fr: "Nous donnerons la priorité aux situations les plus urgentes, en tenant compte des informations disponibles et des ressources du moment.",
    },
  },
];
