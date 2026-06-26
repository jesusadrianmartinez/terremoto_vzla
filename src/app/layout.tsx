import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProvidersTheme } from "@/components/providers/providerTheme";
import { ProvidersStore } from "@/redux/providers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Guaira Help | Ayuda directa a familias afectadas",
  description:
    "Iniciativa ciudadana para brindar ayuda inmediata a familias afectadas por el terremoto del 24 de junio de 2026 en Venezuela.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "La Guaira Help",
    description:
      "Ayuda directa. Transparencia total. Esperanza para La Guaira.",
    images: ["/logo-brand.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ProvidersTheme>
          <ProvidersStore>
            {" "}
            <Header />
            {children}
            <Footer />
          </ProvidersStore>
        </ProvidersTheme>
      </body>
    </html>
  );
}
