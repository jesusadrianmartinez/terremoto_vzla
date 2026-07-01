export interface HeroTranslations {
  badge: string;
  titleHelp: string;
  subheading: string;
  description: string[];
  btnDonate: string;
  imgAlt: string;
  cardTitle: string;
  cardDescription: string;
}

export const heroTranslations: Record<"es" | "en" | "fr", HeroTranslations> = {
  es: {
    badge: "Emergencia Humanitaria",
    titleHelp: "HELP",
    subheading: "Ayuda directa para familias afectadas en La Guaira",
    description: [
      "Somos Jesús y Mónica. Nuestras familias fueron afectadas directamente por el terremoto en el edificio Rita Mar Palace, entre Palmar Oeste y Los Corales, y en el edificio La Trinidad, en Playa Grande.",
      "Creamos esta página para reunir apoyo, coordinar ayuda urgente y acompañar a nuestras familias y vecinos en este momento difícil.",
    ],
    btnDonate: "Ayudar ahora",
    imgAlt: "La Guaira Help - Vista de la región afectada",
    cardTitle: "Una ayuda que llega a quienes la necesitan.",
    cardDescription:
      "Cada aporte nos ayuda a apoyar con comida, agua, transporte, medicamentos, herramientas y gastos urgentes para familias afectadas en La Guaira.",
  },
  en: {
    badge: "Humanitarian Emergency",
    titleHelp: "HELP",
    subheading: "Direct relief for affected families in La Guaira",
    description: [
      "We are Jesús and Mónica. Our families were directly affected by the earthquake at the Rita Mar Palace building (between Palmar Oeste and Los Corales) and the La Trinidad building in Playa Grande.",
      "We created this page to gather support, coordinate urgent relief, and stand by our families and neighbors during this difficult time.",
    ],
    btnDonate: "Help now",
    imgAlt: "La Guaira Help - View of the affected area",
    cardTitle: "Support that reaches those who need it most.",
    cardDescription:
      "Every contribution helps us provide food, water, transportation, medicine, tools, and urgent supplies for affected families in La Guaira.",
  },
  fr: {
    badge: "Urgence humanitaire",
    titleHelp: "HELP",
    subheading: "Aide directe aux familles touchées à La Guaira",
    description: [
      "Nous sommes Jesús et Mónica. Nos familles ont été directement touchées par le tremblement de terre à l'édifice Rita Mar Palace (entre Palmar Oeste et Los Corales) et à l'édifice La Trinidad à Playa Grande.",
      "Nous avons créé ce site pour rassembler du soutien, coordonner l'aide d'urgence et accompagner nos familles et nos voisins dans ces moments difficiles.",
    ],
    btnDonate: "Aider maintenant",
    imgAlt: "La Guaira Help - Vue de la région touchée",
    cardTitle: "Une aide concrète pour ceux qui en ont vraiment besoin.",
    cardDescription:
      "Chaque don nous permet de fournir de la nourriture, de l'eau, du transport, des médicaments, des outils et de couvrir les dépenses urgentes des familles touchées à La Guaira.",
  },
};
