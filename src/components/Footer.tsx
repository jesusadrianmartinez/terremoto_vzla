import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#FAFAF7]">
      {/* Franja Superior de Conversión / Llamado a la Acción */}
      <div className="bg-[#0B3A53] text-white">
        <div className="container-page flex flex-col gap-6 px-4 py-8 md:grid md:grid-cols-[1fr_1.4fr_auto] md:items-center md:gap-8">
          <p className="text-base font-bold leading-snug md:text-lg">
            El terremoto ha dejado a muchas familias enfrentando pérdidas,
            incertidumbre y necesidades urgentes.
          </p>
          <p className="text-sm text-white/80 leading-relaxed">
            Cada aporte puede convertirse en agua, alimentos, refugio,
            transporte o herramientas para quienes hoy siguen luchando por salir
            adelante.
          </p>
          <div className="flex flex-wrap gap-3 sm:flex-nowrap">
            <Link
              href="https://donate.stripe.com/fZu7sLgkH0yv8QXddq4800a"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center sm:w-auto rounded-xl bg-[#E86F51] px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#d85f41] shadow-md shadow-[#E86F51]/10"
            >
              Donar ahora
            </Link>
            {/* <Link
              href="#ofrecer"
              className="w-full text-center sm:w-auto rounded-xl bg-[#1FA6A8] px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#178B8D] shadow-md shadow-[#1FA6A8]/10"
            >
              Ofrecer ayuda
            </Link> */}
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
        </div>

        {/* Enlaces Rápidos */}
        <div>
          <h3 className="font-black text-[#0B3A53] tracking-tight">
            Enlaces rápidos
          </h3>
          <nav className="mt-4 flex flex-col gap-2.5 text-sm font-medium text-[#0B3A53]/70">
            <Link
              href="#inicio"
              className="transition-colors hover:text-[#1FA6A8]"
            >
              Inicio
            </Link>
            <Link
              href="#transparencia"
              className="transition-colors hover:text-[#1FA6A8]"
            >
              Transparencia
            </Link>
            <Link
              href="#solicitar"
              className="transition-colors hover:text-[#1FA6A8]"
            >
              Solicitar ayuda
            </Link>
            <Link
              href="#ofrecer"
              className="transition-colors hover:text-[#1FA6A8]"
            >
              Ofrecer ayuda
            </Link>
          </nav>
        </div>

        {/* Información de Contacto */}
        <div>
          <h3 className="font-black text-[#0B3A53] tracking-tight">Contacto</h3>
          <div className="mt-4 flex flex-col gap-2.5 text-sm font-medium text-[#0B3A53]/70">
            <a
              href="mailto:contacto@laguaira.help"
              className="transition-colors hover:text-[#1FA6A8] flex items-center gap-1"
            >
              contacto@laguaira.help
            </a>
            {/* <a
              href="https://wa.me/584121234567"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#1FA6A8]"
            >
              +58 412-1234567
            </a> */}
          </div>
        </div>
      </div>

      {/* Créditos de Cierre */}
      <div className="border-t border-[#0B3A53]/10 py-6 text-center text-xs font-bold tracking-wide text-[#1FA6A8] bg-[#FAFAF7]">
        La Guaira somos todos. <span className="text-[#E86F51]">❤️</span>
      </div>
    </footer>
  );
}
