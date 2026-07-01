export interface MetricsLabels {
  title: string;
  paragraph?: string;
  fundsRaised: string;
  fundsUsed: string;
  peopleHelped: string;
  familiesAssisted: string;
  rescuersSupported: string;
  lastUpdate: string;
  errorMsg: string;
  loadingUpdate: string;
}

export const helpMetricsTranslations: Record<
  "es" | "en" | "fr",
  MetricsLabels
> = {
  es: {
    title: "CÓMO VA LA AYUDA",
    paragraph:
      "Durante estos primeros días seguimos enfocados en la búsqueda, los trámites familiares y la coordinación con personas en La Guaira. La ayuda se organizará a medida que las familias puedan identificar sus necesidades reales para los próximos días y semanas.",
    fundsRaised: "Aportes recibidos",
    fundsUsed: "Apoyos realizados",
    peopleHelped: "Familias identificadas",
    familiesAssisted: "Prioridades previstas",
    rescuersSupported: "Etapa actual",
    lastUpdate: "Última actualización",
    errorMsg: "Error al cargar las métricas en tiempo real.",
    loadingUpdate: "Buscando última actualización...",
  },
  en: {
    title: "HOW THE AID IS PROGRESSING",
    paragraph:
      "During these first few days, we remain focused on the search efforts, family procedures, and coordination with people on the ground in La Guaira. Relief will be organized as families are able to identify their real needs for the coming days and weeks.",
    fundsRaised: "Contributions received",
    fundsUsed: "Aid delivered",
    peopleHelped: "Identified families",
    familiesAssisted: "Planned priorities",
    rescuersSupported: "Current stage",
    lastUpdate: "Last update",
    errorMsg: "Error loading real-time metrics.",
    loadingUpdate: "Checking for latest update...",
  },
  fr: {
    title: "OÙ EN EST L'AIDE",
    paragraph:
      "Au cours de ces premiers jours, nous restons concentrés sur les recherches, les démarches familiales et la coordination avec les personnes sur le terrain à La Guaira. L'aide sera organisée au fur et à mesure que les familles pourront cibler leurs besoins réels pour los jours y semaines à venir.",
    fundsRaised: "Dons reçus",
    fundsUsed: "Soutiens réalisés",
    peopleHelped: "Familles recensées",
    familiesAssisted: "Priorités prévues",
    rescuersSupported: "Étape actuelle",
    lastUpdate: "Dernière mise à jour",
    errorMsg: "Erreur lors du chargement des données en temps réel.",
    loadingUpdate: "Recherche de la dernière mise à jour...",
  },
};

// Diccionario opcional para traducir fallbacks de estados crudos del backend
export const rawValueTranslations: Record<
  "es" | "en" | "fr",
  Record<string, string>
> = {
  es: { "N/A": "N/A", Pendiente: "Pendiente" },
  en: { "N/A": "N/A", Pendiente: "Pending" },
  fr: { "N/A": "N/A", Pendiente: "En attente" },
};
