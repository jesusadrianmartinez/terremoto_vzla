"use client";

import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { bankDonationsTranslations } from "@/data/sections/bankDonations";

type CountryKey = "canada" | "chile" | "venezuela";

export function BankDonations() {
  const language =
    useAppSelector((state) => state.languageReducer.language) || "es";
  const t = bankDonationsTranslations[language] || bankDonationsTranslations.es;

  // Controlamos el estado usando las llaves fijas del objeto translatable
  const [selectedCountry, setSelectedCountry] =
    useState<CountryKey>("venezuela");
  const details = t.banks[selectedCountry];

  return (
    <div className="bg-white p-4 rounded-2xl border border-navy/10">
      <h3 className="text-sm font-black uppercase tracking-wider text-navy mb-3">
        {t.title}
      </h3>

      {/* Botones de Selección */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {(Object.keys(t.banks) as CountryKey[]).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setSelectedCountry(key)}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
              selectedCountry === key
                ? "bg-teal text-white shadow-xs"
                : "bg-sand/30 hover:bg-sand/60 text-navy"
            }`}
          >
            {t.banks[key].countryLabel}
          </button>
        ))}
      </div>

      {/* Contenedor de Información Dinámica */}
      {details ? (
        <div className="text-xs font-medium text-navy space-y-2 bg-[#fcfbf7] p-3 rounded-xl border border-navy/5 animate-fadeIn">
          <div>
            <span className="text-navy/50 text-xs uppercase font-bold block">
              {t.recipientLabel}
            </span>
            <span className="text-navy font-bold">{details.recipient}</span>
          </div>

          {details.bankName && (
            <div>
              <span className="text-navy/50 text-xs uppercase font-bold block">
                {t.bankLabel}
              </span>
              <span>{details.bankName}</span>
            </div>
          )}

          {details.idNumber && (
            <div>
              <span className="text-navy/50 text-xs uppercase font-bold block">
                {selectedCountry === "chile" ? "RUT" : t.idLabel}
              </span>
              <span className="font-mono text-xs select-all">
                {details.idNumber}
              </span>
            </div>
          )}

          {details.accountNumber && (
            <div>
              <span className="text-navy/50 text-xs uppercase font-bold block">
                {t.accountLabel}
              </span>
              <span className="font-mono text-[11px] break-all select-all block bg-white px-2 py-1 rounded border border-navy/5 mt-0.5">
                {details.accountNumber}
              </span>
            </div>
          )}

          {details.phone && (
            <div>
              <span className="text-navy/50 text-xs uppercase font-bold block">
                {t.phoneLabel}
              </span>
              <span className="font-mono">{details.phone}</span>
            </div>
          )}

          {details.email && (
            <div>
              <span className="text-navy/50 text-xs uppercase font-bold block">
                {t.emailLabel}
              </span>
              <span className="font-mono select-all text-teal">
                {details.email}
              </span>
            </div>
          )}

          {details.notes && (
            <div className="mt-2 pt-2 border-t border-navy/5 text-xs text-navy/60 italic leading-snug">
              <strong>
                {language === "es"
                  ? "Nota:"
                  : language === "fr"
                    ? "Note :"
                    : "Note:"}
              </strong>{" "}
              {details.notes}
            </div>
          )}
        </div>
      ) : (
        <p className="text-xs text-navy/40 italic text-center py-4">
          {t.selectCountry}
        </p>
      )}
    </div>
  );
}
