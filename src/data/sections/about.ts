export interface AboutData {
  title: string;
  paragraphs?: string[];
  verb?: string;
  author?: string;
  context?: string;
  details?: string[];
  highlight?: string;
  text?: string[];
  altImage1?: string;
  altImage2?: string;
  altImage3?: string;
}

export const emergencyData: Record<"es" | "en" | "fr", AboutData> = {
  es: {
    title: "LO QUE ESTÁ PASANDO EN LA GUAIRA",
    paragraphs: [
      "El terremoto del 24 de junio de 2026 cambió la vida de muchas familias en La Guaira.",
      "En los primeros días, la prioridad ha sido buscar sobrevivientes, acompañar a las familias afectadas y responder a las necesidades más urgentes.",
      "Pero sabemos que la verdadera dimensión de esta crisis se verá con más fuerza en los próximos días y semanas, cuando muchas personas deban enfrentar pérdidas, traslados, falta de vivienda, búsqueda de nuevos alquileres, alimentos, medicinas, gastos funerarios y necesidades básicas para volver a empezar.",
      "La Guaira Help nace para reunir apoyo y poder acompañar a nuestras familias, vecinos y otras personas afectadas cuando más lo necesiten.",
    ],
  },
  en: {
    title: "WHAT IS HAPPENING IN LA GUAIRA",
    paragraphs: [
      "The earthquake on June 24, 2026, changed the lives of many families in La Guaira.",
      "In the first few days, the priority has been searching for survivors, supporting affected families, and addressing the most urgent needs.",
      "However, we know that the true scale of this crisis will become even more apparent in the coming days and weeks, as many people face loss, relocation, homelessness, the search for new housing, and the need for food, medicine, funeral expenses, and basic essentials to start over.",
      "La Guaira Help was created to gather support and stand by our families, neighbors, and others affected when they need it most.",
    ],
  },
  fr: {
    title: "CE QUI SE PASSE À LA GUAIRA",
    paragraphs: [
      "Le tremblement de terre du 24 juin 2026 a bouleversé la vie de nombreuses familles à La Guaira.",
      "Au cours des premiers jours, la priorité a été de rechercher des survivants, de soutenir les familles touchées et de répondre aux besoins les plus urgents.",
      "Mais nous savons que la vraie dimension de cette crise se fera encore plus sentir dans les jours et les semaines à venir, alors que plusieurs devront faire face à des pertes, à des relocalisations, au manque de logement, à la recherche d'un nouvel appartement, ainsi qu'à des besoins en nourriture, en médicaments, en frais funéraires et en produits de base pour tout recommencer.",
      "La Guaira Help est née pour rassembler du soutien et accompagner nos familles, nos voisins et les autres personnes touchées au moment où ils en ont le plus besoin.",
    ],
  },
};

