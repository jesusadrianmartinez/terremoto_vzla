export interface FooterTranslations {
  ctaHeading: string;
  ctaText: string;
  ctaButton: string;
  quickLinksTitle: string;
  links: {
    inicio: string;
    transparencia: string;
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
      "El terremoto ha dejado a muchas familias enfrentando pérdidas, incertidumbre y necesidades urgentes.",
    ctaText:
      "Cada aporte puede convertirse en agua, alimentos, refugio, transporte o herramientas para quienes hoy siguen luchando por salir adelante.",
    ctaButton: "Donar ahora",
    quickLinksTitle: "Enlaces rápidos",
    links: {
      inicio: "Inicio",
      transparencia: "Transparencia",
      solicitar: "Solicitar ayuda",
      ofrecer: "Ofrecer ayuda",
    },
    contactTitle: "Contacto",
    closingCredits: "La Guaira somos todos.",
  },
  en: {
    ctaHeading:
      "The earthquake has left many families facing losses, uncertainty, and urgent needs.",
    ctaText:
      "Every contribution can turn into water, food, shelter, transportation, or tools for those who are still fighting to move forward today.",
    ctaButton: "Donate now",
    quickLinksTitle: "Quick links",
    links: {
      inicio: "Home",
      transparencia: "Transparency",
      solicitar: "Request help",
      ofrecer: "Offer help",
    },
    contactTitle: "Contact",
    closingCredits: "La Guaira is all of us.",
  },
  fr: {
    ctaHeading:
      "Le tremblement de terre a laissé de nombreuses familles face à des pertes, de l'incertitude et des besoins urgents.",
    ctaText:
      "Chaque contribution puede se transformer en eau, nourriture, abri, transport ou outils pour ceux qui luttent encore pour aller de l'avant aujourd'hui.",
    ctaButton: "Faire un don",
    quickLinksTitle: "Liens rapides",
    links: {
      inicio: "Accueil",
      transparencia: "Transparence",
      solicitar: "Demander de l'aide",
      ofrecer: "Offrir de l'aide",
    },
    contactTitle: "Contact",
    closingCredits: "La Guaira c'est nous tous.",
  },
};
