export interface AboutSection {
  title: string;
  paragraphs?: string[];
  author?: string;
  context?: string;
  details?: string[];
  highlight?: string;
  text?: string;
}

// 1. Emergencia Humanitaria
export const emergencyData: AboutSection = {
  title: "Emergencia Humanitaria",
  paragraphs: [
    "El terremoto del 24 de junio de 2026 cambió la vida de miles de familias venezolanas en cuestión de segundos.",
    "Mientras continúan las labores de búsqueda y rescate, muchas personas permanecen sin acceso a agua potable, alimentos, medicamentos, transporte o un lugar seguro donde dormir.",
    "En muchas comunidades, los primeros en responder han sido los propios vecinos, familiares y voluntarios, quienes continúan trabajando con recursos muy limitados.",
    "La Guaira Help nace para convertir la solidaridad de personas dentro y fuera de Venezuela en ayuda directa para quienes más la necesitan.",
  ],
};

// 2. Mi Historia (Estructurado para el render de autores)
export const storyData: AboutSection = {
  title: "Mi historia",
  author: "Jesús Adrián Martínez Lozada",
  context:
    "venezolano, ingeniero y emprendedor. Actualmente coordino proyectos entre Montreal, Canadá, y Chile.",
  details: [
    "El 24 de junio de 2026 mi madre se encontraba en el apartamento 8-A del edificio Rita Mar Palace, en El Palmar Oeste, La Guaira, cuando ocurrió el terremoto.",
    "Hasta este momento no hemos podido confirmar su situación. Vecinos y voluntarios continúan removiendo escombros con recursos muy limitados en la búsqueda de sobrevivientes.",
    "La madre de mi esposa, Mónica, también quedó atrapada en Playa Grande durante el terremoto y lamentablemente fue encontrada sin vida.",
    "Como muchos venezolanos en el exterior, la distancia me impide ayudar físicamente. Por esa razón decidimos crear La Guaira Help.",
  ],
  highlight:
    "No representamos a ningún partido político, organización gubernamental ni institución religiosa. Solo queremos ayudar.",
};

// 3. Nuestra Misión
export const missionData: AboutSection = {
  title: "Nuestra misión",
  text: "Transformar cada donación en ayuda inmediata para las personas afectadas por el terremoto mediante una gestión transparente, responsable y verificable.",
};
