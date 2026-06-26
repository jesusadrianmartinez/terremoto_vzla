import { Form } from "@/components/Form";
import { Hero } from "@/components/Hero";

import { emergencyData, storyData, missionData } from "@/data/sections/about";
import { aidAreasData, stepsData } from "@/data/sections/features";
import {
  metricsData,
  urgentNeedsData,
  transparencyPoints,
  tableExampleData,
} from "@/data/sections/transparency";
import { cryptoData, donationCountries } from "@/data/sections/donations";
import {
  teamData,
  principlesData,
  faqsData,
} from "@/data/sections/footerAndFaq";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfbf7] text-navy antialiased">
      {/* Hero principal */}
      <Hero />

      {/* 1. Bloque Inicial: Emergencia, Historia y Misión */}
      <section className="py-8 md:py-10 bg-[#fcfbf7]">
        <div className="container-page px-4 grid gap-6 md:grid-cols-12 items-stretch">
          {/* Emergencia Humanitaria */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-teal/10 rounded-full text-teal">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h2 className="text-sm font-black uppercase tracking-wider text-navy">
                  {emergencyData.title}
                </h2>
              </div>
              <div className="space-y-3 text-xs leading-relaxed text-navy/80">
                {emergencyData.paragraphs?.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Mi Historia (Con avatar/imagen simulada en el centro) */}
          <div className="md:col-span-5 border-x border-navy/10 px-0 md:px-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-1 flex items-center justify-center">
              <div className="w-full aspect-[3/4] bg-sand/30 rounded-2xl border border-navy/10 flex items-center justify-center text-xs font-bold text-navy/40 italic">
                [Foto Jesús]
              </div>
            </div>
            <div className="sm:col-span-2 flex flex-col justify-center">
              <h2 className="text-sm font-black uppercase tracking-wider text-navy mb-2">
                {storyData.title}
              </h2>
              <div className="text-xs leading-relaxed text-navy/80 space-y-2">
                <p>
                  Soy <strong>{storyData.author}</strong>, {storyData.context}
                </p>
                <p className="line-clamp-4">{storyData.details?.[0]}</p>
                <p className="line-clamp-3">{storyData.details?.[2]}</p>
                <p className="text-teal font-bold">{storyData.highlight}</p>
              </div>
            </div>
          </div>

          {/* Nuestra Misión */}
          <div className="md:col-span-3 flex flex-col justify-between bg-sand/10 p-4 rounded-2xl border border-sand/30">
            <div>
              <div className="flex items-center gap-2 mb-3 text-teal">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <h2 className="text-sm font-black uppercase tracking-wider text-navy">
                  {missionData.title}
                </h2>
              </div>
              <p className="text-xs font-medium leading-relaxed text-navy/90">
                {missionData.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-navy/5 container-page mx-auto" />

      {/* 2 y 3. Qué Hacemos y Cómo Funciona (Mismo bloque limpio y compacto) */}
      <section className="py-8 bg-white" id="que-hacemos">
        <div className="container-page px-4">
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            {/* Qué hacemos */}
            <div className="lg:col-span-7">
              <h3 className="text-xs font-black uppercase tracking-wider text-navy mb-4">
                ¿Qué hacemos?
              </h3>
              <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
                {aidAreasData.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-3 rounded-xl border border-navy/5 bg-[#fcfbf7]/60 flex flex-col justify-between min-h-[100px]"
                    >
                      <div className="text-teal mb-2">
                        <Icon size={18} strokeWidth={2.5} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-navy">
                          {item.title}
                        </h4>
                        <p className="text-[10px] text-navy/60 mt-0.5 leading-tight">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cómo funciona */}
            <div className="lg:col-span-5">
              <h3 className="text-xs font-black uppercase tracking-wider text-navy mb-4">
                Cómo funciona
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-2">
                {stepsData.map((step) => (
                  <div
                    key={step.number}
                    className="p-2 rounded-xl bg-cream/40 border border-navy/5 text-center flex flex-col items-center justify-center"
                  >
                    <div className="mb-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal text-[10px] font-black text-white">
                      {step.number}
                    </div>
                    <p className="text-[10px] font-bold text-navy leading-tight">
                      {step.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-navy/5 container-page mx-auto" />

      {/* 4 y 5. Transparencia y Estado de la Ayuda (Contiguos y densos) */}
      <section id="transparencia" className="py-8 bg-[#fcfbf7]">
        <div className="container-page px-4 grid gap-6 lg:grid-cols-12 items-start">
          {/* Puntos e Tabla */}
          <div className="lg:col-span-8 space-y-4">
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-navy mb-2">
                Transparencia
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs font-medium text-navy/80">
                {transparencyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <Check
                      size={13}
                      className="text-teal mt-0.5 shrink-0"
                      strokeWidth={3}
                    />
                    <span className="leading-tight">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tabla Compacta */}
            <div className="overflow-x-auto rounded-xl border border-navy/10 bg-white shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-navy/5 text-navy font-bold border-b border-navy/10">
                    <th className="p-2">Fecha</th>
                    <th className="p-2">Concepto</th>
                    <th className="p-2">Monto</th>
                    <th className="p-2">Estado</th>
                  </tr>
                </thead>
                <tbody className="text-navy/80 divide-y divide-navy/5">
                  {tableExampleData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-cream/40">
                      <td className="p-2 font-mono text-[11px]">{row.date}</td>
                      <td className="p-2 font-medium">{row.concept}</td>
                      <td
                        className={`p-2 font-bold ${row.statusType === "success" ? "text-teal" : "text-coral"}`}
                      >
                        {row.amount}
                      </td>
                      <td className="p-2">
                        <span
                          className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${
                            row.statusType === "success"
                              ? "bg-teal/10 text-teal"
                              : "bg-coral/10 text-coral"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Estado de la Ayuda (Métricas integradas en bloque lateral) */}
          <div className="lg:col-span-4 bg-white p-4 rounded-2xl border border-navy/10">
            <h3 className="text-xs font-black uppercase tracking-wider text-navy mb-3 text-center lg:text-left">
              Estado de la Ayuda
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
              {metricsData.map((stat) => (
                <div
                  key={stat.label}
                  className="p-2 rounded-xl bg-[#fcfbf7] border border-navy/5 text-center"
                >
                  <p className="text-[9px] font-bold uppercase tracking-wider text-navy/50">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xl font-black text-navy tracking-tight">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-navy/40 mt-3 text-center italic">
              Esta información se actualizará constantemente.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-navy/5 container-page mx-auto" />

      {/* 7. Necesidades más urgentes (Tags horizontales limpios) */}
      <section className="py-6 bg-white">
        <div className="container-page px-4">
          <h3 className="text-xs font-black uppercase tracking-wider text-navy mb-3">
            Necesidades más urgentes
          </h3>
          <div className="flex flex-wrap gap-2">
            {urgentNeedsData.map((need) => {
              const Icon = need.icon;
              return (
                <span
                  key={need.label}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-navy/5 bg-[#fcfbf7] px-3 py-1.5 text-xs font-bold text-navy shadow-2xs"
                >
                  <Icon size={13} className="text-teal" />
                  {need.label}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="border-navy/5 container-page mx-auto" />

      {/* 8 y 9. Donar y Formularios (Unificados estructuralmente en una grilla densa) */}
      <section id="donar" className="py-8 bg-[#fcfbf7]">
        <div className="container-page px-4 grid gap-6 lg:grid-cols-12 items-start">
          {/* Métodos de Donación */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-4 rounded-2xl border border-navy/10">
              <h3 className="text-xs font-black uppercase tracking-wider text-navy mb-3">
                Donar (Binance / Cripto)
              </h3>
              <div className="space-y-1.5 text-xs font-medium text-navy">
                {cryptoData.map((crypto) => (
                  <div
                    key={crypto.label}
                    className="flex justify-between items-center border-b border-navy/5 pb-1"
                  >
                    <span className="text-navy/60 font-bold">
                      {crypto.label}:
                    </span>
                    <span className="font-mono text-[11px] select-all break-all text-right max-w-[180px]">
                      {crypto.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-navy/10">
              <h3 className="text-xs font-black uppercase tracking-wider text-navy mb-2">
                Transferencias Bancarias
              </h3>
              <div className="flex flex-wrap gap-1 mb-2">
                {donationCountries.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className="rounded-lg bg-sand/30 hover:bg-sand/60 px-2.5 py-1 text-[11px] font-bold text-navy transition-colors"
                  >
                    {c}
                  </button>
                ))}
              </div>
              <p className="text-[10px] font-medium text-navy/60 bg-[#fcfbf7] p-2 rounded-lg border border-navy/5 italic">
                Info bancaria desplegable según país.
              </p>
            </div>
          </div>

          {/* Formulario Solicitar */}
          <div
            className="lg:col-span-4 bg-white p-4 rounded-2xl border border-navy/10"
            id="solicitar"
          >
            <h3 className="text-xs font-black uppercase tracking-wider text-navy">
              Solicitar Ayuda
            </h3>
            <p className="text-[10px] text-navy/60 mb-3">
              Solo para familias afectadas directamente.
            </p>
            <Form
              fields={[
                "Nombre completo",
                "Teléfono / WhatsApp",
                "Ubicación",
                "Necesidades prioritarias",
              ]}
              button="Enviar solicitud"
            />
          </div>

          {/* Formulario Ofrecer */}
          <div
            className="lg:col-span-3 bg-white p-4 rounded-2xl border border-navy/10"
            id="ofrecer"
          >
            <h3 className="text-xs font-black uppercase tracking-wider text-navy">
              Ofrecer Apoyo
            </h3>
            <p className="text-[10px] text-navy/60 mb-3">
              Voluntarios y logística.
            </p>
            <Form
              fields={[
                "Nombre",
                "Ubicación",
                "Teléfono",
                "¿Cómo deseas colaborar?",
              ]}
              button="Ofrecer ayuda"
            />
          </div>
        </div>
      </section>

      <hr className="border-navy/5 container-page mx-auto" />

      {/* 10 y 11. Equipo, Principios y FAQs */}
      <section className="py-8 bg-white" id="preguntas">
        <div className="container-page px-4 grid gap-6 lg:grid-cols-12 items-start">
          {/* Equipo y Principios */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-[#fcfbf7] p-4 rounded-2xl border border-navy/10">
              <h3 className="text-xs font-black uppercase tracking-wider text-navy mb-2">
                Nuestro Equipo
              </h3>
              <div className="text-xs text-navy/80 space-y-1">
                <p>
                  <strong>Coordinación:</strong> {teamData.coordination}
                </p>
                <p className="text-[11px] leading-tight">
                  <strong>Venezuela:</strong> {teamData.venezuela}
                </p>
              </div>
            </div>

            <div className="bg-[#fcfbf7] p-4 rounded-2xl border border-navy/10">
              <h3 className="text-xs font-black uppercase tracking-wider text-navy mb-2">
                Nuestros Principios
              </h3>
              <ul className="grid grid-cols-2 gap-1.5 text-[11px] font-medium text-navy/80">
                {principlesData.map((p) => {
                  const Icon = p.icon;
                  return (
                    <li key={p.text} className="flex items-center gap-1.5">
                      <Icon size={12} className="text-coral shrink-0" />
                      <span className="truncate">{p.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* FAQs Acordeón */}
          <div className="lg:col-span-6">
            <h3 className="text-xs font-black uppercase tracking-wider text-navy mb-3">
              Preguntas Frecuentes
            </h3>
            <div className="space-y-1.5">
              {faqsData.slice(0, 5).map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-navy/10 bg-[#fcfbf7] p-3 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between text-xs font-bold text-navy outline-none">
                    <span>{faq.question}</span>
                    <span className="text-teal text-xs group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-2 text-[11px] leading-relaxed text-navy/70 border-t border-navy/5 pt-1.5">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. Franja de Impacto final */}
      <section className="bg-navy text-white py-10">
        <div className="container-page px-4 text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium text-balance leading-relaxed text-white/90">
            "El terremoto ha dejado a muchas familias enfrentando pérdidas,
            incertidumbre y necesidades urgentes. Cada aporte, por pequeño que
            sea, puede convertirse en agua, alimentos, refugio o herramientas."
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <a
              href="#donar"
              className="rounded-xl bg-coral px-5 py-2.5 text-xs font-black text-white hover:bg-[#d85f41] transition-colors shadow-lg shadow-coral/10"
            >
              Donar ahora
            </a>
            <a
              href="#ofrecer"
              className="rounded-xl bg-teal px-5 py-2.5 text-xs font-black text-white hover:bg-teal/80 transition-colors"
            >
              Ofrecer ayuda
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
