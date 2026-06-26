import { Card } from "@/components/Card";
import { Form } from "@/components/Form";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { aidAreas, faqs, stats, steps, urgentNeeds } from "@/lib/content";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF7]">
      {/* Sección Hero principal */}
      <Hero />

      {/* 1. Contexto de la Emergencia e Historia */}
      <section className="py-16 md:py-24">
        <div className="container-page grid gap-6 px-4 lg:grid-cols-[1.1fr_1.2fr_0.9fr]">
          <Card>
            <h2 className="text-xl font-black uppercase tracking-tight text-[#0B3A53]">
              Emergencia Humanitaria
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#0B3A53]/80">
              <p>
                El terremoto del 24 de junio de 2026 cambió la vida de miles de
                familias venezolanas en cuestión de segundos.
              </p>
              <p>
                Mientras continúan las labores de búsqueda y rescate, muchas
                personas permanecen sin acceso a agua potable, alimentos,
                medicamentos, transporte o un lugar seguro donde dormir.
              </p>
              <p>
                En muchas comunidades, los primeros en responder han sido los
                propios vecinos, familiares y voluntarios, quienes continúan
                trabajando con recursos muy limitados.
              </p>
              <p className="font-bold text-[#0B3A53]">
                La Guaira Help nace para convertir la solidaridad de personas
                dentro y fuera de Venezuela en ayuda directa para quienes más la
                necesitan.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-black uppercase tracking-tight text-[#0B3A53]">
              Mi historia
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#0B3A53]/80">
              <p>
                Soy <strong>Jesús Adrián Martínez Lozada</strong>, venezolano,
                ingeniero y emprendedor. Actualmente coordino proyectos entre
                Montreal, Canadá, y Chile.
              </p>
              <p>
                El 24 de junio de 2026 mi madre se encontraba en el apartamento
                8-A del edificio Rita Mar Palace, en El Palmar Oeste, La Guaira,
                cuando ocurrió el terremoto.
              </p>
              <p>
                Hasta este momento no hemos podido confirmar su situación.
                Vecinos y voluntarios continúan removiendo escombros con
                recursos muy limitados en la búsqueda de sobrevivientes.
              </p>
              <p>
                La madre de mi esposa, Mónica, también quedó atrapada en Playa
                Grande durante el terremoto y lamentablemente fue encontrada sin
                vida.
              </p>
              <p>
                Como muchos venezolanos en el exterior, la distancia me impide
                ayudar físicamente. Por esa razón decidimos crear La Guaira
                Help.
              </p>
              <p className="font-black text-[#0B3A53] border-t border-[#0B3A53]/10 pt-3">
                No representamos a ningún partido político, organización
                gubernamental ni institución religiosa. Solo queremos ayudar.
              </p>
            </div>
          </Card>

          <Card className="bg-[#F2E6D0]/40 border-[#F2E6D0]">
            <h2 className="text-xl font-black uppercase tracking-tight text-[#0B3A53]">
              Nuestra misión
            </h2>
            <p className="mt-6 text-xl font-medium leading-relaxed text-[#0B3A53]/90 text-balance">
              Transformar cada donación en ayuda inmediata para las personas
              afectadas por el terremoto mediante una gestión transparente,
              responsable y verificable.
            </p>
          </Card>
        </div>
      </section>

      {/* 2. Qué hacemos */}
      <section className="bg-white py-16 md:py-24" id="que-hacemos">
        <div className="container-page px-4">
          <SectionTitle
            eyebrow="¿Qué hacemos?"
            title="Cubrimos necesidades urgentes"
            text="Las donaciones serán utilizadas para cubrir prioridades humanitarias inmediatas."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aidAreas.map(([title, text]) => (
              <Card key={title} className="bg-[#FAFAF7]/50">
                <div className="mb-4 text-2xl font-black text-[#1FA6A8]">◇</div>
                <h3 className="font-black text-[#0B3A53]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#0B3A53]/70">
                  {text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Cómo funciona */}
      <section className="py-16 md:py-24">
        <div className="container-page px-4">
          <SectionTitle
            eyebrow="Cómo funciona"
            title="Proceso simple y verificable"
          />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {steps.map((step, index) => (
              <Card
                key={step}
                className="text-center flex flex-col items-center"
              >
                <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1FA6A8] text-base font-black text-white shadow-md shadow-[#1FA6A8]/20">
                  {index + 1}
                </div>
                <p className="text-sm font-bold text-[#0B3A53] leading-snug">
                  {step}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Transparencia y Tabla de Seguimiento */}
      <section id="transparencia" className="bg-white py-16 md:py-24">
        <div className="container-page grid gap-8 px-4 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Transparencia"
              title="Cada aporte será registrado públicamente"
            />
            <ul className="space-y-3 font-medium text-sm text-[#0B3A53]/80">
              <li className="flex items-start gap-2">
                <span>✓</span> Cada aporte recibido será registrado
                públicamente.
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span> Cada gasto realizado será documentado.
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span> Publicaremos fecha, concepto, monto recibido,
                monto utilizado y comprobantes cuando sea posible.
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span> No publicaremos información que comprometa la
                seguridad o privacidad de las personas beneficiarias.
              </li>
            </ul>
          </div>
          <Card className="bg-[#FAFAF7]/30">
            <h3 className="mb-4 font-black text-[#0B3A53]">
              Ejemplo de seguimiento público
            </h3>
            <div className="overflow-x-auto rounded-xl border border-[#0B3A53]/10 bg-white">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-[#0B3A53]/5 text-[#0B3A53] font-bold">
                    <th className="p-3">Fecha</th>
                    <th className="p-3">Concepto</th>
                    <th className="p-3">Monto</th>
                    <th className="p-3">Estado</th>
                  </tr>
                </thead>
                <tbody className="text-[#0B3A53]/80 divide-y divide-[#0B3A53]/10">
                  <tr className="hover:bg-[#FAFAF7]">
                    <td className="p-3 font-mono text-xs">24/06/2026</td>
                    <td className="p-3 font-medium">Donación recibida</td>
                    <td className="p-3 font-bold text-[#1FA6A8]">$100</td>
                    <td className="p-3">
                      <span className="inline-block rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
                        Recibido
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAFAF7]">
                    <td className="p-3 font-mono text-xs">25/06/2026</td>
                    <td className="p-3 font-medium">Compra de agua</td>
                    <td className="p-3 font-bold text-[#E86F51]">$80</td>
                    <td className="p-3">
                      <span className="inline-block rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-bold text-orange-800">
                        Ejecutado
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAFAF7]">
                    <td className="p-3 font-mono text-xs">25/06/2026</td>
                    <td className="p-3 font-medium">Kits de alimentos</td>
                    <td className="p-3 font-bold text-[#E86F51]">$120</td>
                    <td className="p-3">
                      <span className="inline-block rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-bold text-orange-800">
                        Ejecutado
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* 5. Estado de la Ayuda (Métricas) */}
      <section className="py-16 md:py-24">
        <div className="container-page px-4">
          <SectionTitle
            eyebrow="Estado de la ayuda"
            title="Indicadores iniciales"
            text="Esta información será actualizada constantemente."
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {stats.map(([label, value]) => (
              <Card
                key={label}
                className="text-center flex flex-col justify-between py-5"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-[#0B3A53]/50">
                  {label}
                </p>
                <p className="mt-4 text-3xl font-black text-[#0B3A53] tracking-tight">
                  {value}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Actualizaciones Periódicas en Bloque */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-page px-4">
          <SectionTitle
            eyebrow="Actualizaciones"
            title="Información periódica"
            text="Aquí publicaremos nuevas compras, entregas, necesidades urgentes, estado de operaciones y avances de rescate. Objetivo: actualizar cada 3 o 4 horas mientras la emergencia lo requiera."
          />
          <Card className="bg-[#FAFAF7]/60 border-dashed border-2 flex items-center justify-center py-10">
            <p className="text-sm font-medium text-[#0B3A53]/60 italic">
              📌 Pendiente de la primera actualización oficial del equipo en el
              terreno.
            </p>
          </Card>
        </div>
      </section>

      {/* 7. Tags de Necesidades más urgentes */}
      <section className="py-16 md:py-24">
        <div className="container-page px-4">
          <SectionTitle
            eyebrow="Necesidades más urgentes"
            title="Prioridades actuales"
          />
          <div className="flex flex-wrap gap-3">
            {urgentNeeds.map((need) => (
              <span
                key={need}
                className="rounded-xl border border-[#1FA6A8]/20 bg-white px-5 py-3 text-sm font-bold text-[#0B3A53] shadow-xs"
              >
                {need}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Métodos de Donación */}
      <section id="donar" className="bg-white py-16 md:py-24">
        <div className="container-page grid gap-6 px-4 lg:grid-cols-2">
          <Card>
            <SectionTitle
              eyebrow="Donar"
              title="Binance y cripto"
              className="mb-6"
            />
            <div className="grid gap-3.5 text-sm font-medium text-[#0B3A53]">
              {[
                ["UID", "000000000"],
                ["Email", "tu@email.com"],
                ["USDT TRC20", "TXxxxxxxxxxxxxxxxxxxxx"],
                ["BTC", "bc1xxxxxxxxxxxxxxxxxxxx"],
                ["ETH", "0x00000000000000000000"],
              ].map(([crypto, address]) => (
                <p
                  key={crypto}
                  className="flex flex-col sm:flex-row sm:items-center gap-1 border-b border-[#0B3A53]/5 pb-2"
                >
                  <strong className="w-28 text-[#0B3A53]/60">{crypto}:</strong>
                  <span className="font-mono text-xs select-all break-all">
                    {address}
                  </span>
                </p>
              ))}
              <div className="mt-4 flex h-32 w-32 items-center justify-center rounded-2xl border border-[#0B3A53]/10 bg-[#FAFAF7] text-xs font-bold text-[#0B3A53]/40">
                Código QR
              </div>
            </div>
          </Card>

          <Card>
            <SectionTitle
              eyebrow="Transferencias"
              title="Información bancaria"
              className="mb-6"
            />
            <div className="mb-5 flex flex-wrap gap-2">
              {["Canadá", "Estados Unidos", "Chile", "México", "Venezuela"].map(
                (c) => (
                  <button
                    type="button"
                    className="rounded-xl bg-[#F2E6D0]/50 hover:bg-[#F2E6D0] px-4 py-2 text-xs font-bold text-[#0B3A53] transition-colors"
                    key={c}
                  >
                    {c}
                  </button>
                ),
              )}
            </div>
            <p className="text-sm font-medium text-[#0B3A53]/60 bg-[#FAFAF7] p-4 rounded-xl border border-[#0B3A53]/5 italic">
              ℹ️ Selecciona un país arriba para desplegar los números de cuenta
              correspondientes.
            </p>
          </Card>
        </div>
      </section>

      {/* 9. Formularios de Captación */}
      <section className="py-16 md:py-24">
        <div className="container-page grid gap-6 px-4 lg:grid-cols-2">
          <Card id="solicitar">
            <SectionTitle
              eyebrow="Solicitar ayuda"
              title="Formulario para familias afectadas"
              text="Solicitaremos únicamente la información necesaria para evaluar y coordinar la ayuda."
            />
            <Form
              fields={[
                "Nombre completo",
                "Teléfono o WhatsApp",
                "Ubicación",
                "Número de personas afectadas",
                "Necesidades prioritarias",
                "¿Hay niños, adultos mayores o personas con discapacidad?",
                "Persona de referencia (opcional)",
              ]}
              button="Enviar solicitud"
            />
          </Card>

          <Card id="ofrecer">
            <SectionTitle
              eyebrow="Ofrecer ayuda"
              title="Voluntarios y apoyo logístico"
              text="Puedes colaborar con distribución, transporte, verificación, compras, traducciones, diseño, desarrollo web, comunicación o difusión."
            />
            <Form
              fields={[
                "Nombre",
                "País",
                "Ciudad",
                "Teléfono",
                "Correo electrónico",
                "¿Cómo deseas colaborar?",
              ]}
              button="Ofrecer ayuda"
            />
          </Card>
        </div>
      </section>

      {/* 10. Equipo y Principios */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-page grid gap-6 px-4 lg:grid-cols-2">
          <Card>
            <SectionTitle
              eyebrow="Nuestro equipo"
              title="Iniciativa ciudadana"
            />
            <div className="space-y-4 text-base text-[#0B3A53]/80 leading-relaxed">
              <p>
                <strong>Coordinación General:</strong> Jesús Adrián Martínez
                Lozada y Mónica.
              </p>
              <p>
                <strong>Equipo en Venezuela:</strong> Juan Carlos, Sofía,
                Mariana, Juan Román, amigos y voluntarios comprometidos con las
                labores de apoyo y verificación.
              </p>
            </div>
          </Card>
          <Card>
            <SectionTitle
              eyebrow="Nuestros principios"
              title="Cómo trabajamos"
            />
            <ul className="space-y-2.5 text-sm font-medium text-[#0B3A53]/80">
              {[
                "Ayuda directa a personas afectadas.",
                "Transparencia total en el manejo de los fondos.",
                "Respeto absoluto por la dignidad y privacidad de las víctimas.",
                "Priorización basada en urgencia y verificación.",
                "Independencia política, partidista y religiosa.",
                "Rendición pública de cuentas.",
              ].map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="text-[#E86F51]">❤️</span> {p}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* 11. FAQ Bloque desplegable */}
      <section id="preguntas" className="py-16 md:py-24">
        <div className="container-page px-4">
          <SectionTitle eyebrow="Preguntas frecuentes" title="Dudas comunes" />
          <div className="grid gap-3 max-w-4xl">
            {faqs.map(([q, a]) => (
              <details
                key={q}
                className="group rounded-2xl border border-[#0B3A53]/10 bg-white p-5 shadow-xs [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between font-black text-[#0B3A53] outline-none">
                  <span>{q}</span>
                  <span className="ml-1.5 shrink-0 rounded-full bg-[#1FA6A8]/10 p-1.5 text-[#1FA6A8] transition-transform duration-200 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/xl"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-[#0B3A53]/70 border-t border-[#0B3A53]/5 pt-3">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Cierre Final de Impacto */}
      <section className="bg-[#0B3A53] text-white py-20 md:py-28">
        <div className="container-page px-4 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-black md:text-5xl tracking-tight text-balance leading-tight">
            Gracias por ayudar a transformar la solidaridad en acciones
            concretas.
          </h2>
          <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed text-balance">
            Cada aporte, por pequeño que sea, puede convertirse en agua,
            alimentos, refugio, transporte o herramientas para quienes hoy
            siguen luchando por salir adelante.
          </p>
          <a
            href="#donar"
            className="mt-10 inline-flex rounded-2xl bg-[#E86F51] px-8 py-4 text-lg font-black text-white shadow-xl shadow-[#E86F51]/20 transition-transform hover:-translate-y-0.5 hover:bg-[#d85f41]"
          >
            Donar ahora
          </a>
        </div>
      </section>
    </main>
  );
}
