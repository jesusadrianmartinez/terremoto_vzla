export interface FooterTranslations {
  ctaHeading: string;
  ctaText: string;
  ctaButton: string;
  logotext: string;
  madeby: string;
  quickLinksTitle: string;
  links: {
    inicio: string;
    transparencia: string;
    avance: string;
    solicitar: string;
    ofrecer: string;
  };
  contactTitle: string;
  closingCredits: string;
}

export const footerTranslations: Record<
  "es" | "en" | "fr",
  FooterTranslations
> = {
  es: {
    ctaHeading:
      "El terremoto dejó a muchas familias enfrentando pérdidas, incertidumbre y decisiones urgentes.",
    ctaText:
      "Cada aporte puede ayudar con alimentos, medicinas, transporte, gastos funerarios, nuevos alquileres y cosas básicas para habitar un nuevo espacio.",
    ctaButton: "Ayudar ahora",
    logotext:
      "Una familia organizando ayuda para nuestras familias, vecinos y personas afectadas en La Guaira.",
    madeby: "Hecho por Neurona Digital IA",
    quickLinksTitle: "Enlaces rápidos",
    links: {
      inicio: "Inicio",
      transparencia: "Nuestra historia",
      avance: "Avances de la ayuda",
      solicitar: "Solicitar ayuda",
      ofrecer: "Ofrecer ayuda",
    },
    contactTitle: "Contacto",
    closingCredits: "La Guaira somos todos.",
  },
  en: {
    ctaHeading:
      "The earthquake has left many families facing loss, uncertainty, and urgent decisions.",
    ctaText:
      "Every contribution can help provide food, medicine, transportation, funeral expenses, new rentals, and basic essentials to settle into a new space.",
    ctaButton: "Help now",
    logotext:
      "A family organizing relief efforts for our own families, neighbors, and affected individuals in La Guaira.",
    madeby: "Made by Neurona Digital IA",
    quickLinksTitle: "Quick links",
    links: {
      inicio: "Home",
      transparencia: "Our story",
      avance: "Aid updates",
      solicitar: "Request help",
      ofrecer: "Offer help",
    },
    contactTitle: "Contact",
    closingCredits: "La Guaira is all of us.",
  },
  fr: {
    ctaHeading:
      "Le séisme a laissé de nombreuses familles face aux pertes, à l'incertitude et à des décisions urgentes.",
    ctaText:
      "Chaque don puede aider à fournir de la nourriture, des médicaments, du transport, à couvrir des frais funéraires, de nouveaux loyers et des biens essentiels pour s'installer dans un nouvel espace.",
    ctaButton: "Aider maintenant",
    logotext:
      "Une famille qui organise les secours pour ses propres proches, ses voisins et les personnes touchées à La Guaira.",
    madeby: "Propulsé par Neurona Digital IA",
    quickLinksTitle: "Liens rapides",
    links: {
      inicio: "Accueil",
      transparencia: "Notre histoire",
      avance: "Suivi de l'aide",
      solicitar: "Demander de l'aide",
      ofrecer: "Offrir de l'aide",
    },
    contactTitle: "Contact",
    closingCredits: "La Guaira, c'est nous tous.",
  },
};
