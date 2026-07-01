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
  parragraph: { es: string; en: string; fr: string };
}

export interface PrincipleItem {
  icon: LucideIcon;
  text: { es: string; en: string; fr: string };
}

// 1. Labels estáticas de la sección por idioma
export const sectionLabels: Record<"es" | "en" | "fr", SectionLabels> = {
  es: {
    teamTitle: "NUESTRO EQUIPO",
    coordinationLabel: "Coordinación",
    venezuelaLabel: "En La Guaira",
    principlesTitle: "LO QUE NOS GUÍA",
    faqTitle: "PREGUNTAS FRECUENTES",
  },
  en: {
    teamTitle: "OUR TEAM",
    coordinationLabel: "Coordination",
    venezuelaLabel: "In La Guaira",
    principlesTitle: "OUR GUIDING PRINCIPLES",
    faqTitle: "FREQUENTLY ASKED QUESTIONS",
  },
  fr: {
    teamTitle: "NOTRE ÉQUIPE",
    coordinationLabel: "Coordination",
    venezuelaLabel: "À La Guaira",
    principlesTitle: "CE QUI NOUS GUIDE",
    faqTitle: "FOIRE AUX QUESTIONS",
  },
};

// 2. Datos del Equipo
export const teamData: TeamData = {
  coordination: {
    es: "Jesús Adrián Martínez Lozada y Mónica del Carmen Rivas Márquez.",
    en: "Jesús Adrián Martínez Lozada and Mónica del Carmen Rivas Márquez.",
    fr: "Jesús Adrián Martínez Lozada et Mónica del Carmen Rivas Márquez.",
  },
  venezuela: {
    es: "Roberto Flórez, Juan Carlos, Sofía, Mariana, Juan Román, familiares, amigos y voluntarios que nos ayudan a conocer las necesidades reales y coordinar apoyos.",
    en: "Roberto Flórez, Juan Carlos, Sofía, Mariana, Juan Román, family members, friends, and volunteers who help us understand the real needs and coordinate relief efforts.",
    fr: "Roberto Flórez, Juan Carlos, Sofía, Mariana, Juan Román, des proches, des amis et des bénévoles qui nous aident à cibler les besoins réels et à coordonner les secours.",
  },
  parragraph: {
    es: "Esta ayuda nace desde nuestras familias y se organiza con personas de confianza dentro y fuera de Venezuela.",
    en: "This initiative comes straight from our families and is organized with trusted individuals both inside and outside of Venezuela.",
    fr: "Cette initiative est née au sein de nos familles et est organisée avec des personnes de confiance, tant au Venezuela qu'à l'étranger.",
  },
};

