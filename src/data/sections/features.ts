export interface FeatureItem {
  id: string;
  title: string;
  text: string;
}

export interface StepItem {
  number: number;
  title: string;
}

export interface FeaturesTranslations {
  whatWeDoTitle: string;
  howItWorksTitle: string;
  aidAreas: FeatureItem[];
  steps: StepItem[];
}

export const featuresTranslations: Record<
  "es" | "en" | "fr",
  FeaturesTranslations
> = {
  es: {
    whatWeDoTitle: "¿Qué hacemos?",
    howItWorksTitle: "Cómo funciona",
    aidAreas: [
      {
        id: "water",
        title: "Agua potable",
        text: "Acceso seguro a agua limpia.",
      },
      {
        id: "food",
        title: "Alimentos",
        text: "Kits y productos de primera necesidad.",
      },
      {
        id: "medicine",
        title: "Medicamentos",
        text: "Medicinas e insumos esenciales.",
      },
      {
        id: "shelter",
        title: "Hospedaje temporal",
        text: "Alojamiento seguro y digno.",
      },
      {
        id: "transport",
        title: "Transporte",
        text: "Movilización de personas y recursos.",
      },
      {
        id: "fuel",
        title: "Combustible",
        text: "Apoyo para vehículos y generadores.",
      },
      {
        id: "tools",
        title: "Herramientas",
        text: "Equipos para rescate y recuperación.",
      },
      {
        id: "connectivity",
        title: "Conectividad",
        text: "Comunicación para coordinar ayuda.",
      },
    ],
    steps: [
      { number: 1, title: "Recibimos tu donación" },
      { number: 2, title: "Registramos públicamente el ingreso" },
      { number: 3, title: "Verificamos las necesidades prioritarias" },
      {
        number: 4,
        title: "Compramos directamente los recursos o realizamos los pagos",
      },
      { number: 5, title: "Publicamos el gasto con su comprobante" },
      { number: 6, title: "Actualizamos el impacto generado" },
    ],
  },
  en: {
    whatWeDoTitle: "What we do",
    howItWorksTitle: "How it works",
    aidAreas: [
      {
        id: "water",
        title: "Drinking water",
        text: "Safe access to clean water.",
      },
      {
        id: "food",
        title: "Food supplies",
        text: "Kits and essential products.",
      },
      {
        id: "medicine",
        title: "Medicine",
        text: "Essential medicines and medical supplies.",
      },
      {
        id: "shelter",
        title: "Temporary shelter",
        text: "Safe and dignified lodging.",
      },
      {
        id: "transport",
        title: "Transportation",
        text: "Mobilization of people and resources.",
      },
      {
        id: "fuel",
        title: "Fuel support",
        text: "Support for vehicles and generators.",
      },
      {
        id: "tools",
        title: "Tools & Equipment",
        text: "Equipment for rescue and recovery.",
      },
      {
        id: "connectivity",
        title: "Connectivity",
        text: "Communication to coordinate aid.",
      },
    ],
    steps: [
      { number: 1, title: "We receive your donation" },
      { number: 2, title: "We publicly register the entry" },
      { number: 3, title: "We verify priority needs" },
      { number: 4, title: "We directly purchase resources or issue payments" },
      { number: 5, title: "We publish the expense with its receipt" },
      { number: 6, title: "We update the generated impact" },
    ],
  },
  fr: {
    whatWeDoTitle: "Que faisons-nous ?",
    howItWorksTitle: "Comment ça marche",
    aidAreas: [
      {
        id: "water",
        title: "Eau potable",
        text: "Accès sécurisé à de l'eau propre.",
      },
      {
        id: "food",
        title: "Nourriture",
        text: "Kits et produits de première nécessité.",
      },
      {
        id: "medicine",
        title: "Médicaments",
        text: "Médicaments et fournitures essentiels.",
      },
      {
        id: "shelter",
        title: "Hébergement temporaire",
        text: "Logement sûr et digne.",
      },
      {
        id: "transport",
        title: "Transport",
        text: "Mobilisation des personnes et des ressources.",
      },
      {
        id: "fuel",
        title: "Carburant",
        text: "Soutien pour les véhicules et générateurs.",
      },
      {
        id: "tools",
        title: "Outils",
        text: "Équipements de sauvetage et de récupération.",
      },
      {
        id: "connectivity",
        title: "Connectivité",
        text: "Communication pour coordonner l'aide.",
      },
    ],
    steps: [
      { number: 1, title: "Nous recevons votre don" },
      { number: 2, title: "Nous enregistrons publiquement l'entrée" },
      { number: 3, title: "Nous vérifions les besoins prioritaires" },
      {
        number: 4,
        title:
          "Nous achetons directement les ressources ou effectuons les paiements",
      },
      { number: 5, title: "Nous publions la dépense avec son justificatif" },
      { number: 6, title: "Nous mettons à jour l'impact généré" },
    ],
  },
};
