import {
  Droplet,
  Utensils,
  Pill, // Cambiado de Pill a Pills según el estándar visual de Lucide usado en el mockup
  Home,
  Truck, // O Car de acuerdo a tu preferencia, se conserva Truck por compatibilidad
  Fuel,
  Wrench,
  Wifi,
  ThumbsUp,
  FileText,
  Search,
  ShoppingCart,
  Eye,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

export interface AidArea {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface Step {
  number: number;
  title: string;
  icon: LucideIcon;
}

// 1. ¿Qué hacemos? - Textos idénticos al mockup visual
export const aidAreasData: AidArea[] = [
  {
    icon: Droplet,
    title: "Agua potable",
    text: "Acceso seguro a agua limpia.",
  },
  {
    icon: Utensils,
    title: "Alimentos",
    text: "Kits y productos de primera necesidad.",
  },
  {
    icon: Pill,
    title: "Medicamentos",
    text: "Medicinas e insumos esenciales.",
  },
  {
    icon: Home,
    title: "Hospedaje temporal",
    text: "Alojamiento seguro y digno.",
  },
  {
    icon: Truck,
    title: "Transporte",
    text: "Movilización de personas y recursos.",
  },
  {
    icon: Fuel,
    title: "Combustible",
    text: "Apoyo para vehículos y generadores.",
  },
  {
    icon: Wrench,
    title: "Herramientas",
    text: "Equipos para rescate y recuperación.",
  },
  {
    icon: Wifi,
    title: "Conectividad",
    text: "Comunicación para coordinar ayuda.",
  },
];

// 2. Cómo funciona - Textos e iconos sincronizados perfectamente con las burbujas numéricas del flujo
export const stepsData: Step[] = [
  {
    number: 1,
    title: "Recibimos tu donación",
    icon: ThumbsUp,
  },
  {
    number: 2,
    title: "Registramos públicamente el ingreso",
    icon: FileText,
  },
  {
    number: 3,
    title: "Verificamos las necesidades prioritarias",
    icon: Search,
  },
  {
    number: 4,
    title: "Compramos directamente los recursos o realizamos los pagos",
    icon: ShoppingCart,
  },
  {
    number: 5,
    title: "Publicamos el gasto con su comprobante",
    icon: Eye,
  },
  {
    number: 6,
    title: "Actualizamos el impacto generado",
    icon: RefreshCw,
  },
];
