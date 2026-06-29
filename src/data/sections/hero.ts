export interface HeroTranslations {
  badge: string;
  titleHelp: string;
  subheading: string;
  description: string;
  btnDonate: string;
  imgAlt: string;
  cardTitle: string;
  cardDescription: string;
}

export const heroTranslations: Record<"es" | "en" | "fr", HeroTranslations> = {
  es: {
    badge: "Emergencia Humanitaria",
    titleHelp: "HELP",
    subheading: "Ayuda directa. Transparencia total. Esperanza para La Guaira.",
    description:
      "Una iniciativa ciudadana para brindar ayuda inmediata a las familias afectadas por el terremoto del 24 de junio de 2026 en Venezuela.",
    btnDonate: "Donar ahora",
    imgAlt: "La Guaira Help - Vista de la región afectada",
    cardTitle: "Solidaridad convertida en acción.",
    cardDescription:
      "Apoyo directo, comprobantes públicos y actualización constante en tiempo real para todas las familias afectadas de la región.",
  },
  en: {
    badge: "Humanitarian Emergency",
    titleHelp: "HELP",
    subheading: "Direct aid. Full transparency. Hope for La Guaira.",
    description:
      "A citizen initiative providing immediate assistance to families affected by the June 24, 2026 earthquake in Venezuela.",
    btnDonate: "Donate now",
    imgAlt: "La Guaira Help - View of the affected region",
    cardTitle: "Solidarity turned into action.",
    cardDescription:
      "Direct support, public receipts, and constant updates in real-time for all affected families in the region.",
  },
  fr: {
    badge: "Urgence Humanitaire",
    titleHelp: "HELP",
    subheading: "Aide directe. Transparence totale. Espoir pour La Guaira.",
    description:
      "Une initiative citoyenne visant à fournir une aide immédiate aux familles touchées par le tremblement de terre du 24 juin 2026 au Venezuela.",
    btnDonate: "Faire un don",
    imgAlt: "La Guaira Help - Vue de la région touchée",
    cardTitle: "La solidarité transformée en action.",
    cardDescription:
      "Soutien direct, justificatifs publics et mises à jour constantes en temps réel pour toutes les familles touchées de la région.",
  },
};
