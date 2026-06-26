import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#FAFAF7] lg:bg-[linear-gradient(110deg,#FAFAF7_0%,#FAFAF7_52%,rgba(31,166,168,0.08)_52%,rgba(242,230,208,0.4)_100%)]"
    >
      <div className="container-page grid min-h-155 items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:py-24">
        {/* Bloque Izquierdo: Textos y Acciones */}
        <div className="flex flex-col items-start z-10">
          {/* Badge de Alerta */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#E86F51]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#E86F51]">
            <span className="animate-pulse text-sm">⚠️</span> Emergencia
            Humanitaria
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-[#0B3A53] sm:text-6xl md:text-7xl">
            LA GUAIRA <span className="text-[#1FA6A8]">HELP</span>
          </h1>

          <p className="mt-5 text-xl font-black leading-snug text-[#0B3A53] sm:text-2xl md:text-3xl">
            Ayuda directa. Transparencia total.
            <br className="hidden sm:inline" /> Esperanza para La Guaira.
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#0B3A53]/80 md:text-lg">
            Una iniciativa ciudadana para brindar ayuda inmediata a las familias
            afectadas por el terremoto del 24 de junio de 2026 en Venezuela.
          </p>

          {/* Botones de Acción */}
          <div className="mt-8 flex flex-col sm:flex-row w-full sm:w-auto gap-4">
            <Link
              href="#donar"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#E86F51] px-8 py-4 text-lg font-black text-white shadow-xl shadow-[#E86F51]/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#d85f41]"
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
              Donar ahora
            </Link>

            <Link
              href="#transparencia"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#0B3A53]/15 bg-white px-8 py-4 text-lg font-bold text-[#0B3A53] shadow-sm transition-all duration-200 hover:bg-[#0B3A53]/5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5 text-[#E86F51]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>
              Emergencia Humanitaria
            </Link>
          </div>
        </div>

        {/* Bloque Derecho: Imagen Fotográfica Original u Optimización Visual */}
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-[2.5rem] shadow-2xl shadow-[#0B3A53]/10 lg:aspect-square">
          {/* OPCIÓN A: Si pones la fotografía real de la landing original */}
          {/* 
          <Image 
            src="/hero-volunteers.jpg" 
            alt="Voluntarios entregando cajas de ayuda de La Guaira Help"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          /> 
          */}

          {/* OPCIÓN B: Tu diseño de tarjeta actual ultra estilizado con cristalería (Glassmorphism) */}
          <div className="absolute inset-0 bg-linear-to-br from-[#F2E6D0] to-[#1FA6A8]/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.4),transparent_40%)]" />

          <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/70 p-6 backdrop-blur-md border border-white/40 md:p-8">
            <span className="text-5xl" role="img" aria-label="solidaridad">
              🤝
            </span>
            <h2 className="mt-4 text-2xl font-black text-[#0B3A53] md:text-3xl leading-tight">
              Solidaridad convertida en acción.
            </h2>
            <p className="mt-2 text-sm md:text-base font-medium text-[#0B3A53]/80 leading-relaxed">
              Apoyo directo, comprobantes públicos y actualización constante en
              tiempo real para todas las familias afectadas de la región.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
