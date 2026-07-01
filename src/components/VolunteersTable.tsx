"use client";

import { useState } from "react";
import { Users } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { useGetCollaboratorsDataQuery } from "@/redux/services/tablesApi";
import { volunteerHeadersTranslations } from "@/data/tables/volunteersTable";

// Reutilizamos el mapa de traducción para los botones inferiores
const paginationLabels = {
  es: { next: "Siguiente", prev: "Anterior", page: "Página" },
  en: { next: "Next", prev: "Previous", page: "Page" },
  fr: { next: "Suivant", prev: "Précédent", page: "Page" },
};

export function VolunteersTable() {
  const { data: collaboratorsData } = useGetCollaboratorsDataQuery(null);
  const language =
    useAppSelector((state) => state.languageReducer.language) || "es";

  const t =
    volunteerHeadersTranslations[language] || volunteerHeadersTranslations.es;
  const pg = paginationLabels[language] || paginationLabels.es;

  // Estado para controlar la paginación (5 filas por página)
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Cálculos seguros para la segmentación de la data
  const totalRows = collaboratorsData?.length || 0;
  const totalPages = Math.ceil(totalRows / rowsPerPage) || 1;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows =
    collaboratorsData?.slice(indexOfFirstRow, indexOfLastRow) || [];

  return (
    <div className="space-y-2">
      <h4 className="text-[10px] font-black uppercase tracking-wider text-navy/60 flex items-center gap-1.5">
        <Users size={11} className="text-teal" />
        <span>{t.title}</span>
      </h4>

      <div className="overflow-x-auto rounded-xl border border-navy/10 bg-white shadow-2xs">
        {/* Contenedor del scroll vertical */}
        <div className="max-h-80 overflow-y-auto scrollbar-thin">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="sticky top-0 z-10 bg-[#fcfbf7] shadow-[0_1px_0_0_rgba(20,27,53,0.1)]">
              <tr className="text-navy font-bold">
                <th className="p-2.5 text-[11px]">{t.volunteer}</th>
                <th className="p-2.5 text-[11px]">{t.location}</th>
                <th className="p-2.5 text-[11px]">{t.supportProposed}</th>
                <th className="p-2.5 text-[11px]">{t.phone}</th>
              </tr>
            </thead>
            <tbody className="text-navy/80 divide-y divide-navy/5">
              {currentRows.map((row: any, idx: number) => (
                <tr key={idx} className="hover:bg-cream/30 transition-colors">
                  <td className="p-2.5 font-bold text-[11px] text-navy whitespace-nowrap">
                    {row.volunteer}
                  </td>
                  <td className="p-2.5 text-[11px] text-navy/70 whitespace-nowrap">
                    {row.location}
                  </td>
                  <td
                    className="p-2.5 text-[11px] font-medium text-teal truncate max-w-30"
                    title={row.support_proposed}
                  >
                    {row.support_proposed}
                  </td>
                  <td className="p-2.5 font-mono text-[10px] text-navy/50 whitespace-nowrap">
                    {row.phone}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pie de tabla con controles de paginación condicional */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between border-t border-navy/10 px-3 py-2 bg-navy/2 text-[11px]">
            <span className="text-navy/60 font-medium">
              {pg.page} {currentPage} / {totalPages}
            </span>
            <div className="flex gap-1">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-2.5 py-1 rounded-lg border border-navy/10 font-bold bg-white text-navy/80 hover:bg-navy/5 disabled:opacity-40 disabled:hover:bg-white transition-colors"
              >
                {pg.prev}
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-2.5 py-1 rounded-lg border border-navy/10 font-bold bg-white text-navy/80 hover:bg-navy/5 disabled:opacity-40 disabled:hover:bg-white transition-colors"
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
