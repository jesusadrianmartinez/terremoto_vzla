import {
  Droplet,
  Utensils,
  Pill,
  Home,
  Fuel,
  Wrench,
  Lightbulb,
  Truck,
  Wifi,
  LucideIcon,
} from "lucide-react";

export interface MetricItem {
  label: string;
  value: string;
}

export interface UrgentNeed {
  icon: LucideIcon;
  label: string;
}

export interface TableRow {
  date: string;
  concept: string;
  amount: string;
  proof: string;
  status: string;
  statusType: "success" | "executed";
}

export const metricsData: MetricItem[] = [
  { label: "Fondos recaudados", value: "$0" },
  { label: "Fondos utilizados", value: "$0" },
  { label: "Personas ayudadas", value: "0" },
  { label: "Familias atendidas", value: "0" },
  { label: "Rescatistas apoyados", value: "0" },
  { label: "Última actualización", value: "Pendiente" },
];

export const urgentNeedsData: UrgentNeed[] = [
  { icon: Droplet, label: "Agua potable" },
  { icon: Utensils, label: "Alimentos" },
  { icon: Pill, label: "Medicamentos" },
  { icon: Home, label: "Hospedaje temporal" },
  { icon: Fuel, label: "Combustible" },
  { icon: Wrench, label: "Herramientas para rescate" },
  { icon: Lightbulb, label: "Equipos de iluminación" },
  { icon: Truck, label: "Transporte" },
  { icon: Wifi, label: "Conectividad" },
];

export const transparencyPoints: string[] = [
  "Cada aporte recibido será registrado públicamente.",
  "Cada gasto realizado será documentado.",
  "Publicaremos fecha, concepto, monto recibido, monto utilizado, comprobantes cuando sea posible y actualizaciones de entregas.",
  "No publicaremos información que comprometa la seguridad o privacidad de las personas beneficiarias.",
];

export const tableExampleData: TableRow[] = [
  {
    date: "24/06/2026",
    concept: "Donación recibida",
    amount: "$100.00",
    proof: "Comprobante",
    status: "Recibido",
    statusType: "success",
  },
  {
    date: "25/06/2026",
    concept: "Compra de agua",
    amount: "$80.00",
    proof: "Ver",
    status: "Ejecutado",
    statusType: "executed",
  },
  {
    date: "25/06/2026",
    concept: "Pago de transporte",
    amount: "$50.00",
    proof: "Ver",
    status: "Ejecutado",
    statusType: "executed",
  },
  {
    date: "26/06/2026",
    concept: "Kits de alimentos",
    amount: "$120.00",
    proof: "Ver",
    status: "Ejecutado",
    statusType: "executed",
  },
];
