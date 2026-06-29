"use client";

import { useMemo, useState, FormEvent } from "react";
import { useAppSelector } from "@/redux/hooks";
import { useSendDataMutation } from "@/redux/services/formAPI";
import { FormField } from "@/types/FormFieldType";

type FormValues = Record<string, string>;
type FormErrors = Record<string, string>;

type SolicitarAyudaPayload = {
  formType: "solicitar_ayuda";
  fullName: string;
  phone: string;
  location: string;
  needs: string;
};

type OfrecerAyudaPayload = {
  formType: "ofrecer_ayuda";
  firstName: string;
  location: string;
  phone: string;
  collaboration: string;
};

type FormData = SolicitarAyudaPayload | OfrecerAyudaPayload;

interface FormProps {
  fields: FormField[];
  button: string;
  formType: "solicitar_ayuda" | "ofrecer_ayuda";
}

// Mensajes de estado del formulario internacionalizados
const statusTranslations = {
  es: {
    loading: "Enviando...",
    error: "No se pudo procesar la solicitud. Inténtalo de nuevo.",
    success: "¡Registrado con éxito! Gracias por tu apoyo.",
  },
  en: {
    loading: "Sending...",
    error: "Could not process your request. Please try again.",
    success: "Successfully registered! Thank you for your support.",
  },
  fr: {
    loading: "Envoi en cours...",
    error: "Impossible de traiter la demande. Veuillez réessayer.",
    success: "Enregistré avec succès ! Merci pour votre soutien.",
  },
};

export function Form({ fields, button, formType }: FormProps) {
  // Extraemos dinámicamente el idioma del estado global de Redux
  const language = useAppSelector((state) => state.languageReducer.language) || "es";
  const statusText = statusTranslations[language] || statusTranslations.es;

  const [sendData, { isLoading, isSuccess, isError, reset }] =
    useSendDataMutation();

  const initialValues = useMemo<FormValues>(() => {
    return fields.reduce((acc, field) => {
      acc[field.key] = "";
      return acc;
    }, {} as FormValues);
  }, [fields]);

  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = (fieldKey: string, value: string) => {
    const field = fields.find((item) => item.key === fieldKey);
    if (!field) return "";

    const trimmedValue = value.trim();

    for (const rule of field.rules ?? []) {
      if (rule.type === "required" && !trimmedValue) {
        return rule.message[language] || rule.message["es"];
      }

      if (
        rule.type === "minLength" &&
        typeof rule.value === "number" &&
        trimmedValue.length < rule.value
      ) {
        return rule.message[language] || rule.message["es"];
      }

      if (
        rule.type === "pattern" &&
        rule.value instanceof RegExp &&
        trimmedValue
      ) {
        const pattern = new RegExp(rule.value);
        if (!pattern.test(trimmedValue)) {
          return rule.message[language] || rule.message["es"];
        }
      }
    }

    return "";
  };

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    for (const field of fields) {
      const error = validateField(field.key, values[field.key] ?? "");
      if (error) {
        nextErrors[field.key] = error;
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (key: string, newValue: string) => {
    reset();

    setValues((prev) => ({
      ...prev,
      [key]: newValue,
    }));

    if (!errors[key]) return;

    const nextError = validateField(key, newValue);
    setErrors((prev) => {
      if (!nextError) {
        const { [key]: _removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [key]: nextError };
    });
  };

  const handleBlur = (key: string) => {
    const nextError = validateField(key, values[key] ?? "");
    setErrors((prev) => {
      if (!nextError) {
        const { [key]: _removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [key]: nextError };
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    reset();

    if (!validateForm()) return;

    const payload = {
      formType,
      ...Object.fromEntries(
        Object.entries(values).map(([key, value]) => [key, value.trim()]),
      ),
    } as FormData;

    try {
      console.log("Enviando datos del formulario:", payload);

      await sendData(payload).unwrap();

      setValues(initialValues);
      setErrors({});
    } catch (submitError) {
      console.error("Error submitting form:", submitError);
    }
  };

  const isOfrecer = formType === "ofrecer_ayuda";
  const buttonStyle = isOfrecer
    ? "bg-teal hover:bg-teal/90 shadow-teal/15"
    : "bg-coral hover:bg-coral/90 shadow-coral/25";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-3 mt-4 text-left"
    >
      {fields.map((field) => {
        const fieldId = `landing-form-${field.key}`;
        const error = errors[field.key];

        return (
          <div key={field.key} className="space-y-1">
            <label
              htmlFor={fieldId}
              className="block text-[11px] font-black uppercase tracking-wider text-navy/70"
            >
              {field.label[language] || field.label["es"]}
            </label>

            <input
              id={fieldId}
              name={field.key}
              type={field.inputType}
              autoComplete={field.autoComplete}
              value={values[field.key] ?? ""}
              onChange={(event) => handleChange(field.key, event.target.value)}
              onBlur={() => handleBlur(field.key)}
              placeholder={field.placeholder?.[language] ?? field.placeholder?.["es"] ?? ""}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? `${fieldId}-error` : undefined}
              className={`w-full rounded-xl border bg-[#fcfbf7]/50 px-3 py-2 text-xs font-medium text-navy outline-none transition ${
                error
                  ? "border-red-500 bg-red-50/20 ring-1 ring-red-200"
                  : "border-navy/10 focus:border-navy/30 focus:bg-white focus:ring-2 focus:ring-navy/5"
              }`}
            />

            {error && (
              <p
                id={`${fieldId}-error`}
                className="text-[10px] font-bold text-red-600 animate-fadeIn"
              >
                {error}
              </p>
            )}
          </div>
        );
      })}

      <div className="pt-2">
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full inline-flex h-9 items-center justify-center rounded-xl px-4 text-xs font-bold text-white shadow-lg transition-all disabled:opacity-50 ${buttonStyle}`}
        >
          {isLoading ? statusText.loading : button}
        </button>

        {isError && (
          <p className="mt-2 text-center text-[10px] font-bold text-red-600">
            {statusText.error}
          </p>
        )}

        {isSuccess && (
          <p className="mt-2 text-center text-[10px] font-bold text-teal">
            {statusText.success}
          </p>
        )}
      </div>
    </form>
  );
}