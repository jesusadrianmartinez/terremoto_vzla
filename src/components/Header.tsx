"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { headerTranslations } from "@/data/sections/header";
import ButtonLanguage from "@/components/ui/ButtonLanguage";

// Mapeo estático de los enlaces de navegación para evitar duplicación estructural
const NAV_LINKS = [
  { key: "inicio", href: "#inicio" },
  { key: "transparencia", href: "#transparencia" },
  { key: "solicitar", href: "#solicitar" },
  { key: "ofrecer", href: "#ofrecer" },
  { key: "preguntas", href: "#preguntas" },
] as const;

export function Header() {
  // Captura del idioma desde tu reducer (por defecto "es")
  const language =
    useAppSelector((state) => state.languageReducer.language) || "es";
  const t = headerTranslations[language] || headerTranslations.es;

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/90 backdrop-blur transition-all">
      <div className="container-page flex h-20 items-center justify-between px-4">
        {/* Logo / Home link */}
        <Link href="#inicio" className="flex items-center gap-3 group">
          <Image
            src="/favicon.png"
            alt="La Guaira Help"
            width={50}
            height={50}
            className="rounded-full object-cover"
            priority
          />
          <div className="leading-tight">
            <p className="text-xl font-black tracking-tight text-navy">
              La Guaira <span className="text-teal">Help</span>
            </p>
            <p className="text-xs text-navy/70">{t.subtitle}</p>
          </div>
        </Link>

        {/* Navegación Desktop */}
        <nav className="hidden items-center gap-7 text-sm font-semibold text-navy/75 lg:flex">
          {NAV_LINKS.map(({ key, href }) => (
            <Link
              key={href}
              href={href}
              className="transition-colors duration-200 hover:text-teal"
            >
              {t.navItems[key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ButtonLanguage /> 
          <Link
            href="https://donate.stripe.com/fZu7sLgkH0yv8QXddq4800a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-coral px-5 py-3 text-sm font-bold text-white shadow-lg shadow-coral/25 transition-all duration-200 hover:bg-[#d85f41]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            {t.ctaButton}
          </Link>
        </div>
      </div>
    </header>
  );
}
