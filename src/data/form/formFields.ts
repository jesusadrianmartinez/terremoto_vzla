import { FormField } from "@/types/FormFieldType";

// 1. Campos para el Formulario de SOLICITAR AYUDA
export const solicitarAyudaFields: FormField[] = [
  {
    key: "fullName",
    label: { es: "Nombre completo", en: "Full name" },
    inputType: "text",
    placeholder: { es: "Tu nombre y apellido", en: "Your full name" },
    autoComplete: "name",
    rules: [
      {
        type: "required",
        message: {
          es: "Ingresa tu nombre completo.",
          en: "Enter your full name.",
        },
      },
    ],
  },
  {
    key: "phone",
    label: { es: "Teléfono / WhatsApp", en: "Phone / WhatsApp" },
    inputType: "tel",
    placeholder: { es: "Ej: +58 412 1234567", en: "e.g., +58 412 1234567" },
    autoComplete: "tel",
    rules: [
      {
        type: "required",
        message: {
          es: "Ingresa tu número de contacto.",
          en: "Enter your contact number.",
        },
      },
    ],
  },
  {
    key: "location",
    label: { es: "Ubicación", en: "Location" },
    inputType: "text",
    placeholder: {
      es: "Sector o comunidad afectada en La Guaira",
      en: "Sector or community in La Guaira",
    },
    rules: [
      {
        type: "required",
        message: {
          es: "Por favor, dinos dónde te encuentras.",
          en: "Please let us know your location.",
        },
      },
    ],
  },
  {
    key: "needs",
    label: { es: "Necesidades prioritarias", en: "Priority needs" },
    inputType: "text",
    placeholder: {
      es: "Agua, alimentos, medicinas, insumos...",
      en: "Water, food, medicine, supplies...",
    },
    rules: [
      {
        type: "required",
        message: {
          es: "Describe brevemente qué necesitas.",
          en: "Briefly describe your needs.",
        },
      },
    ],
  },
];

// 2. Campos para el Formulario de OFRECER AYUDA
export const ofrecerAyudaFields: FormField[] = [
  {
    key: "firstName",
    label: { es: "Nombre", en: "First name" },
    inputType: "text",
    placeholder: { es: "Tu nombre", en: "Your name" },
    autoComplete: "given-name",
    rules: [
      {
        type: "required",
        message: { es: "Ingresa tu nombre.", en: "Enter your name." },
      },
    ],
  },
  {
    key: "location",
    label: { es: "Ubicación", en: "Location" },
    inputType: "text",
    placeholder: {
      es: "Ciudad o zona donde te encuentras",
      en: "City or area where you are located",
    },
    rules: [
      {
        type: "required",
        message: { es: "Ingresa tu ubicación.", en: "Enter your location." },
      },
    ],
  },
  {
    key: "phone",
    label: { es: "Teléfono", en: "Phone" },
    inputType: "tel",
    placeholder: { es: "Ej: +58 414 1234567", en: "e.g., +58 414 1234567" },
    autoComplete: "tel",
    rules: [
      {
        type: "required",
        message: {
          es: "Ingresa tu número de teléfono.",
          en: "Enter your phone number.",
        },
      },
    ],
  },
  {
    key: "collaboration",
    label: {
      es: "¿Cómo deseas colaborar?",
      en: "How do you wish to collaborate?",
    },
    inputType: "text",
    placeholder: {
      es: "Voluntariado, transporte, donación física, etc.",
      en: "Volunteering, transport, physical donation, etc.",
    },
    rules: [
      {
        type: "required",
        message: {
          es: "Dinos de qué manera puedes brindar apoyo.",
          en: "Let us know how you can support.",
        },
      },
    ],
  },
];
