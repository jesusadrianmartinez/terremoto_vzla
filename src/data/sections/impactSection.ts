export interface ImpactTranslations {
  quote: string;
  buttonText: string;
}

export const impactTranslations: Record<
  "es" | "en" | "fr",
  ImpactTranslations
> = {
  es: {
    quote: "AYUDA PARA VOLVER A EMPEZAR",
    buttonText: "Ayudar ahora",
  },
  en: {
    quote: "SUPPORT TO START OVER",
    buttonText: "Help now",
  },
  fr: {
    quote: "DE L'AIDE POUR RECOMMENCER",
    buttonText: "Aider maintenant",
  },
};
