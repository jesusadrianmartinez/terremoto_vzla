export interface MetricItem {
  id: string;
  label: string;
  value: string;
}

export interface UrgentNeedItem {
  id: string;
  label: string;
}

export interface TransparencyTranslations {
  sectionTitle: string;
  sectionParagraph: string[];
  urgentNeedsTitle: string;
  transparencyPoints: string[];
  urgentNeeds: UrgentNeedItem[];
}

export const transparencyTranslations: Record<
  "es" | "en" | "fr",
  TransparencyTranslations
> = {
  es: {
    sectionTitle: "Aportes recibidos y próximos pasos",
    sectionParagraph: [
      "Gracias a cada persona que ha aportado. En esta sección iremos compartiendo los aportes recibidos y, a medida que comiencen las entregas o apoyos directos, también mostraremos los avances.",
      "Nuestro objetivo es organizarnos con calma y responsabilidad para ayudar en los próximos días y semanas, especialmente cuando las familias empiecen a enfrentar necesidades como nuevos alquileres, cosas básicas para habitar esos espacios, alimentos, medicinas, transporte y gastos urgentes.",
      "Cuidaremos siempre la privacidad y seguridad de las personas afectadas.",
    ],
    urgentNeedsTitle: "AYUDA PARA VOLVER A EMPEZAR",
    transparencyPoints: [
      "Publicaremos los aportes recibidos de forma resumida y ordenada",
      "Iremos actualizando los apoyos realizados cuando comiencen las entregas.",
      "Evitaremos publicar información sensible de familias afectadas o beneficiarios.",
      "Cuando sea posible, compartiremos comprobantes o respaldos sin exponer datos privados.",
    ],
    urgentNeeds: [
      { id: "KeyRound", label: "Nuevos alquileres" },
      { id: "Bed", label: "Cosas básicas para habitar" },
      { id: "Utensils", label: "Alimentos" },
      { id: "HeartPulse", label: "Medicamentos" },
      { id: "Truck", label: "Transporte" },
      { id: "Milestone", label: "Gastos funerarios" },
      { id: "Wrench", label: "Herramientas y recuperación" },
      { id: "MessageSquare", label: "Comunicación y coordinación" },
      { id: "Droplet", label: "Agua y productos básicos" },
    ],
  },
  en: {
    sectionTitle: "Contributions received and next steps",
    sectionParagraph: [
      "Thank you to everyone who has contributed. In this section, we will share the donations received and, as direct support and deliveries begin, we will also post updates on our progress.",
      "Our goal is to organize everything carefully and responsibly to provide help over the coming days and weeks, especially as families begin to face needs like new rentals, basic essentials to settle into those spaces, food, medicine, transportation, and urgent expenses.",
      "We will always protect the privacy and safety of the affected families.",
    ],
    urgentNeedsTitle: "SUPPORT TO START OVER",
    transparencyPoints: [
      "We will publish received contributions in a clear, summarized, and organized manner.",
      "We will update the distribution of aid as soon as deliveries begin.",
      "We will strictly avoid publishing sensitive information about affected families or beneficiaries.",
      "Whenever possible, we will share receipts or supporting documents without exposing private data.",
    ],
    urgentNeeds: [
      { id: "KeyRound", label: "New rentals" },
      { id: "Bed", label: "Essentials to settle in" },
      { id: "Utensils", label: "Food supplies" },
      { id: "HeartPulse", label: "Medicine" },
      { id: "Truck", label: "Transportation" },
      { id: "Milestone", label: "Funeral expenses" },
      { id: "Wrench", label: "Tools & recovery" },
      { id: "MessageSquare", label: "Communication & coordination" },
      { id: "Droplet", label: "Water & basic products" },
    ],
  },
  fr: {
    sectionTitle: "Dons reçus et prochaines étapes",
    sectionParagraph: [
      "Merci à chaque personne qui a contribué. Dans cette section, nous partagerons les dons reçus et, au fur et à mesure que l'aide directe et les livraisons commenceront, nous afficherons également nos suivis.",
      "Notre objectif est de nous organiser calmement et de manière responsable pour apporter notre aide dans les jours et les semaines à venir, surtout lorsque les familles devront faire face à des besoins comme de nouveaux loyers, des articles de base pour s'installer, de la nourriture, des médicaments, du transport et des dépenses urgentes.",
      "Nous veillerons en tout temps à protéger la vie privée et la sécurité des personnes touchées.",
    ],
    urgentNeedsTitle: "DE L'AIDE POUR RECOMMENCER",
    transparencyPoints: [
      "Nous publierons les dons reçus de façon claire, résumée et ordonnée.",
      "Nous mettrons à jour l'attribution de l'aide dès que les livraisons commenceront.",
      "Nous éviterons de publier des renseignements sensibles sur les familles touchées ou les bénéficiaires.",
      "Lorsque possible, nous partagerons des reçus ou des justificatifs sans exposer de données privées.",
    ],
    urgentNeeds: [
      { id: "KeyRound", label: "Nouveaux loyers" },
      { id: "Bed", label: "Biens essentiels pour s'installer" },
      { id: "Utensils", label: "Nourriture" },
      { id: "HeartPulse", label: "Médicaments" },
      { id: "Truck", label: "Transport" },
      { id: "Milestone", label: "Frais funéraires" },
      { id: "Wrench", label: "Outils et nettoyage" },
      { id: "MessageSquare", label: "Communication et coordination" },
      { id: "Droplet", label: "Eau et produits de base" },
    ],
  },
};
