"use client";

import { useAppSelector } from "@/redux/hooks";
import { useGetBalancesDataQuery } from "@/redux/services/tablesApi";
import {
  tableHeadersTranslations,
  statusTranslations,
} from "@/data/tables/transparencyTable";

export function TransparencyTable() {
  const { data: balancesData } = useGetBalancesDataQuery(null);
  const language =
    useAppSelector((state) => state.languageReducer.language) || "es";

  const t = tableHeadersTranslations[language] || tableHeadersTranslations.es;
  const statusMap = statusTranslations[language] || statusTranslations.es;

  return (
    <div className="space-y-2">
      <h4 className="text-[10px] font-black uppercase tracking-wider text-navy/60">
        {t.title}
      </h4>
      <div className="overflow-x-auto rounded-xl border border-navy/10 bg-white shadow-xs">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-navy/5 text-navy font-bold border-b border-navy/10">
              <th className="p-2">{t.date}</th>
              <th className="p-2">{t.concept}</th>
              <th className="p-2">{t.amount}</th>
              <th className="p-2">{t.currency}</th>
              <th className="p-2">{t.status}</th>
            </tr>
          </thead>
          <tbody className="text-navy/80 divide-y divide-navy/5">
            {balancesData?.map((row: any, idx: any) => {
              // Validamos de forma segura si el estado es de tipo entrada o salida
              const isReceived =
                row.status === "Recibido" || row.status === "Received";
              // Traducimos el estado dinámico de la API usando el mapa de recursos
              const translatedStatus = statusMap[row.status] || row.status;

              return (
                <tr key={idx} className="hover:bg-cream/40">
                  <td className="p-2 font-mono text-[11px]">{row.date}</td>
                  <td className="p-2 font-medium">{row.concept}</td>
                  <td
                    className={`p-2 font-bold ${isReceived ? "text-teal" : "text-coral"}`}
                  >
                    {row.amount}
                  </td>
                  <td className="p-2 font-medium">{row.currency}</td>
                  <td className="p-2">
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${
                        isReceived
                          ? "bg-teal/10 text-teal"
                          : "bg-coral/10 text-coral"
                      }`}
                    >
                      {translatedStatus}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
