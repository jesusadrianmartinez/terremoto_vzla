export interface CryptoInfo {
  label: string;
  value: string;
}

// Datos reales de Binance provistos en las correcciones
export const cryptoData: CryptoInfo[] = [
  { label: "UID", value: "136521900" },
  { label: "Email", value: "jesus.a.martinez.l@gmail.com" },
];

export const donationCountries: string[] = ["Canadá", "Chile", "Venezuela"];

// Estructuras de datos específicas para renderizar de manera dinámica los datos bancarios corregidos
export interface BankDetails {
  recipient: string;
  idNumber?: string; // RUT, Cédula o identificador
  accountNumber?: string;
  bankName?: string;
  phone?: string;
  email?: string;
  notes?: string;
}

export const bankDonationsData: Record<string, BankDetails> = {
  Canadá: {
    recipient: "Jesús Adrián Martínez Lozada",
    email: "jesus.a.martinez.l@gmail.com",
    phone: "+15145715403",
    notes:
      "Vía InteracTransfer (Depósito directo). No olvidar enviar por mensaje la respuesta de seguridad si se realiza Interac por email.",
  },
  Chile: {
    recipient: "JESUS MARTINEZ LOZADA",
    idNumber: "24.723.627-9",
    accountNumber: "70998912",
    bankName: "Banco Santander-Santiago",
  },
  Venezuela: {
    recipient: "Sabrina Del Valle Amaro Reyes",
    idNumber: "16338292",
    accountNumber: "01020358910000194770",
    bankName: "Banco de Venezuela", // Detectado por el prefijo de cuenta 0102
    notes: "Cuenta Corriente",
  },
};
