export interface FeatureItem {
  id: string;
  title: string;
  text: string;
}

export interface StepItem {
  number: number;
  title: string;
  text: string;
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
    whatWeDoTitle: "EN QUÉ QUEREMOS AYUDAR",
    howItWorksTitle: "CÓMO NOS ORGANIZAMOS",
    aidAreas: [
      {
        id: "Utensils", // Alimentos / Comida
        title: "Alimentos",
        text: "Comida y productos básicos para familias afectadas.",
      },
      {
        id: "HeartPulse", // Agua y medicinas / Salud
        title: "Agua y medicinas",
        text: "Apoyo con agua, medicamentos e insumos necesarios.",
      },
      {
        id: "Truck", // Transporte / Traslados
        title: "Transporte",
        text: "Traslados, movilización de personas y apoyo logístico.",
      },
      {
        id: "Milestone", // Gastos funerarios / Pérdidas / Tránsito (Respetuoso y sobrio)
        title: "Gastos funerarios",
        text: "Ayuda para familias que han tenido pérdidas humanas.",
      },
      {
        id: "KeyRound", // Nuevos alquileres / Acceso a vivienda
        title: "Nuevos alquileres",
        text: "Apoyo, en la medida de lo posible, para familias que deban mudarse temporalmente o buscar dónde vivir.",
      },
      {
        id: "Bed", // Cosas básicas para empezar de nuevo / Colchones / Hogar
        title: "Cosas básicas para empezar de nuevo",
        text: "Colchones, sábanas, utensilios, productos de limpieza y artículos necesarios para habitar un nuevo espacio.",
      },
      {
        id: "Wrench", // Herramientas y recuperación / Construcción
        title: "Herramientas y recuperación",
        text: "Apoyo con herramientas, limpieza, retiro de escombros y recuperación básica.",
      },
      {
        id: "MessageSquare", // Comunicación y coordinación
        title: "Comunicación y coordinación",
        text: "Ayuda para mantener contacto, organizar necesidades y coordinar apoyo.",
      },
    ],
    steps: [
      {
        number: 1,
        title: "Recibimos la ayuda",
        text: "Cada aporte se reúne para apoyar a familias afectadas en La Guaira.",
      },
      {
        number: 2,
        title: "Escuchamos las necesidades",
        text: "Vamos identificando qué necesita cada familia en los próximos días y semanas.",
      },
      {
        number: 3,
        title: "Priorizamos los casos más urgentes",
        text: "Damos prioridad a situaciones de pérdida, traslado, salud, alimentación, vivienda y gastos funerarios.",
      },
      {
        number: 4,
        title: "Compramos o apoyamos directamente",
        text: "Cuando sea posible, compramos insumos o apoyamos pagos necesarios de forma directa.",
      },
      {
        number: 5,
        title: "Compartimos avances",
        text: "Iremos mostrando lo que se vaya logrando para que quienes ayudan puedan ver cómo avanza el apoyo.",
      },
      {
        number: 6,
        title: "Seguimos acompañando",
        text: "La emergencia no termina en los primeros días. Queremos estar presentes cuando las familias tengan que volver a empezar.",
      },
    ],
  },
  en: {
    whatWeDoTitle: "HOW WE WANT TO HELP",
    howItWorksTitle: "HOW WE ARE ORGANIZED",
    aidAreas: [
      {
        id: "Utensils",
        title: "Food Supplies",
        text: "Food and basic essentials for affected families.",
      },
      {
        id: "HeartPulse",
        title: "Water & Medicine",
        text: "Providing water, medications, and critical supplies.",
      },
      {
        id: "Truck",
        title: "Transportation",
        text: "Relocation, moving people, and logistical support.",
      },
      {
        id: "Milestone",
        title: "Funeral Expenses",
        text: "Assistance for families who have lost loved ones.",
      },
      {
        id: "KeyRound",
        title: "New Rentals",
        text: "Support, as much as possible, for families needing to temporarily relocate or find a place to live.",
      },
      {
        id: "Bed",
        title: "Essentials to Start Over",
        text: "Mattresses, bedding, utensils, cleaning supplies, and items needed to settle into a new space.",
      },
      {
        id: "Wrench",
        title: "Tools & Recovery",
        text: "Assistance with tools, clean-up, debris removal, and basic recovery efforts.",
      },
      {
        id: "MessageSquare",
        title: "Communication & Coordination",
        text: "Helping people stay in touch, organizing needs, and coordinating relief efforts.",
      },
    ],
    steps: [
      {
        number: 1,
        title: "We receive the aid",
        text: "Every contribution is gathered to support affected families in La Guaira.",
      },
      {
        number: 2,
        title: "We listen to the needs",
        text: "We identify what each family needs over the coming days and weeks.",
      },
      {
        number: 3,
        title: "We prioritize urgent cases",
        text: "Priority is given to loss of life, relocation, health, food, housing, and funeral expenses.",
      },
      {
        number: 4,
        title: "We buy or support directly",
        text: "Whenever possible, we purchase supplies or directly cover necessary payments.",
      },
      {
        number: 5,
        title: "We share our progress",
        text: "We will share what is achieved so that those who help can see how the support is moving forward.",
      },
      {
        number: 6,
        title: "We continue to stand by them",
        text: "The emergency doesn't end after the first few days. We want to be there when families have to start over.",
      },
    ],
  },
  fr: {
    whatWeDoTitle: "NOTRE CHAMP D'ACTION",
    howItWorksTitle: "NOTRE ORGANISATION",
    aidAreas: [
      {
        id: "Utensils",
        title: "Nourriture",
        text: "Denrées alimentaires et produits de base pour les familles touchées.",
      },
      {
        id: "HeartPulse",
        title: "Eau et médicaments",
        text: "Soutien en eau potable, médicaments et fournitures nécessaires.",
      },
      {
        id: "Truck",
        title: "Transport",
        text: "Déplacements, relocalisation de personnes et soutien logistique.",
      },
      {
        id: "Milestone",
        title: "Frais funéraires",
        text: "Aide pour les familles qui ont subi des pertes humaines.",
      },
      {
        id: "KeyRound",
        title: "Nouveaux loyers",
        text: "Soutien, dans la mesure du possible, pour les familles qui doivent se relocaliser temporairement ou se chercher un toit.",
      },
      {
        id: "Bed",
        title: "Biens essentiels pour recommencer",
        text: "Matelas, literie, ustensiles, produits de nettoyage et articles nécessaires pour habiter un nouvel espace.",
      },
      {
        id: "Wrench",
        title: "Outils et nettoyage",
        text: "Soutien avec des outils, le nettoyage, le ramassage des décombres et la récupération de base.",
      },
      {
        id: "MessageSquare",
        title: "Communication et coordination",
        text: "Aide pour garder le contact, recenser les besoins et coordonner les secours.",
      },
    ],
    steps: [
      {
        number: 1,
        title: "Nous recevons l'aide",
        text: "Chaque don est rassemblé pour soutenir les familles touchées à La Guaira.",
      },
      {
        number: 2,
        title: "Nous ciblons les besoins",
        text: "Nous déterminons ce dont chaque famille a besoin pour los jours y semaines à venir.",
      },
      {
        number: 3,
        title: "Nous priorisons les cas urgents",
        text: "La priorité est accordée aux situations de deuil, de relocalisation, de santé, d'alimentation et de logement.",
      },
      {
        number: 4,
        title: "Nous payons ou achetons directement",
        text: "Si possible, nous achetons le matériel ou couvrons directement les frais nécessaires.",
      },
      {
        number: 5,
        title: "Nous partageons le suivi",
        text: "Nous montrerons ce qui est accompli pour que les donateurs puissent voir l'évolution de l'aide.",
      },
      {
        number: 6,
        title: "Nous restons présents",
        text: "L'urgence ne s'arrête pas après les premiers jours. Nous voulons être là quand les familles devront tout rebâtir.",
      },
    ],
  },
};
