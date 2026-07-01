"use client";

import { useState } from "react";
import { HandCoins } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { useGetBalancesDataQuery } from "@/redux/services/tablesApi";
import {
  tableHeadersTranslations,
  statusTranslations,
} from "@/data/tables/transparencyTable";

const paginationLabels = {
  es: { next: "Siguiente", prev: "Anterior", page: "Página" },
  en: { next: "Next", prev: "Previous", page: "Page" },
  fr: { next: "Suivant", prev: "Précédent", page: "Page" },
};

export function TransparencyTable() {
  const { data: balancesData } = useGetBalancesDataQuery(null);
  const language =
    useAppSelector((state) => state.languageReducer.language) || "es";

  const t = tableHeadersTranslations[language] || tableHeadersTranslations.es;
  const statusMap = statusTranslations[language] || statusTranslations.es;
  const pg = paginationLabels[language] || paginationLabels.es;

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const totalRows = balancesData?.length || 0;
  const totalPages = Math.ceil(totalRows / rowsPerPage) || 1;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows =
    balancesData?.slice(indexOfFirstRow, indexOfLastRow) || [];

  return (
    <div className="space-y-2">
      <h4 className="text-[10px] font-black uppercase tracking-wider text-navy/60 flex items-center gap-1.5">
        <HandCoins size={11} className="text-teal" />
        {t.title}
      </h4>

      {/* Contenedor principal con control estricto de scroll según el ancho < 480px */}
      <div className=" rounded-xl border border-navy/10 bg-white shadow-xs p-1 sm:p-0">
        <table className="w-full text-left text-xs">
          <thead className="sticky top-0 z-10 bg-[#fcfbf7] shadow-[0_1px_0_0_rgba(20,27,53,0.1)]">
            <tr className="text-navy font-bold">
              <th className="p-2 sm:p-2.5 xs:whitespace-nowrap">{t.date}</th>
              <th className="p-2 sm:p-2.5">{t.concept}</th>
              <th className="p-2 sm:p-2.5 xs:whitespace-nowrap">{t.amount}</th>
              <th className="p-2 sm:p-2.5 xs:whitespace-nowrap">
                {t.currency}
              </th>
              <th className="p-2 sm:p-2.5 xs:whitespace-nowrap">{t.status}</th>
            </tr>
          </thead>
          <tbody className="text-navy/80 divide-y divide-navy/5">
            {currentRows.map((row: any, idx: any) => {
              const isReceived =
                row.status === "Recibido" || row.status === "Received";
              const translatedStatus = statusMap[row.status] || row.status;

              return (
                <tr key={idx} className="hover:bg-cream/30 transition-colors">
                  <td className="p-2 sm:p-2.5 font-mono text-[10px] sm:text-[11px] xs:whitespace-nowrap">
                    {row.date}
                  </td>
                  <td className="p-2 sm:p-2.5 font-medium" title={row.concept}>
                    {row.concept}
                  </td>
                  <td
                    className={`p-2 sm:p-2.5 font-bold xs:whitespace-nowrap ${isReceived ? "text-teal" : "text-coral"}`}
                  >
                    {row.amount}
                  </td>
                  <td className="p-2 sm:p-2.5 font-medium xs:whitespace-nowrap">
                    {row.currency}
                  </td>
                  <td className="p-2 sm:p-2.5 xs:whitespace-nowrap">
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

        {/* Paginación interna */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between border-t border-navy/10 px-3 py-2 bg-navy/2 text-[11px]">
            <span className="text-navy/60 font-medium">
              {pg.page} {currentPage} / {totalPages}
            </span>
            <div className="flex gap-1">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-2 py-1 rounded-lg border border-navy/10 font-bold bg-white text-navy/80 hover:bg-navy/5 disabled:opacity-40 disabled:hover:bg-white transition-colors"
              >
                {pg.prev}
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-2 py-1 rounded-lg border border-navy/10 font-bold bg-white text-navy/80 hover:bg-navy/5 disabled:opacity-40 disabled:hover:bg-white transition-colors"
              >
                {pg.next}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