export const storyData: Record<"es" | "en" | "fr", AboutData> = {
  es: {
    title: "NUESTRA HISTORIA",
    verb: "Somos",
    author: "Jesús y Mónica",
    context: "familiar de personas directamente afectadas por el sismo.",
    details: [
      "Nuestras familias fueron afectadas directamente por el terremoto en La Guaira.",
      "Mi mamá se encontraba en el edificio Rita Mar Palace, entre Palmar Oeste y Los Corales, cuando ocurrió el terremoto.",
      "La mamá de Mónica se encontraba en el edificio La Trinidad, en Playa Grande, y lamentablemente fue encontrada sin vida.",
      "Creamos La Guaira Help desde el dolor, la urgencia y la necesidad de organizarnos para ayudar no solo en estos primeros días, sino también en las próximas semanas, cuando muchas familias empiecen a enfrentar la realidad de lo que perdieron y lo que necesitan para seguir adelante: conseguir dónde vivir, recuperar cosas básicas, moverse, alimentarse y reconstruir poco a poco su vida.",
    ],
    highlight:
      "No representamos a ningún partido político, organización gubernamental ni institución religiosa. Somos una familia tratando de ayudar en medio de una emergencia.",
    altImage1: "Jesús y Mónica - Coordinadores de apoyo",
    altImage2: "Jesús y Mónica - Soporte en la zona afectada",
    altImage3: "Jesús y Mónica - Soporte en la zona afectada",
  },
  en: {
    title: "OUR STORY",
    verb: "We are",
    author: "Jesús and Mónica",
    context: "family members of people directly affected by the earthquake.",
    details: [
      "Our families were directly affected by the earthquake in La Guaira.",
      "My mother was in the Rita Mar Palace building, between Palmar Oeste and Los Corales, when the earthquake struck.",
      "Mónica's mother was in the La Trinidad building in Playa Grande and was, unfortunately, found deceased.",
      "We created La Guaira Help out of grief, urgency, and the need to organize. We want to help not only during these first few days, but also in the coming weeks, as many families begin to face the reality of what they lost and what they need to move forward: finding a place to live, recovering basic essentials, commuting, getting food, and slowly rebuilding their lives.",
    ],
    highlight:
      "We do not represent any political party, government organization, or religious institution. We are simply a family trying to help in the midst of an emergency.",
    altImage1: "Jesús and Mónica - Support coordinators on site",
    altImage2:
      "Jesús and Mónica - Providing ground relief in the affected area",
    altImage3:
      "Jesús and Mónica - Helping community members after the earthquake",
  },
  fr: {
    title: "NOTRE HISTOIRE",
    verb: "Nous sommes",
    author: "Jesús et Mónica",
    context: "proches de personnes directement touchées por le séisme.",
    details: [
      "Nos familles ont été directement touchées par le tremblement de terre à La Guaira.",
      "Ma mère se trouvait dans l'édifice Rita Mar Palace, entre Palmar Oeste et Los Corales, lorsque le séisme a frappé.",
      "La mère de Mónica se trouvait dans l'édifice La Trinidad, à Playa Grande, et a malheureusement été retrouvée sans vie.",
      "Nous avons créé La Guaira Help dans la douleur, l'urgence et le besoin de s'organiser pour aider. Pas seulement pour ces premiers jours, mais aussi pour les semaines à venir, alors que plusieurs familles commenceront à faire face à la réalité de ce qu'elles ont perdu et de ce dont elles ont besoin pour avancer : se loger, récupérer des biens essentiels, se déplacer, se nourrir et reconstruire leur vie petit à petit.",
    ],
    highlight:
      "Nous ne représentons aucun parti politique, organisme gouvernemental ou institution religieuse. Nous sommes simplement une famille qui tente d'aider au milieu d'une urgence.",
    altImage1: "Jesús et Mónica - Coordonniateurs de l'aide humanitaire",
    altImage2: "Jesús et Mónica - Soutien direct sur le terrain",
    altImage3: "Jesús et Mónica - Accompagnement des sinistrés dans la région",
  },
};

export const missionData: Record<"es" | "en" | "fr", AboutData> = {
  es: {
    title: "CÓMO QUEREMOS AYUDAR",
    text: [
      "Nuestro apoyo estará enfocado en las necesidades que vayan apareciendo después de la emergencia inicial: alimentos, agua, medicinas, transporte, herramientas, apoyo logístico, gastos funerarios y ayuda básica para familias que hayan perdido parte de su hogar o sus pertenencias.",
      "También queremos apoyar, en la medida de lo posible, a familias que deban mudarse temporalmente o buscar una nueva vivienda en alquiler, ayudando con gastos asociados y con cosas básicas para poder habitar esos espacios.",
      "Queremos estar presentes cuando la atención inicial baje, pero las familias sigan necesitando ayuda real.",
    ],
  },
  en: {
    title: "HOW WE WANT TO HELP",
    text: [
      "Our support will focus on the needs that emerge after the initial emergency phase: food, water, medicine, transportation, tools, logistical support, funeral expenses, and basic relief for families who have lost parts of their homes or belongings.",
      "We also want to support, as much as possible, families who need to temporarily relocate or find a new place to rent, helping with associated expenses and essential items needed to settle into those spaces.",
      "We want to be there when the initial attention fades but families still need real, tangible support.",
    ],
  },
  fr: {
    title: "COMMENT NOUS VOULONS AIDER",
    text: [
      "Notre soutien se concentrera sur les besoins qui surviendront après l'urgence initiale : nourriture, eau, médicaments, transport, outils, soutien logistique, frais funéraires et aide de base pour les familles qui ont perdu une partie de leur maison ou de leurs biens.",
      "Nous voulons aussi soutenir, dans la mesure du possible, les familles qui doivent se relocaliser temporairement ou se chercher un nouveau logement à louer, en les aidant avec les frais associés et les articles de base pour s'y installer.",
      "Nous voulons être présents lorsque l'attention médiatique initiale va diminuer, mais que les familles auront encore besoin d'un soutien réel.",
    ],
  },
};
