import { FormField } from "@/types/FormFieldType";

// 1. Campos para el Formulario de SOLICITAR AYUDA
export const solicitarAyudaFields: FormField[] = [
  {
    key: "fullName",
    label: { es: "Nombre completo", en: "Full name", fr: "Nom complet" },
    inputType: "text",
    placeholder: {
      es: "Tu nombre y apellido",
      en: "Your full name",
      fr: "Votre nom et prénom",
    },
    autoComplete: "name",
    rules: [
      {
        type: "required",
        message: {
          es: "Ingresa tu nombre completo.",
          en: "Enter your full name.",
          fr: "Veuillez saisir votre nom complet.",
        },
      },
    ],
  },
  {
    key: "phone",
    label: {
      es: "Teléfono / WhatsApp",
      en: "Phone / WhatsApp",
      fr: "Téléphone / WhatsApp",
    },
    inputType: "tel",
    placeholder: {
      es: "Ej: +58 412 1234567",
      en: "e.g., +58 412 1234567",
      fr: "Ex: +58 412 1234567",
    },
    autoComplete: "tel",
    rules: [
      {
        type: "required",
        message: {
          es: "Ingresa tu número de contacto.",
          en: "Enter your contact number.",
          fr: "Veuillez saisir votre numéro de contact.",
        },
      },
    ],
  },
  {
    key: "location",
    label: { es: "Ubicación", en: "Location", fr: "Localisation" },
    inputType: "text",
    placeholder: {
      es: "Sector o comunidad afectada en La Guaira",
      en: "Sector or community in La Guaira",
      fr: "Secteur ou communauté touchée à La Guaira",
    },
    rules: [
      {
        type: "required",
        message: {
          es: "Por favor, dinos dónde te encuentras.",
          en: "Please let us know your location.",
          fr: "S'il vous plaît, indiquez-nous où vous vous trouvez.",
        },
      },
    ],
  },
  {
    key: "needs",
    label: {
      es: "Necesidades prioritarias",
      en: "Priority needs",
      fr: "Besoins prioritaires",
    },
    inputType: "text",
    placeholder: {
      es: "Agua, alimentos, medicinas, insumos...",
      en: "Water, food, medicine, supplies...",
      fr: "Eau, nourriture, médicaments, fournitures...",
    },
    rules: [
      {
        type: "required",
        message: {
          es: "Describe brevemente qué necesitas.",
          en: "Briefly describe your needs.",
          fr: "Veuillez décrire brièvement vos besoins.",
        },
      },
    ],
  },
];

// 2. Campos para el Formulario de OFRECER AYUDA
export const ofrecerAyudaFields: FormField[] = [
  {
    key: "firstName",
    label: { es: "Nombre", en: "First name", fr: "Prénom" },
    inputType: "text",
    placeholder: { es: "Tu nombre", en: "Your name", fr: "Votre prénom" },
    autoComplete: "given-name",
    rules: [
      {
        type: "required",
        message: {
          es: "Ingresa tu nombre.",
          en: "Enter your name.",
          fr: "Veuillez saisir votre prénom.",
        },
      },
    ],
  },
  {
    key: "location",
    label: { es: "Ubicación", en: "Location", fr: "Localisation" },
    inputType: "text",
    placeholder: {
      es: "Ciudad o zona donde te encuentras",
      en: "City or area where you are located",
      fr: "Ville ou zone où vous vous situez",
    },
    rules: [
      {
        type: "required",
        message: {
          es: "Ingresa tu ubicación.",
          en: "Enter your location.",
          fr: "Veuillez saisir votre localisation.",
        },
      },
    ],
  },
  {
    key: "phone",
    label: { es: "Teléfono", en: "Phone", fr: "Téléphone" },
    inputType: "tel",
    placeholder: {
      es: "Ej: +58 414 1234567",
      en: "e.g., +58 414 1234567",
      fr: "Ex: +58 414 1234567",
    },
    autoComplete: "tel",
    rules: [
      {
        type: "required",
        message: {
          es: "Ingresa tu número de teléfono.",
          en: "Enter your phone number.",
          fr: "Veuillez saisir votre numéro de téléphone.",
        },
      },
    ],
  },
  {
    key: "collaboration",
    label: {
      es: "¿Cómo deseas colaborar?",
      en: "How do you wish to collaborate?",
      fr: "Comment souhaitez-vous collaborer ?",
    },
    inputType: "text",
    placeholder: {
      es: "Voluntariado, transporte, donación física, etc.",
      en: "Volunteering, transport, physical donation, etc.",
      fr: "Bénévolat, transport, don matériel, etc.",
    },
    rules: [
      {
        type: "required",
        message: {
          es: "Dinos de qué manera puedes brindar apoyo.",
          en: "Let us know how you can support.",
          fr: "Veuillez nous indiquer comment vous pouvez aider.",
        },
      },
    ],
  },
];
