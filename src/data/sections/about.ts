export interface AboutData {
  title: string;
  paragraphs?: string[];
  verb?: string;
  author?: string;
  context?: string;
  details?: string[];
  highlight?: string;
  text?: string;
  altImage1?: string;
  altImage2?: string;
}

export const emergencyData: Record<"es" | "en" | "fr", AboutData> = {
  es: {
    title: "Emergencia Humanitaria",
    paragraphs: [
      "El terremoto del 24 de junio de 2026 cambió la vida de miles de familias venezolanas.",
      "Muchas personas siguen sin acceso a agua, alimentos, medicamentos, transporte o un lugar seguro donde dormir.",
      "Vecinos, familiares y voluntarios son los primeros en responder con recursos limitados.",
      "La Guaira Help nace para convertir la solidaridad en ayuda directa.",
    ],
  },
  en: {
    title: "Humanitarian Emergency",
    paragraphs: [
      "The June 24, 2026 earthquake changed the lives of thousands of Venezuelan families.",
      "Many people remain without access to water, food, medicine, transportation, or a safe place to sleep.",
      "Neighbors, relatives, and volunteers are the first to respond with limited resources.",
      "La Guaira Help was born to transform solidarity into direct aid.",
    ],
  },
  fr: {
    title: "Urgence Humanitaire",
    paragraphs: [
      "Le tremblement de terre du 24 juin 2026 a changé la vie de milliers de familles vénézuéliennes.",
      "De nombreuses personnes restent sans accès à l'eau, à la nourriture, aux médicaments, aux transports ou à un endroit sûr pour dormir.",
      "Les voisins, les proches et les bénévoles sont les primeros à intervenir avec des ressources limitées.",
      "La Guaira Help est née pour transformer la solidarité en aide directe.",
    ],
  },
};

export const storyData: Record<"es" | "en" | "fr", AboutData> = {
  es: {
    title: "Por qué nace La Guaira Help",
    verb: "Soy",
    author: "Jesús Adrián Martínez Lozada",
    context: "familiar de personas directamente afectadas por el sismo.",
    details: [
      "Mi madre se encontraba en el edificio Rita Mar Palace, en El Palmar Oeste, cuando ocurrió el terremoto. Hasta este momento no hemos podido confirmar su situación.",
      "La madre de mi esposa, Mónica, también quedó atrapada durante el terremoto en Playa Grande y lamentablemente fue encontrada sin vida.",
      "Esta iniciativa nace desde el dolor, la incertidumbre y la necesidad urgente de actuar.",
      "La Guaira Help busca canalizar ayuda directa para familias afectadas y para las personas que continúan realizando labores de apoyo, rescate y verificación en las zonas más golpeadas.",
    ],
    highlight:
      "No representamos a ningún partido político, organización gubernamental ni institución religiosa. Solo queremos ayudar.",
    altImage1: "Jesús y Mónica - Coordinadores de apoyo",
    altImage2: "Jesús y Mónica - Soporte en la zona afectada",
  },
  en: {
    title: "Why La Guaira Help was born",
    verb: "I am",
    author: "Jesús Adrián Martínez Lozada",
    context: "relative of individuals directly affected by the earthquake.",
    details: [
      "My mother was in the Rita Mar Palace building, in El Palmar Oeste, when the earthquake hit. As of this moment, we have been unable to confirm her situation.",
      "My wife Monica's mother was also trapped during the earthquake in Playa Grande and was unfortunately found deceased.",
      "This initiative is born from pain, uncertainty, and the urgent need to take action.",
      "La Guaira Help seeks to channel direct aid to affected families and to those who continue to perform support, rescue, and verification efforts in the hardest-hit areas.",
    ],
    highlight:
      "We do not represent any political party, government organization, or religious institution. We just want to help.",
    altImage1: "Jesus and Monica - Support coordinators",
    altImage2: "Jesus and Monica - Project support onsite",
  },
  fr: {
    title: "Pourquoi La Guaira Help est née",
    verb: "Je suis",
    author: "Jesús Adrián Martínez Lozada",
    context: "proche de personnes directement touchées par le séisme.",
    details: [
      "Ma mère se trouvait dans l'immeuble Rita Mar Palace, à El Palmar Oeste, lorsque le séisme s'est produit. Jusqu'à présent, nous n'avons pas pu confirmer sa situation.",
      "La mère de mon épouse, Mónica, a également été piégée pendant le séisme à Playa Grande et a malheureusement été retrouvée sans vie.",
      "Cette initiative est née de la douleur, de l'incertitude et du besoin urgent d'agir.",
      "La Guaira Help cherche à canaliser l'aide directe aux familles touchées et aux personnes qui continuent de mener des actions de soutien, de sauvetage et de vérification dans les zones les plus durement touchées.",
    ],
    highlight:
      "Nous ne représentons aucun parti politique, organisation gouvernementale ou institution religieuse. Nous voulons simplement aider.",
    altImage1: "Jesús et Mónica - Coordinateurs de soutien",
    altImage2: "Jesús et Mónica - Support du projet sur le terrain",
  },
};

export const missionData: Record<"es" | "en" | "fr", AboutData> = {
  es: {
    title: "Nuestra misión",
    text: "Transformar cada donación en ayuda inmediata para las personas afectadas por el terremoto mediante una gestión transparente, responsable y verificable.",
  },
  en: {
    title: "Our mission",
    text: "To transform every donation into immediate aid for those affected by the earthquake through transparent, responsible, and verifiable management.",
  },
  fr: {
    title: "Notre mission",
    text: "Transformer chaque don en aide immédiate pour les personnes touchées por le séisme grâce à une gestion transparente, responsable et vérifiable.",
  },
};
