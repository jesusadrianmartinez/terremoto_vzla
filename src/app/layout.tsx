import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script
          strategy="afterInteractive"
          async
          src={`https://www.googletagmanager.com/gtm.js?id=GTM-M48KKMBD`}
        />
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M48KKMBD');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <ProvidersStore>
          <Header />
          {children}
          <Footer />
        </ProvidersStore>
      </body>
    </html>
  );
}
