"use client";

import { FormEvent, useState } from "react";

export interface FormProps {
  fields: string[];
  button: string;
}

export function Form({ fields, button }: FormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Aquí conectarás la lógica con tu API Route o Server Action en el futuro
    // p.ej., await fetch('/api/solicitudes', { method: 'POST', ... })

    setTimeout(() => {
      setIsSubmitting(false);
      alert("Información enviada con éxito.");
    }, 1000);
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      {fields.map((field) => {
        // Detectamos campos largos para usar un textarea más cómodo
        const isLongText =
          field.includes("¿") ||
          field.includes("Necesidades") ||
          field.includes("colaborar");

        // Asignamos tipos de input nativos semánticos para mejor UX en móviles
        let inputType = "text";
        if (
          field.toLowerCase().includes("correo") ||
          field.toLowerCase().includes("email")
        ) {
          inputType = "email";
        } else if (
          field.toLowerCase().includes("teléfono") ||
          field.toLowerCase().includes("whatsapp")
        ) {
          inputType = "tel";
        } else if (field.toLowerCase().includes("número")) {
          inputType = "number";
        }

        return (
          <label
            key={field}
            className="grid gap-1.5 text-sm font-bold text-[#0B3A53]"
          >
            {field}
            {isLongText ? (
              <textarea
                rows={3}
                required
                className="w-full rounded-xl border border-[#0B3A53]/15 bg-white px-4 py-3 text-sm font-normal text-[#0B3A53] outline-none transition-all placeholder-[#0B3A53]/40 focus:border-[#1FA6A8] focus:ring-2 focus:ring-[#1FA6A8]/10 resize-none"
                placeholder={`Escribe aquí sobre: ${field.toLowerCase()}...`}
              />
            ) : (
              <input
                type={inputType}
                required={!field.toLowerCase().includes("opcional")}
                className="w-full rounded-xl border border-[#0B3A53]/15 bg-white px-4 py-3 text-sm font-normal text-[#0B3A53] outline-none transition-all placeholder-[#0B3A53]/40 focus:border-[#1FA6A8] focus:ring-2 focus:ring-[#1FA6A8]/10"
                placeholder={field}
              />
            )}
          </label>
        );
      })}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex items-center justify-center rounded-xl bg-[#1FA6A8] px-5 py-3.5 text-sm font-black text-white shadow-md shadow-[#1FA6A8]/10 transition-all hover:bg-[#178B8D] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg
              className="h-4 w-4 animate-spin text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Procesando...
          </span>
        ) : (
          button
        )}
      </button>
    </form>
  );
}
