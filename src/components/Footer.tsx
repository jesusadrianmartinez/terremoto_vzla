"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { footerTranslations } from "@/data/sections/footer";

const FOOTER_LINKS = [
  { key: "inicio", href: "#inicio" },
  { key: "transparencia", href: "#about" },
  { key: "avance", href: "#transparencia" },
  { key: "solicitar", href: "#solicitar" },
  { key: "ofrecer", href: "#ofrecer" },
] as const;

export function Footer() {
  const language =
    useAppSelector((state) => state.languageReducer.language) || "es";
  const t = footerTranslations[language] || footerTranslations.es;

  return (
    <footer className="w-full bg-cream">
      {/* Franja Superior de Conversión / Llamado a la Acción */}
      <div className="bg-navy text-white">
        <div className="container-page flex flex-col gap-6 px-4 py-8 md:grid md:grid-cols-[1fr_1.4fr_auto] md:items-center md:gap-8">
          <p className="text-base font-bold leading-snug md:text-lg">
            {t.ctaHeading}
          </p>
          <p className="text-sm text-white/80 leading-relaxed">{t.ctaText}</p>
          <div className="flex flex-wrap gap-3 sm:flex-nowrap">
            <Link
              href="https://donate.stripe.com/fZu7sLgkH0yv8QXddq4800a"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center sm:w-auto rounded-xl bg-coral px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#d85f41] shadow-md shadow-coral/10"
            >
              {t.ctaButton}
            </Link>
          </div>
        </div>
      </div>

      {/* Cuerpo del Footer: Logo, Enlaces y Contacto */}
      <div className="container-page grid grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 md:grid-cols-4">
        {/* Identidad */}
        <div className="sm:col-span-2 flex flex-col gap-3">
          <Image
            src="/logo-brand.png"
            alt="La Guaira Help Logo"
            width={240}
            height={80}
            className="h-auto w-56 object-contain"
          />
          <p className="text-sm text-navy/70 max-w-3xs">{t.logotext}</p>
        </div>

        {/* Enlaces Rápidos */}
        <div>
          <h3 className="font-black text-navy tracking-tight">
            {t.quickLinksTitle}
          </h3>
          <nav className="mt-4 flex flex-col gap-2.5 text-sm font-medium text-navy/70">
            {FOOTER_LINKS.map(({ key, href }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-teal"
              >
                {t.links[key]}
              </Link>
            ))}
          </nav>
        </div>

        {/* Información de Contacto */}
        <div>
          <h3 className="font-black text-navy tracking-tight">
            {t.contactTitle}
          </h3>
          <div className="mt-4 flex flex-col gap-2.5 text-sm font-medium text-navy/70">
            <a
              href="mailto:contacto@laguaira.help"
              className="transition-colors hover:text-teal flex items-center gap-1"
            >
              contacto@laguaira.help
            </a>
          </div>
        </div>
      </div>

      {/* Créditos de Cierre */}
      <div className="border-t border-navy/10 py-6 text-center text-sm font-bold tracking-wide text-teal bg-navy">
        <p>
          {t.closingCredits} <span className="text-coral">❤️</span>
        </p>
        <p className="text-xs text-black/45 mt-4">
          {t.madeby}
          <a
            href="https://neuronadigital.cl/"
            className="text-xs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Neurona Digital IA
          </a>
        </p>
      </div>
    </footer>
  );
}
