import { Heart, LucideIcon } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TeamData {
  coordination: string;
  venezuela: string;
}

export interface PrincipleItem {
  icon: LucideIcon;
  text: string;
}

// 1. Datos del Equipo
export const teamData: TeamData = {
  coordination: "Jesús Adrián Martínez Lozada y Mónica.",
  venezuela:
    "Juan Carlos, Sofía, Mariana, Juan Román, amigos y voluntarios comprometidos con las labores de apoyo y verificación.",
};

// 2. Principios de trabajo
export const principlesData: PrincipleItem[] = [
  { icon: Heart, text: "Ayuda directa a personas afectadas." },
  { icon: Heart, text: "Transparencia total en el manejo de los fondos." },
  {
    icon: Heart,
    text: "Respeto absoluto por la dignidad y privacidad de las víctimas.",
  },
  { icon: Heart, text: "Priorización basada en urgencia y verificación." },
  { icon: Heart, text: "Independencia política, partidista y religiosa." },
  { icon: Heart, text: "Rendición pública de cuentas." },
];

// 3. Preguntas Frecuentes (FAQs)
export const faqsData: FaqItem[] = [
  {
    question: "¿Quién administra las donaciones?",
    answer:
      "La coordinación general está a cargo de Jesús Adrián Martínez Lozada y Mónica. Las compras y la distribución se realizan con el apoyo del equipo y voluntarios en Venezuela.",
  },
  {
    question: "¿Cómo verifican los casos?",
    answer:
      "Siempre que sea posible, verificamos las solicitudes mediante familiares, vecinos, voluntarios o contactos de confianza.",
  },
  {
    question: "¿Cómo sé que mi dinero será utilizado correctamente?",
    answer:
      "Todos los ingresos y gastos se publicarán de forma transparente. También compartiremos comprobantes de compra cuando sea posible.",
  },
  {
    question: "¿Puedo ayudar sin donar dinero?",
    answer:
      "Sí. También necesitamos voluntarios, apoyo logístico, difusión, traducciones, contactos locales y otras formas de colaboración.",
  },
  {
    question: "¿Puedo solicitar ayuda para otra persona?",
    answer:
      "Sí. Puedes enviar una solicitud en nombre de un familiar, amigo o vecino afectado.",
  },
  {
    question: "¿Qué ocurre si reciben más solicitudes que recursos?",
    answer:
      "Daremos prioridad a las situaciones de mayor urgencia, considerando la información disponible y los recursos del momento.",
  },
];
