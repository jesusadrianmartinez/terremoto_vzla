"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { headerTranslations } from "@/data/sections/header";
import ButtonLanguage from "@/components/ui/ButtonLanguage";

const NAV_LINKS = [
  { key: "inicio", href: "#inicio" },
  { key: "transparencia", href: "#transparencia" },
  { key: "solicitar", href: "#solicitar" },
  { key: "ofrecer", href: "#ofrecer" },
  { key: "preguntas", href: "#preguntas" },
] as const;

export function Header() {
  const language =
    useAppSelector((state) => state.languageReducer.language) || "es";
  const t = headerTranslations[language] || headerTranslations.es;

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/90 backdrop-blur transition-all">
      <div className="container-page flex h-20 items-center justify-between px-4 gap-2">
        {/* Logo / Home link */}
        <Link
          href="#inicio"
          className="flex items-center gap-2 sm:gap-3 shrink-0 group"
        >
          <Image
            src="/favicon.png"
            alt="La Guaira Help"
            width={40} // Un poco más pequeño en móvil ayuda a prevenir desbordes
            height={40}
            className="rounded-full object-cover sm:w-12.5 sm:h-12.5"
            priority
          />
          <div className="leading-tight">
            <p className="text-base sm:text-xl font-black tracking-tight text-navy whitespace-nowrap">
              La Guaira <span className="text-teal">Help</span>
            </p>
            {/* Limitamos el subtítulo en pantallas muy pequeñas */}
            <p className="text-[10px] sm:text-xs text-navy/70 max-w-30 sm:max-w-none truncate sm:whitespace-normal">
              {t.subtitle}
            </p>
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

        {/* Controles del lado derecho */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <ButtonLanguage />

          <Link
            href="https://donate.stripe.com/fZu7sLgkH0yv8QXddq4800a"
            target="_blank"
            rel="noopener noreferrer"
            title={t.ctaButton}
            /* px-3 py-2.5 para móvil (ícono solo), md:px-5 md:py-3 para el botón completo */
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-coral px-3 py-2.5 md:px-5 md:py-3 text-sm font-bold text-white shadow-lg shadow-coral/25 transition-all duration-200 hover:bg-[#d85f41]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-4 w-4 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            {/* Ocultamos el texto en móvil y se despliega desde 'md' en adelante */}
            <span className="hidden md:inline whitespace-nowrap">
              {t.ctaButton}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
