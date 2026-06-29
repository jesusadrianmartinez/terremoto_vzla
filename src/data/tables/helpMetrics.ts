export interface MetricsLabels {
  title: string;
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
    title: "Estado de la Ayuda",
    fundsRaised: "Fondos Recaudados",
    fundsUsed: "Fondos Utilizados",
    peopleHelped: "Personas Ayudadas",
    familiesAssisted: "Familias Atendidas",
    rescuersSupported: "Rescatistas Apoyados",
    lastUpdate: "Última Actualización",
    errorMsg: "Error al cargar las métricas en tiempo real.",
    loadingUpdate: "Buscando última actualización...",
  },
  en: {
    title: "Aid Status",
    fundsRaised: "Funds Raised",
    fundsUsed: "Funds Used",
    peopleHelped: "People Helped",
    familiesAssisted: "Families Assisted",
    rescuersSupported: "Rescuers Supported",
    lastUpdate: "Last Update",
    errorMsg: "Error loading real-time metrics.",
    loadingUpdate: "Checking for latest update...",
  },
  fr: {
    title: "État de l'Aide",
    fundsRaised: "Fonds Collectés",
    fundsUsed: "Fonds Utilisés",
    peopleHelped: "Personnes Aidées",
    familiesAssisted: "Familles Accompagnées",
    rescuersSupported: "Secouristes Soutenus",
    lastUpdate: "Dernière Mise à Jour",
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
