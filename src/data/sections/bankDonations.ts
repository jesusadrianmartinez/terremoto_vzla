export interface CryptoInfo {
  label: string;
  value: string;
}

export const cryptoData: CryptoInfo[] = [
  { label: "UID", value: "136521900" },
  { label: "Email", value: "jesus.a.martinez.l@gmail.com" },
];

export interface BankDetails {
  recipient: string;
  idNumber?: string;
  accountNumber?: string;
  bankName?: string;
  phone?: string;
  email?: string;
  notes?: string;
  countryLabel: string; // Nombre del país traducido
}

export interface BankDonationsTranslations {
  title: string;
  selectCountry: string;
  recipientLabel: string;
  idLabel: string;
  accountLabel: string;
  bankLabel: string;
  phoneLabel: string;
  emailLabel: string;
  banks: Record<"canada" | "chile" | "venezuela", BankDetails>;
}

export const bankDonationsTranslations: Record<
  "es" | "en" | "fr",
  BankDonationsTranslations
> = {
  es: {
    title: "Transferencias Bancarias",
    selectCountry: "Selecciona un país:",
    recipientLabel: "Beneficiario",
    idLabel: "Identificación",
    accountLabel: "Número de Cuenta",
    bankLabel: "Banco",
    phoneLabel: "Teléfono",
    emailLabel: "Correo electrónico",
    banks: {
      canada: {
        countryLabel: "Canadá",
        recipient: "Jesús Adrián Martínez Lozada",
        email: "jesus.a.martinez.l@gmail.com",
        phone: "+15145715403",
        notes:
          "Vía InteracTransfer (Depósito directo). No olvidar enviar por mensaje la respuesta de seguridad si se realiza Interac por email.",
      },
      chile: {
        countryLabel: "Chile",
        recipient: "JESUS MARTINEZ LOZADA",
        idNumber: "24.723.627-9",
        accountNumber: "70998912",
        bankName: "Banco Santander-Santiago",
      },
      venezuela: {
        countryLabel: "Venezuela",
        recipient: "Sabrina Del Valle Amaro Reyes",
        idNumber: "16338292",
        accountNumber: "01020358910000194770",
        bankName: "Banco de Venezuela",
        notes: "Cuenta Corriente",
      },
    },
  },
  en: {
    title: "Bank Transfers",
    selectCountry: "Select a country:",
    recipientLabel: "Recipient",
    idLabel: "ID Number",
    accountLabel: "Account Number",
    bankLabel: "Bank",
    phoneLabel: "Phone",
    emailLabel: "Email",
    banks: {
      canada: {
        countryLabel: "Canada",
        recipient: "Jesús Adrián Martínez Lozada",
        email: "jesus.a.martinez.l@gmail.com",
        phone: "+15145715403",
        notes:
          "Via InteracTransfer (Direct deposit). Do not forget to send the security answer via message if Interac is done via email.",
      },
      chile: {
        countryLabel: "Chile",
        recipient: "JESUS MARTINEZ LOZADA",
        idNumber: "24.723.627-9",
        accountNumber: "70998912",
        bankName: "Banco Santander-Santiago",
      },
      venezuela: {
        countryLabel: "Venezuela",
        recipient: "Sabrina Del Valle Amaro Reyes",
        idNumber: "16338292",
        accountNumber: "01020358910000194770",
        bankName: "Banco de Venezuela",
        notes: "Checking Account",
      },
    },
  },
  fr: {
    title: "Virements Bancaires",
    selectCountry: "Sélectionnez un pays :",
    recipientLabel: "Bénéficiaire",
    idLabel: "Numéro d'identité",
    accountLabel: "Numéro de Compte",
    bankLabel: "Banque",
    phoneLabel: "Téléphone",
    emailLabel: "E-mail",
    banks: {
      canada: {
        countryLabel: "Canada",
        recipient: "Jesús Adrián Martínez Lozada",
        email: "jesus.a.martinez.l@gmail.com",
        phone: "+15145715403",
        notes:
          "Via InteracTransfer (Dépôt direct). N'oubliez pas d'envoyer la réponse de sécurité par message si Interac est effectué par e-mail.",
      },
      chile: {
        countryLabel: "Chili",
        recipient: "JESUS MARTINEZ LOZADA",
        idNumber: "24.723.627-9",
        accountNumber: "70998912",
        bankName: "Banco Santander-Santiago",
      },
      venezuela: {
        countryLabel: "Venezuela",
        recipient: "Sabrina Del Valle Amaro Reyes",
        idNumber: "16338292",
        accountNumber: "01020358910000194770",
        bankName: "Banco de Venezuela",
        notes: "Compte Courant",
      },
    },
  },
};
