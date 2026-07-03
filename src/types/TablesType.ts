export type BalanceTuple = [
  fecha: string,
  concepto: string,
  concepto_en: string,
  concepto_fr: string,
  monto: string,
  moneda: string,
  estado: "Recibido" | "Completado" | string,
];

export type BalanceResponse = {
  range: string;
  majorDimension: "ROWS" | "COLUMNS";
  values: Array<BalanceTuple | string[]>;
};

export interface BalanceRow {
  date: string;
  concept: { es: string; en: string; fr: string };
  amount: string;
  currency: string;
  status: string;
}

export type MetricsTuple = [
  fondos_recaudados: string,
  fondos_utilizados: string,
  personas_ayudadas: string,
  familias_atendidas: string,
  rescatistas_apoyados: string,
  ultima_actualizacion: string,
];

export type MetricsResponse = {
  range: string;
  majorDimension: "ROWS" | "COLUMNS";
  values: Array<MetricsTuple | string[]>;
};

export interface MetricsRow {
  fundsRaised: string;
  fundsUsed: string;
  peopleHelped: string;
  familiesAssisted: string;
  rescuersSupported: string;
  lastUpdate: string;
}

export type CollaboratorTuple = [
  voluntario: string,
  ubicacion: string,
  ayuda: string,
  telefono: string,
];

export type CollaboratorsResponse = {
  range: string;
  majorDimension: "ROWS" | "COLUMNS";
  values: Array<CollaboratorTuple | string[]>;
};

export interface CollaboratorRow {
  volunteer: string;
  location: string;
  support_proposed: string;
  phone: string;
}
