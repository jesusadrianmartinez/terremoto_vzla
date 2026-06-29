export interface VolunteerHeaders {
  title: string;
  volunteer: string;
  location: string;
  supportProposed: string;
  phone: string;
}

export const volunteerHeadersTranslations: Record<
  "es" | "en" | "fr",
  VolunteerHeaders
> = {
  es: {
    title: "Últimos Colaboradores",
    volunteer: "Voluntario",
    location: "Ubicación",
    supportProposed: "Apoyo Propuesto",
    phone: "Teléfono",
  },
  en: {
    title: "Latest Collaborators",
    volunteer: "Volunteer",
    location: "Location",
    supportProposed: "Proposed Support",
    phone: "Phone",
  },
  fr: {
    title: "Derniers Collaborateurs",
    volunteer: "Bénévole",
    location: "Localisation",
    supportProposed: "Soutien Proposé",
    phone: "Téléphone",
  },
};
