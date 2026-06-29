export interface TableHeaders {
  title: string;
  date: string;
  concept: string;
  amount: string;
  currency: string;
  status: string;
}

export const tableHeadersTranslations: Record<
  "es" | "en" | "fr",
  TableHeaders
> = {
  es: {
    title: "Balance de Fondos",
    date: "Fecha",
    concept: "Concepto",
    amount: "Monto",
    currency: "Moneda",
    status: "Estado",
  },
  en: {
    title: "Balance of Funds",
    date: "Date",
    concept: "Description",
    amount: "Amount",
    currency: "Currency",
    status: "Status",
  },
  fr: {
    title: "Balance des Fonds",
    date: "Date",
    concept: "Détail",
    amount: "Montant",
    currency: "Devise",
    status: "Statut",
  },
};

// Mapeo dinámico para los estados que vienen de la Base de Datos / API
export const statusTranslations: Record<
  "es" | "en" | "fr",
  Record<string, string>
> = {
  es: {
    Recibido: "Recibido",
    Completado: "Completado",
    Pendiente: "Pendiente",
  },
  en: {
    Recibido: "Received",
    Completado: "Completed",
    Pendiente: "Pending",
  },
  fr: {
    Recibido: "Reçu",
    Completado: "Complété",
    Pendiente: "En attente",
  },
};
