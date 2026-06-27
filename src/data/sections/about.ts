export interface AboutSection {
  title: string;
  paragraphs?: string[];
  author?: string;
  avatarUrl?: string;
  context?: string;
  details?: string[];
  highlight?: string;
  text?: string;
}

// 1. Emergencia Humanitaria
export const emergencyData: AboutSection = {
  title: "Emergencia Humanitaria",
  paragraphs: [
    "El terremoto del 24 de junio de 2026 cambió la vida de miles de familias venezolanas.",
    "Muchas personas siguen sin acceso a agua, alimentos, medicamentos, transporte o un lugar seguro donde dormir.",
    "Vecinos, familiares y voluntarios son los primeros en responder con recursos limitados.",
    "La Guaira Help nace para convertir la solidaridad en ayuda directa.",
  ],
};

// 2. Por qué nace La Guaira Help (Historia Corregida)
export const storyData: AboutSection = {
  title: "Por qué nace La Guaira Help",
  author: "Jesús Adrián Martínez Lozada",
  avatarUrl: "/jesus.jpeg",
  context: "familiar de personas directamente afectadas por el sismo.",
  details: [
    "Mi madre se encontraba en el edificio Rita Mar Palace, en El Palmar Oeste, cuando ocurrió el terremoto. Hasta este momento no hemos podido confirmar su situación.",
    "La madre de mi esposa, Mónica, también quedó atrapada durante el terremoto en Playa Grande y lamentablemente fue encontrada sin vida.",
    "Esta iniciativa nace desde el dolor, la incertidumbre y la necesidad urgente de actuar.",
    "La Guaira Help busca canalizar ayuda directa para familias afectadas y para las personas que continúan realizando labores de apoyo, rescate y verificación en las zonas más golpeadas.",
  ],
  highlight:
    "No representamos a ningún partido político, organización gubernamental ni institución religiosa. Solo queremos ayudar.",
};

// 3. Nuestra Misión
export const missionData: AboutSection = {
  title: "Nuestra misión",
  text: "Transformar cada donación en ayuda inmediata para las personas afectadas por el terremoto mediante una gestión transparente, responsable y verificable.",
};
