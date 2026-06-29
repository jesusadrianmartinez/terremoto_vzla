"use client";

import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import { heroTranslations } from "@/data/sections/hero";

export function Hero() {
  const language =
    useAppSelector((state) => state.languageReducer.language) || "es";
  const t = heroTranslations[language] || heroTranslations.es;

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-cream lg:bg-[linear-gradient(110deg,#FAFAF7_0%,#FAFAF7_52%,rgba(31,166,168,0.08)_52%,rgba(242,230,208,0.4)_100%)]"
    >
      <div className="container-page grid min-h-155 items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:py-24">
        {/* Bloque Izquierdo: Textos y Acciones */}
        <div className="flex flex-col items-start z-10">
          {/* Badge de Alerta */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-coral/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-coral">
            <span className="animate-pulse text-sm">⚠️</span> {t.badge}
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-navy sm:text-6xl md:text-7xl">
            LA GUAIRA <span className="text-teal">{t.titleHelp}</span>
          </h1>

          <p className="mt-5 text-xl font-black leading-snug text-navy sm:text-2xl md:text-3xl">
            {t.subheading}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy/80 md:text-lg">
            {t.description}
          </p>

          {/* Botones de Acción */}
          <div className="mt-8 flex flex-col sm:flex-row w-full sm:w-auto gap-4">
            <Link
              href="https://donate.stripe.com/fZu7sLgkH0yv8QXddq4800a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-coral px-8 py-4 text-lg font-black text-white shadow-xl shadow-coral/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#d85f41]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              {t.btnDonate}
            </Link>
          </div>
        </div>

        {/* Bloque Derecho: Imagen Fotográfica con Superposición Optimizada */}
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-[2.5rem] shadow-2xl shadow-navy/10 lg:aspect-square">
          <Image
            src="/la-guaira.jpg"
            alt={t.imgAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Degradado oscuro sutil en la base */}
          <div className="absolute inset-0 bg-linear-to-t from-navy/80 via-navy/20 to-transparent" />

          {/* Tarjeta inferior */}
          <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/90 p-6 backdrop-blur-sm border border-white/20 md:p-8 shadow-lg">
            <span className="text-4xl" role="img" aria-label="solidaridad">
              🤝
            </span>
            <h2 className="mt-3 text-2xl font-black text-navy md:text-3xl leading-tight">
              {t.cardTitle}
            </h2>
            <p className="mt-2 text-sm font-semibold text-navy/85 leading-relaxed">
              {t.cardDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
