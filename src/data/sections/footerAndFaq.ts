import {
  Heart,
  DollarSign,
  Shield,
  ClipboardList,
  Scale,
  FileText,
  type LucideIcon,
} from "lucide-react";

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

// 1. Datos del Equipo (Con tu nombre incluido en el frente local de Venezuela)
export const teamData: TeamData = {
  coordination: "Jesús Adrián Martínez Lozada y Mónica del Carmen Rivas Marquez.",
  venezuela:
    "Roberto Flórez, Juan Carlos, Sofía, Mariana, Juan Román, amigos y voluntarios comprometidos con las labores de apoyo y verificación.",
};

// 2. Principios de trabajo (Iconografía y textos idénticos al Mockup Visual)
export const principlesData: PrincipleItem[] = [
  { icon: Heart, text: "Ayuda directa a personas afectadas" },
  { icon: DollarSign, text: "Transparencia total en el manejo de los fondos" },
  { icon: Shield, text: "Respeto por la dignidad y privacidad" },
  { icon: ClipboardList, text: "Priorización según urgencia y verificación" },
  { icon: Scale, text: "Independencia política y religiosa" },
  { icon: FileText, text: "Rendición pública de cuentas" },
];

// 3. Destinatarios de Formularios
export const formDestinations = {
  solicitarAyuda: "ayuda@laguaira.help",
  ofrecerAyuda: "voluntarios@laguaira.help",
};

// 4. Preguntas Frecuentes (FAQs)
export const faqsData: FaqItem[] = [
  {
    question: "¿Quién administra las donaciones?",
    answer:
      "La coordinación general está a cargo de Jesús Adrián Martínez Lozada y Mónica. Las compras y la distribución se realizan con el apoyo del equipo y voluntarios en Venezuela.",
  },
  {
    question: "¿Cómo verifícan los casos?",
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
      "Sí. También necesitamos voluntarios, apoyo logístico, difusión, contactos locales y otras formas de colaboración.",
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
