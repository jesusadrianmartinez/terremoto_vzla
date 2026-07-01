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
  metrics: MetricItem[];
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
      "Nuestro objetivo es organizarnos con calma y responsabilidad para ayudar en los próximos días y semanas, especially cuando las familias empiecen a enfrentar necesidades como nuevos alquileres, cosas básicas para habitar esos espacios, alimentos, medicinas, transporte y gastos urgentes.",
      "Cuidaremos siempre la privacidad y seguridad de las personas afectadas.",
    ],
    urgentNeedsTitle: "Necesidades más urgentes",
    transparencyPoints: [
      "Publicaremos los aportes recibidos de forma resumida y ordenada",
      "Iremos actualizando los apoyos realizados cuando comiencen las entregas.",
      "Evitaremos publicar información sensible de familias afectadas o beneficiarios.",
      "Cuando sea posible, compartiremos comprobantes o respaldos sin exponer datos privados.",
    ],
    metrics: [
      { id: "funds_raised", label: "Fondos recaudados", value: "$0.00" },
      { id: "funds_used", label: "Fondos utilizados", value: "$0.00" },
      { id: "people_helped", label: "Personas ayudadas", value: "0" },
      { id: "families_assisted", label: "Familias atendidas", value: "0" },
      { id: "rescuers_supported", label: "Rescatistas apoyados", value: "0" },
      { id: "last_update", label: "Última actualización", value: "Pendiente" },
    ],
    urgentNeeds: [
      { id: "water", label: "Agua potable" },
      { id: "food", label: "Alimentos" },
      { id: "medicine", label: "Medicamentos" },
      { id: "shelter", label: "Hospedaje temporal" },
      { id: "fuel", label: "Combustible" },
      { id: "tools", label: "Herramientas para rescate" },
      { id: "lighting", label: "Equipos de iluminación" },
      { id: "transport", label: "Transporte" },
      { id: "connectivity", label: "Conectividad" },
    ],
  },
  en: {
    sectionTitle: "Contributions received and next steps",
    sectionParagraph: [
      "Thank you to everyone who has contributed. In this section, we will share the donations received and, as direct support and deliveries begin, we will also post updates on our progress.",
      "Our goal is to organize everything carefully and responsibly to provide help over the coming days and weeks, especially as families begin to face needs like new rentals, basic essentials to settle into those spaces, food, medicine, transportation, and urgent expenses.",
      "We will always protect the privacy and safety of the affected families.",
    ],
    urgentNeedsTitle: "Most urgent needs",
    transparencyPoints: [
      "We will publish received contributions in a clear, summarized, and organized manner.",
      "We will update the distribution of aid as soon as deliveries begin.",
      "We will strictly avoid publishing sensitive information about affected families or beneficiaries.",
      "Whenever possible, we will share receipts or supporting documents without exposing private data.",
    ],
    metrics: [
      { id: "funds_raised", label: "Funds raised", value: "$0.00" },
      { id: "funds_used", label: "Funds used", value: "$0.00" },
      { id: "people_helped", label: "People helped", value: "0" },
      { id: "families_assisted", label: "Families assisted", value: "0" },
      {
        id: "rescuers_supported",
        label: "First responders supported",
        value: "0",
      },
      { id: "last_update", label: "Last update", value: "Pending" },
    ],
    urgentNeeds: [
      { id: "water", label: "Drinking water" },
      { id: "food", label: "Food supplies" },
      { id: "medicine", label: "Medicine" },
      { id: "shelter", label: "Temporary housing" },
      { id: "fuel", label: "Fuel" },
      { id: "tools", label: "Rescue tools" },
      { id: "lighting", label: "Lighting equipment" },
      { id: "transport", label: "Transportation" },
      { id: "connectivity", label: "Connectivity" },
    ],
  },
  fr: {
    sectionTitle: "Dons reçus et prochaines étapes",
    sectionParagraph: [
      "Merci à chaque personne qui a contribué. Dans cette section, nous partagerons les dons reçus et, au fur et à mesure que l'aide directe et les livraisons commenceront, nous afficherons également nos suivis.",
      "Notre objectif est de nous organiser calmement et de manière responsable pour apporter notre aide dans los jours y semaines à venir, surtout lorsque les familles devront faire face à des besoins comme de nouveaux loyers, des articles de base pour s'installer, de la nourriture, des médicaments, du transport et des dépenses urgentes.",
      "Nous veillerons en tout temps à protéger la vie privée et la sécurité des personnes touchées.",
    ],
    urgentNeedsTitle: "Besoins les plus urgents",
    transparencyPoints: [
      "Nous publierons les dons reçus de façon claire, résumée et ordonnée.",
      "Nous mettrons à jour l'attribution de l'aide dès que les livraisons commenceront.",
      "Nous éviterons de publier des renseignements sensibles sur les familles touchées ou les bénéficiaires.",
      "Lorsque possible, nous partagerons des reçus ou des justificatifs sans exposer de données privées.",
    ],
    metrics: [
      { id: "funds_raised", label: "Fonds collectés", value: "$0.00" },
      { id: "funds_used", label: "Fonds utilisés", value: "$0.00" },
      { id: "people_helped", label: "Personnes aidées", value: "0" },
      { id: "families_assisted", label: "Famille soutenues", value: "0" },
      { id: "rescuers_supported", label: "Secouristes soutenus", value: "0" },
      { id: "last_update", label: "Dernière mise à jour", value: "En attente" },
    ],
    urgentNeeds: [
      { id: "water", label: "Eau potable" },
      { id: "food", label: "Nourriture" },
      { id: "medicine", label: "Médicaments" },
      { id: "shelter", label: "Hébergement temporaire" },
      { id: "fuel", label: "Carburant" },
      { id: "tools", label: "Outils de sauvetage" },
      { id: "lighting", label: "Équipements d'éclairage" },
      { id: "transport", label: "Transport" },
      { id: "connectivity", label: "Connectivité" },
    ],
  },
};
