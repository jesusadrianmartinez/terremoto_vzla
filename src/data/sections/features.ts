import {
  Droplet,
  Utensils,
  Pill,
  Home,
  Truck,
  Fuel,
  Wrench,
  Wifi,
  LucideIcon,
} from "lucide-react";

export interface AidArea {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface Step {
  number: number;
  title: string;
}

export const aidAreasData: AidArea[] = [
  {
    icon: Droplet,
    title: "Agua potable",
    text: "Compra y distribución de agua para familias y voluntarios.",
  },
  {
    icon: Utensils,
    title: "Alimentos",
    text: "Entrega de alimentos no perecederos y comidas preparadas.",
  },
  {
    icon: Pill,
    title: "Medicamentos",
    text: "Compra de medicamentos esenciales cuando exista disponibilidad.",
  },
  {
    icon: Home,
    title: "Hospedaje temporal",
    text: "Pago de alojamiento para familias que perdieron sus viviendas.",
  },
  {
    icon: Truck,
    title: "Transporte",
    text: "Movilización de personas, voluntarios y suministros.",
  },
  {
    icon: Fuel,
    title: "Combustible",
    text: "Apoyo para vehículos utilizados en labores humanitarias.",
  },
  {
    icon: Wrench,
    title: "Herramientas",
    text: "Palas, picos, guantes, linternas, cuerdas y equipos de rescate.",
  },
  {
    icon: Wifi,
    title: "Conectividad",
    text: "Apoyo para mantener comunicaciones e Internet cuando sea posible.",
  },
];

export const stepsData: Step[] = [
  { number: 1, title: "Recibimos tu donación." },
  { number: 2, title: "Registramos públicamente el ingreso." },
  { number: 3, title: "Verificamos las necesidades prioritarias." },
  {
    number: 4,
    title: "Compramos recursos o realizamos pagos correspondientes.",
  },
  { number: 5, title: "Publicamos el gasto con su comprobante." },
  { number: 6, title: "Actualizamos públicamente el impacto generado." },
];
