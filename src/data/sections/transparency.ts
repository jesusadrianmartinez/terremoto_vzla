export interface MetricItem {
  id: string;
  label: string;
  value: string;
}

export interface UrgentNeedItem {
  id: string;
  label: string;
}

export interface TableRow {
  date: string;
  concept: string;
  amount: string;
  status:
    | "Recibido"
    | "Completado"
    | "Pendiente"
    | "Received"
    | "Completed"
    | "Pending"
    | "Reçu";
}

export interface TransparencyTranslations {
  sectionTitle: string;
  urgentNeedsTitle: string;
  transparencyPoints: string[];
  metrics: MetricItem[];
  urgentNeeds: UrgentNeedItem[];
  tableExample: TableRow[];
}

export const transparencyTranslations: Record<
  "es" | "en" | "fr",
  TransparencyTranslations
> = {
  es: {
    sectionTitle: "Transparencia",
    urgentNeedsTitle: "Necesidades más urgentes",
    transparencyPoints: [
      "Cada aporte recibido será registrado públicamente.",
      "Cada gasto realizado será documentado.",
      "Publicaremos fecha, concepto, monto recibido, monto utilizado, comprobantes cuando sea posible y actualizaciones de entregas.",
      "No publicaremos información que comprometa la seguridad o privacidad de las personas beneficiarias.",
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
    tableExample: [
      {
        date: "26/06",
        concept: "Donación recibida via Stripe",
        amount: "+$120.00",
        status: "Recibido",
      },
      {
        date: "25/06",
        concept: "Compra de insumos médicos",
        amount: "-$45.00",
        status: "Completado",
      },
    ],
  },
  en: {
    sectionTitle: "Transparency",
    urgentNeedsTitle: "Most urgent needs",
    transparencyPoints: [
      "Every contribution received will be publicly registered.",
      "Every expense made will be documented.",
      "We will publish the date, concept, amount received, amount used, receipts whenever possible, and delivery updates.",
      "We will not publish any information that compromises the safety or privacy of the beneficiaries.",
    ],
    metrics: [
      { id: "funds_raised", label: "Funds raised", value: "$0.00" },
      { id: "funds_used", label: "Funds used", value: "$0.00" },
      { id: "people_helped", label: "People helped", value: "0" },
      { id: "families_assisted", label: "Families assisted", value: "0" },
      { id: "rescuers_supported", label: "Rescuers supported", value: "0" },
      { id: "last_update", label: "Last update", value: "Pending" },
    ],
    urgentNeeds: [
      { id: "water", label: "Drinking water" },
      { id: "food", label: "Food supplies" },
      { id: "medicine", label: "Medicines" },
      { id: "shelter", label: "Temporary shelter" },
      { id: "fuel", label: "Fuel support" },
      { id: "tools", label: "Rescue tools" },
      { id: "lighting", label: "Lighting equipment" },
      { id: "transport", label: "Transportation" },
      { id: "connectivity", label: "Connectivity" },
    ],
    tableExample: [
      {
        date: "26/06",
        concept: "Donation received via Stripe",
        amount: "+$120.00",
        status: "Received",
      },
      {
        date: "25/06",
        concept: "Purchase of medical supplies",
        amount: "-$45.00",
        status: "Completed",
      },
    ],
  },
  fr: {
    sectionTitle: "Transparence",
    urgentNeedsTitle: "Besoins les plus urgents",
    transparencyPoints: [
      "Chaque contribution reçue sera enregistrée publiquement.",
      "Chaque dépense effectuée sera documentée.",
      "Nous publierons la date, le concept, le montant reçu, le montant utilisé, les justificatifs dans la mesure du possible et les mises à jour des livraisons.",
      "Nous ne publierons aucune information compromettant la sécurité ou la vie privée des bénéficiaires.",
    ],
    metrics: [
      { id: "funds_raised", label: "Fonds collectés", value: "$0.00" },
      { id: "funds_used", label: "Fonds utilisés", value: "$0.00" },
      { id: "people_helped", label: "Personnes aidées", value: "0" },
      { id: "families_assisted", label: "Familles accompagnées", value: "0" },
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
    tableExample: [
      {
        date: "26/06",
        concept: "Donation reçue via Stripe",
        amount: "+$120.00",
        status: "Reçu",
      },
      {
        date: "25/06",
        concept: "Achat de fournitures médicales",
        amount: "-$45.00",
        status: "Completed",
      },
    ],
  },
};
