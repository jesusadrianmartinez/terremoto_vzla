export interface HeaderTranslations {
  subtitle: string;
  navItems: {
    inicio: string;
    transparencia: string;
    solicitar: string;
    ofrecer: string;
    preguntas: string;
  };
  ctaButton: string;
}

export const headerTranslations: Record<
  "es" | "en" | "fr",
  HeaderTranslations
> = {
  es: {
    subtitle: "Ayuda directa a familias afectadas",
    navItems: {
      inicio: "Inicio",
      transparencia: "Transparencia",
      solicitar: "Solicitar ayuda",
      ofrecer: "Ofrecer ayuda",
      preguntas: "Preguntas",
    },
    ctaButton: "Donar ahora",
  },
  en: {
    subtitle: "Direct aid to affected families",
    navItems: {
      inicio: "Home",
      transparencia: "Transparency",
      solicitar: "Request help",
      ofrecer: "Offer help",
      preguntas: "Questions",
    },
    ctaButton: "Donate now",
  },
  fr: {
    subtitle: "Aide directe aux familles touchées",
    navItems: {
      inicio: "Accueil",
      transparencia: "Transparence",
      solicitar: "Demander de l'aide",
      ofrecer: "Offrir de l'aide",
      preguntas: "Questions",
    },
    ctaButton: "Faire un don",
  },
};
