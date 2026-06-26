import Image from "next/image";
import Link from "next/link"; // Preparado para el ecosistema Next.js

// 1. Tipado estricto como tupla readonly para mayor seguridad en TS
const NAV_ITEMS: readonly [label: string, href: string][] = [
  ["Inicio", "#inicio"],
  ["Transparencia", "#transparencia"],
  ["Solicitar ayuda", "#solicitar"],
  ["Ofrecer ayuda", "#ofrecer"],
  ["Preguntas", "#preguntas"],
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0B3A53]/10 bg-[#FAFAF7]/90 backdrop-blur transition-all">
      <div className="container-page flex h-20 items-center justify-between px-4">
        {/* Logo / Home link */}
        <Link href="#inicio" className="flex items-center gap-3 group">
          <Image
            src="/favicon.png"
            alt="La Guaira Help"
            width={50}
            height={50}
            className="rounded-full object-cover"
            priority // Prioridad de carga por estar en el Above the Fold (Hero/Header)
          />
          <div className="leading-tight">
            <p className="text-xl font-black tracking-tight text-[#0B3A53]">
              La Guaira <span className="text-[#1FA6A8]">Help</span>
            </p>
            <p className="text-xs text-[#0B3A53]/70">
              Ayuda directa a familias afectadas
            </p>
          </div>
        </Link>

        {/* Navegación Desktop */}
        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#0B3A53]/75 lg:flex">
          {NAV_ITEMS.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="transition-colors duration-200 hover:text-[#1FA6A8]"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Botón de Acción Principal */}
        <Link
          href="#donar"
          className="inline-flex items-center gap-2 rounded-xl bg-[#E86F51] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#E86F51]/25 transition-all duration-200 hover:bg-[#d85f41] hover:shadow-[#E86F51]/40"
        >
          {/* Reemplacé el emoji nativo por un SVG embebido idéntico al de la landing original */}
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
          Donar ahora
        </Link>
      </div>
    </header>
  );
}
