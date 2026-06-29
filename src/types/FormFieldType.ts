export type FormRule =
  | { type: "required"; message: { es: string; en: string; fr: string } }
  | {
      type: "minLength";
      value: number;
      message: { es: string; en: string; fr: string };
    }
  | {
      type: "pattern";
      value: RegExp;
      message: { es: string; en: string; fr: string };
    }
  | {
      type: string;
      value?: unknown;
      message: { es: string; en: string; fr: string };
    };

export type FormField = {
  key:
    | "firstName"
    | "lastName"
    | "email"
    | "fullName"
    | "phone"
    | "location"
    | "needs"
    | "collaboration";
  label: { es: string; en: string; fr: string };
  inputType: "text" | "email" | "tel";
  placeholder?: { es: string; en: string; fr: string };
  autoComplete?: string;
  helper?: { es: string; en: string; fr: string };
  rules: FormRule[];
};
