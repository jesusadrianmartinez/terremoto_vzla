"use client";

import { Users } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { useGetCollaboratorsDataQuery } from "@/redux/services/tablesApi";
import { volunteerHeadersTranslations } from "@/data/tables/volunteersTable";

export function VolunteersTable() {
  const { data: collaboratorsData } = useGetCollaboratorsDataQuery(null);
  const language =
    useAppSelector((state) => state.languageReducer.language) || "es";

  const t =
    volunteerHeadersTranslations[language] || volunteerHeadersTranslations.es;

  return (
    <div className="space-y-2">
      <h4 className="text-[10px] font-black uppercase tracking-wider text-navy/60 flex items-center gap-1.5">
        <Users size={11} className="text-teal" />
        <span>{t.title}</span>
      </h4>
      <div className="overflow-x-auto rounded-xl border border-navy/10 bg-white shadow-2xs">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-navy/5 text-navy font-bold border-b border-navy/10">
              <th className="p-2 text-[11px]">{t.volunteer}</th>
              <th className="p-2 text-[11px]">{t.location}</th>
              <th className="p-2 text-[11px]">{t.supportProposed}</th>
              <th className="p-2 text-[11px]">{t.phone}</th>
            </tr>
          </thead>
          <tbody className="text-navy/80 divide-y divide-navy/5">
            {collaboratorsData?.map((row: any, idx: number) => (
              <tr key={idx} className="hover:bg-cream/40">
                <td className="p-2 font-bold text-[11px] text-navy">
                  {row.volunteer}
                </td>
                <td className="p-2 text-[11px] text-navy/70">{row.location}</td>
                <td
                  className="p-2 text-[11px] font-medium text-teal truncate max-w-30"
                  title={row.support_proposed}
                >
                  {row.support_proposed}
                </td>
                <td className="p-2 font-mono text-[10px] text-navy/50">
                  {row.phone}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