// 3. Principios de trabajo
export const principlesData: PrincipleItem[] = [
  {
    icon: Heart,
    text: {
      es: "Ayuda directa a familias afectadas",
      en: "Direct relief for affected families",
      fr: "Aide directe aux familles touchées",
    },
  },
  {
    icon: DollarSign,
    text: {
      es: "Apoyo para volver a empezar",
      en: "Support to start over",
      fr: "Soutien pour tout recommencer",
    },
  },
  {
    icon: Shield,
    text: {
      es: "Respeto por la dignidad y privacidad de cada familia",
      en: "Respect for the dignity and privacy of every family",
      fr: "Respect de la dignité et de la vie privée de chaque famille",
    },
  },
  {
    icon: ClipboardList,
    text: {
      es: "Coordinación con familiares, vecinos y personas de confianza",
      en: "Coordination with family members, neighbors, and trusted individuals",
      fr: "Coordination avec les proches, les voisins et des personnes de confiance",
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
      es: "Actualizaciones responsables, sin exponer información sensible",
      en: "Responsible updates without exposing sensitive information",
      fr: "Mises à jour responsables, sans exposer de renseignements sensibles",
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
      es: "¿Quién organiza esta ayuda?",
      en: "Who is organizing this relief initiative?",
      fr: "Qui organise cette initiative d'entraide?",
    },
    answer: {
      es: "La ayuda está siendo organizada por Jesús Adrián Martínez Lozada y Mónica del Carmen Rivas Márquez, junto con familiares, amigos y personas de confianza en La Guaira.",
      en: "The initiative is being organized by Jesús Adrián Martínez Lozada and Mónica del Carmen Rivas Márquez, alongside family members, friends, and trusted individuals in La Guaira.",
      fr: "L'aide est organisée par Jesús Adrián Martínez Lozada et Mónica del Carmen Rivas Márquez, de concert avec des proches, des amis et des personnes de confiance à La Guaira.",
    },
  },
  {
    question: {
      es: "¿Cómo deciden a quién ayudar?",
      en: "How do you decide whom to help?",
      fr: "Comment décidez-vous de qui aider?",
    },
    answer: {
      es: "Vamos escuchando las necesidades de nuestras familias, vecinos y otras personas afectadas. Daremos prioridad a situaciones urgentes relacionadas con pérdidas, salud, alimentos, transporte, gastos funerarios, nuevos alquileres y cosas básicas para habitar.",
      en: "We actively listen to the needs of our families, neighbors, and other affected individuals. Priority will be given to urgent situations involving loss of life, health, food, transportation, funeral expenses, new rentals, and basic essentials to settle in.",
      fr: "Nous sommes à l'écoute des besoins de nos familles, de nos voisins et des autres personnes touchées. La priorité sera accordée aux situations urgentes liées aux pertes humaines, à la santé, à l'alimentation, au transport, aux frais funéraires, aux nouveaux loyers et aux biens essentiels pour s'installer.",
    },
  },
  {
    question: {
      es: "¿Cómo puedo saber cómo avanza la ayuda?",
      en: "How can I track the progress of the aid?",
      fr: "Comment puis-je suivre l'évolution de l'aide?",
    },
    answer: {
      es: "Iremos compartiendo avances en esta página a medida que recibamos aportes y podamos realizar apoyos concretos. Siempre cuidaremos la privacidad y seguridad de las familias afectadas.",
      en: "We will share updates on this page as we receive contributions and are able to provide concrete support. We will always protect the privacy and safety of the affected families.",
      fr: "Nous partagerons les suivis sur ce site au fur et à mesure que nous recevrons des dons et que nous pourrons apporter un soutien concret. Nous veillerons en tout temps à protéger la vie privée et la sécurité des familles touchées.",
    },
  },
  {
    question: {
      es: "¿Puedo ayudar sin donar dinero?",
      en: "Can I help without donating money?",
      fr: "Puis-je aider sans faire de don en argent?",
    },
    answer: {
      es: "Sí. También necesitamos difusión, contactos locales, apoyo logístico, información confiable, transporte, orientación y otras formas de colaboración.",
      en: "Yes. We also need help with spreading the word, local contacts, logistical support, reliable information, transportation, guidance, and other forms of collaboration.",
      fr: "Oui. Nous avons aussi besoin de visibilité, de contacts locaux, de soutien logistique, d'informations fiables, de transport, d'orientation y d'autres formes de collaboration.",
    },
  },
  {
    question: {
      es: "¿Puedo solicitar ayuda para otra persona?",
      en: "Can I request help on behalf of someone else?",
      fr: "Puis-je demander de l'aide pour une autre personne?",
    },
    answer: {
      es: "Sí. Puedes enviar una solicitud en nombre de un familiar, amigo, vecino o persona afectada. Revisaremos cada caso con cuidado y según nuestras posibilidades.",
      en: "Yes. You can submit a request on behalf of a family member, friend, neighbor, or anyone affected. We will carefully review each case based on our available resources.",
      fr: "Oui. Vous pouvez envoyer une demande au nom d'un proche, d'un ami, d'un voisin ou d'une personne touchée. Nous examinerons chaque situation avec soin, selon nos capacités.",
    },
  },
];
