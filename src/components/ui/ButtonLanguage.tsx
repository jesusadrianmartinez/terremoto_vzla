"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setLanguage } from "@/redux/features/languageSlice";

type Lang = "es" | "en" | "fr";

export default function ButtonLanguage() {
  const dispatch = useAppDispatch();
  const language = (useAppSelector((state) => state.languageReducer.language) ||
    "es") as Lang;

  const changeLanguage = (lang: Lang) => {
    dispatch(setLanguage(lang));
  };

  // Clases dinámicas según el idioma activo
  const getLangClass = (current: Lang) => {
    return language === current
      ? "text-white font-black"
      : "text-navy/60 hover:text-navy font-bold";
  };

  // Manejo del desplazamiento del fondo deslizante (3 posiciones)
  const translateClass = {
    es: "translate-x-0",
    en: "translate-x-full",
    fr: "translate-x-[200%]",
  }[language];

  return (
    <div
      role="radiogroup"
      aria-label="Change language"
      className="relative inline-flex h-10 w-28 items-center rounded-xl p-1 select-none bg-navy/5 border border-navy/10"
    >
      <div className="relative grid h-8 w-full grid-cols-3 items-center rounded-lg overflow-hidden">
        {/* Fondo deslizante que cubre exactamente 1/3 del contenedor */}
        <span
          aria-hidden="true"
          className={`absolute inset-y-0 left-0 z-0 w-1/3 rounded-lg shadow-xs bg-teal transition-transform duration-200 ease-out ${translateClass}`}
        />

        {/* Opción ES */}
        <button
          type="button"
          className={`relative z-10 h-full w-full flex items-center justify-center text-xs transition-colors duration-200 focus:outline-none ${getLangClass("es")}`}
          onClick={() => changeLanguage("es")}
        >
          ES
        </button>

        {/* Opción EN */}
        <button
          type="button"
          className={`relative z-10 h-full w-full flex items-center justify-center text-xs transition-colors duration-200 focus:outline-none ${getLangClass("en")}`}
          onClick={() => changeLanguage("en")}
        >
          EN
        </button>

        {/* Opción FR */}
        <button
          type="button"
          className={`relative z-10 h-full w-full flex items-center justify-center text-xs transition-colors duration-200 focus:outline-none ${getLangClass("fr")}`}
          onClick={() => changeLanguage("fr")}
        >
          FR
        </button>
      </div>
    </div>
  );
}
