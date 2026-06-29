export interface ImpactTranslations {
  quote: string;
  buttonText: string;
}

export const impactTranslations: Record<
  "es" | "en" | "fr",
  ImpactTranslations
> = {
  es: {
    quote:
      "«El terremoto ha dejado a muchas familias enfrentando pérdidas, incertidumbre y necesidades urgentes. Cada aporte, por pequeño que sea, puede convertirse en agua, alimentos, refugio o herramientas.»",
    buttonText: "Donar ahora",
  },
  en: {
    quote:
      "“The earthquake has left many families facing losses, uncertainty, and urgent needs. Every contribution, no matter how small, can become water, food, shelter, or tools.”",
    buttonText: "Donate now",
  },
  fr: {
    quote:
      "« Le tremblement de terre a laissé de nombreuses familles face aux pertes, à l'incertitude et à des besoins urgents. Chaque contribution, aussi petite soit-elle, peut se transformer en eau, en nourriture, en abri ou en outils. »",
    buttonText: "Faire un don",
  },
};
