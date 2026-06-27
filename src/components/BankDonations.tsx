'use client';

import { useState } from "react";
import { donationCountries, bankDonationsData } from "@/data/sections/donations";

export function BankDonations() {
  const [selectedCountry, setSelectedCountry] = useState<string>("Canadá");
  const details = bankDonationsData[selectedCountry];

  return (
    <div className="bg-white p-4 rounded-2xl border border-navy/10">
      <h3 className="text-xs font-black uppercase tracking-wider text-navy mb-3">
        Transferencias Bancarias
      </h3>
      
      {/* Botones de Selección */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {donationCountries.map((country) => (
          <button
            key={country}
            type="button"
            onClick={() => setSelectedCountry(country)}
            className={`rounded-lg px-3 py-1.5 text-[11px] font-bold transition-colors ${
              selectedCountry === country
                ? "bg-teal text-white shadow-xs"
                : "bg-sand/30 hover:bg-sand/60 text-navy"
            }`}
          >
            {country}
          </button>
        ))}
      </div>

      {/* Contenedor de Información Dinámica */}
      {details ? (
        <div className="text-xs font-medium text-navy space-y-2 bg-[#fcfbf7] p-3 rounded-xl border border-navy/5 animate-fadeIn">
          <div>
            <span className="text-navy/50 text-[10px] uppercase font-bold block">Beneficiario</span>
            <span className="text-navy font-bold">{details.recipient}</span>
          </div>

          {details.bankName && (
            <div>
              <span className="text-navy/50 text-[10px] uppercase font-bold block">Banco</span>
              <span>{details.bankName}</span>
            </div>
          )}

          {details.idNumber && (
            <div>
              <span className="text-navy/50 text-[10px] uppercase font-bold block">
                {selectedCountry === "Chile" ? "RUT" : "Cédula / ID"}
              </span>
              <span className="font-mono text-[11px] select-all">{details.idNumber}</span>
            </div>
          )}

          {details.accountNumber && (
            <div>
              <span className="text-navy/50 text-[10px] uppercase font-bold block">Número de Cuenta</span>
              <span className="font-mono text-[11px] break-all select-all block bg-white px-2 py-1 rounded border border-navy/5 mt-0.5">
                {details.accountNumber}
              </span>
            </div>
          )}

          {details.phone && (
            <div>
              <span className="text-navy/50 text-[10px] uppercase font-bold block">Teléfono móvil</span>
              <span className="font-mono">{details.phone}</span>
            </div>
          )}

          {details.email && (
            <div>
              <span className="text-navy/50 text-[10px] uppercase font-bold block">Correo electrónico</span>
              <span className="font-mono select-all text-teal">{details.email}</span>
            </div>
          )}

          {details.notes && (
            <div className="mt-2 pt-2 border-t border-navy/5 text-[10px] text-navy/60 italic leading-snug">
              <strong>Nota:</strong> {details.notes}
            </div>
          )}
        </div>
      ) : (
        <p className="text-[10px] text-navy/40 italic text-center py-4">
          Selecciona un país para ver los datos de transferencia.
        </p>
      )}
    </div>
  );
}