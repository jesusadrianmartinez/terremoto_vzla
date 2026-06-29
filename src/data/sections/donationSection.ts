export interface DonationLabels {
  creditCardTitle: string;
  creditCardSubtitle: string;
  directLink: string;
  cryptoTitle: string;
  cryptoSubtitle: string;
  formTitle: string;
  formSubtitle: string;
  formButton: string;
}

export const donationTranslations: Record<"es" | "en" | "fr", DonationLabels> =
  {
    es: {
      creditCardTitle: "Tarjeta de Crédito",
      creditCardSubtitle: "A través de Stripe",
      directLink: "Enlace directo →",
      cryptoTitle: "Criptomonedas",
      cryptoSubtitle: "Binance Pay / UID",
      formTitle: "Ofrecer Apoyo",
      formSubtitle: "Voluntarios y logística.",
      formButton: "Ofrecer ayuda",
    },
    en: {
      creditCardTitle: "Credit Card",
      creditCardSubtitle: "Via Stripe",
      directLink: "Direct link →",
      cryptoTitle: "Cryptocurrencies",
      cryptoSubtitle: "Binance Pay / UID",
      formTitle: "Offer Support",
      formSubtitle: "Volunteers and logistics.",
      formButton: "Offer support",
    },
    fr: {
      creditCardTitle: "Carte de Crédit",
      creditCardSubtitle: "Via Stripe",
      directLink: "Lien direct →",
      cryptoTitle: "Cryptomonnaies",
      cryptoSubtitle: "Binance Pay / UID",
      formTitle: "Offrir du Soutien",
      formSubtitle: "Bénévoles et logistique.",
      formButton: "Offrir de l'aide",
    },
  };
